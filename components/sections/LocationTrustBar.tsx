import type { ReactNode } from "react";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Location-specific trust bar (docs/06 §27). Separate from the generic TrustBar.
 * Dark bar, four items with amber icons. Response-time item renders only when
 * verified (24/7 emergency available); never an unverified claim.
 */
export function LocationTrustBar({ locationName }: { locationName: string }) {
  const { credentials, operations } = clientConfig;

  const items: { icon: string; label: string }[] = [
    { icon: "MapPin", label: `Serving ${locationName} & Nearby Areas` },
    { icon: "Star", label: `${reviewsSummary.rating.toFixed(1)}★ · ${reviewsSummary.count} reviews` },
    {
      icon: "BadgeCheck",
      label: credentials.licenseNumber ? "Licensed & Insured" : "Licensed",
    },
  ];
  if (operations.emergencyServiceAvailable && operations.twentyFourSevenService)
    items.push({ icon: "Clock", label: "Same-day service available" });

  return (
    <section
      aria-label="Credentials"
      style={{ background: "var(--color-primary-900)", color: "#fff", borderBottom: "4px solid var(--brand-accent)" }}
    >
      <ul
        className="section__inner"
        role="list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem 2.5rem",
          listStyle: "none",
          margin: 0,
          padding: "1rem var(--page-gutter)",
        }}
      >
        {items.map((it): ReactNode => (
          <li key={it.label} role="listitem" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, fontSize: "14px", whiteSpace: "nowrap" }}>
            <LucideIcon name={it.icon} size={20} color="var(--color-accent-500)" />
            {it.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
