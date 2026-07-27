import Image from "next/image";
import { clientConfig } from "@/config/client";
import { commercialSubheading } from "@/content/commercial";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { CommercialQuoteForm } from "@/components/forms/CommercialQuoteForm";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/** Commercial hero (docs/06 §26). Shared hero bg + overlay; commercial form card. */
export function CommercialHero() {
  const { marketing, region, credentials } = clientConfig;
  const subheading = clientConfig.commercialSubheading ?? commercialSubheading;
  const bullets = [
    "24/7 emergency support for commercial properties",
    "Multi-unit and multi-system capabilities",
    "Written proposals and post-job documentation",
  ];

  const trustItems: TrustItem[] = [
    { icon: "badge-check", label: "Licensed" },
    { icon: "shield", label: "Insured" },
  ];
  if (credentials.bonded) trustItems.push({ icon: "shield-check", label: "Bonded" });
  trustItems.push({ icon: "check-circle", label: "Code-Compliant" });

  return (
    <section className="hero" style={{ display: "flex", alignItems: "center" }}>
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section__inner" style={{ paddingBlock: "64px" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <p className="hero-eyebrow" style={{ margin: 0, fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-on-media)" }}>
              For Property and Facility Managers
            </p>
            <h1 className="heading-accent">Commercial Plumbing Services in {region.name}</h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "var(--color-text-on-media)" }}>{subheading}</p>
            <TrustBar variant="over-media" items={trustItems} />
            <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", fontSize: "14px" }}>
              {bullets.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "6px", color: "var(--color-text-on-media)" }}>
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
