import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Button } from "@/components/ui/Button";

interface CallToActionProps {
  heading?: string;
  body?: string;
  /** Primary button target; defaults to the contact page. */
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
  primaryHref = "/contact/",
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
          <Button variant="accent" href={primaryHref}>
            {primaryLabel}
          </Button>
          <Button variant="inverse" href={telHref(business.phone)}>
            Call {formatPhoneDisplay(business.phone)}
          </Button>
        </div>
      </div>
    </section>
  );
}
