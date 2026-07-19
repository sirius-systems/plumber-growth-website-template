import type { Metadata } from "next";
import { Suspense } from "react";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";
import { clientConfig } from "@/config/client";

export const metadata: Metadata = {
  title: "Request Plumbing Service",
  description: `Request plumbing service from ${clientConfig.business.publicName}. Tell us about the problem and we’ll follow up.`,
  alternates: { canonical: "/request-service/" },
};

/** Request Service page (docs/04 §10, docs/08 §9). Hosts the General Quote form. */
export default function RequestServicePage() {
  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Request Plumbing Service</h1>
      <p>
        Tell us what’s going on and how to reach you. Submitting this form is a request —
        your appointment is not confirmed until {clientConfig.business.publicName} contacts
        you.
      </p>
      {/* useSearchParams (service preselection) requires a Suspense boundary under export. */}
      <Suspense fallback={<p>Loading form…</p>}>
        <GeneralQuoteForm />
      </Suspense>
    </section>
  );
}
