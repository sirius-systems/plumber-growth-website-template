/**
 * Service process (docs/06 §37). Explains what happens after a request. Wording
 * MUST NOT state an appointment is confirmed instantly — the request is reviewed
 * and confirmed by the company, not by the form (UX-003, docs/06 §37).
 */
const STEPS: { title: string; body: string }[] = [
  {
    title: "Request Service",
    body: "Call us or submit the service request form with a few details about the problem.",
  },
  {
    title: "We Review Your Request",
    body: "Our team reviews the details and reaches out to confirm timing and next steps.",
  },
  {
    title: "Appointment Confirmed",
    body: "Once we've spoken, your appointment is confirmed, it isn't guaranteed until then.",
  },
  {
    title: "Problem Solved",
    body: "A licensed plumber completes the work and explains what was done before leaving.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section" style={{ background: "var(--color-background-alt)" }}>
      <div className="container">
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>How it works</h2>
        <ol
          style={{
            display: "grid",
            gap: "var(--space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <div
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "999px",
                  background: "var(--color-action)",
                  color: "var(--color-action-text)",
                  fontWeight: 700,
                  marginBottom: "var(--space-3)",
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>
                <span className="sr-only">{`Step ${i + 1}: `}</span>
                {step.title}
              </h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: 0 }}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
