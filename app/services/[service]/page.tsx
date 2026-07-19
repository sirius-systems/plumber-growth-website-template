import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clientConfig } from "@/config/client";
import { enabledServices, findEnabledService, SERVICES } from "@/config/services";

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
  return {
    title: `${svc.name} in ${clientConfig.seo.primaryMarket}`,
    description: `${svc.shortDescription} ${clientConfig.business.publicName} serves ${clientConfig.seo.primaryMarket}.`,
    alternates: { canonical: `/services/${svc.slug}/` },
  };
}

/** Service detail (docs/04 §8, docs/08 §9.7 preselection, T3). */
export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service } = await params;
  const svc = findEnabledService(service);
  if (!svc) notFound();

  const related = svc.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug && s.enabled))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <article className="container section">
      <nav aria-label="Breadcrumb" style={{ fontSize: "0.875rem" }}>
        <Link href="/">Home</Link> {" › "}
        <Link href="/services/">Services</Link> {" › "}
        <span aria-current="page">{svc.name}</span>
      </nav>

      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>
        {svc.name} in {clientConfig.seo.primaryMarket}
      </h1>
      <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
        {svc.shortDescription}
      </p>

      <p>
        {/* Service preselection via approved query param (docs/08 §9.7). */}
        <Link className="btn btn--primary" href={`/request-service/?service=${svc.slug}`}>
          Request {svc.name}
        </Link>
      </p>

      {related.length > 0 && (
        <section>
          <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Related services</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}/`}>{r.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
