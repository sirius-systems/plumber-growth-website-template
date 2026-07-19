# Plumber Growth System — Repository Instructions

Reusable Next.js plumbing website for the $297/mo Plumber Growth System SaaS product.
Static site on **Cloudflare Pages**; **GoHighLevel** provides CRM, conversations,
opportunities, calendars, reputation, and workflows. Authoritative specs are the numbered
project docs `00`–`18` (see the project root / Claude Project). Key: `04` (IA), `05`
(tech architecture), `06` (design system), `08` (forms), `11` (data mapping), `14`
(security), `15` (testing), `16` (deployment), `18` (decision log).

## Architecture boundaries (docs/05, docs/18)

- Do **not** use GHL Websites, Funnels, Form Builder, or Survey Builder (GHL-002/003).
- All five website forms are **native Next.js forms** (FORM-001).
- **Cloudflare Pages Functions** (`functions/`) process form submissions — NOT Next.js API routes (FORM-003).
- Rendering is static export (`output: "export"`); no Next.js server runtime in prod (WEB-004).
- GHL credentials / field IDs / stage IDs stay **server-side** in `lib/ghl/` + Cloudflare env (DATA-001).
- Client-specific public data lives in typed config (`config/`), never scattered in components.
- Secrets are never committed (only `NEXT_PUBLIC_*` reach the browser).
- Public forms require server-side validation + Turnstile + rate limiting + idempotency (SEC-003).
- Public file uploads are disabled in v1 (FORM-004).

## The five forms (docs/08)

1. General Plumbing Quote Request  2. Emergency Plumbing Request  3. Contact Form
4. Review Feedback Form  5. Website Onboarding Form

## Commands (docs/15 §6)

```bash
npm run dev         # local dev
npm run typecheck   # tsc for app (tsconfig.json) + functions (tsconfig.functions.json)
npm run test        # Vitest
npm run build       # static export -> ./out
```

Release gate: `typecheck` + `test` + `build` must all pass before reporting completion.

## Project layout

```
app/            Routes (static export, trailing-slash URLs — docs/04)
components/      layout/ (header, footer, SimplePage) + forms/ (UIs + shared Field/hook)
config/         client.ts (per-client data), services.ts (catalog; enabled gates page/nav/sitemap)
lib/forms/      types, Zod schemas (shared client+server), useFormSubmit hook (client-only)
lib/ghl/        server-only GHL adapter + env config — NEVER import from a client component
functions/      Cloudflare Pages Functions (trusted form endpoints)
tests/          Vitest specs
```

TypeScript is split into two projects: `tsconfig.json` (app, DOM lib) and
`tsconfig.functions.json` (Functions, Workers lib, rooted at `functions/**`). Keep
client-only code (anything using `window`/DOM/React hooks) out of the Functions import graph.

## Working rules (docs/17)

- Inspect the repo before editing; preserve unrelated work.
- Make the smallest complete change; reuse existing abstractions (shared `Field`, `useFormSubmit`).
- Do **not** invent client facts — licenses, reviews, service areas, hours, availability,
  years in business, pricing, warranties (docs/17 §22). Use typed config + the
  `CONFIGURATION REQUIRED` sentinel, which fails the build via `assertClientConfigReady()`.
- Do not weaken security or accessibility (WCAG 2.2 AA) to pass a check.
- No personal data in analytics or logs (SEC-004); conversion events fire only after server acceptance.
- Emergency messaging must never imply dispatch (UX-003); keep the safety notice + gas/electrical warnings.
- Reviews: never gate the public review link on rating (SEO-003).
- Don't claim completion without real validation output. Distinguish code-complete from
  manual GHL/Cloudflare/DNS configuration still required (docs/17 §31).

## Current status (2026-07-18)

Scaffold builds green (typecheck + 6 tests + static export, no secrets in bundle).
Full route tree, config-driven nav/sitemap/robots with correct indexation. **General Quote**
and **Emergency Request** forms wired end-to-end (UI → shared hook → Function → GHL adapter);
schemas exist for all five. Still to do: Contact / Review Feedback / Onboarding UIs;
rate-limit + idempotency storage (KV/DO — docs/11 §20); live GHL v2 endpoint validation
(docs/11 §41); Playwright e2e + axe; ESLint wiring.
