import type { CustomerReview } from "@/config/reviews";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span style={{ display: "inline-flex", gap: "var(--space-1)" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill={i < full ? "var(--color-accent-500)" : "var(--color-neutral-200)"}
          aria-hidden="true"
        >
          <path d="M12 3l2.9 6 6.1.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20.3l1.1-6.1L3 9.9 9.1 9 12 3z" />
        </svg>
      ))}
      <span className="sr-only">{`Rated ${rating} out of 5 stars`}</span>
    </span>
  );
}

/** Review card (docs/06 §36). SVG stars, clamped text, distinct byline. */
export function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <article
      className="carousel-card"
      aria-label={review.text}
      style={{
        background: "#fff",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        padding: "var(--space-5) var(--space-6)",
        // Flat 20/22.5rem widths overflowed the track's own inline padding at
        // 375px, clipping the card; clamp both to the viewport instead.
        minWidth: "min(20rem, 78vw)",
        maxWidth: "min(22.5rem, 78vw)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
      }}
    >
      <Stars rating={review.rating} />
      <p
        style={{
          margin: 0,
          fontSize: "var(--font-size-sm)",
          lineHeight: "var(--line-height-body)",
          color: "var(--color-text)",
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {review.text}
      </p>
      <p style={{ margin: "auto 0 0", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
        <span style={{ fontSize: "var(--font-size-sm)", fontWeight: 600, color: "var(--color-text)" }}>
          {review.author}
        </span>
        <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>·</span>
        <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>{review.location}</span>
      </p>
    </article>
  );
}
