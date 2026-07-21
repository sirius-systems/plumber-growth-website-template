import Image from "next/image";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm";

/**
 * Homepage hero (docs/06 §26). Full-bleed background image + dark overlay; white
 * copy on the left, the short capture form in a white elevated card on the right.
 */
export function HomeHero() {
  const { business, credentials, marketing, seo, operations } = clientConfig;

  const trust: string[] = [];
  if (credentials.licenseNumber) trust.push("Licensed");
  if (credentials.insured) trust.push("Insured");
  if (credentials.yearsInBusiness) trust.push(`${credentials.yearsInBusiness}+ years`);
  trust.push(`${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)`);
  if (operations.emergencyServiceAvailable && operations.twentyFourSevenService)
    trust.push("24/7 emergency");

  return (
    <section
      className="hero"
      style={{ minHeight: 580, display: "flex", alignItems: "center" }}
    >
      <div className="hero-media" aria-hidden="true">
        <Image
          src={marketing.heroImageSrc}
          alt={marketing.heroImageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content section__inner" style={{ paddingBlock: "80px" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <p
              className="hero-eyebrow"
              style={{
                margin: 0,
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.70)",
              }}
            >
              Plumbing services in {seo.primaryMarket}
            </p>
            <h1 className="heading-accent" style={{ maxWidth: "18ch" }}>
              {marketing.heroHeadline}
            </h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "rgba(255,255,255,0.85)" }}>
              {marketing.heroSubheadline}
            </p>
            <p style={{ margin: "var(--space-4) 0" }}>
              <a href={telHref(business.phone)} style={{ fontSize: "22px", fontWeight: 700 }}>
                {formatPhoneDisplay(business.phone)}
              </a>
            </p>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "var(--space-2)",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "13px",
                color: "rgba(255,255,255,0.70)",
              }}
            >
              {trust.map((t, i) => (
                <li key={t}>
                  {i > 0 && <span aria-hidden="true" style={{ margin: "0 var(--space-2)" }}>·</span>}
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-form-card">
            <h2
              style={{ marginTop: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-primary-900)" }}
            >
              Request Service
            </h2>
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
