import { enabledServices, type ServiceSlug } from "@/config/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/Button";

/**
 * Services grid (docs/06 §13, §25). Centered heading + ServiceCard grid.
 *
 * Shared by the services hub (all enabled services) and the homepage (a curated
 * subset). Both draw from the same structured service catalog.
 *
 * @param featuredSlugs When set, render only these services, in this order
 *                      (e.g. the homepage's curated four). Unknown/disabled
 *                      slugs are skipped. Omit to render every enabled service.
 * @param viewAllHref   When set, render a "View All Services" button below the
 *                      grid linking here (used on the homepage subset).
 * @param centered      Center the cards as a wrapping flex row instead of the
 *                      full-width auto-fill grid (docs/06 §25). Used by the
 *                      homepage subset, where auto-fill would otherwise leave a
 *                      left-aligned phantom column. The /services hub omits it.
 */
export function ServicesGrid({
  featuredSlugs,
  viewAllHref,
  centered,
}: {
  featuredSlugs?: ServiceSlug[];
  viewAllHref?: string;
  centered?: boolean;
} = {}) {
  const all = enabledServices();
  const services = featuredSlugs
    ? featuredSlugs
        .map((slug) => all.find((s) => s.slug === slug))
        .filter((s): s is (typeof all)[number] => Boolean(s))
    : all;

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading">
          Our Plumbing Services
        </h2>
        {/* --wide: this lede is ~85 characters, so the default 68ch reading
            measure broke it across two lines. It sets on one line from 48rem up
            and still wraps normally on narrow screens. */}
        <p className="section-lede section-lede--wide">
          From emergencies to everyday repairs and installations, our licensed team handles it.
        </p>
        <ul className={centered ? "service-grid service-grid--centered" : "service-grid"}>
          {services.map((s) => (
            <li key={s.slug} style={{ display: "flex" }}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
        {viewAllHref && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-8)" }}>
            <Button href={viewAllHref} variant="secondary">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
