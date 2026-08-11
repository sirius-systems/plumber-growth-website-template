import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Emergency CTA band (docs/04 §6, UX-003). Rendered only when the client offers
 * emergency service. Never implies dispatch; keeps the safety disclaimer.
 *
 * Shaped as an interrupt, not a second closing section: compact density, amber
 * edge rules, and a single row from 64rem up with the copy at the start and the
 * actions at the end. That keeps it clearly distinct from FinalCta, which is the
 * page's full-width closing conversion band with the request form. Emphasis is
 * carried by contrast and layout, not by red or motion (docs/06 §3.3, §7).
 */
export function EmergencyCta() {
  const { business, operations } = clientConfig;
  if (!operations.emergencyServiceAvailable) return null;

  return (
    <section className="section section--compact section-emphasis emergency-band">
      <div className="section__inner emergency-band__inner">
        <div>
          <h2 className="emergency-band__heading">
            <LucideIcon name="Zap" size={24} color="var(--color-accent-500)" />
            Plumbing Emergency?
          </h2>
          <p style={{ margin: "var(--space-2) 0 0" }} className="text-muted">
            Burst pipe, active leak, or no water? Calling is the fastest way to reach us
            {operations.twentyFourSevenService ? ", 24/7." : "."}
          </p>
        </div>

        <div className="emergency-band__actions">
          <Button variant="accent" href={telHref(business.phone)}>
            Call Now: {formatPhoneDisplay(business.phone)}
          </Button>
          <Button variant="inverse" href="/contact/">
            Contact Us
          </Button>
        </div>

        <p
          className="text-muted emergency-band__notice"
          style={{ margin: 0, fontSize: "var(--font-size-sm)" }}
        >
          If you smell gas, see fire, face electrical danger, or have an immediate threat to life
          or property, call 911 or your utility provider first. Do not wait for a form response.
        </p>
      </div>
    </section>
  );
}
