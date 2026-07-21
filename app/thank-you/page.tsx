import type { Metadata } from "next";
import { Suspense } from "react";
import { ThankYouMessage } from "@/components/ThankYouMessage";

/** Confirmation page (docs/04 §4.3). noindex; never exposes submitted data in URL. */
export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Thank you</h1>
      {/* useSearchParams (?from) requires a Suspense boundary under static export. */}
      <Suspense fallback={<p>Loading…</p>}>
        <ThankYouMessage />
      </Suspense>
    </section>
  );
}
