# Plumber Growth System — Testing and Quality Assurance

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Testing and Quality Assurance |
| Document ID | 15-testing-and-quality-assurance |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Documents | 00-project-overview.md through 14-security-privacy-and-compliance.md |
| Website | Next.js on Cloudflare Pages |
| CRM and Automation | GoHighLevel |
| Accessibility Target | WCAG 2.2 AA practices |

---

## 1. Purpose

This document defines the testing and quality-assurance requirements for the Plumber Growth System.

It covers:

- Automated testing
- Manual testing
- Native forms
- Cloudflare Functions
- GHL integrations
- GHL workflows
- Website content
- SEO
- Accessibility
- Performance
- Security
- Analytics
- Browser and device coverage
- Client review
- Release gates
- Regression testing
- Defect management
- Post-launch verification

---

## 2. Quality Objectives

Every production client implementation must be:

- Functionally correct
- Secure
- Accessible
- Responsive
- Performant
- Search-engine accessible
- Factually accurate
- Properly branded
- Correctly connected to the client’s GHL account
- Isolated from other clients
- Measurable
- Recoverable
- Consistent with the approved product scope

---

## 3. Quality Principles

### 3.1 Test production behavior

Development-mode success does not prove that a Cloudflare production build works.

### 3.2 Test the complete journey

A form is not considered working merely because the browser displays a success message.

Testing must verify:

```text
Website form
→ Cloudflare processing
→ GHL contact
→ GHL opportunity
→ GHL workflow
→ Internal notification
→ Customer acknowledgment
```

### 3.3 Test failures deliberately

Quality assurance must test:

* Invalid data
* Missing data
* Duplicate data
* Spam
* Platform failures
* Wrong configuration
* Expired tokens
* Opt-outs
* DND
* Workflow exits

### 3.4 Protect production data

Use controlled test contacts and destinations.

Never send test messages to unrelated people.

### 3.5 No silent assumptions

Missing verification, incomplete requirements, or unavailable testing must be reported rather than treated as passed.

---

## 4. Testing Environments

## 4.1 Local

Used for:

* Development
* Unit tests
* Component testing
* Mocked integration tests
* Static analysis

Requirements:

* No production credentials by default
* Mocked GHL responses
* Test analytics disabled
* Safe demonstration data

## 4.2 Preview

Used for:

* Pull-request review
* Responsive QA
* Accessibility QA
* Client review
* Integration testing against a designated test GHL account

Requirements:

* `noindex`
* Test credentials
* Test GHL location
* Preview analytics or debug mode
* No production customer messaging

## 4.3 Production

Used for:

* Final domain verification
* Live integrations
* Controlled smoke testing
* Post-launch monitoring

Production testing must use:

* Clearly labeled test contacts
* Authorized agency phone numbers
* Authorized agency email addresses
* Controlled workflows
* Prompt test-data cleanup

---

## 5. Test Categories

The project requires:

1. Static analysis
2. Unit testing
3. Component testing
4. Integration testing
5. End-to-end testing
6. Accessibility testing
7. SEO testing
8. Content QA
9. Security testing
10. Performance testing
11. Analytics testing
12. GHL workflow testing
13. Cross-client isolation testing
14. User acceptance testing
15. Post-launch smoke testing

---

## 6. Required Repository Commands

The repository must expose consistent scripts.

```text
format
format:check
lint
typecheck
test
test:unit
test:integration
test:e2e
test:accessibility
build
```

The exact package manager and testing libraries remain implementation decisions.

### Release requirement

A production release must pass:

```text
format:check
lint
typecheck
test:unit
test:integration
build
```

Required end-to-end and accessibility tests must also pass in an environment representative of production.

---

## 7. Static Analysis

Static analysis must verify:

* TypeScript strict mode
* Import validity
* Unused code
* Invalid hooks usage
* Unsafe type suppression
* Formatting
* Lint rules
* Accessibility-oriented lint rules
* Environment-variable handling
* Server/client boundary violations

### Prohibited shortcuts

Do not resolve failures by broadly adding:

* `any`
* `@ts-ignore`
* Disabled lint rules
* Empty error handlers
* Unchecked type assertions

Any necessary exception must be narrow and documented.

---

## 8. Unit Testing

Unit tests should cover deterministic utilities.

### Client configuration

Test:

