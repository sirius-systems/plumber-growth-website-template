import Image from "next/image";
import { clientConfig } from "@/config/client";
import { reviewsSummary } from "@/config/reviews";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";

/**
 * Closing conversion band (docs/04 §6). Background image + dark overlay, white
 * copy left, request form card right. Embeds the general-quote form.
 */
export function FinalCta({
  heading = "Ready to get your plumbing problem solved?",
  currentService,
}: {
  heading?: string;
  currentService?: string;
}) {
  const { business, marketing, credentials } = clientConfig;

  const trust: string[] = [];
  if (credentials.licenseNumber) trust.push("Licensed");
  if (credentials.insured) trust.push("Insured");
  trust.push(`${reviewsSummary.rating.toFixed(1)}★ (${reviewsSummary.count})`);

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
              Tell us what&rsquo;s going on and we&rsquo;ll follow up to confirm timing.
            </p>
            <p style={{ margin: "var(--space-4) 0" }}>
              <a href={telHref(business.phone)} style={{ fontSize: "20px", fontWeight: 700 }}>
                {formatPhoneDisplay(business.phone)}
              </a>
            </p>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-2)",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "13px",
                color: "rgba(255,255,255,0.70)",
              }}
            >
              {trust.map((t, i) => (
                <li key={t}>
                  {i > 0 && <span aria-hidden="true" style={{ margin: "0 var(--space-2)" }}>·</span>}
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-form-card">
            <h2 style={{ marginTop: 0, fontSize: "16px", fontWeight: 600, color: "var(--color-primary-900)" }}>
              Request Service
            </h2>
            <GeneralQuoteForm paired defaultService={currentService} />
          </div>
        </div>
      </div>
    </section>
  );
}
