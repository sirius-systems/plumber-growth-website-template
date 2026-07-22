import Image from "next/image";
import { clientConfig } from "@/config/client";
import { subheading, introParagraph } from "@/content/services-hub";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { HeroFormCard } from "@/components/forms/HeroFormCard";

/** Services hub hero (docs/06 §26). Shared hero bg + overlay; general-quote form. */
export function ServicesHubHero() {
  const { marketing, region } = clientConfig;

  return (
    <section className="hero" style={{ display: "flex", alignItems: "center" }}>
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section__inner" style={{ paddingBlock: "64px" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <p className="hero-eyebrow" style={{ margin: 0, fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.70)" }}>
              Licensed Plumbing · {region.name}
            </p>
            <h1 className="heading-accent">Plumbing Services in {region.name}</h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "rgba(255,255,255,0.85)" }}>{subheading}</p>
            <p style={{ maxWidth: "480px", fontSize: "15px", lineHeight: 1.75, color: "rgba(255,255,255,0.75)" }}>{introParagraph}</p>
            <p style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
              {["Licensed", "Insured", region.name].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <LucideIcon name="CheckCircle" size={14} color="var(--color-accent-500)" />
                  {t}
                </span>
              ))}
            </p>
          </div>

          <HeroFormCard heading="Request Plumbing Service" />
        </div>
      </div>
    </section>
  );
}
