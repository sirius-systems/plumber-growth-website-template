import Link from "next/link";
import { clientConfig } from "@/config/client";
import type { ServiceAreaReference } from "@/config/client";
import type { LocationContent } from "@/config/location-content";
import { enabledServices } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Area overview + available-services panel (docs/04 §12). Unique local copy. */
export function AreaOverview({ area, content }: { area: ServiceAreaReference; content?: LocationContent }) {
  const { business } = clientConfig;
  const overview =
    content?.body?.join(" ") ??
    `${business.publicName} provides licensed plumbing service throughout ${area.name}, ${area.state} and the surrounding communities. Whether you need drain cleaning, water heater service, leak detection, or emergency plumbing, our licensed team serves ${area.name} residents and businesses with upfront pricing and fast response.`;
  const services = enabledServices().slice(0, 8);

  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading">
          Plumbing Services in {area.name}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "var(--space-12)",
            marginTop: "var(--space-8)",
          }}
        >
          <div>
            <p style={{ fontSize: "var(--font-size-base)", lineHeight: "var(--line-height-loose)", marginTop: 0 }}>{overview}</p>
          </div>
          <div
            style={{
              background: "var(--color-background-alt)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)",
              borderLeft: "3px solid var(--color-accent-500)",
              alignSelf: "start",
            }}
          >
            <p style={{ marginTop: 0, fontWeight: 600, color: "var(--color-primary-900)" }}>
              Services Available in {area.name}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-2)" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    style={{ display: "inline-flex", alignItems: "center", minHeight: "var(--space-6)", gap: "var(--space-2)", fontSize: "var(--font-size-sm)" }}
                  >
                    <LucideIcon name="ChevronRight" size={14} color="var(--color-primary-600)" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
