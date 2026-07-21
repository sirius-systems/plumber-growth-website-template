import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** "Why choose us for [service]" benefit cards (docs/06 §25). Falls back to the
 * shared client differentiators. */
export function ServiceBenefits({ svc }: { svc: PlumbingService }) {
  const { business, credentials } = clientConfig;
  const benefits: { icon: string; title: string; desc: string }[] = [
    { icon: "BadgeCheck", title: "Honest, Upfront Pricing", desc: "We explain pricing before work begins, no surprise invoices." },
    { icon: "Clock", title: "Fast, Around-the-Clock Response", desc: "Emergency plumbing help is available 24/7 across the valley." },
    {
      icon: "Shield",
      title: "Licensed & Insured",
      desc: credentials.licenseNumber
        ? `${credentials.licenseJurisdiction} #${credentials.licenseNumber}.`
        : "Fully licensed and insured for your protection.",
    },
    { icon: "Wrench", title: "Experienced Local Team", desc: "Licensed plumbers who know Las Vegas homes and hard-water conditions." },
  ];

  return (
    <section className="section section-alternate">
      <div className="section__inner" style={{ maxWidth: "900px" }}>
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Why Choose {business.publicName} for {svc.name}
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
            gap: "var(--space-6)",
            listStyle: "none",
            padding: 0,
            margin: "var(--space-8) 0 0",
          }}
        >
          {benefits.map((b) => (
            <li
              key={b.title}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  flex: "none",
                  borderRadius: "50%",
                  background: "var(--color-primary-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LucideIcon name={b.icon} size={24} color="var(--color-primary-600)" />
              </span>
              <div>
                <h3 style={{ margin: "0 0 0.25rem", fontSize: "16px", color: "var(--color-primary-900)" }}>{b.title}</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
