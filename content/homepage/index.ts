/**
 * Central homepage content model (docs/04 §6, docs/05 §8).
 *
 * THIS IS THE ONE FILE TO EDIT FOR HOMEPAGE COPY. Every section under
 * `components/sections/home/` renders from `homepageContent` — no page copy is
 * hard-coded in a component.
 *
 * Boundary with `config/`:
 *   - `config/client.ts`   — client FACTS (name, phone, license, hours, areas).
 *   - `config/services.ts` — the service catalog (which pages exist).
 *   - `config/reviews.ts`  — review data.
 *   - this file            — marketing COPY plus the arrangement of those facts.
 *
 * Truthfulness (docs/17 §22): claims that are client facts are DERIVED from
 * config and gated on it — never written as static strings here. If a client has
 * no license number, no financing, or no reviews, the corresponding trust point,
 * confidence item, or rating simply does not render. Never add a warranty,
 * discount, guaranteed arrival window, or "free estimate" line unless the client
 * has confirmed it and it is represented in config.
 */

import { clientConfig } from "@/config/client";
import { enabledServices, type ServiceSlug } from "@/config/services";
import { reviews, reviewsSummary, type CustomerReview } from "@/config/reviews";
import { homeFaqs } from "@/content/homepage/faqs";
import type { FAQItem } from "@/components/sections/FAQAccordion";
import type { TrustItem } from "@/components/ui/TrustBar";
import { formatPhoneDisplay, telHref } from "@/lib/utilities/format";

const { business, location, operations, credentials, marketing, seo, serviceAreas } = clientConfig;

const phoneDisplay = formatPhoneDisplay(business.phone);

/* ─── Types ─────────────────────────────────────────────────────────── */

export interface Cta {
  label: string;
  href: string;
}

export interface IntentCard {
  /** Lucide icon name (components/ui/LucideIcon). */
  icon: string;
  title: string;
  body: string;
  cta: Cta;
}

export interface ServiceHighlight {
  slug: ServiceSlug;
  /** Lucide icon shown in the badge over the card image. */
  icon: string;
  /** Outcome-led card copy; overrides the catalog's terse shortDescription. */
  outcome: string;
}

export interface ProofPoint {
  icon: string;
  title: string;
  body: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  body: string;
}

export interface ConfidenceItem {
  icon: string;
  title: string;
  body: string;
}

export interface GalleryItem {
  src: string;
  /** Descriptive alt text — required. */
  alt: string;
  caption: string;
}

/** One operational benefit, with the Lucide icon that describes it. */
export interface AudienceBenefit {
  icon: string;
  label: string;
}

export interface AudienceContent {
  eyebrow: string;
  heading: string;
  body: string;
  benefits: AudienceBenefit[];
  image: string;
  imageAlt: string;
  cta: Cta;
}

export interface HomepageContent {
  primaryCta: Cta;
  secondaryCta: Cta;
  phone: { display: string; href: string };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    image: string;
    imageAlt: string;
    microcopy: string;
    trustPoints: TrustItem[];
  };
  intent: { heading: string; lede: string; cards: IntentCard[] };
  services: {
    eyebrow: string;
    heading: string;
    lede: string;
    highlights: ServiceHighlight[];
    viewAll: Cta;
  };
  authority: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    imageAlt: string;
    proofPoints: ProofPoint[];
    cta: Cta;
  };
  process: { eyebrow: string; heading: string; lede: string; steps: ProcessStep[] };
  /** Null when the client does not serve this audience. */
  audience: AudienceContent | null;
  confidence: { heading: string; items: ConfidenceItem[] };
  coverage: { eyebrow: string; heading: string; lede: string; reassurance: string; viewAll: Cta };
  gallery: { eyebrow: string; heading: string; lede: string; items: GalleryItem[] };
  testimonials: {
    eyebrow: string;
    heading: string;
    /** Null unless verified review data exists. */
    summary: { rating: number; count: number } | null;
    items: CustomerReview[];
    cta: Cta;
  };
  request: {
    eyebrow: string;
    heading: string;
    body: string;
    phoneLine: string;
    microcopy: string;
  };
  faq: { heading: string; lede: string; items: FAQItem[]; cta: Cta };
  finalCta: {
    heading: string;
    body: string;
    image: string;
    microcopy: string;
  };
}

/* ─── Derived, config-gated facts ───────────────────────────────────── */

