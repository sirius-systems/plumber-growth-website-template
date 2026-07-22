import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactServiceArea } from "@/components/sections/contact/ContactServiceArea";
import { ContactTrust } from "@/components/sections/contact/ContactTrust";
import { ContactFaq } from "@/components/sections/contact/ContactFaq";
import { ContactCta } from "@/components/sections/contact/ContactCta";

export const metadata: Metadata = {
  title: `Contact ${clientConfig.business.publicName} | ${clientConfig.region.name} Plumber`,
  description:
    "Contact Las Vegas Pro Plumbing for plumbing service in Clark County. Call (888) 308-3262 or submit a service request online. Licensed, insured, fast response.",
  alternates: { canonical: "/contact/" },
};

/** Contact page (docs/04 §7). Conversion-focused. */
export default function ContactPage() {
  const { business } = clientConfig;
  const canonical = `${business.websiteUrl}/contact/`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.websiteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: canonical },
    ],
  };
  // ContactPage only. LocalBusiness (Plumber) JSON-LD already ships on the
  // homepage and location pages — not duplicated here (docs/07 §29).
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${business.publicName}`,
    url: canonical,
    description: `Contact ${business.publicName} for plumbing service in ${clientConfig.region.name}.`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />

      <ContactHero />
      <ContactMethods />
      <ContactFormSection />
      <ContactServiceArea />
      <ContactTrust />
      <ContactFaq />
      <ContactCta />
    </>
  );
}
