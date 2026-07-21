import Link from "next/link";
import type { HelpfulLink } from "@/content/thank-you";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Helpful next-step link cards. `links` are pre-filtered by the parent (e.g. the
 * Leave-a-Review link is dropped when reviewUrl is null/"#").
 */
export function HelpfulLinks({ links }: { links: HelpfulLink[] }) {
  if (links.length === 0) return null;

  const cardStyle = {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "1rem 1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    textDecoration: "none",
  } as const;

  const body = (l: HelpfulLink) => (
    <>
      <span>
        <span style={{ display: "block", fontWeight: 600, fontSize: "15px", color: "var(--color-primary-900)" }}>{l.label}</span>
        <span style={{ display: "block", marginTop: "0.25rem", fontSize: "13px", color: "var(--color-text-muted)" }}>{l.description}</span>
      </span>
      <LucideIcon name={l.external ? "ExternalLink" : "ChevronRight"} size={16} color="var(--color-primary-600)" />
    </>
  );

  return (
    <section style={{ maxWidth: "640px", margin: "2rem auto", padding: "0 1.25rem" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-primary-900)", marginBottom: "1rem" }}>
        Helpful Next Steps
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {links.map((l) =>
          l.external ? (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={cardStyle}>
              {body(l)}
            </a>
          ) : (
            <Link key={l.label} href={l.href} style={cardStyle}>
              {body(l)}
            </Link>
          ),
        )}
      </div>
    </section>
  );
}
