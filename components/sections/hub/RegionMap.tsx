import Image from "next/image";
import { clientConfig } from "@/config/client";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Region map panel (docs/04 §12). Placeholder when no map image is configured. */
export function RegionMap() {
  const { region, serviceAreas } = clientConfig;

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Our Service Region
        </h2>
        <div style={{ maxWidth: "800px", margin: "var(--space-8) auto 0" }}>
          {region.mapImage ? (
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
              <Image src={region.mapImage} alt={`Plumbing service area map for ${region.name}`} fill sizes="800px" style={{ objectFit: "cover" }} />
            </div>
          ) : (
            <div
              role="img"
              aria-label={`Service area map for ${region.name}`}
              style={{
                background: "var(--color-background-alt)",
                borderRadius: "var(--radius-lg)",
                border: "1.5px dashed var(--color-border)",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <LucideIcon name="MapPin" size={40} color="var(--color-neutral-500)" />
              <p style={{ margin: "var(--space-2) 0 0", fontSize: "14px", color: "var(--color-text-muted)" }}>
                Service area map, {region.name}
              </p>
            </div>
          )}
          <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem 1.5rem", listStyle: "none", padding: 0, margin: "var(--space-6) 0 0" }}>
            {serviceAreas.map((a) => (
              <li key={a.name} style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--color-text-muted)" }}>
                <LucideIcon name="MapPin" size={12} color="var(--color-primary-600)" />
                {a.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
