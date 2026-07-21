import type { Metadata } from "next";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import { LOCATION_CONTENT } from "@/config/location-content";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { CardMedia, LocationIcon } from "@/components/sections/CardMedia";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Las Vegas Pro Plumbing serves Las Vegas, North Las Vegas, Henderson, Summerlin, Spring Valley, and Enterprise, NV.",
  alternates: { canonical: "/service-areas/" },
};

/** Service-areas hub (docs/04 §12). Links to per-area detail pages; no doorway pages. */
export default function ServiceAreasPage() {
  const areas = clientConfig.serviceAreas;

  return (
    <>
      <section className="container section">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
        <h1>Plumbing Services in the Las Vegas Area</h1>
        <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
          {clientConfig.business.publicName} serves communities across the Las Vegas valley. Choose
          your area to learn more, or call{" "}
          <a href={`tel:${clientConfig.business.phone.replace(/[^\d+]/g, "")}`}>
            (888) 308-3262
          </a>{" "}
          to confirm availability in your neighborhood.
        </p>
        {clientConfig.operations.twentyFourSevenService && (
          <p style={{ color: "var(--color-text-muted)" }}>
            Emergency plumbing help is available 24/7 across every area we serve.
          </p>
        )}

        <ul
          style={{
            display: "grid",
            gap: "var(--space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            listStyle: "none",
            padding: 0,
            marginTop: "var(--space-8)",
          }}
        >
          {areas.map((area) => {
            const content = area.slug ? LOCATION_CONTENT[area.slug] : undefined;
            const href = area.hasDetailPage && area.slug ? `/service-areas/${area.slug}/` : undefined;
            return (
              <li
                key={area.name}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)",
                  overflow: "hidden",
                }}
              >
                <CardMedia>
                  <LocationIcon />
                </CardMedia>
                <div style={{ padding: "var(--space-6)" }}>
                  <h2 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>
                    {href ? (
                      <Link href={href}>
                        {area.name}, {area.state}
                      </Link>
                    ) : (
                      `${area.name}, ${area.state}`
                    )}
                  </h2>
                  {content && (
                    <p style={{ color: "var(--color-text-muted)", marginBottom: 0 }}>
                      {content.intro}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <CallToAction />
    </>
  );
}
