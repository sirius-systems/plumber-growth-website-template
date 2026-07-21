import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

export const metadata: Metadata = {
  title: "Request Plumbing Service",
  description:
    "Submit a plumbing service request for Las Vegas, Henderson, or surrounding areas. Las Vegas Pro Plumbing will follow up promptly.",
  alternates: { canonical: "/request-service/" },
};

/** Request Service page (docs/04 §10, docs/08 §9). Hosts the General Quote form. */
export default function RequestServicePage() {
  const { business, operations } = clientConfig;

  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Request Plumbing Service</h1>
      <p style={{ fontSize: "var(--font-size-lg)" }}>
        Tell us what&rsquo;s going on and how to reach you. Submitting this form is a request, 
        your appointment is not confirmed until {business.publicName} contacts you.
      </p>

      {operations.emergencyServiceAvailable && (
        <div
          role="note"
          style={{
            border: "2px solid var(--color-danger)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-3) var(--space-6)",
            marginBottom: "var(--space-6)",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>
            Plumbing emergency? Call{" "}
            <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>, don&rsquo;t
            wait for a form response.
          </p>
        </div>
      )}

      {/* useSearchParams (service preselection) requires a Suspense boundary under export. */}
      <Suspense fallback={<p>Loading form…</p>}>
        <GeneralQuoteForm paired />
      </Suspense>

      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
        Prefer to talk? Call <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>{" "}
        or see our <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
    </section>
  );
}