* Required fields
* Placeholder rejection
* Valid services
* Valid service areas
* Duplicate slugs
* Disabled-page behavior
* Emergency availability
* Business URL generation

### Forms

Test:

* Schema validation
* Required fields
* Email validation
* Phone normalization
* ZIP validation
* Date validation
* Enum allowlists
* Consent fields
* Text limits
* Unsupported fields

### Attribution

Test:

* UTM parsing
* Original-source preservation
* Most-recent-source update
* Referrer normalization
* Unknown-source handling
* Click-identifier handling

### GHL mapping

Test:

* Contact payloads
* Opportunity payloads
* Custom-field mapping
* Tags
* Pipeline IDs
* Stage IDs
* Emergency priority
* Contact subject routing

### SEO

Test:

* Metadata generation
* Canonical generation
* Robots directives
* Sitemap inclusion
* Disabled-route exclusion
* Structured-data generation
* Breadcrumb generation

---

## 9. Component Testing

Test reusable components independently.

### Navigation

* Desktop navigation
* Mobile menu
* Keyboard opening and closing
* Escape behavior
* Focus restoration
* Current-page indication
* Disabled route exclusion

### Buttons and links

* Variants
* Focus-visible state
* Loading state
* Disabled state
* External links
* Click-to-call

### Cards

* Service card
* Location card
* Review card
* Conditional fields
* Missing optional content

### Alerts

* Information
* Warning
* Error
* Success
* Emergency safety message

### Forms

* Labels
* Required indicators
* Conditional fields
* Error summary
* Field errors
* Loading
* Success
* Failure
* Focus management

---

## 10. Cloudflare Function Integration Tests

Test each form endpoint.

### Shared endpoint tests

* POST accepted
* Unsupported method rejected
* Invalid content type rejected
* Oversized request rejected
* Unknown form rejected
* Honeypot detected
* Turnstile missing
* Turnstile invalid
* Rate limit reached
* Invalid schema
* Unknown field injected
* Idempotency key repeated
* Safe server error returned
* Secrets excluded from responses

### GHL mocked responses

Test:

* Contact created
* Contact updated
* Contact-match conflict
* Opportunity created
* Existing opportunity reused
* Contact success and opportunity failure
* Tag failure
* Authentication failure
* Rate limit from GHL
* GHL timeout
* GHL unavailable
* Retry behavior

---

## 11. General Quote Form Tests

Test:

1. Valid residential request
2. Valid commercial request
3. Each enabled plumbing service
4. Disabled service rejected
5. Query-based service preselection
6. Unsupported query value ignored
7. Missing first name
8. Invalid phone
9. Invalid email
10. Invalid address
11. Past preferred date
12. Missing consent when text follow-up selected
13. Marketing consent remains optional
14. Contact created
15. Opportunity created in New Lead
16. Correct service tag
17. Correct priority tag
18. Acknowledgment sent once
19. Internal notification sent once
20. Analytics conversion fires once

---

## 12. Emergency Request Form Tests

Test:

1. Valid emergency request
2. Active flooding
3. Water not shut off
4. Gas odor Yes
5. Gas odor Unsure
6. Electrical danger Yes
7. Electrical danger Unsure
8. Safety message displayed
9. Safety acknowledgment required
10. Disabled emergency service handling
11. High-priority opportunity
12. Emergency tag
13. Safety-escalation tag
14. Immediate internal notification
15. One customer acknowledgment
16. No dispatch promise
17. No arrival-time promise
18. No general nurture enrollment
19. Direct-call fallback after failure
20. Sensitive answers excluded from analytics

---

## 13. Contact Form Tests

Test each subject:

* Plumbing service question
* Existing appointment
* Existing customer support
* Billing
* Financing
* Vendor
* Employment
* General
* Other

Confirm:

* Only appropriate subjects create opportunities
* Correct internal recipient is notified
* Confirmation message is accurate
* Contact record is updated correctly
* No unintended sales workflow begins

---

## 14. Review Feedback Tests

Test:

* Ratings 1–5
* Public-review link visible for every rating
* Low rating creates recovery task
* High rating does not auto-publish feedback
* Permission to contact optional
* Testimonial permission optional
* Testimonial attribution required when permission is granted
* No sales opportunity created
* Private rating excluded from analytics
* Feedback excluded from ordinary logs
* One submission per idempotency key

---

