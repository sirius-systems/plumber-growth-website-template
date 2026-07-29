import type { CSSProperties } from "react";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Universal hero benefits (docs/06 §26). Deliberately static: this copy is the
 * same across every client deployment, so it is NOT config-driven — unlike the
 * credentials it replaced, which were client facts. Icons are semantically
 * distinct per benefit rather than a repeated checkmark.
 *
 * Shared by HomeHero and FinalCta so the two over-media surfaces stay identical.
 */
export const HERO_BENEFITS: { icon: string; label: string }[] = [
  { icon: "ShieldCheck", label: "Licensed, Bonded & Insured Professionals" },
  { icon: "FileText", label: "Upfront, Flat-Rate Pricing" },
  { icon: "Award", label: "100% Satisfaction Guarantee" },
];

/**
 * Renders the benefits over a dark photographic overlay. Icons are decorative
 * (aria-hidden via LucideIcon); the adjacent text is the accessible name, so no
 * extra labelling is required.
 */
export function BenefitsList({ style }: { style?: CSSProperties }) {
  return (
    <ul
      role="list"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        listStyle: "none",
        margin: "var(--space-4) 0 0",
        padding: 0,
        fontSize: "var(--font-size-base)",
        fontWeight: 500,
        color: "var(--color-text-on-media)",
        ...style,
      }}
    >
      {HERO_BENEFITS.map((b) => (
        <li key={b.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <LucideIcon name={b.icon} size={20} color="var(--color-accent-500)" />
          {b.label}
        </li>
      ))}
    </ul>
  );
}
