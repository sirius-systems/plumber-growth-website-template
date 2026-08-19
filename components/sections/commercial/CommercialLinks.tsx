import Link from "next/link";
import { clientConfig } from "@/config/client";
import { commercialServices } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Commercial services + service areas links (docs/04 §8.2, §27). Dedicated
 * variant (the shared ServiceLinks is coupled to a single service via svc prop).
 */
export function CommercialLinks({
  surface = "alternate",
}: {
  /** Section tone. The caller alternates it against the FAQ band above. */
  surface?: "default" | "alternate";
} = {}) {
  const { serviceAreas } = clientConfig;
  const services = commercialServices();
  const primary = serviceAreas.find((a) => a.primary) ?? serviceAreas[0];
  // minHeight lifts these list links to the 24px target floor (WCAG 2.2 2.5.8);
  // the bare text box measured 22px.
  const linkStyle = { display: "inline-flex", alignItems: "center", minHeight: "var(--space-6)", gap: "var(--space-2)", fontSize: "var(--font-size-base)", fontWeight: 500 };

  return (
    <section className={`section section-${surface}`}>
      <div className="section__inner">
        <h2 className="section-heading">
          Commercial Services and Areas We Serve
        </h2>
        {/* Capped and centred under the H2. At the section's full 84rem width
            the two auto-fit tracks stretched to ~660px each and drifted to the
            outer edges, so the pair no longer read as belonging to the centred
            heading above them. Each column's heading is centred and its list is
            shrink-wrapped and centred within the column, which keeps the block
            symmetrical while the links themselves stay left-aligned — they carry
            leading icons and would go ragged if the text were centred. */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "var(--space-12)", marginTop: "var(--space-8)", maxWidth: "var(--container-md)", marginInline: "auto" }}>
          <div>
            <h3 style={{ marginTop: 0, fontSize: "var(--font-size-base)", color: "var(--color-primary-900)", textAlign: "center" }}>Commercial Services</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)", width: "fit-content", marginInline: "auto" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} style={linkStyle}>
                    <LucideIcon name="ChevronRight" size={14} color="var(--color-primary-600)" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ marginTop: 0, fontSize: "var(--font-size-base)", color: "var(--color-primary-900)", textAlign: "center" }}>Areas We Serve</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)", width: "fit-content", marginInline: "auto" }}>
              {serviceAreas.map((area) => {
                const href = area === primary && area.hasDetailPage && area.slug ? `/service-areas/${area.slug}/` : "/service-areas/";
                return (
                  <li key={area.name}>
                    <Link href={href} style={linkStyle}>
                      <LucideIcon name="MapPin" size={14} color="var(--color-primary-600)" />
                      {area.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Moved out of the areas column and centred beneath both, so it reads
            as the section's action rather than a trailing item of one list. */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-10)" }}>
          <Button variant="accent" href="/service-areas/">
            View all service areas →
          </Button>
        </div>
      </div>
    </section>
  );
}
