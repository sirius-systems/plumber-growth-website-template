import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/**
 * Thank-you trust strip. Renders only verified items; hidden entirely when fewer
 * than 2 verified items exist (docs/06 §38 — no fabricated data). Item rendering
 * is delegated to the shared TrustBar (light-card variant).
 */
export function TrustStrip() {
  const { credentials, region } = clientConfig;

  const items: TrustItem[] = [];
  if (credentials.insured && credentials.bonded)
    items.push({ icon: "badge-check", label: "Licensed, Bonded & Insured" });
  else if (credentials.insured)
    items.push({ icon: "badge-check", label: "Licensed & Insured" });
  if (region?.name) items.push({ icon: "map-pin", label: `Serving ${region.name}` });
  if (reviewsSummary.count > 0)
    items.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` });

  if (items.length < 2) return null;

  return (
    <section style={{ maxWidth: "640px", margin: "2rem auto 3rem", padding: "0 1.25rem" }}>
      <div
        style={{
          background: "var(--color-background-alt)",
          borderRadius: "var(--radius-md)",
          padding: "1rem 1.5rem",
        }}
      >
        <TrustBar variant="light-card" items={items} />
      </div>
    </section>
  );
}
