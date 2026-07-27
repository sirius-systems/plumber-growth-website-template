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
 */
export function ServicesGrid({
  featuredSlugs,
  viewAllHref,
}: {
  featuredSlugs?: ServiceSlug[];
  viewAllHref?: string;
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
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Our Plumbing Services
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto var(--space-8)",
            color: "var(--color-text-muted)",
          }}
        >
          From emergencies to everyday repairs and installations, our licensed team handles it.
        </p>
        <ul className="service-grid">
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
