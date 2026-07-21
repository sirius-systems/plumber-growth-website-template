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
import { CommercialMetrics, hasCommercialMetrics } from "@/components/sections/commercial/CommercialMetrics";
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
  const metrics = hasCommercialMetrics();

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
      <CommercialBenefits alternate={metrics} />
      <FaqSection id="faq" items={commercialFaqs} heading="Frequently Asked Questions" subheading={`Commercial plumbing service in ${region.name}`} />
      <CommercialLinks />
      <FinalCta heading="Request Commercial Plumbing Service" />
    </>
  );
}
