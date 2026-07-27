import Image from "next/image";
import { clientConfig } from "@/config/client";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { TrustBar, type TrustItem } from "@/components/ui/TrustBar";

/** Service-areas hub hero (docs/06 §26). Shared hero bg + overlay pattern. */
export function HubHero() {
  const { marketing, region, serviceAreas, credentials } = clientConfig;

  const trustItems: TrustItem[] = [
    { icon: "badge-check", label: "Licensed" },
    { icon: "shield", label: "Insured" },
  ];
  if (credentials.bonded) trustItems.push({ icon: "shield-check", label: "Bonded" });
  trustItems.push({ icon: "map-pin", label: `Serving ${region.name}` });

  return (
    <section className="hero" style={{ display: "flex", alignItems: "center" }}>
      <div className="hero-media" aria-hidden="true">
        <Image src={marketing.heroImageSrc} alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content section__inner" style={{ paddingBlock: "64px" }}>
        <div className="hero-2col">
          <div className="hero-copy">
            <p className="hero-eyebrow" style={{ margin: 0, fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-on-media)" }}>
              Licensed Plumbing · {region.name}
            </p>
            <h1 className="heading-accent">Plumbing Services in {region.name}</h1>
            <p style={{ maxWidth: "480px", fontSize: "18px", color: "var(--color-text-on-media)" }}>{region.subheading}</p>
            <TrustBar variant="over-media" items={trustItems} />
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none", padding: 0, margin: "var(--space-4) 0 0" }}>
              {serviceAreas.map((a) => (
                <li
                  key={a.name}
                  style={{ background: "rgba(255,255,255,0.12)", borderRadius: "var(--radius-pill)", padding: "0.25rem 0.75rem", fontSize: "13px", color: "#fff" }}
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>

          <HeroFormCard heading="Request Service" showLogo />
        </div>
      </div>
    </section>
  );
}
