"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Field } from "@/components/forms/Field";
import { HERO_QUOTE_KEY } from "@/components/forms/HeroQuoteForm";

const ISSUE_TYPES = [
  "Emergency repair",
  "Scheduled maintenance",
  "New project or build-out",
  "Ongoing service contract",
  "Other",
];
const PREFERRED_WINDOWS = [
  "As soon as possible",
  "Morning (8am to 12pm)",
  "Afternoon (12pm to 5pm)",
  "After hours / weekend",
  "Flexible",
];

/**
 * Commercial capture form. Separate from HeroQuoteForm. Because the server
 * schema requires address (and doesn't carry company/issue/window custom
 * fields), this form does NOT post directly: it saves entries to sessionStorage
 * — folding company, issue type, and preferred window into the description and
 * setting customerType=commercial — then hands off to /request-service/, where
 * the full form (with address) completes the GHL submission. No schema/adapter
 * change, so no commercial lead can bypass server validation.
 */
export function CommercialQuoteForm() {
  const router = useRouter();
  const uid = useId();
  const [submitting, setSubmitting] = useState(false);
  const fid = (n: string) => `${uid}-${n}`;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(event.currentTarget).entries()) as Record<string, string>;
    const descriptionParts = [
      data.companyName ? `Company/property: ${data.companyName}` : "",
      data.issueType ? `Issue type: ${data.issueType}` : "",
      data.preferredWindow ? `Preferred window: ${data.preferredWindow}` : "",
      data.message ?? "",
    ].filter(Boolean);
    try {
      sessionStorage.setItem(
        HERO_QUOTE_KEY,
        JSON.stringify({
          firstName: data.firstName ?? "",
          lastName: data.lastName ?? "",
          phone: data.phone ?? "",
          email: data.email ?? "",
          problemDescription: descriptionParts.join(". "),
          customerType: "commercial",
        }),
      );
    } catch {
      /* sessionStorage unavailable — continue without prefill. */
    }
    router.push("/request-service/");
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
      <Field id={fid("companyName")} label="Company or property name">
        <input
          id={`field-${fid("companyName")}`}
          name="companyName"
          autoComplete="organization"
          placeholder="Company name or property address"
        />
      </Field>
      <div className="form-row-2col">
        <Field id={fid("phone")} label="Phone" required>
          <input id={`field-${fid("phone")}`} name="phone" type="tel" inputMode="tel" required autoComplete="tel" />
        </Field>
        <Field id={fid("email")} label="Email">
          <input id={`field-${fid("email")}`} name="email" type="email" inputMode="email" autoComplete="email" />
        </Field>
      </div>
      <div className="form-row-2col">
        <Field id={fid("issueType")} label="Issue type" required>
          <select id={`field-${fid("issueType")}`} name="issueType" required defaultValue="">
            <option value="" disabled>
              Select issue type
            </option>
            {ISSUE_TYPES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
        <Field id={fid("preferredWindow")} label="Preferred time">
          <select id={`field-${fid("preferredWindow")}`} name="preferredWindow" defaultValue="">
            <option value="" disabled>
              Select preferred time
            </option>
            {PREFERRED_WINDOWS.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field id={fid("message")} label="Details">
        <textarea
          id={`field-${fid("message")}`}
          name="message"
          rows={3}
          style={{ minHeight: "80px", resize: "vertical" }}
          placeholder="Describe the issue or project"
        />
      </Field>
      <button className="btn btn--accent btn--block" type="submit" disabled={submitting}>
        {submitting ? "Continuing…" : "Request Commercial Service"}
      </button>
      <p style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "var(--space-2)" }}>
        By submitting you agree to our <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
    </form>
  );
}
