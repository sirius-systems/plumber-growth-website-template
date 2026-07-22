// Services Hub page content
// Edit this file to customize the services hub page for each client deployment.

import type { FAQItem } from "@/components/sections/FAQAccordion";

export interface ServicesHubFaq extends FAQItem {
  internalLinks?: Array<{ text: string; href: string }>;
}

export const subheading =
  "Residential, commercial, and emergency plumbing for homeowners and businesses across Las Vegas, Henderson, and Clark County.";

export const introParagraph =
  "This page summarizes every plumbing service Las Vegas Pro Plumbing provides in Clark County. Browse by service type below, or use the residential and commercial sections to find the right starting point for your property.";

export const quickAnswer =
  "Las Vegas Pro Plumbing provides licensed residential and commercial plumbing services throughout Clark County including drain cleaning, water heater repair and installation, leak detection, pipe repair, sewer line repair, toilet repair, faucet repair, garbage disposal repair, and emergency plumbing. Call (888) 308-3262 or submit a service request to get started.";

export const residentialBullets = [
  "Leak detection and pipe repair",
  "Drain cleaning and clog removal",
  "Water heater repair and installation",
  "Toilet, faucet, and fixture repair",
  "Garbage disposal service",
  "Emergency home plumbing",
];

export const commercialBullets = [
  "Multi-unit and apartment plumbing",
  "Restaurant and kitchen drain service",
  "Commercial water heater and boiler service",
  "Restroom build-outs and fixture installation",
  "Backflow prevention and testing",
  "Scheduled maintenance contracts",
];

export const emergencyItems = [
  "Burst and leaking pipes",
  "Major drain backups and sewage",
  "Water heater failure",
  "No hot water",
  "Active flooding",
];

export const ctaHeading = "Not Sure Which Service You Need?";
export const ctaSubtext =
  "Tell us what's going on and we'll help you figure out the right service and schedule a visit.";

export const hubFaqs: ServicesHubFaq[] = [
  {
    question: "What plumbing services does Las Vegas Pro Plumbing provide?",
    answer:
      "Las Vegas Pro Plumbing provides a full range of residential and commercial plumbing services in Clark County, including drain cleaning, water heater repair and installation, leak detection, pipe repair, sewer line repair, toilet repair, faucet repair, garbage disposal repair, and emergency plumbing. Browse the services below or call (888) 308-3262 to discuss your specific needs.",
    internalLinks: [{ text: "View all services", href: "/services/" }],
  },
  {
    question: "Do you handle both residential and commercial plumbing?",
    answer:
      "Yes. Las Vegas Pro Plumbing serves homeowners, property managers, facility managers, and business owners throughout Clark County. Residential service covers home repairs, installations, and emergency calls. Commercial service covers multi-unit properties, restaurants, offices, and scheduled maintenance.",
    internalLinks: [
      { text: "Residential plumbing", href: "/residential-plumbing/" },
      { text: "Commercial plumbing", href: "/commercial-plumbing/" },
    ],
  },
  {
    question: "How do I know which service I need?",
    answer:
      "If you know the issue, a slow drain, a leaking water heater, a burst pipe, browse the service cards below and click through to the relevant page for more detail. If you're not sure, call (888) 308-3262 and describe what's happening. We'll help you identify the right service and next steps.",
  },
  {
    question: "Do you offer emergency plumbing service?",
    answer:
      "Yes. Las Vegas Pro Plumbing responds to plumbing emergencies around the clock in Clark County. For burst pipes, active flooding, sewage backups, and water heater failures, call (888) 308-3262 directly. Do not rely on an online form for a plumbing emergency. For gas odors, fire, or electrical danger, call 911 or your utility provider first.",
    internalLinks: [{ text: "Emergency plumbing service", href: "/services/emergency-plumbing/" }],
  },
  {
    question: "How does the service process work?",
    answer:
      "Contact us by phone or submit the service request form with details about your issue. We review your request and reach out to confirm timing and availability. A licensed plumber visits your property, assesses the problem, and provides upfront pricing before work begins. After completing the job, we confirm everything is working and share any recommendations.",
  },
  {
    question: "Are all your plumbers licensed and insured in Clark County?",
    answer:
      "Yes. Las Vegas Pro Plumbing is fully licensed and insured in Nevada and serves Clark County with licensed technicians on every job. License details are available on request.",
  },
];
