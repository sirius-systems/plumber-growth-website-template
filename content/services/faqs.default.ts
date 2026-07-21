import type { FAQItem } from "@/components/sections/FAQAccordion";

/**
 * Default service-page FAQs (docs/07 §22 AEO). Resolved for the Las Vegas Pro
 * Plumbing demo; a live template would parameterize [businessName]/[phone]/etc.
 * Merged on the page with per-service content FAQs (config/service-content.ts):
 * matching questions are replaced, extras appended, minimum 5 items.
 */
export const defaultServiceFaqs: FAQItem[] = [
  {
    question: "How quickly can you respond?",
    answer:
      "Response times depend on current call volume and your location in Las Vegas. Call (888) 308-3262 directly for current availability. We do not guarantee specific arrival times.",
  },
  {
    question: "Do you offer emergency service?",
    answer:
      "Yes. Las Vegas Pro Plumbing responds to plumbing emergencies around the clock. For burst pipes, active flooding, and sewage backups, call (888) 308-3262 immediately. Do not wait for a form response in a true emergency.",
  },
  {
    question: "Are you licensed and insured in Nevada?",
    answer:
      "Yes. Las Vegas Pro Plumbing is fully licensed and insured in Nevada, holding Nevada State Contractor License #NV-PL-2024-08847. License details are available on request.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the severity of the problem, the access required, and the materials needed. Las Vegas Pro Plumbing provides upfront pricing before work begins so there are no surprise invoices. Call (888) 308-3262 for an estimate.",
  },
  {
    question: "Is the appointment confirmed when I submit the form?",
    answer:
      "Submitting the form is a service request, not a confirmed appointment. A member of our team will contact you to confirm timing and next steps before your appointment is scheduled.",
  },
];

/** Merge defaults with per-service overrides (override replaces matching question). */
export function mergeServiceFaqs(overrides: FAQItem[] = []): FAQItem[] {
  const byQuestion = new Map<string, FAQItem>();
  for (const f of defaultServiceFaqs) byQuestion.set(f.question, f);
  for (const f of overrides) byQuestion.set(f.question, f);
  return [...byQuestion.values()];
}
