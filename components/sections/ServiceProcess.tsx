import type { PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Service process (docs/06 §37). Vertical numbered steps. Default steps are used
 * for every service; wording never states an appointment is confirmed instantly
 * (UX-003). (Separate from the homepage HowItWorks.)
 */
const DEFAULT_STEPS: { icon: string; title: string; body: string }[] = [
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
    body: "Once we've spoken and agreed on timing, your appointment is confirmed. We will not show up unannounced — your appointment is scheduled with your knowledge and agreement.",
  },
  {
    icon: "CheckCircle",
    title: "Problem Solved",
    body: "A licensed plumber arrives, completes the work, explains what was done and why, and answers any questions before leaving. Pricing is confirmed before work begins.",
  },
];

export function ServiceProcess({ svc }: { svc: PlumbingService }) {
  return (
    <section className="section section-default">
      <div className="section__inner" style={{ maxWidth: "800px" }}>
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          How We Handle {svc.name}
        </h2>
        <ol style={{ listStyle: "none", padding: 0, margin: "var(--space-8) 0 0" }}>
          {DEFAULT_STEPS.map((step, i) => (
            <li
              key={step.title}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "1.5rem",
                alignItems: "start",
                padding: "1.5rem 0",
                borderBottom: i < DEFAULT_STEPS.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--color-primary-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="display-heading" style={{ fontSize: "22px", color: "var(--color-primary-700)" }}>
                  {i + 1}
                </span>
              </div>
              <div>
                <LucideIcon name={step.icon} size={20} color="var(--color-accent-500)" style={{ marginBottom: "0.5rem" }} />
                <h3 style={{ margin: "0 0 0.25rem", fontSize: "17px", color: "var(--color-primary-900)" }}>
                  <span className="sr-only">{`Step ${i + 1}: `}</span>
                  {step.title}
                </h3>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "var(--color-text)" }}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
