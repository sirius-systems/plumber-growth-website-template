/**
 * Authoritative Zod schemas for the five native forms (docs/08 §8–§13, docs/13).
 *
 * Server-side validation is authoritative (docs/05 §13). The same schemas back
 * client-side usability checks. Runtime-safe for the Cloudflare Workers runtime:
 * no DOM or Node APIs here.
 */

import { z } from "zod";
import { enabledServiceValues } from "@/config/services";

// --- Shared field primitives (docs/08 §8) -----------------------------------

const requiredName = z.string().trim().min(1).max(80);
const optionalName = z.string().trim().max(80).optional();
const email = z.string().trim().toLowerCase().email().max(254);

/** Accepts common US presentation formats; server normalizes to E.164 later. */
const usPhone = z
  .string()
  .trim()
  .refine((v) => {
    const digits = v.replace(/\D/g, "");
    return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
  }, "Enter a valid US phone number.");

const zip = z
  .string()
  .trim()
  .regex(/^\d{5}(-\d{4})?$/, "Enter a valid US ZIP code.");

const usState = z.string().trim().length(2).toUpperCase();
const triState = z.enum(["yes", "no", "unsure"]);
const contactMethod = z.enum(["phone", "text", "email"]);
const freeText = (min: number, max: number) => z.string().trim().min(min).max(max);

/** Service value must be one this client actually offers (docs/08 §9.6). */
const serviceValue = z
  .string()
  .refine((v) => (enabledServiceValues() as string[]).includes(v), "Unsupported service.");

// --- Shared submission envelope (docs/08 §4) ---------------------------------

export const attributionSchema = z
  .object({
    source: z.string().max(200).optional(),
    medium: z.string().max(200).optional(),
    campaign: z.string().max(200).optional(),
    term: z.string().max(200).optional(),
    content: z.string().max(200).optional(),
    gclid: z.string().max(400).optional(),
    gbraid: z.string().max(400).optional(),
    wbraid: z.string().max(400).optional(),
    fbclid: z.string().max(400).optional(),
    landingPage: z.string().max(2048).optional(),
    referrer: z.string().max(2048).optional(),
  })
  .strip();

export const envelopeSchema = z.object({
  submissionId: z.string().trim().min(8).max(64),
  idempotencyKey: z.string().trim().min(8).max(64),
  submittedAt: z.string().datetime().optional(),
  pageUrl: z.string().max(2048).optional(),
  referrer: z.string().max(2048).optional(),
  attribution: attributionSchema.default({}),
  turnstileToken: z.string().min(1).max(4096).optional(),
  /** Honeypot: real users leave this empty (docs/08 §5). */
  website: z.string().max(0).optional().or(z.literal("")),
});

// --- 1. General Plumbing Quote Request (docs/08 §9) --------------------------

export const generalQuoteSchema = envelopeSchema.extend({
  firstName: requiredName,
  lastName: requiredName,
  phone: usPhone,
  email,
  customerType: z.enum(["residential", "commercial"]),
  plumbingService: serviceValue,
  problemDescription: freeText(10, 2000),
  streetAddress: freeText(3, 150),
  addressLine2: z.string().trim().max(100).optional(),
  city: freeText(2, 100),
  state: usState,
  postalCode: zip,
  preferredDate: z.string().date().optional(),
  preferredTime: z.string().trim().max(60).optional(),
  preferredContactMethod: contactMethod,
  existingCustomer: triState.optional(),
  serviceConsent: z.boolean().optional(),
  marketingConsent: z.boolean().optional(),
});

// --- 2. Emergency Plumbing Request (docs/08 §10) -----------------------------

