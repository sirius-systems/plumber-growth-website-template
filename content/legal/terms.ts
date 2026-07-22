// LEGAL REVIEW REQUIRED
// This terms and conditions content is a template starting point. It must be
// reviewed and approved by a qualified legal professional before this page is
// deployed to production. Do not remove this comment until legal review is
// complete and documented.

import { clientConfig } from "@/config/client";
import type { PolicySection } from "@/content/legal/types";

const { business, region, legal } = clientConfig;
const NAME = business.publicName;
const LEGAL_NAME = legal?.legalBusinessName ?? business.legalName ?? business.publicName;
const SITE = business.websiteUrl;
const REGION = region.name;
const STATE = legal?.businessState ?? clientConfig.location.state;
const PHONE = business.phone;
const EMAIL = legal?.privacyContactEmail;

export const termsEffectiveDateLabel = legal?.termsEffectiveDate
  ? `Effective Date: ${legal.termsEffectiveDate}`
  : "";

const contactBlock = [`${LEGAL_NAME}`, `Serving ${REGION}`, `Phone: ${PHONE}`, EMAIL ? `Email: ${EMAIL}` : ""]
  .filter(Boolean)
  .join("\n");

const paymentMethods =
  legal?.paymentMethods && legal.paymentMethods.length > 0
    ? `We accept the following payment methods: ${legal.paymentMethods.join(", ")}.`
    : `Accepted payment methods are confirmed at the time of service. Call ${PHONE} for current payment options.`;

const depositPolicy =
  legal?.depositPolicy ??
  "Deposit requirements, if any, are specified in the written proposal or service agreement for your job. No deposit is collected through the website.";

const cancellationPolicy =
  legal?.cancellationPolicy ??
  `Please contact us as soon as possible if you need to cancel or reschedule a confirmed appointment. Call ${PHONE} to reschedule. Specific cancellation terms for larger projects are provided in the written proposal.`;

const warrantyContent = legal?.warrantyPolicy
  ? [
      legal.warrantyPolicy,
      "Warranties do not cover damage caused by misuse, modifications made by others, pre-existing conditions not identified at the time of service, or normal wear and tear.",
    ]
  : [
      `Warranty terms are provided in writing at the time of service and vary depending on the type of work performed. Call ${PHONE} to discuss warranty coverage for your specific job.`,
    ];

