# Plumber Growth System — Decision Log

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Decision Log |
| Document ID | 18-decision-log |
| Version | 1.0 |
| Status | Active |
| Created | July 18, 2026 |
| Purpose | Record approved, superseded and unresolved product decisions |

---

## 1. Purpose

This document is the authoritative record of material product, architecture, pricing, security and operational decisions for the Plumber Growth System.

It exists to prevent:

- Reopening settled decisions without new evidence
- Contradictory implementation
- Claude Project and Claude Code drift
- Reintroduction of excluded GHL features
- Silent architecture changes
- Loss of decision rationale
- Conflicting client implementations

---

## 2. Decision Statuses

| Status | Meaning |
|---|---|
| Proposed | Suggested but not approved |
| Accepted | Approved working decision |
| Implemented | Accepted and verified in production or repository |
| Superseded | Replaced by a later decision |
| Rejected | Considered and intentionally not selected |
| Deferred | Valid decision postponed |
| Open | Requires a decision |
| Under Review | Existing decision being reconsidered |

A decision is not `Implemented` merely because it appears in documentation.

Implementation requires repository, GHL or operational evidence.

---

## 3. Decision Categories

| Prefix | Category |
|---|---|
| PROD | Product and market |
| PRICE | Pricing and commercial terms |
| WEB | Website architecture |
| FORM | Forms and data capture |
| GHL | GoHighLevel |
| DATA | Data and integrations |
| SEC | Security and privacy |
| SEO | SEO and content |
| UX | Design and accessibility |
| OPS | Operations and fulfillment |
| DEV | Development workflow |
| DEP | Deployment and maintenance |
| TEST | Testing and quality assurance |

---

## 4. Decision Summary

| ID | Decision | Status |
|---|---|---|
| PROD-001 | Initial vertical is plumbing | Accepted |
| PROD-002 | Product name is Plumber Growth System | Accepted |
| PROD-003 | Product is a managed system, not self-service software | Accepted |
| PROD-004 | Initial market is the United States | Accepted |
| PROD-005 | Initial pilot size is five clients | Accepted |
| PRICE-001 | Base subscription is $297 per month | Accepted |
| PRICE-002 | Setup fee is $0 | Accepted |
| PRICE-003 | Initial billing is month-to-month | Accepted |
| PRICE-004 | No free trial | Accepted |
| PRICE-005 | Communications usage is separately billed | Accepted |
| PRICE-006 | Initial usage markup | Open |
| PRICE-007 | Initial minimum commitment | Open |
| WEB-001 | Public website uses Next.js | Accepted |
| WEB-002 | Website is hosted on Cloudflare Pages | Accepted |
| WEB-003 | GitHub provides source control | Accepted |
| WEB-004 | Website uses static-first architecture | Accepted |
| WEB-005 | One isolated client deployment per Cloudflare project | Accepted |
| WEB-006 | One canonical reusable plumbing template | Accepted |
| WEB-007 | Initial included page count | Open |
| WEB-008 | Initial included service-page count | Open |
| WEB-009 | Initial included location-page count | Open |
| FORM-001 | All website forms are native Next.js forms | Accepted |
| FORM-002 | Five initial forms are required | Accepted |
| FORM-003 | Cloudflare Pages Functions process forms | Accepted |
| FORM-004 | Public file uploads are disabled in version one | Accepted |
| FORM-005 | Client Onboarding requires controlled access | Accepted |
| FORM-006 | General Quote drops email and property address; phone-only contact | Accepted |
| GHL-001 | GHL provides CRM and automation | Accepted |
| GHL-002 | GHL Websites and Funnels are excluded | Accepted |
| GHL-003 | GHL Form Builder and Survey Builder are excluded | Accepted |
| GHL-004 | Approved SaaS capabilities are limited | Accepted |
| GHL-005 | A plumbing snapshot provisions client operations | Accepted |
| GHL-006 | Client and agency workflows are separated | Accepted |
| GHL-007 | Final SaaS V1 or V2 architecture | Open |
| DATA-001 | GHL credentials remain server-side | Accepted |
| DATA-002 | Each client receives isolated integration credentials | Accepted |
| DATA-003 | GHL routing tags are applied after record creation | Accepted |
| DATA-004 | Original and most-recent attribution are separate | Accepted |
| DATA-005 | Preferred GHL authentication for pilot | Proposed |
| SEC-001 | Least-privilege access is required | Accepted |
| SEC-002 | Passwords are prohibited in onboarding forms | Accepted |
| SEC-003 | Turnstile, validation, rate limiting and idempotency are required | Accepted |
| SEC-004 | Analytics must exclude personal information | Accepted |
| SEC-005 | Call recording is disabled pending approval | Accepted |
| SEC-006 | Final retention periods | Open |
| SEO-001 | Client-specific, people-first content is required | Accepted |
| SEO-002 | Thin city-page generation is prohibited | Accepted |
| SEO-003 | Review gating is prohibited | Accepted |
| UX-001 | Design system is reusable and client configurable | Accepted |
| UX-002 | Accessibility target is WCAG 2.2 AA practices | Accepted |
| UX-003 | Emergency messaging must not promise dispatch | Accepted |
| OPS-001 | Two consolidated pre-launch revision rounds | Accepted |
| OPS-002 | Up to 30 minutes of routine monthly updates | Accepted |
| OPS-003 | One authorized client approver | Accepted |
| OPS-004 | Fulfillment starts after payment and complete onboarding | Accepted |
| DEV-001 | Claude Project handles strategy and specifications | Accepted |
| DEV-002 | Claude Code handles repository implementation | Accepted |
| DEV-003 | Repository uses a root `CLAUDE.md` | Accepted |
| DEV-004 | Claude Code must validate before reporting completion | Accepted |
| DEP-001 | Client repositories are private and isolated | Accepted |
| DEP-002 | Production changes use Git and preview deployments | Accepted |
| DEP-003 | Every production release requires rollback capability | Accepted |
| TEST-001 | End-to-end form-to-GHL testing is required | Accepted |
| TEST-002 | Snapshot versions require fresh-account testing | Accepted |
| TEST-003 | Cross-client isolation testing is required | Accepted |

