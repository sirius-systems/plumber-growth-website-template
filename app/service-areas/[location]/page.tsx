import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clientConfig, type ServiceAreaReference } from "@/config/client";
import { enabledServices } from "@/config/services";
import { LOCATION_CONTENT } from "@/config/location-content";
import { locationFaqs } from "@/content/locations/faqs.default";
import { formatPhoneDisplay } from "@/lib/utilities/format";
import { LocationHero } from "@/components/sections/LocationHero";
import { LocationTrustBar } from "@/components/sections/LocationTrustBar";
import { LocationQuickAnswer } from "@/components/sections/LocationQuickAnswer";
import { AreaOverview } from "@/components/sections/AreaOverview";
import { NeighborhoodsServed } from "@/components/sections/NeighborhoodsServed";
import { LocalProblems } from "@/components/sections/LocalProblems";
import { ReviewsCarousel } from "@/components/sections/rebuild/ReviewsCarousel";
import { FaqSection } from "@/components/sections/rebuild/FaqSection";
import { LocationCta } from "@/components/sections/LocationCta";

interface Params {
  location: string;
}

const detailAreas = () => clientConfig.serviceAreas.filter((a) => a.hasDetailPage && a.slug);

export function generateStaticParams(): Params[] {
  return detailAreas().map((a) => ({ location: a.slug as string }));
}

export const dynamicParams = false;

function findArea(slug: string) {
  return detailAreas().find((a) => a.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { location } = await params;
  const area = findArea(location);
  if (!area) return {};
  return {
    title: `Plumber in ${area.name}, ${area.state}`,
    description: `Las Vegas Pro Plumbing provides plumbing services in ${area.name}, ${area.state} including emergency plumbing, drain cleaning, water heater repair, and more.`,
    alternates: { canonical: `/service-areas/${area.slug}/` },
  };
}

function quickAnswerFor(area: ServiceAreaReference): string {
  const content = area.slug ? LOCATION_CONTENT[area.slug] : undefined;
  if (content?.quickAnswer) return content.quickAnswer;
  const { business } = clientConfig;
  const names = enabledServices().slice(0, 4).map((s) => s.name.toLowerCase());
  const list =
    names.length > 1 ? `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}` : names[0];
  return `${business.publicName} provides licensed plumbing service in ${area.name}, ${area.state}, serving homeowners and businesses across ${area.name} and surrounding communities. Services available in ${area.name} include ${list}. Call ${formatPhoneDisplay(business.phone)} or submit a service request online to get started.`;
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { location } = await params;
  const area = findArea(location);
  if (!area) notFound();

  const content = area.slug ? LOCATION_CONTENT[area.slug] : undefined;
  const { business, location: loc } = clientConfig;
  const canonical = `${business.websiteUrl}/service-areas/${area.slug}/`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${business.websiteUrl}/service-areas/` },
      { "@type": "ListItem", position: 3, name: area.name, item: canonical },
    ],
  };
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: business.publicName,
    telephone: business.phone,
    email: business.email,
    url: canonical,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.streetAddress,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.postalCode,
      addressCountry: loc.country,
    },
    areaServed: `${area.name}, ${area.state}`,
    priceRange: "$$",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      <LocationHero area={area} content={content} />
      <LocationTrustBar locationName={area.name} />
      <LocationQuickAnswer answer={quickAnswerFor(area)} />
      <AreaOverview area={area} content={content} />
      <NeighborhoodsServed area={area} content={content} />
      <LocalProblems area={area} content={content} />
      <ReviewsCarousel headingLocation={area.name} />
      <FaqSection items={locationFaqs(area)} subheading={`Plumbing service in ${area.name}, ${area.state}`} />
      <LocationCta area={area} content={content} />
    </>
  );
}
