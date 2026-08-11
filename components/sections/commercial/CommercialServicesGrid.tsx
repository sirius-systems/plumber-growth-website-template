import { clientConfig } from "@/config/client";
import { commercialServices } from "@/config/services";
import { ServiceCard } from "@/components/sections/ServiceCard";

/** Commercial services grid (docs/06 §25). Renders commercialAvailable services. */
export function CommercialServicesGrid() {
  const services = commercialServices();

  return (
    <section id="services" className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading">
          Commercial Plumbing Services We Provide
        </h2>
        <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: "var(--space-8)" }}>
          Available for businesses and commercial properties across {clientConfig.region.name}.
        </p>
        <ul className="service-grid">
          {services.map((s) => (
            <li key={s.slug} style={{ display: "flex" }}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