---

# 5. Product Decisions

## PROD-001 — Initial Vertical

**Status:** Accepted  
**Decision:** The initial product will serve plumbing companies.

### Rationale

- Clear local-service intent
- High value of calls and service requests
- Frequent missed-call problem
- Strong need for rapid lead response
- Natural connection between website, CRM, calls, estimates and reviews
- Suitable for a standardized vertical product

### Consequences

- Website templates are plumbing-specific.
- CRM fields use plumbing terminology.
- Workflows reflect plumbing operations.
- Content and SEO research must be client- and market-specific.
- Other home-service verticals require separate product evaluation.

---

## PROD-002 — Product Name

**Status:** Accepted  
**Decision:** The working product name is:

```text
Plumber Growth System
```

### Primary tagline

```text
Turn more plumbing calls and website visitors into booked jobs.
```

### Note

A later brand decision may rename the product. A rename must update all customer-facing and internal documentation.

---

## PROD-003 — Managed Product Model

**Status:** Accepted
**Decision:** The product is a managed website and lead-response system.

It is not positioned as:

* Generic website hosting
* Self-service CRM access
* Unconfigured GHL software
* A guaranteed lead-generation service

### Consequences

The agency manages:

* Website implementation
* Hosting
* GHL configuration
* Workflows
* Forms integration
* Technical maintenance

The plumber primarily uses:

* Conversations
* Contacts
* Opportunities
* Calendars
* Reputation
* Invoices and reporting where applicable

---

## PROD-004 — Initial Geographic Market

**Status:** Accepted
**Decision:** The initial customer market is the United States.

### Consequences

* Initial address, phone and ZIP validation may be US-specific.
* Consent and privacy require US federal and state review.
* International expansion requires a new compliance and localization assessment.

---

## PROD-005 — Initial Pilot Size

**Status:** Accepted
**Decision:** The initial pilot will target five plumbing companies.

### Rationale

Five clients should provide enough implementation variety to identify recurring problems while allowing close founder oversight.

### Pilot restrictions

* Founder-led sales
* Founder-led onboarding
* Close QA
* No uncontrolled customization
* Detailed labor and support tracking

