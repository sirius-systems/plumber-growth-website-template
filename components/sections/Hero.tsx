import type { ReactNode } from "react";
import Image from "next/image";

/** Shared hero background placeholder until a client photo is provided. */
const HERO_PLACEHOLDER = "/images/hero-placeholder.svg";

interface HeroProps {
  /** Classes for the inner content container (e.g. "container container--wide"). */
  contentClassName?: string;
  /** Background image src; falls back to the shared placeholder. */
  image?: string | null;
  children: ReactNode;
}

/**
 * Hero shell (docs/06 §26): full-bleed background image with a dark overlay
 * gradient; children render above the overlay. The image is decorative
 * (empty alt) — the H1 carries the page's accessible heading.
 */
export function Hero({ contentClassName = "container", image, children }: HeroProps) {
  return (
    <section className="hero section">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={image ?? HERO_PLACEHOLDER}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className={`hero-content ${contentClassName}`}>{children}</div>
    </section>
  );
}
