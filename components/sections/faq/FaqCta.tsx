import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/** FAQ final CTA (docs/04 §6). Simplified centered dark band. */
export function FaqCta() {
  const { business } = clientConfig;
  return (
    <section className="section section-emphasis" style={{ textAlign: "center" }}>
      <div className="section__inner" style={{ maxWidth: "560px" }}>
        <h2 className="display-heading" style={{ marginTop: 0, fontSize: "var(--font-size-2xl)", color: "#fff" }}>
          Need Help With a Plumbing Issue?
        </h2>
        <p style={{ maxWidth: "440px", margin: "1rem auto 2rem", fontSize: "17px", color: "rgba(255,255,255,0.80)" }}>
          If your question isn&rsquo;t answered here or you need immediate help, our team is ready.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
          <Link className="btn btn--accent" href="/request-service/">
            Request Service
          </Link>
          <a href={telHref(business.phone)} style={{ color: "#fff", fontSize: "15px" }}>
            Or call {formatPhoneDisplay(business.phone)}
          </a>
        </div>
      </div>
    </section>
  );
}
