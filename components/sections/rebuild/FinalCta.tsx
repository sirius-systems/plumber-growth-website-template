import Image from "next/image";
import { clientConfig } from "@/config/client";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/**
 * Closing conversion band (docs/04 §6). Background image + dark overlay, white
 * copy left, request form card right. Embeds the general-quote form.
 *
 * Distinct from the page-opening hero on purpose (`.final-cta`): a deep
 * top-to-bottom scrim instead of the hero's left-to-right gradient, an amber
 * top rule that bookends the stripe at the top of the page, the loose density
 * step, and the shared proof points set as two utility-size columns instead of
 * the hero's stacked base-size list. Same strings, different moment.
 */
export function FinalCta({
  heading = "Ready to get your plumbing problem solved?",
  subtext = "Tell us what's going on and we'll follow up to confirm timing.",
  currentService,
  showServicesLink,
}: {
  heading?: string;
  subtext?: string;
  currentService?: string;
  /** Set false on /services/, where the services link is self-referential. */
  showServicesLink?: boolean;
}) {
  const { marketing } = clientConfig;

  return (
    <section className="hero final-cta">
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section section--loose section__inner">
        <div className="hero-2col">
          <div className="hero-copy">
            <h2 className="display-heading" style={{ marginTop: 0, fontSize: "var(--font-size-3xl)", color: "var(--color-text-on-media)" }}>
              {heading}
            </h2>
            <p style={{ fontSize: "var(--font-size-base)", color: "var(--color-text-on-media)", maxWidth: "var(--measure-copy)" }}>
              {subtext}
            </p>
            <BenefitsList />
            <HeroCtaButtons showServicesLink={showServicesLink} />
          </div>

          <HeroFormCard heading="Request Service" defaultService={currentService} showLogo />
        </div>
      </div>
    </section>
  );
}
