import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Primary site header (docs/04 §5.1). Navigation reflects enabled client
 * capabilities: Commercial only when the client serves commercial. Call + Request
 * Service are persistent actions (docs/04 §5, WEB-003).
 */
export function SiteHeader() {
  const { business, operations } = clientConfig;

  return (
    <header className="container" style={{ paddingBlock: "var(--space-4)" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
        }}
      >
        <Link href="/" style={{ fontWeight: 700, fontSize: "var(--font-size-lg)" }}>
          {business.publicName}
        </Link>

        <nav aria-label="Primary">
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-4)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link href="/services/">Services</Link>
            </li>
            {operations.residentialPlumbing && (
              <li>
                <Link href="/residential-plumbing/">Residential</Link>
              </li>
            )}
            {operations.commercialPlumbing && (
              <li>
                <Link href="/commercial-plumbing/">Commercial</Link>
              </li>
            )}
            <li>
              <Link href="/service-areas/">Service Areas</Link>
            </li>
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/reviews/">Reviews</Link>
            </li>
            <li>
              <Link href="/faqs/">FAQs</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <a className="btn btn--secondary" href={telHref(business.phone)}>
            Call {formatPhoneDisplay(business.phone)}
          </a>
          <Link className="btn btn--primary" href="/request-service/">
            Request Service
          </Link>
        </div>
      </div>
    </header>
  );
}
