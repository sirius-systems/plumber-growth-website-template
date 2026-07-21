import Link from "next/link";
import { clientConfig } from "@/config/client";

/**
 * Residential / commercial pathways (docs/04 §6). Renders a card only for the
 * capabilities the client actually offers (docs/06 §38 — no empty/fake states).
 */
export function ServicePathways() {
  const { operations } = clientConfig;

  const pathways: { href: string; title: string; body: string }[] = [];
  if (operations.residentialPlumbing) {
    pathways.push({
      href: "/residential-plumbing/",
      title: "Residential Plumbing",
      body: "Repairs, replacements, and installations for homeowners — drains, water heaters, leaks, fixtures, and emergencies.",
    });
  }
  if (operations.commercialPlumbing) {
    pathways.push({
      href: "/commercial-plumbing/",
      title: "Commercial Plumbing",
      body: "Plumbing service for offices, retail, restaurants, and multifamily properties, scheduled around your operations.",
    });
  }

  if (pathways.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Residential &amp; commercial service
        </h2>
        <ul
          style={{
            display: "grid",
            gap: "var(--space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {pathways.map((p) => (
            <li
              key={p.href}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-sm)",
                padding: "var(--space-6)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>{p.title}</h3>
              <p style={{ color: "var(--color-text-muted)" }}>{p.body}</p>
              <Link className="btn btn--secondary" href={p.href}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
