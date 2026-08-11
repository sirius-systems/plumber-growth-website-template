import Image from "next/image";
import { clientConfig } from "@/config/client";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/** Service-areas hub hero (docs/06 §26). Shared hero bg + overlay pattern. */
export function HubHero() {
  const { marketing, region, serviceAreas } = clientConfig;


  return (
    <section className="hero" style={{ display: "flex", alignItems: "center" }}>
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section__inner" style={{ paddingBlock: "var(--space-16)" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <p className="hero-eyebrow" style={{ margin: 0, fontSize: "var(--font-size-xs)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-on-media)" }}>
              Licensed Plumbing · {region.name}
            </p>
            <h1 className="heading-accent">Plumbing Services in {region.name}</h1>
            <p style={{ maxWidth: "var(--measure-copy)", fontSize: "var(--font-size-lg)", color: "var(--color-text-on-media)" }}>{region.subheading}</p>
            <BenefitsList />
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", listStyle: "none", padding: 0, margin: "var(--space-4) 0 0" }}>
              {serviceAreas.map((a) => (
                <li
                  key={a.name}
                  style={{ background: "rgba(255,255,255,0.12)", borderRadius: "var(--radius-pill)", padding: "var(--space-1) var(--space-3)", fontSize: "var(--font-size-sm)", color: "#fff" }}
                >
                  {a.name}
                </li>
              ))}
            </ul>
            <HeroCtaButtons />
          </div>

          <HeroFormCard heading="Request Service" showLogo />
        </div>
      </div>
    </section>
  );
}
