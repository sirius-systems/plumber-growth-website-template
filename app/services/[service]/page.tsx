import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clientConfig } from "@/config/client";
import { enabledServices, findEnabledService, type PlumbingService } from "@/config/services";
import { SERVICE_CONTENT } from "@/config/service-content";
import { mergeServiceFaqs } from "@/content/services/faqs.default";
import { formatPhoneDisplay } from "@/lib/utilities/format";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { SiteTrustBand } from "@/components/sections/SiteTrustBand";
import { QuickAnswer } from "@/components/sections/QuickAnswer";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ServiceProblems } from "@/components/sections/ServiceProblems";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceBenefits } from "@/components/sections/ServiceBenefits";
import { ServiceLinks } from "@/components/sections/ServiceLinks";
import { FaqSection } from "@/components/sections/rebuild/FaqSection";
import { FinalCta } from "@/components/sections/rebuild/FinalCta";

interface Params {
  service: string;
}

export function generateStaticParams(): Params[] {
  return enabledServices().map((s) => ({ service: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service } = await params;
  const svc = findEnabledService(service);
  if (!svc) return {};
  const content = SERVICE_CONTENT[svc.slug];
  const description = content
    ? `${content.intro} ${clientConfig.business.publicName} serves ${clientConfig.seo.primaryMarket}.`
    : `${svc.shortDescription} ${clientConfig.business.publicName} serves ${clientConfig.seo.primaryMarket}.`;
  return {
    title: `${svc.name} in ${clientConfig.seo.primaryMarket}`,
    description: description.slice(0, 160),
    alternates: { canonical: `/services/${svc.slug}/` },
  };
}

function quickAnswerFor(svc: PlumbingService): string {
  const content = SERVICE_CONTENT[svc.slug];
  if (content?.quickAnswer) return content.quickAnswer;
  const { business, seo } = clientConfig;
  const phone = formatPhoneDisplay(business.phone);
  return `${svc.name} in ${seo.primaryMarket} ${svc.shortDescription.charAt(0).toLowerCase()}${svc.shortDescription.slice(1)} ${business.publicName} provides ${svc.name.toLowerCase()} for residential and commercial customers throughout ${seo.primaryMarket} and surrounding areas. Call ${phone} or submit a service request to schedule.`;
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service } = await params;
  const svc = findEnabledService(service);
  if (!svc) notFound();

  const content = SERVICE_CONTENT[svc.slug];
  const { business, seo, location, serviceAreas } = clientConfig;
  const canonical = `${business.websiteUrl}/services/${svc.slug}/`;
  const faqs = mergeServiceFaqs(content?.faqs ?? []);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${business.websiteUrl}/services/` },
      { "@type": "ListItem", position: 3, name: svc.name, item: canonical },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    serviceType: svc.name,
    description: content?.overview ?? svc.shortDescription,
    provider: { "@type": "Plumber", name: business.publicName, telephone: business.phone },
    areaServed: serviceAreas.map((a) => `${a.name}, ${a.state}`),
    url: canonical,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <ServiceHero svc={svc} content={content} />
      <SiteTrustBand />
      <QuickAnswer answer={quickAnswerFor(svc)} />
      <ServiceOverview svc={svc} content={content} />
      <ServiceProblems svc={svc} content={content} />
      <ServiceProcess svc={svc} />
      <ServiceBenefits svc={svc} />
      <FaqSection items={faqs} subheading={`${svc.name}, pricing, timing, and what to expect`} />
      <ServiceLinks svc={svc} />
      <FinalCta heading={`Request ${svc.name} in ${seo.primaryMarket}`} currentService={svc.slug} />
    </>
  );
}
