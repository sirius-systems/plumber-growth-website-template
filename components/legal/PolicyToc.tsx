import type { PolicySection } from "@/content/legal/types";

/** Sticky table of contents for legal pages. Anchor links to each section id. */
export function PolicyToc({ sections }: { sections: PolicySection[] }) {
  return (
    <nav className="legal-toc" aria-label="Contents">
      <p style={{ margin: "0 0 0.75rem", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-muted)" }}>
        Contents
      </p>
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`}>
          {s.heading}
        </a>
      ))}
    </nav>
  );
}
