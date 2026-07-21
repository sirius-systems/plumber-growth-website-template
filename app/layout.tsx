import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { clientConfig } from "@/config/client";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { DemoBanner } from "@/components/layout/DemoBanner";
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
    <html lang="en" style={brandStyle}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <DemoBanner />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
