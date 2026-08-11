import { LucideIcon } from "@/components/ui/LucideIcon";
import { homeProblems } from "@/content/homepage/problems";

/**
 * "Common problems we solve" (docs/04 §6) as a scannable index rather than a
 * card grid.
 *
 * A visitor arrives mid-problem and scans for their own symptom. Six equal
 * cards give six equal stops and no scan order, and this section sat between
 * two other card grids (pathways, services), so the page read as one repeating
 * shape. It is a rule-separated, title-led index instead: two columns of short
 * rows from 48rem, one column below. Same six items, same strings, same icons —
 * and it is now the page's densest band, which gives the vertical rhythm
 * something to vary against on either side (docs/06 §12).
 *
 * The dashed "Photo coming soon" placeholder that held the left column is gone:
 * docs/06 §38 rules out placeholder / "coming soon" content, and the index uses
 * the full width for its two columns.
 */
export function CommonProblems() {
  return (
    <section className="section section--compact section-default">
      <div className="section__inner">
        <h2 className="section-heading">Common Plumbing Problems We Solve</h2>
        <p className="section-lede">
          If you&rsquo;re dealing with any of these, our licensed team can help.
        </p>
        <ul className="problem-index">
          {homeProblems.map((p) => (
            <li key={p.title} className="problem-index__item">
              <span className="problem-index__icon">
                <LucideIcon name={p.icon} size={20} color="var(--color-primary-600)" />
              </span>
              <h3 className="problem-index__title">{p.title}</h3>
              <p className="problem-index__desc">{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
