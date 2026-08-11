import Link from "next/link";
import { clientConfig } from "@/config/client";
import { hubFaqs } from "@/content/services-hub";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Services hub FAQ (docs/06 §35). Reuses the global .faq-q accordion; internal
 * links render as a "Related:" line below each answer. */
export function ServicesHubFaq() {
  return (
    <section className="section section-default">
      <div className="section__inner" style={{ maxWidth: "50rem" }}>
        <h2 className="section-heading">
          Frequently Asked Questions
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-6)" }}>
          Common questions about our plumbing services in {clientConfig.region.name}.
        </p>
        {hubFaqs.map((item, i) => (
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
    </section>
  );
}
