import Link from "next/link";
import { clientConfig } from "@/config/client";
import { enabledServices } from "@/config/services";
import { telHref } from "@/lib/utilities/format";

/** Home (docs/04 §6, T1). Hero + primary services + conversion band. */
export default function HomePage() {
  const { business, seo } = clientConfig;
  const services = enabledServices();

  return (
    <>
      <section className="container section">
        <p style={{ color: "var(--color-text-muted)", margin: 0 }}>
          Plumbing services in {seo.primaryMarket}
        </p>
        <h1 style={{ fontSize: "var(--font-size-4xl)", maxWidth: "20ch" }}>
          Turn more plumbing calls and website visitors into booked jobs.
        </h1>
        <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
          {business.description}
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Link className="btn btn--primary" href="/request-service/">
            Request Service
          </Link>
          <a className="btn btn--secondary" href={telHref(business.phone)}>
            Call now
          </a>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-background-alt)" }}
      >
        <div className="container">
          <h2 style={{ fontSize: "var(--font-size-2xl)" }}>Our plumbing services</h2>
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
              <li
                key={s.slug}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)",
                  padding: "var(--space-6)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                </h3>
                <p style={{ color: "var(--color-text-muted)" }}>{s.shortDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
