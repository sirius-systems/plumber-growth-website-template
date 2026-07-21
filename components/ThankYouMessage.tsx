"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Confirmation message keyed by the `?from=` source (docs/04 §23). Reads ONLY the
 * `from` param — never any submitted data — and never implies dispatch.
 *
 * NOTE: the five native forms currently render an inline success state and do not
 * redirect here with `?from=`, so this switch is a forward-looking default. If a
 * redirect flow is added later, these sources will light up. The default message
 * covers direct visits.
 */
const MESSAGES: Record<string, string> = {
  "homepage-hero":
    "Thanks for your request! We'll be in touch shortly. Questions? Call us anytime.",
  "homepage-cta":
    "Thanks for your request! We'll be in touch shortly. Questions? Call us anytime.",
  "request-service":
    "Service request received. We'll review your request and follow up promptly. Call us if you need immediate assistance.",
  "emergency-request":
    "Emergency request received. We will contact you as soon as possible. If this is a life-threatening emergency, call 911 now. For immediate plumbing help, call us.",
  contact: "Message received. We'll get back to you within 1 business day.",
  "review-feedback": "Thank you for your feedback. We appreciate you taking the time.",
  onboarding:
    "Onboarding submission received. The Sirius Systems team will be in touch within 1 business day.",
};

const DEFAULT_MESSAGE =
  "We've received your submission and will be in touch shortly.";

export function ThankYouMessage() {
  const { business } = clientConfig;
  const from = useSearchParams().get("from") ?? "";
  const message = MESSAGES[from] ?? DEFAULT_MESSAGE;

  return (
    <>
      <p style={{ fontSize: "var(--font-size-lg)" }}>{message}</p>
      <p>
        This confirmation does not guarantee immediate service or a confirmed appointment.
      </p>
      <p>
        Need help sooner?{" "}
        <a href={telHref(business.phone)}>Call {formatPhoneDisplay(business.phone)}</a>.
      </p>
      <p>
        <Link className="btn btn--secondary" href="/">
          Return home
        </Link>
      </p>
    </>
  );
}
