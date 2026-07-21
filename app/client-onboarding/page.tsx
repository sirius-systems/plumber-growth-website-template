import type { Metadata } from "next";
import { WebsiteOnboardingForm } from "@/components/forms/WebsiteOnboardingForm";

/**
 * Client Onboarding page (docs/04 §22). noindex,nofollow and excluded from nav,
 * footer, and sitemap — reached via a direct secure link during fulfillment
 * (robots is not the access control; docs/14 §16). This form is for NEW Plumber
 * Growth System clients, not customers of the plumbing business.
 */
export const metadata: Metadata = {
  title: "Website Onboarding",
  robots: { index: false, follow: false },
  alternates: { canonical: "/client-onboarding/" },
};

export default function ClientOnboardingPage() {
  return (
    <section className="container section" style={{ maxWidth: "48rem" }}>
      <h1>
        Plumber Growth System, Website Onboarding
      </h1>
      <p style={{ fontSize: "var(--font-size-lg)" }}>
        This form is for new Plumber Growth System clients setting up their website. If you are a
        homeowner or business looking for plumbing service, please use the{" "}
        <a href="/request-service/">Request Service</a> form instead.
      </p>

      <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Before you start</h2>
      <ul style={{ color: "var(--color-text-muted)" }}>
        <li>
          <strong>Logo:</strong> you don&rsquo;t upload files here. After you submit, we&rsquo;ll
          send a secure link for your logo and brand assets.
        </li>
        <li>
          <strong>No passwords:</strong> never share passwords through this form. We will never ask
          for them.
        </li>
        <li>
          <strong>Accuracy:</strong> the details you provide become your published business
          information, so please double-check them.
        </li>
      </ul>

      <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Your details</h2>
      <WebsiteOnboardingForm />

      <h2 style={{ fontSize: "var(--font-size-2xl)" }}>What happens next</h2>
      <p style={{ color: "var(--color-text-muted)" }}>
        Once you submit, the Sirius Systems team will review your information and follow up within
        one business day with next steps, including the secure link for your logo and assets.
      </p>
    </section>
  );
}
