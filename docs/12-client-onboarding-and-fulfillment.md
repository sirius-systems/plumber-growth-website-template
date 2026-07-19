# Plumber Growth System — Client Onboarding and Fulfillment

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Client Onboarding and Fulfillment |
| Document ID | 12-client-onboarding-and-fulfillment |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Documents | 00-project-overview.md through 11-data-mapping-and-integrations.md |
| Base Plan | $297 per month |
| Setup Fee | $0 |
| Delivery Model | Productized, done-for-you implementation |

---

## 1. Purpose

This document defines the complete customer journey from successful purchase through website launch and ongoing service.

It establishes:

- Qualification
- Purchase
- Welcome
- Onboarding
- Asset collection
- Secure access
- Content verification
- Website customization
- GHL configuration
- Integration
- Quality assurance
- Client review
- Revisions
- Approval
- Launch
- Training
- Ongoing support
- Delays
- Escalations
- Cancellation preparation

The process must remain consistent enough to deliver profitably at $297 per month with no setup fee.

---

## 2. Fulfillment Principles

### 2.1 Payment before fulfillment

Website production begins only after:

- Successful payment
- Active subscription
- Acceptance of applicable agreements
- Completion of required onboarding information

### 2.2 Complete information before production

The implementation timeline begins after the client provides the required information, assets, approvals, and access.

### 2.3 Productized implementation

The base plan uses the approved plumbing website and GHL system. It does not include unlimited custom design or development.

### 2.4 One authorized approver

Each client must designate one person authorized to:

- Provide business information
- Approve content
- Consolidate revisions
- Approve launch
- Request ongoing updates

### 2.5 Secure access

The client must not submit passwords through the Website Onboarding Form, email, text message, or project comments.

Use secure invitations and delegated access.

### 2.6 Verified claims

Do not publish licenses, credentials, reviews, availability, warranties, financing, service areas, or other material claims until verified.

### 2.7 No launch without QA

A client deadline does not authorize bypassing critical security, form, accessibility, integration, or content checks.

---

## 3. Fulfillment Pipeline

Use an agency-side pipeline named:

```text
Plumber Growth Fulfillment Pipeline
```

### Stages

| Order | Stage                    | Definition                                      |
| ----: | ------------------------ | ----------------------------------------------- |
|     1 | Payment Received         | Subscription successfully created               |
|     2 | Questionnaire Sent       | Secure onboarding request delivered             |
|     3 | Onboarding In Progress   | Client started but has not completed onboarding |
|     4 | Assets Received          | Onboarding submitted                            |
|     5 | Verification Required    | Information or claims require verification      |
|     6 | Assets Missing           | Required information or access is incomplete    |
|     7 | Website In Production    | Approved implementation work is underway        |
|     8 | GHL Configuration        | Client operational system is being configured   |
|     9 | Internal QA              | Agency testing is in progress                   |
|    10 | Client Review            | Preview is available for client review          |
|    11 | Revisions                | Approved revisions are being completed          |
|    12 | Launch Scheduled         | Client approved the website                     |
|    13 | Live                     | Website and operational system are active       |
|    14 | 30-Day Review            | Initial post-launch review is pending           |
|    15 | Ongoing Service          | Client is in regular maintenance                |
|    16 | Paused — Client Delay    | Progress is blocked by the client               |
|    17 | Paused — Technical Issue | Progress is blocked by a technical dependency   |
|    18 | Cancellation Pending     | Cancellation has been received                  |
|    19 | Closed                   | Fulfillment or termination process is complete  |

---

## 4. Pre-Sale Qualification

Before accepting payment, confirm:

* The plumbing business is active and legitimate
* The company serves a defined market
* The company has operating capacity
* The client understands the standardized website model
* The client understands the $297 monthly price
* The client understands usage-based charges
* The client understands that rankings and leads are not guaranteed
* The client can provide domain access
* The client can provide verified business information
* The client has an authorized approver
* The client accepts the revision and support limits
* The client does not require unsupported enterprise functionality

### Pre-sale disqualification

Pause or decline when:

* The business requests fabricated credentials or reviews
* The business demands guaranteed results
* The client expects unlimited custom design
* The client cannot legally substantiate required claims
* The company cannot fulfill additional requests
* Required integrations materially exceed the base plan
* The company’s existing system has no identifiable problem
* The client refuses the onboarding requirements

