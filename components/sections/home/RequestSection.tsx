import { homepageContent } from "@/content/homepage";
import { GeneralQuoteForm } from "@/components/forms/GeneralQuoteForm";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * High-intent capture section (docs/08 §9). The target of every primary CTA on
 * the page (`#request`), placed after the proof content.
 *
 * The form itself is the existing, production-wired `GeneralQuoteForm` — the
 * same component, schema, Cloudflare Function, and GHL mapping used everywhere
 * else on the site. Its field set is authoritative (docs/18 FORM-006 removed the
 * email and property-address fields); this section supplies only the framing,
 * the phone alternative, and the reassurance copy.
 */
export function RequestSection() {
  const { request, phone } = homepageContent;

  return (
    <section id="request" className="section section-alternate home-request" aria-labelledby="request-heading">
      <div className="section__inner home-request__layout">
        <div className="home-request__copy">
          <p className="home-eyebrow">{request.eyebrow}</p>
          <h2 id="request-heading" className="home-request__heading">
            {request.heading}
          </h2>
          <p className="home-request__body">{request.body}</p>

          <p className="home-request__phone">
            <LucideIcon name="Phone" size={20} color="var(--color-accent-600)" />
            <span>
              Prefer to talk now?{" "}
              <a href={phone.href} className="home-request__phone-link">
                Call {phone.display}
              </a>
            </span>
          </p>

          <p className="home-request__microcopy">
            <LucideIcon name="Lock" size={16} color="var(--color-text-muted)" />
            {request.microcopy}
          </p>
        </div>

        <div className="home-request__card">
          <GeneralQuoteForm paired />
        </div>
      </div>
    </section>
  );
}