## 15. Website Onboarding Tests

Test:

* Valid signed access
* Missing token
* Invalid token
* Expired token
* Token for another client
* Token reuse
* Direct public access
* `noindex, nofollow`
* Required business fields
* Invalid website URLs
* Conflicting emergency information
* Missing authorized approver
* Password warning
* No public file upload
* Agency record updated
* Fulfillment stage updated
* Client GHL pipeline unaffected
* No public analytics payload
* No sensitive information in logs

---

## 16. Contact Deduplication Tests

Test:

* Exact phone match
* Exact email match
* Phone and email both match
* Phone matches one contact and email another
* Shared household contact information
* Missing email
* Missing phone
* Changed phone
* Changed email
* Duplicate browser retry
* Repeat customer with a new job
* Existing open opportunity
* Existing closed opportunity

### Required outcome

A conflict must not cause uncontrolled contact merging.

---

## 17. Opportunity Deduplication Tests

Test:

* Same contact, service, address and recent open opportunity
* Same contact with different service
* Same contact with different property
* New emergency incident
* Closed prior opportunity
* Duplicate Submission ID
* New Submission ID for same job
* Contact Form service inquiry
* Administrative Contact Form submission

Confirm:

* Legitimate new jobs create opportunities
* Browser retries do not
* Administrative messages do not
* Emergency incidents are not incorrectly suppressed

---

## 18. GHL Snapshot Testing

Every snapshot version must be loaded into a fresh blank sub-account.

Verify:

* Custom values
* Custom fields
* Opportunity fields
* Tags
* Pipeline
* Stage order
* Calendars
* Trigger links
* Templates
* Workflows
* Review settings
* Custom views
* Permissions
* Placeholder values
* Asset dependencies
* Duplicate assets

### Exclusion verification

Confirm the snapshot does not contain:

* GHL websites
* GHL funnels
* GHL forms
* GHL surveys
* Live contacts
* Real conversations
* Real appointments
* Real review data
* Production credentials
* Agency billing workflows

---

## 19. GHL Workflow Testing

Every workflow must test:

* Trigger
* Entry filters
* Re-entry
* Actions
* Wait steps
* Branches
* DND
* Opt-out
* Reply
* Opportunity-stage change
* Exit condition
* Error behavior
* Duplicate prevention

### General lead workflow

Confirm:

* One opportunity
* One acknowledgment
* One internal notification
* Follow-up stops after reply
* Follow-up stops after connection
* Maximum message count enforced

### Missed-call workflow

Confirm:

* Only eligible missed calls trigger
* Mobile number required
* Suppression window works
* DND respected
* Callback task created
* Repeated missed calls do not create message floods

### Estimate workflow

Confirm:

* Starts only at correct stage
* Stops after Job Won
* Stops after Job Lost
* Stops after customer reply
* Creates final manual task
* Does not continue indefinitely

### Appointment workflow

Confirm:

* Requested is not confirmed
* Confirmed date is accurate
* Reschedule stops previous reminders
* Cancellation stops reminders
* Completion does not automatically request review unless the job is complete

### Review workflow

Confirm:

* Trigger requires completed job
* Honest review request
* One reminder maximum
* No rating prediction
* No review gating
* DND and opt-out respected

---

## 20. Agency Workflow Testing

Test separately from the client snapshot.

### Purchase and onboarding

* Successful subscription
* Failed subscription
* Duplicate subscription event
* Welcome message
* Secure onboarding link
* Reminder sequence
* Onboarding completion
* Missing-assets branch

### Website fulfillment

* Preview ready
* Revision process
* Approval
* Launch
* 30-day review

### Billing

* Payment failure
* Payment recovery
* Repeated failure
* Correct account status
* No premature deletion

### Cancellation

* Authorized request
* Unauthorized request
* Effective date
* Service termination tasks
* Credential revocation
* Data export
* Website treatment
* No automatic destructive deletion

---

## 21. Accessibility Testing

Use automated and manual testing.

### Automated checks

Test:

* Missing labels
* Invalid ARIA
* Contrast indicators
* Landmark structure
* Heading order
* Duplicate IDs
* Button names
* Link names
* Form errors

### Manual keyboard testing

Verify:

* Skip link
* Header navigation
* Mobile menu
* Dropdowns
* Forms
* Radio groups
* Checkboxes
* Date input
* FAQ disclosures
* Chat access
* Error summary
* Success confirmation

