import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/**
 * Location-specific trust bar (docs/06 §27). Dark navy band with amber icons;
 * item rendering is delegated to the shared TrustBar (dark-bar variant). The
 * response-time item renders only when verified (24/7 emergency available).
 */
export function LocationTrustBar({ locationName }: { locationName: string }) {
  const { credentials, operations } = clientConfig;

  const items: TrustItem[] = [
    { icon: "map-pin", label: `Serving ${locationName} & Nearby Areas` },
    { icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` },
    { icon: "badge-check", label: credentials.licenseNumber ? "Licensed & Insured" : "Licensed" },
  ];
  if (operations.emergencyServiceAvailable && operations.twentyFourSevenService)
    items.push({ icon: "clock", label: "Same-day service available" });

  return (
    <section
      aria-label="Credentials"
      style={{ background: "var(--color-primary-900)", color: "#fff", borderBottom: "4px solid var(--brand-accent)" }}
    >
      <TrustBar
        variant="dark-bar"
        items={items}
        className="section__inner"
        style={{ padding: "1rem var(--page-gutter)" }}
      />
    </section>
  );
}
