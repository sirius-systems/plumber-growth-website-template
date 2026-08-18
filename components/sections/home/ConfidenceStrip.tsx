import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Optional confidence module (docs/04 §6). Every item is derived from verified
 * `clientConfig` flags — emergency availability, financing, license, years in
 * business — so nothing here can assert a benefit the client has not confirmed.
 * With no configured flags the array is empty and the whole band hides.
 *
 * Deliberately excluded: warranties, free estimates, same-day guarantees,
 * discounts, and scarcity. None of those exist in config, so none are claimed.
 */
export function ConfidenceStrip() {
  const { confidence } = homepageContent;
  if (confidence.items.length === 0) return null;

  return (
    <section className="section section--compact section-default home-confidence" aria-labelledby="confidence-heading">
      <div className="section__inner">
        <h2 id="confidence-heading" className="sr-only">
          {confidence.heading}
        </h2>
        <ul className="home-confidence__list" role="list">
          {confidence.items.map((item) => (
            <li key={item.title} className="home-confidence__item">
              <span className="home-confidence__icon" aria-hidden="true">
                <LucideIcon name={item.icon} size={22} />
              </span>
              <span>
                <strong className="home-confidence__title">{item.title}</strong>
                <span className="home-confidence__body">{item.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
