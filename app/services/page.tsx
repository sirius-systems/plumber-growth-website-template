import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import {
  quickAnswer,
  residentialBullets,
  commercialBullets,
  ctaHeading,
  ctaSubtext,
} from "@/content/services-hub";
import { ServicesHubHero } from "@/components/sections/services-hub/ServicesHubHero";
import { QuickAnswer } from "@/components/sections/QuickAnswer";
import { AudiencePathways } from "@/components/sections/rebuild/AudiencePathways";
import { ServicesGrid } from "@/components/sections/rebuild/ServicesGrid";
import { ServicesEmergencyStrip } from "@/components/sections/services-hub/ServicesEmergencyStrip";
import { HowItWorks } from "@/components/sections/rebuild/HowItWorks";
import { ServiceAreas } from "@/components/sections/rebuild/ServiceAreas";
import { ServicesHubFaq } from "@/components/sections/services-hub/ServicesHubFaq";
import { FinalCta } from "@/components/sections/rebuild/FinalCta";

const DESCRIPTION =
  "Licensed residential and commercial plumbing services in Clark County. Drain cleaning, water heater repair, leak detection, pipe repair, sewer line repair, and more. Call (888) 308-3262.";

export const metadata: Metadata = {
  title: `Plumbing Services in ${clientConfig.region.name} | ${clientConfig.business.publicName}`,
  description: DESCRIPTION,
  alternates: { canonical: "/services/" },
};

/** Services hub (docs/04 §7). Rebuilt section stack. */
export default function ServicesHubPage() {
  const { business, region } = clientConfig;
  const canonical = `${business.websiteUrl}/services/`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: canonical },
    ],
  };
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Plumbing Services in ${region.name}`,
    url: canonical,
    description: DESCRIPTION,
    provider: { "@type": "Plumber", name: business.publicName },
    hasPart: enabledServices().map((s) => ({
      "@type": "WebPage",
      url: `${business.websiteUrl}/services/${s.slug}/`,
      name: s.name,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <ServicesHubHero />
      <QuickAnswer answer={quickAnswer} />
      <AudiencePathways residentialBullets={residentialBullets} commercialBullets={commercialBullets} />
      <ServicesGrid />
      <ServicesEmergencyStrip />
      {/* Generic process (ServiceProcess is coupled to a single service). */}
      <HowItWorks />
      <ServiceAreas />
      <ServicesHubFaq />
      <FinalCta heading={ctaHeading} subtext={ctaSubtext} showServicesLink={false} />
    </>
  );
}
