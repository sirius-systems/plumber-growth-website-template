/**
 * Server-only GHL configuration (docs/11 §22–§24).
 *
 * GHL field IDs, pipeline/stage IDs, and tag strings are client-specific and
 * MUST stay server-side (docs/11 §5). They are supplied via Cloudflare env vars
 * and parsed here. Never import this from a React component.
 */

/** App-field-key -> GHL custom field id (docs/11 §22). */
export interface GhlFieldMap {
  plumbingService: string;
  serviceUrgency: string;
  customerType: string;
  problemDescription: string;
  serviceStreetAddress: string;
  serviceAddressLine2: string;
  serviceCity: string;
  serviceState: string;
  servicePostalCode: string;
  existingCustomer: string;
  preferredDate: string;
  preferredTime: string;
  preferredContactMethod: string;
  emergencyType: string;
  activeFlooding: string;
  waterShutOff: string;
  gasOdor: string;
  electricalDanger: string;
  safetyAcknowledgment: string;
  submissionId: string;
  smsConsent: string;
  leadFormType: string;
  privateFeedbackRating: string;
  privateFeedback: string;
  testimonialPermission: string;
}

/** Pipeline + stage ids (docs/11 §23). */
export interface GhlPipelineConfig {
  pipelineId: string;
  stages: {
    newLead: string;
    contactAttempted: string;
    connected: string;
    estimateRequested: string;
    estimateScheduled: string;
    estimateSent: string;
    jobWon: string;
    jobLost: string;
    followUpNeeded: string;
  };
}

/** Tag allowlist — the server never accepts a tag name from the browser (docs/11 §24). */
export interface GhlTagConfig {
  websiteLead: string;
  generalQuoteRequest: string;
  emergencyRequest: string;
  standardPriority: string;
  emergencyPriority: string;
  customerFeedback: string;
  serviceTags: Record<string, string>;
  contactSubjectTags: Record<string, string>;
}

export interface GhlRuntimeConfig {
  locationId: string;
  token: string;
  pipeline: GhlPipelineConfig;
  fieldMap: GhlFieldMap;
  tags: GhlTagConfig;
  calendarId?: string;
}

/** Minimal env shape the parser reads. Cloudflare injects these per client. */
export interface GhlEnv {
  GHL_LOCATION_ID?: string;
  GHL_PRIVATE_INTEGRATION_TOKEN?: string;
  GHL_PIPELINE_ID?: string;
  GHL_STAGE_NEW_LEAD_ID?: string;
  GHL_STAGE_CONTACT_ATTEMPTED_ID?: string;
  GHL_STAGE_CONNECTED_ID?: string;
  GHL_STAGE_ESTIMATE_REQUESTED_ID?: string;
  GHL_STAGE_ESTIMATE_SCHEDULED_ID?: string;
  GHL_STAGE_ESTIMATE_SENT_ID?: string;
  GHL_STAGE_JOB_WON_ID?: string;
  GHL_STAGE_JOB_LOST_ID?: string;
  GHL_STAGE_FOLLOW_UP_NEEDED_ID?: string;
  GHL_CUSTOM_FIELD_MAP?: string;
  GHL_TAG_MAP?: string;
  GHL_CALENDAR_ID?: string;
}

export class GhlConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GhlConfigError";
  }
}

function required(env: GhlEnv, key: keyof GhlEnv): string {
  const value = env[key];
  if (!value || value.trim() === "") {
    throw new GhlConfigError(`Missing required GHL env var: ${key}`);
  }
  return value;
}

function parseJson<T>(raw: string | undefined, key: string): T {
  if (!raw || raw.trim() === "") {
    throw new GhlConfigError(`Missing JSON GHL env var: ${key}`);
  }
  try {
    return JSON.parse(raw) as T;
  } catch {
    throw new GhlConfigError(`Invalid JSON in GHL env var: ${key}`);
  }
}

/**
 * Build the runtime GHL config from Cloudflare env, failing fast if incomplete
 * so partial customer data is never written to the wrong place (docs/11 §22, §26).
 */
export function loadGhlConfig(env: GhlEnv): GhlRuntimeConfig {
  const tagRaw = parseJson<Partial<GhlTagConfig>>(env.GHL_TAG_MAP, "GHL_TAG_MAP");
  const tags: GhlTagConfig = {
    websiteLead: tagRaw.websiteLead ?? "website-lead",
    generalQuoteRequest: tagRaw.generalQuoteRequest ?? "general-quote-request",
    emergencyRequest: tagRaw.emergencyRequest ?? "emergency-plumbing-request",
    standardPriority: tagRaw.standardPriority ?? "priority-standard",
    emergencyPriority: tagRaw.emergencyPriority ?? "priority-emergency",
    customerFeedback: tagRaw.customerFeedback ?? "customer-feedback-submitted",
    serviceTags: tagRaw.serviceTags ?? {},
    contactSubjectTags: tagRaw.contactSubjectTags ?? {},
  };

  return {
    locationId: required(env, "GHL_LOCATION_ID"),
    token: required(env, "GHL_PRIVATE_INTEGRATION_TOKEN"),
    calendarId: env.GHL_CALENDAR_ID,
    fieldMap: parseJson<GhlFieldMap>(env.GHL_CUSTOM_FIELD_MAP, "GHL_CUSTOM_FIELD_MAP"),
    tags,
    pipeline: {
      pipelineId: required(env, "GHL_PIPELINE_ID"),
      stages: {
        newLead: required(env, "GHL_STAGE_NEW_LEAD_ID"),
        contactAttempted: required(env, "GHL_STAGE_CONTACT_ATTEMPTED_ID"),
        connected: required(env, "GHL_STAGE_CONNECTED_ID"),
        estimateRequested: required(env, "GHL_STAGE_ESTIMATE_REQUESTED_ID"),
        estimateScheduled: required(env, "GHL_STAGE_ESTIMATE_SCHEDULED_ID"),
        estimateSent: required(env, "GHL_STAGE_ESTIMATE_SENT_ID"),
        jobWon: required(env, "GHL_STAGE_JOB_WON_ID"),
        jobLost: required(env, "GHL_STAGE_JOB_LOST_ID"),
        followUpNeeded: required(env, "GHL_STAGE_FOLLOW_UP_NEEDED_ID"),
      },
    },
  };
}
