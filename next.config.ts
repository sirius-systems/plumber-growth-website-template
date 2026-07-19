import type { NextConfig } from "next";

/**
 * Plumber Growth System — website template config.
 *
 * Architecture (see docs/05-technical-architecture.md, ADR-002/ADR-003):
 * - Static export (`output: "export"`) so the public site is a set of static
 *   assets served by Cloudflare Pages. No Next.js server runtime in production.
 * - Dynamic form processing is handled OUTSIDE Next.js by Cloudflare Pages
 *   Functions in `/functions` (see docs/08 + docs/11), which can safely hold
 *   private GHL credentials. Do not add Next.js API routes.
 * - Trailing slashes match the URL convention in docs/04.
 * - Images are unoptimized because the static export has no image server;
 *   the design system (docs/06 §41) uses optimized static assets instead.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Lint is run as its own CI step; do not fail the static export on it.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
