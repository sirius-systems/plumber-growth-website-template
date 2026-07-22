"use client";

import { useFormSubmit } from "@/lib/forms/useFormSubmit";
import { Field, ErrorSummary, Honeypot } from "@/components/forms/Field";

/**
 * Contact Form (docs/08 §11, docs/11 §11). Subject selection drives server-side
 * opportunity routing — only service/financing subjects create an opportunity
 * (docs/08 §11.7); administrative subjects do not.
 */
const SUBJECTS: { value: string; label: string }[] = [
  { value: "plumbing-service-question", label: "Plumbing service question" },
  { value: "existing-appointment", label: "Existing appointment" },
  { value: "existing-customer-support", label: "Existing customer support" },
  { value: "billing-question", label: "Billing question" },
  { value: "financing-question", label: "Financing question" },
  { value: "vendor-inquiry", label: "Vendor inquiry" },
  { value: "employment-inquiry", label: "Employment inquiry" },
  { value: "general-question", label: "General question" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  // On server acceptance, redirect to the contact confirmation (docs/04 §23).
  const { status, message, fieldErrors, summaryRef, submit } = useFormSubmit("contact", {
    redirectTo: "/thank-you/?type=contact",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    await submit({
      ...data,
      serviceConsent: data.serviceConsent === "on",
      marketingConsent: data.marketingConsent === "on",
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ErrorSummary summaryRef={summaryRef} message={message} fieldErrors={fieldErrors} />
      <Honeypot />

      <div className="form-row-2col">
        <Field id="firstName" label="First name" required error={fieldErrors.firstName}>
          <input id="field-firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field id="lastName" label="Last name" required error={fieldErrors.lastName}>
          <input id="field-lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>
      <div className="form-row-2col">
        <Field id="phone" label="Phone (optional)" error={fieldErrors.phone}>
          <input id="field-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" />
        </Field>
        <Field id="email" label="Email" required error={fieldErrors.email}>
          <input id="field-email" name="email" type="email" inputMode="email" required autoComplete="email" />
        </Field>
      </div>

      <Field id="subject" label="Subject" required error={fieldErrors.subject}>
        <select id="field-subject" name="subject" required defaultValue="">
          <option value="" disabled>
            Choose a subject
          </option>
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" required error={fieldErrors.message}>
        <textarea id="field-message" name="message" required rows={5} />
      </Field>

      <fieldset>
        <legend>Preferred contact method</legend>
        <label>
          <input type="radio" name="preferredContactMethod" value="email" defaultChecked /> Email
        </label>{" "}
        <label>
          <input type="radio" name="preferredContactMethod" value="phone" /> Phone
        </label>{" "}
        <label>
          <input type="radio" name="preferredContactMethod" value="text" /> Text
        </label>
      </fieldset>

      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
        By submitting you agree to our <a href="/privacy-policy/">Privacy Policy</a>.
      </p>

      <button className="btn btn--primary btn--block" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit Request"}
      </button>
    </form>
  );
}
