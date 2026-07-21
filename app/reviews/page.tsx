import type { Metadata } from "next";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what Las Vegas homeowners say about Las Vegas Pro Plumbing. 4.9 stars across 94 reviews. Honest, fast, licensed plumbing service.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  // Public review destination. Empty on the demo → placeholder "#". The public
  // review link is NEVER gated on rating (SEO-003, docs/04 §21).
  const reviewUrl = clientConfig.integrations.reviewUrl ?? "#";

  return (
    <>
      <section className="container section">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
        <h1 style={{ fontSize: "var(--font-size-3xl)" }}>What Our Customers Say</h1>
      </section>

      {/* All reviews + aggregate display. No AggregateRating structured data is
          emitted (demo data is fictional — docs/04 §15, docs/07 §30). */}
      <ReviewsSection heading="Customer reviews" />

      <section className="container section" style={{ maxWidth: "48rem" }}>
        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Leave a review</h2>
        <p style={{ color: "var(--color-text-muted)" }}>
          Enjoyed our service? A public review helps other Las Vegas homeowners find us.
        </p>
        <p>
          <a className="btn btn--primary" href={reviewUrl}>
            Leave a Google Review
          </a>
        </p>

        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Have private feedback?</h2>
        <p style={{ color: "var(--color-text-muted)" }}>
          We want to hear it — good or bad. All ratings are welcome, and your feedback helps us
          improve.
        </p>
        <p>
          <Link className="btn btn--secondary" href="/review-feedback/">
            Share Your Feedback
          </Link>
        </p>
      </section>

      <CallToAction />
    </>
  );
}
