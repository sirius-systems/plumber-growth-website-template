import { clientConfig } from "@/config/client";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Why-choose-us differentiators (docs/06 §25). 2×2 grid, amber icons. */
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
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Why Homeowners Choose {business.publicName}
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {items.map((it) => (
            <li key={it.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <LucideIcon name={it.icon} size={24} color="var(--color-accent-500)" />
              <h3 style={{ margin: 0, fontSize: "16px" }}>{it.title}</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-muted)" }}>{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
