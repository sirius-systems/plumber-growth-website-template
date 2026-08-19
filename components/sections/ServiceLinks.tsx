import Link from "next/link";
import { clientConfig } from "@/config/client";
import { SERVICES, type PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { ServiceCard } from "@/components/sections/ServiceCard";

/**
 * Related services + service areas (docs/04 §8.2, §27).
 *
 * Restructured into the reference's two-part closing block: related services as
 * the shared <ServiceCard> (image, name, description, link) instead of a text
 * link list, then the service areas as an even tile grid.
 *
 * Every link is resolved exactly as before and nothing is added or dropped:
 *   - related = `svc.relatedServices`, enabled only, config order, capped at 5
 *   - areas   = `clientConfig.serviceAreas` in config order, with the same rule
 *               that only the PRIMARY area links to its own location page and
 *               every other tile goes to the /service-areas/ hub
 *   - the "View all service areas →" link and its destination are unchanged
 *
 * The H2 and both H3 subheadings keep their original strings.
 *
 * @param showServiceAreas Set false on a page that renders its own service-area
 *   section (water-heater-repair does), so the areas are not listed twice. The
 *   default keeps the previous behaviour for every other service.
 */
export function ServiceLinks({
  svc,
  showServiceAreas = true,
}: {
  svc: PlumbingService;
  showServiceAreas?: boolean;
}) {
  const { serviceAreas } = clientConfig;
  const related = svc.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug && s.enabled))
    .filter((s): s is PlumbingService => Boolean(s))
    .slice(0, 5);
  const primary = serviceAreas.find((a) => a.primary) ?? serviceAreas[0];

  return (
    <section className="section section-alternate" aria-labelledby="svc-links-heading">
      <div className="section__inner">
        <h2 id="svc-links-heading" className="section-heading svc-heading">
          {showServiceAreas ? "Related Services and Areas We Serve" : "Related Services"}
        </h2>

        {related.length > 0 && (
          <div className="svc-links__group">
            {/* The subheading is redundant when the H2 above is already
                "Related Services" (areas suppressed), so it is dropped there. */}
            {showServiceAreas && <h3 className="svc-links__subheading">Related Services</h3>}
            {/* --centered, not auto-fill: a curated subset of two or three cards
                would otherwise leave an empty phantom track and sit left. */}
            <ul className="service-grid service-grid--centered">
              {related.map((r) => (
                <li key={r.slug} style={{ display: "flex" }}>
                  <ServiceCard service={r} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {showServiceAreas && (
        <div className="svc-links__group">
          <h3 className="svc-links__subheading">Service Areas</h3>
          <ul className="svc-area-grid">
            {serviceAreas.map((area) => {
              const isPrimary = area === primary;
              const href =
                isPrimary && area.hasDetailPage && area.slug
                  ? `/service-areas/${area.slug}/`
                  : "/service-areas/";
              return (
                <li key={area.name}>
                  <Link href={href} className="svc-area">
                    <LucideIcon name="MapPin" size={18} color="var(--color-primary-600)" style={{ flex: "none" }} />
                    {area.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="svc-links__note">
            <Link href="/service-areas/">View all service areas →</Link>
          </p>
        </div>
        )}
      </div>
    </section>
  );
}
