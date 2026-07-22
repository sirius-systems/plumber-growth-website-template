"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { FormId } from "@/lib/forms/schemas";
import { clientConfig } from "@/config/client";
import { formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Shared form-submission controller (docs/05 §10.4). Standardizes envelope
 * generation, POST, states, duplicate protection, error focus, and the
 * server-accepted conversion event — so the five forms don't each re-implement it.
 */
export type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface ApiResult {
  ok: boolean;
  code?: string;
  message?: string;
  fieldErrors?: Record<string, string>;
  next?: string;
}

/** general-quote -> general_quote_submit, emergency-request -> emergency_request_submit, etc. */
function successEventName(formId: FormId): string {
  return `${formId.replace(/-/g, "_")}_submit`;
}

/**
 * @param options.redirectTo When set, a server-accepted submission (ok: true)
 *   navigates here instead of showing the inline success state. The loading
 *   state stays active until navigation; the conversion event fires first.
 *   Redirect never fires on validation, rate-limit, delivery, or network errors
 *   (those resolve to ok: false / the catch branch).
 */
export function useFormSubmit(formId: FormId, options?: { redirectTo?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const idempotencyKey = useRef<string>(crypto.randomUUID());
  const summaryRef = useRef<HTMLDivElement>(null);

  function focusSummary() {
    queueMicrotask(() => summaryRef.current?.focus());
  }

  /** `fields` is the form-specific payload; the hook adds the shared envelope. */
  async function submit(fields: Record<string, unknown>): Promise<void> {
    if (status === "submitting") return;
    setStatus("submitting");
    setFieldErrors({});
    setMessage("");

    const payload = {
      ...fields,
      submissionId: crypto.randomUUID(),
      idempotencyKey: idempotencyKey.current,
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.pathname,
      attribution: { landingPage: window.location.pathname },
    };

    try {
      const res = await fetch(`/api/forms/${formId}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json()) as ApiResult;

      if (result.ok) {
        // Conversion event ONLY after server acceptance (docs/13 §12), fired
        // before any redirect.
        window.dispatchEvent(
          new CustomEvent("pgs:track", { detail: { event: successEventName(formId) } }),
        );
        if (options?.redirectTo) {
          // Keep status "submitting" so the loading state persists until the
          // client-side navigation completes and the form unmounts.
          router.push(options.redirectTo);
          return;
        }
        setStatus("success");
        return;
      }

      setStatus("error");
      setFieldErrors(result.fieldErrors ?? {});
      setMessage(result.message ?? "Please correct the highlighted fields.");
      focusSummary();
    } catch {
      setStatus("error");
      setMessage(
        `We couldn’t submit your request online. Please call ${clientConfig.business.publicName} at ${formatPhoneDisplay(clientConfig.business.phone)}.`,
      );
      focusSummary();
    }
  }

  return { status, message, fieldErrors, summaryRef, submit };
}
