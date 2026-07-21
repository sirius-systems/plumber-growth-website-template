import { Suspense } from "react";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";
import { Hero } from "@/components/sections/Hero";

/**
 * Homepage hero (docs/06 §26). Full-bleed background image + dark overlay; white
 * copy on the left, the request form in a white elevated card on the right. The
 * form uses useSearchParams (service preselection) so it needs a Suspense
 * boundary under static export.
 */
export function HeroWithForm() {
  const { business, credentials, marketing, seo } = clientConfig;

  const trust: string[] = [];
  if (credentials.yearsInBusiness) trust.push(`${credentials.yearsInBusiness} years in business`);
  trust.push(`${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)`);
  if (credentials.licenseNumber) trust.push("Licensed & insured");

  return (
    <Hero contentClassName="container container--wide">
      <div
        style={{
          display: "grid",
          gap: "var(--space-12)",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(20rem, 100%), 1fr))",
          alignItems: "center",
        }}
      >
        <div className="hero-copy">
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Plumbing services in {seo.primaryMarket}
          </p>
          <h1 className="heading-accent" style={{ maxWidth: "18ch" }}>
            {marketing.heroHeadline}
          </h1>
          <p
            style={{
              maxWidth: "var(--measure-reading)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {marketing.heroSubheadline}
          </p>

          <p style={{ margin: "var(--space-4) 0" }}>
            <a href={telHref(business.phone)} style={{ fontSize: "24px", fontWeight: 700 }}>
              {formatPhoneDisplay(business.phone)}
            </a>
          </p>

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2) var(--space-3)",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {trust.map((t, i) => (
              <li key={t}>
                {i > 0 && <span aria-hidden="true" style={{ marginRight: "var(--space-3)" }}>·</span>}
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-form-card">
          <h2 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>Request service</h2>
          <p style={{ color: "var(--color-text-muted)", marginTop: 0 }}>
            Tell us what&rsquo;s going on, submitting is a request, not a confirmed appointment
            until we contact you.
          </p>
          <Suspense fallback={<p>Loading form…</p>}>
            <GeneralQuoteForm />
          </Suspense>
        </div>
      </div>
    </Hero>
  );
}
