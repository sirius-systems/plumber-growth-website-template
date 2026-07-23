import Image from "next/image";
import { clientConfig } from "@/config/client";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";

const DEFAULT_SUBTITLE =
  "Submitting is a request, not a confirmed appointment until we contact you.";

/**
 * Shared hero form card. Wraps the GeneralQuoteForm with a uniform heading and
 * subtitle treatment so the card renders identically in every page hero
 * (docs/06 form consistency). Heading text stays page-specific; its size,
 * weight, alignment, color, and the subtitle are fixed here so every page
 * inherits the same look automatically.
 */
export function HeroFormCard({
  heading,
  subtitle = DEFAULT_SUBTITLE,
  defaultService,
  showLogo = false,
}: {
  heading: string;
  subtitle?: string;
  defaultService?: string;
  /** Opt-in brand logo above the heading. Off by default; enabled for the FinalCta. */
  showLogo?: boolean;
}) {
  const { branding } = clientConfig;

  return (
    <div className="hero-form-card">
      {showLogo && branding.logoSrc && (
        <Image
          src={branding.logoSrc}
          alt={branding.logoAlt}
          width={1200}
          height={360}
          style={{
            display: "block",
            width: "auto",
            height: "auto",
            maxWidth: "120px",
            margin: "0 auto var(--space-3)",
          }}
        />
      )}
      <h2
        style={{
          marginTop: 0,
          fontSize: "var(--font-size-2xl)",
          fontWeight: 800,
          textAlign: "center",
          color: "var(--color-primary-900)",
        }}
      >
        {heading}
      </h2>
      <p style={{ marginTop: 0, textAlign: "center", color: "var(--color-text-muted)" }}>
        {subtitle}
      </p>
      <GeneralQuoteForm paired defaultService={defaultService} />
    </div>
  );
}
