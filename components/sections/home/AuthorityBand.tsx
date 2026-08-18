import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Trust / authority band (docs/04 §6, docs/06 §25). Deep navy surface — the
 * page's first dark beat after the hero — with a 4:5 portrait image beside the
 * positioning copy and up to four proof points.
 *
 * Every proof point is built in `content/homepage` from `clientConfig`
 * credentials, so a client without a license number simply shows one fewer row
 * rather than an unverifiable claim (docs/17 §22).
 */
export function AuthorityBand() {
  const { authority, primaryCta } = homepageContent;

  return (
    <section className="section section-emphasis home-authority" aria-labelledby="authority-heading">
      <div className="section__inner home-authority__layout">
        <div className="home-authority__media">
          <Image
            src={authority.image}
            alt={authority.imageAlt}
            fill
            sizes="(max-width: 64rem) 100vw, 40vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className="home-authority__copy">
          <p className="home-eyebrow home-eyebrow--on-dark">{authority.eyebrow}</p>
          <h2 id="authority-heading" className="home-authority__heading display-heading">
            {authority.heading}
          </h2>
          <p className="home-authority__body">{authority.body}</p>

          <ul className="home-proof-list" role="list">
            {authority.proofPoints.map((point) => (
              <li key={point.title} className="home-proof-list__item">
                <LucideIcon
                  name={point.icon}
                  size={22}
                  color="var(--color-accent-500)"
                  className="home-proof-list__icon"
                />
                <span>
                  <strong className="home-proof-list__title">{point.title}</strong>
                  <span className="home-proof-list__body">{point.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="home-authority__actions">
            <Button variant="accent" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
            <Button variant="inverse" href={authority.cta.href}>
              {authority.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
