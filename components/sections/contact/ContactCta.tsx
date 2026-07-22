import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";

/** Contact final CTA (docs/04 §6). Simplified centered dark band. */
export function ContactCta() {
  const { business } = clientConfig;
  return (
    <section className="section section-emphasis" style={{ textAlign: "center" }}>
      <div className="section__inner" style={{ maxWidth: "560px" }}>
        <h2 className="display-heading" style={{ marginTop: 0, fontSize: "var(--font-size-2xl)", color: "#fff" }}>
          Ready to Schedule Service?
        </h2>
        <p style={{ maxWidth: "440px", margin: "1rem auto 2rem", fontSize: "17px", color: "rgba(255,255,255,0.80)" }}>
          Our team is ready to help with any plumbing issue, from a dripping faucet to a burst pipe.
          Call now or submit a request.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
          <Link className="btn btn--accent" href="/contact/">
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
