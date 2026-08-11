/**
 * QuickAnswer (docs/07 §20 AEO). A single factual answer block for
 * snippet/voice/LLM extraction. Not a marketing heading — no H2. The paragraph
 * is a strong "speakable" candidate; speakable markup is NOT implemented (none
 * exists in the codebase yet). Answer is resolved by the caller.
 */
export function QuickAnswer({ answer }: { answer: string }) {
  return (
    <section className="section section-default">
      <div className="section__inner" style={{ maxWidth: "var(--measure-narrow)" }}>
        <div
          style={{
            background: "var(--color-background-alt)",
            borderRadius: "var(--radius-lg)",
            borderLeft: "3px solid var(--color-accent-500)",
            padding: "var(--space-6) var(--space-8)",
          }}
        >
          <p
            style={{
              margin: "0 0 var(--space-2)",
              fontSize: "var(--font-size-xs)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              // --color-accent-600 measured 2.96:1 on --color-background-alt at
              // 12px/600 — a WCAG 1.4.3 failure. The amber is kept as the panel
              // rule/icon; the label itself uses the compliant navy (docs/06 §7).
              color: "var(--color-primary-700)",
            }}
          >
            Quick Answer
          </p>
          <p style={{ margin: 0, fontSize: "var(--font-size-base)", lineHeight: "var(--line-height-loose)", color: "var(--color-text)" }}>
            {answer}
          </p>
        </div>
      </div>
    </section>
  );
}
