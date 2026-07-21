import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Trust strip. Renders only verified items; hidden entirely when fewer than 2
 * verified items exist (docs/06 §38 — no fabricated data). No founded-year field
 * exists in config, so that item is omitted here.
 */
export function TrustStrip() {
  const { credentials, region } = clientConfig;

  const items: { icon: string; color: string; label: string }[] = [];
  if (credentials.insured && credentials.bonded)
    items.push({ icon: "BadgeCheck", color: "var(--color-primary-600)", label: "Licensed, Bonded & Insured" });
  else if (credentials.insured)
    items.push({ icon: "BadgeCheck", color: "var(--color-primary-600)", label: "Licensed & Insured" });
  if (region?.name)
    items.push({ icon: "MapPin", color: "var(--color-primary-600)", label: `Serving ${region.name}` });
  if (reviewsSummary.count > 0)
    items.push({ icon: "Star", color: "var(--color-accent-500)", label: `${reviewsSummary.rating.toFixed(1)}★ from ${reviewsSummary.count} reviews` });

  if (items.length < 2) return null;

  return (
    <section style={{ maxWidth: "640px", margin: "2rem auto 3rem", padding: "0 1.25rem" }}>
      <div
        style={{
          background: "var(--color-background-alt)",
          borderRadius: "var(--radius-md)",
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem 2rem",
          alignItems: "center",
        }}
      >
        {items.map((it) => (
          <span key={it.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "13px", fontWeight: 500, color: "var(--color-text)" }}>
            <LucideIcon name={it.icon} size={16} color={it.color} />
            {it.label}
          </span>
        ))}
      </div>
    </section>
  );
}