export const termsSections: PolicySection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    content: [
      `By accessing or using the website at ${SITE} (the "Site") or by submitting a service request through the Site, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Site.`,
      `${LEGAL_NAME} ("Company," "we," "us," or "our") reserves the right to update these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Your continued use of the Site after any changes constitutes your acceptance of the updated Terms.`,
    ],
  },
  {
    id: "business-information",
    heading: "Business Information",
    content: [
      `${LEGAL_NAME} is a plumbing service company operating in ${REGION}, ${STATE}. We can be contacted at:`,
      [`Phone: ${PHONE}`, EMAIL ? `Email: ${EMAIL}` : "", `Service Area: ${REGION}`].filter(Boolean).join("\n"),
    ],
  },
  {
    id: "scope-of-services",
    heading: "Scope of Services",
    content: [
      `${NAME} provides residential and commercial plumbing services in ${REGION}. Services are performed by licensed plumbing technicians in accordance with applicable local codes and regulations.`,
      "Submitting a service request through our website or contact form initiates an inquiry only. It does not constitute a confirmed appointment, a commitment to provide service, or a guarantee of availability. Service is confirmed only after a member of our team contacts you and agrees on timing.",
      "We reserve the right to decline service requests at our discretion. We do not guarantee availability for any specific date or time.",
    ],
    subsections: [
      {
        heading: "Emergency Services",
        content: [
          `Online form submissions are not monitored in real time and are not suitable for plumbing emergencies. For urgent plumbing issues, call us directly at ${PHONE}.`,
          "If you are experiencing a gas odor, fire, electrical danger, flooding you cannot control, or any immediate threat to life or property, contact 911 or your utility provider immediately. Do not wait for a form response.",
        ],
      },
      {
        heading: "Service Area",
        content: [
          `We provide services within our approved service area in ${REGION}. We do not guarantee service availability at all locations within ${REGION}. Call ${PHONE} to confirm service availability at your specific address.`,
        ],
      },
    ],
  },
  {
    id: "pricing-and-payment",
    heading: "Pricing and Payment",
    content: [
      "Pricing for plumbing services is provided as an estimate or fixed quote prior to work commencing. We do not begin work without your prior agreement to the quoted price. Final pricing may vary from estimates if the scope of work changes during the job.",
      "Payment is due upon completion of service unless otherwise agreed in writing prior to the commencement of work.",
    ],
    subsections: [
      { heading: "Accepted Payment Methods", content: [paymentMethods] },
      {
        heading: "Late Payment",
        content: [
          "Invoices not paid within the agreed timeframe may be subject to late payment fees or referred to a collections process. Specific terms are provided in writing prior to service commencement for larger projects.",
        ],
      },
      { heading: "Deposits", content: [depositPolicy] },
    ],
  },
  {
    id: "cancellations",
    heading: "Cancellations and Rescheduling",
    content: [
      cancellationPolicy,
      "We reserve the right to reschedule appointments due to scheduling conflicts, emergency calls, technician availability, or circumstances beyond our control. We will contact you as soon as possible if rescheduling is necessary.",
    ],
  },
  {
    id: "warranties",
    heading: "Warranties",
    content: [
      ...warrantyContent,
      "Manufacturer warranties on parts and equipment are subject to the manufacturer's terms and conditions. We do not extend or modify manufacturer warranties.",
      "THE SITE AND ITS CONTENT ARE PROVIDED \"AS IS\" WITHOUT WARRANTY OF ANY KIND. WE MAKE NO WARRANTY THAT THE SITE WILL BE ERROR-FREE OR THAT INFORMATION ON THE SITE IS ACCURATE, COMPLETE, OR CURRENT.",
    ],
  },
  {
    id: "customer-responsibilities",
    heading: "Customer Responsibilities",
    content: [
      "To enable us to perform services safely and effectively, you agree to:",
      "Provide accurate information about the plumbing issue, property access, and any known hazards at the property.",
      "Ensure reasonable access to the areas where work is to be performed, including clearing the work area of obstructions where possible.",
      "Disclose any known conditions that may affect the work, including the presence of mold, asbestos, lead pipes, or other hazardous materials.",
      "Provide a safe work environment for our technicians. We reserve the right to stop work and leave the site if conditions are unsafe.",
      "Ensure that a responsible adult is present at the property during service visits.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    content: [
      `To the maximum extent permitted by applicable law, ${LEGAL_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or our services.`,
      "Our total liability to you for any claim arising out of or related to these Terms or our services shall not exceed the amount you paid us for the specific service giving rise to the claim.",
      "Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability is limited to the greatest extent permitted by law.",
      "Nothing in these Terms limits liability for death or personal injury caused by our negligence, or for any other liability that cannot be limited or excluded by law.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    content: [
      `All content on the Site, including text, graphics, logos, images, and software, is the property of ${LEGAL_NAME} or its content suppliers and is protected by applicable intellectual property laws.`,
      "You may not reproduce, distribute, modify, or create derivative works from any Site content without our prior written permission. You may view and print pages from the Site for your personal, non-commercial use.",
    ],
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    content: [
      "The Site may contain links to third-party websites, including review platforms, social media, and financing providers. These links are provided for your convenience. We do not control third-party websites and are not responsible for their content, privacy practices, or terms of use.",
      "Linking to a third-party website does not constitute endorsement of that website or its content.",
    ],
  },
  {
    id: "complaints",
    heading: "Complaints and Dispute Resolution",
    content: [
      `If you are dissatisfied with our services, please contact us directly at ${PHONE} so we can attempt to resolve the issue. We take customer concerns seriously and will work in good faith to address legitimate complaints.`,
      "We encourage resolution of disputes informally before pursuing formal legal action. Nothing in these Terms prevents you from exercising any statutory rights you may have under applicable consumer protection law.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    content: [
      `These Terms are governed by and construed in accordance with the laws of the State of ${STATE}, without regard to its conflict of law provisions.`,
      `Any disputes arising under or in connection with these Terms shall be subject to the jurisdiction of the courts of ${STATE}.`,
    ],
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    content: ["If you have questions about these Terms, please contact us:", contactBlock],
  },
];