/** Hero trust row. Every entry is gated on verified config. */
function heroTrustPoints(): TrustItem[] {
  const items: TrustItem[] = [];

  if (credentials.licenseNumber && credentials.insured) {
    items.push({
      icon: "shield-check",
      label: credentials.bonded ? "Licensed, Bonded & Insured" : "Licensed & Insured",
    });
  } else if (credentials.licenseNumber) {
    items.push({ icon: "badge-check", label: "Licensed" });
  }

  if (operations.emergencyServiceAvailable) {
    items.push({
      icon: "clock",
      label: operations.twentyFourSevenService ? "24/7 Emergency Service" : "Emergency Service",
    });
  }

  if (credentials.yearsInBusiness) {
    items.push({
      icon: "award",
      label: `${credentials.yearsInBusiness} Years of Local Experience`,
    });
  }

  if (reviewsSummary.count > 0) {
    items.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}-Star Rated` });
  }

  return items;
}

/**
 * Optional confidence module. Renders only entries backed by config; an
 * unconfigured client gets fewer items, or the section hides entirely.
 */
function confidenceItems(): ConfidenceItem[] {
  const items: ConfidenceItem[] = [];

  if (operations.emergencyServiceAvailable) {
    items.push({
      icon: "Zap",
      title: operations.twentyFourSevenService ? "24/7 Emergency Response" : "Emergency Response",
      body: "Calling is the fastest way to reach us when water is actively running.",
    });
  }

  if (operations.financingOffered) {
    items.push({
      icon: "FileText",
      title: "Financing Available",
      body: "Ask about financing options for larger repairs and replacements.",
    });
  }

  if (credentials.licenseNumber && credentials.licenseJurisdiction) {
    items.push({
      icon: "ShieldCheck",
      title: "Licensed in Nevada",
      body: `${credentials.licenseJurisdiction} #${credentials.licenseNumber}.`,
    });
  }

  if (credentials.yearsInBusiness) {
    items.push({
      icon: "Award",
      title: `${credentials.yearsInBusiness} Years Local`,
      // No founding year is derived here — `credentials.yearsInBusiness` is the
      // only verified figure, and subtracting it would assert a date config
      // does not carry.
      body: `Serving ${location.city} and the surrounding valley.`,
    });
  }

  return items;
}

/** Authority proof points — derived, so an unlicensed client shows fewer. */
function authorityProofPoints(): ProofPoint[] {
  const points: ProofPoint[] = [];

  if (credentials.licenseNumber) {
    points.push({
      icon: "ShieldCheck",
      title: "Licensed Nevada technicians",
      body: credentials.licenseJurisdiction
        ? `${credentials.licenseJurisdiction} #${credentials.licenseNumber}${credentials.insured ? ", fully insured" : ""}.`
        : "Fully licensed and insured.",
    });
  }

  points.push({
    icon: "FileCheck",
    title: "Pricing explained before work starts",
    body: "You approve the scope and the cost before a technician picks up a tool.",
  });

  points.push({
    icon: "Home",
    title: "Clean, respectful visits",
    body: "Drop cloths down, work area left tidy, and a walkthrough of what was done.",
  });

  if (operations.emergencyServiceAvailable) {
    points.push({
      icon: "Clock",
      title: "Reachable when it matters",
      body: operations.twentyFourSevenService
        ? "Emergency calls are answered around the clock, every day of the year."
        : "Emergency calls are prioritized during service hours.",
    });
  }

  return points;
}

/** Intent-routing cards. The commercial card only renders when configured. */
function intentCards(): IntentCard[] {
  const cards: IntentCard[] = [
    {
      icon: "Wrench",
      title: "Find a Service",
      body: "Browse drain, water heater, leak, and pipe services with what each one covers.",
      cta: { label: "View services", href: "/services/" },
    },
    {
      icon: "MapPin",
      title: "Check Your Area",
      body: `See the ${location.city} valley communities we cover and what service looks like locally.`,
      cta: { label: "See service areas", href: "/service-areas/" },
    },
  ];

  if (operations.commercialPlumbing) {
    cards.push({
      icon: "Building2",
      title: "Property & Business Owners",
      body: "Plumbing scheduled around tenants, staff, and operating hours - not against them.",
      cta: { label: "Commercial solutions", href: "/commercial-plumbing/" },
    });
  }

  cards.push({
    icon: "ClipboardList",
    title: "Request Service",
    body: "Tell us what's happening and a team member will follow up to confirm timing.",
    cta: { label: "Start a request", href: "#request" },
  });

  return cards;
}

