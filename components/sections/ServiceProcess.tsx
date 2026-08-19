import type { PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Service process (docs/06 §37). Numbered steps.
 *
 * Wording never states an appointment is confirmed instantly (UX-003).
 * (Separate from the homepage HowItWorks.)
 *
 * DEFAULT_STEPS below is unchanged — same four steps, same icons, same titles,
 * same body copy, same order. Only the presentation moved: from a vertical
 * rule-separated list on a light band to the reference's dark navy band with
 * four horizontal numbered markers and a dashed connector, which gives the page
 * its mid-scroll dark beat. Steps stack to one column below 64rem.
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
    body: "Once we've spoken and agreed on timing, your appointment is confirmed. We will not show up unannounced, your appointment is scheduled with your knowledge and agreement.",
  },
  {
    icon: "CheckCircle",
    title: "Problem Solved",
    body: "A licensed plumber arrives, completes the work, explains what was done and why, and answers any questions before leaving. Pricing is confirmed before work begins.",
  },
];

export function ServiceProcess({ svc }: { svc: PlumbingService }) {
  return (
    <section className="section section-emphasis" aria-labelledby="svc-process-heading">
      <div className="section__inner">
        <h2 id="svc-process-heading" className="section-heading svc-heading">
          How We Handle {svc.name}
        </h2>

        <ol className="svc-process">
          {DEFAULT_STEPS.map((step, i) => (
            <li key={step.title} className="svc-process__step">
              <span className="svc-process__marker">
                <LucideIcon name={step.icon} size={22} aria-hidden="true" />
                <span className="svc-process__number" aria-hidden="true">
                  {i + 1}
                </span>
              </span>
              <h3 className="svc-process__title">
                <span className="sr-only">{`Step ${i + 1}: `}</span>
                {step.title}
              </h3>
              <p className="svc-process__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
