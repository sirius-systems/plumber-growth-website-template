import type { MetadataRoute } from "next";
import { assertClientConfigReady, clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";

// Required for `output: export` (docs/05 ADR-002) — emit a static sitemap.xml.
export const dynamic = "force-static";

/**
 * XML sitemap (docs/04 §14, docs/07 §37). Only enabled, indexable, canonical
 * routes. Excludes thank-you, review-feedback, and client-onboarding. Fails the
 * build if the client config still holds sentinel values (docs/12 §16).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  assertClientConfigReady();
  const base = clientConfig.business.websiteUrl.replace(/\/$/, "");

  const staticPaths = [
    "/",
    "/services/",
    "/service-areas/",
    "/about/",
    "/reviews/",
    "/faqs/",
    "/contact/",
    "/request-service/",
    "/privacy-policy/",
    "/terms/",
  ];

  if (clientConfig.operations.residentialPlumbing) staticPaths.push("/residential-plumbing/");
  if (clientConfig.operations.commercialPlumbing) staticPaths.push("/commercial-plumbing/");
  if (clientConfig.operations.financingOffered) staticPaths.push("/financing/");
  // NOTE: /emergency-plumbing-request/ is the noindex,follow request FORM page
  // (docs/07 §37, docs/08 §20) — intentionally excluded from the sitemap. The
  // indexable emergency SERVICE page /services/emergency-plumbing/ is included
  // via enabledServices() below.

  const servicePaths = enabledServices()
    .filter((s) => s.indexable)
    .map((s) => `/services/${s.slug}/`);

  // Per-area detail pages (docs/04 §12) — only those with a real detail page.
  const locationPaths = clientConfig.serviceAreas
    .filter((a) => a.hasDetailPage && a.slug)
    .map((a) => `/service-areas/${a.slug}/`);

  return [...staticPaths, ...servicePaths, ...locationPaths].map((path) => ({
    url: `${base}${path}`,
  }));
}
