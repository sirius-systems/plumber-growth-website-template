import { clientConfig } from "@/config/client";
import { LocationCard } from "@/components/sections/LocationCard";

/** Featured location cards (docs/06 §25). Renders locations with featured: true. */
export function FeaturedLocations() {
  const { region, serviceAreas } = clientConfig;
  const featured = serviceAreas.filter((a) => a.featured);
  if (featured.length === 0) return null;

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading">
          Top Service Areas
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
          Our most-served communities in {region.name}.
        </p>
        <ul className="featured-grid">
          {featured.map((area) => (
            <li key={area.name}>
              <LocationCard area={area} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
