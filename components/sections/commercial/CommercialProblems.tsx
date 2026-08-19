import { commercialProblems } from "@/content/commercial";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Common commercial plumbing problems grid (docs/06 §25). */
export function CommercialProblems() {
  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading">
          Common Commercial Plumbing Problems
        </h2>
        {/* .problems-grid is the shared 1 / 2 / 3-column step (globals.css), so
            the six problems land as two rows of three on desktop. The previous
            inline `auto-fill, minmax(260px, 1fr)` resolved to five tracks at the
            container's full width and left a single orphan on the second row. */}
        <ul className="problems-grid" style={{ marginTop: "var(--space-8)" }}>
          {commercialProblems.map((p) => (
            <li key={p.title} className="stacked-card" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <LucideIcon name={p.icon} size={28} color="var(--color-primary-600)" className="stacked-card-icon" />
              <h3 style={{ margin: 0, fontSize: "var(--font-size-base)", color: "var(--color-primary-900)" }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
