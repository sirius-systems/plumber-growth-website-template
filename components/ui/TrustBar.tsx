import type { CSSProperties } from "react";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Canonical trust indicator (docs/06 §27, §42). Replaces the six ad-hoc trust
 * strips that had drifted apart in icon, size, color, and rating wording.
 *
 * The `variant` adapts item styling to its surrounding context; the CALLING
 * component still owns the container chrome (hero copy, navy section, or card),
 * so dropping this in changes zero surrounding layout. Icons are meaningful per
 * trust concept (badge = licensed, shield = insured, star = rating, …) rather
 * than a single generic check.
 */
export type TrustIcon =
  | "badge-check"
  | "shield"
  | "shield-check"
  | "star"
  | "clock"
  | "award"
  | "map-pin"
  | "phone"
  | "zap"
  | "check-circle";

export interface TrustItem {
  icon: TrustIcon;
  label: string;
}

export type TrustBarVariant = "over-media" | "dark-bar" | "light-card";

/** kebab prop → LucideIcon registry name. */
const ICON_NAME: Record<TrustIcon, string> = {
  "badge-check": "BadgeCheck",
  shield: "Shield",
  "shield-check": "ShieldCheck",
  star: "Star",
  clock: "Clock",
  award: "Award",
  "map-pin": "MapPin",
  phone: "Phone",
  zap: "Zap",
  "check-circle": "CheckCircle",
};

interface VariantConfig {
  iconSize: number;
  ul: CSSProperties;
  item: CSSProperties;
  iconColor: (icon: TrustIcon) => string;
}

const VARIANTS: Record<TrustBarVariant, VariantConfig> = {
  // Over a dark photographic overlay (HomeHero, ServiceHero, FinalCta).
  // Amber icons + white text; text at 0.90 opacity to clear WCAG 1.4.3 (audit H2).
  "over-media": {
    iconSize: 14,
    ul: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "var(--space-2)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontSize: "var(--font-size-sm)",
      fontWeight: 500,
      color: "var(--color-text-on-media)",
    },
    item: { display: "inline-flex", alignItems: "center", gap: "4px" },
    iconColor: () => "var(--color-accent-500)",
  },
  // Solid dark navy section (LocationTrustBar). Amber icons, white text.
  "dark-bar": {
    iconSize: 20,
    ul: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "1.5rem 2.5rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontSize: "var(--font-size-sm)",
      fontWeight: 500,
      color: "#fff",
    },
    item: { display: "inline-flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" },
    iconColor: () => "var(--color-accent-500)",
  },
  // Light background / card (ContactTrust, FaqTrust). Amber star, navy for the
  // rest — preserving the existing light-surface pattern.
  "light-card": {
    iconSize: 18,
    ul: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem 2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontSize: "var(--font-size-sm)",
      fontWeight: 500,
      color: "var(--color-text)",
    },
    item: { display: "inline-flex", alignItems: "center", gap: "0.5rem" },
    iconColor: (icon) => (icon === "star" ? "var(--color-accent-500)" : "var(--color-primary-600)"),
  },
};

/**
 * @param items    Trust items to render (built by the caller from client config).
 * @param variant  Container context — controls icon size/color and text color.
 * @param className Optional class merged onto the <ul> (e.g. `section__inner`).
 * @param style    Optional inline overrides merged after the variant defaults.
 */
export function TrustBar({
  items,
  variant,
  className,
  style,
}: {
  items: TrustItem[];
  variant: TrustBarVariant;
  className?: string;
  style?: CSSProperties;
}) {
  if (items.length === 0) return null;
  const v = VARIANTS[variant];
  return (
    <ul role="list" className={className} style={{ ...v.ul, ...style }}>
      {items.map((it) => (
        <li key={it.label} style={v.item}>
          <LucideIcon name={ICON_NAME[it.icon]} size={v.iconSize} color={v.iconColor(it.icon)} />
          {it.label}
        </li>
      ))}
    </ul>
  );
}
