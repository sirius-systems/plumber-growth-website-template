import Link from "next/link";
import { clientConfig } from "@/config/client";

/** Residential / commercial pathway cards (docs/04 §6). No images. */
export function AudiencePathways() {
  const { operations } = clientConfig;
  const cards: { href: string; title: string; body: string }[] = [];
  if (operations.residentialPlumbing)
    cards.push({
      href: "/residential-plumbing/",
      title: "Residential Plumbing",
      body: "Repairs, replacements, and installations for homeowners, drains, water heaters, leaks, fixtures, and emergencies.",
    });
  if (operations.commercialPlumbing)
    cards.push({
      href: "/commercial-plumbing/",
      title: "Commercial Plumbing",
      body: "Plumbing service for offices, retail, restaurants, and multifamily properties, scheduled around your operations.",
    });
  if (cards.length === 0) return null;

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Residential &amp; Commercial Plumbing
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {cards.map((c) => (
            <li
              key={c.href}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                padding: "2rem",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "20px", fontWeight: 700 }}>{c.title}</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "15px" }}>{c.body}</p>
              <Link className="btn btn--secondary" href={c.href}>
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
