import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { EmergencySafetyNotice } from "@/components/sections/EmergencySafetyNotice";

/**
 * Emergency conversion band (docs/04 §6, UX-003). Call is the primary action;
 * the emergency form is secondary. The safety notice is always shown and is
 * never collapsed. Rendered only when the client offers emergency service.
 */
export function EmergencyCallout() {
  const { business, operations } = clientConfig;
  if (!operations.emergencyServiceAvailable) return null;

  return (
    <section className="section" style={{ background: "var(--color-background-alt)" }}>
      <div className="container" style={{ maxWidth: "52rem" }}>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Plumbing emergency? Call now.
        </h2>
        <p style={{ color: "var(--color-text-muted)" }}>
          Burst pipe, active leak, sewage backup, or no water? Calling is the fastest way to
          reach us{operations.twentyFourSevenService ? ", emergency help is available 24/7." : "."}
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            marginBottom: "var(--space-6)",
          }}
        >
          <a className="btn btn--primary" href={telHref(business.phone)}>
            Call {formatPhoneDisplay(business.phone)}
          </a>
          <Link className="btn btn--secondary" href="/contact/">
            Contact Us
          </Link>
        </div>
        <EmergencySafetyNotice />
      </div>
    </section>
  );
}
