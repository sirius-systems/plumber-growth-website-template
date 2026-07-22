import type { FAQItem } from "@/components/sections/FAQAccordion";
import { clientConfig, type ServiceAreaReference } from "@/config/client";
import { formatPhoneDisplay } from "@/lib/utilities/format";

/**
 * Location-page FAQs (docs/07 §22 AEO). Defaults are resolved per location from
 * config; per-location overrides replace matching questions. Minimum 5 items.
 * Henderson has approved overrides; other locations use defaults (scaffolding).
 */
function defaultLocationFaqs(area: ServiceAreaReference): FAQItem[] {
  const { business } = clientConfig;
  const phone = formatPhoneDisplay(business.phone);
  const name = business.publicName;
  const city = area.name;
  return [
    {
      question: `Do you provide plumbing services in ${city}?`,
      answer: `Yes. ${name} provides full residential and commercial plumbing services throughout ${city} and surrounding neighborhoods. Call ${phone} or submit a service request to get started.`,
    },
    {
      question: `How quickly can you reach ${city}?`,
      answer: `Response times depend on current call volume and your specific location in ${city}. Call ${phone} directly for current availability. We do not guarantee specific arrival times.`,
    },
    {
      question: `Do you offer emergency plumbing in ${city}?`,
      answer: `Yes. ${name} responds to plumbing emergencies in ${city} around the clock. For burst pipes, active flooding, and sewage backups call ${phone} immediately. For gas, fire, or electrical danger contact 911 first.`,
    },
    {
      question: `Are you licensed to work in ${city}, ${area.state}?`,
      answer: `Yes. ${name} is fully licensed and insured in Nevada and serves ${city} as part of our service area. License details are available on request.`,
    },
    {
      question: `What plumbing services do you offer in ${city}?`,
      answer: `${name} provides drain cleaning, water heater repair and installation, leak detection, pipe repair, sewer line repair, toilet repair, faucet repair, garbage disposal repair, and emergency plumbing throughout ${city}.`,
    },
  ];
}

const OVERRIDES: Record<string, FAQItem[]> = {
  henderson: [
    {
      question: "Do you serve Green Valley and Anthem?",
      answer:
        "Yes. Las Vegas Pro Plumbing serves Green Valley, Anthem, Seven Hills, and neighborhoods across Henderson for both residential and commercial plumbing. Call (888) 308-3262 to confirm timing for your address.",
    },
    {
      question: "What plumbing problems are common in Henderson homes?",
      answer:
        "Hard water buildup, water heater sediment from summer heat, and pipe stress from caliche soil movement are common in Henderson. Older East Henderson homes see corroded pipes, while newer Anthem and Inspirada builds sometimes have early fixture issues.",
    },
    {
      question: "Can you help with hard water damage in Henderson?",
      answer:
        "Yes. Las Vegas valley water runs 16+ grains per gallon, and Las Vegas Pro Plumbing handles the water heater service, fixture repair, and descaling Henderson homes need. Call (888) 308-3262 to discuss your situation.",
    },
  ],
};

export function locationFaqs(area: ServiceAreaReference): FAQItem[] {
  const byQuestion = new Map<string, FAQItem>();
  for (const f of defaultLocationFaqs(area)) byQuestion.set(f.question, f);
  for (const f of area.slug ? (OVERRIDES[area.slug] ?? []) : []) byQuestion.set(f.question, f);
  return [...byQuestion.values()];
}
