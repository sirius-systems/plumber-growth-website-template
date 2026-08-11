import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Button } from "@/components/ui/Button";

/** Contact final CTA (docs/04 §6). Simplified centered dark band. */
export function ContactCta() {
  const { business } = clientConfig;
  return (
    <section className="section section-emphasis" style={{ textAlign: "center" }}>
      <div className="section__inner" style={{ maxWidth: "var(--measure-reading)" }}>
        <h2 className="display-heading" style={{ marginTop: 0, fontSize: "var(--font-size-2xl)", color: "#fff" }}>
          Ready to Schedule Service?
        </h2>
        <p style={{ maxWidth: "var(--measure-copy)", margin: "var(--space-4) auto var(--space-8)", fontSize: "var(--font-size-lg)", color: "rgba(255,255,255,0.80)" }}>
          Our team is ready to help with any plumbing issue, from a dripping faucet to a burst pipe.
          Call now or submit a request.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-4)", alignItems: "center" }}>
          <Button variant="accent" href="/contact/">
            Request Service
          </Button>
          <a href={telHref(business.phone)} style={{ color: "#fff", fontSize: "var(--font-size-base)" }}>
            Or call {formatPhoneDisplay(business.phone)}
          </a>
        </div>
      </div>
    </section>
  );
}
