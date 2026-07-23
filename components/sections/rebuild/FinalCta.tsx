import Image from "next/image";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/**
 * Closing conversion band (docs/04 §6). Background image + dark overlay, white
 * copy left, request form card right. Embeds the general-quote form.
 */
export function FinalCta({
  heading = "Ready to get your plumbing problem solved?",
  subtext = "Tell us what's going on and we'll follow up to confirm timing.",
  currentService,
}: {
  heading?: string;
  subtext?: string;
  currentService?: string;
}) {
  const { business, marketing, credentials } = clientConfig;

  const trust: TrustItem[] = [];
  if (credentials.licenseNumber) trust.push({ icon: "badge-check", label: "Licensed" });
  if (credentials.insured) trust.push({ icon: "shield", label: "Insured" });
  trust.push({ icon: "star", label: `${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count} reviews)` });

  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section section__inner">
        <div className="hero-2col">
          <div className="hero-copy">
            <h2 className="display-heading" style={{ marginTop: 0, fontSize: "var(--font-size-3xl)", color: "#fff" }}>
              {heading}
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.80)", maxWidth: "480px" }}>
              {subtext}
            </p>
            <p style={{ margin: "var(--space-4) 0" }}>
              <a href={telHref(business.phone)} style={{ fontSize: "20px", fontWeight: 700 }}>
                {formatPhoneDisplay(business.phone)}
              </a>
            </p>
            <TrustBar variant="over-media" items={trust} />
          </div>

          <HeroFormCard heading="Request Service" defaultService={currentService} />
        </div>
      </div>
    </section>
  );
}
