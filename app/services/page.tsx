import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { EmergencyCallout } from "@/components/sections/EmergencyCallout";
import { ServicePathways } from "@/components/sections/ServicePathways";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceAreaList } from "@/components/sections/ServiceAreaList";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: `Plumbing Services in ${clientConfig.seo.primaryMarket}`,
  description:
    "Las Vegas Pro Plumbing offers emergency plumbing, drain cleaning, water heater repair, leak detection, and more in Las Vegas and Henderson, NV.",
  alternates: { canonical: "/services/" },
};

const SERVICES_FAQS: FAQItem[] = [
  {
    question: "What plumbing services do you offer?",
    answer:
      "We cover emergency plumbing, drain cleaning, water heater repair and installation, leak detection, pipe repair, sewer line repair, toilet repair, faucet repair, and garbage disposal repair, for both homes and businesses.",
  },
  {
    question: "Do you handle both emergencies and routine work?",
    answer:
      "Yes. We respond to plumbing emergencies around the clock and also handle scheduled repairs, replacements, and installations. Call (888) 308-3262 to discuss your situation.",
  },
  {
    question: "Do you serve both homes and businesses?",
    answer:
      "Yes. We provide residential plumbing for homeowners and commercial plumbing for offices, retail, restaurants, and multifamily properties across the Las Vegas area.",
  },
];

/** Services hub (docs/04 §7, T2). Hub-and-spoke to enabled service pages. */
export default function ServicesHubPage() {
  return (
    <>
      <section className="container section">
        <h1 style={{ fontSize: "var(--font-size-3xl)" }}>
          Plumbing Services in {clientConfig.seo.primaryMarket}
        </h1>
        <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
          {clientConfig.business.publicName} provides a full range of residential and commercial
          plumbing services across {clientConfig.seo.primaryMarket} and the surrounding valley, 
          from urgent emergencies to everyday repairs, replacements, and installations.
        </p>
      </section>

      <ServiceGrid heading="Our Plumbing Services" altBackground />
      <EmergencyCallout />
      <ServicePathways />
      <ProcessSteps />
      <ServiceAreaList altBackground />
      <FAQAccordion items={SERVICES_FAQS} heading="Services, Frequently Asked Questions" />
      <CallToAction />
    </>
  );
}
