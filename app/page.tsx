import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { HeroWithForm } from "@/components/home/HeroWithForm";
import { CTAWithForm } from "@/components/home/CTAWithForm";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { EmergencyCallout } from "@/components/sections/EmergencyCallout";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServicePathways } from "@/components/sections/ServicePathways";
import { ServiceAreaList } from "@/components/sections/ServiceAreaList";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "Plumber in Las Vegas, NV | Las Vegas Pro Plumbing",
  description: clientConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

const HOME_FAQS: FAQItem[] = [
  {
    question: "Do you offer 24/7 emergency plumbing in Las Vegas?",
    answer:
      "Yes. Las Vegas Pro Plumbing responds to plumbing emergencies around the clock. For burst pipes, active flooding, sewage backups, and other urgent situations, call (888) 308-3262. For immediate threats involving gas, fire, or electrical danger, contact 911 or your utility provider first.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, and Enterprise. Call us to confirm availability in your specific neighborhood.",
  },
  {
    question: "How quickly can you respond?",
    answer:
      "Response times depend on current call volume and your location. Call (888) 308-3262 for current availability. We do not guarantee specific arrival times.",
  },
  {
    question: "Are you licensed and insured in Nevada?",
    answer:
      "Yes. Las Vegas Pro Plumbing holds Nevada State Contractor License #NV-PL-2024-08847 and carries appropriate insurance coverage.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Contact us to discuss your plumbing issue. Our estimate process depends on the type and scope of work. Call (888) 308-3262 or request service online.",
  },
];

/**
 * Home page (docs/04 §6). Full section stack: hero, trust, services, problems,
 * emergency, why-us, process, pathways, service areas, reviews, FAQs, and a
 * closing request CTA.
 *
 * Structured data: Plumber (LocalBusiness). AggregateRating is intentionally
 * omitted — the demo reviews are fictional and review schema requires verified,
 * eligible data (docs/04 §15, docs/07 §30). Add for a live client only.
 */
export default function HomePage() {
  const { business, location, serviceAreas } = clientConfig;

  const plumberJsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.publicName,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.postalCode,
      addressCountry: location.country,
    },
    areaServed: serviceAreas.map((a) => `${a.name}, ${a.state}`),
    url: business.websiteUrl,
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberJsonLd) }}
      />

      {/* 1. Hero */}
      <HeroWithForm />

      {/* 2. Credibility indicators */}
      <TrustBar />

      {/* 3. Primary services */}
      <ServiceGrid
        heading="Our Plumbing Services"
        intro="From emergencies to everyday repairs and installations, our licensed team handles it across the Las Vegas valley."
        altBackground
      />

      {/* 4. Customer problems addressed */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
            Common plumbing problems we solve
          </h2>
          <ul
            style={{
              display: "grid",
              gap: "var(--space-3)",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              color: "var(--color-text-muted)",
            }}
          >
            <li>No hot water or a leaking water heater</li>
            <li>Slow, clogged, or backed-up drains</li>
            <li>Burst, corroded, or leaking pipes</li>
            <li>Hidden leaks and slab leaks driving up your water bill</li>
            <li>Running, clogged, or leaking toilets</li>
            <li>Dripping faucets and low water pressure</li>
          </ul>
        </div>
      </section>

      {/* 5. Emergency service */}
      <EmergencyCallout />

      {/* 6. Why choose us */}
      <WhyChooseUs />

      {/* 7. Service process */}
      <ProcessSteps />

      {/* 8. Residential & commercial pathways */}
      <ServicePathways />

      {/* 9. Service-area summary */}
      <ServiceAreaList
        altBackground
        intro="We provide plumbing service across Las Vegas and the surrounding communities."
      />

      {/* 10. Reviews */}
      <ReviewsSection />

      {/* 11. FAQs */}
      <FAQAccordion items={HOME_FAQS} altBackground />

      {/* 12. Request-service CTA */}
      <CTAWithForm />
    </>
  );
}
