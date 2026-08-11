import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

function Stars() {
  return (
    <span style={{ display: "inline-flex", gap: "var(--space-1)" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={18} height={18} viewBox="0 0 24 24" fill="var(--color-accent-500)" aria-hidden="true">
          <path d="M12 3l2.9 6 6.1.9-4.5 4.3 1.1 6.1L12 17.8 6.4 20.3l1.1-6.1L3 9.9 9.1 9 12 3z" />
        </svg>
      ))}
    </span>
  );
}

/** Contact trust strip + review snippet (docs/06 §27). Verified items only. */
export function ContactTrust() {
  const { credentials, location, region } = clientConfig;

  const items: TrustItem[] = [];
  if (credentials.licenseNumber) items.push({ icon: "badge-check", label: `Licensed in ${location.state}` });
  if (credentials.insured && credentials.bonded) items.push({ icon: "shield", label: "Fully Insured & Bonded" });
  if (credentials.yearsInBusiness) items.push({ icon: "award", label: `${credentials.yearsInBusiness}+ Years in Business` });
  if (reviewsSummary.count > 0) items.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` });
  if (region?.name) items.push({ icon: "map-pin", label: `Locally Owned · ${region.name}` });

  return (
    <section className="section section-alternate">
      <div className="section__inner" style={{ maxWidth: "50rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)", textAlign: "center" }}>
        <TrustBar variant="light-card" items={items} />
        {reviewsSummary.count > 0 && (
          <div style={{ background: "var(--color-background-alt)", borderRadius: "var(--radius-md)", padding: "var(--space-4) var(--space-6)", maxWidth: "var(--measure-copy)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
            <Stars />
            <span style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>
              {reviewsSummary.rating.toFixed(1)} out of 5 from {reviewsSummary.count} customer reviews
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
