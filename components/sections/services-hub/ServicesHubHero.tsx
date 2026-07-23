import Image from "next/image";
import { clientConfig } from "@/config/client";
import { subheading, introParagraph } from "@/content/services-hub";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/** Services hub hero (docs/06 §26). Shared hero bg + overlay; general-quote form. */
export function ServicesHubHero() {
  const { marketing, region } = clientConfig;

  const trustItems: TrustItem[] = [
    { icon: "badge-check", label: "Licensed" },
    { icon: "shield", label: "Insured" },
    { icon: "map-pin", label: region.name },
  ];

  return (
    <section className="hero" style={{ display: "flex", alignItems: "center" }}>
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section__inner" style={{ paddingBlock: "64px" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <p className="hero-eyebrow" style={{ margin: 0, fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-on-media)" }}>
              Licensed Plumbing · {region.name}
            </p>
            <h1 className="heading-accent">Plumbing Services in {region.name}</h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "var(--color-text-on-media)" }}>{subheading}</p>
            <p style={{ maxWidth: "480px", fontSize: "15px", lineHeight: 1.75, color: "var(--color-text-on-media)" }}>{introParagraph}</p>
            <TrustBar variant="over-media" items={trustItems} />
          </div>

          <HeroFormCard heading="Request Plumbing Service" showLogo />
        </div>
      </div>
    </section>
  );
}
