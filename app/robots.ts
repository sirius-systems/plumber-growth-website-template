import type { MetadataRoute } from "next";
import { clientConfig } from "@/config/client";

// Required for `output: export` (docs/05 ADR-002) — emit a static robots.txt.
export const dynamic = "force-static";

/**
 * Robots policy (docs/04 §13, docs/07 §38). Disallows private/confirmation routes;
 * references the sitemap. Note: robots is not a security control (docs/14 §16) —
 * onboarding is protected by real access control, not this file.
 */
export default function robots(): MetadataRoute.Robots {
  const base = clientConfig.business.websiteUrl.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you/", "/review-feedback/", "/client-onboarding/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
