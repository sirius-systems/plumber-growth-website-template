/**
 * Trusted form-processing endpoint (docs/05 ADR-003, docs/08 §3–§5, docs/11 §19).
 *
 * Cloudflare Pages Function — runs server-side with access to private secrets.
 * Pipeline: method/content-type/size → honeypot → Turnstile → schema validation
 * → GHL delivery → safe response. Private credentials never reach the browser.
 */

import { formSchemas, isFormId, type FormId } from "@/lib/forms/schemas";
import { loadGhlConfig, GhlConfigError, type GhlEnv } from "@/lib/ghl/field-map";
import { deliverSubmission } from "@/lib/ghl/client";

interface Env extends GhlEnv {
  TURNSTILE_SECRET_KEY?: string;
}

const MAX_BODY_BYTES = 100_000;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function lastSegment(param: string | string[] | undefined): string {
  if (Array.isArray(param)) return param[param.length - 1] ?? "";
  return param ?? "";
}

async function verifyTurnstile(secret: string, token: string, ip?: string): Promise<boolean> {
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context;

  const formId = lastSegment(params.form);
  if (!isFormId(formId)) {
    return json({ ok: false, code: "FORM_UNSUPPORTED" }, 404);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, code: "FORM_INVALID_CONTENT_TYPE" }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, code: "FORM_REQUEST_TOO_LARGE" }, 413);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return json({ ok: false, code: "FORM_VALIDATION_FAILED", message: "Malformed request." }, 400);
  }

  // Honeypot (docs/08 §5) — respond as if accepted; do not deliver.
  if (parsed && typeof parsed === "object" && "website" in parsed) {
    const hp = (parsed as Record<string, unknown>).website;
    if (typeof hp === "string" && hp.length > 0) {
      return json({ ok: true, next: "/thank-you/" }, 200);
    }
  }

  // Turnstile (docs/08 §15) — verified server-side, always.
  if (!env.TURNSTILE_SECRET_KEY) {
    return json({ ok: false, code: "FORM_CONFIGURATION_ERROR" }, 500);
  }
  const token =
    parsed && typeof parsed === "object"
      ? (parsed as Record<string, unknown>).turnstileToken
      : undefined;
  const turnstileOk =
    typeof token === "string" &&
    (await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, request.headers.get("CF-Connecting-IP") ?? undefined));
  if (!turnstileOk) {
    return json({ ok: false, code: "FORM_VERIFICATION_FAILED", message: "We could not verify the submission. Please try again." }, 403);
  }

  // Authoritative schema validation (docs/05 §13).
  const result = formSchemas[formId as FormId].safeParse(parsed);
  if (!result.success) {
    const flat = result.error.flatten().fieldErrors;
    const fieldErrors: Record<string, string> = {};
    for (const [key, messages] of Object.entries(flat)) {
      if (messages && messages.length > 0) fieldErrors[key] = messages[0]!;
    }
    return json(
      { ok: false, code: "FORM_VALIDATION_FAILED", message: "Please correct the highlighted fields.", fieldErrors },
      422,
    );
  }

  // GHL delivery (docs/11 §18–§19).
  let config;
  try {
    config = loadGhlConfig(env);
  } catch (err) {
    if (err instanceof GhlConfigError) {
      return json({ ok: false, code: "FORM_CONFIGURATION_ERROR" }, 500);
    }
    return json({ ok: false, code: "FORM_UNEXPECTED_ERROR" }, 500);
  }

  const delivery = await deliverSubmission(config, formId as FormId, result.data as Record<string, unknown>);
  if (!delivery.ok) {
    return json({ ok: false, code: delivery.code ?? "FORM_DELIVERY_FAILED", message: "We couldn’t submit your request online. Please call the business directly." }, 502);
  }

  return json({ ok: true, submissionId: (result.data as { submissionId?: string }).submissionId, next: `/thank-you/?type=${formId}` }, 200);
};
