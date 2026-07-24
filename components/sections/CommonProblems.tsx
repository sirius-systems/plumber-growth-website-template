import { LucideIcon } from "@/components/ui/LucideIcon";
import { homeProblems } from "@/content/homepage/problems";

/** "Common problems we solve" (docs/04 §6). Icon + title + description grid. */
export function CommonProblems() {
  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Common Plumbing Problems We Solve
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto var(--space-8)",
            color: "var(--color-text-muted)",
          }}
        >
          If you&rsquo;re dealing with any of these, our licensed team can help.
        </p>
        <ul className="problems-grid">
          {homeProblems.map((p) => (
            <li key={p.title} className="stacked-card" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <LucideIcon
                name={p.icon}
                size={28}
                color="var(--color-primary-600)"
                className="stacked-card-icon"
              />
              <h3 style={{ margin: 0, fontSize: "16px", color: "var(--color-primary-900)" }}>
                {p.title}
              </h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-muted)" }}>
                {p.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
