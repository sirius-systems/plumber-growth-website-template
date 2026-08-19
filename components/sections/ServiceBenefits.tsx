import Image from "next/image";
import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * "Why choose us for [service]" benefits (docs/06 §25). Falls back to the
 * shared client differentiators.
 *
 * Restructured into the reference's authority split: the four benefits set as
 * icon rows beside a supporting image, instead of four free-floating cards. The
 * H2, all four titles, all four descriptions, their order, and the
 * `credentials.licenseNumber` gate on the third are unchanged.
 *
 * No CTA is added here: the page already carries the hero actions, the hero
 * request form, and the closing FinalCta, and this section had none before.
 */
export function ServiceBenefits({ svc }: { svc: PlumbingService }) {
  const { business, credentials } = clientConfig;
  const benefits: { icon: string; title: string; desc: string }[] = [
    { icon: "BadgeCheck", title: "Honest, Upfront Pricing", desc: "We explain pricing before work begins, no surprise invoices." },
    { icon: "Clock", title: "Fast, Around-the-Clock Response", desc: "Emergency plumbing help is available 24/7 across the valley." },
    {
      icon: "Shield",
      title: "Licensed & Insured",
      desc: credentials.licenseNumber
        ? `${credentials.licenseJurisdiction} #${credentials.licenseNumber}.`
        : "Fully licensed and insured for your protection.",
    },
    { icon: "Wrench", title: "Experienced Local Team", desc: "Licensed plumbers who know Las Vegas homes and hard-water conditions." },
  ];

  return (
    <section className="section section-alternate" aria-labelledby="svc-benefits-heading">
      <div className="section__inner">
        <div className="svc-split svc-split--image-end">
          <div className="svc-split__media svc-split__media--portrait">
            <Image
              src="/images/placeholders/team-portrait.svg"
              alt={`A ${business.publicName} technician and service van`}
              fill
              sizes="(max-width: 64rem) 100vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div>
            <h2 id="svc-benefits-heading" className="svc-heading">
              Why Choose {business.publicName} for {svc.name}
            </h2>

            <ul className="svc-benefit-list">
              {benefits.map((b) => (
                <li key={b.title} className="svc-benefit">
                  <span className="svc-benefit__icon" aria-hidden="true">
                    <LucideIcon name={b.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="svc-benefit__title">{b.title}</h3>
                    <p className="svc-benefit__desc">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
