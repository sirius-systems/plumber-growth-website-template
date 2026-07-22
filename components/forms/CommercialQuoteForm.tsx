"use client";

import { useFormSubmit } from "@/lib/forms/useFormSubmit";
import { Field, ErrorSummary, Honeypot } from "@/components/forms/Field";

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
 * Commercial capture form. Submits a general-quote (customerType=commercial) with
 * the server-required address; the commercial-specific fields (company, issue
 * type, preferred window) are folded into the description since the schema has no
 * dedicated fields for them. On server acceptance it redirects to the thank-you
 * confirmation (docs/04 §23). Submission logic/schema are unchanged.
 */
export function CommercialQuoteForm() {
  const { status, message, fieldErrors, summaryRef, submit } = useFormSubmit("general-quote", {
    redirectTo: "/thank-you/?type=general-quote",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries()) as Record<string, string>;
    const problemDescription = [
      data.companyName ? `Company/property: ${data.companyName}` : "",
      data.issueType ? `Issue type: ${data.issueType}` : "",
      data.preferredWindow ? `Preferred window: ${data.preferredWindow}` : "",
      data.message ?? "",
    ]
      .filter(Boolean)
      .join(". ");
    await submit({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      customerType: "commercial",
      plumbingService: "other",
      problemDescription,
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      preferredContactMethod: "phone",
      serviceConsent: data.serviceConsent === "on",
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
      <Field id="companyName" label="Company or property name">
        <input id="field-companyName" name="companyName" autoComplete="organization" placeholder="Company name or property" />
      </Field>
      <div className="form-row-2col">
        <Field id="phone" label="Phone" required error={fieldErrors.phone}>
          <input id="field-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" />
        </Field>
        <Field id="email" label="Email" required error={fieldErrors.email}>
          <input id="field-email" name="email" type="email" inputMode="email" required autoComplete="email" />
        </Field>
      </div>
      <div className="form-row-2col">
        <Field id="issueType" label="Issue type" required>
          <select id="field-issueType" name="issueType" required defaultValue="">
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
        <Field id="preferredWindow" label="Preferred time">
          <select id="field-preferredWindow" name="preferredWindow" defaultValue="">
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

      <Field id="streetAddress" label="Property street address" required error={fieldErrors.streetAddress}>
        <input id="field-streetAddress" name="streetAddress" required autoComplete="address-line1" />
      </Field>
      <div className="form-row-3col">
        <Field id="city" label="City" required error={fieldErrors.city}>
          <input id="field-city" name="city" required autoComplete="address-level2" />
        </Field>
        <Field id="state" label="State" required error={fieldErrors.state}>
          <input id="field-state" name="state" required maxLength={2} autoComplete="address-level1" />
        </Field>
        <Field id="postalCode" label="ZIP code" required error={fieldErrors.postalCode}>
          <input id="field-postalCode" name="postalCode" required inputMode="numeric" autoComplete="postal-code" />
        </Field>
      </div>

      <Field id="message" label="Details" required error={fieldErrors.problemDescription}>
        <textarea id="field-message" name="message" rows={3} style={{ minHeight: "80px", resize: "vertical" }} placeholder="Describe the issue or project" />
      </Field>

      <p>
        <label>
          <input type="checkbox" name="serviceConsent" /> I agree to be contacted about this request.
        </label>
      </p>
      <p style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
        By submitting you agree to our <a href="/privacy-policy/">Privacy Policy</a>.
      </p>

      <button className="btn btn--accent btn--block" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Request Commercial Service"}
      </button>
    </form>
  );
}
