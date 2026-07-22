import { clientConfig } from "@/config/client";
import { formatPhoneDisplay } from "@/lib/utilities/format";
import { FaqSection } from "@/components/sections/rebuild/FaqSection";
import type { FAQItem } from "@/components/sections/FAQAccordion";

/** Contact & scheduling FAQs (docs/07 §22). Reuses the shared accordion. */
export function ContactFaq() {
  const { business, region, responseTime } = clientConfig;
  const phone = formatPhoneDisplay(business.phone);

  const responseAnswer = responseTime
    ? `We respond ${responseTime} during business hours.`
    : `We respond during business hours. For urgent issues, calling ${phone} directly is faster than a form submission.`;

  const items: FAQItem[] = [
    {
      question: "Is submitting a form the same as booking an appointment?",
      answer:
        "No. Submitting the contact or service request form sends your details to our team and begins the scheduling process. Your appointment is confirmed only after a team member contacts you to agree on timing. We will not show up unannounced.",
    },
    { question: "How quickly do you respond to form submissions?", answer: responseAnswer },
    {
      question: "Do you offer free estimates?",
      answer: `Contact us to discuss your plumbing issue. Our estimate process depends on the type and scope of work. Call ${phone} or submit a service request to get started.`,
    },
    {
      question: "What is the fastest way to reach you for an emergency?",
      answer: `Call ${phone} directly. Do not rely on a form submission for a plumbing emergency. If you are dealing with a gas odor, fire, electrical danger, or immediate threat to life or property, contact 911 or your utility provider first.`,
    },
    {
      question: "Do you serve my neighborhood?",
      answer: `${business.publicName} serves most neighborhoods throughout ${region.name}. Call ${phone} or check our service areas page to confirm availability in your specific location.`,
    },
  ];

  return (
    <FaqSection
      items={items}
      subheading="Common questions about contacting us and scheduling service."
    />
  );
}
