import Link from "next/link";
import { clientConfig } from "@/config/client";
import { LocationCard } from "@/components/sections/LocationCard";

interface LocationGridProps {
  heading?: string;
  intro?: string;
  altBackground?: boolean;
}

/**
 * Service-area card grid (docs/06 §25). Used on the homepage service-areas
 * section; the /service-areas/ hub renders LocationCard directly. Interior
 * service pages keep the compact ServiceAreaList pills.
 */
export function LocationGrid({ heading = "Areas We Serve", intro, altBackground = false }: LocationGridProps) {
  const areas = clientConfig.serviceAreas;

  return (
    <section
      className="section"
      style={altBackground ? { background: "var(--color-background-alt)" } : undefined}
    >
      <div className="container">
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>{heading}</h2>
        {intro && (
          <p style={{ maxWidth: "var(--measure-reading)", color: "var(--color-text-muted)" }}>
            {intro}
          </p>
        )}
        <ul
          style={{
            display: "grid",
            gap: "var(--space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-6) 0 0",
          }}
        >
          {areas.map((area) => (
            <li key={area.name} style={{ display: "flex" }}>
              <LocationCard area={area} />
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "var(--space-6)" }}>
          <Link href="/service-areas/">View all service areas →</Link>
        </p>
      </div>
    </section>
  );
}
