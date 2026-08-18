import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/** Star row. Rendered from the review's own rating — never a rounded-up claim. */
function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="home-stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill={i < full ? "var(--color-accent-500)" : "rgba(255,255,255,0.25)"}
          aria-hidden="true"
        >
          <path d="M12 3l2.9 6 6.1.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20.3l1.1-6.1L3 9.9 9.1 9 12 3z" />
        </svg>
      ))}
      <span className="sr-only">{`Rated ${rating} out of 5 stars`}</span>
    </span>
  );
}

/**
 * Testimonials (docs/06 §36, docs/07 §30). Dark band, three cards, plus the
 * aggregate figure — all read from `config/reviews.ts`. Nothing here is written
 * into the component: no invented names, platforms, awards, or star counts, and
 * the rating block hides when a client has no reviews yet.
 *
 * No AggregateRating / Review structured data is emitted from this data (it is
 * demo content and review schema requires verified, eligible reviews).
 */
export function TestimonialsBand() {
  const { testimonials } = homepageContent;
  const items = testimonials.items.slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section className="section section-emphasis home-testimonials" aria-labelledby="testimonials-heading">
      <div className="section__inner">
        <div className="home-testimonials__head">
          <p className="home-eyebrow home-eyebrow--on-dark">{testimonials.eyebrow}</p>
          <h2 id="testimonials-heading" className="home-testimonials__heading display-heading">
            {testimonials.heading}
          </h2>
          {testimonials.summary && (
            <p className="home-testimonials__summary">
              <Stars rating={testimonials.summary.rating} />
              <span>
                <strong>{testimonials.summary.rating.toFixed(1)}</strong> out of 5 · based on{" "}
                {testimonials.summary.count} reviews
              </span>
            </p>
          )}
        </div>

        <ul className="home-testimonials__grid" role="list">
          {items.map((review) => (
            <li key={review.author}>
              <figure className="home-review">
                <LucideIcon
                  name="Quote"
                  size={26}
                  color="var(--color-accent-500)"
                  className="home-review__mark"
                />
                <blockquote className="home-review__quote">
                  <p>{review.text}</p>
                </blockquote>
                <figcaption className="home-review__byline">
                  <Stars rating={review.rating} />
                  <span className="home-review__author">{review.author}</span>
                  <span className="home-review__location">{review.location}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="home-section-actions">
          <Button variant="inverse" href={testimonials.cta.href}>
            {testimonials.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
