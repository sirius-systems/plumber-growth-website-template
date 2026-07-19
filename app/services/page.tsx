import type { Metadata } from "next";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";

export const metadata: Metadata = {
  title: `Plumbing Services in ${clientConfig.seo.primaryMarket}`,
  description: `Explore the plumbing services ${clientConfig.business.publicName} provides in ${clientConfig.seo.primaryMarket}.`,
  alternates: { canonical: "/services/" },
};

/** Services hub (docs/04 §7, T2). Hub-and-spoke to enabled service pages. */
export default function ServicesHubPage() {
  const services = enabledServices();

  return (
    <section className="container section">
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Plumbing Services</h1>
      <p style={{ maxWidth: "var(--measure-reading)" }}>
        {clientConfig.business.publicName} provides the plumbing services below across{" "}
        {clientConfig.seo.primaryMarket}. Choose a service to learn more or request help.
      </p>
      <ul
        style={{
          display: "grid",
          gap: "var(--space-6)",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          listStyle: "none",
          padding: 0,
        }}
      >
        {services.map((s) => (
          <li key={s.slug}>
            <h2 style={{ fontSize: "var(--font-size-lg)" }}>
              <Link href={`/services/${s.slug}/`}>{s.name}</Link>
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>{s.shortDescription}</p>
          </li>
        ))}
      </ul>
      <p>
        <Link className="btn btn--primary" href="/request-service/">
          Request Service
        </Link>
      </p>
    </section>
  );
}
