import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { hubOverviewBody } from "@/content/service-areas";

/** Bridge section: region overview + verified stats (docs/04 §12). No H2. */
export function CoverageIntro() {
  const { region, credentials, serviceAreas } = clientConfig;
  const overview =
    hubOverviewBody ??
    `${clientConfig.business.publicName} provides licensed plumbing service throughout ${region.name} and the surrounding communities.`;

  const stats: { value: string; label: string }[] = [];
  if (serviceAreas.length) stats.push({ value: `${serviceAreas.length}+`, label: "Cities and Communities" });
  if (reviewsSummary.count) stats.push({ value: `${reviewsSummary.count}+`, label: "Customer Reviews" });
  if (credentials.yearsInBusiness)
    stats.push({ value: `${credentials.yearsInBusiness}+`, label: `Years Serving ${region.name}` });

  return (
    <section className="section section-default">
      <div className="section__inner">
        <p style={{ maxWidth: "var(--measure-narrow)", margin: "0 auto", textAlign: "center", fontSize: "var(--font-size-lg)", lineHeight: "var(--line-height-loose)" }}>
          {overview}
        </p>
        {stats.length > 0 && (
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-12)", flexWrap: "wrap", marginTop: "var(--space-8)" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "var(--font-size-3xl)", fontWeight: 700, color: "var(--color-primary-700)" }}>{s.value}</div>
                <div style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
