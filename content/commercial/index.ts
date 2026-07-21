/**
 * Commercial plumbing page content (docs/04 §7). Resolved for the Las Vegas Pro
 * Plumbing demo. `icon` values are Lucide names resolved via ui/LucideIcon.
 * Approved copy — not scaffolding.
 */

export interface CommercialIndustry {
  icon: string;
  label: string;
  description: string;
}
export interface CommercialProblem {
  icon: string;
  title: string;
  description: string;
}
export interface CommercialProcessStep {
  icon: string;
  heading: string;
  description: string;
}
export interface CommercialBenefit {
  icon: string;
  heading: string;
  description: string;
}
export interface CommercialFaq {
  question: string;
  answer: string;
}

export const commercialQuickAnswer =
  "Las Vegas Pro Plumbing provides licensed commercial plumbing service throughout Clark County for restaurants, office buildings, apartment complexes, retail facilities, and multi-unit properties. Commercial services include grease trap maintenance, sewer line jetting, commercial water heater service, restroom build-outs, backflow prevention testing, and camera inspections. Call (888) 308-3262 or submit a commercial service request to schedule an assessment.";

export const commercialSubheading =
  "Scheduled maintenance, emergency repairs, and build-out plumbing for businesses and multi-unit properties across Clark County.";

export const commercialIndustries: CommercialIndustry[] = [
  { icon: "UtensilsCrossed", label: "Restaurants and Food Service", description: "Grease trap service, commercial kitchen drain cleaning, and code-compliant fixture installation for food service operations." },
  { icon: "Building2", label: "Office Buildings", description: "Restroom maintenance, water heater service, and plumbing repairs for single and multi-tenant office properties." },
  { icon: "Landmark", label: "Apartments and Multifamily", description: "Unit repairs, common area plumbing, and emergency response for apartment complexes and HOA properties." },
  { icon: "ShoppingBag", label: "Retail and Small Business", description: "Fixture installation, drain service, and responsive repairs for retail locations and small business owners." },
  { icon: "GraduationCap", label: "Schools and Institutions", description: "Scheduled maintenance and compliant installations for educational facilities and institutional properties." },
  { icon: "Warehouse", label: "Warehouses and Light Industrial", description: "Floor drain maintenance, utility plumbing, and industrial fixture service for warehouse and light industrial facilities." },
];

export const commercialProblems: CommercialProblem[] = [
  { icon: "Filter", title: "Grease Trap Backup", description: "Overloaded or unmaintained grease traps cause drain backups, health code violations, and forced closures in food service facilities." },
  { icon: "AlertTriangle", title: "Sewer Line Blockages", description: "Heavy-use commercial drains accumulate buildup faster than residential lines, leading to slow drainage or full backups across multiple units." },
  { icon: "Thermometer", title: "Commercial Water Heater Failure", description: "High-demand water heaters in restaurants, hotels, and multi-unit buildings require faster response than residential units to avoid operational disruption." },
  { icon: "Droplets", title: "Backflow Contamination Risk", description: "Commercial properties in Clark County require regular backflow prevention testing to maintain compliance and protect the water supply." },
  { icon: "Search", title: "Hidden Leaks in Large Buildings", description: "Leaks inside walls, above drop ceilings, or under slabs in commercial buildings can go undetected until significant damage has occurred." },
  { icon: "Clock", title: "After-Hours Emergency Repairs", description: "Plumbing failures outside business hours can halt operations the following day. Commercial facilities need a provider available around the clock." },
];

export const commercialProcess: CommercialProcessStep[] = [
  { icon: "Phone", heading: "Initial Call or Service Request", description: "Contact us by phone or submit the commercial service request form with details about your property, the issue type, and your preferred contact window. We respond promptly and do not require you to navigate a long phone tree." },
  { icon: "ClipboardList", heading: "On-Site Assessment", description: "A licensed plumber visits your property to assess the scope of work, review access requirements, and identify any code or compliance considerations before any work begins." },
  { icon: "FileText", heading: "Written Proposal", description: "We provide a written proposal outlining the scope, timeline, and cost before scheduling. No surprise invoices. You approve the work before it starts." },
  { icon: "CalendarCheck", heading: "Scheduled Work, Minimal Disruption", description: "Work is scheduled at a time that minimizes disruption to your operations or tenants. We coordinate access, communicate arrival windows, and work efficiently to stay on schedule." },
  { icon: "FileCheck", heading: "Post-Job Report", description: "After completing the work, we provide documentation including photos, notes on what was done, and any recommendations for future maintenance. Records are available for your property file." },
];

export const commercialBenefits: CommercialBenefit[] = [
  { icon: "Shield", heading: "Licensed, Insured, and Code-Compliant", description: "Every job meets local code requirements. We carry full liability insurance and can provide documentation for your property records or compliance files." },
  { icon: "Clock", heading: "24/7 Emergency Response", description: "Commercial plumbing failures do not follow business hours. We respond to emergencies around the clock to minimize downtime and protect your operation." },
  { icon: "FileText", heading: "Written Proposals and Documentation", description: "We provide written scope and pricing before work begins and post-job reports after completion. No surprises on the invoice." },
  { icon: "Wrench", heading: "Multi-Unit and Multi-System Capability", description: "From single-unit repairs to building-wide maintenance, we handle the scale and complexity that commercial properties require." },
];

export const commercialFaqs: CommercialFaq[] = [
  { question: "Do you offer after-hours and weekend commercial plumbing service?", answer: "Yes. Las Vegas Pro Plumbing provides emergency plumbing service around the clock, including nights and weekends. Commercial facilities with urgent plumbing failures can call (888) 308-3262 at any time. For gas, fire, or electrical danger, contact 911 or your utility provider first." },
  { question: "Can you handle multi-location or multi-unit accounts?", answer: "Yes. Las Vegas Pro Plumbing works with property managers and facility teams managing multiple units or locations. Contact us to discuss your portfolio and service needs." },
  { question: "Do you provide maintenance contracts for commercial properties?", answer: "Contact us to discuss scheduled maintenance arrangements. Las Vegas Pro Plumbing works with commercial clients on planned service schedules depending on property type and scope. Call (888) 308-3262 to discuss your requirements." },
  { question: "How do you price commercial plumbing jobs?", answer: "Commercial pricing depends on scope, access, materials, and timeline. Las Vegas Pro Plumbing provides written proposals before work begins so there are no surprise invoices. Call (888) 308-3262 or submit a service request to arrange an assessment." },
  { question: "Can you work with our general contractor or facilities team?", answer: "Yes. We coordinate with general contractors, facilities managers, and property management teams on build-outs, renovations, and ongoing maintenance. We provide the documentation and communication your team needs." },
  { question: "Are you licensed and insured for commercial work in Clark County?", answer: "Yes. Las Vegas Pro Plumbing is fully licensed and insured in Nevada for both residential and commercial plumbing. We can provide insurance certificates and license documentation on request." },
];
