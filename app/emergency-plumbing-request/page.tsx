import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EmergencyRequestForm } from "@/components/forms/EmergencyRequestForm";
import { EmergencySafetyNotice } from "@/components/sections/EmergencySafetyNotice";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Emergency Request form page (docs/04 §20, docs/08 §10). noindex,follow — the
 * indexable page is the emergency SERVICE page /services/emergency-plumbing/.
 * The mandatory safety notice renders before any form (docs/08 §10.5, docs/14 §31)
 * and the call action is more prominent than the form (UX-003).
 */
export const metadata: Metadata = {
  title: "Emergency Plumbing Request",
  robots: { index: false, follow: true },
  alternates: { canonical: "/emergency-plumbing-request/" },
};

export default function EmergencyRequestPage() {
  const { business, operations } = clientConfig;
  // Only offer this route when the client actually provides emergency intake.
  if (!operations.emergencyServiceAvailable) notFound();

  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      {/* Safety notice first — before the heading and the form. */}
      <EmergencySafetyNotice />

      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Emergency Plumbing Request</h1>

      {/* Call is the primary, most prominent action. */}
      <a
        className="btn btn--primary btn--block"
        href={telHref(business.phone)}
        style={{ fontSize: "var(--font-size-lg)", marginBottom: "var(--space-4)" }}
      >
        Call Now: {formatPhoneDisplay(business.phone)}
      </a>
      <p style={{ color: "var(--color-text-muted)" }}>
        Calling is the fastest way to reach us in an emergency. If you&rsquo;d still like to send
        details, use the form below.
      </p>

      <EmergencyRequestForm />

      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginTop: "var(--space-6)" }}>
        Submitting this form does not guarantee immediate dispatch or service.
      </p>
    </section>
  );
}
