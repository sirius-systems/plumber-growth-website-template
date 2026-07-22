import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { HeroFormCard } from "@/components/forms/HeroFormCard";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ServiceAreaList } from "@/components/sections/ServiceAreaList";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";
import { CallToAction } from "@/components/sections/CallToAction";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Residential Plumbing in Las Vegas, NV",
  description:
    "Las Vegas Pro Plumbing serves homeowners in Las Vegas, Henderson, and surrounding areas with drain cleaning, water heater repair, leak detection, and more.",
  alternates: { canonical: "/residential-plumbing/" },
};

const RESIDENTIAL_FAQS: FAQItem[] = [
  {
    question: "Do you work on older Las Vegas homes?",
    answer:
      "Yes. We service homes of all ages across the valley. Older homes more often need pipe repair, drain cleaning, and fixture replacement, while newer homes tend to need water heater and fixture service.",
  },
  {
    question: "How does hard water affect my home's plumbing?",
    answer:
      "Las Vegas's hard water leaves mineral buildup that shortens water heater life and can slow drains and reduce fixture performance. Regular maintenance helps, and we'll flag anything worth addressing.",
  },
  {
    question: "Can you help with a plumbing emergency at home?",
    answer:
      "Yes. We respond to residential plumbing emergencies around the clock. Call (888) 308-3262, for gas, fire, or electrical danger, call 911 or your utility provider first.",
  },
];

export default function ResidentialPage() {
  const { business } = clientConfig;

  return (
    <>
      <Hero contentClassName="container container--wide">
        <div className="hero-2col">
          <div className="hero-copy">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Residential Plumbing" }]} />
            <h1 className="heading-accent">
              Residential Plumbing Services in {clientConfig.seo.primaryMarket}
            </h1>
            <p style={{ maxWidth: "var(--measure-reading)", fontSize: "18px" }}>
              {business.publicName} helps homeowners across the Las Vegas valley with everyday
              repairs and urgent problems alike, with honest pricing, licensed work, and clear
              explanations before we start.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Button variant="primary" href={telHref(business.phone)}>
                Call {formatPhoneDisplay(business.phone)}
              </Button>
            </div>
          </div>

          <HeroFormCard heading="Request service" />
        </div>
      </Hero>

      <TrustBar />

      <section className="container section">
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>
          Common problems for Las Vegas homeowners
        </h2>
        <ul style={{ color: "var(--color-text-muted)", maxWidth: "var(--measure-reading)" }}>
          <li>
            <strong>Hard water:</strong> mineral buildup that shortens water heater life and slows
            drains.
          </li>
          <li>
            <strong>Slab leaks:</strong> common locally due to soil movement and aging copper pipe.
          </li>
          <li>
            <strong>Aging fixtures:</strong> dripping faucets, running toilets, and worn valves.
          </li>
        </ul>
      </section>

      <ServiceGrid
        heading="Residential Plumbing Services"
        intro="Everything a homeowner needs, from emergencies to installations."
        altBackground
      />
      <ServiceAreaList intro="We serve homeowners across Las Vegas and the surrounding communities." />
      <FAQAccordion
        items={RESIDENTIAL_FAQS}
        heading="Residential Plumbing, Frequently Asked Questions"
        altBackground
      />
      <CallToAction heading="Need a plumber for your home?" />
    </>
  );
}
