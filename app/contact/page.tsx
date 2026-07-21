import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { Breadcrumb } from "@/components/sections/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Las Vegas Pro Plumbing at (888) 308-3262. Serving Las Vegas, Henderson, North Las Vegas, and surrounding areas.",
  alternates: { canonical: "/contact/" },
};

const DAYS: { key: keyof typeof clientConfig.operations.businessHours; label: string }[] = [
  { key: "monday", label: "Monday" },
  { key: "tuesday", label: "Tuesday" },
  { key: "wednesday", label: "Wednesday" },
  { key: "thursday", label: "Thursday" },
  { key: "friday", label: "Friday" },
  { key: "saturday", label: "Saturday" },
  { key: "sunday", label: "Sunday" },
];

export default function ContactPage() {
  const { business, location, operations } = clientConfig;
  const addressLine = [
    location.streetAddress,
    `${location.city}, ${location.state} ${location.postalCode ?? ""}`.trim(),
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <section className="container section">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 style={{ fontSize: "var(--font-size-3xl)" }}>Contact {business.publicName}</h1>

      <div
        style={{
          display: "grid",
          gap: "var(--space-8)",
          gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
          alignItems: "start",
        }}
      >
        {/* Contact details */}
        <div>
          <p style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, margin: 0 }}>
            <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>
          </p>
          <p>
            Email: <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <address style={{ fontStyle: "normal", color: "var(--color-text-muted)" }}>
            {addressLine}
          </address>

          {operations.emergencyServiceAvailable && (
            <p style={{ color: "var(--color-text-muted)" }}>
              <strong>24/7 emergency service</strong>, call{" "}
              <a href={telHref(business.phone)}>{formatPhoneDisplay(business.phone)}</a>.
            </p>
          )}

          <h2 style={{ fontSize: "var(--font-size-lg)" }}>Business hours</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {DAYS.map(({ key, label }) => (
              <li
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "var(--space-4)",
                  maxWidth: "20rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <span>{label}</span>
                <span>{operations.businessHours[key].label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact form */}
        <div>
          <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0 }}>Send us a message</h2>
          <ContactForm />
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
            For service requests with details, use our{" "}
            <Link href="/request-service/">Request Service</Link> form.
          </p>
        </div>
      </div>
    </section>
  );
}
