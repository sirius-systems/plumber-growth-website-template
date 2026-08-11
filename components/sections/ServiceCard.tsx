import Link from "next/link";
import Image from "next/image";
import type { PlumbingService } from "@/config/services";

/** Shared placeholder until per-service client images are provided in config. */
const SERVICE_CARD_PLACEHOLDER = "/images/placeholders/service-card.svg";

/**
 * Service card (docs/06 §25). One component used on every surface: 7:4 image on
 * top (full-bleed to the card edges, top corners rounded via the card's
 * overflow), then name, description, and a CTA to the service page.
 */
export function ServiceCard({ service }: { service: PlumbingService }) {
  const src = service.image ?? SERVICE_CARD_PLACEHOLDER;
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
          alt={`${service.name} plumbing service`}
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
        <h3 style={{ margin: 0, fontSize: "var(--font-size-xl)" }}>
          <Link href={`/services/${service.slug}/`}>{service.name}</Link>
        </h3>
        <p style={{ color: "var(--color-text-muted)", margin: 0 }}>{service.shortDescription}</p>
        {/* Card action (docs/06 §25). inline-flex + min-height gives the link a
            real hit area instead of the bare ~20px text box it had. */}
        <Link
          href={`/services/${service.slug}/`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "fit-content",
            minHeight: "var(--space-10)",
            marginTop: "var(--space-1)",
            fontWeight: 600,
          }}
        >
          View service →
        </Link>
      </div>
    </article>
  );
}
