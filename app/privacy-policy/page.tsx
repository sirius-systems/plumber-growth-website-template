import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Las Vegas Pro Plumbing collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy/" },
};

/**
 * Legal page (docs/04 §4.4). Final legal language requires professional review
 * (docs/14 §20) — this is placeholder structure for the demo, not approved copy.
 */
export default function PrivacyPolicyPage() {
  const { business, location } = clientConfig;
  const muted = { color: "var(--color-text-muted)" } as const;
  const h2 = { fontSize: "var(--font-size-2xl)" } as const;

  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Privacy Policy</h1>

      <div
        role="note"
        style={{
          border: "2px solid var(--color-warning)",
          borderRadius: "var(--radius-md)",
          padding: "var(--space-4) var(--space-6)",
          marginBottom: "var(--space-6)",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>
          ⚠ Demo Notice: This is a demonstration site. This privacy policy is a placeholder for
          demonstration purposes only. Final legal documents require review by qualified legal
          counsel before publication on a live client site.
        </p>
      </div>

      <p style={muted}>
        <em>The following is placeholder legal language for demonstration only.</em>
      </p>

      <h2 style={h2}>Information we collect</h2>
      <p style={muted}>
        When you submit a form on this site, we collect the information you provide — such as your
        name, email address, phone number, service address, and the details of your request. We may
        also collect limited technical and analytics data as you use the site.
      </p>

      <h2 style={h2}>How we use your information</h2>
      <p style={muted}>
        We use your information to respond to your requests, provide plumbing services, follow up
        about your inquiry, and improve our website. We do not sell your personal information.
      </p>

      <h2 style={h2}>SMS and email consent</h2>
      <p style={muted}>
        By providing your phone number or email and consenting on our forms, you agree that we may
        contact you about your request by phone, text, or email. Message and data rates may apply.
        You can opt out of marketing communications at any time.
      </p>

      <h2 style={h2}>Data retention</h2>
      <p style={muted}>
        We retain your information for as long as needed to provide services and meet legal and
        business requirements, after which it is deleted or anonymized. (Placeholder — confirm
        retention periods with legal counsel.)
      </p>

      <h2 style={h2}>Third-party services</h2>
      <p style={muted}>
        We use trusted third-party providers to operate this site and manage communications,
        including GoHighLevel (customer relationship management and messaging) and Cloudflare
        (website hosting and security). These providers process data on our behalf under their own
        terms.
      </p>

      <h2 style={h2}>Your choices</h2>
      <p style={muted}>
        You may request access to, correction of, or deletion of your personal information, and you
        may opt out of marketing messages. Contact us using the details below.
      </p>

      <h2 style={h2}>Contact us</h2>
      <p style={muted}>
        {business.legalName}
        <br />
        {location.streetAddress}, {location.city}, {location.state} {location.postalCode}
        <br />
        <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>
        <br />
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </section>
  );
}
