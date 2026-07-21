import type { Metadata } from "next";
import { Suspense } from "react";
import { clientConfig } from "@/config/client";
import { ConfirmationContent } from "@/components/thank-you/ConfirmationContent";

/** Confirmation page (docs/04 §23). noindex; never exposes submitted data. */
export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | publicName" template.
  title: { absolute: `Request Received | ${clientConfig.business.publicName}` },
  robots: { index: false, follow: true },
};

/** Minimal skeleton to reserve space while the ?type param resolves. */
function ThankYouSkeleton() {
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "3rem 1.25rem", minHeight: "40vh" }} aria-hidden="true" />
  );
}

export default function ThankYouPage() {
  return (
    <div style={{ background: "var(--color-background-alt)", minHeight: "100vh" }}>
      {/* useSearchParams requires a Suspense boundary under static export. */}
      <Suspense fallback={<ThankYouSkeleton />}>
        <ConfirmationContent />
      </Suspense>
    </div>
  );
}
