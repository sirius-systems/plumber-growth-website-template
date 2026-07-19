import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";
import { clientConfig } from "@/config/client";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read reviews for ${clientConfig.business.publicName} and share your own honest feedback.`,
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <SimplePage
      title="Customer Reviews"
      intro={`See what customers say about ${clientConfig.business.publicName}, and share your honest experience.`}
    />
  );
}