export const emergencyRequestSchema = envelopeSchema.extend({
  firstName: requiredName,
  lastName: requiredName,
  phone: usPhone,
  email: email.optional(),
  emergencyType: z.enum([
    "active-water-leak",
    "burst-pipe",
    "sewer-backup",
    "overflowing-fixture",
    "no-water",
    "no-hot-water",
    "water-heater-leak",
    "gas-odor",
    "other-urgent-plumbing",
  ]),
  activeFlooding: triState,
  waterShutOff: triState,
  gasOdor: triState,
  electricalDanger: triState,
  streetAddress: freeText(3, 150),
  addressLine2: z.string().trim().max(100).optional(),
  city: freeText(2, 100),
  state: usState,
  postalCode: zip,
  problemDescription: freeText(10, 2000),
  preferredContactMethod: z.enum(["phone", "text"]),
  safetyAcknowledgment: z.literal(true),
  serviceConsent: z.boolean().optional(),
});

// --- 3. Contact Form (docs/08 §11) -------------------------------------------

export const contactSchema = envelopeSchema.extend({
  firstName: requiredName,
  lastName: requiredName,
  email,
  phone: usPhone.optional(),
  subject: z.enum([
    "plumbing-service-question",
    "existing-appointment",
    "existing-customer-support",
    "billing-question",
    "financing-question",
    "vendor-inquiry",
    "employment-inquiry",
    "general-question",
    "other",
  ]),
  message: freeText(10, 2000),
  preferredContactMethod: contactMethod,
  serviceConsent: z.boolean().optional(),
  marketingConsent: z.boolean().optional(),
});

// --- 4. Review Feedback Form (docs/08 §12) -----------------------------------

export const reviewFeedbackSchema = envelopeSchema
  .extend({
    firstName: requiredName,
    lastName: optionalName,
    email: email.optional(),
    phone: usPhone.optional(),
    serviceDate: z.string().date().optional(),
    technicianName: z.string().trim().max(100).optional(),
    rating: z.coerce.number().int().min(1).max(5),
    feedback: freeText(5, 2000),
    permissionToContact: z.boolean().optional(),
    testimonialPermission: z.boolean().optional(),
    testimonialAttribution: z
      .enum(["first-name-and-last-initial", "first-name-only", "anonymous-customer"])
      .optional(),
  })
  // Email or phone required (docs/08 §12.5).
  .refine((d) => Boolean(d.email || d.phone), {
    message: "Provide an email or phone number.",
    path: ["email"],
  })
  // Attribution required when testimonial permission granted (docs/08 §12.6).
  .refine((d) => !d.testimonialPermission || Boolean(d.testimonialAttribution), {
    message: "Choose how your testimonial may be attributed.",
    path: ["testimonialAttribution"],
  });

// --- 5. Website Onboarding (docs/08 §13) — minimal scaffold -------------------
// Full section-by-section schema (Sections A–J) is implemented alongside the
// gated onboarding page; this covers identity + the required acknowledgments so
// the endpoint contract exists.

export const websiteOnboardingSchema = envelopeSchema.extend({
  legalBusinessName: freeText(2, 150),
  publicBusinessName: freeText(2, 150),
  ownerName: freeText(2, 150),
  primaryContactEmail: email,
  primaryContactPhone: usPhone,
  authorizedApprover: freeText(2, 150),
  accuracyAcknowledged: z.literal(true),
  passwordProhibitionAcknowledged: z.literal(true),
  scopeAcknowledged: z.literal(true),
});

// --- Schema registry keyed by endpoint form id (docs/08 §3) ------------------

export const formSchemas = {
  "general-quote": generalQuoteSchema,
  "emergency-request": emergencyRequestSchema,
  contact: contactSchema,
  "review-feedback": reviewFeedbackSchema,
  "website-onboarding": websiteOnboardingSchema,
} as const;

export type FormId = keyof typeof formSchemas;

export type GeneralQuoteInput = z.infer<typeof generalQuoteSchema>;
export type EmergencyRequestInput = z.infer<typeof emergencyRequestSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ReviewFeedbackInput = z.infer<typeof reviewFeedbackSchema>;
export type WebsiteOnboardingInput = z.infer<typeof websiteOnboardingSchema>;

export const isFormId = (v: string): v is FormId =>
  Object.prototype.hasOwnProperty.call(formSchemas, v);
