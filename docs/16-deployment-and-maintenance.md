# Plumber Growth System — Deployment and Maintenance

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Deployment and Maintenance |
| Document ID | 16-deployment-and-maintenance |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Documents | 00-project-overview.md through 15-testing-and-quality-assurance.md |
| Source Control | GitHub |
| Website Framework | Next.js |
| Hosting | Cloudflare Pages |
| Dynamic Processing | Cloudflare Pages Functions |
| CRM | GoHighLevel |

---

## 1. Purpose

This document defines how Plumber Growth System websites and related GHL assets will be:

- Created
- Versioned
- Reviewed
- Built
- Deployed
- Configured
- Monitored
- Updated
- Rolled back
- Maintained
- Archived
- Terminated

It covers the canonical website template, client repositories, Cloudflare Pages, domains, environment variables, Next.js forms, GHL integrations, snapshots, workflows, dependencies, incidents and cancellation.

---

## 2. Deployment Objectives

The deployment process must provide:

- Repeatable client launches
- Isolated client environments
- Reviewable changes
- Preview deployments
- Automated validation
- Reliable production releases
- Fast rollback
- Secure secrets
- Accurate domains
- Correct GHL routing
- Documented versions
- Controlled maintenance
- Safe cancellation

---

## 3. Deployment Principles

### 3.1 Source control is authoritative

Production website changes must originate from the approved repository.

Avoid untracked edits made only through hosting interfaces.

### 3.2 Preview before production

Material changes must receive a preview deployment and appropriate review.

### 3.3 One client, one production environment

Each plumbing client should have:

- One private client repository
- One Cloudflare Pages project
- One production domain configuration
- One GHL sub-account
- One isolated credential set

### 3.4 Secrets remain outside Git

All private credentials belong in secure environment bindings.

### 3.5 Production requires validation

A successful upload does not prove that forms, calls, workflows, analytics or search controls work.

### 3.6 Rollback must remain available

Keep a known-good production deployment available before releasing changes.

---

## 4. Repository Model

## 4.1 Canonical template repository

Recommended name:

```text
plumber-growth-website-template
```

Purpose:

* Maintain reusable components
* Maintain the design system
* Maintain form processing
* Maintain tests
* Maintain page templates
* Maintain documentation
* Publish controlled template releases

## 4.2 Client repositories

Recommended format:

```text
client-slug-plumbing-website
```

Each client repository contains:

* Shared template code
* Client public configuration
* Client content
* Approved public assets
* Redirects
* Tests
* Deployment configuration
* Client-specific implementation notes without secrets

## 4.3 Repository visibility

Client repositories should remain private by default.

## 4.4 Prohibited repository content

Do not commit:

* GHL private tokens
* Turnstile secrets
* Signing secrets
* Stripe secrets
* Client passwords
* Customer records
* Raw onboarding exports
* Private feedback exports
* Full call or conversation data
* Payment-card information

---

## 5. Template Versioning

Tag approved canonical template releases.

Examples:

```text
v1.0.0
v1.1.0
v1.1.1
```

### Version rules

| Change                                        | Version |
| --------------------------------------------- | ------- |
| Breaking architecture or configuration change | Major   |
| Backward-compatible feature                   | Minor   |
| Backward-compatible defect correction         | Patch   |

Each client implementation record must include:

* Template version
* Snapshot version
* Deployment version
* Client-specific deviations

---

## 6. Branching Strategy

Recommended branches:

### `main`

* Production branch
* Protected
* Requires passing checks
* Connected to production Cloudflare deployment

### Feature branches

Examples:

```text
feature/general-quote-form
feature/client-branding
fix/emergency-form-routing
content/water-heater-page
maintenance/dependency-updates
```

### Pull requests

Every material change should use a pull request containing:

* Objective
* Scope
* Changed files
* Test evidence
* Screenshots when useful
* Configuration changes
* Security considerations
* Rollback considerations
* Unresolved issues

---

## 7. Branch Protection

Protect the production branch with:

