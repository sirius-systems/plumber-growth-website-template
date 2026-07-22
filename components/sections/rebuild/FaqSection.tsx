import type { FAQItem } from "@/components/sections/FAQAccordion";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Reusable FAQ accordion (docs/06 §35) for the rebuilt templates. Native
 * details/summary with a rotating chevron. No FAQPage structured data (demo is
 * noindex; eligibility not established).
 */
export function FaqSection({
  items,
  heading = "Frequently Asked Questions",
  subheading,
  id,
}: {
  items: FAQItem[];
  heading?: string;
  subheading?: string;
  id?: string;
}) {
  return (
    <section id={id} className="section section-default">
      <div className="section__inner" style={{ maxWidth: "800px" }}>
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          {heading}
        </h2>
        {subheading && (
          <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
            {subheading}
          </p>
        )}
        {items.map((f, i) => (
          <details className="faq-q" key={i}>
            <summary>
              {f.question}
              <LucideIcon name="ChevronDown" size={18} color="var(--color-primary-600)" />
            </summary>
            <div>{f.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
