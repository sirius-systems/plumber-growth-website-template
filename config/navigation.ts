/**
 * Site navigation model (docs/04 §5.1, §5.4).
 *
 * Header and footer both read from here, so a link is defined once and cannot
 * drift between the desktop row, the mobile panel, and the footer columns.
 * Entries gated on `clientConfig.operations` disappear entirely for a client who
 * does not offer that line of work — they are never rendered as dead links.
 */

import { clientConfig } from "@/config/client";

export interface NavLink {
  label: string;
  href: string;
}

/** Primary header navigation. Rendered once; CSS decides row vs. panel. */
export function primaryNav(): NavLink[] {
  const { operations } = clientConfig;
  const links: NavLink[] = [{ label: "Services", href: "/services/" }];

  if (operations.residentialPlumbing) {
    links.push({ label: "Residential", href: "/residential-plumbing/" });
  }
  if (operations.commercialPlumbing) {
    links.push({ label: "Commercial", href: "/commercial-plumbing/" });
  }

  links.push(
    { label: "Service Areas", href: "/service-areas/" },
    { label: "Reviews", href: "/reviews/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  );

  return links;
}

/** Footer "Company" column. */
export function companyNav(): NavLink[] {
  const { operations } = clientConfig;
  const links: NavLink[] = [
    { label: "About", href: "/about/" },
    { label: "Reviews", href: "/reviews/" },
    { label: "FAQs", href: "/faqs/" },
    { label: "Contact", href: "/contact/" },
  ];
  if (operations.residentialPlumbing) {
    links.splice(1, 0, { label: "Residential Plumbing", href: "/residential-plumbing/" });
  }
  if (operations.commercialPlumbing) {
    links.splice(2, 0, { label: "Commercial Plumbing", href: "/commercial-plumbing/" });
  }
  if (operations.financingOffered) {
    links.push({ label: "Financing", href: "/financing/" });
  }
  return links;
}

/** Footer legal column. */
export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms/" },
];

/**
 * Site-wide primary conversion action. The homepage sections target the on-page
 * request form (`#request`); everywhere else — header, footer, mobile bar — the
 * same label routes to the contact page, which carries the same form.
 */
export const SITE_PRIMARY_CTA = { label: "Request Service", href: "/contact/" } as const;
