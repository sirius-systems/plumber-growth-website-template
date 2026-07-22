import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** FAQ trust panel (docs/06 §27). Verified items only. */
export function FaqTrust() {
  const { business, credentials, location, region } = clientConfig;

  const items: { icon: string; color: string; label: string }[] = [];
  if (credentials.licenseNumber) items.push({ icon: "BadgeCheck", color: "var(--color-primary-600)", label: `Licensed in ${location.state}` });
  if (credentials.insured) items.push({ icon: "Shield", color: "var(--color-primary-600)", label: "Fully Insured" });
  if (credentials.yearsInBusiness) items.push({ icon: "Award", color: "var(--color-primary-600)", label: `${credentials.yearsInBusiness}+ Years in Business` });
  if (reviewsSummary.count > 0) items.push({ icon: "Star", color: "var(--color-accent-500)", label: `${reviewsSummary.rating.toFixed(1)}★ from ${reviewsSummary.count} reviews` });
  if (region?.name) items.push({ icon: "MapPin", color: "var(--color-primary-600)", label: `Serving ${region.name}` });

  return (
    <section className="section section-default">
      <div className="section__inner" style={{ maxWidth: "640px" }}>
        <div style={{ background: "var(--color-background-alt)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", textAlign: "center" }}>
          <LucideIcon name="ShieldCheck" size={40} color="var(--color-primary-600)" />
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600, color: "var(--color-primary-900)" }}>
            {business.publicName}, Licensed and Local
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem 2rem" }}>
            {items.map((it) => (
              <span key={it.label} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "14px", fontWeight: 500, color: "var(--color-text)" }}>
                <LucideIcon name={it.icon} size={16} color={it.color} />
                {it.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