---

## 5. Purchase Event

A successful purchase should automatically:

1. Create or update the agency-side customer record.
2. Record the subscription plan.
3. Record the billing interval.
4. Record the subscription identifier.
5. Create a fulfillment opportunity.
6. Set the stage to Payment Received.
7. Assign the implementation owner.
8. Trigger the client welcome workflow.
9. Begin onboarding tracking.
10. Provision the GHL sub-account according to the approved SaaS architecture.
11. Apply the approved plumbing snapshot.

### Purchase failure

Do not begin fulfillment when:

* Payment fails
* Checkout is incomplete
* The subscription is not active
* The customer record cannot be associated correctly

---

## 6. Welcome Communication

Send the welcome communication promptly after successful purchase.

### Welcome message must include

* Product name
* Confirmation of the $297 subscription
* Explanation of usage-based charges
* Implementation overview
* Secure onboarding link
* Required information and assets
* Password prohibition
* Authorized-approver requirement
* Product-scope reminder
* Timeline-start condition
* Agency contact information
* Next action

### Working welcome copy

> Welcome to the Plumber Growth System. Your subscription is active, and we are ready to begin configuring your plumbing website and lead-response system.
>
> The next step is to complete the secure Website Onboarding Form. Production timing begins after we receive the required business information, branding assets, approvals, and account access.
>
> Do not send passwords through the onboarding form, email, or text. We will request access through secure invitations when needed.

---

## 7. Website Onboarding Form

The secure onboarding form collects:

### Business information

* Legal business name
* Public business name
* Owner
* Primary contact
* Business phone
* Business email
* Address
* Service-area status
* Business hours
* Company history

### Services

* Residential services
* Commercial services
* Emergency services
* Priority services
* Services not offered
* Service limitations

### Service areas

* Primary market
* Cities served
* ZIP codes where appropriate
* Areas not served
* Physical locations
* Service-area-only locations

### Credentials

* License information
* Insurance
* Bonding
* Certifications
* Associations
* Warranties
* Financing

### Branding

* Logo availability
* Brand colors
* Brand guidelines
* Photography availability
* Preferred visual direction

### Digital properties

* Current website
* Domain registrar
* Hosting provider
* Google Business Profile
* Analytics
* Search Console
* Bing Webmaster Tools
* Social profiles

### GHL operations

* Lead-notification recipients
* Call routing
* Appointment preferences
* Calendar availability
* Review URL
* CRM users
* Estimate follow-up
* Existing field-service platform

### Approval

* Authorized approver
* Accuracy acknowledgment
* Verification acknowledgment
* Scope acknowledgment
* Password-prohibition acknowledgment

---

## 8. Onboarding Access

The onboarding page must:

* Require authenticated or signed access
* Use an expiring client-specific token or approved login
* Use `noindex, nofollow`
* Reject expired access
* Avoid exposing information in URLs
* Avoid saving sensitive form values in public browser storage
* Avoid collecting passwords
* Provide a secure-access explanation

### Save-and-return

Because the onboarding form is long, save-and-return functionality should be evaluated.

If implemented, it must:

* Use authenticated or signed access
* Encrypt or appropriately protect stored data
* Prevent cross-client access
* Provide an expiration policy
* Avoid browser-only persistence for sensitive data

---

## 9. Asset Delivery

Public file uploads remain disabled in version one.

The agency will provide an approved secure method for receiving:

* Logo files
* Brand guide
* Team photography
* Vehicle photography
* Work photography
* License documentation
* Insurance or bonding evidence
* Financing documentation
* Warranty documentation
* Existing website exports where needed

### Accepted asset guidance

Preferred logo formats:

* SVG
* EPS
* High-resolution transparent PNG

Preferred photography:

* Original high-resolution files
* Properly licensed
* Client-owned or authorized
* Free of embedded sensitive information

### Asset restrictions

Do not accept:

* Unlicensed images
* Images copied from competitors
* Screenshots used as logos
* Unsupported credentials
* Customer photographs without permission
* Password documents
* Payment-card information

---

## 10. Secure Access Requests

Use invitations or delegated access for:

* Domain registrar
* Cloudflare
* Google Business Profile
* Google Analytics
* Google Search Console
* Bing Webmaster Tools
* Apple Business Connect
* Stripe
* Facebook
* Existing website platform
* Relevant field-service software

