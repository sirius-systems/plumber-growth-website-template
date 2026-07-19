import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SimplePage } from "@/components/layout/SimplePage";
import { EmergencyRequestForm } from "@/components/forms/EmergencyRequestForm";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Emergency Request form page (docs/04 §20, docs/08 §10). noindex,follow — the
 * indexable page is the emergency SERVICE page /services/emergency-plumbing/.
 * The mandatory safety notice (docs/08 §10.5, docs/14 §31) renders before any form.
 *
 * Scaffold note: the full EmergencyRequestForm (schema already defined in
 * lib/forms/schemas.ts) is wired next; this page establishes the route, safety
 * language, and call fallback.
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
    <SimplePage title="Emergency Plumbing Request">
      <div
        role="alert"
        style={{
          border: "2px solid var(--color-danger)",
          borderRadius: "var(--radius-sm)",
          padding: "var(--space-4)",
          marginBottom: "var(--space-6)",
        }}
      >
        <p style={{ marginTop: 0 }}>
          Submitting this form does not guarantee immediate service or confirm that a
          technician has been dispatched. If there is a gas odor, fire, electrical danger,
          serious injury, or another immediate threat to life or property, leave the affected
          area and contact the appropriate emergency service or utility provider.
        </p>
        <p style={{ marginBottom: 0 }}>
          For the fastest response, call {business.publicName}:{" "}
          <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>.
        </p>
      </div>

      <EmergencyRequestForm />
    </SimplePage>
  );
}
