import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { termsEffectiveDateLabel, termsSections } from "@/content/legal/terms";
import { PolicyToc } from "@/components/legal/PolicyToc";
import { PolicyContent } from "@/components/legal/PolicyContent";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${clientConfig.business.publicName}`,
  description:
    "Terms and Conditions for Las Vegas Pro Plumbing. Read our service terms, payment policies, warranties, and website use terms for plumbing services in Clark County.",
  alternates: { canonical: "/terms/" },
};

/** Legal page (docs/04 §4.4). Content requires legal review before production. */
export default function TermsPage() {
  const { business } = clientConfig;
  const canonical = `${business.websiteUrl}/terms/`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: canonical },
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: canonical,
    publisher: { "@type": "Plumber", name: business.publicName },
  };

  return (
    <div style={{ background: "var(--color-background-alt)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <div className="legal-layout">
        <PolicyToc sections={termsSections} />
        <PolicyContent
          title="Terms and Conditions"
          effectiveDateLabel={termsEffectiveDateLabel}
          reviewNotice="These terms and conditions are a template starting point and have not been reviewed by legal counsel. Do not deploy to production without legal review."
          sections={termsSections}
        />
      </div>
    </div>
  );
}
