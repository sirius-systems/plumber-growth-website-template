import { clientConfig } from "@/config/client";
import { formatPhoneDisplay } from "@/lib/utilities/format";
import { faqCategories } from "@/content/faqs";

/** FAQ hero (docs/04 §7). Light background, category jump pills. */
export function FaqHero() {
  const phone = formatPhoneDisplay(clientConfig.business.phone);

  return (
    <section style={{ background: "var(--color-background-alt)", padding: "64px 2rem 48px", textAlign: "center" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <p style={{ margin: 0, fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-primary-600)" }}>
          Plumbing Questions Answered
        </p>
        <h1 className="display-heading" style={{ margin: "var(--space-2) 0 0", fontSize: "clamp(36px, 5vw, 52px)", color: "var(--color-primary-900)" }}>
          Plumbing FAQs
        </h1>
        <p style={{ maxWidth: "520px", margin: "0.75rem auto 0", fontSize: "18px", color: "var(--color-text-muted)" }}>
          Answers to the questions homeowners and property managers ask before they call.
        </p>
        <p style={{ maxWidth: "560px", margin: "1rem auto 0", fontSize: "16px", lineHeight: 1.75, color: "var(--color-text)" }}>
          This page covers common questions about plumbing emergencies, pricing, maintenance, and
          installations. If you don&rsquo;t find your answer here, call {phone} or submit a service
          request and we&rsquo;ll help.
        </p>
        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", listStyle: "none", padding: 0, margin: "1.5rem 0 0" }}>
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
