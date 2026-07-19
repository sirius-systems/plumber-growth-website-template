import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern use of this website.",
  alternates: { canonical: "/terms/" },
};

/** Legal page (docs/04 §4.4). Requires legal review before launch (docs/14 §20). */
export default function TermsPage() {
  return (
    <SimplePage title="Terms & Conditions" intro="These terms govern your use of this website.">
      <p style={{ color: "var(--color-text-muted)" }}>
        Placeholder content pending legal review (docs/14 §20).
      </p>
    </SimplePage>
  );
}
