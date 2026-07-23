import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Button } from "@/components/ui/Button";

/**
 * Persistent mobile action bar (docs/06 §22). Call + Request Service on small
 * screens only (hidden at md+ via CSS). Large touch targets; respects safe-area
 * insets. Kept to two clear actions so it never obscures form controls.
 */
export function MobileActionBar() {
  const { business } = clientConfig;

  return (
    <div className="mobile-action-bar" aria-label="Quick actions">
      <Button variant="secondary" href={telHref(business.phone)}>
        Call {formatPhoneDisplay(business.phone)}
      </Button>
      <Button variant="accent" href="/contact/">
        Request Service
      </Button>
    </div>
  );
}
