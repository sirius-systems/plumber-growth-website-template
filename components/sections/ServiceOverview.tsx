import Image from "next/image";
import { clientConfig } from "@/config/client";
import type { PlumbingService } from "@/config/services";
import type { ServiceContent } from "@/config/service-content";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Shared fallback for services with no artwork configured yet. */
const SERVICE_IMAGE_FALLBACK = "/images/placeholders/service-card.svg";

/**
 * Service overview + quick-facts panel (docs/06 §25).
 *
 * Restructured into the editorial split the reference uses: the service image on
 * one side, the overview paragraph and quick-facts panel on the other. The H2,
 * the overview paragraph, and the three quick facts are byte-identical to the
 * previous version — including the `operations.emergencyServiceAvailable` gate
 * on the second fact.
 *
 * The image is `svc.image` from the service catalog, falling back to the shared
 * placeholder that ServiceCard already uses; the alt text follows ServiceCard's
 * existing pattern rather than introducing a new phrasing convention.
 */
export function ServiceOverview({ svc, content }: { svc: PlumbingService; content?: ServiceContent }) {
  const { operations } = clientConfig;
  const overview = content?.overview ?? svc.shortDescription;

  const facts: { icon: string; label: string }[] = [
    { icon: "Home", label: "Residential & commercial" },
    {
      icon: "Clock",
      label: operations.emergencyServiceAvailable ? "24/7 emergency service" : "By appointment",
    },
    { icon: "BadgeCheck", label: "Nevada licensed & insured" },
  ];

  return (
    <section className="section section-default" aria-labelledby="svc-overview-heading">
      <div className="section__inner">
        <div className="svc-split">
          <div className="svc-split__media">
            <Image
              src={svc.image ?? SERVICE_IMAGE_FALLBACK}
              alt={`${svc.name} plumbing service`}
              fill
              sizes="(max-width: 64rem) 100vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div>
            <h2 id="svc-overview-heading" className="svc-heading">
              What {svc.name} Covers and Who Needs It
            </h2>
            <p className="svc-split__body">{overview}</p>

            <div className="svc-facts">
              <p className="svc-facts__title">Quick facts</p>
              <ul className="svc-facts__list">
                {facts.map((f) => (
                  <li key={f.label}>
                    <LucideIcon name={f.icon} size={18} color="var(--color-primary-600)" />
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
