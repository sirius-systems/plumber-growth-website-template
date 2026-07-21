/**
 * Client configuration layer (docs/05 §8, docs/12 §16).
 *
 * All client-specific business information the site renders comes from here, so
 * the template can be customized per client without editing components. Private
 * credentials (GHL token, Turnstile secret) are NEVER in this file — they live
 * in server-side Cloudflare env vars (docs/05 §8.3, docs/11 §5).
 *
 * The sentinel `CONFIGURATION_REQUIRED` marks values that must be replaced
 * before a production launch; `assertClientConfigReady()` fails the build if any
 * required value still holds the sentinel (docs/09 §9, docs/12 §16).
 */

export const CONFIGURATION_REQUIRED = "CONFIGURATION REQUIRED" as const;

export type AddressDisplayMode = "full" | "service-area";

export interface BusinessHoursDay {
  /** e.g. "8:00 AM – 5:00 PM" or "Closed". */
  label: string;
  open: boolean;
}

export interface BusinessHours {
  monday: BusinessHoursDay;
  tuesday: BusinessHoursDay;
  wednesday: BusinessHoursDay;
  thursday: BusinessHoursDay;
  friday: BusinessHoursDay;
  saturday: BusinessHoursDay;
  sunday: BusinessHoursDay;
}

export interface ServiceAreaReference {
  name: string;
  state: string;
  /** When true a dedicated /service-areas/{slug}/ page exists (upgrade — docs/04 §9). */
  hasDetailPage: boolean;
  slug?: string;
}

export interface BrandConfig {
  logoSrc?: string;
  logoAlt: string;
  /** Text fallback shown when no approved logo asset exists (docs/06 §20). */
  wordmark: string;
  primaryColor: string;
  primaryDarkColor: string;
  accentColor: string;
}

export interface CredentialsConfig {
  licenseNumber?: string;
  licenseJurisdiction?: string;
  insured: boolean;
  bonded: boolean;
  yearsInBusiness?: number;
}

export interface PublicIntegrationConfig {
  /** Public GHL web-chat widget id (browser-safe — docs/11 §27). */
  chatWidgetId?: string;
  /** Public analytics id (browser-safe). */
  analyticsId?: string;
  /** Verified public Google review destination (docs/11 §30). */
  reviewUrl?: string;
  googleBusinessProfileUrl?: string;
}

export interface SeoConfig {
  /** Primary market used in title/description patterns (docs/07 §25). */
  primaryMarket: string;
  defaultTitle: string;
  defaultDescription: string;
}

export interface MarketingConfig {
  /** Homepage hero H1 (client-approved marketing copy — docs/07). */
  heroHeadline: string;
  /** Homepage hero supporting line. */
  heroSubheadline: string;
  /** Short tagline reused in header/brand contexts. */
  tagline: string;
}

export interface ClientConfig {
  business: {
    legalName: string;
    publicName: string;
    description: string;
    phone: string;
    smsPhone?: string;
    email: string;
    websiteUrl: string;
  };
  location: {
    addressDisplayMode: AddressDisplayMode;
    streetAddress?: string;
    city: string;
    state: string;
    postalCode?: string;
    country: "US";
  };
  operations: {
    businessHours: BusinessHours;
    emergencyServiceAvailable: boolean;
    twentyFourSevenService: boolean;
    residentialPlumbing: boolean;
    commercialPlumbing: boolean;
    financingOffered: boolean;
  };
  credentials: CredentialsConfig;
  branding: BrandConfig;
  serviceAreas: ServiceAreaReference[];
  integrations: PublicIntegrationConfig;
  seo: SeoConfig;
  marketing: MarketingConfig;
}

const day = (label: string, open = true): BusinessHoursDay => ({ label, open });

/**
 * Active client configuration: Las Vegas Pro Plumbing (DEMO deployment).
 *
 * ⚠ DEMONSTRATION DATA. This is a demo site — the business name, address,
 * license number, phone number, hours, and reviews are illustrative and must be
 * verified before any live launch. In particular:
 *   - phone `+18883083262` is an AGENCY-CONTROLLED tracking number; confirm it is
 *     active and routed (to Sirius Systems / the demo GHL account) before go-live.
 *   - license `NV-PL-2024-08847` is placeholder demo data, not a verified license.
 * Replace wholesale per real client (docs/12 §16, docs/17 §22).
 */