### Access register

Maintain a restricted record containing:

* Platform
* Access requested
* Date requested
* Invitation recipient
* Access level
* Date granted
* Date verified
* Date revoked
* Responsible agency user

Do not record passwords.

### Least privilege

Request only the permissions required to complete the approved work.

---

## 11. Onboarding Review

An agency implementer must review the onboarding submission before production begins.

### Review checklist

Confirm:

* Business identity is complete
* Contact information is valid
* Domain is controlled by the client
* Address-display model is correct
* Hours are complete
* Services are clear
* Service areas are clear
* Emergency availability is explicit
* Credentials have verification sources
* Review URL is valid
* Notification recipients are identified
* GHL users are identified
* Calendar requirements are understandable
* Claims do not contradict one another
* Scope fits the base product

### Outcome

The implementer marks the record as:

* Ready for Production
* Verification Required
* Assets Missing
* Scope Review Required
* Client Clarification Required

---

## 12. Missing Information Process

Send one consolidated missing-items request whenever possible.

### Missing-items message must include

* What is missing
* Why it is needed
* How to provide it securely
* Which work is paused
* Whether the timeline has stopped
* Who should respond
* A reasonable response date

### Example

> We reviewed your onboarding information and need the following items before production can begin:
>
> * Verified Google review link
> * Domain-access invitation
> * Confirmation of emergency-service hours
> * High-resolution logo
>
> Your implementation timeline is paused until these items are received.

### Reminder sequence

Recommended:

* First reminder after two business days
* Second reminder after five business days
* Internal escalation after the second reminder

Avoid indefinite automated reminders.

---

## 13. Verification Process

### Business verification

Verify:

* Business name
* Address or service-area status
* Phone
* Domain
* Google Business Profile
* State business record when appropriate

### Credentials

Verify through:

* Licensing authority
* Client documentation
* Association directory
* Financing provider
* Warranty documents

### Reviews

Verify:

* Source
* Reviewer attribution
* Rating
* Permission where required
* Public review destination

### Claims requiring explicit approval

* 24/7 availability
* Same-day service
* Emergency response
* Years in business
* Licensed, bonded and insured
* Financing
* Warranties
* Satisfaction guarantees
* Arrival-time claims
* Free estimates
* Fixed pricing
* Service areas

If a claim cannot be verified, omit it.

---

## 14. Scope Confirmation

Before production, create a written implementation summary.

### Implementation summary

Include:

* Enabled pages
* Enabled services
* Included service pages
* Included location pages
* Residential and commercial status
* Emergency-service status
* Forms
* Calendar behavior
* GHL users
* Notification recipients
* Review workflow
* Client-specific exceptions
* Separately priced work
* Authorized approver

The client should confirm the summary before substantial customization begins.

---

## 15. Client Repository Creation

After onboarding approval:

1. Create a private client repository from the canonical template.
2. Use the approved naming convention.
3. Record the template version.
4. Create the implementation branch.
5. Populate public client configuration.
6. Keep secrets outside the repository.
7. Add client-specific content.
8. Add approved assets.
9. Validate configuration.
10. Open a pull request for internal review.

### Recommended repository name

```text
client-slug-plumbing-website
```

---

## 16. Client Configuration

Configure:

* Business identity
* Contact information
* Address-display mode
* Business hours
* Emergency availability
* Residential status
* Commercial status
* Services
* Service areas
* Credentials
* Financing
* Warranties
* Reviews
* Social profiles
* Calls to action
* Metadata
* Structured data
* Analytics identifiers
* Public GHL widget identifiers

### Configuration validation

The build must fail when required production values remain:

```text
CONFIGURATION REQUIRED
```

---

## 17. Content Customization

### Content process

1. Review verified client information.
2. Complete client-specific research.
3. Produce the keyword and intent map.
4. Create page briefs.
5. Customize the approved template content.
6. Add client-specific evidence.
7. Review plumbing accuracy.
8. Review safety language.
9. Review local relevance.
10. Run duplication checks.
11. Prepare content for client approval.

### Prohibited shortcuts

Do not:

* Replace only the company and city names
* Publish unsupported credentials
* Generate thin city pages
* Copy competitor content
* Publish AI-generated claims without verification
* Manufacture reviews
* Add services the client does not perform

