import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/** FAQ trust panel (docs/06 §27). Verified items only. */
export function FaqTrust() {
  const { business, credentials, location, region } = clientConfig;

  const items: TrustItem[] = [];
  if (credentials.licenseNumber) items.push({ icon: "badge-check", label: `Licensed in ${location.state}` });
  if (credentials.insured) items.push({ icon: "shield", label: "Fully Insured" });
  if (credentials.bonded) items.push({ icon: "shield-check", label: "Bonded" });
  if (credentials.yearsInBusiness) items.push({ icon: "award", label: `${credentials.yearsInBusiness}+ Years in Business` });
  if (reviewsSummary.count > 0) items.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` });
  if (region?.name) items.push({ icon: "map-pin", label: `Serving ${region.name}` });

  return (
    <section className="section section-default">
      <div className="section__inner" style={{ maxWidth: "var(--measure-narrow)" }}>
        <div style={{ background: "var(--color-background-alt)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)", padding: "var(--space-8)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-5)", textAlign: "center" }}>
          <LucideIcon name="ShieldCheck" size={40} color="var(--color-primary-600)" />
          <h2 style={{ margin: 0, fontSize: "var(--font-size-lg)", fontWeight: 600, color: "var(--color-primary-900)" }}>
            {business.publicName}, Licensed and Local
          </h2>
          <TrustBar variant="light-card" items={items} />
        </div>
      </div>
    </section>
  );
}