---

# 6. Pricing Decisions

## PRICE-001 — Base Subscription

**Status:** Accepted
**Decision:**

```text
$297 per month
```

### Consequences

The product must remain standardized and operationally efficient.

---

## PRICE-002 — Setup Fee

**Status:** Accepted
**Decision:**

```text
$0 setup fee
```

### Consequences

The agency assumes upfront implementation cost.

Required protections include:

* Reusable template
* Reusable snapshot
* Controlled page count
* Revision limits
* Qualification
* Efficient onboarding
* Controlled cancellation terms

---

## PRICE-003 — Billing Interval

**Status:** Accepted
**Decision:** Initial billing is monthly.

Annual billing may be introduced later.

---

## PRICE-004 — Trial

**Status:** Accepted
**Decision:** The initial plan will not include a free trial.

### Rationale

Real customization and deployment work begin during onboarding.

---

## PRICE-005 — Usage-Based Charges

**Status:** Accepted
**Decision:** The base subscription does not include unlimited:

* Phone numbers
* Calls
* SMS
* MMS
* Email usage
* Premium workflow actions
* AI usage
* Third-party applications
* Advertising spend
* Domain registration

These must be separately billed or rebilled and clearly disclosed.

---

## PRICE-006 — Usage Markup

**Status:** Open
**Working recommendation:** 20%.

### Required decision

Confirm markup for:

* Phone
* SMS
* Email
* Premium workflow actions

### Evidence required

* Current GHL cost structure
* Stripe or processing costs
* Customer price clarity
* Expected usage
* Support cost
* Gross-margin impact

---

## PRICE-007 — Minimum Commitment

**Status:** Open
**Question:** Should a $0-setup-fee client have an initial minimum service period?

### Options

* Remain purely month-to-month
* Three-month initial commitment
* Website activation agreement
* Early termination or transition charge

Legal and sales review are required.

---

# 7. Website Decisions

## WEB-001 — Framework

**Status:** Accepted
**Decision:** Use Next.js with TypeScript.

---

## WEB-002 — Hosting

**Status:** Accepted
**Decision:** Deploy to Cloudflare Pages.

Cloudflare Pages Functions will handle trusted dynamic form processing.

---

## WEB-003 — Source Control

**Status:** Accepted
**Decision:** Use GitHub.

---

## WEB-004 — Rendering Model

**Status:** Accepted
**Decision:** Use a static-first architecture.

### Consequences

* Primary public pages are statically generated.
* Dynamic form processing is isolated in Cloudflare Functions.
* Client content is validated before deployment.
* Runtime content fetching is minimized in version one.

---

## WEB-005 — Client Deployment Isolation

**Status:** Accepted
**Decision:** Each client receives a separate:

* Private repository
* Cloudflare Pages project
* Production domain configuration
* Environment-variable set
* GHL sub-account
* Integration credential set

### Rationale

This reduces cross-client risk and simplifies client-specific deployment and rollback.

---

## WEB-006 — Canonical Template

**Status:** Accepted
**Decision:** Maintain one canonical reusable plumbing website template.

### Consequences

Client branding and public information use structured configuration.

Base subscriptions do not receive entirely new design systems.

---

## WEB-007 — Included Page Count

**Status:** Open
**Working recommendation:** Up to 15 base content and conversion pages.

The template may support more routes than the base subscription includes.

---

## WEB-008 — Included Service Pages

**Status:** Open
**Question:** How many individual plumbing service pages are included at $297?

Potential options:

* Five
* Eight
* Ten
* All approved template service pages

The decision must reflect implementation labor and conversion value.

---

## WEB-009 — Included Location Pages

**Status:** Open
**Question:** How many client-specific location pages are included?

Working direction:

* Service Areas hub
* One primary-market page
* Additional location pages separately scoped or included in an upgraded plan

---

# 8. Form Decisions

## FORM-001 — Native Next.js Forms

**Status:** Accepted
**Decision:** All website forms will be built directly in Next.js.

This supersedes any assumption that GHL Form Builder will be used.

---

## FORM-002 — Required Form Inventory

**Status:** Accepted
**Decision:** Build:

