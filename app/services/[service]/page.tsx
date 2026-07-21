import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { clientConfig } from "@/config/client";
import { enabledServices, findEnabledService, SERVICES } from "@/config/services";
import { SERVICE_CONTENT } from "@/config/service-content";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceAreaList } from "@/components/sections/ServiceAreaList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CallToAction } from "@/components/sections/CallToAction";
import { EmergencySafetyNotice } from "@/components/sections/EmergencySafetyNotice";

interface Params {
  service: string;
}

/** Only enabled services are statically generated; others 404 (docs/04 §13, §33). */
export function generateStaticParams(): Params[] {
  return enabledServices().map((s) => ({ service: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;
  const svc = findEnabledService(service);
  if (!svc) return {};
  const content = SERVICE_CONTENT[svc.slug];
  const description = content
    ? `${content.intro} ${clientConfig.business.publicName} serves ${clientConfig.seo.primaryMarket}. Call ${formatPhoneDisplay(clientConfig.business.phone)}.`
    : `${svc.shortDescription} ${clientConfig.business.publicName} serves ${clientConfig.seo.primaryMarket}.`;
  return {
    title: `${svc.name} in ${clientConfig.seo.primaryMarket}`,
    description: description.slice(0, 160),
    alternates: { canonical: `/services/${svc.slug}/` },
  };
}

/** Service detail (docs/04 §8, docs/08 §9.7 preselection, T3). */
export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service } = await params;
  const svc = findEnabledService(service);
  if (!svc) notFound();

  const content = SERVICE_CONTENT[svc.slug];
  const isEmergency = svc.slug === "emergency-plumbing";
  const { business } = clientConfig;

  const related = svc.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug && s.enabled))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Two-column hero: content left, request form right (stacks on mobile). */}
      <section className="section">
        <div className="container container--wide">
          <div className="hero-grid">
            <div>
              <nav aria-label="Breadcrumb" style={{ fontSize: "0.875rem" }}>
                <Link href="/">Home</Link> {" › "}
                <Link href="/services/">Services</Link> {" › "}
                <span aria-current="page">{svc.name}</span>
              </nav>

              <h1 className="heading-accent" style={{ fontSize: "var(--font-size-3xl)" }}>
                {svc.name} in {clientConfig.seo.primaryMarket}
              </h1>
              <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
                {content?.intro ?? svc.shortDescription}
              </p>

              {isEmergency && (
                <div style={{ margin: "var(--space-6) 0" }}>
                  <EmergencySafetyNotice />
                </div>
              )}

              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <a className="btn btn--primary" href={telHref(business.phone)}>
                  Call {formatPhoneDisplay(business.phone)}
                </a>
                {isEmergency && (
                  <Link className="btn btn--secondary" href="/emergency-plumbing-request/">
                    Submit Emergency Request
                  </Link>
                )}
              </div>
            </div>

            <div className="hero-form-card">
              <h2 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>
                Request {svc.name.toLowerCase()}
              </h2>
              <p style={{ color: "var(--color-text-muted)", marginTop: 0 }}>
                Submitting is a request, not a confirmed appointment until we contact you.
              </p>
              <Suspense fallback={<p>Loading form…</p>}>
                <GeneralQuoteForm paired defaultService={svc.slug} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Detail content below the hero. */}
      {(content || related.length > 0) && (
        <section className="container section">
          {content && (
            <>
              <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
                What this service covers
              </h2>
              <p style={{ maxWidth: "var(--measure-reading)" }}>{content.overview}</p>
              <ul style={{ color: "var(--color-text-muted)" }}>
                {content.covers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Common problems we address</h2>
              <ul style={{ color: "var(--color-text-muted)" }}>
                {content.problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {related.length > 0 && (
            <>
              <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Related services</h2>
              <ul>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/services/${r.slug}/`}>{r.name}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      <WhyChooseUs />
      <ProcessSteps />
      <ServiceAreaList
        intro={`We provide ${svc.name.toLowerCase()} across Las Vegas and the surrounding valley.`}
      />
      {content && (
        <FAQAccordion
          items={content.faqs}
          heading={`${svc.name}, Frequently Asked Questions`}
          altBackground
        />
      )}
      <CallToAction
        heading={isEmergency ? "Need emergency plumbing help?" : `Request ${svc.name}`}
        primaryHref={isEmergency ? "/emergency-plumbing-request/" : `/request-service/?service=${svc.slug}`}
        primaryLabel={isEmergency ? "Submit Emergency Request" : `Request ${svc.name}`}
      />
    </>
  );
}
