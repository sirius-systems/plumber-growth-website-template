import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { homepageContent } from "@/content/homepage";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { IntentRouting } from "@/components/sections/home/IntentRouting";
import { CoreServices } from "@/components/sections/home/CoreServices";
import { AuthorityBand } from "@/components/sections/home/AuthorityBand";
import { ProcessSteps } from "@/components/sections/home/ProcessSteps";
import { AudienceBand } from "@/components/sections/home/AudienceBand";
import { ConfidenceStrip } from "@/components/sections/home/ConfidenceStrip";
import { CoverageAreas } from "@/components/sections/home/CoverageAreas";
import { ApproachGallery } from "@/components/sections/home/ApproachGallery";
import { TestimonialsBand } from "@/components/sections/home/TestimonialsBand";
import { RequestSection } from "@/components/sections/home/RequestSection";
import { FinalCtaBanner } from "@/components/sections/home/FinalCtaBanner";
import { EmergencyCta } from "@/components/sections/rebuild/EmergencyCta";
import { FaqSection } from "@/components/sections/rebuild/FaqSection";

export const metadata: Metadata = {
  title: clientConfig.seo.defaultTitle,
  description: clientConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
};

/**
 * Home page (docs/04 §6) — the site's conversion hub.
 *
 * Every section renders from `content/homepage/index.ts`, which in turn derives
 * client facts from `config/`. There is no page copy in this file and none in
 * the section components; to change what the homepage says, edit the content
 * model, not the markup.
 *
 * Section order and light/dark rhythm:
 *   hero (dark) → intent router (white) → services (light) → authority (navy)
 *   → process (white) → audience (light) → confidence (white) → emergency (navy)
 *   → coverage (light) → approach gallery (white) → testimonials (navy)
 *   → request form (white) → FAQ (light) → closing banner (navy) → footer (navy)
 *
 * Sections that depend on client configuration — the audience band, the
 * confidence strip, the emergency interrupt — return null when that data is
 * absent, so an unconfigured client never renders an empty or invented block.
 *
 * Structured data: Plumber (LocalBusiness). AggregateRating is intentionally
 * omitted — the demo reviews are fictional and review schema requires verified,
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
      <IntentRouting />
      <CoreServices />
      <AuthorityBand />
      <ProcessSteps />
      <AudienceBand />
      <ConfidenceStrip />
      <EmergencyCta />
      <CoverageAreas />
      <ApproachGallery />
      <TestimonialsBand />
      <RequestSection />
      <FaqSection
        items={homepageContent.faq.items}
        heading={homepageContent.faq.heading}
        subheading={homepageContent.faq.lede}
        surface="default"
        cta={homepageContent.faq.cta}
      />
      <FinalCtaBanner />
    </>
  );
}