---

## 18. Website Implementation

The implementer will:

* Apply client branding
* Configure navigation
* Enable approved pages
* Configure service content
* Configure service areas
* Configure calls to action
* Configure native forms
* Add public GHL integrations
* Configure metadata
* Configure structured data
* Configure sitemap
* Configure robots directives
* Add analytics
* Optimize images
* Validate responsive behavior

The implementer must preserve the reusable design system unless custom work has been separately approved.

---

## 19. Cloudflare Setup

Create one Cloudflare Pages project per client.

Configure:

* GitHub repository connection
* Preview branch behavior
* Production branch
* Build command
* Output directory
* Runtime compatibility
* Preview environment variables
* Production environment variables
* Custom domain
* SSL
* Redirects
* Turnstile
* Form-processing secrets
* GHL integration secrets

### Environment isolation

Preview must not write into production GHL workflows unless explicitly authorized.

---

## 20. GHL Sub-Account Provisioning

After successful SaaS checkout:

1. Confirm sub-account creation.
2. Confirm the correct snapshot was applied.
3. Record snapshot version.
4. Verify custom fields.
5. Verify custom values.
6. Verify tags.
7. Verify pipeline.
8. Verify workflows.
9. Verify templates.
10. Verify calendar assets.
11. Confirm workflows remain in their approved publication state.

---

## 21. Client-Specific GHL Configuration

Configure:

* Business information
* Business hours
* Users
* User permissions
* Notification recipients
* Phone number
* Call forwarding
* Missed-call behavior
* Email sender
* Calendar availability
* Google Business Profile
* Review URL
* Custom values
* Workflow senders
* Usage rebilling
* Private integration token
* Next.js integration identifiers

### Workflows

Do not publish client-facing workflows until:

* Custom values are complete
* Sender identity is correct
* Phone and email services work
* Consent behavior is reviewed
* Internal recipients are correct
* End-to-end testing passes

---

## 22. Next.js-to-GHL Integration

Configure Cloudflare with:

* Client GHL Location ID
* Client integration token
* Pipeline ID
* Stage IDs
* Custom-field map
* Tag map
* Calendar ID
* Turnstile secret
* Rate-limit configuration
* Idempotency configuration

### Test each form

* General Plumbing Quote Request
* Emergency Plumbing Request
* Contact Form
* Review Feedback Form
* Website Onboarding Form

Website Onboarding must route to the agency operations environment rather than the plumber’s customer pipeline.

---

## 23. Internal Quality Assurance

Internal QA must occur before client review.

### Website QA

Verify:

* Required pages
* Navigation
* Mobile menu
* Footer
* Calls to action
* Phone links
* Forms
* Success states
* Failure states
* Emergency warnings
* Reviews
* Service areas
* Business information
* Legal links
* 404 behavior

### Content QA

Verify:

* Business name
* Phone
* Email
* Address
* Hours
* Services
* Service areas
* Emergency availability
* Licenses
* Credentials
* Financing
* Warranties
* Reviews
* No placeholder content
* No unsupported claims

### SEO QA

Verify:

* Titles
* Descriptions
* H1 headings
* Canonicals
* Robots
* Sitemap
* Structured data
* Breadcrumbs
* Internal links
* Image alternative text
* Indexation rules
* Preview `noindex`

### Accessibility QA

Verify:

* Keyboard navigation
* Focus states
* Skip link
* Heading structure
* Form labels
* Error summary
* Live-region announcements
* Contrast
* Touch targets
* Reduced motion
* Zoom and reflow

### Performance QA

Verify:

* Production build
* Image optimization
* Font loading
* Layout stability
* Third-party scripts
* Mobile rendering
* Core Web Vitals indicators

---

## 24. GHL Quality Assurance

Verify:

* Contact creation
* Contact updating
* Contact deduplication
* Original attribution
* Most-recent attribution
* Opportunity creation
* Opportunity deduplication
* Pipeline assignment
* Stage assignment
* Tags
* Workflow entry
* Internal notifications
* Customer acknowledgments
* Missed-call text-back
* Appointment-request behavior
* Review requests
* Feedback recovery
* Client permissions

### Emergency QA

Confirm:

* Emergency request creates high-priority opportunity
* Internal alert is immediate
* Customer receives only approved acknowledgment
* No dispatch is confirmed
* No general nurture begins
* Safety escalation is recorded appropriately

