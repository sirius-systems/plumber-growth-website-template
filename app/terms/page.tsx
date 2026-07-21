import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern use of the Las Vegas Pro Plumbing website.",
  alternates: { canonical: "/terms/" },
};

/** Legal page (docs/04 §4.4). Requires legal review before launch (docs/14 §20). */
export default function TermsPage() {
  const { business, location } = clientConfig;
  const muted = { color: "var(--color-text-muted)" } as const;
  const h2 = { fontSize: "var(--font-size-2xl)" } as const;

  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Terms &amp; Conditions</h1>

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
          ⚠ Demo Notice: This is a demonstration site. These terms are a placeholder for
          demonstration purposes only. Final legal documents require review by qualified legal
          counsel before publication on a live client site.
        </p>
      </div>

      <p style={muted}>
        <em>The following is placeholder legal language for demonstration only.</em>
      </p>

      <h2 style={h2}>Acceptance of terms</h2>
      <p style={muted}>
        By accessing and using this website, you agree to these terms. If you do not agree, please
        do not use the site.
      </p>

      <h2 style={h2}>Use of the site</h2>
      <p style={muted}>
        You agree to use this site only for lawful purposes and not to misuse it or interfere with
        its operation. Content on this site is provided for general information about our plumbing
        services.
      </p>

      <h2 style={h2}>No guarantee of service</h2>
      <p style={muted}>
        Submitting a form on this site is a request for service — it does not create a contract,
        guarantee service, guarantee a response time, or confirm an appointment. An appointment is
        confirmed only when we contact you directly.
      </p>

      <h2 style={h2}>Intellectual property</h2>
      <p style={muted}>
        The content, branding, and materials on this site are owned by {business.legalName} or its
        licensors and may not be reproduced without permission.
      </p>

      <h2 style={h2}>Limitation of liability</h2>
      <p style={muted}>
        To the fullest extent permitted by law, {business.legalName} is not liable for damages
        arising from your use of this website. (Placeholder — confirm with legal counsel.)
      </p>

      <h2 style={h2}>Changes to these terms</h2>
      <p style={muted}>
        We may update these terms from time to time. Continued use of the site after changes
        constitutes acceptance of the revised terms.
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
