import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Hero call-to-action pair (docs/06 §26): amber phone button + outline services
 * link. Shared by every over-media hero and the closing CTA so the treatment is
 * identical site-wide.
 *
 * The phone button uses the amber `accent` variant rather than `primary`: a navy
 * fill sits at ~1.5:1 against the navy hero overlay and fails WCAG 1.4.11, while
 * amber measures ~6:1+. Its accessible name contains the visible label (2.5.3).
 *
 * @param showServicesLink Set false on /services/, where the link is self-referential.
 */
export function HeroCtaButtons({ showServicesLink = true }: { showServicesLink?: boolean }) {
  const { business } = clientConfig;
  const phone = formatPhoneDisplay(business.phone);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-3)",
        margin: "var(--space-4) 0 0",
      }}
    >
      <Button variant="accent" href={telHref(business.phone)} aria-label={`Call ${phone}`}>
        <LucideIcon name="Phone" size={18} />
        {phone}
      </Button>
      {showServicesLink && (
        <Button variant="inverse" href="/services/">
          View Our Services
        </Button>
      )}
    </div>
  );
}
