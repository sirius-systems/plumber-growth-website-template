import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Service overview + quick-facts panel (docs/06 §25). Two columns on desktop. */
export function ServiceOverview({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const { operations } = clientConfig;
  const overview = content?.overview ?? svc.shortDescription;

  const facts: { icon: string; label: string }[] = [
    { icon: "Home", label: "Residential & commercial" },
    {
      icon: "Clock",
      label: operations.emergencyServiceAvailable ? "24/7 emergency service" : "By appointment",
    },
    { icon: "BadgeCheck", label: "Nevada licensed & insured" },
  ];

  return (
    <section className="section section-default">
      <div className="section__inner">
        <h2 className="section-heading">
          What {svc.name} Covers and Who Needs It
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "var(--space-12)",
            marginTop: "var(--space-8)",
          }}
        >
          <div>
            <p style={{ fontSize: "var(--font-size-base)", lineHeight: "var(--line-height-loose)", marginTop: 0 }}>{overview}</p>
          </div>
          <div
            style={{
              background: "var(--color-background-alt)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)",
              borderLeft: "3px solid var(--color-accent-500)",
              alignSelf: "start",
            }}
          >
            <p style={{ marginTop: 0, fontWeight: 600, color: "var(--color-primary-900)" }}>Quick facts</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
              {facts.map((f) => (
                <li key={f.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--font-size-sm)" }}>
                  <LucideIcon name={f.icon} size={16} color="var(--color-primary-600)" />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
