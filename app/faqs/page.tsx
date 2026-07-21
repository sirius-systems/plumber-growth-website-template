import type { Metadata } from "next";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";
import { CallToAction } from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Plumbing FAQs",
  description:
    "Answers to common plumbing questions for Las Vegas homeowners and businesses. Emergency service, licensing, water heaters, slab leaks, and more.",
  alternates: { canonical: "/faqs/" },
};

const FAQS: FAQItem[] = [
  {
    question: "Do you offer 24/7 emergency plumbing?",
    answer:
      "Yes. We respond to plumbing emergencies around the clock, call (888) 308-3262. For life-safety threats involving gas, fire, or electrical danger, call 911 or your utility provider first.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, and Enterprise. Call us to confirm availability in your specific neighborhood.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Las Vegas Pro Plumbing holds Nevada State Contractor License #NV-PL-2024-08847 and carries appropriate insurance coverage.",
  },
  {
    question: "How long do water heaters last in Las Vegas?",
    answer:
      "Tank water heaters typically last 8–12 years, and tankless units often longer. Las Vegas's hard water accelerates sediment buildup, which can shorten that lifespan without regular flushing.",
  },
  {
    question: "What causes slab leaks in Las Vegas?",
    answer:
      "Soil movement, hard-water corrosion, and aging copper pipe are common causes. Signs include unexplained water-bill spikes, warm spots on the floor, and a musty or mold smell.",
  },
  {
    question: "How often should I have my drains cleaned?",
    answer:
      "About once a year for most homes, and more often if you have recurring slow drains or a history of blockages.",
  },
  {
    question: "What should I do if I have a burst pipe?",
    answer:
      "Shut off your main water supply to stop the flooding, then call (888) 308-3262. If there's any danger to life or property, contact emergency services first.",
  },
  {
    question: "Do you work on commercial properties?",
    answer:
      "Yes. We serve offices, restaurants, retail, and multifamily properties. Large industrial projects require separate scoping, contact us to discuss.",
  },
  {
    question: "How does the estimate process work?",
    answer:
      "Contact us with details about your plumbing issue. We explain pricing before any work begins, so you know what to expect.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Contact us for payment details. We don't publish specific payment terms on this site, call (888) 308-3262 and we'll be glad to go over the options.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <section className="container section">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQs" }]} />
        <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Plumbing FAQs</h1>
        <p style={{ maxWidth: "var(--measure-reading)", fontSize: "var(--font-size-lg)" }}>
          Answers to the questions we hear most from Las Vegas homeowners and businesses.
        </p>
      </section>

      <FAQAccordion items={FAQS} heading="Frequently Asked Questions" />
      <CallToAction />
    </>
  );
}
