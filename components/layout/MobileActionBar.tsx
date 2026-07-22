import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Persistent mobile action bar (docs/06 §22). Call + Request Service on small
 * screens only (hidden at md+ via CSS). Large touch targets; respects safe-area
 * insets. Kept to two clear actions so it never obscures form controls.
 */
export function MobileActionBar() {
  const { business } = clientConfig;

  return (
    <div className="mobile-action-bar" aria-label="Quick actions">
      <a className="btn btn--secondary" href={telHref(business.phone)}>
        Call {formatPhoneDisplay(business.phone)}
      </a>
      <Link className="btn btn--primary" href="/contact/">
        Get a Quote
      </Link>
    </div>
  );
}
