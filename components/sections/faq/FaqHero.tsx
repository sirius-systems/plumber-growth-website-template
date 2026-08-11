import { clientConfig } from "@/config/client";
import { formatPhoneDisplay } from "@/lib/utilities/format";
import { faqCategories } from "@/content/faqs";

/** FAQ hero (docs/04 §7). Light background, category jump pills. */
export function FaqHero() {
  const phone = formatPhoneDisplay(clientConfig.business.phone);

  return (
    <section style={{ background: "var(--color-background-alt)", padding: "var(--space-16) var(--space-8) var(--space-12)", textAlign: "center" }}>
      <div style={{ maxWidth: "var(--measure-narrow)", margin: "0 auto" }}>
        <p style={{ margin: 0, fontSize: "var(--font-size-xs)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-primary-600)" }}>
          Plumbing Questions Answered
        </p>
        <h1 className="display-heading" style={{ margin: "var(--space-2) 0 0", fontSize: "var(--font-size-4xl)", color: "var(--color-primary-900)" }}>
          Plumbing FAQs
        </h1>
        <p style={{ maxWidth: "var(--measure-copy)", margin: "var(--space-3) auto 0", fontSize: "var(--font-size-lg)", color: "var(--color-text-muted)" }}>
          Answers to the questions homeowners and property managers ask before they call.
        </p>
        <p style={{ maxWidth: "var(--measure-reading)", margin: "var(--space-4) auto 0", fontSize: "var(--font-size-base)", lineHeight: "var(--line-height-loose)", color: "var(--color-text)" }}>
          This page covers common questions about plumbing emergencies, pricing, maintenance, and
          installations. If you don&rsquo;t find your answer here, call {phone} or submit a service
          request and we&rsquo;ll help.
        </p>
        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-2)", listStyle: "none", padding: 0, margin: "var(--space-6) 0 0" }}>
          {faqCategories.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="pill pill--info">
                {c.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
