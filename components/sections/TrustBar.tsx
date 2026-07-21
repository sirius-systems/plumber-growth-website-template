import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";

/**
 * Trust bar (docs/06 §27). Shows only verified, config-driven trust elements:
 * years in business, customer rating + review count, and license. On the demo
 * these values are illustrative and disclosed by the site-wide demo banner; for
 * a live client every element must be independently verified.
 */
export function TrustBar() {
  const { credentials } = clientConfig;

  const items: string[] = [];
  if (credentials.yearsInBusiness) {
    items.push(`${credentials.yearsInBusiness} Years in Business`);
  }
  items.push(`${reviewsSummary.rating.toFixed(1)}★ Customer Rating`);
  items.push(`${reviewsSummary.count} Reviews`);
  if (credentials.licenseNumber && credentials.licenseJurisdiction) {
    items.push(`${credentials.licenseJurisdiction} #${credentials.licenseNumber}`);
  }

  return (
    <section
      aria-label="Trust signals"
      style={{ background: "var(--brand-primary-dark)", color: "var(--color-text-inverse)" }}
    >
      <ul
        className="container"
        style={{
          display: "grid",
          gap: "var(--space-4)",
          gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
          listStyle: "none",
          margin: 0,
          padding: "var(--space-6) var(--page-gutter)",
          textAlign: "center",
        }}
      >
        {items.map((item) => (
          <li key={item} style={{ fontWeight: 600 }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
