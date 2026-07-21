import type { ReactNode } from "react";

/**
 * Decorative 7:4 media placeholder for the top of a card (docs/06 §25). A light
 * neutral panel with a centered category icon in the primary color. Purely
 * decorative — aria-hidden, no alt text (the card heading names the item). The
 * parent card should use `overflow: hidden` + its border radius so the top
 * corners round and the bottom edge meets the card body squarely.
 */
export function CardMedia({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "calc(4 / 7 * 100%)",
        background: "var(--color-neutral-100)",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--brand-primary)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

const svg = {
  width: 32,
  height: 32,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
  focusable: false as const,
};

const Zap = () => (
  <svg {...svg} fill="currentColor" stroke="none">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);
const Droplet = () => (
  <svg {...svg}>
    <path d="M12 3s6 6.4 6 11a6 6 0 11-12 0c0-4.6 6-11 6-11z" />
  </svg>
);
const Flame = () => (
  <svg {...svg}>
    <path d="M12 2c1 3 4 4 4 8a4 4 0 11-8 0c0-2 1-3 1-3 0 2 1 2 1 1 0-2 1-4 1-6z" />
  </svg>
);
const Wrench = () => (
  <svg {...svg}>
    <path d="M15 4a5 5 0 00-6 6l-6 6 2 2 6-6a5 5 0 006-6l-3 3-2-2 3-3z" />
  </svg>
);
const Layers = () => (
  <svg {...svg}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);
const Trash = () => (
  <svg {...svg}>
    <path d="M4 7h16" />
    <path d="M9 7V5h6v2" />
    <path d="M6 7l1 13h10l1-13" />
  </svg>
);
const MapPin = () => (
  <svg {...svg}>
    <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const SERVICE_ICONS: Record<string, () => ReactNode> = {
  "emergency-plumbing": Zap,
  "drain-cleaning": Droplet,
  "water-heater-repair": Flame,
  "water-heater-installation": Flame,
  "leak-detection": Droplet,
  "pipe-repair": Wrench,
  "sewer-line-repair": Layers,
  "toilet-repair": Wrench,
  "faucet-repair": Droplet,
  "garbage-disposal-repair": Trash,
};

/** Icon for a service card, keyed by slug (falls back to a wrench). */
export function ServiceIcon({ slug }: { slug: string }) {
  const Icon = SERVICE_ICONS[slug] ?? Wrench;
  return <Icon />;
}

/** Icon for a location card. */
export function LocationIcon() {
  return <MapPin />;
}
