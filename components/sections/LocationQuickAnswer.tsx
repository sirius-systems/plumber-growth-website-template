/**
 * LocationQuickAnswer (docs/07 §20 AEO). Location-page equivalent of QuickAnswer
 * (separate component per amendment). NAP in the answer must match the page's
 * LocalBusiness JSON-LD and client config. Answer is resolved by the caller.
 */
export function LocationQuickAnswer({ answer }: { answer: string }) {
  return (
    <section className="section section-default">
      <div className="section__inner" style={{ maxWidth: "720px" }}>
        <div
          style={{
            background: "var(--color-background-alt)",
            borderRadius: "var(--radius-lg)",
            borderLeft: "3px solid var(--color-accent-500)",
            padding: "1.5rem 2rem",
          }}
        >
          <p
            style={{
              margin: "0 0 0.5rem",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-accent-600)",
            }}
          >
            Quick Answer
          </p>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.75, color: "var(--color-text)" }}>
            {answer}
          </p>
        </div>
      </div>
    </section>
  );
}
