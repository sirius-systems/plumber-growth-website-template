import type { ReactNode } from "react";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";

/**
 * Trust bar (docs/06 §27). A compact band of verified credibility signals shown
 * on every public page (inserted once in the layout via TrustBarSlot). Renders
 * only items backed by verified config values — no empty slots or placeholders.
 * Icons are decorative inline SVG (no icon-library dependency) in the amber
 * accent; labels carry the text. On the demo these values are illustrative and
 * disclosed by the demo banner.
 */

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
  focusable: false as const,
  style: { flex: "none", color: "var(--brand-accent)" },
};

const Shield = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3z" />
  </svg>
);
const ShieldCheck = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const Clock = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const Zap = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);
const MapPin = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round">
    <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const Star = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M12 3l2.9 6 6.1.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20.3l1.1-6.1L3 9.9 9.1 9 12 3z" />
  </svg>
);

export function TrustBar() {
  const { credentials, operations, seo } = clientConfig;

  const items: { icon: ReactNode; label: string }[] = [];
  if (credentials.licenseNumber) items.push({ icon: <Shield />, label: "Licensed" });
  if (credentials.insured) items.push({ icon: <ShieldCheck />, label: "Fully Insured" });
  if (credentials.yearsInBusiness)
    items.push({ icon: <Clock />, label: `${credentials.yearsInBusiness}+ Years of Experience` });
  if (operations.emergencyServiceAvailable && operations.twentyFourSevenService)
    items.push({ icon: <Zap />, label: "24/7 Emergency Service" });
  if (seo.primaryMarket) items.push({ icon: <MapPin />, label: `Serving ${seo.primaryMarket}` });
  if (reviewsSummary.count > 0)
    items.push({
      icon: <Star />,
      label: `${reviewsSummary.rating.toFixed(1)}★ · ${reviewsSummary.count} reviews`,
    });

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
      <ul
        className="container"
        role="list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--space-4) var(--space-8)",
          listStyle: "none",
          margin: 0,
          padding: "var(--space-3) var(--page-gutter)",
        }}
      >
        {items.map((item) => (
          <li
            key={item.label}
            role="listitem"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              whiteSpace: "nowrap",
            }}
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
