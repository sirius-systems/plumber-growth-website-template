import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/**
 * Site-wide credibility band (docs/06 §27, §42). A dark navy strip of verified
 * signals shown on key public pages. Renders only items backed by verified
 * config values — no empty slots. Item rendering is delegated to the shared
 * TrustBar (dark-bar variant); this component just supplies the section chrome
 * and the config-driven items. (Formerly the standalone `TrustBar` — renamed to
 * free that name for the shared primitive in components/ui/TrustBar.tsx.)
 */
export function SiteTrustBand() {
  const { credentials, operations, seo } = clientConfig;

  const items: TrustItem[] = [];
  if (credentials.licenseNumber) items.push({ icon: "badge-check", label: "Licensed" });
  if (credentials.insured) items.push({ icon: "shield", label: "Fully Insured" });
  if (credentials.yearsInBusiness)
    items.push({ icon: "award", label: `${credentials.yearsInBusiness}+ Years of Experience` });
  if (operations.emergencyServiceAvailable && operations.twentyFourSevenService)
    items.push({ icon: "zap", label: "24/7 Emergency Service" });
  if (seo.primaryMarket) items.push({ icon: "map-pin", label: `Serving ${seo.primaryMarket}` });
  if (reviewsSummary.count > 0)
    items.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` });

  if (items.length === 0) return null;

  return (
    <section
      aria-label="Credentials"
      style={{
        background: "var(--brand-primary-dark)",
        color: "var(--color-text-inverse)",
        borderBottom: "4px solid var(--brand-accent)",
      }}
    >
      <TrustBar
        variant="dark-bar"
        items={items}
        className="container"
        style={{ padding: "var(--space-3) var(--page-gutter)" }}
      />
    </section>
  );
}
