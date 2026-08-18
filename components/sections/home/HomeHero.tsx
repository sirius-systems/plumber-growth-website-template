import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { TrustBar } from "@/components/ui/TrustBar";

/**
 * Homepage hero (docs/06 §26). Full-bleed image, dark scrim, single left-aligned
 * copy column: eyebrow, one H1, value proposition, primary + secondary CTA,
 * reassurance microcopy, then the config-gated trust row.
 *
 * The headline is split on its first colon so the qualifier sets in amber below
 * the statement — an editorial two-tone H1 that still comes from one config
 * string (`marketing.heroHeadline`). A headline with no colon renders as one
 * line, so this degrades cleanly for any client.
 *
 * There is no form in this hero: the page's capture form is the dedicated
 * `#request` section, which every primary CTA on the page targets.
 */
export function HomeHero() {
  const { hero, primaryCta, phone } = homepageContent;

  const [statement, ...rest] = hero.headline.split(":");
  const qualifier = rest.join(":").trim();

  return (
    <section className="hero home-hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="hero-overlay home-hero__overlay" aria-hidden="true" />

      <div className="hero-content section__inner">
        <div className="hero-copy home-hero__copy">
          <p className="home-eyebrow home-eyebrow--on-media">{hero.eyebrow}</p>

          <h1 className="home-hero__headline">
            {statement}
            {qualifier && (
              <>
                <br />
                <span className="home-hero__headline-accent">{qualifier}</span>
              </>
            )}
          </h1>

          <p className="home-hero__lede">{hero.subheadline}</p>

          <div className="home-hero__actions">
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

          <p className="home-hero__microcopy">{hero.microcopy}</p>

          {/* TrustBar sets `margin: 0` and centred justification inline, so the
              hero's left-aligned placement has to be passed as style, not a
              class — an inline style cannot be beaten by a stylesheet rule. */}
          <TrustBar
            items={hero.trustPoints}
            variant="over-media"
            style={{ marginTop: "var(--space-8)", justifyContent: "flex-start" }}
          />
        </div>
      </div>
    </section>
  );
}
