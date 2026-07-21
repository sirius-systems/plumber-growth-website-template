import { describe, it, expect } from "vitest";
import { generalQuoteSchema, isFormId } from "@/lib/forms/schemas";

const validPayload = {
  submissionId: "sub-12345678",
  idempotencyKey: "idem-12345678",
  firstName: "Jane",
  lastName: "Doe",
  phone: "(555) 555-0100",
  email: "JANE@EXAMPLE.COM",
  customerType: "residential",
  plumbingService: "drain-cleaning",
  problemDescription: "My kitchen drain is clogged and backing up.",
  streetAddress: "123 Main St",
  city: "Anytown",
  state: "tx",
  postalCode: "75001",
  preferredContactMethod: "phone",
  attribution: {},
};

describe("generalQuoteSchema", () => {
  it("accepts a valid submission and normalizes email/state", () => {
    const result = generalQuoteSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("jane@example.com");
      expect(result.data.state).toBe("TX");
    }
  });

  it("rejects an invalid email", () => {
    const result = generalQuoteSchema.safeParse({ ...validPayload, email: "not-an-email" });
    expect(result.success).toBe(false);
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