* Pull-request requirement
* Required status checks
* Restricted force pushes
* Restricted deletion
* Review requirement where staffing permits
* Up-to-date branch requirement for risky changes

During a founder-led pilot, one person may perform multiple roles, but review categories must still be documented.

---

## 8. Continuous Integration

Continuous integration should run on pull requests and production merges.

### Required checks

```text
format:check
lint
typecheck
test:unit
test:integration
build
```

### Additional checks where practical

```text
test:e2e
test:accessibility
secret-scan
dependency-audit
broken-link-check
structured-data-check
```

### Failure behavior

A failed required check blocks production merge.

Do not configure production to ignore failed builds automatically.

---

## 9. Next.js Build Architecture

The public website uses static export.

Recommended Next.js direction:

```ts
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

The final configuration must be validated against the pinned Next.js version and Cloudflare deployment method.

### Static-generation requirements

Dynamic service and location routes must use known build-time parameters.

The build must fail when:

* Required client data is missing
* Duplicate slugs exist
* Unknown services are referenced
* Disabled routes are linked
* Production placeholders remain
* Canonical hostname is invalid

---

## 10. Cloudflare Pages Functions

Cloudflare Pages Functions provide:

* Native form endpoints
* Turnstile verification
* GHL integration
* Rate limiting
* Idempotency
* Secure server-side processing
* Controlled logging

Recommended endpoints:

```text
/api/forms/general-quote
/api/forms/emergency-request
/api/forms/contact
/api/forms/review-feedback
/api/forms/website-onboarding
```

### Function deployment

The function layer must deploy with the static website and use environment-specific server bindings.

### Routing

Ensure `/api/forms/*` requests reach Cloudflare Functions rather than the static-export fallback.

---

## 11. Cloudflare Pages Project

Create one Pages project for each client.

### Project record

Document:

* Project name
* GitHub repository
* Production branch
* Build command
* Build output
* Node runtime
* Environment variables
* Custom domains
* Deployment URL
* Creation date
* Owner
* Last verified date

### Recommended project naming

```text
client-slug-plumbing
```

---

## 12. Build Configuration

Recommended initial values:

| Setting                | Value                                 |
| ---------------------- | ------------------------------------- |
| Production branch      | `main`                                |
| Build command          | Package-manager equivalent of `build` |
| Output directory       | `out`                                 |
| Root directory         | Repository root                       |
| Preview deployments    | Enabled                               |
| Production deployments | From `main`                           |
| Functions directory    | `/functions`                          |

The exact runtime and package-manager configuration must be pinned in the repository.

---

## 13. Environment Variables

## 13.1 Public values

Examples:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_TURNSTILE_SITE_KEY
NEXT_PUBLIC_ANALYTICS_ID
NEXT_PUBLIC_GHL_CHAT_WIDGET_ID
```

Public variables must not contain secrets.

## 13.2 Client GHL secrets

```text
GHL_LOCATION_ID
GHL_PRIVATE_INTEGRATION_TOKEN
GHL_PIPELINE_ID
GHL_STAGE_NEW_LEAD_ID
GHL_STAGE_CONTACT_ATTEMPTED_ID
GHL_STAGE_CONNECTED_ID
GHL_STAGE_ESTIMATE_REQUESTED_ID
GHL_STAGE_ESTIMATE_SCHEDULED_ID
GHL_STAGE_ESTIMATE_SENT_ID
GHL_STAGE_JOB_WON_ID
GHL_STAGE_JOB_LOST_ID
GHL_STAGE_FOLLOW_UP_NEEDED_ID
GHL_CUSTOM_FIELD_MAP
GHL_TAG_MAP
GHL_CALENDAR_ID
```

## 13.3 Form security

```text
TURNSTILE_SECRET_KEY
FORM_SIGNING_SECRET
IDEMPOTENCY_NAMESPACE
RATE_LIMIT_NAMESPACE
```

## 13.4 Agency onboarding

```text
AGENCY_GHL_LOCATION_ID
AGENCY_GHL_PRIVATE_INTEGRATION_TOKEN
AGENCY_ONBOARDING_FIELD_MAP
AGENCY_FULFILLMENT_PIPELINE_ID
AGENCY_STAGE_ASSETS_RECEIVED_ID
```

Agency and client credentials must remain logically separate.

---

## 14. Environment Separation

Maintain separate values for:

* Local
* Preview
* Production

### Local

Use mocked or test credentials.

### Preview

Use:

* Test GHL account
* Test Turnstile configuration
* Debug analytics
* Preview hostname
* `noindex`

### Production

Use:

* Client production GHL account
* Production Turnstile
* Production analytics
* Production domain
* Live workflow configuration

Never copy production secrets into a public local environment file.

---

## 15. Environment Validation

Validate required variables during build or controlled runtime initialization.

Check:

* Presence
* Expected format
* URL validity
* JSON mapping validity
* Required stage IDs
* Required custom field IDs
* Site hostname
* Environment consistency

If required server configuration is missing:

* Do not process the form
* Return a safe failure
* Alert the agency
* Do not guess a destination

---

## 16. Domain Strategy

Each client should use a client-owned domain whenever possible.

### Preferred hostname

Select one canonical hostname:

```text
https://example.com/
```

or:

```text
https://www.example.com/
```

The alternate hostname must permanently redirect to the canonical hostname.

### Requirements

* HTTPS
* Valid SSL
* Canonical consistency
* Redirect consistency
* Sitemap consistency
* Analytics consistency
* GHL website URL consistency
* Google Business Profile consistency

---

## 17. DNS Management

Before editing DNS:

1. Confirm the domain.
2. Confirm the registrar.
3. Record existing DNS.
4. Identify email-related records.
5. Identify existing verification records.
6. Identify current website records.
7. Create a rollback record.
8. Confirm the client’s approved launch window.

### Do not disrupt

* MX records
* SPF
* DKIM
* DMARC
* GHL sending-domain records
* Google verification
* Microsoft verification
* Existing subdomains
* Other operational services

DNS changes must target explicit records.

---

## 18. DNS Cutover

Recommended sequence:

1. Lower TTL in advance when appropriate.
2. Verify the Cloudflare preview.
3. Verify production environment variables.
4. Verify domain ownership.
5. Add required DNS records.
6. Monitor resolution.
7. Confirm SSL.
8. Confirm canonical redirect.
9. Run production smoke tests.
10. Preserve rollback information.

A domain resolving successfully does not complete launch. Forms and GHL routing must also pass.

---

## 19. Preview Deployments

Every pull request should receive a preview when practical.

### Preview requirements

* `noindex`
* No production canonical
* Test GHL integration
* Test analytics
* Safe test contacts
* Clear environment identification
* No client secrets exposed

### Client review

Send the approved preview link only after internal QA.

Do not use raw local screenshots as the sole approval method for an interactive website.

---

## 20. Production Release Procedure

1. Confirm required approvals.
2. Confirm all required checks pass.
3. Confirm client configuration.
4. Confirm production environment variables.
5. Confirm GHL configuration.
6. Confirm rollback deployment.
7. Merge into `main`.
8. Monitor Cloudflare build.
9. Confirm deployment success.
10. Verify the custom domain.
11. Run production smoke tests.
12. Verify forms and GHL.
13. Verify analytics.
14. Record the deployment version.
15. Communicate completion.

---

## 21. Release Record

Record:

* Client
* Repository
* Commit
* Template version
* Snapshot version
* Deployment identifier
* Release date
* Implementer
* Reviewer
* Client approver
* Test evidence
* Configuration changes
* Known limitations
* Rollback deployment

Do not record secret values.

---

## 22. Rollback

Rollback when:

* Website is unavailable
* Primary navigation fails
* Forms fail
* Forms route to the wrong GHL account
* Business information is materially wrong
* Secrets are exposed
* Analytics causes material failure
* Production configuration is invalid
* A severe regression occurs

### Rollback procedure

1. Contain the issue.
2. Pause affected workflows if necessary.
3. Restore the last known-good deployment.
4. Verify the website.
5. Verify forms.
6. Verify GHL routing.
7. Notify affected parties.
8. Correct the defect in a branch.
9. Repeat validation.
10. Deploy again after approval.

---

## 23. Form Deployment Verification

After each form-related deployment, test:

* General Quote
* Emergency Request
* Contact
* Review Feedback
* Website Onboarding where affected

Verify:

* Turnstile
* Validation
* GHL contact
* Opportunity behavior
* Trigger tag
* Workflow
* Internal notification
* Customer acknowledgment
* Analytics
* No duplicate processing

---

## 24. Monitoring

Monitor:

### Website availability

* Production hostname
* SSL
* Main routes
* Request Service
* Emergency Request

### Form health

* Acceptance rate
* Validation rate
* Turnstile failures
* GHL failures
* Processing latency
* Duplicate requests

### GHL health

* Authentication failures
* Contact failures
* Opportunity failures
* Workflow failures
* Message-delivery failures
* Phone routing
* Email delivery

### Search health

* Indexing
* Sitemap
* Robots
* Canonical
* Search Console errors
* Structured-data errors

### Security health

* Unauthorized access attempts
* Secret exposure
* Dependency vulnerabilities
* Cross-client routing
* Onboarding-token failures

---

## 25. Alert Priorities

### Critical

* Cross-client routing
* Secret exposure
* Website unavailable
* All forms failing
* Emergency requests failing
* Compromised administrative access

### High

* One primary form failing
* GHL authentication failure
* Phone routing failure
* Internal emergency notification failure
* DNS or SSL failure

### Normal

* Individual invalid submission
* Noncritical workflow error
* Analytics event failure
* Content correction
* Minor visual issue

---

## 26. Routine Maintenance Schedule

### Weekly

* Review critical alerts
* Review form failures
* Review GHL integration failures
* Review failed deployments
* Review security notifications

### Monthly

* Review dependencies
* Review Cloudflare logs
* Review GHL workflows
* Review phone and message usage
* Review analytics quality
* Review broken links
* Review client support patterns

### Quarterly

* Review user access
* Review secrets and credential scope
* Review custom values
* Review privacy and consent configuration
* Review snapshot versions
* Review template versions
* Review browser compatibility
* Review vendor changes

### Annually

* Full security review
* Full accessibility review
* Full content audit
* Full SEO audit
* Retention review
* Incident-response exercise
* Cancellation-process review
* Vendor review

---

## 27. Dependency Management

Dependencies must be:

* Necessary
* Pinned through the lockfile
* Compatible with the runtime
* Reviewed before addition
* Monitored for vulnerabilities
* Updated through controlled pull requests

### Update categories

#### Security update

Prioritize according to severity and exposure.

#### Patch update

Group and test regularly.

#### Minor update

Review release notes and regression risk.

#### Major update

Treat as a project:

* Review migration guidance
* Create dedicated branch
* Update tests
* Validate Cloudflare compatibility
* Validate forms
* Validate GHL integration
* Roll out gradually

---

## 28. Framework Updates

Before changing the Next.js major version:

1. Review compatibility.
2. Review static-export behavior.
3. Review Cloudflare deployment.
4. Review image behavior.
5. Review metadata behavior.
6. Review routing.
7. Review Pages Functions.
8. Run the full regression suite.
9. Test a pilot client.
10. Document the template-version change.

Do not update every client automatically without impact assessment.

---

## 29. Template Maintenance

The canonical template is the primary reusable codebase.

### Template change process

1. Create an issue or change request.
2. Define the problem.
3. Assess existing clients.
4. Implement in a branch.
5. Run full tests.
6. Release a new template version.
7. Classify client update priority.
8. Roll out to a pilot.
9. Monitor.
10. Apply to other clients in controlled groups.

### Client deviation

Document custom deviations because they may complicate future template updates.

---

## 30. Client Update Categories

### Mandatory security update

Apply promptly after validation.

### Critical defect correction

Apply to affected clients promptly.

### Compatibility update

Apply before platform or browser behavior breaks.

### Product improvement

Offer or schedule according to maintenance scope.

### Custom enhancement

Scope and price separately.

Not every new template feature must be added to every existing client immediately.

---

## 31. GHL Snapshot Maintenance

Snapshot changes require:

* Change record
* Version increment
* Source-account testing
* Snapshot refresh
* Fresh-account load
* Workflow testing
* Conflict review
* Pilot deployment
* Controlled client rollout

### High-risk snapshot changes

* Pipeline changes
* Custom-field replacement
* Workflow trigger changes
* Consent changes
* Calendar changes
* Review workflow changes
* Phone behavior
* DND behavior

Do not push high-risk changes blindly.

---

## 32. GHL Workflow Maintenance

Before changing a production workflow:

1. Identify all linked clients.
2. Identify client customizations.
3. Document trigger and action changes.
4. Test in a safe account.
5. Review consent implications.
6. Review re-entry implications.
7. Review active contacts.
8. Prepare rollback.
9. Apply to a pilot.
10. Monitor.

### Workflow archiving

Move retired workflows to:

```text
99 — Archived
```

Do not delete immediately when historical troubleshooting may require them.

---

## 33. Secret Rotation

Rotate:

* GHL tokens
* Turnstile secrets
* Signing secrets
* Agency integration credentials
* Other server secrets

### Rotation procedure

1. Create replacement credential.
2. Update preview environment.
3. Test.
4. Update production.
5. Test every form.
6. Revoke old credential.
7. Confirm revocation.
8. Record date and owner.

Do not record secret values in the rotation log.

---

## 34. Domain and SSL Maintenance

Monitor:

* Domain expiration
* Registrar access
* DNS integrity
* SSL status
* Canonical redirects
* Email DNS
* Verification records
* Unauthorized DNS changes

Domain ownership and renewal responsibility must be documented during onboarding.

---

## 35. Analytics Maintenance

Review:

* Correct property
* Event duplication
* Personal information
* Consent behavior
* Production hostname
* Preview exclusion
* UTM taxonomy
* Attribution quality
* Internal traffic
* Spam
* GHL opportunity sources

Tracking changes require the same pull-request and testing process as other code changes.

---

## 36. Content Maintenance

Update when:

* Services change
* Service areas change
* Hours change
* Phone changes
* Licensing changes
* Financing changes
* Staff changes
* Warranties change
* Reviews change
* Emergency availability changes

### High-priority content changes

* Incorrect phone
* Incorrect address
* Incorrect emergency availability
* Expired license
* Incorrect service area
* False warranty
* Invalid review link

These should be corrected promptly after verification.

---

## 37. Routine Client Updates

Base plan working allowance:

```text
Up to 30 minutes per billing month
```

### Request process

1. Client submits request through approved support channel.
2. Agency verifies authorization.
3. Agency classifies request.
4. Agency confirms whether it is included.
5. Agency implements in a branch.
6. Agency validates affected areas.
7. Agency deploys.
8. Agency confirms completion.

Unused time does not roll over.

---

## 38. Incident Maintenance

After an incident:

* Apply corrective changes
* Add regression tests
* Update monitoring
* Update documentation
* Rotate credentials where appropriate
* Review affected clients
* Review template and snapshot impact
* Conduct post-incident review

Do not close an incident solely because the website is visible again.

---

## 39. Backup and Recovery

Maintain recoverable versions of:

* Git repository
* Production deployments
* Client configuration
* GHL snapshot
* Workflow documentation
* Integration mapping
* Agency fulfillment records

### Recovery testing

Periodically confirm:

* Repository restoration
* Cloudflare rollback
* Configuration reconstruction
* Snapshot loading
* Credential replacement
* Domain recovery procedure

Backups must follow the approved retention and security policy.

---

## 40. Platform Outages

### Cloudflare outage

Potential response:

* Confirm vendor status
* Identify affected clients
* Avoid unnecessary DNS changes
* Communicate material impact
* Monitor recovery
* Verify forms after restoration

### GHL outage

Potential response:

* Display direct-call fallback when forms cannot be accepted
* Preserve safe failure behavior
* Avoid claiming submissions were received
* Monitor integration recovery
* Test workflows after restoration

### GitHub outage

Existing production sites may remain available, but new deployments may pause.

### Stripe or payment outage

Do not terminate active clients because of a temporary processor outage without applying the approved billing policy.

---

## 41. Client Cancellation

Cancellation begins only after:

* Authorized request
* Effective date confirmation
* Subscription verification
* Outstanding usage review
* Contract review

### Termination checklist

* Stop future billing
* Stop agency onboarding reminders
* Review GHL SaaS access
* Pause or stop agency-managed workflows
* Revoke website integration token
* Remove Cloudflare secrets
* Review phone-number treatment
* Review email services
* Review domain status
* Review website hosting status
* Export eligible data
* Preserve required records
* Revoke user access
* Archive repository
* Archive deployment
* Apply retention policy
* Confirm termination completion

No broad deletion should occur automatically.

---

## 42. Website Transition

If the client purchases an approved transition package, define:

* Exported public content
* Client-provided assets
* Domain assistance
* DNS cutover
* Static website handoff
* Hosting responsibility
* Form replacement
* CRM integration removal
* Agency intellectual-property exclusions
* Support period
* Final date

The reusable template, snapshot, workflow architecture and agency secrets are not automatically transferred.

---

## 43. Repository Archival

After cancellation:

* Confirm effective termination
* Remove active deployment credentials
* Remove production secrets
* Protect remaining history
* Change repository access
* Mark repository archived where appropriate
* Apply retention policy
* Record archive date
* Record deletion eligibility date

Do not archive before any approved transition is complete.

---

## 44. Maintenance Documentation

Maintain:

* Client deployment record
* Environment-variable inventory without values
* Domain record
* DNS change record
* GHL integration map
* Snapshot version
* Template version
* Workflow version
* Release history
* Incident history
* Access register
* Credential-rotation history
* Cancellation record

---

## 45. Deployment Acceptance Criteria

The deployment system is approved when:

1. The canonical template is versioned.
2. Every client has an isolated private repository.
3. Production changes use reviewed source control.
4. Required CI checks block failed releases.
5. Static export works in Cloudflare Pages.
6. Pages Functions handle form endpoints.
7. Preview and production environments are separated.
8. Secrets remain outside Git.
9. Production variables are validated.
10. Canonical domain behavior is correct.
11. DNS changes preserve unrelated services.
12. Preview deployments are non-indexable.
13. Every release has a rollback.
14. Form and GHL smoke tests follow deployment.
15. Monitoring covers availability and integrations.
16. Dependencies use controlled updates.
17. Template and snapshot versions are recorded.
18. High-risk workflow changes use pilot rollout.
19. Cancellation safely revokes credentials.
20. Maintenance and incident records are preserved.

---

## 46. Open Decisions

The following require resolution:

* Final package manager
* Final Next.js version
* Final Node.js version
* Continuous-integration platform
* Cloudflare build configuration
* Monitoring provider
* Error-monitoring provider
* Uptime-monitoring provider
* Performance budgets
* Dependency-update cadence
* Template-to-client update automation
* Final domain-ownership policy
* Final DNS-management policy
* Final cancellation notice
* Website-transition price
* Website hosting after cancellation
* Repository retention
* Deployment retention
* Final data-retention periods
* Final phone-number portability policy
* Maintenance support hours
* Emergency support process

---

## 47. Next Document

The next project document is:

`17-claude-code-workflow.md`

It will define:

* Claude Project and Claude Code responsibilities
* Repository inspection
* Planning
* Prompt structure
* Implementation phases
* Change controls
* Validation
* Reporting
* Commit strategy
* Documentation updates
* Security boundaries
* Failure handling
* Handoff requirements
