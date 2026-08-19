/**
 * Icon resolution for service `covers` bullets (docs/06 §25).
 *
 * The bullets in `config/service-content.ts` are plain strings with no icon
 * field, and that file is client content — it is not edited to carry
 * presentation data. So the icon is derived here from what the bullet says,
 * which also means a client rewording or reordering their covers list keeps
 * working without a matching data edit.
 *
 * Rules are ordered and first-match-wins, most specific first: "Camera
 * inspection and diagnosis" must resolve as an inspection, not as a sewer
 * drain, and "Water heater leaks" as a water heater, not as a generic leak.
 * Anything unmatched falls back to CheckCircle, which is the same "included"
 * reading the plain checkmark carried before.
 *
 * Every returned name must exist in the components/ui/LucideIcon registry;
 * tests/unit/service-icons.test.ts asserts that for every string in config.
 */

/** Ordered rules. First pattern to match the bullet decides the icon. */
const RULES: { pattern: RegExp; icon: string }[] = [
  // Diagnostics and inspection come first — they frequently also mention the
  // system being inspected ("Camera inspection and diagnosis").
  { pattern: /camera|inspection|detect|diagnos|acoustic|electronic/i, icon: "Search" },

  // A motor that runs but does nothing is a different failure from a blockage,
  // and sits above the general fault rule so the two do not share a glyph.
  { pattern: /hum but|(don't|does not|won't) spin/i, icon: "AlertCircle" },

  // Urgent failure states, before the component they happen to affect.
  { pattern: /burst|collaps|broken|flood|intrusion|jam/i, icon: "AlertTriangle" },

  // Temperature control, above the general heat rule so it does not collapse
  // into a third Flame on the water-heater pages.
  { pattern: /thermostat|heating element/i, icon: "Thermometer" },

  // Heat. Deliberately matches "water heater" / "tankless" rather than a bare
  // "tank", so "Leaking tanks and fittings" reads as a leak, not a heater.
  { pattern: /hot water|water heater|tankless|pilot|ignition/i, icon: "Flame" },

  // Measurement and capacity.
  { pattern: /pressure|right-siz|sizing|demand|efficien/i, icon: "Gauge" },

  // Clearing METHODS are equipment, not the drain itself — this must precede
  // the drain rule or "Drain snaking (cabling) and hydrojetting" becomes a
  // fourth identical Waves on the drain-cleaning hero.
  { pattern: /snaking|cabling|hydrojet/i, icon: "Wrench" },

  { pattern: /leak|drip|pinhole/i, icon: "Droplet" },

  { pattern: /drain|clog|flush|sewer|toilet|overflow|back ?up/i, icon: "Waves" },

  { pattern: /disposal/i, icon: "Settings" },

  // Parts and workmanship last: these words ("replacement", "install") appear
  // inside many of the more specific bullets above.
  { pattern: /replac|install|repip|upgrade|cartridge|washer|flapper|fill valve|wax ring|fitting/i, icon: "Wrench" },
];

/** Fallback: the same "included" reading the previous plain checkmark carried. */
export const COVER_ICON_FALLBACK = "CheckCircle";

/** Lucide icon name for a service `covers` bullet. */
export function coverIcon(text: string): string {
  return RULES.find((rule) => rule.pattern.test(text))?.icon ?? COVER_ICON_FALLBACK;
}
