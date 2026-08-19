import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { coverIcon } from "@/lib/utilities/service-icons";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/**
 * Service page hero (docs/06 §26). Reuses the shared hero bg + overlay pattern.
 *
 * Restructured for hierarchy only — every string, list, link and component here
 * is the same as before: breadcrumb, `{svc.name} in {seo.primaryMarket}` H1, the
 * `subheading ?? intro ?? shortDescription` fallback chain, the first four
 * `covers` bullets, BenefitsList, HeroCtaButtons, and the request form card.
 *
 * What changed: the covers bullets set two-up instead of a single ladder, and
 * the trust points render as a ruled band beneath the CTAs rather than a
 * stacked list (`.svc-hero__trust`). Layout lives in globals.css.
 *
 * Sizing and scrim are the shared `.hero--tall` + `.hero-overlay--deep` classes,
 * the same pair the homepage hero uses, so the two heroes cannot drift apart.
 * They replace the inline `display/alignItems` and the fixed
 * `paddingBlock: var(--space-16)`, which applied identically at every width
 * instead of following the section-rhythm tokens.
 */
export function ServiceHero({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const { marketing, seo } = clientConfig;
  const subheading = content?.subheading ?? content?.intro ?? svc.shortDescription;
  const bullets = (content?.covers ?? []).slice(0, 4);

  return (
    <section className="hero hero--tall">
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay hero-overlay--deep" aria-hidden="true" />
      <div className="hero-content section__inner">
        <div className="hero-2col">
          <div className="hero-copy svc-hero__copy">
            <nav aria-label="Breadcrumb" className="breadcrumb" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-on-media)" }}>
              <Link href="/">Home</Link> {" › "}
              <Link href="/services/">Services</Link> {" › "}
              <span aria-current="page">{svc.name}</span>
            </nav>
            <h1 className="heading-accent">
              {svc.name} in {seo.primaryMarket}
            </h1>
            <p className="svc-hero__lede">{subheading}</p>

            {bullets.length > 0 && (
              <ul className="svc-hero__covers">
                {bullets.map((b) => (
                  <li key={b}>
                    <LucideIcon
                      name={coverIcon(b)}
                      size={16}
                      color="var(--color-accent-500)"
                      style={{ marginTop: "var(--space-1)", flex: "none" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <HeroCtaButtons />
            <BenefitsList className="svc-hero__trust" />
          </div>

          <HeroFormCard heading={`Request ${svc.name}`} defaultService={svc.slug} showLogo />
        </div>
      </div>
    </section>
  );
}
