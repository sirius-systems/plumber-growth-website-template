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
}

const day = (label: string, open = true): BusinessHoursDay => ({ label, open });

/**
 * EXAMPLE client used for local development and the template preview. Replace
 * wholesale per client (docs/12 §16). Values are obviously fictional so nothing
 * here can be mistaken for a real business.
 */
export const clientConfig: ClientConfig = {
  business: {
    legalName: "Example Plumbing Co. LLC",
    publicName: "Example Plumbing Co.",
    description:
      "Example Plumbing Co. is a demonstration plumbing company used to preview the Plumber Growth System website template.",
    phone: "+15555550100",
    smsPhone: "+15555550100",
    email: "office@example-plumbing.test",
    websiteUrl: "https://example.com",
  },
  location: {
    addressDisplayMode: "service-area",
    city: "Anytown",
    state: "TX",
    country: "US",
  },
  operations: {
    businessHours: {
      monday: day("8:00 AM – 5:00 PM"),
      tuesday: day("8:00 AM – 5:00 PM"),
      wednesday: day("8:00 AM – 5:00 PM"),
      thursday: day("8:00 AM – 5:00 PM"),
      friday: day("8:00 AM – 5:00 PM"),
      saturday: day("By appointment"),
      sunday: day("Closed", false),
    },
    emergencyServiceAvailable: true,
    twentyFourSevenService: false,
    residentialPlumbing: true,
    commercialPlumbing: false,
    financingOffered: false,
  },
  credentials: {
    insured: true,
    bonded: true,
    yearsInBusiness: 10,
  },
  branding: {
    logoAlt: "Example Plumbing Co.",
    wordmark: "Example Plumbing Co.",
    primaryColor: "#0f4f94",
    primaryDarkColor: "#12345a",
    accentColor: "#e9a51c",
  },
  serviceAreas: [
    { name: "Anytown", state: "TX", hasDetailPage: false },
    { name: "Springfield", state: "TX", hasDetailPage: false },
  ],
  integrations: {},
  seo: {
    primaryMarket: "Anytown, TX",
    defaultTitle: "Plumber in Anytown, TX | Example Plumbing Co.",
    defaultDescription:
      "Example Plumbing Co. provides residential plumbing services in Anytown, TX. Request service or call today.",
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