### Focus testing

Confirm:

* Focus is visible
* Mobile-menu focus is managed
* Focus returns after closing
* Errors receive focus appropriately
* Loading does not trap focus
* Route changes provide appropriate context

### Screen-reader-oriented review

Verify:

* Page title
* Landmarks
* Heading structure
* Form instructions
* Required fields
* Error association
* Status announcements
* Emergency warnings
* Button names

### Zoom and reflow

Test:

* 200% zoom
* Narrow viewport
* No horizontal scrolling for primary content
* No hidden controls
* No overlapping action bar
* Readable text

---

## 22. SEO Quality Assurance

Verify every indexable page.

### Metadata

* Distinct title
* Distinct description
* Correct canonical
* Correct Open Graph data
* Correct business name
* Correct market

### Headings

* One meaningful H1
* Logical hierarchy
* No empty headings
* No keyword stuffing

### Indexation

* Correct robots directive
* Preview blocked
* Client Onboarding `noindex, nofollow`
* Thank You `noindex`
* Emergency Request `noindex`
* Review Feedback `noindex`

### Sitemap

* Production hostname
* Canonical URLs only
* Enabled services only
* Approved locations only
* No form utility pages
* No redirects
* No preview URLs

### Structured data

* Valid syntax
* Visible-content match
* Verified business information
* Correct canonical URLs
* No fake reviews
* No false offices
* No unsupported availability
* Correct breadcrumbs

### Internal links

* No broken links
* No links to disabled routes
* Descriptive anchor text
* Relevant service relationships
* Relevant location relationships
* Clear conversion paths

---

## 23. Content Quality Assurance

Verify:

* Business name
* Phone
* Email
* Address or service-area status
* Hours
* Services
* Service areas
* Emergency availability
* 24/7 claims
* Licenses
* Insurance
* Bonding
* Financing
* Warranties
* Reviews
* Years in business
* Team identities
* Social profiles
* Google review link

### Content quality checks

* No demonstration text
* No competitor copy
* No duplicate service pages
* No thin city pages
* No unsupported claims
* No unsafe instructions
* No fake testimonials
* No placeholder images implying false staff
* No inaccurate calls to action
* No confirmed-appointment language for requests

---

## 24. Performance Testing

Test production-like builds.

### Measure

* Largest Contentful Paint
* Interaction to Next Paint
* Cumulative Layout Shift
* Total blocking behavior
* JavaScript bundle size
* Image transfer size
* Font loading
* Third-party scripts
* Chat-widget impact
* Turnstile impact

### Test pages

* Homepage
* Services hub
* Service page
* Location page
* Request Service
* Emergency Request
* Client Onboarding

### Conditions

* Mobile viewport
* Desktop viewport
* Throttled connection
* Cold cache
* Warm cache

Final performance budgets must be approved before implementation.

---

## 25. Security Testing

Test:

* Secret scanning
* Dependency vulnerabilities
* Security headers
* HTTPS
* Turnstile verification
* Honeypot
* Rate limiting
* Request-size limits
* Origin validation
* Method validation
* Input allowlists
* Script-like input
* Safe error responses
* Token expiration
* Access control
* Cross-client isolation
* Environment separation
* Analytics payloads
* Log redaction
* Credential rotation
* Cancellation revocation

### Cross-client isolation

Attempt to:

* Submit Client A’s form to Client B’s GHL account
* Use Client A’s onboarding token for Client B
* Change GHL Location ID through browser input
* Access Client B’s environment configuration
* Reuse a client integration token across accounts

All attempts must fail safely.

---

## 26. Privacy and Compliance QA

Verify:

* Privacy Policy present
* Terms present
* Consent labels visible
* Service and marketing consent separated
* Marketing consent unchecked
* Consent version recorded
* DND honored
* STOP handling
* Email unsubscribe where required
* Review link available to every rating
* Testimonial consent separate
* Emergency disclaimer visible
* No dispatch promise
* No call recording without approval
* No personal data in analytics
* No passwords in onboarding

Legal approval remains separate from technical QA.

---

## 27. Analytics Testing

Use analytics debugging and network inspection.

Confirm:

