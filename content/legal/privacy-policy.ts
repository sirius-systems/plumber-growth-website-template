// LEGAL REVIEW REQUIRED
// This privacy policy content is a template starting point. It must be reviewed
// and approved by a qualified legal professional before this page is deployed to
// production. Do not remove this comment until legal review is complete and
// documented.

import { clientConfig } from "@/config/client";
import type { PolicySection } from "@/content/legal/types";

const { business, region, legal } = clientConfig;
const NAME = business.publicName;
const SITE = business.websiteUrl;
const REGION = region.name;
const EMAIL = legal?.privacyContactEmail;

export const effectiveDateLabel = legal?.privacyPolicyEffectiveDate
  ? `Effective Date: ${legal.privacyPolicyEffectiveDate}`
  : "";

export const policyIntro = `${NAME} ("we," "us," or "our") operates the website ${SITE} (the "Site"). This Privacy Policy explains how we collect, use, disclose, and protect information about you when you visit our Site or submit a service request.`;

export const policySections: PolicySection[] = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    subsections: [
      {
        heading: "Information You Provide Directly",
        content: [
          "When you submit a contact form, quote request, or service inquiry on our Site, we collect the information you provide, which may include your name, phone number, email address, service address, and a description of your plumbing issue or project.",
          "We use this information to respond to your inquiry, schedule service, and communicate with you about your request.",
        ],
      },
      {
        heading: "Information Collected Automatically",
        content: [
          "When you visit our Site, we and our third-party service providers may automatically collect certain information about your device and browsing activity, including your IP address, browser type, operating system, referring URLs, pages viewed, and the date and time of your visit.",
          "This information is collected through cookies, web beacons, and similar tracking technologies. See the Cookies section below for more information.",
        ],
      },
      {
        heading: "Information From Third-Party Services",
        content: [
          "Our Site uses third-party services that may collect information about you in accordance with their own privacy policies. These services include website analytics tools, spam prevention services, and customer relationship management software. We describe these services further in the Third Parties section below.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "To respond to your service inquiries and quote requests. When you submit a form on our Site, we use your contact information to reach out to you about your plumbing request and to schedule service.",
      "To communicate with you. We may contact you by phone, text message, or email regarding your inquiry, appointment, or service. If you have consented to receive text messages, standard messaging rates may apply. You may opt out of text messages at any time by replying STOP.",
      "To improve our Site and services. We use automatically collected information to understand how visitors use our Site and to improve its performance and content.",
      "To prevent fraud and spam. We use spam prevention services to protect our forms from automated abuse.",
      "To comply with legal obligations. We may use or retain your information as required by applicable law.",
    ],
  },
  {
    id: "third-parties",
    heading: "Third Parties We Work With",
    content: [
      "We share information with the following categories of third parties in connection with operating our Site and providing our services. We do not sell your personal information to third parties for their own marketing purposes.",
    ],
    subsections: [
      {
        heading: "Customer Relationship Management",
        content: [
          "When you submit a form on our Site, your contact information and service request details are transmitted to our customer relationship management platform, which we use to manage leads, schedule service, and communicate with customers. This platform stores your information on its servers and processes it in accordance with its own privacy policy.",
        ],
      },
      {
        heading: "Analytics",
        content: [
          "We may use web analytics services to collect and analyze information about how visitors use our Site. Analytics services may use cookies and similar technologies to collect information about your visits to this and other websites. You can opt out of analytics data collection through your browser settings or through opt-out tools provided by the analytics service.",
        ],
      },
      {
        heading: "Spam Prevention",
        content: [
          "Our forms use a spam prevention service to distinguish human visitors from automated bots. This service may collect information about your device and browsing behavior to assess whether your form submission is legitimate. This processing occurs in accordance with the spam prevention service's own privacy policy.",
        ],
      },
      {
        heading: "Hosting and Infrastructure",
        content: [
          "Our Site is hosted on third-party infrastructure. Your data may be processed by our hosting provider as part of normal Site operation. Our hosting provider processes data in accordance with its own privacy policy and applicable data protection agreements.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and Tracking Technologies",
    content: [
      "Our Site uses cookies and similar tracking technologies to operate and improve the Site. Cookies are small text files stored on your device when you visit a website.",
      "We use cookies for the following purposes: to enable Site functionality, to analyze Site traffic and usage patterns, and to support spam prevention on our forms.",
      "You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing cookies. Disabling cookies may affect the functionality of some parts of our Site.",
      "Our Site may also use web beacons, pixel tags, and similar technologies in connection with analytics and communication services.",
    ],
  },
  {
    id: "data-retention",
    heading: "How Long We Keep Your Information",
    content: [
      "We retain contact and service request information for as long as necessary to provide our services and fulfill the purposes described in this policy, and as required by applicable law.",
      "We periodically review the information we hold and delete information that is no longer necessary. If you would like us to delete your information, please contact us using the information in the Contact Us section below.",
    ],
  },
  {
    id: "data-security",
    heading: "How We Protect Your Information",
    content: [
      "We use reasonable technical and organizational measures to protect the information we collect from unauthorized access, disclosure, alteration, and destruction. Our forms use encrypted connections (HTTPS) and server-side security measures.",
      "No method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Privacy Rights",
    content: [
      "Depending on where you live, you may have certain rights regarding your personal information. These may include the right to know what information we hold about you, the right to request correction or deletion of your information, and the right to opt out of certain uses of your information.",
      "Residents of California and certain other states may have additional rights under applicable state privacy laws, including the California Consumer Privacy Act (CCPA) and its amendments.",
      "To exercise your privacy rights or to make a request regarding your personal information, please contact us using the information in the Contact Us section below. We will respond to verifiable requests within the timeframe required by applicable law.",
      "We do not discriminate against individuals who exercise their privacy rights.",
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    content: [
      "Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us and we will delete it promptly.",
    ],
  },
  {
    id: "external-links",
    heading: "Links to Other Websites",
    content: [
      "Our Site may contain links to third-party websites, including review platforms and social media. We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    id: "policy-changes",
    heading: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we make material changes, we will update the effective date at the top of this page. We encourage you to review this policy periodically.",
      "Your continued use of our Site after any changes to this policy constitutes your acceptance of the updated policy.",
    ],
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:",
      [`${NAME}`, `Serving ${REGION}`, `Phone: ${business.phone}`, EMAIL ? `Email: ${EMAIL}` : ""]
        .filter(Boolean)
        .join("\n"),
      "We will respond to privacy inquiries within a reasonable timeframe.",
    ],
  },
];
