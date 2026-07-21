import Image from "next/image";
import { clientConfig } from "@/config/client";
import { commercialSubheading } from "@/content/commercial";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { CommercialQuoteForm } from "@/components/forms/CommercialQuoteForm";

/** Commercial hero (docs/06 §26). Shared hero bg + overlay; commercial form card. */
export function CommercialHero() {
  const { marketing, region } = clientConfig;
  const subheading = clientConfig.commercialSubheading ?? commercialSubheading;
  const bullets = [
    "24/7 emergency support for commercial properties",
    "Multi-unit and multi-system capabilities",
    "Written proposals and post-job documentation",
  ];

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
              For Property and Facility Managers
            </p>
            <h1 className="heading-accent">Commercial Plumbing Services in {region.name}</h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "rgba(255,255,255,0.85)" }}>{subheading}</p>
            <p style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
              {["Licensed", "Insured", "Code-Compliant"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <LucideIcon name="CheckCircle" size={14} color="var(--color-accent-500)" />
                  {t}
                </span>
              ))}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", fontSize: "14px" }}>
              {bullets.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "6px", color: "rgba(255,255,255,0.85)" }}>
                  <LucideIcon name="Check" size={14} color="var(--color-accent-500)" style={{ marginTop: "4px", flex: "none" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-form-card">
            <h2 style={{ marginTop: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-primary-900)" }}>
              Request Commercial Service
            </h2>
            <CommercialQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
