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
 *
 * Layout lives in the `.hero-benefits` class rather than inline, so a calling
 * surface can vary the rhythm — FinalCta sets the same three items in two
 * utility-size columns so the closing band does not restate the hero verbatim.
 * An inline style would have won over that rule.
 */
export function BenefitsList({ style }: { style?: CSSProperties }) {
  return (
    <ul role="list" className="hero-benefits" style={style}>
      {HERO_BENEFITS.map((b) => (
        <li key={b.label} className="hero-benefits__item">
          <LucideIcon name={b.icon} size={20} color="var(--color-accent-500)" />
          {b.label}
        </li>
      ))}
    </ul>
  );
}
