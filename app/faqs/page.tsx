import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { faqCategories } from "@/content/faqs";
import { FaqHero } from "@/components/sections/faq/FaqHero";
import { FaqHub } from "@/components/sections/faq/FaqHub";
import { FaqResources } from "@/components/sections/faq/FaqResources";
import { FaqTrust } from "@/components/sections/faq/FaqTrust";
import { FaqCta } from "@/components/sections/faq/FaqCta";

export const metadata: Metadata = {
  title: `Plumbing FAQs | ${clientConfig.business.publicName}`,
  description:
    "Answers to common plumbing questions for homeowners and property managers in Clark County: emergencies, pricing, maintenance, and installations.",
  alternates: { canonical: "/faqs/" },
};

export default function FaqsPage() {
  const { business } = clientConfig;
  const canonical = `${business.websiteUrl}/faqs/`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "FAQs", item: canonical },
    ],
  };

  // FAQPage schema only when the client's FAQ content is confirmed eligible
  // (docs/07 §22). Disabled for the demo (fictional content).
  const faqPageJsonLd = clientConfig.faqSchemaEligible
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqCategories.flatMap((c) =>
          c.items.map((it) => ({
            "@type": "Question",
            name: it.question,
            acceptedAnswer: { "@type": "Answer", text: it.answer },
          })),
        ),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqPageJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }} />
      )}

      <FaqHero />
      <FaqHub />
      <FaqResources />
      <FaqTrust />
      <FaqCta />
    </>
  );
}
