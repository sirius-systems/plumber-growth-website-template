import Link from "next/link";
import { clientConfig } from "@/config/client";
import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Local coverage (docs/04 §12). A city grid rather than map pins or address
 * cards: these are SERVICE AREAS, not branch locations, so nothing here implies
 * an office, storefront, public address, or directions for a market where the
 * client has no physical presence.
 *
 * Areas with a detail page link to it; the rest render as plain tiles so no link
 * ever lands on a 404.
 */
export function CoverageAreas() {
  const { coverage } = homepageContent;
  const { serviceAreas } = clientConfig;
  if (serviceAreas.length === 0) return null;

  return (
    <section className="section section-alternate" aria-labelledby="coverage-heading">
      <div className="section__inner">
        <p className="home-eyebrow">{coverage.eyebrow}</p>
        <h2 id="coverage-heading" className="section-heading home-section-heading">
          {coverage.heading}
        </h2>
        {/* --wide lifts the 68ch reading measure so this one-sentence lede sets
            on a single line across the section container instead of breaking in
            two. Below 48rem the cap returns and it wraps normally. */}
        <p className="section-lede section-lede--wide">{coverage.lede}</p>

        <ul className="home-area-grid" role="list">
          {serviceAreas.map((area) => {
            const label = `${area.name}, ${area.state}`;
            const inner = (
              <>
                <LucideIcon
                  name="MapPin"
                  size={18}
                  color="var(--color-primary-600)"
                  className="home-area__pin"
                />
                <span className="home-area__name">{area.name}</span>
                <span className="home-area__state">{area.state}</span>
              </>
            );

            return (
              <li key={label}>
                {area.hasDetailPage && area.slug ? (
                  <Link href={`/service-areas/${area.slug}/`} className="home-area home-area--link">
                    {inner}
                  </Link>
                ) : (
                  <span className="home-area">{inner}</span>
                )}
              </li>
            );
          })}
        </ul>

        <p className="home-area-note">{coverage.reassurance}</p>

        <div className="home-section-actions">
          <Button variant="accent" href={coverage.viewAll.href}>
            {coverage.viewAll.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
