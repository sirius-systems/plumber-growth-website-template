import Image from "next/image";
import { clientConfig } from "@/config/client";
import { commercialSubheading } from "@/content/commercial";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { CommercialQuoteForm } from "@/components/forms/CommercialQuoteForm";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/** Commercial hero (docs/06 §26). Shared hero bg + overlay; commercial form card. */
export function CommercialHero() {
  const { marketing, region } = clientConfig;
  const subheading = clientConfig.commercialSubheading ?? commercialSubheading;
  // Each bullet carries the icon that describes it rather than a repeated
  // checkmark; the strings are unchanged. `icon` is a Lucide name resolved via
  // components/ui/LucideIcon.
  const bullets: { icon: string; label: string }[] = [
    { icon: "Clock", label: "24/7 emergency support for commercial properties" },
    { icon: "Building2", label: "Multi-unit and multi-system capabilities" },
    { icon: "FileText", label: "Written proposals and post-job documentation" },
  ];


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
              For Property and Facility Managers
            </p>
            <h1 className="heading-accent">Commercial Plumbing Services in {region.name}</h1>
            <p style={{ maxWidth: "var(--measure-copy)", fontSize: "var(--font-size-lg)", color: "var(--color-text-on-media)" }}>{subheading}</p>
            <BenefitsList />
            <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", fontSize: "var(--font-size-sm)" }}>
              {bullets.map((b) => (
                <li key={b.label} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)", color: "var(--color-text-on-media)" }}>
                  <LucideIcon name={b.icon} size={16} color="var(--color-accent-500)" style={{ marginTop: "var(--space-1)", flex: "none" }} />
                  {b.label}
                </li>
              ))}
            </ul>
            <HeroCtaButtons />
          </div>

          <div className="hero-form-card">
            <h2 style={{ marginTop: 0, fontSize: "var(--font-size-base)", fontWeight: 600, color: "var(--color-primary-900)" }}>
              Request Commercial Service
            </h2>
            <CommercialQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