/* ─── Content ───────────────────────────────────────────────────────── */

/**
 * The single primary conversion action, repeated in the header, hero, authority
 * band, lead form, and final banner. On the homepage it targets the on-page
 * request form; the site-wide header/footer point at /contact/ instead.
 */
export const PRIMARY_CTA: Cta = { label: "Request Service", href: "#request" };

export const homepageContent: HomepageContent = {
  primaryCta: PRIMARY_CTA,
  secondaryCta: { label: `Call ${phoneDisplay}`, href: telHref(business.phone) },
  phone: { display: phoneDisplay, href: telHref(business.phone) },

  hero: {
    eyebrow: `Plumbing services in ${seo.primaryMarket}`,
    headline: marketing.heroHeadline,
    subheadline: marketing.heroSubheadline,
    image: marketing.heroImageSrc,
    imageAlt: marketing.heroImageAlt,
    microcopy: "No-pressure estimate. A team member will contact you to confirm timing.",
    trustPoints: heroTrustPoints(),
  },

  intent: {
    heading: "How Can We Help?",
    lede: "Four ways to get to the right place - pick the one that matches why you're here.",
    cards: intentCards(),
  },

  services: {
    eyebrow: "Our core plumbing services",
    heading: "Solutions for Every Plumbing Problem",
    lede: "Each service has its own page with what's included, what it costs to find out, and what happens next.",
    highlights: [
      {
        slug: "emergency-plumbing",
        icon: "Zap",
        outcome: "Water shut off, damage contained, and the cause fixed - not just stopped.",
      },
      {
        slug: "drain-cleaning",
        icon: "Droplets",
        outcome: "Kitchen, bath, and main lines flowing again, with the blockage cleared at the source.",
      },
      {
        slug: "water-heater-repair",
        icon: "Flame",
        outcome: "Hot water restored, plus a straight answer on whether repair or replacement is smarter.",
      },
      {
        slug: "leak-detection",
        icon: "Search",
        outcome: "Hidden and slab leaks located precisely, so the repair stays small.",
      },
    ],
    viewAll: { label: "Explore all services", href: "/services/" },
  },

  authority: {
    eyebrow: `Why ${location.city} calls us`,
    // \u00A0 (non-breaking space) keeps "Work That Holds Up." on one line, so
    // the heading breaks after "Local Experts." on mobile instead of splitting
    // the phrase. Escapes, not literal characters, so they stay visible in an
    // editor.
    heading: "Local Experts. Work\u00A0That\u00A0Holds\u00A0Up.",
    body: `${business.publicName} pairs licensed technicians with modern diagnostic equipment and plain-English explanations. You'll know what's wrong, what it takes to fix it, and what it costs before anyone starts.`,
    image: "/images/placeholders/team-portrait.svg",
    imageAlt: `A ${business.publicName} technician and service van`,
    proofPoints: authorityProofPoints(),
    cta: { label: "More about us", href: "/about/" },
  },

  process: {
    eyebrow: "How it works",
    // \u00A0 keeps "No Guesswork" on one line, so the heading breaks after the
    // comma on mobile instead of orphaning "Guesswork".
    heading: "Four Steps, No\u00A0Guesswork",
    lede: "Submitting a request is a request, not a confirmed appointment - we always speak with you first.",
    steps: [
      {
        icon: "MessageSquare",
        title: "Tell Us What You Need",
        body: "Call or send the request form with a few details about what you're seeing.",
      },
      {
        icon: "ClipboardList",
        title: "Get Clear Recommendations",
        body: "We review the details, ask what we need to, and explain the realistic options.",
      },
      {
        icon: "CalendarCheck",
        title: "Schedule Professional Service",
        body: "Once we've spoken, your appointment is confirmed and a licensed technician is assigned.",
      },
      {
        icon: "CheckCircle",
        title: "Enjoy Reliable Results",
        body: "The work is completed, the area is left clean, and we walk you through what was done.",
      },
    ],
  },

  audience: operations.commercialPlumbing
    ? {
        eyebrow: "For property & facility managers",
        // \u00A0 keeps "Around Your Tenants" on one line; the heading breaks
        // after "Works" on mobile.
        heading: "Plumbing That Works Around\u00A0Your\u00A0Tenants",
        body: "Offices, retail, restaurants, and multifamily buildings need plumbing handled without disrupting the people inside. We schedule around operating hours and report back in writing.",
        // Each benefit carries the icon that describes it rather than a
        // repeated checkmark — four identical ticks give the eye nothing to
        // distinguish the rows by.
        benefits: [
          { icon: "CalendarCheck", label: "Scheduling around business and tenant hours" },
          { icon: "Phone", label: "One point of contact across multiple properties" },
          { icon: "FileText", label: "Written scope and pricing before work begins" },
          { icon: "Wrench", label: "Recurring drain and grease-line maintenance" },
        ],
        image: "/images/placeholders/commercial-property.svg",
        imageAlt: "Commercial and multifamily buildings served by our commercial plumbing team",
        cta: { label: "Commercial plumbing", href: "/commercial-plumbing/" },
      }
    : null,

  confidence: {
    heading: "What You Can Count On",
    items: confidenceItems(),
  },

  coverage: {
    eyebrow: "Where we work",
    heading: `Proudly Serving ${location.city} and Nearby Communities`,
    lede: `${clientConfig.region.subheading}`,
    // \u00A0 keeps "Contact us to check availability." on one line, so on
    // mobile the sentence breaks after the question mark rather than mid-
    // instruction.
    reassurance:
      "Not sure whether we serve your area? Contact\u00A0us\u00A0to\u00A0check\u00A0availability.",
    viewAll: { label: "View all service areas", href: "/service-areas/" },
  },

  gallery: {
    eyebrow: "Our approach",
    // Deliberately NOT "recent projects": these are illustrative graphics, and
    // labelling generic artwork as completed customer work would be a fabricated
    // claim (docs/17 §22). Rename once real, cleared job photography exists.
    heading: "A Closer Look at Our Service",
    lede: "The same sequence on every call, from the first look to the final walkthrough.",
    items: [
      {
        src: "/images/approach/diagnose.svg",
        alt: "Illustration of a plumbing inspection checklist and work light",
        caption: "We diagnose before we quote",
      },
      {
        src: "/images/approach/equipment.svg",
        alt: "Illustration of a sewer camera reel and inspection monitor",
        caption: "Camera and locating equipment",
      },
      {
        src: "/images/approach/workmanship.svg",
        alt: "Illustration of a completed pipe run with fittings and a wrench",
        caption: "Repairs made to code",
      },
      {
        src: "/images/approach/clean-finish.svg",
        alt: "Illustration of a clean sink and tidy work area after service",
        caption: "The area left clean",
      },
    ],
  },

  testimonials: {
    eyebrow: "Customer feedback",
    heading: "What Our Customers Say",
    summary: reviewsSummary.count > 0 ? reviewsSummary : null,
    items: reviews,
    cta: { label: "Read more reviews", href: "/reviews/" },
  },

  request: {
    eyebrow: "Request service",
    heading: "Tell Us What's Going On",
    body: "Send a few details and a team member will contact you to confirm timing and next steps. There's no obligation and no pressure.",
    phoneLine: `Prefer to talk now? Call ${phoneDisplay}.`,
    microcopy: "We respect your privacy. Your details are only used to respond to this request.",
  },

  faq: {
    heading: "Frequently Asked Questions",
    lede: "Straight answers to what customers ask before they book.",
    items: homeFaqs,
    cta: { label: "See all FAQs", href: "/faqs/" },
  },

  finalCta: {
    // \u00A0 keeps "Neither Do We." on one line, so the heading breaks after
    // "Don't Wait." instead of orphaning "We." on a line of its own.
    heading: "Plumbing Problems Don't Wait. Neither\u00A0Do\u00A0We.",
    body: `Get honest, professional plumbing service from a licensed local team across ${serviceAreas
      .map((a) => a.name)
      .slice(0, 3)
      .join(", ")} and the surrounding valley.`,
    image: marketing.heroImageSrc,
    microcopy: "Clear next steps. No obligation.",
  },
};

/** Featured services resolved against the catalog; disabled slugs drop out. */
export function featuredServices() {
  const catalog = enabledServices();
  return homepageContent.services.highlights
    .map((h) => {
      const service = catalog.find((s) => s.slug === h.slug);
      return service ? { ...h, service } : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
}
