/**
 * Thank-you page variants (docs/04 §23). Keyed by the `?type=` param, which
 * matches the server's `next: /thank-you/?type=<formId>` value. Tokens [phone],
 * [regionName], [reviewUrl] are resolved at RENDER time in the client component
 * (the page is dynamically parameterized, not statically generated per type).
 * Emergency copy never implies guaranteed dispatch (UX-003).
 */

export interface HelpfulLink {
  label: string;
  href: string;
  description: string;
  external?: boolean;
}

export interface ThankYouVariant {
  icon: string;
  iconColor: string;
  heading: string;
  subtext: string;
  emergencyMode: boolean;
  whatHappensNext: string[];
  helpfulLinks: HelpfulLink[];
}

export type ThankYouType = "general-quote" | "emergency-request" | "contact" | "review-feedback";

export const DEFAULT_THANK_YOU_TYPE: ThankYouType = "general-quote";

export function isThankYouType(v: string | null): v is ThankYouType {
  return v === "general-quote" || v === "emergency-request" || v === "contact" || v === "review-feedback";
}

export const THANK_YOU_VARIANTS: Record<ThankYouType, ThankYouVariant> = {
  "general-quote": {
    icon: "CheckCircle",
    iconColor: "var(--color-primary-600)",
    heading: "Thank You, We've Received Your Request",
    subtext:
      "Your service request has been sent to our team. We'll be in touch shortly to confirm details and next steps.",
    emergencyMode: false,
    whatHappensNext: [
      "Our team reviews your request and reaches out by phone or text to confirm details.",
      "We'll discuss timing and availability for your location in [regionName].",
      "Once timing is agreed, your appointment is confirmed. We will not show up unannounced.",
    ],
    helpfulLinks: [
      { label: "Our Plumbing Services", href: "/services/", description: "Browse all residential and commercial plumbing services we offer." },
      { label: "Residential Plumbing", href: "/residential-plumbing/", description: "Home plumbing repairs, water heaters, drains, and more." },
      { label: "Common Questions", href: "/faqs/", description: "Answers to pricing, timing, and service questions." },
    ],
  },
  "emergency-request": {
    icon: "Phone",
    iconColor: "var(--color-accent-500)",
    heading: "Request Received, Call Us Now for Fastest Response",
    subtext:
      "We've received your emergency request. For the fastest response, call us directly. Submitting this form does not guarantee immediate dispatch.",
    emergencyMode: true,
    whatHappensNext: [
      "Call us now at [phone]. This is the fastest way to reach our team for an emergency.",
      "If you've already called, a team member will follow up on your submitted request shortly.",
      "For gas odors, fire, electrical danger, or immediate threats to life or property, call 911 or your utility provider first.",
    ],
    helpfulLinks: [
      { label: "Emergency Plumbing", href: "/services/emergency-plumbing/", description: "What to do while you wait and when to call 911 first." },
      { label: "Service Areas", href: "/service-areas/", description: "Confirm we serve your location in [regionName]." },
    ],
  },
  contact: {
    icon: "MessageSquare",
    iconColor: "var(--color-primary-600)",
    heading: "Message Received, Thank You",
    subtext: "We've received your message and will respond during business hours.",
    emergencyMode: false,
    whatHappensNext: [
      "Our team reviews incoming messages during business hours.",
      "We'll respond by phone or email based on the contact preference you indicated.",
      "For urgent plumbing issues, calling us directly at [phone] is faster than a contact form.",
    ],
    helpfulLinks: [
      { label: "Our Services", href: "/services/", description: "Learn about the plumbing services we provide." },
      { label: "Common Questions", href: "/faqs/", description: "Quick answers to common questions." },
    ],
  },
  "review-feedback": {
    icon: "Star",
    iconColor: "var(--color-accent-500)",
    heading: "Thank You for Your Feedback",
    subtext:
      "Your feedback has been received. We appreciate you taking the time to share your experience.",
    emergencyMode: false,
    whatHappensNext: [
      "Our team reviews all customer feedback.",
      "If you shared a concern, a team member may follow up to discuss it.",
      "If you'd like to share your experience publicly, you're welcome to leave a review.",
    ],
    helpfulLinks: [
      { label: "Leave a Public Review", href: "[reviewUrl]", description: "Share your experience with others. Your honest feedback helps the community.", external: true },
      { label: "Our Services", href: "/services/", description: "See the full range of plumbing services we offer." },
    ],
  },
};
