import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { homeFaqs } from "@/content/homepage/faqs";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesGrid } from "@/components/sections/rebuild/ServicesGrid";
import { CommonProblems } from "@/components/sections/CommonProblems";
import { WhyChooseUs } from "@/components/sections/rebuild/WhyChooseUs";
import { HowItWorks } from "@/components/sections/rebuild/HowItWorks";
import { AudiencePathways } from "@/components/sections/rebuild/AudiencePathways";
import { EmergencyCta } from "@/components/sections/rebuild/EmergencyCta";
import { ServiceAreas } from "@/components/sections/rebuild/ServiceAreas";
import { ReviewsCarousel } from "@/components/sections/rebuild/ReviewsCarousel";
import { FaqSection } from "@/components/sections/rebuild/FaqSection";
import { FinalCta } from "@/components/sections/rebuild/FinalCta";

export const metadata: Metadata = {
  title: "Plumber in Las Vegas, NV | Las Vegas Pro Plumbing",
  description: clientConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

/**
 * Home page (docs/04 §6). Rebuilt section stack.
 *
 * Structured data: Plumber (LocalBusiness). AggregateRating intentionally
 * omitted — demo reviews are fictional and review schema requires verified,
 * eligible data (docs/04 §15, docs/07 §30).
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
      <HomeHero />
      <ServicesGrid />
      <CommonProblems />
      <WhyChooseUs />
      <HowItWorks />
      <AudiencePathways />
      <EmergencyCta />
      <ServiceAreas />
      <ReviewsCarousel />
      <FaqSection
        items={homeFaqs}
        subheading="Common questions about our plumbing services."
      />
      <FinalCta />
    </>
  );
}
