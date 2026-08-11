import Image from "next/image";
import { clientConfig } from "@/config/client";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/** "A, B, and C" — service-area names stay sourced from client config. */
function formatAreaList(names: string[]): string {
  const last = names.at(-1);
  if (last === undefined) return "";
  if (names.length === 1) return last;
  return `${names.slice(0, -1).join(", ")}, and ${last}`;
}

/**
 * Homepage hero (docs/06 §26). Full-bleed background image + dark overlay; white
 * copy on the left, the short capture form in a white elevated card on the right.
 *
 * Sizing lives in `.hero--home` (globals.css), not inline: the previous
 * `minHeight: 580` + `paddingBlock: 80px` were raw values outside the spacing
 * scale, so they applied identically at 375px and 1440px and could not pick up
 * the section-rhythm breakpoints every other band uses.
 */
export function HomeHero() {
  const { marketing, seo, operations, serviceAreas } = clientConfig;

  // Gates the emergency availability pill above the eyebrow (docs/06 §38).
  const emergency247 = operations.emergencyServiceAvailable && operations.twentyFourSevenService;

  const areaList = formatAreaList(serviceAreas.map((a) => a.name));

  return (
    <section className="hero hero--home">
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

      <div className="hero-content section__inner">
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
                  gap: "var(--space-2)",
                  margin: "0 0 var(--space-3)",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-pill)",
                  padding: "var(--space-1) var(--space-3)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "var(--space-2)",
                    height: "var(--space-2)",
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
            <p style={{ maxWidth: "var(--measure-copy)", fontSize: "var(--font-size-lg)", color: "var(--color-text-on-media)" }}>
              Fast, reliable plumbing solutions for {areaList} — licensed, insured, and ready
              when you need us most.
            </p>

            <BenefitsList />
            <HeroCtaButtons />
          </div>

          <HeroFormCard heading="Request Service" showLogo />
        </div>
      </div>
    </section>
  );
}
