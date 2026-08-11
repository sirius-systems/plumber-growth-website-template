import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Button } from "@/components/ui/Button";

/**
 * Persistent mobile action bar (docs/06 §22). Call + Request Service on small
 * screens only (hidden at md+ via CSS). Large touch targets; respects safe-area
 * insets. Kept to two clear actions so it never obscures form controls.
 *
 * Rendered as a <nav>: `aria-label` on a plain <div> has no role to name, so
 * the label was not exposed and the bar was not reachable as a landmark.
 */
export function MobileActionBar() {
  const { business } = clientConfig;

  return (
    <nav className="mobile-action-bar" aria-label="Quick actions">
      <Button variant="secondary" href={telHref(business.phone)}>
        Call {formatPhoneDisplay(business.phone)}
      </Button>
      <Button variant="accent" href="/contact/">
        Request Service
      </Button>
    </nav>
  );
}
