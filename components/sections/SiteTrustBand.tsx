import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/**
 * Site-wide credibility band (docs/06 §27, §42). A light strip of trust signals
 * shown on key public pages. Item rendering is delegated to the shared TrustBar
 * (light-card variant, the existing light-surface treatment); this component
 * supplies the section chrome. (Formerly the standalone `TrustBar` — renamed to
 * free that name for the shared primitive in components/ui/TrustBar.tsx.)
 *
 * These four labels are universal template copy, not client facts pulled from
 * config, so the band always renders exactly four items.
 */
const ITEMS: TrustItem[] = [
  { icon: "shield-check", label: "Licensed & Insured" },
  { icon: "clock", label: "Fast Response Time" },
  { icon: "map-pin", label: "Local Experts" },
  { icon: "star", label: "5-Star Rated" },
];

export function SiteTrustBand() {
  return (
    <section
      aria-label="Credentials"
      style={{
        background: "var(--color-background-alt)",
        color: "var(--color-text)",
        borderBottom: "4px solid var(--brand-accent)",
      }}
    >
      <TrustBar
        variant="light-card"
        items={ITEMS}
        className="container trust-band-list"
        // Spread last, so these win over the variant defaults:
        // - marginInline is required — every TrustBar variant sets `margin: 0`
        //   inline, which beats .container's `margin-inline: auto` and would
        //   otherwise pin the strip to the left edge past --container-lg.
        // - space-between spreads the four signals across the full content
        //   width instead of clustering them mid-line.
        // - one step up the type scale (sm -> lg) for a more prominent band.
        style={{
          padding: "var(--space-6) var(--page-gutter)",
          marginInline: "auto",
          justifyContent: "space-between",
          fontSize: "var(--font-size-lg)",
        }}
      />
    </section>
  );
}
