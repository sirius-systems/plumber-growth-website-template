import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/**
 * Shared chrome for the light credibility band (docs/06 §27, §42). Owns the
 * section background, border and TrustBar configuration so every band on the
 * site is styled identically; callers supply only the items.
 *
 * Extracted after the site-wide band and the location band drifted apart — one
 * light, one dark navy. Keep styling here, not at the call sites.
 */
export function TrustBandSection({ items }: { items: TrustItem[] }) {
  if (items.length === 0) return null;

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
        items={items}
        className="container trust-band-list"
        // Spread last, so these win over the variant defaults:
        // - marginInline is required — every TrustBar variant sets `margin: 0`
        //   inline, which beats .container's `margin-inline: auto` and would
        //   otherwise pin the strip to the left edge past --container-lg.
        // - space-between spreads the signals across the full content width
        //   instead of clustering them mid-line.
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
