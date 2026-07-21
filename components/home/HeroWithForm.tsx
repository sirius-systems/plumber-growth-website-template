import { Suspense } from "react";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";

/**
 * Homepage hero (docs/06 §26). Content + actions on one side, the request form
 * on the other. Trust indicators are drawn from verified config values. The form
 * uses useSearchParams (service preselection) so it needs a Suspense boundary
 * under static export.
 */
export function HeroWithForm() {
  const { business, credentials, marketing, seo } = clientConfig;

  const trust: string[] = [];
  if (credentials.yearsInBusiness) trust.push(`${credentials.yearsInBusiness} years in business`);
  trust.push(`${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)`);
  if (credentials.licenseNumber) trust.push("Licensed & insured");

  return (
    <section className="section">
      <div
        className="container"
        style={{
          display: "grid",
          gap: "var(--space-12)",
          gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ color: "var(--color-text-muted)", margin: 0 }}>
            Plumbing services in {seo.primaryMarket}
          </p>
          <h1 className="heading-accent" style={{ maxWidth: "18ch" }}>
            {marketing.heroHeadline}
          </h1>
          <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
            {marketing.heroSubheadline}
          </p>

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3) var(--space-4)",
              listStyle: "none",
              padding: 0,
              margin: "0 0 var(--space-6)",
              color: "var(--color-text-muted)",
              fontWeight: 600,
            }}
          >
            {trust.map((t) => (
              <li key={t}>✓ {t}</li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Link className="btn btn--primary" href="/request-service/">
              Request Service
            </Link>
            <a className="btn btn--secondary" href={telHref(business.phone)}>
              Call {formatPhoneDisplay(business.phone)}
            </a>
          </div>
        </div>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-md)",
            padding: "var(--space-6)",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>Request service</h2>
          <p style={{ color: "var(--color-text-muted)", marginTop: 0 }}>
            Tell us what&rsquo;s going on, submitting is a request, not a confirmed
            appointment until we contact you.
          </p>
          <Suspense fallback={<p>Loading form…</p>}>
            <GeneralQuoteForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
