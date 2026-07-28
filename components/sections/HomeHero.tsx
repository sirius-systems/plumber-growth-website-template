import Image from "next/image";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";
import { Button } from "@/components/ui/Button";

/**
 * Homepage hero (docs/06 §26). Full-bleed background image + dark overlay; white
 * copy on the left, the short capture form in a white elevated card on the right.
 */
export function HomeHero() {
  const { business, credentials, marketing, seo, operations } = clientConfig;

  // Same verified condition that gates the 24/7 TrustBar item below (docs/06 §38).
  const emergency247 = operations.emergencyServiceAvailable && operations.twentyFourSevenService;

  const trust: TrustItem[] = [];
  if (credentials.licenseNumber) trust.push({ icon: "badge-check", label: "Licensed" });
  if (credentials.insured) trust.push({ icon: "shield", label: "Insured" });
  if (credentials.bonded) trust.push({ icon: "shield-check", label: "Bonded" });
  if (credentials.yearsInBusiness) trust.push({ icon: "award", label: `${credentials.yearsInBusiness}+ years` });
  trust.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` });
  if (emergency247) trust.push({ icon: "zap", label: "24/7 emergency" });

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
            {/* Emergency availability pill — same translucent chrome as the
                service-area pills in HubHero. Rendered only when config verifies
                24/7 emergency service (docs/06 §38). */}
            {emergency247 && (
              <p
                className="hero-badge"
                style={{
                  alignItems: "center",
                  gap: "0.5rem",
                  margin: "0 0 var(--space-3)",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-pill)",
                  padding: "0.25rem 0.75rem",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--color-accent-500)",
                    flex: "none",
                  }}
                />
                24/7 Emergency Service Available
              </p>
            )}
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "var(--space-3)",
                margin: "var(--space-4) 0",
              }}
            >
              <a href={telHref(business.phone)} style={{ fontSize: "var(--font-size-xl)", fontWeight: 700 }}>
                {formatPhoneDisplay(business.phone)}
              </a>
              <Button variant="inverse" href="/services/">
                View Our Services
              </Button>
            </div>
            <TrustBar variant="over-media" items={trust} layout="column" />
          </div>

          <HeroFormCard heading="Request Service" showLogo />
        </div>
      </div>
    </section>
  );
}
