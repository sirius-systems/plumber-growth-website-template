import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Contact form section (docs/08 §11). Supporting copy + form in an elevated card. */
export function ContactFormSection() {
  const { business, responseTime } = clientConfig;
  const phone = formatPhoneDisplay(business.phone);

  const nextItems = [
    "We review your message and reach out by phone or email to discuss next steps.",
    "For service requests, we'll confirm availability and schedule your appointment.",
    `For urgent issues, call ${phone} directly. It's faster than a form.`,
  ];

  return (
    <section className="section section-alternate">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))", gap: "var(--space-12)", maxWidth: "67.5rem", margin: "0 auto", padding: "0 var(--page-gutter)" }}>
        <div>
          <h2 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, color: "var(--color-primary-900)", marginTop: 0 }}>Send Us a Message</h2>
          <p style={{ fontSize: "var(--font-size-base)", lineHeight: "var(--line-height-loose)", color: "var(--color-text)" }}>
            Whether you have a plumbing emergency, need a quote on a repair, or have a general
            question, use this form to get in touch. We&rsquo;ll follow up by phone or email based
            on your preference.
          </p>
          {responseTime && (
            <p style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--font-size-sm)", fontWeight: 500, color: "var(--color-text-muted)", marginTop: "var(--space-4)" }}>
              <LucideIcon name="Clock" size={14} color="var(--color-primary-600)" />
              We respond {responseTime}
            </p>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>
            {nextItems.map((t) => (
              <div key={t} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
                <LucideIcon name="CheckCircle" size={16} color="var(--color-primary-600)" style={{ flex: "none", marginTop: "var(--space-1)" }} />
                <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--color-background-alt)", borderRadius: "var(--radius-md)", borderLeft: "3px solid var(--color-accent-500)", padding: "var(--space-3) var(--space-4)", marginTop: "var(--space-6)" }}>
            <p style={{ margin: 0, fontSize: "var(--font-size-sm)", fontWeight: 500, color: "var(--color-primary-900)" }}>
              Plumbing emergency? Call {phone} now. Don&rsquo;t wait for a form response.
            </p>
            <a href={telHref(business.phone)} style={{ display: "inline-block", marginTop: "var(--space-1)", fontSize: "var(--font-size-lg)", fontWeight: 700, color: "var(--color-primary-600)" }}>
              {phone}
            </a>
          </div>
        </div>

        <div style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "var(--space-8)" }}>
          <h2 style={{ marginTop: 0, fontSize: "var(--font-size-lg)", fontWeight: 600, color: "var(--color-primary-900)" }}>
            Request a Quote or Ask a Question
          </h2>
          <GeneralQuoteForm paired />
        </div>
      </div>
    </section>
  );
}
