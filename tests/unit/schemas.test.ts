import { describe, it, expect } from "vitest";
import { generalQuoteSchema, isFormId } from "@/lib/forms/schemas";

const validPayload = {
  submissionId: "sub-12345678",
  idempotencyKey: "idem-12345678",
  firstName: "Jane",
  lastName: "Doe",
  phone: "(555) 555-0100",
  customerType: "residential",
  plumbingService: "drain-cleaning",
  problemDescription: "My kitchen drain is clogged and backing up.",
  preferredContactMethod: "phone",
  attribution: {},
};

describe("generalQuoteSchema", () => {
  it("accepts a valid submission", () => {
    const result = generalQuoteSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("strips email/address fields that are no longer part of the form", () => {
    const result = generalQuoteSchema.safeParse({
      ...validPayload,
      email: "jane@example.com",
      streetAddress: "123 Main St",
      city: "Anytown",
      state: "tx",
      postalCode: "75001",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      const data = result.data as Record<string, unknown>;
      expect(data.email).toBeUndefined();
      expect(data.streetAddress).toBeUndefined();
      expect(data.city).toBeUndefined();
      expect(data.state).toBeUndefined();
      expect(data.postalCode).toBeUndefined();
    }
  });

  it("accepts text as a preferred contact method but rejects email", () => {
    expect(
      generalQuoteSchema.safeParse({ ...validPayload, preferredContactMethod: "text" }).success,
    ).toBe(true);
    expect(
      generalQuoteSchema.safeParse({ ...validPayload, preferredContactMethod: "email" }).success,
    ).toBe(false);
  });

  it("rejects an invalid US phone", () => {
    const result = generalQuoteSchema.safeParse({ ...validPayload, phone: "123" });
    expect(result.success).toBe(false);
  });

  it("rejects a disabled/unknown service value", () => {
    // commercial-plumbing is a real slug but disabled for this client (served by
    // the standalone /commercial-plumbing/ page), so the quote form rejects it.
    const result = generalQuoteSchema.safeParse({ ...validPayload, plumbingService: "commercial-plumbing" });
    expect(result.success).toBe(false);
  });

  it("rejects a populated honeypot", () => {
    const result = generalQuoteSchema.safeParse({ ...validPayload, website: "spam" });
    expect(result.success).toBe(false);
  });
});

describe("isFormId", () => {
  it("recognizes the five approved form ids", () => {
    for (const id of [
      "general-quote",
      "emergency-request",
      "contact",
      "review-feedback",
      "website-onboarding",
    ]) {
      expect(isFormId(id)).toBe(true);
    }
    expect(isFormId("unknown-form")).toBe(false);
  });
});
