import Link from "next/link";
import { clientConfig } from "@/config/client";
import { Button } from "@/components/ui/Button";

interface ServiceAreaListProps {
  heading?: string;
  intro?: string;
  altBackground?: boolean;
}

/**
 * Service-area summary (docs/06 §42 ServiceAreaList, docs/04 §27). Lists verified
 * service areas from config and links to detail pages where they exist. Avoids
 * long unstructured city lists (docs/07 §11).
 */
export function ServiceAreaList({
  heading = "Areas We Serve",
  intro,
  altBackground = false,
}: ServiceAreaListProps) {
  const { serviceAreas } = clientConfig;

  return (
    <section
      className="section"
      style={altBackground ? { background: "var(--color-background-alt)" } : undefined}
    >
      <div className="container">
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>{heading}</h2>
        {intro && (
          <p style={{ maxWidth: "var(--measure-reading)", color: "var(--color-text-muted)" }}>
            {intro}
          </p>
        )}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            listStyle: "none",
            padding: 0,
            margin: "0 0 var(--space-6)",
          }}
        >
          {serviceAreas.map((area) => (
            <li key={area.name}>
              {area.hasDetailPage && area.slug ? (
                <Button
                  variant="secondary"
                  href={`/service-areas/${area.slug}/`}
                  style={{ minHeight: "auto", padding: "var(--space-2) var(--space-4)" }}
                >
                  {area.name}
                </Button>
              ) : (
                <span
                  style={{
                    display: "inline-block",
                    padding: "var(--space-2) var(--space-4)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {area.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <Link href="/service-areas/" style={{ display: "inline-flex", alignItems: "center", minHeight: "var(--space-6)" }}>
          View all service areas →
        </Link>
      </div>
    </section>
  );
}
