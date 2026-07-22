import { clientConfig } from "@/config/client";
import { RegionMap } from "@/components/sections/hub/RegionMap";
import { ServiceAreas } from "@/components/sections/rebuild/ServiceAreas";

/**
 * Contact service-area section. Reuses the standalone RegionMap (map/placeholder)
 * and the ServiceAreas pills — no duplicated CSS.
 */
export function ContactServiceArea() {
  const { region, serviceAreas } = clientConfig;
  const nearby = serviceAreas.slice(0, 3).map((a) => a.name).join(", ");

  return (
    <>
      <section className="section section-default" style={{ paddingBottom: 0 }}>
        <div className="section__inner">
          <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
            Areas We Serve
          </h2>
          <p style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", fontSize: "16px", color: "var(--color-text)" }}>
            We serve homeowners and businesses across {region.name} including {nearby} and
            surrounding communities.
          </p>
        </div>
      </section>
      {/* RegionMap (static map or placeholder) + ServiceAreas pills, reused as-is. */}
      <RegionMap />
      <ServiceAreas />
    </>
  );
}
