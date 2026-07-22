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
 * @param paired         When true, First/Last name and City/State/ZIP render as
 *                       multi-column rows (used in the hero form cards).
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

      <div className={paired ? "form-row-2col" : "form-row-flat"}>
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
      </div>
      <Field id="phone" label="Mobile phone" required error={fieldErrors.phone}>
        <input id="field-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" />
      </Field>
      <Field id="email" label="Email" required error={fieldErrors.email}>
        <input id="field-email" name="email" type="email" inputMode="email" required autoComplete="email" />
      </Field>

      <Field id="customerType" label="Property type" required error={fieldErrors.customerType}>
        <select id="field-customerType" name="customerType" required defaultValue="residential">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
      </Field>

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

      <Field id="problemDescription" label="Describe the problem" required error={fieldErrors.problemDescription}>
        <textarea id="field-problemDescription" name="problemDescription" required rows={4} />
      </Field>

      <Field id="streetAddress" label="Service street address" required error={fieldErrors.streetAddress}>
        <input id="field-streetAddress" name="streetAddress" required autoComplete="address-line1" />
      </Field>
      <div className={paired ? "form-row-3col" : "form-row-flat"}>
        <Field id="city" label="City" required error={fieldErrors.city}>
          <input
            id="field-city"
            name="city"
            required
            autoComplete="address-level2"
            aria-describedby={describe("city")}
          />
        </Field>
        <Field id="state" label="State" required error={fieldErrors.state}>
          <input
            id="field-state"
            name="state"
            required
            maxLength={2}
            autoComplete="address-level1"
            aria-describedby={describe("state")}
          />
        </Field>
        <Field id="postalCode" label="ZIP code" required error={fieldErrors.postalCode}>
          <input
            id="field-postalCode"
            name="postalCode"
            required
            inputMode="numeric"
            autoComplete="postal-code"
            aria-describedby={describe("postalCode")}
          />
        </Field>
      </div>

      <fieldset>
        <legend>Preferred contact method</legend>
        <label>
          <input type="radio" name="preferredContactMethod" value="phone" defaultChecked /> Phone
        </label>{" "}
        <label>
          <input type="radio" name="preferredContactMethod" value="text" /> Text
        </label>{" "}
        <label>
          <input type="radio" name="preferredContactMethod" value="email" /> Email
        </label>
      </fieldset>

      <p>
        <label>
          <input type="checkbox" name="serviceConsent" required /> I agree to be contacted by{" "}
          {businessName} about my service request by phone or email.
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" name="smsConsent" /> I agree to receive recurring automated
          promotional and personalized text messages from {businessName} at the mobile number
          provided. Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg
          frequency varies. Reply STOP to opt-out or HELP for help.
        </label>
      </p>

      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", textAlign: "center" }}>
        <a href="/privacy-policy/">Privacy Policy</a> and <a href="/terms/">Terms of Service</a>.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
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
    </form>
  );
}
