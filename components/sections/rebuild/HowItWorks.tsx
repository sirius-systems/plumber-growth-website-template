/**
 * How-it-works steps (docs/06 §37). Decorative DM Serif numbers; wording never
 * states an appointment is confirmed instantly (UX-003).
 */
const STEPS = [
  { title: "Request Service", body: "Call us or submit the request form with a few details about the problem." },
  { title: "We Review Your Request", body: "Our team reviews the details and reaches out to confirm timing and next steps." },
  { title: "Appointment Confirmed", body: "Once we've spoken, your appointment is confirmed, it isn't guaranteed until then." },
  { title: "Problem Solved", body: "A licensed plumber completes the work and explains what was done before leaving." },
];

export function HowItWorks() {
  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading">
          How It Works
        </h2>
        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            gap: "var(--space-8)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {STEPS.map((step, i) => (
            <li key={step.title} className="process-step">
              <div
                aria-hidden="true"
                className="display-heading process-step__number"
                style={{ fontSize: "var(--font-size-4xl)", lineHeight: "var(--line-height-tight)", color: "var(--color-primary-100)" }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "var(--space-2) 0", fontSize: "var(--font-size-base)" }}>
                <span className="sr-only">{`Step ${i + 1}: `}</span>
                {step.title}
              </h3>
              <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
