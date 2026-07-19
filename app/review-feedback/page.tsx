import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";
import { ReviewFeedbackForm, PublicReviewLink } from "@/components/forms/ReviewFeedbackForm";
import { clientConfig } from "@/config/client";

/**
 * Review Feedback page (docs/04 §21). noindex,follow; excluded from nav + sitemap.
 * The public review link is offered unconditionally, before the private form
 * (docs/08 §12.7, SEO-003 — no review gating).
 */
export const metadata: Metadata = {
  title: "Share Your Feedback",
  robots: { index: false, follow: true },
  alternates: { canonical: "/review-feedback/" },
};

export default function ReviewFeedbackPage() {
  return (
    <SimplePage
      title="Share Your Feedback"
      intro={`Your feedback helps ${clientConfig.business.publicName} improve. You can leave a public review or send private feedback below.`}
    >
      <PublicReviewLink />
      <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Send private feedback</h2>
      <ReviewFeedbackForm />
    </SimplePage>
  );
}
