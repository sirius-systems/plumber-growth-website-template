import Image from "next/image";
import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * DESIGN TRIAL — full-bleed photo variant of "Why Choose Us" (docs/06 §25).
 *
 * Isolated single-page experiment (faucet-repair only, see the service route).
 * Same four benefit cards as the default ServiceBenefits; only the visual
 * treatment changes: cards float over a full-bleed background photo behind a
 * dark scrim, with white icons + white text for legibility. Uses the existing
 * hero-placeholder.svg (placeholder quality — for review only). NOT wired into
 * the shared template's default output.
 */
export function ServiceBenefitsTrial({ svc }: { svc: PlumbingService }) {
  const { business, credentials, marketing } = clientConfig;
  const benefits: { icon: string; title: string; desc: string }[] = [
    { icon: "BadgeCheck", title: "Honest, Upfront Pricing", desc: "We explain pricing before work begins, no surprise invoices." },
    { icon: "Clock", title: "Fast, Around-the-Clock Response", desc: "Emergency plumbing help is available 24/7 across the valley." },
    {
      icon: "Shield",
      title: "Licensed & Insured",
      desc: credentials.licenseNumber
        ? `${credentials.licenseJurisdiction} #${credentials.licenseNumber}.`
        : "Fully licensed and insured for your protection.",
    },
    { icon: "Wrench", title: "Experienced Local Team", desc: "Licensed plumbers who know Las Vegas homes and hard-water conditions." },
  ];

  return (
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      {/* Full-bleed placeholder photo + dark scrim for text contrast (WCAG 1.4.3). */}
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "rgba(10, 15, 28, 0.72)" }}
      />

      <div className="section__inner" style={{ position: "relative" }}>
        <h2
          className="section-heading"
          style={{ fontSize: "var(--font-size-2xl)", marginTop: 0, color: "#fff" }}
        >
          Why Choose {business.publicName} for {svc.name}
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {benefits.map((b) => (
            <li
              key={b.title}
              style={{
                background: "rgba(15, 23, 42, 0.55)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  flex: "none",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LucideIcon name={b.icon} size={24} color="#fff" />
              </span>
              <div>
                <h3 style={{ margin: "0 0 0.25rem", fontSize: "16px", color: "#fff" }}>{b.title}</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
