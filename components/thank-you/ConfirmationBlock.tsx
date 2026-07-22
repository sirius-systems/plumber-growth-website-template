import type { ThankYouVariant } from "@/content/thank-you";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Confirmation heading block (docs/04 §23). */
export function ConfirmationBlock({ variant }: { variant: ThankYouVariant }) {
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "3rem 1.25rem 1.5rem", textAlign: "center" }}>
      <LucideIcon name={variant.icon} size={56} color={variant.iconColor} style={{ display: "block", margin: "0 auto 1rem" }} />
      <h1 className="display-heading" style={{ margin: 0, fontSize: "clamp(28px, 4vw, 40px)", color: "var(--color-primary-900)" }}>
        {variant.heading}
      </h1>
      <p style={{ maxWidth: "520px", margin: "0.75rem auto 0", fontSize: "17px", lineHeight: 1.7, color: "var(--color-text-muted)" }}>
        {variant.subtext}
      </p>
    </div>
  );
}
