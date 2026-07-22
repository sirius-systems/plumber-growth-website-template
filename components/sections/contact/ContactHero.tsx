import { clientConfig } from "@/config/client";

/** Contact hero (docs/04 §7). Light background, no form (form is a later section). */
export function ContactHero() {
  return (
    <section style={{ background: "var(--color-background-alt)", padding: "64px 2rem 48px", textAlign: "center" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <p style={{ margin: 0, fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-primary-600)" }}>
          Fast Response · {clientConfig.region.name}
        </p>
        <h1 className="display-heading" style={{ margin: "var(--space-2) 0 0", fontSize: "clamp(36px, 5vw, 52px)", color: "var(--color-primary-900)" }}>
          Get a Free Plumbing Quote
        </h1>
        <p style={{ maxWidth: "480px", margin: "0.75rem auto 0", fontSize: "18px", color: "var(--color-text-muted)" }}>
          Tell us what&rsquo;s going on and we&rsquo;ll respond quickly and help you schedule service.
        </p>
      </div>
    </section>
  );
}
