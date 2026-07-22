/** What-happens-next steps (docs/04 §23). `steps` are pre-resolved (tokens replaced). */
export function WhatHappensNext({ steps }: { steps: string[] }) {
  return (
    <section style={{ maxWidth: "640px", margin: "2rem auto", padding: "0 1.25rem" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-primary-900)", marginBottom: "1rem" }}>
        What Happens Next
      </h2>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {steps.map((step, i) => (
          <li
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "32px 1fr",
              gap: "0.75rem",
              alignItems: "start",
              padding: "0.75rem 0",
              borderBottom: i < steps.length - 1 ? "1px solid var(--color-border)" : "none",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "var(--color-primary-50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--color-primary-700)",
              }}
            >
              {i + 1}
            </span>
            <span style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-text)" }}>
              <span className="sr-only">{`Step ${i + 1}: `}</span>
              {step}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
