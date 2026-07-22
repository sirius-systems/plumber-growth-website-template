import Link from "next/link";
import { clientConfig } from "@/config/client";

/**
 * Service-area pills (docs/04 §12). Primary market is a filled pill linking to
 * its location page; the others are outline pills linking to the hub.
 */
export function ServiceAreas() {
  const { serviceAreas } = clientConfig;
  const primary = serviceAreas.find((a) => a.primary) ?? serviceAreas[0];

  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Service Areas
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-text-muted)",
            maxWidth: "560px",
            margin: "0 auto var(--space-6)",
          }}
        >
          Serving communities across the Las Vegas valley.
        </p>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.625rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {serviceAreas.map((area) => {
            const isPrimary = area === primary;
            const href =
              isPrimary && area.hasDetailPage && area.slug
                ? `/service-areas/${area.slug}/`
                : "/service-areas/";
            return (
              <li key={area.name}>
                <Link href={href} className={isPrimary ? "pill pill--filled" : "pill pill--outline"}>
                  {area.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <p style={{ textAlign: "center", marginTop: "var(--space-6)" }}>
          <Link href="/service-areas/">View all service areas →</Link>
        </p>
      </div>
    </section>
  );
}
