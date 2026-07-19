"use client";

import { useState } from "react";
import { clientConfig } from "@/config/client";
import { formatPhoneDisplay, telHref } from "@/lib/utilities/format";
import { useFormSubmit } from "@/lib/forms/useFormSubmit";
import { Field, ErrorSummary, Honeypot } from "@/components/forms/Field";

/**
 * Emergency Plumbing Request form (docs/08 §10, docs/14 §31).
 * Conditional safety messaging for gas odor / electrical danger / active flooding
 * (docs/08 §10.8). Never implies dispatch; keeps the call action prominent.
 */
const EMERGENCY_TYPES: { value: string; label: string }[] = [
  { value: "active-water-leak", label: "Active water leak" },
  { value: "burst-pipe", label: "Burst pipe" },
  { value: "sewer-backup", label: "Sewer backup" },
  { value: "overflowing-fixture", label: "Overflowing fixture" },
  { value: "no-water", label: "No water" },
  { value: "no-hot-water", label: "No hot water" },
  { value: "water-heater-leak", label: "Water heater leak" },
  { value: "gas-odor", label: "Gas odor" },
  { value: "other-urgent-plumbing", label: "Other urgent plumbing issue" },
];

type Tri = "yes" | "no" | "unsure" | "";

function TriRadio({
  id,
  legend,
  value,
  onChange,
}: {
  id: string;
  legend: string;
  value: Tri;
  onChange: (v: Tri) => void;
}) {
  return (
    <fieldset>
      <legend>
        {legend} <span aria-hidden="true">*</span>
      </legend>
      {(["yes", "no", "unsure"] as const).map((opt) => (
        <label key={opt} style={{ marginRight: "var(--space-4)" }}>
          <input
            type="radio"
            name={id}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            required
          />{" "}
          {opt === "unsure" ? "Not sure" : opt.charAt(0).toUpperCase() + opt.slice(1)}
        </label>
      ))}
    </fieldset>
  );
}

const CallAction = () => (
  <a className="btn btn--primary" href={telHref(clientConfig.business.phone)}>
    Call {formatPhoneDisplay(clientConfig.business.phone)}
  </a>
);

export function EmergencyRequestForm() {
  const { status, message, fieldErrors, summaryRef, submit } = useFormSubmit("emergency-request");
  const [gasOdor, setGasOdor] = useState<Tri>("");
  const [electricalDanger, setElectricalDanger] = useState<Tri>("");
  const [activeFlooding, setActiveFlooding] = useState<Tri>("");
  const [waterShutOff, setWaterShutOff] = useState<Tri>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    await submit({
      ...data,
      safetyAcknowledgment: data.safetyAcknowledgment === "on",
      serviceConsent: data.serviceConsent === "on",
    });
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <h2>Emergency request received</h2>
        <p>
          {clientConfig.business.publicName} received your emergency plumbing request. This
          message does not confirm technician availability or dispatch. Please call for the
          fastest available response.
        </p>
        <p>
          If there is an immediate danger involving gas, fire, electricity, serious injury,
          life, or property, contact the appropriate emergency service or utility provider.
        </p>
        <p>
          <CallAction />
        </p>
      </div>
    );
  }

  const showGas = gasOdor === "yes" || gasOdor === "unsure";
  const showElectrical = electricalDanger === "yes" || electricalDanger === "unsure";

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

      <Field id="emergencyType" label="What is the emergency?" required error={fieldErrors.emergencyType}>
        <select id="field-emergencyType" name="emergencyType" required defaultValue="">
          <option value="" disabled>
            Choose the closest match
          </option>
          {EMERGENCY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <TriRadio id="gasOdor" legend="Do you smell gas?" value={gasOdor} onChange={setGasOdor} />
      {showGas && (
        <div role="alert" style={{ border: "2px solid var(--color-danger)", borderRadius: "var(--radius-sm)", padding: "var(--space-4)" }}>
          <p style={{ marginTop: 0 }}>
            Leave the affected area and contact the appropriate gas utility or emergency service
            from a safe location. Do not rely on this website form for an immediate gas-related
            emergency response.
          </p>
          <CallAction />
        </div>
      )}

      <TriRadio id="electricalDanger" legend="Is water near electrical equipment or is there an electrical hazard?" value={electricalDanger} onChange={setElectricalDanger} />
      {showElectrical && (
        <div role="alert" style={{ border: "2px solid var(--color-danger)", borderRadius: "var(--radius-sm)", padding: "var(--space-4)" }}>
          <p style={{ marginTop: 0 }}>
            If there is an immediate electrical danger, avoid the affected area and contact the
            appropriate emergency service or qualified utility provider.
          </p>
        </div>
      )}

      <TriRadio id="activeFlooding" legend="Is water actively flooding?" value={activeFlooding} onChange={setActiveFlooding} />
      {activeFlooding === "yes" && (
        <p>
          For active flooding, calling is the fastest way to reach us. <CallAction />
        </p>
      )}

      <TriRadio id="waterShutOff" legend="Is the water shut off?" value={waterShutOff} onChange={setWaterShutOff} />

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

      <Field id="problemDescription" label="Describe the emergency" required error={fieldErrors.problemDescription}>
        <textarea id="field-problemDescription" name="problemDescription" required rows={4} />
      </Field>

      <fieldset>
        <legend>Preferred contact method</legend>
        <label>
          <input type="radio" name="preferredContactMethod" value="phone" defaultChecked /> Phone
        </label>{" "}
        <label>
          <input type="radio" name="preferredContactMethod" value="text" /> Text
        </label>
      </fieldset>

      <p>
        <label>
          <input type="checkbox" name="safetyAcknowledgment" required /> I understand that
          submitting this form does not guarantee immediate service or confirm that a technician
          has been dispatched.
        </label>
      </p>

      <button className="btn btn--primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Emergency Request"}
      </button>
    </form>
  );
}
