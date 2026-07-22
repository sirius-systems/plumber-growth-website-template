/**
 * GHL delivery adapter (server-only — docs/11 §18.3).
 *
 * All GHL API specifics are isolated here; form UI and the Function never see
 * field IDs or payload shapes. The LeadConnector v2 endpoints/version below are
 * the intended integration and MUST be validated during integration testing
 * (docs/11 §41 open decision: API vs webhook, exact version/scopes).
 *
 * Workers-runtime safe: uses fetch only, no DOM/Node APIs.
 */

import type { GhlRuntimeConfig } from "./field-map";
import type { FormId } from "@/lib/forms/schemas";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

export interface DeliveryResult {
  ok: boolean;
  contactId?: string;
  opportunityId?: string;
  /** Stable error code from docs/08 §24 / docs/11 §33 on failure. */
  code?: string;
}

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  source?: string;
  tags?: string[];
  customFields?: { id: string; value: string }[];
}

type SubmissionData = Record<string, unknown>;

function authHeaders(config: GhlRuntimeConfig): HeadersInit {
  return {
    Authorization: `Bearer ${config.token}`,
    Version: GHL_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

function str(data: SubmissionData, key: string): string | undefined {
  const v = data[key];
  return typeof v === "string" && v.length > 0 ? v : undefined;
}

/** Build GHL custom-field entries from validated data using the client field map. */
function buildCustomFields(
  formId: FormId,
  data: SubmissionData,
  config: GhlRuntimeConfig,
): { id: string; value: string }[] {
  const map = config.fieldMap;
  const pairs: [string | undefined, string | undefined][] = [
    [map.leadFormType, formId],
    [map.submissionId, str(data, "submissionId")],
    [map.plumbingService, str(data, "plumbingService")],
    [map.customerType, str(data, "customerType")],
    [map.problemDescription, str(data, "problemDescription")],
    [map.serviceStreetAddress, str(data, "streetAddress")],
    [map.serviceCity, str(data, "city")],
    [map.serviceState, str(data, "state")],
    [map.servicePostalCode, str(data, "postalCode")],
    [map.preferredContactMethod, str(data, "preferredContactMethod")],
    [map.smsConsent, data["smsConsent"] === true ? "yes" : undefined],
    [map.emergencyType, str(data, "emergencyType")],
    [map.activeFlooding, str(data, "activeFlooding")],
    [map.waterShutOff, str(data, "waterShutOff")],
    [map.gasOdor, str(data, "gasOdor")],
    [map.electricalDanger, str(data, "electricalDanger")],
  ];
  return pairs
    .filter((p): p is [string, string] => Boolean(p[0]) && Boolean(p[1]))
    .map(([id, value]) => ({ id, value }));
}

async function upsertContact(
  config: GhlRuntimeConfig,
  payload: ContactPayload,
): Promise<string> {
  const res = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
    method: "POST",
    headers: authHeaders(config),
    body: JSON.stringify({ locationId: config.locationId, ...payload }),
  });
  if (!res.ok) throw new Error(`GHL contact upsert failed: ${res.status}`);
  const body = (await res.json()) as { contact?: { id?: string } };
  const id = body.contact?.id;
  if (!id) throw new Error("GHL contact upsert returned no id");
  return id;
}

async function createOpportunity(
  config: GhlRuntimeConfig,
  opts: { contactId: string; name: string; source: string; priority: "normal" | "high" },
): Promise<string> {
  const res = await fetch(`${GHL_API_BASE}/opportunities/`, {
    method: "POST",
    headers: authHeaders(config),
    body: JSON.stringify({
      locationId: config.locationId,
      pipelineId: config.pipeline.pipelineId,
      pipelineStageId: config.pipeline.stages.newLead,
      contactId: opts.contactId,
      name: opts.name,
      status: "open",
      source: opts.source,
    }),
  });
  if (!res.ok) throw new Error(`GHL opportunity create failed: ${res.status}`);
  const body = (await res.json()) as { opportunity?: { id?: string } };
  return body.opportunity?.id ?? "";
}

