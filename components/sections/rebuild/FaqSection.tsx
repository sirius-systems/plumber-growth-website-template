import type { FAQItem } from "@/components/sections/FAQAccordion";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Reusable FAQ accordion (docs/06 §35) for the rebuilt templates. Native
 * details/summary with a rotating chevron. No FAQPage structured data (demo is
 * noindex; eligibility not established).
 *
 * `surface` and `cta` are additive and default to the previous behaviour, so
 * every existing caller renders exactly as before.
 *
 * @param surface Section background. "alternate" lets a page alternate this band
 *                against a white section directly above it.
 * @param cta     Optional link rendered below the list (e.g. to the FAQ hub).
 */
export function FaqSection({
  items,
  heading = "Frequently Asked Questions",
  subheading,
  id,
  surface = "default",
  cta,
}: {
  items: FAQItem[];
  heading?: string;
  subheading?: string;
  id?: string;
  surface?: "default" | "alternate";
  cta?: { label: string; href: string };
}) {
  return (
    <section id={id} className={`section section-${surface}`}>
      <div className="section__inner" style={{ maxWidth: "50rem" }}>
        <h2 className="section-heading">
          {heading}
        </h2>
        {subheading && <p className="section-lede">{subheading}</p>}
        {items.map((f, i) => (
          <details className="faq-q" key={i}>
            <summary>
              {f.question}
              <LucideIcon name="ChevronDown" size={18} color="var(--color-primary-600)" />
            </summary>
            <div>{f.answer}</div>
          </details>
        ))}
        {cta && (
          <div className="home-section-actions">
            <Button variant="text" href={cta.href}>
              {cta.label} →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
