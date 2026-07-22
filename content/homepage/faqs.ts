import type { FAQItem } from "@/components/sections/FAQAccordion";

/**
 * Homepage FAQs (docs/07 §22 AEO). Values are resolved for the Las Vegas Pro
 * Plumbing demo; a live template would parameterize [businessName]/[phone]/
 * [primaryMarket]/[state] from client config. Every answer opens with a direct,
 * self-contained sentence.
 */
export const homeFaqs: FAQItem[] = [
  {
    question: "Do you offer 24/7 emergency plumbing in Las Vegas?",
    answer:
      "Yes. Las Vegas Pro Plumbing responds to plumbing emergencies around the clock in Las Vegas and surrounding areas. For burst pipes, active flooding, and sewage backups, call (888) 308-3262 directly. For immediate threats involving gas, fire, or electrical danger, contact 911 or your utility provider first.",
  },
  {
    question: "What areas does Las Vegas Pro Plumbing serve?",
    answer:
      "Las Vegas Pro Plumbing provides plumbing service in Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, and Enterprise. Call us to confirm availability in your specific neighborhood.",
  },
  {
    question: "How quickly can a plumber arrive?",
    answer:
      "Response times depend on current call volume and your location. Call (888) 308-3262 for current availability. We do not guarantee specific arrival times.",
  },
  {
    question: "Are you licensed and insured in Nevada?",
    answer:
      "Yes. Las Vegas Pro Plumbing holds Nevada State Contractor License #NV-PL-2024-08847 and carries full liability insurance.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Contact us to discuss your plumbing issue. Our estimate process depends on the type and scope of work needed. Call (888) 308-3262 or submit a service request online to get started.",
  },
  {
    question: "What types of plumbing work do you handle?",
    answer:
      "Las Vegas Pro Plumbing handles residential and commercial plumbing including drain cleaning, water heater repair and installation, leak detection, pipe repair, sewer line repair, toilet repair, faucet repair, and garbage disposal repair.",
  },
];
