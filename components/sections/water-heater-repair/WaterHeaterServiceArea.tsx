import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Service-area section for the water-heater-repair page (docs/04 §12).
 *
 * Map on the left, linked service-area pills on the right. This composes two
 * patterns that already exist rather than duplicating either wholesale:
 *   - the map panel + dashed placeholder from hub/RegionMap
 *   - the primary-filled / others-outline pill linking from rebuild/ServiceAreas
 *
 * rebuild/ServiceAreas is not reused directly because it is a full section that
 * owns its own H2 and centered single-column layout, with no map column.
 *
 * Linking follows the existing IA rule implemented in both of those components:
 * only the primary service area links to its own location page; every other
 * pill goes to the /service-areas/ hub.
 *
 * Follow-up: `region.mapImage` is null, so the map renders as a styled empty
 * state. No map API is wired in this pass.
 */
export function WaterHeaterServiceArea() {
  const { region, serviceAreas } = clientConfig;
  const primary = serviceAreas.find((a) => a.primary) ?? serviceAreas[0];

  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading">
          Proudly Serving Our Area
        </h2>
        <div className="wh-split wh-split--even" style={{ marginTop: "var(--space-8)" }}>
          {region.mapImage ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src={region.mapImage}
                alt={`Plumbing service area map for ${region.name}`}
                fill
                sizes="(max-width: 64rem) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            <div
              className="problems-image-placeholder"
              role="img"
              aria-label={`Service area map for ${region.name}`}
              style={{ aspectRatio: "16 / 9" }}
            >
              <LucideIcon name="MapPin" size={40} color="var(--color-neutral-500)" />
              <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>
                Service area map, {region.name}
              </p>
            </div>
          )}

          <div>
            <p style={{ marginTop: 0, color: "var(--color-text-muted)" }}>{region.subheading}</p>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-3)",
                listStyle: "none",
                padding: 0,
                margin: "var(--space-6) 0 0",
              }}
            >
              {serviceAreas.map((area) => {
                const isPrimary = area === primary;
                const href =
                  isPrimary && area.hasDetailPage && area.slug ? `/service-areas/${area.slug}/` : "/service-areas/";
                return (
                  <li key={area.name}>
                    <Link href={href} className={isPrimary ? "pill pill--filled" : "pill pill--outline"}>
                      {area.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p style={{ marginTop: "var(--space-6)" }}>
              <Link href="/service-areas/">View all service areas →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
