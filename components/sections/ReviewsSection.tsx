import { reviews as allReviews, reviewsSummary, type CustomerReview } from "@/config/reviews";

interface ReviewsSectionProps {
  heading?: string;
  /** Show the aggregate rating + count line. */
  showSummary?: boolean;
  /** Limit how many reviews render (defaults to all). */
  limit?: number;
  altBackground?: boolean;
}

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span style={{ color: "var(--brand-accent)", letterSpacing: "0.1em" }}>
      <span aria-hidden="true">{"★".repeat(full)}</span>
      <span className="sr-only">{`Rated ${rating} out of 5`}</span>
    </span>
  );
}

/**
 * Reviews display (docs/06 §36). Renders verified/approved reviews with
 * attribution. Ratings are shown with the review count as their source line.
 *
 * IMPORTANT: this component renders NO Review/AggregateRating structured data.
 * The demo values are illustrative (disclosed by the demo banner); review schema
 * is only appropriate for a live client whose data meets eligibility rules
 * (docs/04 §15, docs/07 §30).
 */
export function ReviewsSection({
  heading = "What Our Customers Say",
  showSummary = true,
  limit,
  altBackground = false,
}: ReviewsSectionProps) {
  const items: CustomerReview[] = limit ? allReviews.slice(0, limit) : allReviews;

  return (
    <section
      className="section"
      style={altBackground ? { background: "var(--color-background-alt)" } : undefined}
    >
      <div className="container">
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>{heading}</h2>
        {showSummary && (
          <p style={{ fontSize: "var(--font-size-lg)" }}>
            <Stars rating={reviewsSummary.rating} />{" "}
            <strong>{reviewsSummary.rating.toFixed(1)}</strong> average across{" "}
            {reviewsSummary.count} customer reviews.
          </p>
        )}
        <ul
          style={{
            display: "grid",
            gap: "var(--space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {items.map((review, i) => (
            <li
              key={`${review.author}-${i}`}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-sm)",
                padding: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              <Stars rating={review.rating} />
              <blockquote style={{ margin: 0 }}>{review.text}</blockquote>
              <p style={{ margin: 0, fontWeight: 600 }}>
                {review.author}
                <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>
                  {" "}
, {review.location}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
