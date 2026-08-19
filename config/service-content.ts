/**
 * Long-form service page content (docs/04 §8, docs/07 §17).
 *
 * Keyed by service slug so each service page has genuinely distinct, substantive
 * content rather than a thin city/keyword swap. Copy stays within a general
 * plumbing scope and Las Vegas context; it invents no client-specific facts
 * (pricing, warranties, guarantees) — those come from config when verified.
 */

import type { TrustIcon } from "@/components/ui/TrustBar";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  /** 1–2 sentence lead under the H1. */
  intro: string;
  /** Hero supporting copy (falls back to `intro`). */
  subheading?: string;
  /**
   * Up to 4 service-specific hero trust items, shown after the config-driven
   * credentials. Static template copy (like HERO_BENEFITS) rather than client
   * facts — keep it to claims true of any licensed plumber, since docs/06 §27
   * requires every displayed trust element to be verified.
   */
  trustHighlights?: { icon: TrustIcon; label: string }[];
  /** AEO "Quick Answer" paragraph (2–4 sentences). Falls back to an assembled
   * default. Scaffolding until client-approved copy is written (docs/07 §20). */
  quickAnswer?: string;
  /** What the service covers. */
  overview: string;
  /** Bulleted list of what the service includes. */
  covers: string[];
  /** Common problems / symptoms this service addresses. */
  problems: string[];
  /** Three service-specific FAQs. */
  faqs: ServiceFAQ[];
  /**
   * "Why timely repair matters" section. Optional and currently populated only
   * for water-heater-repair (single-page iteration — docs/04 §8). `icon` is a
   * Lucide name resolved via components/ui/LucideIcon, same as HomeProblem.
   */
  timelyRepair?: {
    heading: string;
    subheading: string;
    items: { icon: string; title: string; description: string }[];
  };
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "emergency-plumbing": {
    intro:
      "Plumbing emergencies don't wait for business hours. When water is where it shouldn't be, calling is the fastest way to reach us.",
    trustHighlights: [
      { icon: "clock", label: "Rapid Dispatch When You Call" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
      { icon: "shield-check", label: "Equipped for Urgent Repairs" },
    ],
    overview:
      "Our emergency plumbing service covers urgent problems that can't wait, burst pipes, active leaks, sewage backups, and sudden loss of water. Emergency help is available 24/7. Call us and we'll tell you what to do right now and confirm current availability for your area. We never promise a specific arrival time.",
    covers: [
      "Burst and leaking pipes",
      "Active flooding from plumbing failures",
      "Sewage backups and overflowing drains",
      "Water heater leaks and sudden loss of hot water",
      "Overflowing or non-functioning toilets in a single-bath home",
    ],
    problems: [
      "Water pooling on floors or coming through the ceiling",
      "No water anywhere in the house",
      "Sewage smell or backup in tubs and drains",
      "A pipe that has visibly burst or split",
    ],
    faqs: [
      {
        question: "What should I do before the plumber arrives?",
        answer:
          "Shut off your main water supply to stop the flooding, then call (888) 308-3262. If you smell gas, see fire, or face electrical danger, call 911 or your utility provider first.",
      },
      {
        question: "Do you guarantee how fast you'll arrive?",
        answer:
          "No. Response times depend on current call volume and your location. Calling gives you the fastest, most accurate picture of availability. We do not guarantee specific arrival times.",
      },
      {
        question: "Is emergency service really available 24/7?",
        answer:
          "Yes, we respond to plumbing emergencies around the clock. For true life-safety threats, contact emergency services first.",
      },
    ],
  },
  "drain-cleaning": {
    intro: "Slow or clogged drains rarely fix themselves, and store-bought chemicals often make things worse.",
    trustHighlights: [
      { icon: "shield-check", label: "Camera-Assisted Drain Inspection" },
      { icon: "check-circle", label: "Clears Clogs at the Source" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    quickAnswer:
      "Drain cleaning in Henderson and Las Vegas removes blockages from kitchen drains, bathroom drains, floor drains, and main sewer lines using professional snaking or hydrojetting equipment. Las Vegas Pro Plumbing provides drain cleaning throughout Clark County for homeowners and commercial properties dealing with slow drains, recurring clogs, or complete backups. Call (888) 308-3262 or submit a service request to schedule a same-day or next-day appointment.",
    overview:
      "We clear slow and stopped drains throughout the home, kitchen, bathroom, laundry, and floor drains. Depending on the blockage, we use professional drain snaking or hydrojetting to remove buildup and restore full flow, then identify what caused the clog so it's less likely to come back.",
    covers: [
      "Kitchen and bathroom sink drains",
      "Tub and shower drains",
      "Floor and laundry drains",
      "Drain snaking (cabling) and hydrojetting",
      "Recurring and stubborn clogs",
    ],
    problems: [
      "Water draining slowly or standing in the sink or tub",
      "Gurgling sounds from drains",
      "Bad odors coming from a drain",
      "Multiple drains clogging at once (a sign of a deeper line issue)",
    ],
    faqs: [
      {
        question: "How often should drains be cleaned?",
        answer:
          "Most homes benefit from a professional cleaning about once a year, and more often if you have recurring slow drains or a history of blockages.",
      },
      {
        question: "Are chemical drain cleaners a good idea?",
        answer:
          "We generally advise against them. Harsh chemicals can damage pipes and often only clear part of the clog. Professional snaking or hydrojetting removes the blockage more completely.",
      },
      {
        question: "What is hydrojetting?",
        answer:
          "Hydrojetting uses high-pressure water to scour buildup, grease, and debris from the inside of the pipe. It's effective for tougher clogs and heavily coated lines.",
      },
    ],
  },
  "water-heater-repair": {
    intro: "No hot water is more than an inconvenience, and Las Vegas's hard water is tough on water heaters.",
    trustHighlights: [
      { icon: "badge-check", label: "All Major Brands Serviced" },
      { icon: "shield-check", label: "Safety-Checked Repairs" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We diagnose and repair both tank and tankless water heaters, restoring hot water, stopping leaks, and addressing the sediment buildup that Las Vegas's hard water accelerates. We'll tell you honestly whether a repair makes sense or whether replacement is the better value.",
    covers: [
      "No hot water or not enough hot water",
      "Leaking tanks and fittings",
      "Pilot light and ignition problems",
      "Thermostat and heating element failures",
      "Sediment flushing for hard-water buildup",
    ],
    problems: [
      "Water that never gets hot or runs out quickly",
      "Rumbling or popping noises from the tank (sediment)",
      "Water pooling around the base of the heater",
      "Discolored or rusty hot water",
    ],
    faqs: [
      {
        question: "How long do water heaters last in Las Vegas?",
        answer:
          "Tank water heaters typically last 8–12 years; tankless units often last longer. Las Vegas's hard water speeds up sediment buildup, which can shorten that lifespan without regular flushing.",
      },
      {
        question: "Should I repair or replace my water heater?",
        answer:
          "It depends on the unit's age, the cost of the repair, and its condition. If a heater is near the end of its life or leaking from the tank itself, replacement is usually the better value. We'll give you a straight recommendation.",
      },
      {
        question: "Why is my water heater making noise?",
        answer:
          "Popping or rumbling usually means sediment has collected at the bottom of the tank, common with hard water. Flushing the tank often helps.",
      },
    ],
    timelyRepair: {
      heading: "Why Timely Repair Matters",
      subheading:
        "Addressing water heater issues early saves you money and prevents unnecessary headaches.",
      items: [
        {
          icon: "Droplets",
          title: "Avoid Water Damage",
          // Deliberately no dollar magnitude: a "thousands in damage" figure
          // would be an unverifiable claim (docs/17 §22).
          description:
            "A small leak can worsen over time and lead to significant structural damage if left unaddressed.",
        },
        {
          icon: "Thermometer",
          title: "Restore Comfort",
          description:
            "Get back to enjoying hot showers, clean dishes, and properly washed clothes without delay.",
        },
        {
          icon: "Wrench",
          title: "Prevent Full Replacement",
          description:
            "Fixing minor issues now can extend your water heater's life and delay the need for a costly replacement.",
        },
        {
          icon: "Gauge",
          title: "Improve Efficiency",
          // "can help lower" rather than an unconditional savings promise.
          description:
            "A repaired and maintained unit uses less energy, which can help lower monthly utility costs.",
        },
      ],
    },
  },
  "water-heater-installation": {
    intro: "Replacing a water heater is a chance to right-size the system for your home and cut operating costs.",
    trustHighlights: [
      { icon: "badge-check", label: "Code-Compliant Installation" },
      { icon: "check-circle", label: "Tank & Tankless Options" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We install and replace tank and tankless water heaters sized for your household's hot-water demand. We'll walk you through the tank-versus-tankless decision, energy efficiency, and the permit considerations that apply in the Las Vegas area, then handle the installation cleanly and correctly.",
    covers: [
      "Tank water heater replacement",
      "Tankless water heater installation",
      "Right-sizing for your household demand",
      "Energy-efficiency upgrades",
      "Removal and disposal of the old unit",
    ],
    problems: [
      "An aging heater you want to replace before it fails",
      "A household that keeps running out of hot water",
      "Interest in switching to tankless for efficiency or space",
      "A tank that has already failed and needs replacement",
    ],
    faqs: [
      {
        question: "Tank or tankless, which is better?",
        answer:
          "Tankless units save space and can be more efficient since they heat on demand, but have a higher upfront cost. Tank units cost less initially and suit many households. The right choice depends on your usage, budget, and space.",
      },
      {
        question: "What size water heater do I need?",
        answer:
          "Sizing depends on the number of people, bathrooms, and peak hot-water demand. We'll assess your home and recommend a capacity that fits without over-buying.",
      },
      {
        question: "Do I need a permit to replace a water heater?",
        answer:
          "Water heater replacement often requires a permit in the Las Vegas area. We handle installation to code; contact us to discuss the specifics for your property.",
      },
    ],
  },
  "leak-detection": {
    intro: "A hidden leak can quietly waste water and damage your home long before you see it.",
    trustHighlights: [
      { icon: "check-circle", label: "No-Guesswork Diagnostics" },
      { icon: "shield-check", label: "Non-Invasive Detection Methods" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We locate hidden leaks, including slab leaks, which are common in Las Vegas due to soil conditions and hard-water corrosion of aging pipes. Using electronic leak-detection methods, we pinpoint the source with minimal disruption so the repair can be as targeted as possible.",
    covers: [
      "Slab leak detection",
      "Hidden leaks behind walls and under floors",
      "Underground water line leaks",
      "Electronic and acoustic detection methods",
      "Locating the source of unexplained water-bill spikes",
    ],
    problems: [
      "A water bill that jumped for no obvious reason",
      "Warm spots on the floor (a possible slab leak)",
      "The sound of running water when everything is off",
      "Mold, mildew smell, or unexplained damp areas",
    ],
    faqs: [
      {
        question: "What causes slab leaks in Las Vegas?",
        answer:
          "Soil movement, hard-water corrosion, and aging copper pipe are common causes locally. Warning signs include water-bill spikes, warm spots on the floor, and a musty smell.",
      },
      {
        question: "How do you find a leak without tearing up my home?",
        answer:
          "We use electronic and acoustic detection equipment to pinpoint the leak's location before any digging or cutting, which keeps the repair as targeted as possible.",
      },
      {
        question: "How do I know if I have a hidden leak?",
        answer:
          "Common signs are an unexplained rise in your water bill, the sound of running water with fixtures off, damp or warm spots, and mold or mildew. If you suspect a leak, it's worth checking promptly.",
      },
    ],
  },
  "pipe-repair": {
    intro: "From a pinhole drip to a burst line, pipe problems get more expensive the longer they wait.",
    trustHighlights: [
      { icon: "check-circle", label: "Repairs for All Pipe Materials" },
      { icon: "shield-check", label: "Minimally Disruptive Methods" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We repair and replace damaged, corroded, and leaking pipes, including burst pipes, pinhole leaks, and aging lines. Where it fits the situation, we can discuss trenchless options that reduce digging and disruption. We'll explain what's wrong and what your repair and replacement options are.",
    covers: [
      "Burst pipe repair",
      "Corroded and aging pipe replacement",
      "Pinhole leak repair",
      "Repiping sections of the home",
      "Trenchless repair options where suitable",
    ],
    problems: [
      "A pipe that has burst or split",
      "Repeated small leaks from corroded lines",
      "Low water pressure from failing pipes",
      "Discolored water suggesting pipe corrosion",
    ],
    faqs: [
      {
        question: "Can a burst pipe be repaired, or does it need replacement?",
        answer:
          "It depends on the pipe's condition and age. A single failure in otherwise sound piping can often be repaired; widespread corrosion usually calls for replacing the affected section. We'll assess and recommend the best option.",
      },
      {
        question: "What is trenchless pipe repair?",
        answer:
          "Trenchless methods repair or replace pipe with minimal digging, reducing damage to your yard and driveway. Whether it's an option depends on the pipe's location and condition.",
      },
      {
        question: "Why do pipes corrode?",
        answer:
          "Age, water chemistry, and hard-water mineral content all contribute. Corrosion can show up as pinhole leaks, discolored water, or reduced pressure.",
      },
    ],
  },
  "sewer-line-repair": {
    intro: "Sewer problems are unpleasant and urgent, and they're often caused by issues you can't see.",
    trustHighlights: [
      { icon: "shield-check", label: "Camera-Verified Diagnosis" },
      { icon: "check-circle", label: "Trenchless Options When Applicable" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We diagnose and repair sewer line problems, from backups and root intrusion to collapsed lines. A camera inspection lets us see exactly what's happening inside the line so the repair is based on evidence, not guesswork. Where suitable, trenchless repair reduces excavation.",
    covers: [
      "Sewer backups and repeated clogs",
      "Root intrusion into the line",
      "Collapsed or broken sewer lines",
      "Camera inspection and diagnosis",
      "Trenchless sewer repair where suitable",
    ],
    problems: [
      "Sewage backing up into tubs, showers, or floor drains",
      "Multiple drains slow or clogged at the same time",
      "Gurgling toilets and sewage odors",
      "Soggy or sunken areas in the yard over the sewer line",
    ],
    faqs: [
      {
        question: "How do you find out what's wrong with a sewer line?",
        answer:
          "We run a camera inspection through the line to see the actual condition inside, roots, breaks, blockages, or collapse, so the repair addresses the real problem.",
      },
      {
        question: "What causes sewer line damage?",
        answer:
          "Common causes include tree-root intrusion, aging or shifting pipe, grease and debris buildup, and ground movement. A camera inspection identifies which applies.",
      },
      {
        question: "Can sewer lines be repaired without digging up my yard?",
        answer:
          "In many cases, yes. Trenchless repair can restore a line with far less excavation. Whether it fits depends on the line's condition and layout.",
      },
    ],
  },
  "toilet-repair": {
    intro: "A running or weak-flushing toilet wastes water every day it goes unfixed.",
    trustHighlights: [
      { icon: "check-circle", label: "All Toilet Types & Brands" },
      { icon: "shield-check", label: "Careful, Leak-Free Reseals" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We repair toilets that run, clog, flush weakly, or leak. Most issues come down to worn internal parts, flappers, fill valves, and wax rings, that are straightforward to replace. If a toilet is beyond economical repair, we'll tell you honestly.",
    covers: [
      "Running and constantly refilling toilets",
      "Clogs and weak flushing",
      "Flapper and fill valve replacement",
      "Wax ring replacement for base leaks",
      "Loose or rocking toilets",
    ],
    problems: [
      "A toilet that keeps running or refills on its own",
      "Water pooling around the base",
      "A weak or incomplete flush",
      "Frequent clogging",
    ],
    faqs: [
      {
        question: "Why does my toilet keep running?",
        answer:
          "Usually a worn flapper or a fill valve that isn't shutting off. Both are common, inexpensive parts to replace and stop the constant water waste.",
      },
      {
        question: "There's water around the base of my toilet, what is it?",
        answer:
          "Often a failed wax ring where the toilet meets the floor. Left alone it can damage the subfloor, so it's worth addressing promptly.",
      },
      {
        question: "Is it worth repairing an old toilet?",
        answer:
          "Often yes, most problems are worn parts. If a toilet is cracked, very old, or inefficient, replacement may be the better value, and we'll give you a straight recommendation.",
      },
    ],
  },
  "faucet-repair": {
    intro: "A dripping faucet is a small annoyance that adds up to real water waste.",
    trustHighlights: [
      { icon: "badge-check", label: "Fixture & Brand Specialists" },
      { icon: "shield-check", label: "Clean, Careful Installation" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We repair and replace faucets throughout the home, fixing drips, restoring water pressure, and replacing worn cartridges and fixtures. Whether it's a kitchen, bathroom, or utility faucet, we'll stop the drip and get it working smoothly again.",
    covers: [
      "Dripping and leaking faucets",
      "Low water pressure at the fixture",
      "Cartridge and washer replacement",
      "Faucet and fixture replacement",
      "Kitchen, bathroom, and utility faucets",
    ],
    problems: [
      "A faucet that drips constantly",
      "Low or uneven water pressure",
      "A handle that's hard to turn or leaks at the base",
      "A worn or outdated fixture you want replaced",
    ],
    faqs: [
      {
        question: "Why does my faucet drip even when it's off?",
        answer:
          "Usually a worn cartridge, washer, or O-ring inside the faucet. Replacing the worn part typically stops the drip.",
      },
      {
        question: "Can you fix low water pressure at one faucet?",
        answer:
          "Often yes. A single slow faucet is frequently a clogged aerator or cartridge, which is a quick fix. If it's more widespread, we'll investigate the cause.",
      },
      {
        question: "Should I repair or replace a faucet?",
        answer:
          "Many faucets are worth repairing with new internal parts. If the fixture is corroded, cracked, or you want an upgrade, replacement may make more sense.",
      },
    ],
  },
  "garbage-disposal-repair": {
    intro: "When the disposal jams or quits, the whole kitchen sink is out of commission.",
    trustHighlights: [
      { icon: "check-circle", label: "Repair or Replacement Options" },
      { icon: "shield-check", label: "Safe Disposal of Old Units" },
      { icon: "badge-check", label: "Upfront Pricing Before Work Begins" },
    ],
    overview:
      "We repair and replace garbage disposals, clearing jams, fixing units that hum but won't spin, and addressing leaks. When a disposal is worn out or not worth repairing, we'll replace it with a properly sized unit.",
    covers: [
      "Jammed disposals",
      "Units that hum but don't spin",
      "Leaking disposals",
      "Disposal replacement",
      "Reset and wiring issues",
    ],
    problems: [
      "A disposal that hums but doesn't turn",
      "A disposal that's completely dead",
      "Water leaking from the disposal",
      "Persistent odors or poor grinding",
    ],
    faqs: [
      {
        question: "My disposal hums but won't spin, what's wrong?",
        answer:
          "Usually something is jammed in the grinding chamber, or the motor is stuck. Sometimes the reset button resolves it; if not, it needs to be cleared or serviced. Never put your hand inside a disposal.",
      },
      {
        question: "Can a leaking disposal be fixed?",
        answer:
          "It depends on where it's leaking. Leaks at a fitting or seal can often be repaired; a leak from the body of the unit usually means it needs replacement.",
      },
      {
        question: "How long do garbage disposals last?",
        answer:
          "Most last around 8–12 years depending on use and care. If yours fails repeatedly or leaks from the housing, replacement is usually the better value.",
      },
    ],
  },
};
