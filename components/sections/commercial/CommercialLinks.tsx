import Link from "next/link";
import { clientConfig } from "@/config/client";
import { commercialServices } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Commercial services + service areas links (docs/04 §8.2, §27). Dedicated
 * variant (the shared ServiceLinks is coupled to a single service via svc prop).
 */
export function CommercialLinks() {
  const { serviceAreas } = clientConfig;
  const services = commercialServices();
  const primary = serviceAreas.find((a) => a.primary) ?? serviceAreas[0];
  // minHeight lifts these list links to the 24px target floor (WCAG 2.2 2.5.8);
  // the bare text box measured 22px.
  const linkStyle = { display: "inline-flex", alignItems: "center", minHeight: "var(--space-6)", gap: "var(--space-2)", fontSize: "var(--font-size-base)", fontWeight: 500 };

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading">
          Commercial Services and Areas We Serve
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "var(--space-12)", marginTop: "var(--space-8)" }}>
          <div>
            <h3 style={{ marginTop: 0, fontSize: "var(--font-size-base)", color: "var(--color-primary-900)" }}>Commercial Services</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} style={linkStyle}>
                    <LucideIcon name="ChevronRight" size={14} color="var(--color-primary-600)" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ marginTop: 0, fontSize: "var(--font-size-base)", color: "var(--color-primary-900)" }}>Areas We Serve</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
              {serviceAreas.map((area) => {
                const href = area === primary && area.hasDetailPage && area.slug ? `/service-areas/${area.slug}/` : "/service-areas/";
                return (
                  <li key={area.name}>
                    <Link href={href} style={linkStyle}>
                      <LucideIcon name="MapPin" size={14} color="var(--color-primary-600)" />
                      {area.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p style={{ marginTop: "var(--space-3)" }}>
              <Link href="/service-areas/">View all service areas →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
