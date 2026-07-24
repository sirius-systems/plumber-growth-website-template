import { enabledServices } from "@/config/services";
import { ServiceCard } from "@/components/sections/ServiceCard";

/** Services grid (docs/06 §13, §25). Centered heading + ServiceCard grid. */
export function ServicesGrid() {
  const services = enabledServices();
  return (
    <section className="section section-alternate">
      <div className="section__inner">
        <h2 className="section-heading" style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Our Plumbing Services
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto var(--space-8)",
            color: "var(--color-text-muted)",
          }}
        >
          From emergencies to everyday repairs and installations, our licensed team handles it.
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
