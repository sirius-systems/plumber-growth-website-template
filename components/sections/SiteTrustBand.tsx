import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import type { TrustItem } from "@/components/ui/TrustBar";
import { TrustBandSection } from "@/components/ui/TrustBandSection";

/**
 * Site-wide credibility band (docs/06 §27, §42). A light strip of trust signals
 * shown on key public pages. Item rendering is delegated to the shared TrustBar
 * (light-card variant, the existing light-surface treatment); this component
 * supplies the section chrome. (Formerly the standalone `TrustBar` — renamed to
 * free that name for the shared primitive in components/ui/TrustBar.tsx.)
 *
 * Claims that are client FACTS are derived from config and gated on it, per
 * docs/17 §22 — never asserted as static copy. The rating in particular is read
 * from reviewsSummary rather than hardcoded, so it cannot drift from the data
 * the rest of the site displays. "Fast Response Time" and "Local Experts" stay
 * static: they are positioning copy, not verifiable claims about credentials,
 * licensing or reviews.
 */
function buildItems(): TrustItem[] {
  const { credentials } = clientConfig;
  const items: TrustItem[] = [];

  if (credentials.licenseNumber && credentials.insured)
    items.push({ icon: "shield-check", label: "Licensed & Insured" });
  else if (credentials.licenseNumber) items.push({ icon: "shield-check", label: "Licensed" });

  items.push({ icon: "clock", label: "Fast Response Time" });
  items.push({ icon: "map-pin", label: "Local Experts" });

  // Reads the real average (4.9), not a rounded-up "5-Star" claim, and is
  // omitted entirely when a client has no reviews yet.
  if (reviewsSummary.count > 0)
    items.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}-Star Rated` });

  return items;
}

export function SiteTrustBand() {
  return <TrustBandSection items={buildItems()} />;
}
