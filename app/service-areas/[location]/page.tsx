import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { clientConfig } from "@/config/client";
import { findEnabledService } from "@/config/services";
import { LOCATION_CONTENT } from "@/config/location-content";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";
import { TrustBar } from "@/components/sections/TrustBar";
import { CallToAction } from "@/components/sections/CallToAction";

interface Params {
  location: string;
}

const detailAreas = () =>
  clientConfig.serviceAreas.filter((a) => a.hasDetailPage && a.slug);

/** Only service areas with a detail page are generated; others 404 (docs/04 §13). */
export function generateStaticParams(): Params[] {
  return detailAreas().map((a) => ({ location: a.slug as string }));
}

export const dynamicParams = false;

function findArea(slug: string) {
  return detailAreas().find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { location } = await params;
  const area = findArea(location);
  if (!area) return {};
  return {
    title: `Plumber in ${area.name}, ${area.state}`,
    description: `Las Vegas Pro Plumbing provides plumbing services in ${area.name}, ${area.state} including emergency plumbing, drain cleaning, water heater repair, and more.`,
    alternates: { canonical: `/service-areas/${area.slug}/` },
  };
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { location } = await params;
  const area = findArea(location);
  if (!area) notFound();

  const { business } = clientConfig;
  const content = LOCATION_CONTENT[location];
  const featured = (content?.featuredServices ?? [])
    .map((slug) => findEnabledService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Two-column hero: content left, request form right (stacks on mobile). */}
      <section className="section">
        <div className="container container--wide">
          <div className="hero-grid">
            <div>
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Service Areas", href: "/service-areas/" },
                  { label: area.name },
                ]}
              />
              <h1 className="heading-accent" style={{ fontSize: "var(--font-size-3xl)" }}>
                Plumber in {area.name}, {area.state}
              </h1>
              {content && (
                <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
                  {content.intro}
                </p>
              )}
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <a className="btn btn--primary" href={telHref(business.phone)}>
                  Call {formatPhoneDisplay(business.phone)}
                </a>
              </div>
            </div>

            <div className="hero-form-card">
              <h2 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>Request service</h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: 0 }}>
                Serving {area.name} and the surrounding valley. Submitting is a request, not a
                confirmed appointment until we contact you.
              </p>
              <Suspense fallback={<p>Loading form…</p>}>
                <GeneralQuoteForm paired />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Location detail below the hero. */}
      <section className="container section">
        {content?.body.map((para) => (
          <p key={para.slice(0, 24)} style={{ maxWidth: "var(--measure-reading)" }}>
            {para}
          </p>
        ))}

        {content && content.neighborhoods.length > 0 && (
          <p style={{ color: "var(--color-text-muted)" }}>
            <strong>Areas we serve nearby:</strong> {content.neighborhoods.join(" · ")}
          </p>
        )}

        {featured.length > 0 && (
          <>
            <h2 style={{ fontSize: "var(--font-size-2xl)" }}>
              Popular plumbing services in {area.name}
            </h2>
            <ul>
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`}>{s.name}</Link>, {s.shortDescription}
                </li>
              ))}
            </ul>
          </>
        )}

        <p style={{ marginTop: "var(--space-6)" }}>
          <Link href="/service-areas/">← All service areas</Link>
        </p>
      </section>

      <CallToAction
        heading={`Need a plumber in ${area.name}?`}
        body={`Request service online or call and we'll confirm current availability in ${area.name}.`}
      />
    </>
  );
}
