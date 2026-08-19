import { LucideIcon } from "@/components/ui/LucideIcon";
import type { ServiceContent } from "@/config/service-content";

type TimelyRepairContent = NonNullable<ServiceContent["timelyRepair"]>;

/**
 * "Why timely repair matters" (docs/06 §25). Supporting image on the left,
 * heading + checklist on the right; stacks to a single column below 64rem.
 *
 * All copy comes from `SERVICE_CONTENT[slug].timelyRepair` — nothing is
 * hardcoded here, so this component can be reused as-is if the section is
 * later propagated to other services.
 */
export function TimelyRepair({ content }: { content: TimelyRepairContent }) {
  return (
    <section className="section section-default">
      <div className="section__inner">
        <div className="wh-split wh-split--even">
          {/* Image placeholder, signals a real photo is needed (same convention
              as CommonProblems / RegionMap). No src is invented here. */}
          <div className="problems-image-placeholder" role="img" aria-label={content.heading}>
            <LucideIcon name="Clock" size={40} color="var(--color-neutral-500)" />
            <p style={{ margin: 0, fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>Photo coming soon</p>
          </div>

          <div>
            <h2 style={{ fontSize: "var(--font-size-2xl)", marginTop: 0, marginBottom: "var(--space-3)" }}>
              {content.heading}
            </h2>
            <p style={{ marginTop: 0, color: "var(--color-text-muted)" }}>{content.subheading}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-6) 0 0", display: "grid", gap: "var(--space-5)" }}>
              {content.items.map((item) => (
                <li key={item.title} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      flex: "none",
                      borderRadius: "50%",
                      background: "var(--color-primary-50)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LucideIcon name={item.icon} size={20} color="var(--color-primary-600)" />
                  </span>
                  <div>
                    <h3 style={{ margin: "0 0 var(--space-1)", fontSize: "var(--font-size-base)", color: "var(--color-primary-900)" }}>
                      {item.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: "var(--font-size-sm)", lineHeight: "var(--line-height-body)", color: "var(--color-text-muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
