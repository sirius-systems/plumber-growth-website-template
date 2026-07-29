import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/** Service page hero (docs/06 §26). Reuses the shared hero bg + overlay pattern. */
export function ServiceHero({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const { marketing, seo } = clientConfig;
  const subheading = content?.subheading ?? content?.intro ?? svc.shortDescription;
  const bullets = (content?.covers ?? []).slice(0, 4);

  return (
    <section className="hero" style={{ display: "flex", alignItems: "center" }}>
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section__inner" style={{ paddingBlock: "64px" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <nav aria-label="Breadcrumb" style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-on-media)" }}>
              <Link href="/">Home</Link> {" › "}
              <Link href="/services/">Services</Link> {" › "}
              <span aria-current="page">{svc.name}</span>
            </nav>
            <h1 className="heading-accent">
              {svc.name} in {seo.primaryMarket}
            </h1>
            <p style={{ maxWidth: "480px", fontSize: "var(--font-size-lg)", color: "var(--color-text-on-media)" }}>
              {subheading}
            </p>
            <BenefitsList />
            {bullets.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", fontSize: "var(--font-size-sm)" }}>
                {bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "6px", color: "var(--color-text-on-media)" }}>
                    <LucideIcon name="Check" size={14} color="var(--color-accent-500)" style={{ marginTop: "4px", flex: "none" }} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <HeroCtaButtons />
          </div>

          <HeroFormCard heading={`Request ${svc.name}`} defaultService={svc.slug} showLogo />
        </div>
      </div>
    </section>
  );
}
