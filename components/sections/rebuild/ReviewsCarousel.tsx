"use client";

import { useEffect, useRef, useState } from "react";
import { clientConfig } from "@/config/client";
import { reviews as allReviews, reviewsSummary, type CustomerReview } from "@/config/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Button } from "@/components/ui/Button";

function AggregateStars() {
  const full = Math.round(reviewsSummary.rating);
  return (
    <span style={{ display: "inline-flex", gap: "3px", verticalAlign: "middle" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={22} height={22} viewBox="0 0 24 24" fill={i < full ? "var(--color-accent-500)" : "var(--color-neutral-200)"} aria-hidden="true">
          <path d="M12 3l2.9 6 6.1.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20.3l1.1-6.1L3 9.9 9.1 9 12 3z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Auto-scrolling reviews carousel (docs/06 §36). Seamless loop via a doubled
 * track; JS sets duration for ~40px/s. Pauses on hover/touch. Reduced-motion:
 * static horizontal scroll, single set. No AggregateRating structured data.
 */
export function ReviewsCarousel({
  reviews = allReviews,
  headingLocation,
}: {
  reviews?: CustomerReview[];
  headingLocation?: string;
}) {
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const [duration, setDuration] = useState(30);
  const trackRef = useRef<HTMLDivElement>(null);
  const reviewUrl = clientConfig.integrations.reviewUrl ?? "#";

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || !trackRef.current) return;
    const oneSet = trackRef.current.scrollWidth / 2;
    if (oneSet > 0) setDuration(oneSet / 40);
  }, [reduced]);

  const leaveLabel = headingLocation ? `Leave Us a Review in ${headingLocation}` : "Leave Us a Review";

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          {headingLocation ? `What ${headingLocation} Customers Say` : "What Our Customers Say"}
        </h2>

        <div style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
          <p style={{ margin: 0 }}>
            <span style={{ fontSize: "52px", fontWeight: 700, color: "var(--color-primary-900)", lineHeight: 1 }}>
              {reviewsSummary.rating.toFixed(1)}
            </span>{" "}
            <span style={{ fontSize: "16px", color: "var(--color-text-muted)" }}>out of 5</span>
          </p>
          <div style={{ margin: "var(--space-2) 0" }}>
            <AggregateStars />
          </div>
          <p style={{ margin: 0, fontSize: "13px", color: "var(--color-text-muted)" }}>
            Based on {reviewsSummary.count} reviews
          </p>
        </div>

        <div
          className={reduced ? "carousel carousel--reduced" : "carousel"}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="carousel-track"
            style={
              reduced
                ? undefined
                : { animationDuration: `${duration}s`, animationPlayState: paused ? "paused" : "running" }
            }
          >
            {(reduced ? reviews : [...reviews, ...reviews]).map((r, i) => (
              <ReviewCard key={`${r.author}-${i}`} review={r} />
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
          <Button variant="secondary" href={reviewUrl} target="_blank" rel="noopener noreferrer">
            {leaveLabel}
          </Button>
        </p>
      </div>
    </section>
  );
}
