import type { ReactNode } from "react";

/**
 * Shared field wrapper (docs/06 §28). Persistent label, required indicator,
 * and field-level error. The control passed as children must use
 * id={`field-${id}`} and name={id} so labels/error summary links resolve.
 */
export function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <p style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <label htmlFor={`field-${id}`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {required && <span className="skip-link">required</span>}
      </label>
      {hint && (
        <span id={`hint-${id}`} style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
          {hint}
        </span>
      )}
      {children}
      {error && (
        <span id={`error-${id}`} style={{ color: "var(--color-danger)" }}>
          {error}
        </span>
      )}
    </p>
  );
}

/**
 * Accessible error summary (docs/06 §28, docs/08 §6). Render above the form when
 * a submit fails; focus is moved here by the submit hook.
 */
export function ErrorSummary({
  summaryRef,
  message,
  fieldErrors,
}: {
  summaryRef: React.RefObject<HTMLDivElement | null>;
  message: string;
  fieldErrors: Record<string, string>;
}) {
  const entries = Object.entries(fieldErrors);
  if (!message && entries.length === 0) return null;
  return (
    <div
      ref={summaryRef}
      tabIndex={-1}
      role="alert"
      style={{
        border: "2px solid var(--color-danger)",
        borderRadius: "var(--radius-sm)",
        padding: "var(--space-4)",
        marginBottom: "var(--space-6)",
      }}
    >
      {message && <p style={{ marginTop: 0, fontWeight: 700 }}>{message}</p>}
      {entries.length > 0 && (
        <ul>
          {entries.map(([field, msg]) => (
            <li key={field}>
              <a href={`#field-${field}`}>{msg}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Visually hidden honeypot input (docs/08 §5). Must stay empty. */
export function Honeypot() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
      <label htmlFor="field-website">Leave this field empty</label>
      <input id="field-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
