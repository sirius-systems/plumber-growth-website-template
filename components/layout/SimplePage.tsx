/**
 * Minimal content-page shell for routes whose full templates (docs/04 T4–T13)
 * are populated during client fulfillment. Gives every route a valid, accessible
 * H1 + canonical so the IA is navigable and the build is complete.
 */
export function SimplePage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1>{title}</h1>
      {intro && <p style={{ fontSize: "var(--font-size-lg)" }}>{intro}</p>}
      {children}
    </section>
  );
}
