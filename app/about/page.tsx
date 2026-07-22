import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "About Las Vegas Pro Plumbing | Licensed Plumber in Las Vegas, NV",
  description:
    "Las Vegas Pro Plumbing has served the Las Vegas valley since 2013. Licensed, honest pricing, fast response. Meet owner Jon Jones.",
  alternates: { canonical: "/about/" },
};

// Owner name is client-provided demo content (see config header note). Kept as
// page copy rather than config since it appears only on this page.
const OWNER = "Jon Jones";

export default function AboutPage() {
  const { business, credentials, location } = clientConfig;
  const licenseText =
    credentials.licenseNumber && credentials.licenseJurisdiction
      ? `${credentials.licenseJurisdiction} #${credentials.licenseNumber}`
      : null;

  return (
    <>
      <Hero contentClassName="container hero-compact">
        <div className="hero-copy">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1>About {business.publicName}</h1>
          <p style={{ fontSize: "18px" }}>
            {OWNER} founded {business.publicName} in 2013 on a simple idea: treat people honestly
            and do reliable work. {credentials.yearsInBusiness} years later, we&rsquo;re still
            serving the Las Vegas valley the same way.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <a className="btn btn--primary" href={telHref(business.phone)}>
              Call {formatPhoneDisplay(business.phone)}
            </a>
          </div>
        </div>
      </Hero>

      <section className="container section" style={{ maxWidth: "52rem" }}>
        {/* Team photo placeholder, no real person's image is used on the demo. */}
        <div
          role="img"
          aria-label="Team photo coming soon"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "16rem",
            background: "var(--color-background-alt)",
            border: "1px dashed var(--color-border)",
            borderRadius: "var(--radius-md)",
            color: "var(--color-text-muted)",
            margin: "var(--space-6) 0",
          }}
        >
          Photo coming soon
        </div>

        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Meet the owner</h2>
        <p>
          {OWNER} is the founder and lead plumber at {business.publicName}. Nevada licensed and
          hands-on, he built the company around transparent communication and fair pricing, no
          pressure and no surprises on the invoice.
        </p>

        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Licensed &amp; credentialed</h2>
        <p>
          {licenseText
            ? `${business.publicName} holds ${licenseText} and carries appropriate insurance coverage.`
            : `${business.publicName} is fully licensed and insured.`}
        </p>

        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>How we work</h2>
        <ul style={{ color: "var(--color-text-muted)" }}>
          <li>Honest, upfront pricing explained before work begins</li>
          <li>No unnecessary upsells, only what the job actually needs</li>
          <li>Clear explanations of the problem and your options</li>
          <li>Clean work areas and respect for your home or business</li>
        </ul>

        <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Where we work</h2>
        <p>
          We serve the Las Vegas valley including {location.city}, Henderson, North Las Vegas,
          Summerlin, Spring Valley, and Enterprise.
        </p>
      </section>

      <ReviewsSection heading="What our customers say" showSummary={false} limit={2} altBackground />
      <CallToAction />
    </>
  );
}
