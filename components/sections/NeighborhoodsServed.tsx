import { clientConfig } from "@/config/client";
import type { ServiceAreaReference } from "@/config/client";
import type { LocationContent } from "@/config/location-content";
import { formatPhoneDisplay } from "@/lib/utilities/format";

/** Neighborhoods served (docs/04 §12). Informational pills; hidden if empty. */
export function NeighborhoodsServed({ area, content }: { area: ServiceAreaReference; content?: LocationContent }) {
  const neighborhoods = content?.neighborhoods ?? [];
  if (neighborhoods.length === 0) return null;

  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Areas We Serve in {area.name}
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", maxWidth: "640px", margin: "0 auto var(--space-6)" }}>
          We provide plumbing service throughout {area.name} including these neighborhoods and communities.
        </p>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.625rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {neighborhoods.map((n) => (
            <li key={n}>
              <span className="pill pill--info">{n}</span>
            </li>
          ))}
        </ul>
        <p style={{ textAlign: "center", marginTop: "var(--space-6)", fontSize: "13px", color: "var(--color-text-muted)" }}>
          Service availability in specific neighborhoods may vary. Call{" "}
          {formatPhoneDisplay(clientConfig.business.phone)} to confirm coverage in your area.
        </p>
      </div>
    </section>
  );
}
