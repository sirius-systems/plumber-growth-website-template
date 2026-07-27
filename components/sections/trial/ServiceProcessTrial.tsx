import type { PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * DESIGN TRIAL — dark, icon-badge variant of "How We Handle [Service]"
 * (docs/06 §37). Isolated single-page experiment (faucet-repair only).
 *
 * Same four steps, wording, and order as the default ServiceProcess. Only the
 * visual treatment changes: each step is a dark charcoal card with a circular
 * white icon badge at the top (replacing the numeral) and white heading/body.
 * Wording never implies an appointment is confirmed instantly (UX-003). NOT
 * wired into the shared template's default output.
 */
const TRIAL_STEPS: { icon: string; title: string; body: string }[] = [
  {
    icon: "Phone",
    title: "Contact Us",
    body: "Call us or submit the service request form with a few details about the problem. We respond quickly and will let you know current availability for your area.",
  },
  {
    icon: "ClipboardList",
    title: "We Review the Details",
    body: "Our team reviews your request and reaches out to confirm timing, ask any clarifying questions, and explain what to expect before we arrive.",
  },
  {
    icon: "CalendarCheck",
    title: "Appointment Confirmed",
    body: "Once we've spoken and agreed on timing, your appointment is confirmed. We will not show up unannounced, your appointment is scheduled with your knowledge and agreement.",
  },
  {
    icon: "Wrench",
    title: "Problem Solved",
    body: "A licensed plumber arrives, completes the work, explains what was done and why, and answers any questions before leaving. Pricing is confirmed before work begins.",
  },
];

export function ServiceProcessTrial({ svc }: { svc: PlumbingService }) {
  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          How We Handle {svc.name}
        </h2>
        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {TRIAL_STEPS.map((step, i) => (
            <li
              key={step.title}
              style={{
                background: "var(--brand-primary-dark)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LucideIcon name={step.icon} size={26} color="var(--color-primary-700)" />
              </span>
              <h3 style={{ margin: 0, fontSize: "17px", color: "#fff" }}>
                <span className="sr-only">{`Step ${i + 1}: `}</span>
                {step.title}
              </h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "rgba(255, 255, 255, 0.88)" }}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
