import type { Metadata } from "next";
import { ReviewFeedbackForm } from "@/components/forms/ReviewFeedbackForm";
import { clientConfig } from "@/config/client";

/**
 * Review Feedback page (docs/04 §21). noindex,follow; excluded from nav + sitemap.
 * The public review link is offered unconditionally — before and after the form —
 * and is NEVER gated on rating (docs/08 §12.7, SEO-003).
 */
export const metadata: Metadata = {
  title: "Share Your Feedback",
  robots: { index: false, follow: true },
  alternates: { canonical: "/review-feedback/" },
};

export default function ReviewFeedbackPage() {
  // Public review destination. Empty on the demo → placeholder "#". Shown
  // regardless of what rating the visitor gives (SEO-003 — no review gating).
  const reviewUrl = clientConfig.integrations.reviewUrl ?? "#";

  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Share Your Feedback</h1>
      <p style={{ fontSize: "var(--font-size-lg)" }}>
        Your honest feedback helps us improve. All ratings are welcome.
      </p>

      <p>
        <a className="btn btn--secondary" href={reviewUrl}>
          Leave a Google Review
        </a>
      </p>

      <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Send private feedback</h2>
      <ReviewFeedbackForm />

      <div style={{ marginTop: "var(--space-8)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--color-border)" }}>
        <p style={{ margin: 0 }}>
          Would you like to leave a public Google review?{" "}
          <a href={reviewUrl}>Leave a Google Review</a>
        </p>
      </div>
    </section>
  );
}
