import Image from "next/image";
import { clientConfig } from "@/config/client";
import type { ServiceAreaReference } from "@/config/client";
import type { LocationContent } from "@/config/location-content";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm";

/** Location final CTA with a static-map placeholder (docs/04 §12). */
export function LocationCta({ area, content }: { area: ServiceAreaReference; content?: LocationContent }) {
  const { business, marketing } = clientConfig;
  const neighborhoods = (content?.neighborhoods ?? []).slice(0, 6);

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
              Ready for Plumbing Help in {area.name}?
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.80)" }}>
              Call us or submit a request and we&rsquo;ll confirm timing for your {area.name} service.
            </p>
            <p style={{ margin: "var(--space-4) 0" }}>
              <a href={telHref(business.phone)} style={{ fontSize: "20px", fontWeight: 700 }}>
                {formatPhoneDisplay(business.phone)}
              </a>
            </p>
            {/* Static map placeholder — signals a real map image is needed. */}
            <div
              role="img"
              aria-label={`Service area map for ${area.name}`}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                border: "1px dashed rgba(255,255,255,0.20)",
                textAlign: "center",
                marginTop: "var(--space-4)",
              }}
            >
              <LucideIcon name="MapPin" size={32} color="rgba(255,255,255,0.5)" />
              <p style={{ margin: "var(--space-2) 0 0", fontSize: "13px", color: "rgba(255,255,255,0.50)" }}>
                Service area map — {area.name}
              </p>
            </div>
            {neighborhoods.length > 0 && (
              <p style={{ marginTop: "var(--space-3)", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                {neighborhoods.join(", ")}
                {(content?.neighborhoods.length ?? 0) > 6 ? " + more" : ""}
              </p>
            )}
          </div>

          <div className="hero-form-card">
            <h2 style={{ marginTop: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-primary-900)" }}>
              Request Service in {area.name}
            </h2>
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
