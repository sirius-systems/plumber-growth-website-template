import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clientConfig } from "@/config/client";
import { commercialQuickAnswer, commercialFaqs } from "@/content/commercial";
import { CommercialHero } from "@/components/sections/commercial/CommercialHero";
import { QuickAnswer } from "@/components/sections/QuickAnswer";
import { CommercialServicesGrid } from "@/components/sections/commercial/CommercialServicesGrid";
import { CommercialIndustries } from "@/components/sections/commercial/CommercialIndustries";
import { CommercialProblems } from "@/components/sections/commercial/CommercialProblems";
import { CommercialProcess } from "@/components/sections/commercial/CommercialProcess";
import { CommercialMetrics } from "@/components/sections/commercial/CommercialMetrics";
import { CommercialBenefits } from "@/components/sections/commercial/CommercialBenefits";
import { CommercialLinks } from "@/components/sections/commercial/CommercialLinks";
import { FaqSection } from "@/components/sections/rebuild/FaqSection";
import { FinalCta } from "@/components/sections/rebuild/FinalCta";

export const metadata: Metadata = {
  title: "Commercial Plumbing in Las Vegas, NV",
  description:
    "Las Vegas Pro Plumbing provides commercial plumbing services for offices, restaurants, retail, and multifamily properties in the Las Vegas area.",
  alternates: { canonical: "/commercial-plumbing/" },
};

export default function CommercialPage() {
  // Rendered only when the client offers commercial plumbing (docs/06 §38).
  if (!clientConfig.operations.commercialPlumbing) notFound();

  const { business, region } = clientConfig;
  const canonical = `${business.websiteUrl}/commercial-plumbing/`;
  // Tail tones are fixed rather than derived from whether the metrics band
  // renders. CommercialBenefits used to take the alternate tone only when
  // metrics appeared above it, so with no verified commercialStats the process,
  // benefits and FAQ bands were all section-default and ran together as one
  // undivided white run. Pinning benefits to alternate separates every seam in
  // both configurations, because CommercialMetrics is section-emphasis (dark)
  // and so never clashes with the white or grey either side of it:
  //   with metrics:    process white -> metrics DARK -> benefits grey -> FAQ white -> links grey
  //   without metrics: process white -> benefits grey -> FAQ white -> links grey

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Commercial Plumbing", item: canonical },
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Commercial Plumbing Services in ${region.name}`,
    url: canonical,
    description: clientConfig.commercialSubheading,
    provider: { "@type": "Plumber", name: business.publicName },
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Plumbing",
    provider: { "@type": "Plumber", name: business.publicName, telephone: business.phone },
    areaServed: region.name,
    description: commercialQuickAnswer,
    url: canonical,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <CommercialHero />
      <QuickAnswer answer={commercialQuickAnswer} />
      <CommercialServicesGrid />
      <CommercialIndustries />
      <CommercialProblems />
      <CommercialProcess />
      <CommercialMetrics />
      {/* Benefits alternates background so it never doubles the section above. */}
      <CommercialBenefits alternate />
      <FaqSection id="faq" items={commercialFaqs} heading="Frequently Asked Questions" subheading={`Commercial plumbing service in ${region.name}`} />
      <CommercialLinks />
      {/* \u00A0 keeps "Plumbing Service" on one line, so the heading
          breaks after "Commercial" instead of orphaning "Service". */}
      <FinalCta heading={"Request Commercial Plumbing\u00A0Service"} />
    </>
  );
}
