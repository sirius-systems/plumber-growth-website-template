"use client";

import { useId, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { enabledServices } from "@/config/services";
import { Field } from "@/components/forms/Field";

/** sessionStorage key the full request form reads to prefill non-address fields. */
export const HERO_QUOTE_KEY = "pgs:hero-quote";

/**
 * Short hero/CTA capture form. To avoid re-typing without putting personal data
 * in the URL, it saves entered fields to sessionStorage and hands off to
 * /request-service/?service=SLUG, where the full form (which the server requires
 * for address) reads them and completes the GHL submission. No direct POST here.
 */
export function HeroQuoteForm({ currentService }: { currentService?: string }) {
  const router = useRouter();
  const uid = useId();
  const services = useMemo(() => enabledServices(), []);
  const [submitting, setSubmitting] = useState(false);
  const preselect = services.some((s) => s.slug === currentService) ? currentService : "";
  const fid = (n: string) => `${uid}-${n}`;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const service = String(data.plumbingService ?? "");
    try {
      sessionStorage.setItem(
        HERO_QUOTE_KEY,
        JSON.stringify({
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          phone: data.phone ?? "",
          problemDescription: data.message ?? "",
        }),
      );
    } catch {
      /* sessionStorage unavailable — continue without prefill. */
    }
    router.push(
      service ? `/request-service/?service=${encodeURIComponent(service)}` : "/request-service/",
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row-2col">
        <Field id={fid("firstName")} label="First name" required>
          <input id={`field-${fid("firstName")}`} name="firstName" required autoComplete="given-name" />
        </Field>
        <Field id={fid("lastName")} label="Last name" required>
          <input id={`field-${fid("lastName")}`} name="lastName" required autoComplete="family-name" />
        </Field>
      </div>
      <div className="form-row-2col">
        <Field id={fid("phone")} label="Phone" required>
          <input
            id={`field-${fid("phone")}`}
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
          />
        </Field>
        <Field id={fid("service")} label="Service needed" required>
          <select id={`field-${fid("service")}`} name="plumbingService" required defaultValue={preselect}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field id={fid("message")} label="How can we help?">
        <textarea
          id={`field-${fid("message")}`}
          name="message"
          rows={3}
          style={{ minHeight: "80px", resize: "vertical" }}
        />
      </Field>
      <button className="btn btn--accent btn--block" type="submit" disabled={submitting}>
        {submitting ? "Continuing…" : "Request Service"}
      </button>
      <p style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "var(--space-2)" }}>
        By submitting you agree to our <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
    </form>
  );
}
