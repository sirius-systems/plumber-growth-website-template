import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { hubFaqs } from "@/content/service-areas/faqs";
import { HubHero } from "@/components/sections/hub/HubHero";
import { CoverageIntro } from "@/components/sections/hub/CoverageIntro";
import { FeaturedLocations } from "@/components/sections/hub/FeaturedLocations";
import { SecondaryLocations } from "@/components/sections/hub/SecondaryLocations";
import { RegionMap } from "@/components/sections/hub/RegionMap";
import { RegionServices } from "@/components/sections/hub/RegionServices";
import { WhyChooseUs } from "@/components/sections/rebuild/WhyChooseUs";
import { FaqSection } from "@/components/sections/rebuild/FaqSection";
import { FinalCta } from "@/components/sections/rebuild/FinalCta";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Las Vegas Pro Plumbing serves Las Vegas, North Las Vegas, Henderson, Summerlin, Spring Valley, and Enterprise, NV.",
  alternates: { canonical: "/service-areas/" },
};

/** Service-areas hub (docs/04 §12). Rebuilt section stack. */
export default function ServiceAreasPage() {
  const { business, region } = clientConfig;
  const canonical = `${business.websiteUrl}/service-areas/`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: canonical },
    ],
  };
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Plumbing Services in ${region.name}`,
    url: canonical,
    description: region.subheading,
    provider: { "@type": "Plumber", name: business.publicName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <HubHero />
      <CoverageIntro />
      <FeaturedLocations />
      <SecondaryLocations />
      <RegionMap />
      <RegionServices />
      <WhyChooseUs />
      <FaqSection items={hubFaqs} subheading={`Plumbing service across ${region.name}`} />
      <FinalCta />
    </>
  );
}
