import Image from "next/image";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/**
 * Homepage hero (docs/06 §26). Full-bleed background image + dark overlay; white
 * copy on the left, the short capture form in a white elevated card on the right.
 */
export function HomeHero() {
  const { business, credentials, marketing, seo, operations } = clientConfig;

  const trust: TrustItem[] = [];
  if (credentials.licenseNumber) trust.push({ icon: "badge-check", label: "Licensed" });
  if (credentials.insured) trust.push({ icon: "shield", label: "Insured" });
  if (credentials.bonded) trust.push({ icon: "shield-check", label: "Bonded" });
  if (credentials.yearsInBusiness) trust.push({ icon: "award", label: `${credentials.yearsInBusiness}+ years` });
  trust.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` });
  if (operations.emergencyServiceAvailable && operations.twentyFourSevenService)
    trust.push({ icon: "zap", label: "24/7 emergency" });

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
                fontSize: "var(--font-size-xs)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-on-media)",
              }}
            >
              Plumbing services in {seo.primaryMarket}
            </p>
            <h1 className="heading-accent" style={{ maxWidth: "18ch" }}>
              {marketing.heroHeadline}
            </h1>
            <p style={{ maxWidth: "480px", fontSize: "var(--font-size-lg)", color: "var(--color-text-on-media)" }}>
              {marketing.heroSubheadline}
            </p>
            <p style={{ margin: "var(--space-4) 0" }}>
              <a href={telHref(business.phone)} style={{ fontSize: "var(--font-size-xl)", fontWeight: 700 }}>
                {formatPhoneDisplay(business.phone)}
              </a>
            </p>
            <TrustBar variant="over-media" items={trust} />
          </div>

          <HeroFormCard heading="Request Service" showLogo />
        </div>
      </div>
    </section>
  );
}
