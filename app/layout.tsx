import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { clientConfig } from "@/config/client";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(clientConfig.business.websiteUrl),
  title: {
    default: clientConfig.seo.defaultTitle,
    template: `%s | ${clientConfig.business.publicName}`,
  },
  description: clientConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
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
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
