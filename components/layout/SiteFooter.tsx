import Link from "next/link";
import Image from "next/image";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import { companyNav, legalNav, SITE_PRIMARY_CTA } from "@/config/navigation";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

const DAY_LABELS: { key: keyof typeof clientConfig.operations.businessHours; label: string }[] = [
  { key: "monday", label: "Mon" },
  { key: "tuesday", label: "Tue" },
  { key: "wednesday", label: "Wed" },
  { key: "thursday", label: "Thu" },
  { key: "friday", label: "Fri" },
  { key: "saturday", label: "Sat" },
  { key: "sunday", label: "Sun" },
];

/**
 * Site footer (docs/04 §5.4). Deep-navy surface closing the page, six-column
 * main grid, then centered legal + copyright lines.
 *
 * Everything rendered here is config-gated: hours, address, financing, social
 * profiles and the license line all disappear for a client that has not supplied
 * them, rather than showing placeholder text (docs/17 §22). The reversed logo is
 * used when `branding.logoInverseSrc` is set — the primary navy mark would be
 * unreadable on this surface.
 *
 * Link groups stay native `<details open>` disclosures: always rendered for
 * desktop columns with no JavaScript, collapsible below 48rem.
 */
export function SiteFooter() {
  const { business, location, operations, credentials, serviceAreas, seo, branding, social } =
    clientConfig;
  const services = enabledServices();
  const year = 2026; // Build-stamped; avoids runtime Date in static export.
  const logoSrc = branding.logoInverseSrc ?? branding.logoSrc;
  const showAddress = location.addressDisplayMode === "full" && Boolean(location.streetAddress);

  const addressLine = [
    location.streetAddress,
    `${location.city}, ${location.state} ${location.postalCode ?? ""}`.trim(),
  ]
    .filter(Boolean)
    .join(" · ");

  // Copyright line: only verified facts (docs/07 §32). Rendered as spans rather
  // than one joined string so the market clause can be kept unbreakable — see
  // `.site-footer__nowrap`.
  const copyrightNotice = `© ${year} ${business.legalName}. All rights reserved.`;
  const marketNotice = seo.primaryMarket
    ? `Serving ${seo.primaryMarket} and Surrounding Areas`
    : null;

  const credentialBadges = [
    credentials.licenseNumber ? "Licensed" : null,
    credentials.bonded ? "Bonded" : null,
    credentials.insured ? "Insured" : null,
  ].filter((value): value is string => value !== null);

  return (
    <footer className="site-footer site-footer--dark">
      <div className="container container--wide section footer-grid">
        {/* Col 1 — brand identity, contact, socials */}
        <div className="site-footer__brand">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={branding.logoAlt}
              width={1200}
              height={360}
              className="footer-logo"
            />
          ) : (
            <p className="site-footer__wordmark">{branding.wordmark}</p>
          )}

          <p className="site-footer__blurb">
            Licensed plumbing service for homes and businesses across {seo.primaryMarket} and the
            surrounding valley.
          </p>

          {showAddress && (
            <address className="site-footer__address">{addressLine}</address>
          )}

          <p className="site-footer__contact">
            <a href={telHref(business.phone)}>
              <LucideIcon name="Phone" size={16} color="var(--color-accent-500)" />
              {formatPhoneDisplay(business.phone)}
            </a>
          </p>
          <p className="site-footer__contact">
            <a href={`mailto:${business.email}`}>
              <LucideIcon name="Mail" size={16} color="var(--color-accent-500)" />
              {business.email}
            </a>
          </p>

          {operations.emergencyServiceAvailable && (
            <p className="site-footer__note">
              <LucideIcon name="Zap" size={16} color="var(--color-accent-500)" />
              {operations.twentyFourSevenService
                ? "24/7 emergency service available"
                : "Emergency service available"}
            </p>
          )}

          {social && social.length > 0 && (
            <ul className="site-footer__social" role="list">
              {social.map((profile) => (
                <li key={profile.href}>
                  <a
                    href={profile.href}
                    aria-label={profile.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LucideIcon name={profile.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Col 2 — Hours */}
        <div>
          <details className="footer-group" open>
            <summary className="footer-group__heading">Hours</summary>
            <ul className="footer-group__list">
              {DAY_LABELS.map(({ key, label }) => (
                <li key={key} className="site-footer__hours-row">
                  <span>{label}</span>
                  <span>{operations.businessHours[key].label}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Col 3 — Services */}
        <nav aria-label="Services">
          <details className="footer-group" open>
            <summary className="footer-group__heading">Services</summary>
            <ul className="footer-group__list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                </li>
              ))}
              <li className="site-footer__more">
                <Link href="/services/">View all services →</Link>
              </li>
            </ul>
          </details>
        </nav>

        {/* Col 4 — Service areas */}
        <nav aria-label="Service areas">
          <details className="footer-group" open>
            <summary className="footer-group__heading">Service Areas</summary>
            <ul className="footer-group__list">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  {area.hasDetailPage && area.slug ? (
                    <Link href={`/service-areas/${area.slug}/`}>{area.name}</Link>
                  ) : (
                    <span>{area.name}</span>
                  )}
                </li>
              ))}
              <li className="site-footer__more">
                <Link href="/service-areas/">All areas →</Link>
              </li>
            </ul>
          </details>
        </nav>

        {/* Col 5 — Company (includes the residential/commercial audience paths) */}
        <nav aria-label="Company">
          <details className="footer-group" open>
            <summary className="footer-group__heading">Company</summary>
            <ul className="footer-group__list">
              {companyNav().map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </details>
        </nav>

        {/* Col 6 — Get started */}
        <nav aria-label="Customer actions">
          <details className="footer-group" open>
            <summary className="footer-group__heading">Get Started</summary>
            <ul className="footer-group__list">
              <li>
                <Link href={SITE_PRIMARY_CTA.href}>{SITE_PRIMARY_CTA.label}</Link>
              </li>
              <li>
                <a href={telHref(business.phone)}>Call {formatPhoneDisplay(business.phone)}</a>
              </li>
              <li>
                <Link href="/review-feedback/">Leave Feedback</Link>
              </li>
            </ul>
            <div className="site-footer__cta">
              <Button variant="accent" size="sm" href={SITE_PRIMARY_CTA.href}>
                {SITE_PRIMARY_CTA.label}
              </Button>
            </div>
          </details>
        </nav>
      </div>

      <div className="container container--wide site-footer__legal">
        <p className="site-footer__legal-links">
          {legalNav.map((link, index) => (
            <span key={link.href}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
        </p>

        <p className="site-footer__copyright">
          <span>{copyrightNotice}</span>
          {marketNotice && (
            <>
              <span aria-hidden="true"> · </span>
              <span className="site-footer__nowrap">{marketNotice}</span>
            </>
          )}
        </p>

        {credentials.licenseNumber && credentials.licenseJurisdiction && (
          <p className="site-footer__copyright">
            {credentials.licenseJurisdiction} #{credentials.licenseNumber}
          </p>
        )}

        {credentialBadges.length > 0 && (
          <p className="site-footer__badges">{credentialBadges.join(" · ")}</p>
        )}

        <p className="site-footer__copyright">
          Submitting a form does not guarantee service or immediate response.
        </p>
      </div>
    </footer>
  );
}
