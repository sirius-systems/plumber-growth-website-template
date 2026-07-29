import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import type { ServiceAreaReference } from "@/config/client";
import type { LocationContent } from "@/config/location-content";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/** Location hero (docs/06 §26). Shared hero bg + overlay pattern. */
export function LocationHero({ area, content }: { area: ServiceAreaReference; content?: LocationContent }) {
  const { marketing } = clientConfig;
  const subheading =
    content?.intro ??
    `Fast repairs, same-day service, and emergency plumbing for homes and businesses in ${area.name}.`;
  const neighborhoods = content?.neighborhoods ?? [];
  const shown = neighborhoods.slice(0, 4);


  return (
    <section className="hero" style={{ display: "flex", alignItems: "center" }}>
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section__inner" style={{ paddingBlock: "64px" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "var(--color-text-on-media)" }}>
              <Link href="/">Home</Link> {" › "}
              <Link href="/service-areas/">Service Areas</Link> {" › "}
              <span aria-current="page">{area.name}</span>
            </nav>
            <h1 className="heading-accent">
              Plumbing Services in {area.name}, {area.state}
            </h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "var(--color-text-on-media)" }}>{subheading}</p>
            <BenefitsList />
            {shown.length > 0 && (
              <div style={{ marginTop: "var(--space-4)", fontSize: "14px", color: "var(--color-text-on-media)" }}>
                <span>Serving {area.name} including: </span>
                <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "var(--space-3)", marginTop: "var(--space-2)" }}>
                  {shown.map((n) => (
                    <span key={n} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <LucideIcon name="MapPin" size={13} color="var(--color-accent-500)" />
                      {n}
                    </span>
                  ))}
                  {neighborhoods.length > 4 && <span>+ more neighborhoods</span>}
                </span>
              </div>
            )}
            <HeroCtaButtons />
          </div>

          <HeroFormCard heading={`Get Help in ${area.name}`} showLogo />
        </div>
      </div>
    </section>
  );
}
