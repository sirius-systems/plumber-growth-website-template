import Link from "next/link";
import Image from "next/image";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Button } from "@/components/ui/Button";

/**
 * Primary site header (docs/04 §5.1). Single desktop row: logo, primary nav, and
 * the persistent Call + Request Service actions, all vertically centered. The
 * brand is a logo (config-driven src, or a neutral placeholder until a real
 * asset exists) — no business-name text. Wraps on small screens.
 */
export function SiteHeader() {
  const { business, operations, branding } = clientConfig;

  return (
    <header className="container" style={{ paddingBlock: "var(--space-4)" }}>
      <div className="site-header-inner">
        <Link href="/" style={{ display: "inline-flex", flexShrink: 0 }}>
          {branding.logoSrc ? (
            <Image
              src={branding.logoSrc}
              alt={branding.logoAlt}
              width={1200}
              height={360}
              priority
              style={{ height: 80, width: "auto" }}
            />
          ) : (
            <span
              role="img"
              aria-label={`${business.publicName} logo`}
              style={{
                display: "block",
                width: 160,
                height: 40,
                background: "var(--color-neutral-200)",
                borderRadius: "var(--radius-sm)",
              }}
            />
          )}
        </Link>

        <nav className="site-header-nav" aria-label="Primary">
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
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex", gap: "var(--space-3)", flexShrink: 0 }}>
          <Button variant="secondary" size="sm" href={telHref(business.phone)}>
            Call {formatPhoneDisplay(business.phone)}
          </Button>
          <Button variant="primary" size="sm" href="/contact/">
            Request Service
          </Button>
        </div>
      </div>
    </header>
  );
}
