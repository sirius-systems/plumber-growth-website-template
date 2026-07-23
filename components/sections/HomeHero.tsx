import Image from "next/image";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { HeroFormCard } from "@/components/forms/HeroFormCard";

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
              {trust.map((t) => (
                <li key={t} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <LucideIcon name="CheckCircle" size={14} color="var(--color-accent-500)" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <HeroFormCard heading="Request Service" />
        </div>
      </div>
    </section>
  );
}
