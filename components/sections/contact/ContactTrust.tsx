import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { LucideIcon } from "@/components/ui/LucideIcon";

function Stars() {
  return (
    <span style={{ display: "inline-flex", gap: "2px" }}>
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

  const items: { icon: string; color: string; label: string }[] = [];
  if (credentials.licenseNumber) items.push({ icon: "BadgeCheck", color: "var(--color-primary-600)", label: `Licensed in ${location.state}` });
  if (credentials.insured && credentials.bonded) items.push({ icon: "Shield", color: "var(--color-primary-600)", label: "Fully Insured & Bonded" });
  if (credentials.yearsInBusiness) items.push({ icon: "Award", color: "var(--color-primary-600)", label: `${credentials.yearsInBusiness}+ Years in Business` });
  if (reviewsSummary.count > 0) items.push({ icon: "Star", color: "var(--color-accent-500)", label: `${reviewsSummary.rating.toFixed(1)}★ Rating, ${reviewsSummary.count} reviews` });
  if (region?.name) items.push({ icon: "MapPin", color: "var(--color-primary-600)", label: `Locally Owned · ${region.name}` });

  return (
    <section className="section section-alternate">
      <div className="section__inner" style={{ maxWidth: "800px", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem 2.5rem" }}>
          {items.map((it) => (
            <span key={it.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "14px", fontWeight: 500, color: "var(--color-text)" }}>
              <LucideIcon name={it.icon} size={18} color={it.color} />
              {it.label}
            </span>
          ))}
        </div>
        {reviewsSummary.count > 0 && (
          <div style={{ background: "var(--color-background-alt)", borderRadius: "var(--radius-md)", padding: "1rem 1.5rem", maxWidth: "480px", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <Stars />
            <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
              {reviewsSummary.rating.toFixed(1)} out of 5 from {reviewsSummary.count} customer reviews
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