---

## 25. Test Data

Use clearly labeled test contacts:

```text
TEST — General Quote
TEST — Emergency Request
TEST — Contact Billing Question
TEST — Review Feedback
TEST — Appointment Request
```

Test records must:

* Use controlled agency contact destinations
* Never contact unrelated people
* Be removed or archived after validation
* Not appear in client reports as real leads

---

## 26. Client Review

After internal QA:

1. Deploy a Cloudflare preview.
2. Move fulfillment stage to Client Review.
3. Send the preview link.
4. Provide review instructions.
5. Restate the scope.
6. Request one consolidated revision list.
7. Set a reasonable review deadline.
8. Identify the authorized approver.

### Client review should cover

* Business information
* Services
* Service areas
* Credentials
* Reviews
* Branding
* Photography
* Calls to action
* Contact information
* Legal-information accuracy

The client is not expected to perform technical QA.

---

## 27. Revision Policy

The base plan includes:

```text
Two consolidated pre-launch revision rounds
```

### A revision round means

One organized change list submitted by the authorized approver.

### Included revisions

* Correcting business information
* Correcting services
* Adjusting approved copy
* Replacing approved images
* Minor color adjustments
* Minor section-order changes within the template
* Correcting verified factual errors

### Out-of-scope revisions

* New design direction
* New page templates
* Complete rewrite
* New custom functionality
* Large service-area expansion
* New application integration
* New brand identity
* Repeated piecemeal changes
* Reversing previously approved direction
* Custom visual systems

Out-of-scope requests require written scope and pricing approval.

---

## 28. Revision Workflow

For each round:

1. Receive consolidated feedback.
2. Classify each item.
3. Identify out-of-scope requests.
4. Confirm the approved revision list.
5. Implement changes in a branch.
6. Run proportional validation.
7. Deploy updated preview.
8. Request approval.
9. Record the completed round.

Do not implement ambiguous feedback without confirming its meaning.

---

## 29. Client Approval

Launch approval must be:

* Provided by the authorized approver
* Written
* Dated
* Associated with the approved preview
* Recorded in the agency operations system

### Approval statement

> I have reviewed the website preview and approve the business information, services, service areas, credentials, branding, content and calls to action for production launch, subject to the agreed product scope.

Approval does not waive the agency’s responsibility to correct verified technical defects.

---

## 30. Launch Readiness Gate

Before launch, confirm:

### Website

* Production build passes
* Production configuration is valid
* No demonstration content remains
* No secrets appear in the client bundle
* Canonical hostname is correct
* Redirects are configured
* Sitemap uses production URLs
* Legal pages are present

### Forms

* All forms pass
* Turnstile passes
* Rate limiting works
* GHL routing works
* Failure fallback works
* Analytics fires only after acceptance

### GHL

* Phone works
* Email works
* Users are assigned
* Permissions are restricted
* Calendar works
* Workflows are published appropriately
* Review URL is valid
* Rebilling is configured

### Domain

* DNS is correct
* SSL is active
* Primary hostname is selected
* Alternate hostname redirects correctly

### Approval

* Client approval is recorded
* Launch date is confirmed
* Rollback deployment is available

---

## 31. Production Launch

Launch procedure:

1. Merge approved changes into the production branch.
2. Monitor the Cloudflare deployment.
3. Confirm the production build.
4. Verify the custom domain.
5. Verify SSL.
6. Verify redirects.
7. Verify homepage.
8. Verify navigation.
9. Submit controlled form tests.
10. Verify GHL contacts and opportunities.
11. Verify workflows.
12. Verify calls and chat.
13. Verify analytics.
14. Verify sitemap and robots.
15. Verify structured data.
16. Confirm no preview hostname is canonical.
17. Record the deployment version.
18. Move the fulfillment stage to Live.

---

## 32. Post-Launch Verification

Complete within the first business day after launch.

Verify:

* Website availability
* Domain resolution
* SSL
* Forms
* Phone
* Chat
* CRM routing
* Workflow delivery
* Analytics
* Search-engine access
* Mobile experience
* Error monitoring

Critical launch failures require:

* Immediate triage
* Rollback when appropriate
* Client notification
* Incident record
* Corrective deployment
* Reverification

---

## 33. Client Launch Handoff

