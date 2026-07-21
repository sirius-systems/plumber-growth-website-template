import Link from "next/link";
import { enabledServices, type PlumbingService } from "@/config/services";
import { CardMedia, ServiceIcon } from "@/components/sections/CardMedia";

interface ServiceGridProps {
  heading?: string;
  intro?: string;
  /** Defaults to all enabled services. */
  services?: PlumbingService[];
  /** Render on the alternate background (e.g. when the previous band is white). */
  altBackground?: boolean;
  headingLevel?: "h2" | "h3";
}

/**
 * Service grid (docs/06 §13, §25). Config-driven cards for enabled services with
 * a title, short description, and a link to the service page. Only enabled
 * services ever appear (docs/04 §33).
 */
export function ServiceGrid({
  heading = "Our Plumbing Services",
  intro,
  services = enabledServices(),
  altBackground = false,
  headingLevel = "h2",
}: ServiceGridProps) {
  const Heading = headingLevel;

  return (
    <section
      className="section"
      style={altBackground ? { background: "var(--color-background-alt)" } : undefined}
    >
      <div className="container">
        <Heading style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>{heading}</Heading>
        {intro && (
          <p style={{ maxWidth: "var(--measure-reading)", color: "var(--color-text-muted)" }}>
            {intro}
          </p>
        )}
        <ul
          style={{
            display: "grid",
            gap: "var(--space-6)",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            listStyle: "none",
            padding: 0,
            margin: 0,
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
                overflow: "hidden",
              }}
            >
              <CardMedia>
                <ServiceIcon slug={s.slug} />
              </CardMedia>
              <div style={{ padding: "var(--space-6)" }}>
                <h3 style={{ marginTop: 0, fontSize: "var(--font-size-lg)" }}>
                  <Link href={`/services/${s.slug}/`}>{s.name}</Link>
                </h3>
                <p style={{ color: "var(--color-text-muted)", marginBottom: 0 }}>
                  {s.shortDescription}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
