import Link from "next/link";
import Image from "next/image";
import type { ServiceAreaReference } from "@/config/client";
import { LOCATION_CONTENT } from "@/config/location-content";

/** Shared placeholder (distinct from the service card) until client images exist. */
const LOCATION_CARD_PLACEHOLDER = "/images/placeholders/location-card.svg";

/**
 * Location / service-area card (docs/06 §25). One component: 7:4 image on top,
 * then location name, service-area context, and a CTA to the area page.
 */
export function LocationCard({ area }: { area: ServiceAreaReference }) {
  const src = area.image ?? LOCATION_CARD_PLACEHOLDER;
  const content = area.slug ? LOCATION_CONTENT[area.slug] : undefined;
  const href = area.hasDetailPage && area.slug ? `/service-areas/${area.slug}/` : undefined;
  const description =
    area.hubDescription ??
    content?.intro ??
    `Plumbing service across ${area.name}, ${area.state} and nearby.`;

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
        // The card sits inside a `display:flex` <li>. Without an explicit width
        // it is sized by its own content, so on mobile — where the grid gives
        // each <li> the full column — a short card shrank to ~233px of a 358px
        // column and sat flush left. 100% makes every card fill (and therefore
        // centre in) its column, which is what .service-grid already intended.
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "7 / 4" }}>
        <Image
          src={src}
          alt={`${area.name} plumbing service area`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)",
          padding: "var(--space-5)",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "var(--font-size-lg)" }}>
          {href ? (
            <Link href={href}>
              {area.name}, {area.state}
            </Link>
          ) : (
            `${area.name}, ${area.state}`
          )}
        </h3>
        <p style={{ color: "var(--color-text-muted)", margin: 0 }}>{description}</p>
        {href && (
          <Link href={href} style={{ marginTop: "var(--space-2)", fontWeight: 600 }}>
            View service area →
          </Link>
        )}
      </div>
    </article>
  );
}
