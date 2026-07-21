import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { effectiveDateLabel, policyIntro, policySections } from "@/content/legal/privacy-policy";
import { PolicyToc } from "@/components/legal/PolicyToc";
import { PolicyContent } from "@/components/legal/PolicyContent";

export const metadata: Metadata = {
  title: `Privacy Policy | ${clientConfig.business.publicName}`,
  description:
    "Privacy Policy for Las Vegas Pro Plumbing. Learn how we collect, use, and protect your information when you use our website or submit a service request.",
  alternates: { canonical: "/privacy-policy/" },
};

/** Legal page (docs/04 §4.4). Content requires legal review before production. */
export default function PrivacyPolicyPage() {
  const { business } = clientConfig;
  const canonical = `${business.websiteUrl}/privacy-policy/`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: canonical },
    ],
  };
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: canonical,
    publisher: { "@type": "Plumber", name: business.publicName },
  };

  return (
    <div style={{ background: "var(--color-background-alt)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <div className="legal-layout">
        <PolicyToc sections={policySections} />
        <PolicyContent
          title="Privacy Policy"
          effectiveDateLabel={effectiveDateLabel}
          reviewNotice="This privacy policy is a template starting point and has not been reviewed by legal counsel. Do not deploy to production without legal review."
          intro={policyIntro}
          sections={policySections}
        />
      </div>
    </div>
  );
}
