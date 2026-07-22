import Link from "next/link";
import { faqCategories } from "@/content/faqs";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * FAQ categories with accordions (docs/06 §35). Reuses the global `.faq-q`
 * accordion styles; internal links render as a "Related:" line below each answer.
 */
export function FaqHub() {
  return (
    <section className="section section-default">
      <div className="section__inner" style={{ maxWidth: "800px" }}>
        {faqCategories.map((cat) => (
          <div key={cat.id} id={cat.id} style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-primary-900)", paddingBottom: "0.5rem", borderBottom: "2px solid var(--color-primary-100)", marginBottom: "0.5rem" }}>
              {cat.heading}
            </h2>
            <p style={{ fontSize: "15px", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              {cat.intro}
            </p>
            {cat.items.map((item, i) => (
              <details className="faq-q" key={i}>
                <summary>
                  {item.question}
                  <LucideIcon name="ChevronDown" size={18} color="var(--color-primary-600)" />
                </summary>
                <div>
                  <p style={{ margin: 0 }}>{item.answer}</p>
                  {item.internalLinks && item.internalLinks.length > 0 && (
                    <p style={{ margin: "0.75rem 0 0", fontSize: "13px", fontWeight: 500, color: "var(--color-primary-600)", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
                      <span style={{ color: "var(--color-text-muted)" }}>Related:</span>
                      {item.internalLinks.map((l) => (
                        <Link key={l.href} href={l.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                          <LucideIcon name="ChevronRight" size={12} color="var(--color-primary-600)" />
                          {l.text}
                        </Link>
                      ))}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
