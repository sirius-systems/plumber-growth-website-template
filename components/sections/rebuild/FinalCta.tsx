import Image from "next/image";
import { clientConfig } from "@/config/client";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { BenefitsList } from "@/components/ui/BenefitsList";
import { HeroCtaButtons } from "@/components/ui/HeroCtaButtons";

/**
 * Closing conversion band (docs/04 §6). Background image + dark overlay, white
 * copy left, request form card right. Embeds the general-quote form.
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
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section section__inner">
        <div className="hero-2col">
          <div className="hero-copy">
            <h2 className="display-heading" style={{ marginTop: 0, fontSize: "var(--font-size-3xl)", color: "var(--color-text-on-media)" }}>
              {heading}
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-text-on-media)", maxWidth: "480px" }}>
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
