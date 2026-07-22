import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";

/** Service page hero (docs/06 §26). Reuses the shared hero bg + overlay pattern. */
export function ServiceHero({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const { marketing, seo, credentials, operations } = clientConfig;
  const subheading = content?.subheading ?? content?.intro ?? svc.shortDescription;
  const trust = ["Licensed", "Insured"];
  if (operations.emergencyServiceAvailable) trust.push("Same-day service available");
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
            <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "rgba(255,255,255,0.60)" }}>
              <Link href="/">Home</Link> {" › "}
              <Link href="/services/">Services</Link> {" › "}
              <span aria-current="page">{svc.name}</span>
            </nav>
            <h1 className="heading-accent">
              {svc.name} in {seo.primaryMarket}
            </h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "rgba(255,255,255,0.85)" }}>
              {subheading}
            </p>
            <p
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "var(--space-3)",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {trust.map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <LucideIcon name="CheckCircle" size={14} color="var(--color-accent-500)" />
                  {t}
                </span>
              ))}
            </p>
            {bullets.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", fontSize: "14px" }}>
                {bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "6px", color: "rgba(255,255,255,0.85)" }}>
                    <LucideIcon name="Check" size={14} color="var(--color-accent-500)" style={{ marginTop: "4px", flex: "none" }} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="hero-form-card">
            <h2 style={{ marginTop: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-primary-900)" }}>
              Request {svc.name}
            </h2>
            <GeneralQuoteForm paired defaultService={svc.slug} />
          </div>
        </div>
      </div>
    </section>
  );
}
