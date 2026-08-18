import Link from "next/link";
import Image from "next/image";
import { clientConfig } from "@/config/client";
import { featuredServices, homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/** Shared fallback when a service has no artwork configured yet. */
const SERVICE_CARD_PLACEHOLDER = "/images/placeholders/service-card.svg";

/**
 * Core services (docs/04 §6, docs/06 §25). A curated subset of the catalog, each
 * card carrying a 7:4 image with an icon badge, the customer OUTCOME rather than
 * a feature list, and a link to the service's own page. The homepage never tries
 * to explain a service in full — it routes.
 *
 * Cards render from `homepageContent.services.highlights` joined against
 * `config/services.ts`, so a service that is disabled for a client silently
 * drops out instead of linking to a 404.
 */
export function CoreServices() {
  const { services } = homepageContent;
  const featured = featuredServices();
  if (featured.length === 0) return null;

  return (
    <section className="section section-alternate" aria-labelledby="services-heading">
      <div className="section__inner">
        <p className="home-eyebrow">{services.eyebrow}</p>
        <h2 id="services-heading" className="section-heading home-section-heading">
          {services.heading}
        </h2>
        {/* --wide lifts the 68ch reading measure so this one-sentence lede sets
            on a single line across the section container instead of breaking in
            two. Below 48rem the cap returns and it wraps normally. */}
        <p className="section-lede section-lede--wide">{services.lede}</p>

        <ul className="home-service-grid">
          {featured.map(({ service, icon, outcome }) => {
            const href = `/services/${service.slug}/`;
            return (
              <li key={service.slug}>
                <article className="home-service-card">
                  <div className="home-service-card__media">
                    <Image
                      src={service.image ?? SERVICE_CARD_PLACEHOLDER}
                      alt={`${service.name} in ${clientConfig.location.city}, ${clientConfig.location.state}`}
                      fill
                      sizes="(max-width: 48rem) 100vw, (max-width: 75rem) 50vw, 25vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <span className="home-service-card__badge" aria-hidden="true">
                      <LucideIcon name={icon} size={20} />
                    </span>
                  </div>
                  <div className="home-service-card__body">
                    <h3 className="home-service-card__title">
                      <Link href={href}>{service.name}</Link>
                    </h3>
                    <p className="home-service-card__copy">{outcome}</p>
                    <Link href={href} className="home-card-link">
                      Learn more
                      <LucideIcon name="ArrowRight" size={16} />
                      <span className="sr-only"> about {service.name}</span>
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="home-section-actions">
          <Button variant="accent" href={services.viewAll.href}>
            {services.viewAll.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
