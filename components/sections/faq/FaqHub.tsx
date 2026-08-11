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
      <div className="section__inner" style={{ maxWidth: "50rem" }}>
        {faqCategories.map((cat) => (
          <div key={cat.id} id={cat.id} style={{ marginBottom: "var(--space-12)" }}>
            <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-primary-900)", paddingBottom: "var(--space-2)", borderBottom: "2px solid var(--color-primary-100)", marginBottom: "var(--space-2)" }}>
              {cat.heading}
            </h2>
            <p style={{ fontSize: "var(--font-size-base)", color: "var(--color-text-muted)", lineHeight: "var(--line-height-body)", marginBottom: "var(--space-5)" }}>
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
                    <p style={{ margin: "var(--space-3) 0 0", fontSize: "var(--font-size-sm)", fontWeight: 500, color: "var(--color-primary-600)", display: "flex", flexWrap: "wrap", gap: "var(--space-3)", alignItems: "center" }}>
                      <span style={{ color: "var(--color-text-muted)" }}>Related:</span>
                      {item.internalLinks.map((l) => (
                        <Link key={l.href} href={l.href} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-1)" }}>
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
