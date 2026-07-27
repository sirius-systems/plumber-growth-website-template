"use client";

import { useMemo } from "react";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import { useFormSubmit } from "@/lib/forms/useFormSubmit";
import { Field, ErrorSummary, Honeypot } from "@/components/forms/Field";
import { Button } from "@/components/ui/Button";

/**
 * General Plumbing Quote Request form (docs/08 §9). The site's primary lead form:
 * embedded directly in every page hero (there is no separate /request-service/
 * route). Submits general-quote and, on server acceptance, redirects to the
 * thank-you confirmation (docs/04 §23).
 *
 * @param paired         When true, paired fields (e.g. First/Last name) expose
 *                       inline error references (used in the hero form cards).
 * @param defaultService Optional service slug to preselect (e.g. on a service hero).
 */
export function GeneralQuoteForm({
  paired = false,
  defaultService,
}: {
  paired?: boolean;
  defaultService?: string;
} = {}) {
  const services = useMemo(() => enabledServices(), []);
  const businessName = clientConfig.business.publicName;
  const validPreselect =
    defaultService && services.some((s) => s.slug === defaultService) ? defaultService : "";

  const { status, message, fieldErrors, summaryRef, submit } = useFormSubmit("general-quote", {
    redirectTo: "/thank-you/?type=general-quote",
  });
  const describe = (field: string) =>
    paired && fieldErrors[field] ? `error-${field}` : undefined;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    await submit({
      ...data,
      serviceConsent: data.serviceConsent === "on",
      smsConsent: data.smsConsent === "on",
      marketingConsent: data.marketingConsent === "on",
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ErrorSummary summaryRef={summaryRef} message={message} fieldErrors={fieldErrors} />
      <Honeypot />

      <div className="quote-form-grid">
        <Field id="firstName" label="First name" required error={fieldErrors.firstName}>
          <input
            id="field-firstName"
            name="firstName"
            required
            autoComplete="given-name"
            aria-describedby={describe("firstName")}
          />
        </Field>
        <Field id="lastName" label="Last name" required error={fieldErrors.lastName}>
          <input
            id="field-lastName"
            name="lastName"
            required
            autoComplete="family-name"
            aria-describedby={describe("lastName")}
          />
        </Field>

        {/* Row 2: Phone paired with the Preferred contact method radios. */}
        <Field id="phone" label="Phone" required error={fieldErrors.phone}>
          <input id="field-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" />
        </Field>
        <fieldset>
          <legend>Preferred contact method</legend>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)" }}>
            <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}>
              <input type="radio" name="preferredContactMethod" value="phone" defaultChecked />
              Phone
            </label>
            <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}>
              <input type="radio" name="preferredContactMethod" value="text" />
              Text
            </label>
          </div>
        </fieldset>

        {/* Row 3: Service needed paired with Property type. */}
        <Field id="plumbingService" label="Service needed" required error={fieldErrors.plumbingService}>
          <select id="field-plumbingService" name="plumbingService" required defaultValue={validPreselect}>
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Other plumbing service</option>
          </select>
        </Field>
        <Field id="customerType" label="Property type" required error={fieldErrors.customerType}>
          <select id="field-customerType" name="customerType" required defaultValue="residential">
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </Field>

        <div className="col-full">
          <Field id="problemDescription" label="Describe the problem" required error={fieldErrors.problemDescription}>
            <textarea id="field-problemDescription" name="problemDescription" required rows={4} />
          </Field>
        </div>

        <p className="col-full">
          <label>
            <input type="checkbox" name="serviceConsent" required /> I agree to be contacted by{" "}
            {businessName} about my service request by phone or text message.
          </label>
        </p>
        <p className="col-full">
          <label>
            <input type="checkbox" name="smsConsent" /> I agree to receive recurring automated
            promotional and personalized text messages from {businessName} at the mobile number
            provided. Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg
            frequency varies. Reply STOP to opt-out or HELP for help.
          </label>
        </p>

        <p
          className="col-full"
          style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", textAlign: "center" }}
        >
          <a href="/privacy-policy/">Privacy Policy</a> and <a href="/terms/">Terms of Service</a>.
        </p>

        <div className="col-full" style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="accent"
            loading={status === "submitting"}
            loadingText="Submitting…"
            style={{ minWidth: "200px" }}
          >
            Request Service
          </Button>
        </div>
      </div>
    </form>
  );
}
