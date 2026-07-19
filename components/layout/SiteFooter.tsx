import Link from "next/link";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/** Site footer (docs/04 §5.3). Lists only enabled services; excludes private routes. */
export function SiteFooter() {
  const { business, location } = clientConfig;
  const services = enabledServices();
  const year = 2026; // Build-stamped; avoids runtime Date in static export.

  return (
    <footer
      style={{
        background: "var(--color-background-alt)",
        borderTop: "1px solid var(--color-border)",
        marginTop: "var(--space-16)",
      }}
    >
      <div
        className="container section"
        style={{
          display: "grid",
          gap: "var(--space-8)",
          gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
        }}
      >
        <div>
          <p style={{ fontWeight: 700 }}>{business.publicName}</p>
          <p style={{ color: "var(--color-text-muted)" }}>
            {location.city}, {location.state}
          </p>
          <p>
            <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>
          </p>
        </div>

        <nav aria-label="Services">
          <p style={{ fontWeight: 700 }}>Plumbing Services</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p style={{ fontWeight: 700 }}>Company</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
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

        <nav aria-label="Legal">
          <p style={{ fontWeight: 700 }}>Legal</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link href="/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms/">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container" style={{ paddingBottom: "var(--space-8)" }}>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
          © {year} {business.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