const contactName = (data: SubmissionData): string =>
  [str(data, "firstName"), str(data, "lastName")].filter(Boolean).join(" ").trim() ||
  "Website Lead";

/**
 * Orchestrate delivery per form (docs/08 §9–§13, docs/11 §19). Trigger tags are
 * applied last, after the contact and opportunity exist, so a workflow never
 * starts before its records are ready (docs/11 §19).
 */
export async function deliverSubmission(
  config: GhlRuntimeConfig,
  formId: FormId,
  data: SubmissionData,
): Promise<DeliveryResult> {
  try {
    const customFields = buildCustomFields(formId, data, config);
    const baseContact: ContactPayload = {
      firstName: str(data, "firstName"),
      lastName: str(data, "lastName"),
      email: str(data, "email"),
      phone: str(data, "phone"),
      customFields,
    };

    switch (formId) {
      case "general-quote": {
        const serviceSlug = str(data, "plumbingService");
        const serviceTag = serviceSlug ? config.tags.serviceTags[serviceSlug] : undefined;
        const contactId = await upsertContact(config, {
          ...baseContact,
          source: "Website — General Quote",
          tags: [config.tags.standardPriority, serviceTag].filter(Boolean) as string[],
        });
        const opportunityId = await createOpportunity(config, {
          contactId,
          name: `${serviceSlug ?? "Plumbing"} — ${contactName(data)}`,
          source: "Website — General Quote",
          priority: "normal",
        });
        // Trigger tags last (docs/11 §19).
        await upsertContact(config, {
          email: baseContact.email,
          phone: baseContact.phone,
          tags: [config.tags.websiteLead, config.tags.generalQuoteRequest],
        });
        return { ok: true, contactId, opportunityId };
      }

      case "emergency-request": {
        const contactId = await upsertContact(config, {
          ...baseContact,
          source: "Website — Emergency Request",
          tags: [config.tags.emergencyPriority],
        });
        const opportunityId = await createOpportunity(config, {
          contactId,
          name: `URGENT — ${str(data, "emergencyType") ?? "Emergency"} — ${contactName(data)}`,
          source: "Website — Emergency Request",
          priority: "high",
        });
        await upsertContact(config, {
          email: baseContact.email,
          phone: baseContact.phone,
          tags: [config.tags.websiteLead, config.tags.emergencyRequest],
        });
        return { ok: true, contactId, opportunityId };
      }

      case "contact": {
        const subject = str(data, "subject");
        const createsOpp = subject === "plumbing-service-question" || subject === "financing-question";
        const subjectTag = subject ? config.tags.contactSubjectTags[subject] : undefined;
        const contactId = await upsertContact(config, {
          ...baseContact,
          source: "Website — Contact",
          tags: [subjectTag].filter(Boolean) as string[],
        });
        let opportunityId: string | undefined;
        if (createsOpp) {
          opportunityId = await createOpportunity(config, {
            contactId,
            name: `Service Question — ${contactName(data)}`,
            source: "Website — Contact",
            priority: "normal",
          });
        }
        return { ok: true, contactId, opportunityId };
      }

      case "review-feedback": {
        // No sales opportunity (docs/08 §12). Store feedback; recovery handled by workflow tag.
        const rating = Number(data.rating);
        const tags = [config.tags.customerFeedback];
        if (Number.isFinite(rating) && rating <= 3) tags.push("feedback-recovery-required");
        if (data.testimonialPermission === true) tags.push("testimonial-consent-yes");
        const contactId = await upsertContact(config, { ...baseContact, source: "Website — Review Feedback", tags });
        return { ok: true, contactId };
      }

      case "website-onboarding": {
        // Onboarding routes to the AGENCY environment, not the client pipeline
        // (docs/11 §13). That delivery uses agency credentials and is handled by
        // a separate agency endpoint; this public client endpoint does not write
        // it into the plumber's CRM.
        return { ok: false, code: "FORM_ROUTING_NOT_CLIENT" };
      }

      default:
        return { ok: false, code: "FORM_UNSUPPORTED" };
    }
  } catch {
    return { ok: false, code: "FORM_DELIVERY_FAILED" };
  }
}
