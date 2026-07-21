import { Suspense } from "react";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";

/**
 * Closing conversion section with the request form (docs/04 §6). Content on one
 * side, the form on the other. Phone number is prominent for callers who prefer
 * not to fill out a form.
 */
export function CTAWithForm() {
  const { business } = clientConfig;

  return (
    <section className="section" style={{ background: "var(--color-background-alt)" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gap: "var(--space-12)",
          gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          alignItems: "start",
        }}
      >
        <div>
          <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>Ready to get started?</h2>
          <p style={{ fontSize: "var(--font-size-lg)", color: "var(--color-text-muted)" }}>
            Send us the details and we&rsquo;ll follow up to confirm timing. Prefer to talk it
            through? Give us a call.
          </p>
          <p style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, margin: 0 }}>
            <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>
          </p>
        </div>

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-md)",
            padding: "var(--space-6)",
          }}
        >
          <Suspense fallback={<p>Loading form…</p>}>
            <GeneralQuoteForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
