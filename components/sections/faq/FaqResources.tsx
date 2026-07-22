import Link from "next/link";
import { clientConfig } from "@/config/client";
import { findEnabledService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

interface Resource {
  label: string;
  href: string;
  icon: string;
  enabled: boolean;
}

/** Deeper-resources link grid (docs/04 §27). Only enabled routes render. */
export function FaqResources() {
  const { operations } = clientConfig;
  const svc = (slug: string) => Boolean(findEnabledService(slug));

  const resources: Resource[] = [
    { label: "Emergency Plumbing", href: "/services/emergency-plumbing/", icon: "AlertTriangle", enabled: svc("emergency-plumbing") },
    { label: "Drain Cleaning", href: "/services/drain-cleaning/", icon: "Droplets", enabled: svc("drain-cleaning") },
    { label: "Water Heater Repair", href: "/services/water-heater-repair/", icon: "Flame", enabled: svc("water-heater-repair") },
    { label: "Leak Detection", href: "/services/leak-detection/", icon: "Search", enabled: svc("leak-detection") },
    { label: "Pipe Repair", href: "/services/pipe-repair/", icon: "Wrench", enabled: svc("pipe-repair") },
    { label: "Residential Plumbing", href: "/residential-plumbing/", icon: "Home", enabled: operations.residentialPlumbing },
    { label: "Commercial Plumbing", href: "/commercial-plumbing/", icon: "Building2", enabled: operations.commercialPlumbing },
    { label: "Service Areas", href: "/service-areas/", icon: "MapPin", enabled: true },
  ].filter((r) => r.enabled);

  return (
    <section className="section section-alternate">
      <div className="section__inner" style={{ maxWidth: "900px" }}>
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Explore Service Pages
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
          Find detailed answers and service information on these pages.
        </p>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "var(--space-4)", listStyle: "none", padding: 0, margin: 0 }}>
          {resources.map((r) => (
            <li key={r.href}>
              <Link href={r.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.25rem", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                <LucideIcon name={r.icon} size={20} color="var(--color-primary-600)" />
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-primary-900)" }}>{r.label}</span>
                <LucideIcon name="ChevronRight" size={14} color="var(--color-text-muted)" style={{ marginLeft: "auto" }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
