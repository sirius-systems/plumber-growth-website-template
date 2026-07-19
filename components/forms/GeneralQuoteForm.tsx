"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { enabledServices } from "@/config/services";
import { clientConfig } from "@/config/client";
import { formatPhoneDisplay, telHref } from "@/lib/utilities/format";
import { useFormSubmit } from "@/lib/forms/useFormSubmit";
import { Field, ErrorSummary, Honeypot } from "@/components/forms/Field";

/**
 * General Plumbing Quote Request form (docs/08 §9). Reference implementation for
 * the other four forms: native controls, shared submit hook, accessible errors,
 * honeypot, duplicate-submit protection, service preselection (docs/08 §9.7).
 */
export function GeneralQuoteForm() {
  const searchParams = useSearchParams();
  const services = useMemo(() => enabledServices(), []);
  const preselected = searchParams.get("service") ?? "";
  const validPreselect = services.some((s) => s.slug === preselected) ? preselected : "";

  const { status, message, fieldErrors, summaryRef, submit } = useFormSubmit("general-quote");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    await submit({
      ...data,
      serviceConsent: data.serviceConsent === "on",
      marketingConsent: data.marketingConsent === "on",
    });
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <h2>Request received</h2>
        <p>
          Thank you. {clientConfig.business.publicName} received your plumbing service
          request and a team member will review it. Your requested date is not confirmed
          until the company contacts you.
        </p>
        <p>
          Need help sooner?{" "}
          <a href={telHref(clientConfig.business.phone)}>
            Call {formatPhoneDisplay(clientConfig.business.phone)}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ErrorSummary summaryRef={summaryRef} message={message} fieldErrors={fieldErrors} />
      <Honeypot />

      <Field id="firstName" label="First name" required error={fieldErrors.firstName}>
        <input id="field-firstName" name="firstName" required autoComplete="given-name" />
      </Field>
      <Field id="lastName" label="Last name" required error={fieldErrors.lastName}>
        <input id="field-lastName" name="lastName" required autoComplete="family-name" />
      </Field>
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
      <Field id="city" label="City" required error={fieldErrors.city}>
        <input id="field-city" name="city" required autoComplete="address-level2" />
      </Field>
      <Field id="state" label="State" required error={fieldErrors.state}>
        <input id="field-state" name="state" required maxLength={2} autoComplete="address-level1" />
      </Field>
      <Field id="postalCode" label="ZIP code" required error={fieldErrors.postalCode}>
        <input id="field-postalCode" name="postalCode" required inputMode="numeric" autoComplete="postal-code" />
      </Field>

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
          <input type="checkbox" name="serviceConsent" /> I agree to be contacted about this
          service request.
        </label>
      </p>

      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
        See our <a href="/privacy-policy/">Privacy Policy</a>.
      </p>

      <button className="btn btn--primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Request Service"}
      </button>
    </form>
  );
}
