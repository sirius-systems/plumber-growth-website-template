import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * How it works (docs/06 §37). Four numbered steps with a restrained connector
 * rule running behind the markers from 64rem up.
 *
 * Wording never implies an appointment is confirmed on submit (UX-003) — the
 * section lede states it outright.
 */
export function ProcessSteps() {
  const { process } = homepageContent;

  return (
    <section className="section section-default" aria-labelledby="process-heading">
      <div className="section__inner">
        <p className="home-eyebrow">{process.eyebrow}</p>
        <h2 id="process-heading" className="section-heading home-section-heading">
          {process.heading}
        </h2>
        {/* --wide lifts the 68ch reading measure so this one-sentence lede sets
            on a single line across the section container instead of breaking in
            two. Below 48rem the cap returns and it wraps normally. */}
        <p className="section-lede section-lede--wide">{process.lede}</p>

        <ol className="home-process">
          {process.steps.map((step, index) => (
            <li key={step.title} className="home-process__step">
              <span className="home-process__marker">
                <LucideIcon name={step.icon} size={22} aria-hidden="true" />
                <span className="home-process__number" aria-hidden="true">
                  {index + 1}
                </span>
              </span>
              <h3 className="home-process__title">
                <span className="sr-only">{`Step ${index + 1}: `}</span>
                {step.title}
              </h3>
              <p className="home-process__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
