/**
 * FAQ hub content (docs/07 §22 AEO). Authoritative source for /faqs/, separate
 * from per-service/-location FAQ files. Resolved for the Las Vegas Pro Plumbing
 * demo. `internalLinks` render as a "Related:" line below each answer.
 */

export interface FaqLink {
  text: string;
  href: string;
}
export interface FaqItem {
  question: string;
  answer: string;
  internalLinks?: FaqLink[];
}
export interface FaqCategory {
  id: string;
  heading: string;
  intro: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "emergency",
    heading: "Emergency and Urgent Issues",
    intro:
      "Questions about plumbing emergencies, after-hours service, and what to do when something goes wrong fast.",
    items: [
      {
        question: "What should I do if a pipe bursts?",
        answer:
          "Locate your main water shutoff valve and turn off the water supply immediately. The shutoff is typically near the water meter or where the main line enters the home. Once the water is off, call Las Vegas Pro Plumbing at (888) 308-3262. Do not attempt to repair a burst pipe yourself. If there is structural damage, electrical exposure, or flooding you cannot control, contact emergency services first.",
        internalLinks: [{ text: "Pipe repair services", href: "/services/pipe-repair/" }],
      },
      {
        question: "Is a leaking water heater an emergency?",
        answer:
          "A leaking water heater can become an emergency depending on the severity. A small drip from a pressure relief valve may be manageable temporarily, but active flooding, a cracked tank, or a gas smell near the water heater requires immediate action. Turn off the water supply to the unit and call (888) 308-3262. If you smell gas, leave the building and call your gas utility provider before calling a plumber.",
        internalLinks: [{ text: "Water heater repair", href: "/services/water-heater-repair/" }],
      },
      {
        question: "Do you offer 24/7 emergency plumbing service in Clark County?",
        answer:
          "Yes. Las Vegas Pro Plumbing responds to plumbing emergencies around the clock in Clark County. Call (888) 308-3262 directly for the fastest response. Submitting an online form is not the fastest way to reach us during an active emergency. For gas odors, fire, electrical danger, or immediate threats to life or property, call 911 or your utility provider first.",
        internalLinks: [{ text: "Emergency plumbing service", href: "/services/emergency-plumbing/" }],
      },
      {
        question: "How do I shut off water to a single fixture?",
        answer:
          "Most toilets have a shutoff valve on the wall behind the base. Sinks typically have shutoff valves under the cabinet. Turn the valve clockwise to close it. If there is no fixture shutoff or it will not turn, use the main water shutoff for the home. Call (888) 308-3262 if you need help locating the shutoff or if the valve appears corroded or broken.",
      },
      {
        question: "When should I call a plumber instead of trying a DIY fix?",
        answer:
          "Call a licensed plumber for anything involving the main water line, sewer line, water heater, gas connections, slab leaks, or persistent clogs that return after clearing. DIY repairs on these systems can void warranties, violate local codes, or cause additional damage. Minor issues like a dripping faucet or slow drain may be manageable depending on your experience, but when in doubt, call (888) 308-3262 and we can help you assess the situation.",
      },
    ],
  },
  {
    id: "costs",
    heading: "Costs and Estimates",
    intro:
      "Questions about pricing, service fees, estimates, and what affects the cost of plumbing work.",
    items: [
      {
        question: "How much does it cost to fix a leaking toilet?",
        answer:
          "The cost depends on the cause of the leak. A worn flapper or fill valve is typically a straightforward repair. A leaking wax ring or cracked tank requires more labor and parts. Las Vegas Pro Plumbing provides upfront pricing before any work begins. Call (888) 308-3262 or submit a service request to get an estimate for your specific situation.",
        internalLinks: [{ text: "Toilet repair service", href: "/services/toilet-repair/" }],
      },
      {
        question: "Do you charge a service call fee?",
        answer:
          "Contact Las Vegas Pro Plumbing at (888) 308-3262 to discuss current pricing and any applicable fees for your service type and location. We explain all costs before starting work.",
      },
      {
        question: "Can you give estimates over the phone?",
        answer:
          "We can provide general guidance over the phone, but accurate estimates require assessing the problem in person. Many plumbing issues have variables that affect cost: access, pipe condition, parts availability, and scope of work. Call (888) 308-3262 to discuss your situation and we can advise on next steps.",
      },
      {
        question: "Does Las Vegas Pro Plumbing offer financing for larger plumbing jobs?",
        answer:
          "Financing options may be available for qualifying jobs. Visit our financing page or call (888) 308-3262 to ask about current options.",
        internalLinks: [{ text: "Financing options", href: "/financing/" }],
      },
      {
        question: "Are there extra charges for emergency or after-hours service?",
        answer:
          "After-hours and emergency service may have different pricing than standard business-hours calls. Las Vegas Pro Plumbing explains applicable rates before starting any work. Call (888) 308-3262 to discuss current availability and pricing for your situation.",
      },
    ],
  },
  {
    id: "maintenance",
    heading: "Maintenance and Prevention",
    intro:
      "Questions about keeping your plumbing system in good condition and preventing common problems before they become expensive repairs.",
    items: [
      {
        question: "How often should I have my drains cleaned?",
        answer:
          "For most homes, professional drain cleaning every one to two years helps prevent buildup and slow drains before they become full clogs. Homes with older pipes, heavy use, or recurring drain issues may benefit from more frequent service. Restaurants and commercial kitchens typically require more frequent grease trap and drain maintenance.",
        internalLinks: [{ text: "Drain cleaning service", href: "/services/drain-cleaning/" }],
      },
      {
        question: "How can I prevent pipes from freezing?",
        answer:
          "In Clark County, extended cold snaps can affect exposed pipes in garages, crawl spaces, and exterior walls. Insulating exposed pipes, keeping cabinet doors open under sinks during cold nights, and maintaining indoor heat above 55°F reduces freeze risk. If you suspect a frozen pipe, do not use an open flame to thaw it. Call (888) 308-3262 for safe thawing assistance.",
      },
      {
        question: "How do I know if I have a slab leak?",
        answer:
          "Common signs of a slab leak include an unexplained spike in your water bill, warm or damp spots on floors, the sound of running water when all fixtures are off, or cracks appearing in flooring or walls. Slab leaks require professional detection equipment. Call Las Vegas Pro Plumbing at (888) 308-3262 if you notice these symptoms.",
        internalLinks: [{ text: "Leak detection service", href: "/services/leak-detection/" }],
      },
      {
        question: "What regular plumbing checks do you recommend for homeowners?",
        answer:
          "Check under sinks for moisture or corrosion every few months. Test shutoff valves annually to confirm they turn freely. Flush your water heater tank periodically to reduce sediment buildup. Monitor your water bill for unexplained increases. Schedule a professional inspection if your home has older pipes or you have not had a plumbing check in several years. Call (888) 308-3262 to discuss a maintenance plan for your home.",
      },
      {
        question: "How long does a water heater typically last?",
        answer:
          "Tank water heaters typically last 8 to 12 years with proper maintenance. Tankless water heaters can last 15 to 20 years. Hard water conditions in Clark County can shorten lifespan by accelerating sediment buildup. Annual flushing and anode rod inspection help extend the life of your unit. If your water heater is over 10 years old and showing signs of rust or inconsistent heating, call (888) 308-3262 to discuss replacement options.",
        internalLinks: [{ text: "Water heater installation", href: "/services/water-heater-installation/" }],
      },
    ],
  },
  {
    id: "installation",
    heading: "Installation and Projects",
    intro:
      "Questions about plumbing installations, fixture upgrades, remodels, and new construction connections.",
    items: [
      {
        question: "What type of water heater is best for my home?",
        answer:
          "The right water heater depends on your household size, hot water demand, available fuel source, and budget. Tank water heaters are less expensive upfront and widely compatible. Tankless models provide on-demand hot water and are more energy-efficient over time but cost more to install. In Clark County, hard water can affect both types differently. Call (888) 308-3262 to discuss which option fits your home and usage.",
        internalLinks: [{ text: "Water heater installation service", href: "/services/water-heater-installation/" }],
      },
      {
        question: "Can you install fixtures I purchased myself?",
        answer:
          "In most cases, yes. Las Vegas Pro Plumbing can install customer-supplied fixtures, though we cannot warranty the fixture itself, only the installation labor. We recommend confirming compatibility with your existing plumbing before purchasing. Call (888) 308-3262 or submit a service request to discuss your specific fixture and situation.",
      },
      {
        question: "Do you handle bathroom remodel plumbing?",
        answer:
          "Las Vegas Pro Plumbing handles rough-in and finish plumbing for bathroom remodels including drain relocation, supply line connections, fixture installation, and shutoff valve replacement. We work alongside general contractors and homeowners managing their own remodel projects. Call (888) 308-3262 to discuss the scope of your project.",
      },
      {
        question: "Do you work on commercial build-outs and new tenant spaces?",
        answer:
          "Yes. Las Vegas Pro Plumbing provides commercial plumbing for tenant build-outs, restaurant fit-outs, and office plumbing connections across Clark County. We coordinate with general contractors and property managers on scope, timeline, and documentation. Call (888) 308-3262 or submit a commercial service request to discuss your project.",
        internalLinks: [{ text: "Commercial plumbing services", href: "/commercial-plumbing/" }],
      },
      {
        question: "Is a permit required for plumbing work in Las Vegas, NV?",
        answer:
          "Permit requirements depend on the type and scope of work. Fixture replacements typically do not require a permit. New installations, drain relocations, water heater replacements, and sewer line work may require permits depending on local jurisdiction rules. Las Vegas Pro Plumbing advises on permit requirements for your specific job and handles permit coordination where applicable. Call (888) 308-3262 to discuss your project.",
      },
    ],
  },
];
