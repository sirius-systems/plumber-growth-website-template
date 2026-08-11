import Link from "next/link";
import { clientConfig } from "@/config/client";
import { formatPhoneDisplay } from "@/lib/utilities/format";

/** Non-featured location pills (docs/04 §12). Hidden when all are featured. */
export function SecondaryLocations() {
  const { serviceAreas, business } = clientConfig;
  const secondary = serviceAreas.filter((a) => a.featured === false && a.hasDetailPage && a.slug);
  if (secondary.length === 0) return null;

  return (
    <section className="section section-default">
      <div className="section__inner">
        <p style={{ textAlign: "center", fontWeight: 600, fontSize: "var(--font-size-base)", color: "var(--color-primary-900)", marginTop: 0 }}>
          More Areas We Serve
        </p>
        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-3)", listStyle: "none", padding: 0, margin: "var(--space-4) 0 0" }}>
          {secondary.map((a) => (
            <li key={a.name}>
              <Link href={`/service-areas/${a.slug}/`} className="pill pill--outline">
                {a.name}
              </Link>
            </li>
          ))}
        </ul>
        <p style={{ textAlign: "center", marginTop: "var(--space-6)", fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>
          Don&rsquo;t see your neighborhood? Call {formatPhoneDisplay(business.phone)}, we may still serve your area.
        </p>
      </div>
    </section>
  );
}
