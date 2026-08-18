import Link from "next/link";
import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Intent-routing band (docs/04 §6). Sits directly under the hero and answers
 * "which of these is me?" before any sales copy — decision support, not a
 * decorative card grid. Cards are config-gated: the commercial card only exists
 * for a client who does commercial work.
 *
 * Each card is a single link so the whole surface is one large target; the title
 * carries the accessible name and the CTA row is presentational.
 */
export function IntentRouting() {
  const { intent } = homepageContent;

  return (
    <section className="section section--compact section-default" aria-labelledby="intent-heading">
      <div className="section__inner">
        <h2 id="intent-heading" className="section-heading home-section-heading">
          {intent.heading}
        </h2>
        <p className="section-lede">{intent.lede}</p>

        <ul className="home-intent-grid">
          {intent.cards.map((card) => (
            <li key={card.cta.href}>
              <Link href={card.cta.href} className="home-intent-card">
                <span className="home-intent-card__icon" aria-hidden="true">
                  <LucideIcon name={card.icon} size={24} />
                </span>
                <span className="home-intent-card__title">{card.title}</span>
                <span className="home-intent-card__body">{card.body}</span>
                <span className="home-intent-card__cta">
                  {card.cta.label}
                  <LucideIcon name="ArrowRight" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
