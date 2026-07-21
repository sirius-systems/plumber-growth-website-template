/**
 * Service catalog (docs/04 §4.2, docs/05 §9, docs/09 §10).
 *
 * The catalog is the single source of truth for which service pages exist,
 * which appear in navigation and the sitemap, and which values the forms may
 * accept. A service renders a page / accepts a form value ONLY when `enabled`.
 * Disabled services 404 and are excluded from nav, sitemap, and links (docs/04 §33).
 */

/** Scope tiers from docs/04 §4.2 — controls what is built at the base price. */
export type ServiceScope = "launch-set" | "upgrade";

/** Canonical service slugs. Stable; a change requires a redirect plan (docs/05 §29). */
export type ServiceSlug =
  | "emergency-plumbing"
  | "drain-cleaning"
  | "water-heater-repair"
  | "water-heater-installation"
  | "leak-detection"
  | "pipe-repair"
  | "sewer-line-repair"
  | "toilet-repair"
  | "faucet-repair"
  | "garbage-disposal-repair"
  | "commercial-plumbing";

export interface PlumbingService {
  slug: ServiceSlug;
  name: string;
  /** One-line summary used on cards and meta descriptions. */
  shortDescription: string;
  scope: ServiceScope;
  /** Whether this client offers the service. Only enabled services are built. */
  enabled: boolean;
  /** Whether the page should be indexed (docs/04 §29). */
  indexable: boolean;
  /** Related service slugs for internal linking (docs/04 §8.2). */
  relatedServices: ServiceSlug[];
}

/**
 * Default service catalog for the template. Per-client configuration overrides
 * `enabled` to match the services the client actually performs (docs/07 §7.2).
 */
export const SERVICES: PlumbingService[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    shortDescription: "Fast help for urgent plumbing problems.",
    scope: "launch-set",
    enabled: true,
    indexable: true,
    relatedServices: ["drain-cleaning", "leak-detection", "pipe-repair"],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    shortDescription: "Clear slow and clogged drains.",
    scope: "launch-set",
    enabled: true,
    indexable: true,
    relatedServices: ["sewer-line-repair", "toilet-repair", "emergency-plumbing"],
  },
  {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    shortDescription: "Restore hot water quickly.",
    scope: "launch-set",
    enabled: true,
    indexable: true,
    relatedServices: ["water-heater-installation", "leak-detection"],
  },
  {
    slug: "water-heater-installation",
    name: "Water Heater Installation",
    shortDescription: "Repair or replace water heaters.",
    scope: "launch-set",
    enabled: true,
    indexable: true,
    relatedServices: ["water-heater-repair", "leak-detection"],
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    shortDescription: "Find and stop hidden water leaks.",
    scope: "launch-set",
    enabled: true,
    indexable: true,
    relatedServices: ["pipe-repair", "emergency-plumbing"],
  },
  {
    slug: "pipe-repair",
    name: "Pipe Repair",
    shortDescription: "Repair damaged or leaking pipes.",
    scope: "upgrade",
    enabled: true,
    indexable: true,
    relatedServices: ["leak-detection", "sewer-line-repair"],
  },
  {
    slug: "sewer-line-repair",
    name: "Sewer Line Repair",
    shortDescription: "Repair and clear sewer lines.",
    scope: "upgrade",
    enabled: true,
    indexable: true,
    relatedServices: ["drain-cleaning", "pipe-repair"],
  },
  {
    slug: "toilet-repair",
    name: "Toilet Repair",
    shortDescription: "Fix running, clogged, or leaking toilets.",
    scope: "upgrade",
    enabled: true,
    indexable: true,
    relatedServices: ["drain-cleaning", "faucet-repair"],
  },
  {
    slug: "faucet-repair",
    name: "Faucet Repair",
    shortDescription: "Repair dripping and broken faucets.",
    scope: "upgrade",
    enabled: true,
    indexable: true,
    relatedServices: ["leak-detection", "garbage-disposal-repair"],
  },
  {
    slug: "garbage-disposal-repair",
    name: "Garbage Disposal Repair",
    shortDescription: "Repair and replace garbage disposals.",
    scope: "upgrade",
    enabled: true,
    indexable: true,
    relatedServices: ["drain-cleaning", "faucet-repair"],
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    shortDescription: "Plumbing services for businesses and properties.",
    scope: "upgrade",
    enabled: false,
    indexable: true,
    relatedServices: ["drain-cleaning", "leak-detection"],
  },
];

/** Quote-form service option value — the catalog slugs plus a free-text escape. */
export type QuoteServiceOption = ServiceSlug | "other";

export const enabledServices = (): PlumbingService[] =>
  SERVICES.filter((s) => s.enabled);

export const findEnabledService = (slug: string): PlumbingService | undefined =>
  SERVICES.find((s) => s.slug === slug && s.enabled);

/** Set of valid service values a form submission may carry (enabled + "other"). */
export const enabledServiceValues = (): QuoteServiceOption[] => [
  ...enabledServices().map((s) => s.slug),
  "other",
];
