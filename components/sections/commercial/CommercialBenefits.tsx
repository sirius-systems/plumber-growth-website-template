import { clientConfig } from "@/config/client";
import { commercialBenefits } from "@/content/commercial";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Commercial benefits (docs/06 §25). Background alternates: section-alternate
 * when the metrics band rendered above, else section-default (avoids two
 * adjacent same-background sections).
 */
export function CommercialBenefits({ alternate = false }: { alternate?: boolean }) {
  return (
    <section className={`section ${alternate ? "section-alternate" : "section-default"}`}>
      <div className="section__inner" style={{ maxWidth: "56.25rem" }}>
        <h2 className="section-heading">
          Why Businesses Choose {clientConfig.business.publicName}
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {commercialBenefits.map((b) => (
            <li
              key={b.heading}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                padding: "var(--space-6)",
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "flex-start",
              }}
            >
              <span style={{ width: 44, height: 44, flex: "none", borderRadius: "50%", background: "var(--color-primary-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LucideIcon name={b.icon} size={24} color="var(--color-primary-600)" />
              </span>
              <div>
                <h3 style={{ margin: "0 0 var(--space-1)", fontSize: "var(--font-size-base)", color: "var(--color-primary-900)" }}>{b.heading}</h3>
                <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)", lineHeight: "var(--line-height-body)" }}>{b.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
