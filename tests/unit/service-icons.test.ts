import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { enabledServices } from "@/config/services";
import { SERVICE_CONTENT } from "@/config/service-content";
import { coverIcon, COVER_ICON_FALLBACK } from "@/lib/utilities/service-icons";

/**
 * The service hero derives each `covers` bullet's icon from its text rather
 * than from a data field, so two things have to hold: the resolver must never
 * return a name the LucideIcon registry lacks (that silently renders the
 * HelpCircle fallback), and the rules must not collapse a whole hero onto one
 * repeated glyph — which is the reason the plain checkmark was replaced.
 */

/** Icon names registered in components/ui/LucideIcon.tsx. */
function registeredIcons(): Set<string> {
  const src = readFileSync("components/ui/LucideIcon.tsx", "utf8");
  const registry = src.slice(src.indexOf("const ICONS"), src.indexOf("export function LucideIcon"));
  return new Set(registry.match(/^\s{2}([A-Z][A-Za-z0-9]*),$/gm)?.map((l) => l.trim().replace(",", "")) ?? []);
}

const services = enabledServices();

describe("service cover icons", () => {
  it("only resolves to icons the registry actually has", () => {
    const registered = registeredIcons();
    expect(registered.size).toBeGreaterThan(10);
    expect(registered.has(COVER_ICON_FALLBACK)).toBe(true);

    for (const svc of services) {
      for (const cover of SERVICE_CONTENT[svc.slug]?.covers ?? []) {
        expect(registered.has(coverIcon(cover)), `${coverIcon(cover)} for "${cover}"`).toBe(true);
      }
    }
  });

  it("gives each service hero more than one distinct icon", () => {
    for (const svc of services) {
      const covers = SERVICE_CONTENT[svc.slug]?.covers ?? [];
      // The hero shows the first four bullets.
      const shown = covers.slice(0, 4);
      if (shown.length < 2) continue;
      const distinct = new Set(shown.map(coverIcon));
      expect(distinct.size, `${svc.slug} resolved every bullet to one icon`).toBeGreaterThan(1);
    }
  });

  it("falls back to the 'included' checkmark for text it cannot classify", () => {
    expect(coverIcon("something entirely unrelated")).toBe(COVER_ICON_FALLBACK);
  });
});
