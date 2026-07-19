/**
 * Canonical application field types (docs/11 §8).
 *
 * These are stable app-level names, independent of GHL field IDs. The mapping to
 * GHL identifiers lives server-side in lib/ghl (docs/11 §22). Shared by the React
 * form components and the Cloudflare Pages Function, so this file must stay free
 * of DOM- and Worker-specific APIs.
 */

import type { QuoteServiceOption } from "@/config/services";

export type FormType =
  | "general-quote"
  | "emergency-request"
  | "contact"
  | "review-feedback"
  | "website-onboarding";

export type TriState = "yes" | "no" | "unsure";
export type CustomerType = "residential" | "commercial";
export type ContactMethod = "phone" | "text" | "email";

export type EmergencyType =
  | "active-water-leak"
  | "burst-pipe"
  | "sewer-backup"
  | "overflowing-fixture"
  | "no-water"
  | "no-hot-water"
  | "water-heater-leak"
  | "gas-odor"
  | "other-urgent-plumbing";

export type ContactSubject =
  | "plumbing-service-question"
  | "existing-appointment"
  | "existing-customer-support"
  | "billing-question"
  | "financing-question"
  | "vendor-inquiry"
  | "employment-inquiry"
  | "general-question"
  | "other";

export interface ServiceAddress {
  streetAddress: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
}

/** Attribution captured on every submission (docs/11 §15). */
export interface AttributionData {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  landingPage?: string;
  referrer?: string;
}

/** Shared envelope on every submission (docs/08 §4). */
export interface FormSubmissionEnvelope {
  formType: FormType;
  submissionId: string;
  idempotencyKey: string;
  submittedAt: string;
  pageUrl: string;
  referrer?: string;
  userAgentCategory?: string;
  attribution: AttributionData;
  turnstileToken?: string;
}

/** Re-export for convenience where a service value is needed. */
export type { QuoteServiceOption };
