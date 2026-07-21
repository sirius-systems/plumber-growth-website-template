export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  heading?: string;
  altBackground?: boolean;
}

/**
 * FAQ accordion (docs/06 §35). Uses native <details>/<summary> for accessible
 * disclosure — keyboard operable, visible focus, stable layout. Answers are
 * plain text; essential emergency instructions are never hidden inside this
 * component (they live in EmergencySafetyNotice).
 *
 * No FAQPage structured data is emitted here: the demo is noindex and review/FAQ
 * markup requires eligibility that a demo does not establish (docs/06 §35,
 * docs/07 §22).
 */
export function FAQAccordion({ items, heading = "Frequently Asked Questions", altBackground = false }: FAQAccordionProps) {
  return (
    <section
      className="section"
      style={altBackground ? { background: "var(--color-background-alt)" } : undefined}
    >
      <div className="container" style={{ maxWidth: "48rem" }}>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>{heading}</h2>
        {items.map((item, i) => (
          <details className="faq-item" key={i}>
            <summary>{item.question}</summary>
            <div>
              <p style={{ margin: 0, color: "var(--color-text-muted)" }}>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
