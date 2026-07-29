import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import type { TrustItem } from "@/components/ui/TrustBar";
import { TrustBandSection } from "@/components/ui/TrustBandSection";

/**
 * Location-specific trust bar (docs/06 §27). Same light chrome as the site-wide
 * band — both render through TrustBandSection — but swaps the generic "Local
 * Experts" signal for the actual location, which is the point of the page.
 *
 * Claims that are client FACTS are derived from config and gated on it, per
 * docs/17 §22: credentials come from `credentials`, the rating from
 * reviewsSummary, and the response-time item only when 24/7 is verified.
 */
export function LocationTrustBar({ locationName }: { locationName: string }) {
  const { credentials, operations } = clientConfig;

  const items: TrustItem[] = [];

  if (credentials.licenseNumber && credentials.insured)
    items.push({ icon: "shield-check", label: "Licensed & Insured" });
  else if (credentials.licenseNumber) items.push({ icon: "shield-check", label: "Licensed" });

  if (operations.emergencyServiceAvailable && operations.twentyFourSevenService)
    items.push({ icon: "clock", label: "Same-day service available" });

  items.push({ icon: "map-pin", label: `Serving ${locationName} & Nearby Areas` });

  // Matches the site-wide band's wording: the real average, never a rounded-up
  // claim, and omitted entirely when a client has no reviews yet.
  if (reviewsSummary.count > 0)
    items.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}-Star Rated` });

  return <TrustBandSection items={items} />;
}
