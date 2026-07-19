import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your information.",
  alternates: { canonical: "/privacy-policy/" },
};

/**
 * Legal page (docs/04 §4.4). Final legal language requires professional review
 * (docs/14 §20) — this is placeholder structure, not approved legal copy.
 */
export default function PrivacyPolicyPage() {
  return (
    <SimplePage title="Privacy Policy" intro="This policy explains how your information is handled.">
      <p style={{ color: "var(--color-text-muted)" }}>
        Placeholder content pending legal review. Do not publish without approved,
        client-specific legal language (docs/14 §20).
      </p>
    </SimplePage>
  );
}
