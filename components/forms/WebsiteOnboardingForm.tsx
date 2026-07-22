"use client";

import { clientConfig } from "@/config/client";
import { useFormSubmit } from "@/lib/forms/useFormSubmit";
import { Field, ErrorSummary, Honeypot } from "@/components/forms/Field";

/**
 * Website Onboarding Form (docs/08 §13, docs/04 §22). Collects business identity
 * and the three required acknowledgments the endpoint schema mandates. It NEVER
 * requests passwords (docs/06 §32) — public file uploads are disabled in v1
 * (FORM-004), so logo delivery is handled separately (see the page copy).
 *
 * Field names and the acknowledgment booleans match websiteOnboardingSchema
 * exactly; the schema is authoritative and unchanged.
 */
export function WebsiteOnboardingForm() {
  const { status, message, fieldErrors, summaryRef, submit } = useFormSubmit("website-onboarding");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    await submit({
      ...data,
      accuracyAcknowledged: data.accuracyAcknowledged === "on",
      passwordProhibitionAcknowledged: data.passwordProhibitionAcknowledged === "on",
      scopeAcknowledged: data.scopeAcknowledged === "on",
    });
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <h2>Onboarding submission received</h2>
        <p>
          Thank you. Your onboarding details were received and the {clientConfig.business.publicName}{" "}
          / Sirius Systems team will be in touch to confirm next steps. Please do not send any
          passwords, we will never ask for them.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ErrorSummary summaryRef={summaryRef} message={message} fieldErrors={fieldErrors} />
      <Honeypot />

      <Field id="legalBusinessName" label="Legal business name" required error={fieldErrors.legalBusinessName}>
        <input id="field-legalBusinessName" name="legalBusinessName" required autoComplete="organization" />
      </Field>
      <Field id="publicBusinessName" label="Public business name" required error={fieldErrors.publicBusinessName}>
        <input id="field-publicBusinessName" name="publicBusinessName" required autoComplete="organization" />
      </Field>
      <Field id="ownerName" label="Owner name" required error={fieldErrors.ownerName}>
        <input id="field-ownerName" name="ownerName" required autoComplete="name" />
      </Field>
      <Field id="primaryContactEmail" label="Primary contact email" required error={fieldErrors.primaryContactEmail}>
        <input
          id="field-primaryContactEmail"
          name="primaryContactEmail"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
        />
      </Field>
      <Field id="primaryContactPhone" label="Primary contact phone" required error={fieldErrors.primaryContactPhone}>
        <input
          id="field-primaryContactPhone"
          name="primaryContactPhone"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
        />
      </Field>
      <Field
        id="authorizedApprover"
        label="Authorized approver"
        hint="The person authorized to approve website content."
        required
        error={fieldErrors.authorizedApprover}
      >
        <input id="field-authorizedApprover" name="authorizedApprover" required />
      </Field>

      <fieldset style={{ marginTop: "var(--space-4)" }}>
        <legend>Acknowledgments</legend>
        <p>
          <label>
            <input type="checkbox" name="accuracyAcknowledged" required /> I confirm the information
            provided is accurate to the best of my knowledge.
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="passwordProhibitionAcknowledged" required /> I understand I
            should not submit any passwords through this form.
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="scopeAcknowledged" required /> I understand this submission
            begins the onboarding process and does not itself launch a website.
          </label>
        </p>
      </fieldset>

      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
        See our <a href="/privacy-policy/">Privacy Policy</a>.
      </p>

      <button className="btn btn--primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Onboarding"}
      </button>
    </form>
  );
}
