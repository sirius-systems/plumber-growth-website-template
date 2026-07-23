import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/** Service page hero (docs/06 §26). Reuses the shared hero bg + overlay pattern. */
export function ServiceHero({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const { marketing, seo, credentials, operations } = clientConfig;
  const subheading = content?.subheading ?? content?.intro ?? svc.shortDescription;
  const trust: TrustItem[] = [
    { icon: "badge-check", label: "Licensed" },
    { icon: "shield", label: "Insured" },
  ];
  if (operations.emergencyServiceAvailable) trust.push({ icon: "clock", label: "Same-day service available" });
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
            <nav aria-label="Breadcrumb" style={{ fontSize: "var(--font-size-xs)", color: "rgba(255,255,255,0.90)" }}>
              <Link href="/">Home</Link> {" › "}
              <Link href="/services/">Services</Link> {" › "}
              <span aria-current="page">{svc.name}</span>
            </nav>
            <h1 className="heading-accent">
              {svc.name} in {seo.primaryMarket}
            </h1>
            <p style={{ maxWidth: "480px", fontSize: "var(--font-size-lg)", color: "rgba(255,255,255,0.85)" }}>
              {subheading}
            </p>
            <TrustBar variant="over-media" items={trust} />
            {bullets.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", fontSize: "var(--font-size-sm)" }}>
                {bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "6px", color: "rgba(255,255,255,0.85)" }}>
                    <LucideIcon name="Check" size={14} color="var(--color-accent-500)" style={{ marginTop: "4px", flex: "none" }} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <HeroFormCard heading={`Request ${svc.name}`} defaultService={svc.slug} />
        </div>
      </div>
    </section>
  );
}
