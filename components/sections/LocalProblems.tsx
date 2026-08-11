import type { ServiceAreaReference } from "@/config/client";
import type { LocationContent, LocalProblem } from "@/config/location-content";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Generic local problems used when a location has no specific content. */
const GENERIC: LocalProblem[] = [
  { icon: "Droplets", title: "Hard Water Buildup", description: "Mineral deposits from hard water affect fixtures, water heaters, and pipes over time, reducing efficiency and shortening equipment life." },
  { icon: "AlertTriangle", title: "Aging Pipe Systems", description: "Older homes may have corroded or outdated pipes that develop pinhole leaks or restricted flow without obvious warning signs." },
  { icon: "Thermometer", title: "Water Heater Stress", description: "Temperature extremes and hard water accelerate sediment buildup in water heaters, reducing heating efficiency and lifespan." },
  { icon: "Waves", title: "Sewer Line Roots", description: "Tree roots seek out pipe joints and cracks, gradually causing blockages and backups in sewer and drain lines." },
  { icon: "Gauge", title: "Low Water Pressure", description: "Pressure issues can result from mineral deposits, partially closed valves, or problems with the municipal supply connection." },
  { icon: "Home", title: "Foundation Movement", description: "Soil conditions and settling can stress underground pipes, leading to slab leaks that drive up water bills and cause hidden damage." },
];

/** Local plumbing problems grid (docs/06 §25). */
export function LocalProblems({ area, content }: { area: ServiceAreaReference; content?: LocationContent }) {
  const problems = content?.localProblems ?? GENERIC;

  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading">
          Common Plumbing Issues in {area.name}
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {problems.map((p) => (
            <li key={p.title} className="stacked-card" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <LucideIcon
                name={p.icon}
                size={26}
                color={p.icon === "AlertTriangle" ? "var(--color-danger)" : "var(--color-primary-600)"}
                className="stacked-card-icon"
              />
              <h3 style={{ margin: 0, fontSize: "var(--font-size-base)", color: "var(--color-primary-900)" }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
