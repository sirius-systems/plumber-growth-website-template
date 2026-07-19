import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/layout/SimplePage";
import { ContactForm } from "@/components/forms/ContactForm";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${clientConfig.business.publicName} for plumbing help in ${clientConfig.seo.primaryMarket}.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const { business } = clientConfig;
  return (
    <SimplePage title={`Contact ${business.publicName}`} intro="Reach us by phone or request service online.">
      <p>
        <a className="btn btn--secondary" href={telHref(business.phone)}>
          Call {formatPhoneDisplay(business.phone)}
        </a>{" "}
        <Link className="btn btn--primary" href="/request-service/">
          Request Service
        </Link>
      </p>
      <p>
        Email: <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
      <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Send us a message</h2>
      <p>
        For a detailed plumbing service request, the{" "}
        <Link href="/request-service/">Request Service</Link> form is the fastest path.
      </p>
      <ContactForm />
    </SimplePage>
  );
}
