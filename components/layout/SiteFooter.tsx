import Link from "next/link";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

const DAY_LABELS: { key: keyof typeof clientConfig.operations.businessHours; label: string }[] = [
  { key: "monday", label: "Mon" },
  { key: "tuesday", label: "Tue" },
  { key: "wednesday", label: "Wed" },
  { key: "thursday", label: "Thu" },
  { key: "friday", label: "Fri" },
  { key: "saturday", label: "Sat" },
  { key: "sunday", label: "Sun" },
];

/** Site footer (docs/04 §5.4). Lists only enabled services and capabilities. */
export function SiteFooter() {
  const { business, location, operations, credentials, serviceAreas } = clientConfig;
  const services = enabledServices();
  const year = 2026; // Build-stamped; avoids runtime Date in static export.

  const addressLine = [
    location.streetAddress,
    `${location.city}, ${location.state} ${location.postalCode ?? ""}`.trim(),
  ]
    .filter(Boolean)
    .join(" · ");

  const licenseText =
    credentials.licenseNumber && credentials.licenseJurisdiction
      ? `${credentials.licenseJurisdiction} #${credentials.licenseNumber}`
      : null;

  const headingStyle = { fontWeight: 700, marginTop: 0 };
  const listStyle = { listStyle: "none", padding: 0, margin: 0 } as const;

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
          gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))",
        }}
      >
        {/* Business identity + contact */}
        <div>
          <p style={{ fontWeight: 700, fontSize: "var(--font-size-lg)" }}>
            {business.publicName}
          </p>
          <address style={{ fontStyle: "normal", color: "var(--color-text-muted)" }}>
            {addressLine}
          </address>
          <p style={{ margin: "var(--space-3) 0 0" }}>
            <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>
          </p>
          <p style={{ margin: "var(--space-2) 0 0" }}>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          {operations.twentyFourSevenService && (
            <p style={{ margin: "var(--space-3) 0 0", color: "var(--color-text-muted)" }}>
              24/7 emergency service
            </p>
          )}
        </div>

        {/* Hours */}
        <div>
          <p style={headingStyle}>Hours</p>
          <ul style={listStyle}>
            {DAY_LABELS.map(({ key, label }) => (
              <li
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "var(--space-4)",
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                }}
              >
                <span>{label}</span>
                <span>{operations.businessHours[key].label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <p style={headingStyle}>Plumbing Services</p>
          <ul style={listStyle}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`}>{s.name}</Link>
              </li>
            ))}
            <li style={{ marginTop: "var(--space-2)" }}>
              <Link href="/services/">View all services</Link>
            </li>
          </ul>
        </nav>

        {/* Service areas */}
        <nav aria-label="Service areas">
          <p style={headingStyle}>Service Areas</p>
          <ul style={listStyle}>
            {serviceAreas.map((area) => (
              <li key={area.name}>
                {area.hasDetailPage && area.slug ? (
                  <Link href={`/service-areas/${area.slug}/`}>{area.name}</Link>
                ) : (
                  <span>{area.name}</span>
                )}
              </li>
            ))}
            <li style={{ marginTop: "var(--space-2)" }}>
              <Link href="/service-areas/">All service areas</Link>
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <p style={headingStyle}>Company</p>
          <ul style={listStyle}>
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
            {operations.financingOffered && (
              <li>
                <Link href="/financing/">Financing</Link>
              </li>
            )}
          </ul>
        </nav>

        {/* Customer actions */}
        <nav aria-label="Customer actions">
          <p style={headingStyle}>Get Started</p>
          <ul style={listStyle}>
            <li>
              <Link href="/request-service/">Request Service</Link>
            </li>
            {operations.emergencyServiceAvailable && (
              <li>
                <Link href="/emergency-plumbing-request/">Emergency Request</Link>
              </li>
            )}
            <li>
              <Link href="/review-feedback/">Leave Feedback</Link>
            </li>
            <li>
              <a href={telHref(business.phone)}>Call {formatPhoneDisplay(business.phone)}</a>
            </li>
          </ul>
        </nav>

        {/* Legal */}
        <nav aria-label="Legal">
          <p style={headingStyle}>Legal</p>
          <ul style={listStyle}>
            <li>
              <Link href="/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms/">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="container"
        style={{
          paddingBottom: "var(--space-8)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "var(--space-6)",
          color: "var(--color-text-muted)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ margin: 0 }}>
          © {year} {business.legalName}. All rights reserved.
        </p>
        {licenseText && <p style={{ margin: "var(--space-2) 0 0" }}>{licenseText}</p>}
        <p style={{ margin: "var(--space-2) 0 0" }}>
          Submitting a form does not guarantee service or immediate response.
        </p>
      </div>
    </footer>
  );
}
