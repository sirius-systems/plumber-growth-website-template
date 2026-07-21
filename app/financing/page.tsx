import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clientConfig } from "@/config/client";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { CallToAction } from "@/components/sections/CallToAction";
import { formatPhoneDisplay, telHref } from "@/lib/utilities/format";

export const metadata: Metadata = {
  title: "Plumbing Financing",
  description:
    "Financing options may be available for larger plumbing projects in Las Vegas. Contact Las Vegas Pro Plumbing for details.",
  alternates: { canonical: "/financing/" },
};

export default function FinancingPage() {
  const { business, operations } = clientConfig;
  // Rendered only when the client offers financing (docs/06 §38 — no empty states).
  if (!operations.financingOffered) notFound();

  return (
    <>
      <section className="container section" style={{ maxWidth: "48rem" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Financing" }]} />
        <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Plumbing Financing Options</h1>

        <p style={{ fontSize: "var(--font-size-lg)" }}>
          Financing options are available for qualified customers. Contact {business.publicName} to
          discuss financing for larger plumbing projects — including water heater installation,
          sewer line repair, and pipe replacement.
        </p>

        <p style={{ color: "var(--color-text-muted)" }}>
          The specific financing partner, rates, and terms are provided during the service estimate
          process. Call{" "}
          <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a> for details.
        </p>

        <div
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            background: "var(--color-background-alt)",
            padding: "var(--space-4) var(--space-6)",
            marginTop: "var(--space-6)",
          }}
        >
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
            Financing is subject to credit approval. Terms vary. Contact us for current options.
          </p>
        </div>
      </section>

      <CallToAction
        heading="Questions about financing?"
        body={`Call ${business.publicName} and we'll walk you through the options for your project.`}
      />
    </>
  );
}
