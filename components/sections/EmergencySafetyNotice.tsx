/**
 * Emergency safety notice (docs/06 §34, docs/04 §9, UX-003).
 *
 * A single reusable safety alert shown wherever emergency plumbing is surfaced
 * (homepage emergency band, the Emergency Plumbing service page, and the
 * Emergency Request page). It MUST:
 *   - direct life-safety threats (gas, fire, electrical, injury, serious
 *     property danger) to 911 / the utility provider FIRST;
 *   - never imply guaranteed dispatch or a response time;
 *   - never provide repair instructions for hazardous systems.
 */
export function EmergencySafetyNotice() {
  return (
    <div
      role="note"
      aria-label="Emergency safety notice"
      style={{
        border: "2px solid var(--color-danger)",
        borderRadius: "var(--radius-md)",
        background: "var(--color-neutral-0)",
        padding: "var(--space-4) var(--space-6)",
      }}
    >
      <p style={{ margin: 0, fontWeight: 700, color: "var(--color-danger)" }}>
        If you smell gas, see fire, face electrical danger, have a serious injury, or
        flooding that threatens life or property, call 911 or your utility provider
        first.
      </p>
      <p style={{ margin: "var(--space-2) 0 0", color: "var(--color-text-muted)" }}>
        Do not wait for a form or online response in a true emergency. Submitting a
        request does not guarantee immediate dispatch or a specific arrival time.
      </p>
    </div>
  );
}
