import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * "Signs you need [service]" grid (docs/06 §25).
 *
 * Restructured from bare icon+text rows into the reference's equal card grid.
 * The H2 and every problem string come from `content.problems` in config order,
 * unchanged and untruncated — the grid wraps to as many rows as the data needs,
 * so a service with more or fewer than four symptoms renders all of them.
 *
 * Existing per-service content stores symptoms as strings, so a shared
 * AlertTriangle icon is used per item, as before. The glyph keeps
 * --color-danger; the disc behind it is the neutral primary tint, because four
 * red-flooded cards in a row read as an error state rather than an index.
 */
export function ServiceProblems({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const problems = content?.problems ?? [];
  if (problems.length === 0) return null;

  return (
    <section className="section section-alternate" aria-labelledby="svc-problems-heading">
      <div className="section__inner">
        <h2 id="svc-problems-heading" className="section-heading svc-heading">
          Signs You Need {svc.name}
        </h2>

        <ul className="svc-problem-grid">
          {problems.map((p) => (
            <li key={p}>
              <article className="svc-problem">
                <span className="svc-problem__icon" aria-hidden="true">
                  <LucideIcon name="AlertTriangle" size={22} color="var(--color-danger)" />
                </span>
                <p className="svc-problem__text">{p}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
