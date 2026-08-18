import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Audience / commercial band (docs/04 §7). Renders ONLY when the client is
 * configured for commercial work — `homepageContent.audience` is null otherwise
 * and this component returns null rather than filling the slot with generic
 * placeholder copy.
 */
export function AudienceBand() {
  const { audience } = homepageContent;
  if (!audience) return null;

  return (
    <section className="section section-alternate" aria-labelledby="audience-heading">
      <div className="section__inner home-audience">
        <div className="home-audience__media">
          <Image
            src={audience.image}
            alt={audience.imageAlt}
            fill
            sizes="(max-width: 64rem) 100vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className="home-audience__copy">
          <p className="home-eyebrow">{audience.eyebrow}</p>
          <h2 id="audience-heading" className="home-audience__heading">
            {audience.heading}
          </h2>
          <p className="home-audience__body">{audience.body}</p>

          <ul className="home-benefit-list" role="list">
            {audience.benefits.map((benefit) => (
              <li key={benefit.label}>
                <span className="home-benefit-list__icon" aria-hidden="true">
                  <LucideIcon name={benefit.icon} size={18} />
                </span>
                {benefit.label}
              </li>
            ))}
          </ul>

          <Button variant="accent" href={audience.cta.href}>
            {audience.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