1. General Plumbing Quote Request
2. Emergency Plumbing Request
3. Contact Form
4. Review Feedback Form
5. Website Onboarding Form

---

## FORM-003 — Server Processing

**Status:** Accepted
**Decision:** Cloudflare Pages Functions process native form submissions before sending data to GHL.

### Required processing

* Validation
* Turnstile
* Rate limiting
* Idempotency
* Normalization
* GHL mapping
* Safe errors
* Restricted logging

---

## FORM-004 — File Uploads

**Status:** Accepted
**Decision:** Public file uploads are disabled in version one.

### Rationale

The initial architecture does not yet define:

* Secure storage
* Malware scanning
* File validation
* Access control
* Retention
* Deletion

---

## FORM-005 — Onboarding Access

**Status:** Accepted
**Decision:** Website Onboarding cannot remain an unrestricted public form.

It requires signed or authenticated client access.

### Implementation detail

The specific token or authentication method remains open.

---

## FORM-006 — General Quote Field Reduction

**Status:** Accepted
**Date:** July 27, 2026

**Decision:** The General Plumbing Quote Request form (`GeneralQuoteForm`, the
site's primary lead form embedded in every page hero) no longer collects Email,
Street address, Address line 2, City, State, or ZIP code. The Preferred contact
method is reduced from three options (Phone, Text, Email) to two (Phone, Text).
Phone is now the only contact channel captured on this form.

### What changed

* Client component: removed the Email and property-address inputs and the Email
  radio option; the Preferred contact legend now offers Phone and Text only. The
  service-consent line was adjusted from "by phone or email" to "by phone or
  text message" to match the remaining channels.
* Zod schema (`generalQuoteSchema`): dropped `email`, `streetAddress`,
  `addressLine2`, `city`, `state`, `postalCode`; `preferredContactMethod`
  narrowed to `["phone", "text"]`. Unknown keys are stripped, so a stray email
  or address in the payload is discarded server-side.
* GHL delivery (`deliverSubmission`, `general-quote` case): contact upsert and
  trigger-tag upsert send phone only; no email or property-address custom fields
  are written for this form.
* Docs/08 §9.5 field table updated to match.

### Deviation from QUOTE-001

PRD QUOTE-001 lists Email, Service address, City, State, and ZIP code as required
information for this form. This decision intentionally deviates from that
baseline for the General Quote form only.

### Tradeoffs accepted

* **Phone-only deduplication.** With no email, contact matching relies on
  normalized phone alone. Two people sharing a phone, or a customer who later
  submits with a different number, will not merge on email.
* **No email acknowledgment fallback.** Automated email confirmations/nurture
  cannot target these leads; acknowledgment must go by phone or text.
* **Blank Email/Address in internal notifications.** Internal new-lead
  notifications for this form will show empty Email and Property Address; the
  team collects those details on contact.

### Scope boundary

This decision applies to the General Quote form only. The Emergency Request form
(`emergency-request`) still collects email (optional) and full property address,
and its endpoint and GHL mapping are unchanged.

---

# 9. GoHighLevel Decisions

## GHL-001 — GHL Responsibility

**Status:** Accepted
**Decision:** GHL provides:

* CRM
* Conversations
* Contacts
* Opportunities
* Calendars
* Reputation
* Calls and messaging
* Workflows
* Invoices
* SaaS provisioning

---

## GHL-002 — Websites and Funnels Excluded

**Status:** Accepted
**Decision:** Do not use:

* GHL Websites
* GHL Funnels

The public website remains in Next.js.

---

## GHL-003 — Form and Survey Builders Excluded

**Status:** Accepted
**Decision:** Do not use:

* GHL Form Builder
* GHL Survey Builder

This decision was explicitly confirmed after choosing native Next.js forms.

---

## GHL-004 — Base SaaS Capabilities

**Status:** Accepted
**Decision:** The base configuration includes:

* 2 Way Text & Email Conversation
* Web Chat
* Reputation Management
* GMB Call Tracking
* Missed Call Text Back
* Calendar
* CRM
* Opportunities
* Trigger Links
* SMS & Email Templates
* Workflows
* Invoice
* Launchpad

Additional features require a product-scope decision.

---

## GHL-005 — Client Snapshot

**Status:** Accepted
**Decision:** Attach a reusable plumbing snapshot to the SaaS plan.

The snapshot includes reusable operational configuration such as:

* Custom values
* Custom fields
* Tags
* Pipeline
* Calendar template
* Client workflows
* Message templates
* Trigger links
* Review settings

---

## GHL-006 — Client and Agency Workflow Separation

**Status:** Accepted
**Decision:** Separate workflows by operational owner.

### Client snapshot

Contains:

* Plumbing lead workflows
* Missed-call workflows
* Appointment workflows
* Estimate workflows
* Review workflows
* Feedback workflows

### Agency operations account

Contains:

* SaaS purchase
* Client onboarding
* Website production
* Missing assets
* Website approval
* Launch
* Subscription payment failures
* Cancellation
* Service termination

### Superseded assumption

Earlier planning grouped SaaS onboarding and billing workflows into the client snapshot. That design is superseded.

---

## GHL-007 — SaaS V1 or V2

**Status:** Open
**Current recommendation:** Evaluate SaaS V1 with Stripe for the pilot.

### Decision factors

* Payment provider
* Proration
* Coupons
* Payment-method updates
* Automation integration
* Subscription lifecycle
* Current GHL capabilities

Do not implement billing workflows until this decision is final.

---

# 10. Data and Integration Decisions

## DATA-001 — Server-Side Credentials

**Status:** Accepted
**Decision:** GHL credentials remain server-side in Cloudflare environment bindings.

---

## DATA-002 — Client Credential Isolation

**Status:** Accepted
**Decision:** Each client receives isolated GHL integration credentials.

A browser cannot choose the destination GHL Location ID.

---

## DATA-003 — Workflow Trigger Ordering

**Status:** Accepted
**Decision:** Apply GHL workflow-routing tags only after:

1. Contact creation or update
2. Custom-field mapping
3. Opportunity creation or identification
4. Opportunity note creation

### Rationale

This prevents workflows from starting before required records exist.

---

## DATA-004 — Attribution Model

**Status:** Accepted
**Decision:** Preserve:

* Original contact attribution
* Most-recent contact attribution
* Opportunity-specific attribution

Original attribution must not be overwritten by later submissions.

---

## DATA-005 — Pilot GHL Authentication

**Status:** Proposed
**Recommendation:** Use one least-privilege private integration token per client during the pilot.

A future OAuth integration may be evaluated after volume justifies it.

---

# 11. Security and Compliance Decisions

## SEC-001 — Least Privilege

**Status:** Accepted
**Decision:** Client, agency and integration access must use the minimum required permissions.

---

## SEC-002 — Password Collection

**Status:** Accepted
**Decision:** Do not collect passwords, recovery codes or private credentials through forms, email or text.

Use secure invitations.

---

## SEC-003 — Public Form Security

**Status:** Accepted
**Decision:** Public forms require:

* Server-side validation
* Turnstile
* Honeypot
* Rate limiting
* Idempotency
* Field allowlists
* Safe errors
* Restricted logs

---

## SEC-004 — Analytics Personal Information

**Status:** Accepted
**Decision:** Public analytics must not receive:

* Names
* Emails
* Phones
* Addresses
* Customer messages
* Emergency answers
* Private ratings
* Feedback
* Onboarding information
* GHL contact or opportunity IDs

---

## SEC-005 — Call Recording

**Status:** Accepted
**Decision:** Call recording and transcription remain disabled until legal, consent, notice, access and retention requirements are approved.

---

## SEC-006 — Data Retention

**Status:** Open
**Required schedules:**

* Form-processing logs
* GHL customer data
* Conversations
* Call recordings if later enabled
* Private feedback
* Consent records
* Onboarding data
* Billing
* Repositories
* Deployments
* Backups

---

# 12. SEO and Content Decisions

## SEO-001 — Client-Specific Content

**Status:** Accepted
**Decision:** Content must use verified client-specific information and provide real user value.

Changing only the company and city names is not an acceptable implementation.

---

## SEO-002 — Location Page Quality

**Status:** Accepted
**Decision:** Do not generate thin location pages at scale.

A location page requires:

* Verified service coverage
* Distinct local information
* Meaningful customer value
* No false office
* Appropriate internal links

---

## SEO-003 — Review Gating

**Status:** Accepted
**Decision:** Review gating is prohibited.

The public review option must remain available regardless of private-feedback rating.

---

# 13. Design and Accessibility Decisions

## UX-001 — Reusable Design System

**Status:** Accepted
**Decision:** Use a shared plumbing design system with client customization through controlled tokens.

Client customization may change:

* Logo
* Colors
* Photography
* Public information

It does not automatically include a new layout or component system.

---

## UX-002 — Accessibility Target

**Status:** Accepted
**Decision:** Target WCAG 2.2 AA practices.

Required areas include:

* Navigation
* Forms
* Error handling
* Focus
* Contrast
* Keyboard use
* Reduced motion
* Zoom and reflow

---

## UX-003 — Emergency Messaging

**Status:** Accepted
**Decision:** Emergency messaging must not automatically claim:

* Technician dispatched
* Technician on the way
* Immediate availability
* Confirmed appointment
* Guaranteed arrival time

Immediate threats involving gas, fire, electricity, serious injury, life or property require appropriate emergency or utility direction.

---

# 14. Operations Decisions

## OPS-001 — Pre-Launch Revisions

**Status:** Accepted
**Decision:** Include two consolidated revision rounds before launch.

A round is one organized list submitted by the authorized approver.

---

## OPS-002 — Routine Monthly Updates

**Status:** Accepted
**Decision:** Include up to 30 minutes of routine website updates per billing month.

Unused time does not roll over.

---

## OPS-003 — Authorized Approver

**Status:** Accepted
**Decision:** Every client designates one authorized approver.

This person:

* Supplies information
* Consolidates feedback
* Approves content
* Approves launch

---

## OPS-004 — Fulfillment Start

**Status:** Accepted
**Decision:** The fulfillment timeline begins after:

* Successful payment
* Active subscription
* Required onboarding
* Required assets
* Required access
* Scope confirmation

Client delays pause the implementation timeline.

---

# 15. Development Decisions

## DEV-001 — Claude Project Responsibility

**Status:** Accepted
**Decision:** Claude Project handles strategy, research, specifications, prompts and reviews.

---

## DEV-002 — Claude Code Responsibility

**Status:** Accepted
**Decision:** Claude Code handles repository inspection, implementation, testing and evidence-based reporting.

---

## DEV-003 — Repository Instructions

**Status:** Accepted
**Decision:** The repository will contain a root:

```text
CLAUDE.md
```

It will define architecture boundaries and required validation.

---

## DEV-004 — Validation Before Completion

**Status:** Accepted
**Decision:** Claude Code cannot report completion without running the applicable:

* Formatting
* Lint
* Type check
* Tests
* Production build
* Additional accessibility or end-to-end checks when required

---

# 16. Deployment Decisions

## DEP-001 — Private Client Repositories

**Status:** Accepted
**Decision:** Each client website uses an isolated private repository created from the canonical template.

---

## DEP-002 — Git-Based Production Changes

**Status:** Accepted
**Decision:** Production changes should move through:

```text
Branch
→ Pull request
→ Automated validation
→ Cloudflare preview
→ Review
→ Main branch
→ Production
```

---

## DEP-003 — Rollback

**Status:** Accepted
**Decision:** Every production release must retain a known-good rollback.

---

# 17. Testing Decisions

## TEST-001 — End-to-End Form Testing

**Status:** Accepted
**Decision:** A form is not complete until the full journey is tested:

```text
Next.js form
→ Cloudflare Function
→ GHL contact
→ GHL opportunity
→ GHL workflow
→ Notification
→ Customer acknowledgment
```

---

## TEST-002 — Fresh-Account Snapshot Test

**Status:** Accepted
**Decision:** Every snapshot version must be loaded and tested in a fresh blank sub-account.

Testing only inside the source account is insufficient.

---

## TEST-003 — Cross-Client Isolation

**Status:** Accepted
**Decision:** Testing must confirm that:

* Client A cannot submit into Client B’s GHL location
* Client A’s token cannot access Client B
* Browser data cannot select a GHL destination
* Onboarding access cannot cross clients
* Analytics and logs do not mix client data

---

# 18. Superseded Decisions

| Superseded item                                                 | Replacement                                                                 |
| --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Agency onboarding workflows inside the plumbing client snapshot | GHL-006 separates client and agency workflows                               |
| Potential use of GHL forms or surveys                           | FORM-001 and GHL-003 require native Next.js forms                           |
| Treating Request Service preferred date as confirmed            | UX-003 and workflow specifications require human or authorized confirmation |
| Review flow that routes positive ratings differently            | SEO-003 requires equal public-review access                                 |

---

# 19. Open Decision Register

| ID        | Decision needed                        | Priority | Required before              |
| --------- | -------------------------------------- | -------: | ---------------------------- |
| PRICE-006 | Usage markup                           |     High | SaaS checkout                |
| PRICE-007 | Initial commitment                     |     High | Subscription agreement       |
| WEB-007   | Included page count                    |     High | Sales launch                 |
| WEB-008   | Included service pages                 |     High | Sales launch                 |
| WEB-009   | Included location pages                |     High | Sales launch                 |
| GHL-007   | SaaS V1 or V2                          | Critical | Billing configuration        |
| DATA-005  | Pilot GHL authentication               |     High | Integration implementation   |
| SEC-006   | Retention periods                      | Critical | Commercial launch            |
| OPEN-001  | Final Next.js version                  |     High | Repository initialization    |
| OPEN-002  | Package manager                        |     High | Repository initialization    |
| OPEN-003  | Styling implementation                 |     High | Design-system implementation |
| OPEN-004  | Testing libraries                      |     High | Repository initialization    |
| OPEN-005  | Analytics platform                     |     High | Tracking implementation      |
| OPEN-006  | Onboarding authentication              | Critical | Onboarding implementation    |
| OPEN-007  | Onboarding storage                     | Critical | Onboarding implementation    |
| OPEN-008  | Domain ownership                       |     High | Client agreement             |
| OPEN-009  | Website portability after cancellation |     High | Client agreement             |
| OPEN-010  | Phone-number portability               |     High | Client agreement             |
| OPEN-011  | Final consent language                 | Critical | Messaging launch             |
| OPEN-012  | Final support commitments              |     High | Sales launch                 |
| OPEN-013  | Cancellation policy                    | Critical | SaaS checkout                |
| OPEN-014  | Refund policy                          | Critical | SaaS checkout                |

---

## 20. Adding a Decision

Use this format:

```markdown
## [ID] — [Decision Name]

**Status:** Proposed | Accepted | Implemented | Superseded | Rejected | Deferred | Open  
**Decision date:** YYYY-MM-DD  
**Decision owner:** Name or role

### Context

Why the decision is needed.

### Decision

The selected approach.

### Rationale

Why this option was selected.

### Alternatives considered

- Alternative one
- Alternative two

### Consequences

Expected benefits, costs, limitations and follow-up work.

### Documents affected

- Document
- Document

### Implementation status

What has and has not been implemented.
```

---

## 21. Decision Change Process

To change an accepted decision:

1. Identify the existing decision ID.
2. Provide new evidence or constraints.
3. Document alternatives.
4. Mark the original decision Superseded or Under Review.
5. Add the replacement decision.
6. Update affected documents.
7. Update repository instructions.
8. Update implementation.
9. Run regression testing.
10. Record the deployment status.

Do not edit historical rationale to make an earlier decision appear never to have existed.

---

## 22. Decision Log Acceptance Criteria

The decision log is effective when:

1. Material decisions have stable identifiers.
2. Accepted and open decisions are distinguishable.
3. Superseded decisions remain visible.
4. Architecture corrections are recorded.
5. Open decisions identify required deadlines.
6. Claude Project uses this log before creating prompts.
7. Claude Code reads it before implementation.
8. Documentation changes update the log.
9. Implementation status is not confused with approval.
10. No major product decision changes silently.

---

## 23. Next Document

The next project document is:

`19-launch-checklist.md`

It will consolidate the final commercial, website, GHL, security, analytics, testing, client-approval and production-launch requirements into one executable checklist.
