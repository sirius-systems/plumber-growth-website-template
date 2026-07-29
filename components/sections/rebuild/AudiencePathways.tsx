import Image from "next/image";
import { clientConfig } from "@/config/client";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/** Shared placeholder until per-client pathway images are provided in config. */
const PATHWAY_CARD_PLACEHOLDER = "/images/placeholders/pathway-card.svg";

/**
 * Residential / commercial pathway cards (docs/04 §6). 7:4 image on top
 * (full-bleed to the card edges, same pattern as ServiceCard), then title, body,
 * optional bullets, and the CTA. Optional bullet lists render below each card
 * body (used on the services hub); when omitted, the component renders as
 * before. Shared by the homepage and the services hub.
 */
export function AudiencePathways({
  residentialBullets,
  commercialBullets,
}: {
  residentialBullets?: string[];
  commercialBullets?: string[];
} = {}) {
  const { operations } = clientConfig;
  const cards: { href: string; title: string; body: string; bullets?: string[] }[] = [];
  if (operations.residentialPlumbing)
    cards.push({
      href: "/residential-plumbing/",
      title: "Residential Plumbing",
      body: "Repairs, replacements, and installations for homeowners, drains, water heaters, leaks, fixtures, and emergencies.",
      bullets: residentialBullets,
    });
  if (operations.commercialPlumbing)
    cards.push({
      href: "/commercial-plumbing/",
      title: "Commercial Plumbing",
      body: "Plumbing service for offices, retail, restaurants, and multifamily properties, scheduled around your operations.",
      bullets: commercialBullets,
    });
  if (cards.length === 0) return null;

  return (
    // section-default (white) rather than -alternate: ServicesGrid directly below
    // is -alternate, and matching backgrounds made the two read as one section.
    <section className="section section-default">
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
              className="pathway-card"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "7 / 4" }}>
                <Image
                  src={PATHWAY_CARD_PLACEHOLDER}
                  alt={`${c.title} services`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              {/* Card padding lives here so the image above stays full-bleed. */}
              <div style={{ padding: "2rem" }}>
                <h3 style={{ marginTop: 0, fontSize: "20px", fontWeight: 700 }}>{c.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "15px" }}>{c.body}</p>
                {c.bullets && c.bullets.length > 0 && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-4)", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {c.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.375rem", fontSize: "13px", color: "var(--color-text-muted)" }}>
                        <LucideIcon name="Check" size={12} color="var(--color-primary-600)" style={{ marginTop: "3px", flex: "none" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <Button variant="secondary" href={c.href}>
                  {c.title}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
