import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { clientConfig } from "@/config/client";

/** Display face for H1s only (docs/06 typography). Inter remains the body font. */
const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-dm-serif",
});
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  metadataBase: new URL(clientConfig.business.websiteUrl),
  title: {
    default: clientConfig.seo.defaultTitle,
    template: `%s | ${clientConfig.business.publicName}`,
  },
  description: clientConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
  // DEMO deployment: keep the entire fictional site out of search indexes
  // (docs/07 §38 — preview/staging must not be indexable). Remove this global
  // override for a live client and rely on per-page indexation rules instead.
  robots: { index: false, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logos/icons-favicons/las-vegas-pro-plumbing-icon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/images/logos/icons-favicons/las-vegas-pro-plumbing-icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logos/icons-favicons/las-vegas-pro-plumbing-icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/logos/icons-favicons/las-vegas-pro-plumbing-icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/images/logos/icons-favicons/las-vegas-pro-plumbing-icon-180x180.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/** Inject client brand values as CSS custom properties (docs/06 §4, §6). */
const brandStyle = {
  "--brand-primary": clientConfig.branding.primaryColor,
  "--brand-primary-dark": clientConfig.branding.primaryDarkColor,
  "--brand-accent": clientConfig.branding.accentColor,
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSerifDisplay.variable} style={brandStyle}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {/* The demonstration banner is injected at the edge by
            functions/_middleware.ts when DEMO_MODE=true (runtime, no rebuild). */}
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