Provide:

* Production website URL
* GHL login instructions
* Mobile application instructions
* Primary navigation guide
* Conversation guide
* Opportunity pipeline guide
* Appointment-request guide
* Review-request explanation
* Support-request process
* Usage-billing explanation
* Website update process
* Scope boundaries
* Emergency-workflow limitations

Do not overwhelm the client with technical implementation details.

---

## 34. Client Training

Recommended initial training:

* One concise recorded walkthrough
* One scheduled onboarding session when needed
* One quick-reference guide

### Training topics

* Logging in
* Mobile application
* Conversations
* Contacts
* Opportunities
* Pipeline stages
* Appointments
* Reviews
* Invoices when enabled
* DND and opt-outs
* Requesting website changes
* Getting support

### Agency-managed features

Explain that the agency manages:

* Workflows
* Forms integration
* Phone configuration
* Custom fields
* Technical settings
* Website code
* Cloudflare deployment
* Snapshot updates

---

## 35. 30-Day Review

Schedule approximately 30 days after launch.

Review:

* Client login and usage
* Conversation activity
* Leads
* Missed calls
* Opportunities
* Pipeline usage
* Appointment requests
* Review requests
* Workflow errors
* Phone and messaging costs
* Website form performance
* Support requests
* Client questions
* Training gaps

### 30-day outcomes

* Correct defects
* Refine configuration
* Reinforce operational use
* Identify out-of-scope requests
* Record product-learning evidence
* Do not add unapproved complexity automatically

---

## 36. Ongoing Website Maintenance

The base plan should include:

```text
Up to 30 minutes of routine website updates per billing month
```

### Included examples

* Business-hour updates
* Phone or email changes
* Replacing an existing image
* Correcting short text
* Updating a verified credential
* Updating financing information
* Editing an existing call to action

### Not included

* New page templates
* New functionality
* Major redesign
* Extensive copywriting
* Large service expansions
* New integrations
* Multilingual implementation
* Large location-page programs

Unused update time does not roll over.

---

## 37. Ongoing GHL Support

Included support may cover:

* Verified workflow defects
* Notification-recipient changes
* User-permission adjustments
* Calendar configuration changes within scope
* Review-link changes
* Phone-routing corrections
* Basic pipeline guidance
* Reasonable configuration maintenance

Separately scoped:

* New workflow systems
* Custom integrations
* AI agents
* Advanced reporting
* Dispatch integration
* New sales pipelines
* Large reactivation campaigns
* Advertising automation

---

## 38. Support Classification

Classify each request as:

| Category           | Definition                                           |
| ------------------ | ---------------------------------------------------- |
| Defect             | Approved functionality does not work as specified    |
| Routine update     | Small content or configuration change                |
| Training           | Client needs help using included functionality       |
| Platform issue     | GHL, Cloudflare or third-party service problem       |
| Feature request    | New behavior not in the approved product             |
| Custom development | Material code or integration work                    |
| Compliance request | Consent, privacy or policy-related change            |
| Emergency incident | Critical website, form, call or data-routing failure |

Classification determines priority, scope and billing.

---

## 39. Response Priority

### Critical

Examples:

* Website unavailable
* All forms failing
* Emergency requests failing
* Cross-client data routing
* Secret exposure
* Calls routed incorrectly

Target:

* Immediate triage during supported operating periods

### High

Examples:

* One primary form failing
* GHL authentication failure
* Missed-call workflow failing
* Customer acknowledgments failing
* Production DNS problem

### Normal

Examples:

* Routine text change
* Image replacement
* User question
* Noncritical display issue
* New feature request

Final response commitments must be defined in the service agreement.

---

## 40. Client-Caused Delays

A project may move to:

```text
Paused — Client Delay
```

when the client does not provide:

* Onboarding information
* Domain access
* Required approvals
* Verified claims
* Brand assets
* Review URL
* Notification recipients
* Calendar availability
* Consolidated revision feedback

### Effects

* Implementation timeline pauses
* Subscription treatment follows the agreement
* Work resumes after required items arrive
* A new launch date may be necessary

Do not guarantee the original launch date after a material client delay.

---

## 41. Technical Delays

Use:

```text
Paused — Technical Issue
```

for:

* Platform outage
* DNS transfer issue
* GHL provisioning failure
* Payment-system issue
* Third-party integration failure
* Security concern
* Deployment defect

