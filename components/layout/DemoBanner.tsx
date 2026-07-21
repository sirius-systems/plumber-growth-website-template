/**
 * Site-wide demonstration banner (docs/17 §22, docs/07 §32).
 *
 * Renders ONLY when the `DEMO_MODE` build/environment variable is exactly
 * "true". On this static export the value is read at build time, so the demo
 * deployment must set `DEMO_MODE=true` (e.g. a Cloudflare Pages environment
 * variable) for the banner to appear. When absent, nothing renders and the
 * template behaves as a normal client site.
 *
 * The banner is the primary disclosure that all business data, reviews, and
 * ratings on the demo are illustrative.
 */
export function DemoBanner() {
  if (process.env.DEMO_MODE !== "true") return null;

  return (
    <div className="demo-banner" role="note">
      ⚠ DEMONSTRATION SITE — All business information is fictional. Forms submit to a
      test environment. Not a real plumbing company.
    </div>
  );
}
