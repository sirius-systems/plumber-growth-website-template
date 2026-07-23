import Link from "next/link";
import Image from "next/image";
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

/** Site footer (docs/04 §5.4). Six-column main grid + centered legal/copyright. */
export function SiteFooter() {
  const { business, location, operations, credentials, serviceAreas, seo, branding } = clientConfig;
  const services = enabledServices();
  const year = 2026; // Build-stamped; avoids runtime Date in static export.

  const addressLine = [
    location.streetAddress,
    `${location.city}, ${location.state} ${location.postalCode ?? ""}`.trim(),
  ]
    .filter(Boolean)
    .join(" · ");

  const headingStyle = { fontWeight: 700, marginTop: 0 } as const;
  const listStyle = { listStyle: "none", padding: 0, margin: 0 } as const;

  // Copyright line: only verified facts (docs/07 §32).
  const copyrightParts = [`© ${year} ${business.legalName}. All rights reserved.`];
  if (credentials.licenseNumber && credentials.insured) copyrightParts.push("Licensed & Insured");
  if (seo.primaryMarket) copyrightParts.push(`Serving ${seo.primaryMarket} and Surrounding Areas`);

  return (
    <footer
      className="site-footer"
      style={{
        background: "var(--color-background-alt)",
        borderTop: "1px solid var(--color-border)",
        marginTop: "var(--space-16)",
      }}
    >
      <div className="container container--wide section footer-grid">
        {/* Col 1, logo placeholder + identity */}
        <div>
          {branding.logoSrc ? (
            <Image
              src={branding.logoSrc}
              alt={branding.logoAlt}
              width={1200}
              height={360}
              style={{ height: 36, width: "auto" }}
            />
          ) : (
            <span
              role="img"
              aria-label={`${business.publicName} logo`}
              style={{
                display: "block",
                width: 140,
                height: 36,
                background: "var(--color-neutral-200)",
                borderRadius: "var(--radius-sm)",
              }}
            />
          )}
          <p style={{ fontWeight: 700, margin: "var(--space-3) 0 0" }}>{business.publicName}</p>
          <address style={{ fontStyle: "normal", color: "var(--color-text-muted)" }}>
            {addressLine}
          </address>
          <p style={{ margin: "var(--space-2) 0 0" }}>
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

        {/* Col 2, Hours */}
        <div>
          <p style={headingStyle}>Hours</p>
          <ul style={listStyle}>
            {DAY_LABELS.map(({ key, label }) => (
              <li
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "var(--space-3)",
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

        {/* Col 3, Services */}
        <nav aria-label="Services">
          <p style={headingStyle}>Services</p>
          <ul style={listStyle}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`}>{s.name}</Link>
              </li>
            ))}
            <li style={{ marginTop: "var(--space-2)" }}>
              <Link href="/services/">View all</Link>
            </li>
          </ul>
        </nav>

        {/* Col 4, Service areas */}
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
              <Link href="/service-areas/">All areas</Link>
            </li>
          </ul>
        </nav>

        {/* Col 5, Company */}
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

        {/* Col 6, Get started */}
        <nav aria-label="Customer actions">
          <p style={headingStyle}>Get Started</p>
          <ul style={listStyle}>
            <li>
              <Link href="/contact/">Get a Quote</Link>
            </li>
            {operations.emergencyServiceAvailable && (
              <li>
                <a href={telHref(business.phone)}>Emergency: Call {formatPhoneDisplay(business.phone)}</a>
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
      </div>

      {/* Full-width line 1, legal (centered) */}
      <div
        className="container"
        style={{
          textAlign: "center",
          paddingBottom: "var(--space-4)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "var(--space-6)",
        }}
      >
        <Link href="/privacy-policy/">Privacy Policy</Link>
        <span style={{ color: "var(--color-text-muted)" }}> · </span>
        <Link href="/terms/">Terms &amp; Conditions</Link>
      </div>

      {/* Full-width line 2, copyright + verified statements (centered) */}
      <div
        className="container"
        style={{
          textAlign: "center",
          paddingBottom: "var(--space-8)",
          color: "var(--color-text-muted)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ margin: 0 }}>{copyrightParts.join(" · ")}</p>
        {credentials.licenseNumber && credentials.licenseJurisdiction && (
          <p style={{ margin: "var(--space-2) 0 0" }}>
            {credentials.licenseJurisdiction} #{credentials.licenseNumber}
          </p>
        )}
        <p style={{ margin: "var(--space-2) 0 0" }}>
          Submitting a form does not guarantee service or immediate response.
        </p>
      </div>
    </footer>
  );
}
