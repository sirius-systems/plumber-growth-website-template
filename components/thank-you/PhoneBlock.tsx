import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Phone block. Emergency mode: accent background, prominent, shown above the
 * next-steps (with 911 note). Standard mode: subtle card shown below the links.
 */
export function PhoneBlock({ emergencyMode }: { emergencyMode: boolean }) {
  const { business, operations } = clientConfig;
  const phone = formatPhoneDisplay(business.phone);

  if (emergencyMode) {
    return (
      <div
        style={{
          background: "var(--color-accent-500)",
          borderRadius: "var(--radius-lg)",
          padding: "1.5rem 2rem",
          maxWidth: "640px",
          margin: "1.5rem auto",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontWeight: 700, fontSize: "18px", color: "var(--color-primary-900)" }}>
          Call Now for Fastest Response
        </p>
        <a
          href={telHref(business.phone)}
          style={{ display: "block", margin: "0.5rem 0", fontWeight: 800, fontSize: "32px", color: "var(--color-primary-900)" }}
        >
          {phone}
        </a>
        <p style={{ margin: 0, fontWeight: 500, fontSize: "13px", color: "var(--color-primary-800)" }}>
          For gas odors, fire, or electrical danger, call 911 first.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        padding: "1.5rem 2rem",
        maxWidth: "640px",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0, fontWeight: 600, fontSize: "16px", color: "var(--color-primary-900)" }}>
        Need Immediate Help?
      </p>
      <a
        href={telHref(business.phone)}
        style={{ display: "block", margin: "0.5rem 0", fontWeight: 700, fontSize: "24px", color: "var(--color-primary-600)" }}
      >
        {phone}
      </a>
      <p style={{ margin: 0, fontSize: "13px", color: "var(--color-text-muted)" }}>
        {operations.twentyFourSevenService
          ? "Call anytime. We offer 24/7 emergency service."
          : "Call during business hours for the fastest response."}
      </p>
    </div>
  );
}
