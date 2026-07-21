import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clientConfig } from "@/config/client";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceAreaList } from "@/components/sections/ServiceAreaList";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Commercial Plumbing in Las Vegas, NV",
  description:
    "Las Vegas Pro Plumbing provides commercial plumbing services for offices, restaurants, retail, and multifamily properties in the Las Vegas area.",
  alternates: { canonical: "/commercial-plumbing/" },
};

const FACILITY_TYPES = [
  "Offices and professional spaces",
  "Retail storefronts",
  "Restaurants and food service",
  "Multifamily and apartment properties",
  "Light commercial buildings",
];

const COMMERCIAL_FAQS: FAQItem[] = [
  {
    question: "What types of commercial properties do you serve?",
    answer:
      "Offices, retail, restaurants, multifamily, and light commercial buildings across the Las Vegas area. For large industrial or municipal projects, we scope the work separately — contact us to discuss.",
  },
  {
    question: "Can you schedule work around our business hours?",
    answer:
      "Yes. We coordinate timing to limit disruption to your operations. Call (888) 308-3262 to discuss scheduling for your property.",
  },
  {
    question: "Do you handle commercial plumbing emergencies?",
    answer:
      "Yes. We respond to commercial plumbing emergencies around the clock. For gas, fire, or electrical danger, contact 911 or your utility provider first.",
  },
];

export default function CommercialPage() {
  // Rendered only when the client offers commercial plumbing (docs/06 §38).
  if (!clientConfig.operations.commercialPlumbing) notFound();

  return (
    <>
      <section className="container section">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Commercial Plumbing" }]} />
        <h1 style={{ fontSize: "var(--font-size-3xl)" }}>
          Commercial Plumbing Services in {clientConfig.seo.primaryMarket}
        </h1>
        <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
          {clientConfig.business.publicName} keeps Las Vegas businesses running with dependable
          commercial plumbing — scheduled around your operations and backed by licensed, insured
          work.
        </p>

        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Facilities we serve</h2>
        <ul style={{ color: "var(--color-text-muted)", maxWidth: "var(--measure-reading)" }}>
          {FACILITY_TYPES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Scheduling &amp; scope</h2>
        <p style={{ maxWidth: "var(--measure-reading)", color: "var(--color-text-muted)" }}>
          We coordinate service to minimize downtime for your staff and customers. For routine
          maintenance, repairs, and installations we can plan around your hours.
        </p>
        <p style={{ maxWidth: "var(--measure-reading)", color: "var(--color-text-muted)" }}>
          Large industrial or municipal projects require separate scoping — reach out and we&rsquo;ll
          talk through what your property needs.
        </p>
      </section>

      <TrustBar />
      <ServiceGrid
        heading="Commercial Plumbing Services"
        intro="Our full range of plumbing services, available for commercial properties."
        altBackground
      />
      <ServiceAreaList intro="Serving commercial properties across Las Vegas and the surrounding valley." />
      <FAQAccordion
        items={COMMERCIAL_FAQS}
        heading="Commercial Plumbing — Frequently Asked Questions"
        altBackground
      />
      <CallToAction heading="Plumbing service for your business?" />
    </>
  );
}
