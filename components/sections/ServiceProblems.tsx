import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * "Signs you need [service]" grid (docs/06 §25). Reuses the icon + text grid
 * pattern. Existing per-service content stores symptoms as strings, so a shared
 * AlertTriangle icon is used per item.
 */
export function ServiceProblems({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const problems = content?.problems ?? [];
  if (problems.length === 0) return null;

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Signs You Need {svc.name}
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {problems.map((p) => (
            <li key={p} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <LucideIcon name="AlertTriangle" size={22} color="var(--color-primary-600)" style={{ flex: "none", marginTop: "2px" }} />
              <span style={{ fontSize: "15px", color: "var(--color-text)" }}>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
