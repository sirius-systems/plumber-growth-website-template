import { clientConfig } from "@/config/client";

/**
 * Commercial reliability metrics (section-emphasis). Renders ONLY when >= 2
 * verified stats exist (docs/06 §38 — no fabricated numbers). For the demo
 * commercialStats is empty, so this returns null and the page flows straight to
 * CommercialBenefits. Exposes `hasMetrics()` so the page can alternate the next
 * section's background.
 */
export function commercialStatItems() {
  const { commercialStats, credentials, region } = clientConfig;
  const s = commercialStats ?? {};
  const items: { value: string; label: string; description: string }[] = [];
  if (s.emergencyResponseTime)
    items.push({ value: s.emergencyResponseTime, label: "Emergency Response", description: "Average response time for commercial emergency calls" });
  if (typeof s.activeContracts === "number")
    items.push({ value: `${s.activeContracts}+`, label: "Active Commercial Contracts", description: "Businesses and properties on scheduled service" });
  const years = s.yearsServingBusinesses ?? credentials.yearsInBusiness;
  if (typeof s.yearsServingBusinesses === "number")
    items.push({ value: `${years}`, label: "Years Serving Businesses", description: `Local commercial plumbing experience in ${region.name}` });
  if (typeof s.buildingsServicedAnnually === "number")
    items.push({ value: `${s.buildingsServicedAnnually}+`, label: "Buildings Serviced Annually", description: "Commercial properties served each year" });
  return items;
}

export function hasCommercialMetrics(): boolean {
  return commercialStatItems().length >= 2;
}

export function CommercialMetrics() {
  const items = commercialStatItems();
  if (items.length < 2) return null;

  return (
    <section className="section section-emphasis">
      <div className="section__inner">
        <h2 className="section-heading">
          Built for Commercial Reliability
        </h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "var(--space-8) var(--space-12)", maxWidth: "56.25rem", margin: "var(--space-8) auto 0" }}>
          {items.map((it) => (
            <div key={it.label} style={{ textAlign: "center", maxWidth: "13.75rem" }}>
              <div style={{ fontSize: "var(--font-size-4xl)", fontWeight: 700, color: "#fff", lineHeight: "var(--line-height-tight)" }}>{it.value}</div>
              <div style={{ fontSize: "var(--font-size-sm)", color: "rgba(255,255,255,0.75)", marginTop: "var(--space-2)" }}>{it.label}</div>
              <div style={{ fontSize: "var(--font-size-sm)", color: "rgba(255,255,255,0.60)" }}>{it.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
