import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

/**
 * Closing conversion banner (docs/04 §6). Deliberately different from the hero:
 * a deep top-to-bottom scrim instead of the hero's left-to-right gradient, an
 * amber top rule that bookends the stripe at the top of the page, and centered
 * copy instead of the hero's left column.
 *
 * Strong, not loud — no countdown, no scarcity, no invented offer. The
 * reassurance line states only what is true: clear next steps, no obligation.
 */
export function FinalCtaBanner() {
  const { finalCta, primaryCta, phone } = homepageContent;

  return (
    <section className="hero final-cta home-final" aria-labelledby="final-cta-heading">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={finalCta.image}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content section section--loose section__inner">
        <div className="hero-copy home-final__copy">
          <h2 id="final-cta-heading" className="home-final__heading display-heading">
            {finalCta.heading}
          </h2>
          <p className="home-final__body">{finalCta.body}</p>

          <div className="home-final__actions">
            <Button variant="accent" size="lg" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={phone.href}
              aria-label={`Call ${phone.display}`}
            >
              <LucideIcon name="Phone" size={18} />
              Call {phone.display}
            </Button>
          </div>

          <p className="home-final__microcopy">{finalCta.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