* Production property
* Preview exclusion
* Stable event names
* Approved properties only
* No personal information
* Phone-click event
* Form-start event
* Accepted-form event
* No conversion after rejected form
* No duplicate conversion after refresh
* UTM preservation
* Direct-source handling
* Unknown-source handling
* Review-link click
* Chat open
* Appointment request
* Internal test exclusion

---

## 28. Browser Coverage

At minimum, test current supported versions of:

* Chrome
* Edge
* Safari
* Firefox
* Mobile Safari
* Chrome for Android

The final support policy should define how many prior versions are supported.

### Degraded browser behavior

Unsupported advanced enhancements should fail gracefully without breaking:

* Navigation
* Calls
* Content
* Forms
* Privacy links
* Emergency guidance

---

## 29. Device and Viewport Coverage

Test representative:

* Small mobile
* Standard mobile
* Large mobile
* Tablet portrait
* Tablet landscape
* Laptop
* Desktop
* Large desktop

Also test:

* Touch input
* Keyboard input
* Mouse input
* Portrait and landscape
* Safe-area insets
* Mobile action bar
* On-screen keyboard

---

## 30. Visual Regression Testing

Use screenshot or component comparison where practical for:

* Header
* Mobile menu
* Homepage hero
* Service cards
* Forms
* Error states
* Emergency warning
* Footer
* Client branding
* Common page templates

Visual regression should not replace semantic or functional testing.

---

## 31. Client User Acceptance Testing

The authorized client approver validates:

* Business information
* Branding
* Services
* Service areas
* Hours
* Credentials
* Reviews
* Calls to action
* Contact destinations
* Operational workflow expectations

The client is not responsible for validating:

* Code quality
* Security architecture
* Structured-data syntax
* Integration internals
* Accessibility implementation

Those remain agency responsibilities.

---

## 32. Test Contacts

Use controlled values such as:

```text
TEST General Quote
TEST Emergency Request
TEST Contact Billing
TEST Review Feedback
TEST Appointment Request
```

Test contacts must:

* Use authorized agency destinations
* Include `test-contact`
* Be excluded from production reporting
* Be removed or archived after testing
* Never trigger messages to unrelated people

---

## 33. Defect Severity

### Severity 1 — Critical

Examples:

* Cross-client data exposure
* Secret exposure
* Website unavailable
* All forms failing
* Emergency forms misrouted
* Payment or credential compromise

Release impact:

```text
Block launch or roll back immediately
```

### Severity 2 — High

Examples:

* Primary form failure
* Phone routing failure
* GHL authentication failure
* Incorrect opportunity routing
* Major accessibility blocker
* Incorrect business identity

Release impact:

```text
Block launch
```

### Severity 3 — Moderate

Examples:

* One secondary component broken
* Incorrect noncritical metadata
* Layout issue on one viewport
* Analytics event missing
* Noncritical accessibility issue

Release impact:

```text
Fix before launch when practical; documented approval required otherwise
```

### Severity 4 — Low

Examples:

* Minor spacing
* Cosmetic inconsistency
* Optional enhancement
* Nonblocking copy preference

Release impact:

```text
May be scheduled after launch
```

---

## 34. Defect Record

Every material defect should record:

* Identifier
* Title
* Environment
* Severity
* Description
* Steps to reproduce
* Expected result
* Actual result
* Screenshots or logs where safe
* Affected client
* Owner
* Status
* Resolution
* Regression test
* Deployment version

Do not attach sensitive customer data to ordinary defect records.

---

## 35. Release Gates

A production launch is blocked when:

* Build fails
* Type check fails
* Required tests fail
* Secrets are exposed
* Production client configuration is incomplete
* Primary forms fail
* Emergency routing fails
* GHL records route incorrectly
* Phone does not work
* Critical accessibility defects remain
* Business information is materially inaccurate
* Client approval is missing
* SSL fails
* Canonical hostname is incorrect
* Preview URLs are indexable
* Rollback is unavailable

---

## 36. Release Sign-Off

Required approval roles:

* Implementer
* Technical reviewer
* Content/SEO reviewer
* GHL workflow reviewer
* Authorized client approver
* Launch owner

One person may fill multiple internal roles during the pilot, but each review category must still be completed.

---

## 37. Regression Testing

Run regression tests after changes to:

* Shared components
* Client configuration
* Form schemas
* Cloudflare Functions
* GHL field mapping
* Pipeline stages
* Workflow triggers
* Consent language
* Analytics
* Navigation
* Structured data
* Cloudflare configuration
* Snapshot assets

