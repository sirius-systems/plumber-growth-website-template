import Image from "next/image";
import { clientConfig } from "@/config/client";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm";

/** Service-areas hub hero (docs/06 §26). Shared hero bg + overlay pattern. */
export function HubHero() {
  const { marketing, region, serviceAreas } = clientConfig;

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
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "rgba(255,255,255,0.85)" }}>{region.subheading}</p>
            <p style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
              {["Licensed", "Insured", `Serving ${region.name}`].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <LucideIcon name="CheckCircle" size={14} color="var(--color-accent-500)" />
                  {t}
                </span>
              ))}
            </p>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none", padding: 0, margin: "var(--space-4) 0 0" }}>
              {serviceAreas.map((a) => (
                <li
                  key={a.name}
                  style={{ background: "rgba(255,255,255,0.12)", borderRadius: "var(--radius-pill)", padding: "0.25rem 0.75rem", fontSize: "13px", color: "#fff" }}
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-form-card">
            <h2 style={{ marginTop: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-primary-900)" }}>Request Service</h2>
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
