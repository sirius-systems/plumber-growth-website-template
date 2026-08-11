import { clientConfig } from "@/config/client";

/** Contact hero (docs/04 §7). Light background, no form (form is a later section). */
export function ContactHero() {
  return (
    <section style={{ background: "var(--color-background-alt)", padding: "var(--space-16) var(--space-8) var(--space-12)", textAlign: "center" }}>
      <div style={{ maxWidth: "var(--measure-narrow)", margin: "0 auto" }}>
        <p style={{ margin: 0, fontSize: "var(--font-size-xs)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-primary-600)" }}>
          Fast Response · {clientConfig.region.name}
        </p>
        <h1 className="display-heading" style={{ margin: "var(--space-2) 0 0", fontSize: "var(--font-size-4xl)", color: "var(--color-primary-900)" }}>
          Get a Free Plumbing Quote
        </h1>
        <p style={{ maxWidth: "var(--measure-copy)", margin: "var(--space-3) auto 0", fontSize: "var(--font-size-lg)", color: "var(--color-text-muted)" }}>
          Tell us what&rsquo;s going on and we&rsquo;ll respond quickly and help you schedule service.
        </p>
      </div>
    </section>
  );
}
