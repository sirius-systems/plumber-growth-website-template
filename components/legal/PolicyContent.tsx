import type { ReactNode } from "react";
import { clientConfig } from "@/config/client";
import type { PolicySection } from "@/content/legal/types";

/** Renders one paragraph, converting "\n" into line breaks. */
function Para({ text, style }: { text: string; style?: React.CSSProperties }) {
  const lines = text.split("\n");
  return (
    <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--color-text)", margin: 0, ...style }}>
      {lines.map((line, i): ReactNode => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

/**
 * Legal document body (docs/04 §4.4). Reused by /privacy-policy/ and /terms/.
 * The H1 uses Inter (document typography), not the display face. The review
 * notice renders until legal.reviewComplete is true.
 */
export function PolicyContent({
  title,
  effectiveDateLabel,
  reviewNotice,
  intro,
  sections,
}: {
  title: string;
  effectiveDateLabel?: string;
  reviewNotice: string;
  intro?: string;
  sections: PolicySection[];
}) {
  const showReviewNotice = clientConfig.legal?.reviewComplete !== true;

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "32px", color: "var(--color-primary-900)", margin: 0 }}>
        {title}
      </h1>
      {effectiveDateLabel && (
        <p style={{ fontSize: "14px", color: "var(--color-text-muted)", margin: "0.5rem 0 2rem" }}>
          {effectiveDateLabel}
        </p>
      )}

      {showReviewNotice && (
        <div
          role="note"
          style={{
            background: "rgba(234, 179, 8, 0.10)",
            border: "1px solid rgba(234, 179, 8, 0.40)",
            borderRadius: "var(--radius-md)",
            padding: "0.875rem 1rem",
            margin: "0 0 2rem",
            fontSize: "13px",
            color: "var(--color-text)",
          }}
        >
          {reviewNotice}
        </div>
      )}

      {intro && <Para text={intro} style={{ fontSize: "16px", marginBottom: "2rem" }} />}

      {sections.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          style={{
            marginBottom: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: si < sections.length - 1 ? "1px solid var(--color-border)" : "none",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--color-primary-900)", marginBottom: "1rem" }}>
            {section.heading}
          </h2>
          {section.content?.map((p, i) => (
            <Para key={i} text={p} style={{ marginBottom: "0.875rem" }} />
          ))}
          {section.subsections?.map((sub) => (
            <div key={sub.heading}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-primary-900)", margin: "1.25rem 0 0.5rem" }}>
                {sub.heading}
              </h3>
              {sub.content.map((p, i) => (
                <Para key={i} text={p} style={{ marginBottom: "0.875rem" }} />
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