### Minimum regression suite

* Production build
* Navigation
* General Quote
* Emergency Request
* Contact routing
* Review Feedback
* GHL contact
* GHL opportunity
* Workflow acknowledgment
* Internal notification
* Analytics conversion
* Accessibility smoke test
* Sitemap and robots

---

## 38. Snapshot Update Testing

Before pushing a snapshot update:

1. Document the change.
2. Refresh the snapshot.
3. Review selected assets.
4. Load into a fresh test account.
5. Test affected workflows.
6. Review conflicts.
7. Test a pilot client.
8. Verify client customizations.
9. Record rollback.
10. Roll out gradually.

Do not push untested pipeline or workflow changes across all clients.

---

## 39. Post-Launch Smoke Test

Immediately after launch, verify:

* Production homepage
* Custom domain
* SSL
* Navigation
* Phone link
* GHL web chat
* General Quote
* Emergency Request
* Contact Form
* Review Feedback
* GHL contact
* GHL opportunity
* Internal notification
* Customer acknowledgment
* Analytics
* Sitemap
* Robots
* Canonical
* Mobile layout

---

## 40. Post-Launch Monitoring

Monitor:

### First 24 hours

* Availability
* Form failures
* GHL authentication
* Workflow failures
* DNS
* SSL
* Analytics

### First seven days

* Real submissions
* Duplicate handling
* Call routing
* Chat behavior
* Client login
* Pipeline usage
* Support questions

### First 30 days

* Conversion activity
* Lead response
* Workflow effectiveness
* Review requests
* Client adoption
* Support volume
* Content accuracy
* Search indexing
* Churn risk

---

## 41. Pilot Validation

For the first five customers, record:

* Defects by category
* Time spent testing
* Form failures
* GHL failures
* Workflow adjustments
* Client confusion
* Accessibility issues
* Performance issues
* Content corrections
* Revisions
* Post-launch incidents

Use recurring issues to improve:

* Template
* Snapshot
* Workflows
* Forms
* Onboarding
* Documentation
* Training
* Qualification

---

## 42. Quality Metrics

Track:

* Build success rate
* Automated test pass rate
* Defects per release
* Critical defects
* Escaped defects
* Form acceptance rate
* Integration failure rate
* Workflow failure rate
* Accessibility defects
* Client correction count
* Post-launch incidents
* Mean time to resolution
* Regression recurrence
* Rollbacks
* Client satisfaction

---

## 43. Testing Acceptance Criteria

The testing program is accepted when:

1. Local, preview and production environments are separated.
2. Required repository commands exist.
3. Configuration, forms and integrations have unit tests.
4. All five native forms have integration tests.
5. Contact and opportunity deduplication are tested.
6. The snapshot is tested in a fresh account.
7. Every production workflow has test evidence.
8. Emergency workflows receive dedicated testing.
9. Agency and client workflows are tested separately.
10. Accessibility includes automated and manual review.
11. SEO and structured data receive QA.
12. Security includes cross-client isolation testing.
13. Analytics payloads contain no personal information.
14. Browser and device coverage is defined.
15. Defect severity and release gates are enforced.
16. Client approval is recorded.
17. Post-launch smoke testing is mandatory.
18. Regression testing follows shared-system changes.
19. Pilot defects feed back into the product.
20. No failed critical requirement is reported as passed.

---

## 44. Open Decisions

The following require resolution during implementation:

* Package manager
* Unit-testing framework
* Component-testing framework
* End-to-end-testing framework
* Accessibility automation tool
* Visual-regression tool
* Error-monitoring platform
* Performance budgets
* Supported browser-version policy
* Continuous-integration platform
* Test GHL account architecture
* Turnstile testing method
* Idempotency test storage
* Rate-limit test mechanism
* Automated structured-data validation
* QA ownership after the pilot
* Required testing evidence format

---

## 45. Next Document

The next project document is:

`16-deployment-and-maintenance.md`

It will define:

* Repository lifecycle
* Branching
* Continuous integration
* Cloudflare deployment
* Environment variables
* Domains
* DNS
* Preview deployments
* Production releases
* Rollbacks
* Monitoring
* Dependency updates
* Snapshot updates
* Maintenance
* Incidents
* Client cancellation
