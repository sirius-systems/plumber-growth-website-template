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
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Top Service Areas
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
          Our most-served communities in {region.name}.
        </p>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {featured.map((area) => (
            <li key={area.name} style={{ display: "flex" }}>
              <LocationCard area={area} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
