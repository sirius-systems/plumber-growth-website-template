import { describe, it, expect } from "vitest";
import { homepageContent, featuredServices, PRIMARY_CTA } from "@/content/homepage";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import { reviewsSummary } from "@/config/reviews";

/**
 * Guards on the homepage content model (docs/17 §22). These are not layout
 * tests — they assert the two properties that make the homepage safe to ship
 * per client: every link resolves, and every claim is backed by config.
 */

const INTERNAL_ROUTES = new Set([
  "/",
  "/services/",
  "/service-areas/",
  "/about/",
  "/reviews/",
  "/faqs/",
  "/contact/",
  "/financing/",
  "/residential-plumbing/",
  "/commercial-plumbing/",
  "/review-feedback/",
]);

/** Every CTA on the page, flattened. */
function allCtas() {
  const c = homepageContent;
  return [
    c.primaryCta,
    c.services.viewAll,
    c.authority.cta,
    c.coverage.viewAll,
    c.testimonials.cta,
    c.faq.cta,
    ...c.intent.cards.map((card) => card.cta),
    ...(c.audience ? [c.audience.cta] : []),
  ];
}

describe("homepage links", () => {
  it("routes every featured service to an enabled catalog page", () => {
    const enabled = new Set(enabledServices().map((s) => s.slug));
    for (const { service } of featuredServices()) {
      expect(enabled.has(service.slug)).toBe(true);
    }
  });

  it("drops highlights whose service is disabled rather than linking to a 404", () => {
    const enabled = new Set(enabledServices().map((s) => s.slug));
    const declared = homepageContent.services.highlights.filter((h) => enabled.has(h.slug));
    expect(featuredServices()).toHaveLength(declared.length);
  });

  it("points every CTA at a real route or the on-page request form", () => {
    for (const cta of allCtas()) {
      const isAnchor = cta.href.startsWith("#");
      expect(isAnchor || INTERNAL_ROUTES.has(cta.href)).toBe(true);
      expect(cta.label.trim().length).toBeGreaterThan(0);
    }
  });

  it("uses the on-page form as the primary conversion target", () => {
    expect(PRIMARY_CTA.href).toBe("#request");
    expect(homepageContent.primaryCta).toBe(PRIMARY_CTA);
  });

  it("links every coverage area that declares a detail page", () => {
    for (const area of clientConfig.serviceAreas) {
      if (area.hasDetailPage) expect(area.slug).toBeTruthy();
    }
  });
});

describe("homepage claims are config-backed", () => {
  it("gates the licence trust point on a configured licence number", () => {
    const licenceClaims = homepageContent.hero.trustPoints.filter((p) =>
      /licen[sc]ed/i.test(p.label),
    );
    expect(licenceClaims.length > 0).toBe(Boolean(clientConfig.credentials.licenseNumber));
  });

  it("gates the emergency trust point on configured emergency service", () => {
    const emergencyClaims = homepageContent.hero.trustPoints.filter((p) =>
      /emergency/i.test(p.label),
    );
    expect(emergencyClaims.length > 0).toBe(
      clientConfig.operations.emergencyServiceAvailable,
    );
  });

  it("gates the financing confidence item on the financing flag", () => {
    const financing = homepageContent.confidence.items.filter((i) => /financing/i.test(i.title));
    expect(financing.length > 0).toBe(clientConfig.operations.financingOffered);
  });

  it("gates the audience band on commercial plumbing", () => {
    expect(homepageContent.audience !== null).toBe(
      clientConfig.operations.commercialPlumbing,
    );
  });

  it("shows a rating only when review data exists, and never rounds it up", () => {
    expect(homepageContent.testimonials.summary !== null).toBe(reviewsSummary.count > 0);
    if (homepageContent.testimonials.summary) {
      expect(homepageContent.testimonials.summary.rating).toBe(reviewsSummary.rating);
      expect(homepageContent.testimonials.summary.count).toBe(reviewsSummary.count);
    }
  });

  it("does not claim a warranty, guarantee, discount, or free estimate in page copy", () => {
    // Scoped to copy this file authors. `faq.items` and `testimonials.items`
    // are excluded on purpose: the FAQ answers carry DISCLAIMERS using these
    // words ("we do not guarantee specific arrival times"), and review text is
    // a verbatim customer quote — neither is a claim the page is making.
    const { faq, testimonials, ...authored } = homepageContent;
    const copy = JSON.stringify({
      ...authored,
      faq: { heading: faq.heading, lede: faq.lede, cta: faq.cta },
      testimonials: {
        eyebrow: testimonials.eyebrow,
        heading: testimonials.heading,
        cta: testimonials.cta,
      },
    }).toLowerCase();

    for (const forbidden of [
      "warranty",
      "guarantee",
      "money back",
      "discount",
      "% off",
      "free estimate",
      "no obligation quote",
    ]) {
      expect(copy).not.toContain(forbidden);
    }
  });

  it("does not present illustrative gallery art as completed customer projects", () => {
    const gallery = homepageContent.gallery;
    const text = [gallery.heading, gallery.eyebrow, ...gallery.items.map((i) => i.caption)]
      .join(" ")
      .toLowerCase();
    expect(text).not.toContain("recent project");
    expect(text).not.toContain("before and after");
    for (const item of gallery.items) {
      expect(item.alt.trim().length).toBeGreaterThan(0);
    }
  });
});
