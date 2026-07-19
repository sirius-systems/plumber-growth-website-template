import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";
import { clientConfig } from "@/config/client";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to common plumbing questions for ${clientConfig.business.publicName}.`,
  alternates: { canonical: "/faqs/" },
};

export default function FaqsPage() {
  return (
    <SimplePage
      title="Frequently Asked Questions"
      intro={`Common questions about plumbing services from ${clientConfig.business.publicName}.`}
    />
  );
}