The agency should:

1. Record the blocker.
2. Identify ownership.
3. Communicate material impact.
4. Pursue a safe workaround.
5. Avoid claiming completion.
6. Resume after validation.

---

## 42. Scope Escalation

When a client request exceeds the base plan:

1. Document the request.
2. Explain why it is outside scope.
3. Describe the required work.
4. Provide pricing or defer it.
5. Obtain written approval.
6. Create a separate implementation task.
7. Preserve the base-product schedule when possible.

Do not perform recurring out-of-scope work informally.

---

## 43. Pilot Fulfillment

The first five customers should receive founder-led oversight.

For each pilot, record:

* Sales source
* Qualification score
* Onboarding completion time
* Missing-information count
* Production labor
* GHL setup labor
* QA labor
* Revision count
* Launch time
* Support time
* Technical problems
* Client usage
* Client feedback
* Scope exceptions
* Churn risk
* Gross-margin estimate

Pilot evidence should be used to refine the template, snapshot, onboarding and pricing.

---

## 44. Fulfillment Metrics

Track:

* Payment-to-onboarding time
* Onboarding completion rate
* Missing-asset rate
* Onboarding-to-production time
* Production-to-review time
* Review-response time
* Number of revision rounds
* Total labor per launch
* Form defect rate
* GHL defect rate
* Time to launch
* Support time per account
* Client activation rate
* 30-day CRM usage
* 30-day opportunity activity
* Customer satisfaction
* Cancellation rate

---

## 45. Documentation Requirements

Each client must have a restricted implementation record containing:

* Authorized approver
* Subscription
* Qualification notes
* Scope summary
* Onboarding status
* Verification status
* Secure-access register
* Repository
* Cloudflare project
* Domain
* GHL Location ID
* Snapshot version
* Template version
* Integration method
* Workflow publication status
* QA results
* Client approval
* Launch date
* Known deviations
* Support history

Do not store secret values in the implementation record.

---

## 46. Cancellation Preparation

Although the complete cancellation policy remains unresolved, onboarding must establish:

* Domain ownership
* Website ownership
* GHL data ownership
* Phone-number treatment
* Data-export rules
* Hosting treatment
* Access-revocation procedures
* Outstanding-usage billing
* Transition options
* Retention period

No client should reach launch without understanding that the reusable website template, workflows and snapshot are agency intellectual property unless the agreement states otherwise.

---

## 47. Onboarding and Fulfillment Acceptance Criteria

The process is accepted when:

1. Payment precedes fulfillment.
2. One authorized approver is identified.
3. Onboarding uses controlled access.
4. Passwords are not collected.
5. Assets use an approved secure delivery method.
6. Client claims are verified before publication.
7. Scope is confirmed before production.
8. Each client receives an isolated repository and Cloudflare project.
9. The correct GHL snapshot is applied.
10. Client-specific values are configured.
11. Workflows are tested before publication.
12. All five native forms pass end-to-end testing.
13. Internal QA occurs before client review.
14. Two consolidated revision rounds are enforced.
15. Written client approval is recorded.
16. Launch requires a complete readiness check.
17. Post-launch verification is completed.
18. The client receives operational training.
19. A 30-day review is scheduled.
20. Ongoing support boundaries are documented.
21. Pilot fulfillment metrics are recorded.
22. Cancellation implications are disclosed before launch.

---

## 48. Open Decisions

The following require final approval:

* Target implementation timeline
* Initial page allowance
* Included service-page count
* Included location-page count
* Final secure asset-delivery method
* Onboarding save-and-return architecture
* Support channels
* Support operating hours
* Response-time commitments
* Final monthly update allowance
* Pricing for additional work
* Client-delay subscription treatment
* Domain ownership policy
* Website portability policy
* Data-export format
* Data-retention period
* Phone-number portability
* Cancellation notice
* Website transition package
* Final legal agreements

---

## 49. Next Document

The next project document is:

`13-analytics-and-conversion-tracking.md`

It will define:

* Measurement architecture
* Analytics platform
* Consent mode
* Events
* Form conversions
* Call tracking
* Chat tracking
* GHL opportunity attribution
* Search Console
* Bing Webmaster Tools
* Reporting
* Data quality
* Privacy controls
* Testing
* KPI definitions
