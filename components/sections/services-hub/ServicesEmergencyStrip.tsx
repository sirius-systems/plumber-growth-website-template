import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { emergencyItems } from "@/content/services-hub";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Compact emergency strip (docs/04 §6, UX-003). Lighter than the full EmergencyCta
 * band. Rendered only when the client offers emergency service. Never implies
 * dispatch; keeps the 911 direction.
 */
export function ServicesEmergencyStrip() {
  const { business, operations } = clientConfig;
  if (!operations.emergencyServiceAvailable) return null;

  return (
    <section className="section section-alternate">
      <div
        className="section__inner"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "center",
          maxWidth: "960px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-primary-900)", marginTop: 0 }}>
            Need Emergency Plumbing Help?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1rem", marginTop: "0.5rem" }}>
            {emergencyItems.map((item) => (
              <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "14px", color: "var(--color-text-muted)" }}>
                <LucideIcon name="AlertCircle" size={13} color="var(--color-accent-600)" />
                {item}
              </span>
            ))}
          </div>
          <p style={{ marginTop: "0.5rem", fontSize: "12px", fontStyle: "italic", color: "var(--color-text-muted)" }}>
            For gas odors, fire, or electrical danger, call 911 first.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            href={telHref(business.phone)}
            style={{ display: "block", background: "var(--color-primary-900)", color: "#fff", fontWeight: 700, fontSize: "15px", padding: "0.875rem 2rem", borderRadius: "var(--radius-md)", textDecoration: "none" }}
          >
            Call Now
          </a>
          <span style={{ display: "block", marginTop: "0.5rem", fontSize: "16px", fontWeight: 600, color: "var(--color-primary-700)" }}>
            {formatPhoneDisplay(business.phone)}
          </span>
        </div>
      </div>
    </section>
  );
}
