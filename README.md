# Plumber Growth System — Website Template

Reusable Next.js plumbing website template. Statically exported to **Cloudflare Pages**;
native forms are processed by **Cloudflare Pages Functions** and delivered to **GoHighLevel**.

Implements the approved architecture in the project docs (`../00`–`../15`). Key sources:
`04` (information architecture), `05` (technical architecture), `06` (design system),
`08` (form specs), `11` (data mapping / integrations).

## Stack

- Next.js 15 (App Router) · TypeScript strict · `output: "export"` (static)
- CSS Modules + CSS-custom-property design tokens (no UI framework) — `docs/06`
- Zod validation shared by client + server — `docs/05 §13`
- Cloudflare Pages Functions for form processing — `docs/05 ADR-003`
- Vitest (unit) — Playwright to be added for e2e (`docs/15`)

## Commands

```bash
npm run dev         # local dev server
npm run typecheck   # tsc for app + functions projects
npm run test        # Vitest unit tests
npm run build       # static export to ./out
```

Release gate (`docs/15 §6`): `typecheck` + `test` + `build` must pass.

## Layout

```
app/                 Routes (static export). Trailing-slash URLs (docs/04).
components/           layout/ (header, footer) + forms/ (native form UIs)
config/              client.ts (per-client business data) + services.ts (catalog)
lib/
  forms/             types + Zod schemas (shared client/server)
  ghl/               server-only GHL adapter + env config (never imported by UI)
  utilities/         formatting helpers
functions/           Cloudflare Pages Functions — trusted form endpoints
tests/               Vitest specs
```

## How customization works

Everything client-specific lives in `config/`. `config/client.ts` holds business
identity, hours, branding colors (injected as CSS vars), and SEO. `config/services.ts`
controls which service pages exist — only `enabled` services are built, appear in nav,
and enter the sitemap; disabled services 404 (`docs/04 §33`). No component edits needed
to rebrand a client.

Required values must not remain the `CONFIGURATION REQUIRED` sentinel — the build fails
via `assertClientConfigReady()` (`docs/09 §9`, `docs/12 §16`).

## Secrets & environment

Copy `.env.example` → `.env.local` for dev; set real values as encrypted Cloudflare
Pages env vars per client (`docs/11 §25`). Only `NEXT_PUBLIC_*` reach the browser.
Private GHL token, Turnstile secret, and field/stage IDs are **server-only** and never
bundled. Verified: the static export contains no secrets.

## Form processing pipeline

`components/forms/*` (native controls) → `POST /api/forms/{form}` (Cloudflare Function) →
method/content-type/size → honeypot → **server-side Turnstile** → Zod schema → GHL
delivery (`lib/ghl/client.ts`) → safe response. A success/conversion event fires only
after server acceptance (`docs/08 §7`, `docs/13 §12`).

## Implementation status

**Done & verified** (`typecheck`, 6 unit tests, static build all green):
- Full route tree (home, services hub + detail, audience/area/legal/contact/thank-you,
  emergency-request), config-driven nav, sitemap/robots with correct indexation.
- All five form Zod schemas; General Quote form wired **end-to-end** as the reference
  (UI → Function → GHL adapter). GHL adapter handles all five form routings.

**Next** (patterns established, follow the reference implementation):
- Build the remaining four form UIs (Emergency, Contact, Review Feedback, Onboarding).
- Rate limiting + idempotency storage (KV/Durable Objects — `docs/11 §20`, open decision).
- Validate GHL v2 endpoints/scopes against a live sandbox (`docs/11 §41`).
- Playwright e2e + axe accessibility passes (`docs/15`).
- ESLint config + `lint` wiring.
