import Link from "next/link";
import { clientConfig } from "@/config/client";
import { SERVICES, type PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Related services + service areas (docs/04 §8.2, §27). Two columns on desktop. */
export function ServiceLinks({ svc }: { svc: PlumbingService }) {
  const { serviceAreas } = clientConfig;
  const related = svc.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug && s.enabled))
    .filter((s): s is PlumbingService => Boolean(s))
    .slice(0, 5);
  const primary = serviceAreas.find((a) => a.primary) ?? serviceAreas[0];

  const linkStyle = { display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "15px", fontWeight: 500 };

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Related Services and Areas We Serve
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            marginTop: "var(--space-8)",
            maxWidth: "var(--container-md)",
            marginInline: "auto",
            alignItems: "start",
          }}
        >
          <div>
            <h3 style={{ marginTop: 0, fontSize: "16px", color: "var(--color-primary-900)" }}>Related Services</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}/`} style={linkStyle}>
                    <LucideIcon name="ChevronRight" size={14} color="var(--color-primary-600)" />
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ marginTop: 0, fontSize: "16px", color: "var(--color-primary-900)" }}>Service Areas</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
              {serviceAreas.map((area) => {
                const href =
                  area === primary && area.hasDetailPage && area.slug
                    ? `/service-areas/${area.slug}/`
                    : "/service-areas/";
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
