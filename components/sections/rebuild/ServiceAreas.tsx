import Link from "next/link";
import { clientConfig } from "@/config/client";
import { Button } from "@/components/ui/Button";

/**
 * Service-area index (docs/04 §12). A centered pill row — already the scannable
 * index pattern rather than a card grid — at compact density, so it reads as a
 * quick "do you cover me?" check between the two heavier sections around it.
 *
 * Every area that has a detail page now links to that page. Previously only the
 * primary market did: the other five landed on the hub even though config marks
 * them `hasDetailPage`, so tapping "Henderson" did not get you Henderson.
 * The primary market keeps the filled treatment to mark the home market.
 */
export function ServiceAreas() {
  const { serviceAreas } = clientConfig;
  const primary = serviceAreas.find((a) => a.primary) ?? serviceAreas[0];

  return (
    <section className="section section--compact section-default">
      <div className="section__inner">
        <h2 className="section-heading">Service Areas</h2>
        <p className="section-lede" style={{ marginBottom: "var(--space-6)" }}>
          Serving communities across the Las Vegas valley.
        </p>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "var(--space-3)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {serviceAreas.map((area) => {
            const isPrimary = area === primary;
            const href =
              area.hasDetailPage && area.slug ? `/service-areas/${area.slug}/` : "/service-areas/";
            return (
              <li key={area.name}>
                <Link href={href} className={isPrimary ? "pill pill--filled" : "pill pill--outline"}>
                  {area.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-6)" }}>
          <Button variant="text" href="/service-areas/">
            View all service areas →
          </Button>
        </div>
      </div>
    </section>
  );
}