export const clientConfig: ClientConfig = {
  business: {
    legalName: "Las Vegas Pro Plumbing LLC",
    publicName: "Las Vegas Pro Plumbing",
    description:
      "Las Vegas Pro Plumbing provides fast, honest plumbing service across the Las Vegas valley — emergency repairs, drain cleaning, water heaters, leak detection, and more. Licensed, local, and trusted since 2013.",
    phone: "+18883083262",
    smsPhone: "+18883083262",
    email: "info@lasvegasproplumbing.com",
    websiteUrl: "https://lasvegasproplumbing.com",
  },
  location: {
    addressDisplayMode: "full",
    streetAddress: "4820 W Sahara Ave Ste 110",
    city: "Las Vegas",
    state: "NV",
    postalCode: "89102",
    country: "US",
  },
  operations: {
    businessHours: {
      monday: day("7:00 AM – 6:00 PM"),
      tuesday: day("7:00 AM – 6:00 PM"),
      wednesday: day("7:00 AM – 6:00 PM"),
      thursday: day("7:00 AM – 6:00 PM"),
      friday: day("7:00 AM – 6:00 PM"),
      saturday: day("8:00 AM – 4:00 PM"),
      sunday: day("Emergency service only", false),
    },
    emergencyServiceAvailable: true,
    twentyFourSevenService: true,
    residentialPlumbing: true,
    commercialPlumbing: true,
    financingOffered: true,
  },
  credentials: {
    licenseNumber: "NV-PL-2024-08847",
    licenseJurisdiction: "Nevada State Contractor License",
    insured: true,
    bonded: true,
    yearsInBusiness: 11,
  },
  branding: {
    logoAlt: "Las Vegas Pro Plumbing",
    wordmark: "Las Vegas Pro Plumbing",
    primaryColor: "#1B4F8A",
    primaryDarkColor: "#123A66",
    accentColor: "#F5A623",
  },
  serviceAreas: [
    { name: "Las Vegas", state: "NV", hasDetailPage: true, slug: "las-vegas" },
    { name: "Henderson", state: "NV", hasDetailPage: true, slug: "henderson" },
    { name: "North Las Vegas", state: "NV", hasDetailPage: true, slug: "north-las-vegas" },
    { name: "Summerlin", state: "NV", hasDetailPage: true, slug: "summerlin" },
    { name: "Spring Valley", state: "NV", hasDetailPage: true, slug: "spring-valley" },
    { name: "Enterprise", state: "NV", hasDetailPage: true, slug: "enterprise" },
  ],
  integrations: {
    // reviewUrl intentionally unset for the demo — the public review CTA falls
    // back to a placeholder. Set a verified Google review URL for a live client
    // (docs/11 §30); never gate the public review link on rating (SEO-003).
  },
  seo: {
    primaryMarket: "Las Vegas, NV",
    defaultTitle: "Plumber in Las Vegas, NV | Las Vegas Pro Plumbing",
    defaultDescription:
      "Las Vegas Pro Plumbing provides fast, honest plumbing services in Las Vegas, Henderson, North Las Vegas, and surrounding areas. Call (888) 308-3262 or request service online.",
  },
  marketing: {
    heroHeadline: "Las Vegas's Trusted Plumber — Fast Response, Honest Pricing",
    heroSubheadline:
      "Serving Las Vegas, Henderson, North Las Vegas, and surrounding areas with licensed, upfront plumbing service.",
    tagline: "Fast Response, Honest Pricing",
  },
};

/** Values that must not remain as the CONFIGURATION_REQUIRED sentinel at launch. */
function requiredValues(c: ClientConfig): string[] {
  return [
    c.business.legalName,
    c.business.publicName,
    c.business.phone,
    c.business.email,
    c.business.websiteUrl,
    c.location.city,
    c.location.state,
    c.seo.primaryMarket,
    c.seo.defaultTitle,
    c.seo.defaultDescription,
  ];
}

/**
 * Throws if any required production value is still the sentinel. Call from the
 * build (e.g. sitemap generation) so an unconfigured client cannot ship.
 */
export function assertClientConfigReady(c: ClientConfig = clientConfig): void {
  const missing = requiredValues(c).filter((v) => v === CONFIGURATION_REQUIRED);
  if (missing.length > 0) {
    throw new Error(
      `Client config incomplete: ${missing.length} required value(s) still set to "${CONFIGURATION_REQUIRED}".`,
    );
  }
}
