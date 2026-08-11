import { clientConfig } from "@/config/client";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * Why-choose-us differentiators (docs/06 §25). Two columns: icon + text rows on
 * the left, supporting image on the right; stacks to one column below 64rem.
 */
export function WhyChooseUs() {
  const { business, credentials, location } = clientConfig;
  const licenseText =
    credentials.licenseNumber && credentials.licenseJurisdiction
      ? `${credentials.licenseJurisdiction} #${credentials.licenseNumber}`
      : "Fully licensed and insured";

  const items: { icon: string; title: string; desc: string }[] = [
    {
      icon: "BadgeCheck",
      title: "Honest Pricing",
      desc: "Clear, upfront pricing explained before work begins, no surprise invoices.",
    },
    {
      icon: "Clock",
      title: "Fast Response",
      desc: "Emergency plumbing help is available around the clock across the valley.",
    },
    {
      icon: "Shield",
      title: credentials.licenseNumber ? "Nevada Licensed" : "Licensed & Insured",
      desc: `${licenseText}.`,
    },
    {
      icon: "Home",
      title: "Local & Trusted",
      desc: credentials.yearsInBusiness
        ? `Serving ${location.city} and the surrounding valley for ${credentials.yearsInBusiness} years.`
        : `A local plumbing team serving ${location.city}.`,
    },
  ];

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading">
          Why Homeowners Choose {business.publicName}
        </h2>
        <div className="why-choose-layout" style={{ marginTop: "var(--space-8)" }}>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {items.map((it) => (
              <li key={it.title} className="stacked-card" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <LucideIcon name={it.icon} size={24} color="var(--color-accent-500)" className="stacked-card-icon" />
                <h3 style={{ margin: 0, fontSize: "var(--font-size-base)" }}>{it.title}</h3>
                <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>{it.desc}</p>
              </li>
            ))}
          </ul>
          {/* Image placeholder, signals a real team photo is needed (same
              convention as RegionMap). No src is invented here. */}
          <div
            role="img"
            aria-label={`Photo of the ${business.publicName} team`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-2)",
              aspectRatio: "4 / 3",
              background: "var(--color-background-alt)",
              borderRadius: "var(--radius-lg)",
              border: "1.5px dashed var(--color-border)",
              padding: "var(--space-12) var(--space-8)",
              textAlign: "center",
            }}
          >
            <LucideIcon name="Wrench" size={40} color="var(--color-neutral-500)" />
            <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>
              Team photo, {business.publicName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
