import Link from "next/link";
import { clientConfig } from "@/config/client";
import { telHref, formatPhoneDisplay } from "@/lib/utilities/format";
import { LucideIcon } from "@/components/ui/LucideIcon";

/** Group consecutive weekdays with identical hours into "Mon–Fri" ranges. */
function groupedHours(): { label: string; value: string }[] {
  const { businessHours } = clientConfig.operations;
  const days: { day: string; value: string }[] = [
    { day: "Mon", value: businessHours.monday.label },
    { day: "Tue", value: businessHours.tuesday.label },
    { day: "Wed", value: businessHours.wednesday.label },
    { day: "Thu", value: businessHours.thursday.label },
    { day: "Fri", value: businessHours.friday.label },
    { day: "Sat", value: businessHours.saturday.label },
    { day: "Sun", value: businessHours.sunday.label },
  ];
  const out: { label: string; value: string }[] = [];
  let run: { day: string; value: string }[] = [];
  const flush = () => {
    const first = run[0];
    const last = run[run.length - 1];
    if (!first || !last) return;
    out.push({ label: first === last ? first.day : `${first.day}–${last.day}`, value: first.value });
  };
  for (const d of days) {
    const prev = run[run.length - 1];
    if (prev && prev.value !== d.value) {
      flush();
      run = [];
    }
    run.push(d);
  }
  flush();
  return out;
}

/** Contact methods (docs/04 §7). Phone (emphasized), Email, Hours, Service Area. */
export function ContactMethods() {
  const { business, operations, region, location, serviceAreas } = clientConfig;
  const email = business.email;
  const nearby = serviceAreas.slice(0, 3).map((a) => a.name).join(", ");
  const addressLine = [location.streetAddress, `${location.city}, ${location.state} ${location.postalCode ?? ""}`.trim()]
    .filter(Boolean)
    .join(", ");

  const card = {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-sm)",
    padding: "1.5rem",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.5rem",
  };

  return (
    <section className="section section-default" style={{ paddingBlock: "2rem" }}>
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", maxWidth: "1120px", margin: "0 auto", listStyle: "none", padding: 0 }}>
        {/* Phone — emphasized dark card */}
        <li style={{ ...card, background: "var(--color-primary-900)", borderColor: "var(--color-primary-900)", color: "#fff" }}>
          <LucideIcon name="Phone" size={28} color="var(--color-accent-500)" />
          <span style={{ fontWeight: 600, fontSize: "14px", color: "#fff" }}>Call Us Now</span>
          <a href={telHref(business.phone)} style={{ fontWeight: 700, fontSize: "20px", color: "#fff" }}>
            {formatPhoneDisplay(business.phone)}
          </a>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>Tap to call · Available now</span>
          {operations.emergencyServiceAvailable && (
            <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--color-accent-500)", background: "rgba(255,255,255,0.08)", borderRadius: "var(--radius-pill)", padding: "0.2rem 0.6rem" }}>
              24/7 Emergency Line
            </span>
          )}
        </li>

        {/* Email (kept — NAP consistent with footer/JSON-LD) */}
        {email && (
          <li style={card}>
            <LucideIcon name="Mail" size={28} color="var(--color-primary-600)" />
            <span style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-primary-900)" }}>Send an Email</span>
            <a href={`mailto:${email}`} style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-primary-600)", whiteSpace: "nowrap" }}>
              {email}
            </a>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>We respond during business hours</span>
          </li>
        )}

        {/* Hours */}
        <li style={card}>
          <LucideIcon name="Clock" size={28} color="var(--color-primary-600)" />
          <span style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-primary-900)" }}>Business Hours</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {groupedHours().map((h) => (
              <span key={h.label} style={{ fontSize: "13px", color: "var(--color-text)" }}>
                {h.label}: {h.value}
              </span>
            ))}
          </span>
          {operations.twentyFourSevenService && (
            <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-primary-600)" }}>24/7 emergency service</span>
          )}
        </li>

        {/* Service area (address kept per NAP decision) */}
        <li style={card}>
          <LucideIcon name="MapPin" size={28} color="var(--color-primary-600)" />
          <span style={{ fontWeight: 600, fontSize: "14px", color: "var(--color-primary-900)" }}>Service Area</span>
          <span style={{ fontWeight: 600, fontSize: "16px", color: "var(--color-primary-900)" }}>{region.name}</span>
          <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>{nearby}</span>
          <address style={{ fontStyle: "normal", fontSize: "13px", color: "var(--color-text-muted)" }}>{addressLine}</address>
          <Link href="/service-areas/" style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-primary-600)" }}>
            View all service areas →
          </Link>
        </li>
      </ul>
    </section>
  );
}
