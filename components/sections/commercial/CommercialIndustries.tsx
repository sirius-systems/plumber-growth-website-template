import { clientConfig } from "@/config/client";
import { commercialIndustries } from "@/content/commercial";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** "Who we serve" industry grid (docs/06 §25). */
export function CommercialIndustries() {
  return (
    <section id="industries" className="section section-default">
      <div className="section__inner" style={{ maxWidth: "900px" }}>
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Who We Serve
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
          Commercial plumbing for a range of property types and industries across {clientConfig.region.name}.
        </p>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {commercialIndustries.map((it) => (
            <li key={it.label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <LucideIcon name={it.icon} size={28} color="var(--color-primary-600)" />
              <h3 style={{ margin: 0, fontSize: "16px", color: "var(--color-primary-900)" }}>{it.label}</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-muted)" }}>{it.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
