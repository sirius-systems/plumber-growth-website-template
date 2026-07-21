import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

interface CallToActionProps {
  heading?: string;
  body?: string;
  /** Primary button target; defaults to the request-service page. */
  primaryHref?: string;
  primaryLabel?: string;
}

/**
 * Reusable conversion band (docs/06 §42 CallToAction). Pairs a request action
 * with a phone call action. Copy avoids implying guaranteed dispatch (docs/07 §24).
 */
export function CallToAction({
  heading = "Ready to get started?",
  body,
  primaryHref = "/request-service/",
  primaryLabel = "Request Service",
}: CallToActionProps) {
  const { business } = clientConfig;

  return (
    <section
      className="section"
      style={{ background: "var(--brand-primary-dark)", color: "var(--color-text-inverse)" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h2
          className="heading-accent heading-accent--center"
          style={{ fontSize: "var(--font-size-2xl)", marginTop: 0, color: "var(--color-text-inverse)" }}
        >
          {heading}
        </h2>
        <p style={{ maxWidth: "var(--measure-reading)", marginInline: "auto" }}>
          {body ??
            `Tell us what's going on and ${business.publicName} will follow up to confirm the details.`}
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link className="btn btn--accent" href={primaryHref}>
            {primaryLabel}
          </Link>
          <a
            className="btn btn--secondary"
            href={telHref(business.phone)}
            style={{ borderColor: "var(--color-text-inverse)", color: "var(--color-text-inverse)" }}
          >
            Call {formatPhoneDisplay(business.phone)}
          </a>
        </div>
      </div>
    </section>
  );
}
