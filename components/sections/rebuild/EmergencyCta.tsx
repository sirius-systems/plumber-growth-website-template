import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Button } from "@/components/ui/Button";

/**
 * Emergency CTA band (docs/04 §6, UX-003). Dark emphasis section; rendered only
 * when the client offers emergency service. Never implies dispatch; keeps the
 * safety disclaimer.
 */
export function EmergencyCta() {
  const { business, operations } = clientConfig;
  if (!operations.emergencyServiceAvailable) return null;

  return (
    <section className="section section-emphasis">
      <div className="section__inner" style={{ maxWidth: "720px", textAlign: "center" }}>
        <h2 style={{ marginTop: 0, fontSize: "var(--font-size-2xl)" }}>Plumbing Emergency?</h2>
        <p style={{ color: "rgba(255,255,255,0.80)" }}>
          Burst pipe, active leak, or no water? Calling is the fastest way to reach us
          {operations.twentyFourSevenService ? ", 24/7." : "."}
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button variant="accent" href={telHref(business.phone)}>
            Call Now: {formatPhoneDisplay(business.phone)}
          </Button>
          <Button variant="inverse" href="/contact/">
            Contact Us
          </Button>
        </div>
        <p style={{ marginTop: "var(--space-6)", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
          If you smell gas, see fire, face electrical danger, or have an immediate threat to life
          or property, call 911 or your utility provider first. Do not wait for a form response.
        </p>
      </div>
    </section>
  );
}
