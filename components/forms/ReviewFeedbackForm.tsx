"use client";

import { useState } from "react";
import { clientConfig } from "@/config/client";
import { useFormSubmit } from "@/lib/forms/useFormSubmit";
import { Field, ErrorSummary, Honeypot } from "@/components/forms/Field";
import { Button } from "@/components/ui/Button";

/**
 * Review Feedback Form (docs/08 §12, docs/14 §32, SEO-003).
 * NEVER gates the public review link on rating — the public option is shown
 * before and after submission regardless of score. Testimonial permission and
 * permission-to-contact are recorded separately. No sales opportunity is created.
 */

/** Public, unconditional review CTA (docs/08 §12.7). Rendered regardless of rating. */
export function PublicReviewLink() {
  const url = clientConfig.integrations.reviewUrl;
  if (!url) return null;
  return (
    <p>
      <Button variant="secondary" href={url} target="_blank" rel="noopener noreferrer">
        Share an honest public review
      </Button>
    </p>
  );
}

export function ReviewFeedbackForm() {
  const { status, message, fieldErrors, summaryRef, submit } = useFormSubmit("review-feedback");
  const [testimonial, setTestimonial] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    await submit({
      ...data,
      permissionToContact: data.permissionToContact === "on",
      testimonialPermission: data.testimonialPermission === "on",
    });
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <h2>Thank you for your feedback</h2>
        <p>
          Your comments were received by {clientConfig.business.publicName}. If you gave
          permission to be contacted, a team member may follow up with you.
        </p>
        <p>You may also share an honest public review of your experience.</p>
        <PublicReviewLink />
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
      <Field id="lastName" label="Last name (optional)" error={fieldErrors.lastName}>
        <input id="field-lastName" name="lastName" autoComplete="family-name" />
      </Field>
      <Field id="email" label="Email" hint="Provide an email or a phone number." error={fieldErrors.email}>
        <input id="field-email" name="email" type="email" inputMode="email" autoComplete="email" />
      </Field>
      <Field id="phone" label="Phone" error={fieldErrors.phone}>
        <input id="field-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" />
      </Field>

      <Field id="serviceDate" label="Service date (optional)" error={fieldErrors.serviceDate}>
        <input id="field-serviceDate" name="serviceDate" type="date" />
      </Field>
      <Field id="technicianName" label="Technician name (optional)" error={fieldErrors.technicianName}>
        <input id="field-technicianName" name="technicianName" />
      </Field>

      <fieldset>
        <legend>
          Your rating <span aria-hidden="true">*</span>
        </legend>
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} style={{ marginRight: "var(--space-4)" }}>
            <input type="radio" name="rating" value={n} required /> {n}
          </label>
        ))}
      </fieldset>

      <Field id="feedback" label="Your feedback" required error={fieldErrors.feedback}>
        <textarea id="field-feedback" name="feedback" required rows={5} />
      </Field>

      <p>
        <label>
          <input type="checkbox" name="permissionToContact" /> You may contact me about this
          feedback.
        </label>
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            name="testimonialPermission"
            checked={testimonial}
            onChange={(e) => setTestimonial(e.target.checked)}
          />{" "}
          You may use my feedback as a public testimonial.
        </label>
      </p>

      {testimonial && (
        <Field
          id="testimonialAttribution"
          label="How may we attribute your testimonial?"
          required
          error={fieldErrors.testimonialAttribution}
        >
          <select id="field-testimonialAttribution" name="testimonialAttribution" required defaultValue="">
            <option value="" disabled>
              Choose an option
            </option>
            <option value="first-name-and-last-initial">First name and last initial</option>
            <option value="first-name-only">First name only</option>
            <option value="anonymous-customer">Anonymous customer</option>
          </select>
        </Field>
      )}

      <Button type="submit" variant="primary" loading={status === "submitting"} loadingText="Submitting…">
        Submit Feedback
      </Button>
    </form>
  );
}
