import { commercialProcess } from "@/content/commercial";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Commercial process steps (docs/06 §37). Dedicated component because the shared
 * ServiceProcess renders hardcoded steps and must not be modified. Same visual
 * treatment (numbered circle + icon + heading + description). Wording never
 * states an appointment is confirmed instantly (UX-003).
 */
export function CommercialProcess() {
  return (
    <section id="process" className="section section-default">
      <div className="section__inner" style={{ maxWidth: "50rem" }}>
        <h2 className="section-heading">
          Our Commercial Plumbing Process
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
          From first call to post-job report.
        </p>
        <ol style={{ listStyle: "none", padding: 0, margin: "var(--space-8) 0 0" }}>
          {commercialProcess.map((step, i) => (
            <li
              key={step.heading}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "var(--space-6)",
                alignItems: "start",
                padding: "var(--space-6) 0",
                borderBottom: i < commercialProcess.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div
                aria-hidden="true"
                style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-primary-50)", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <span className="display-heading" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary-700)" }}>
                  {i + 1}
                </span>
              </div>
              <div>
                <LucideIcon name={step.icon} size={20} color="var(--color-accent-500)" style={{ marginBottom: "var(--space-2)" }} />
                <h3 style={{ margin: "0 0 var(--space-1)", fontSize: "var(--font-size-lg)", color: "var(--color-primary-900)" }}>
                  <span className="sr-only">{`Step ${i + 1}: `}</span>
                  {step.heading}
                </h3>
                <p style={{ margin: 0, fontSize: "var(--font-size-base)", lineHeight: "var(--line-height-loose)", color: "var(--color-text)" }}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
