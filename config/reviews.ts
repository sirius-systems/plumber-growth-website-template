/**
 * Customer reviews (docs/06 §36, docs/07 §30).
 *
 * ⚠ DEMONSTRATION DATA. These reviews, the aggregate rating, and the review
 * count are FICTIONAL and exist only to populate the demo. Because the data is
 * not verified:
 *   - NEVER emit AggregateRating / Review structured data from these values
 *     (docs/04 §15, docs/07 §30). The demo relies on the site-wide demo banner
 *     to disclose that all content is illustrative.
 *   - For a live client, replace with verified reviews and only then consider
 *     review schema if eligibility requirements are satisfied.
 * Never gate the public review link on rating (SEO-003, docs/04 §21).
 */

export interface CustomerReview {
  /** Approved public attribution (first name + initial for the demo). */
  author: string;
  /** Service-area location for context. */
  location: string;
  /** Star rating 1–5. */
  rating: number;
  /** Review body, verbatim. */
  text: string;
}

export interface ReviewsSummary {
  /** Average star rating (demo value). */
  rating: number;
  /** Total review count (demo value). */
  count: number;
}

export const reviewsSummary: ReviewsSummary = {
  rating: 4.9,
  count: 94,
};

export const reviews: CustomerReview[] = [
  {
    author: "Maria C.",
    location: "Henderson",
    rating: 5,
    text: "Called Las Vegas Pro Plumbing at 6 AM on a Monday when we discovered water flooding our utility room. Jon's crew was at our house within 90 minutes. They found the burst pipe fast, explained exactly what needed to happen, and had everything fixed before noon. Honest pricing, no surprises on the invoice. These are our plumbers for life.",
  },
  {
    author: "David K.",
    location: "Summerlin",
    rating: 5,
    text: "I've been putting off a slow drain in our master bath for months. Finally called Las Vegas Pro and wish I'd done it sooner. In and out in under an hour, drain is perfect, and the technician showed me what was causing the problem. Fair price, professional crew.",
  },
  {
    author: "Rachel T.",
    location: "Spring Valley",
    rating: 5,
    text: "Water heater stopped working on a Friday afternoon. Las Vegas Pro had a new one installed by Saturday morning. Jon walked me through the options, didn't try to upsell me on something I didn't need, and the price was exactly what he quoted. That kind of straightforward service is hard to find.",
  },
  {
    author: "Tom B.",
    location: "North Las Vegas",
    rating: 5,
    text: "Used them for a slab leak detection after another company quoted me an enormous job. Las Vegas Pro found the exact location quickly, gave me a clear repair plan, and the final cost was a fraction of what I was expecting. Highly recommend for anyone who wants honest work at a fair price.",
  },
  {
    author: "Sandra M.",
    location: "Las Vegas",
    rating: 5,
    text: "Emergency garbage disposal replacement on a Sunday. Responded to my website request within minutes, confirmed the appointment, showed up on time. Fast, clean, professional. This is who you call in Las Vegas when you need a plumber you can actually trust.",
  },
];
