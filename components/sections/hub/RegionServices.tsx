import Link from "next/link";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Icon per service slug for the compact hub list. */
const SERVICE_ICON: Record<string, string> = {
  "emergency-plumbing": "Flame",
  "drain-cleaning": "Droplets",
  "water-heater-repair": "Thermometer",
  "water-heater-installation": "Flame",
  "leak-detection": "Search",
  "pipe-repair": "Wrench",
  "sewer-line-repair": "Layers",
  "toilet-repair": "Wrench",
  "faucet-repair": "Droplet",
  "garbage-disposal-repair": "Settings",
};

/** Compact "services across the region" link grid (docs/04 §7). */
export function RegionServices() {
  const { region } = clientConfig;
  const services = enabledServices();

  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading">
          Plumbing Services Available Across {region.name}
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
          Every service available in all locations we serve.
        </p>
        <ul className="region-services-grid">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}/`}
                className="region-service"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  padding: "var(--space-3) var(--space-4)",
                  background: "var(--color-background-alt)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  textDecoration: "none",
                }}
              >
                <LucideIcon name={SERVICE_ICON[s.slug] ?? "Wrench"} size={20} color="var(--color-primary-600)" />
                <span style={{ fontSize: "var(--font-size-base)", fontWeight: 500, color: "var(--color-primary-900)" }}>{s.name}</span>
                <LucideIcon name="ChevronRight" size={14} color="var(--color-text-muted)" style={{ marginLeft: "auto" }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
