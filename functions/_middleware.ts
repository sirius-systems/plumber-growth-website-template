/**
 * Root Pages Functions middleware.
 *
 * Injects the site-wide demonstration banner at the EDGE (runtime), reading the
 * `DEMO_MODE` environment variable via the Cloudflare Pages runtime binding. The
 * public site is a static export (no Next.js server runtime), so build-time React
 * cannot read a runtime binding — this middleware is how the banner is toggled by
 * a Cloudflare env var without a rebuild.
 *
 * Only HTML responses are rewritten; JSON (the form endpoint) and static assets
 * pass through untouched. The injected markup uses the `.demo-banner` class that
 * already ships in the static CSS bundle (app/globals.css).
 */

interface Env {
  DEMO_MODE?: string;
}

const BANNER_HTML =
  '<div class="demo-banner" role="note">⚠ DEMONSTRATION SITE — All business information is fictional. Forms submit to a test environment. Not a real plumbing company.</div>';

class DemoBannerInjector {
  element(element: Element): void {
    // Insert as the first child of <body> so it appears above all page content.
    element.prepend(BANNER_HTML, { html: true });
  }
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const response = await context.next();

  if (context.env.DEMO_MODE !== "true") return response;

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  return new HTMLRewriter().on("body", new DemoBannerInjector()).transform(response);
};
