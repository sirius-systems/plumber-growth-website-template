# Plumber Growth System — Product Requirements Document

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Product Requirements Document |
| Document ID | 01-product-requirements-document |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Document | 00-project-overview.md |
| Product Type | Managed website and lead-response SaaS service |
| Base Price | $297 per month |
| Setup Fee | $0 |

---

## 1. Purpose

This Product Requirements Document defines the functional, operational, technical, security, accessibility, and quality requirements for the initial Plumber Growth System product.

It establishes what must be delivered for the first pilot-ready release and what remains outside the base product.

This document governs:

- The reusable Next.js plumbing website
- Native website forms
- Cloudflare form processing
- GoHighLevel CRM configuration
- GoHighLevel workflows
- SaaS subscription provisioning
- Client onboarding
- Agency fulfillment
- Analytics
- Security
- Accessibility
- Testing
- Product boundaries

---

## 2. Product Summary

The Plumber Growth System provides established plumbing companies with:

- A professionally managed plumbing website
- Native service-request forms
- Website chat
- Immediate lead acknowledgment
- Missed-call text-back
- Centralized customer conversations
- Plumbing opportunity management
- Appointment-request functionality
- Estimate follow-up
- Customer review requests
- Website hosting and maintenance
- Managed technical support

The public website will be built with Next.js and deployed to Cloudflare Pages.

GoHighLevel will provide CRM, communications, pipeline, calendars, reputation management, workflows, invoices, SaaS billing, and customer access.

---

## 3. Product Goals

### G-01: Improve lead capture

Provide accessible, mobile-friendly forms and clear calls to action for plumbing service inquiries.

### G-02: Improve response speed

Immediately acknowledge eligible inquiries and notify the plumbing company.

### G-03: Recover missed opportunities

Respond automatically to missed calls and help the business resume the conversation.

### G-04: Organize the sales process

Create and manage opportunities through a standardized plumbing pipeline.

### G-05: Improve customer follow-up

Support estimate follow-up, appointment reminders, review requests, and reactivation.

### G-06: Create visible value

Make calls, messages, leads, appointments, opportunities, and reviews visible inside GHL.

### G-07: Standardize fulfillment

Allow the agency to customize and deploy the product without rebuilding it for every client.

### G-08: Protect profitability

Keep website customization, support, integrations, and automation within defined boundaries.

---

## 4. Product Principles

The product must be:

- Easy for plumbers to understand
- Easy for customers to use on mobile devices
- Managed rather than self-service
- Focused on operational outcomes
- Reusable across plumbing companies
- Configurable without widespread code changes
- Secure by default
- Accessible
- Honest about limitations
- Measurable
- Maintainable
- Scalable without premature complexity

---

## 5. User Roles

### 5.1 Website visitor

A prospective or existing plumbing customer who may:

- Browse services
- Call the plumbing company
- Submit a quote request
- Submit an emergency request
- Submit a general contact message
- Request an appointment
- Use website chat
- Submit service feedback
- Leave a public review

### 5.2 Plumbing company owner

The primary customer who may:

- View conversations
- View contacts
- Review opportunities
- Move opportunities through the pipeline
- View appointment requests
- Respond to leads
- Review reputation activity
- Review invoices
- Access relevant reporting
- Request website updates

### 5.3 Plumbing office user

An authorized employee who may:

- Respond to conversations
- Update contacts
- Manage opportunities
- Confirm appointments
- Record estimate or job outcomes
- Initiate approved review requests

### 5.4 Agency administrator

The agency user who may:

- Configure client accounts
- Manage workflows
- Manage integrations
- Configure phone and messaging
- Apply snapshots
- Manage SaaS subscriptions
- Review system errors
- Manage website deployments
- Manage client permissions
- Provide support

### 5.5 Agency implementer

An internal user responsible for:

- Reviewing onboarding submissions
- Customizing the website
- Configuring client data
- Connecting integrations
- Running quality assurance
- Deploying the website
- Documenting implementation status

### 5.6 Website onboarding user

A paying client or authorized representative who completes the Website Onboarding Form and provides verified implementation information.

---

## 6. Release Scope

### 6.1 Minimum pilot-ready release

The first pilot-ready release must include:

- Reusable Next.js plumbing website
- Structured client configuration
- Core page templates
- Five native forms
- Secure Cloudflare form processing
- Cloudflare Turnstile
- GHL contact creation or update
- GHL opportunity creation where applicable
- Plumbing Lead Pipeline
- Essential lead-response workflows
- Appointment-request capability
- Missed-call text-back
- Review-request workflow
- SaaS customer onboarding workflow
- Attached GHL snapshot
- $297 monthly subscription
- Client permissions
- Analytics and error monitoring
- Accessibility validation
- Production deployment documentation

### 6.2 Excluded from initial release

The first release will not include:

- Custom client dashboards outside GHL
- A self-service website editor
- GHL Websites
- GHL Funnels
- GHL Form Builder
- GHL Survey Builder
- AI voice receptionist
- Paid advertising management
- Social-media management
- Enterprise dispatch integration
- Unlimited custom pages
- Multilingual websites
- Automated city-page generation
- Guaranteed rankings or lead volume

---

## 7. Website Functional Requirements

### WEB-001: Reusable client configuration

The website must load client-specific business information from a centralized configuration layer.

The configuration must support:

- Business name
- Legal name
- Logo
- Brand colors
- Phone
- SMS number
- Email
- Address
- Business hours
- Service areas
- Emergency availability
- Licensing information
- Services
- Credentials
- Financing
- Warranties
- Reviews
- Social profiles
- Google Business Profile
- Review URL
- GHL identifiers
- Analytics identifiers
- SEO values

### WEB-002: Core navigation

The website must provide clear access to:

- Home
- Services
- Residential Plumbing
- Commercial Plumbing, when applicable
- Service Areas
- About
- Reviews
- FAQs
- Contact
- Request Service

### WEB-003: Mobile calls to action

Mobile users must have convenient access to:

- Call now
- Request service
- Emergency request, when offered

Calls to action must not imply unavailable 24/7 service.

### WEB-004: Service pages

Each service page must contain:

- Distinct service intent
- Clear heading
- Service explanation
- Relevant customer problems
- Service process
- Appropriate calls to action
- Relevant FAQs
- Internal links
- Accurate metadata
- Supported structured data

### WEB-005: Service-area content

Service-area content must use verified service areas and meaningful local information.

The system must not generate thin doorway pages through city-name replacement.

### WEB-006: Client-specific claims

Claims involving licenses, experience, response time, availability, warranties, financing, or guarantees must be driven by verified client data.

### WEB-007: Thank-you experience

Successful form submissions must display a relevant confirmation and next-step message.

Emergency-request confirmations must not guarantee immediate service.

### WEB-008: Error handling

The website must provide clear user-facing errors when a form or integration fails.

The website must not display secrets, stack traces, or internal integration details.

### WEB-009: Legal pages

The website must support:

- Privacy Policy
- Terms and Conditions
- Relevant communication disclosures
- Cookie or tracking disclosure where required

Final legal language requires professional review.

---

## 8. Form Requirements

All five forms must use native HTML controls rendered by the Next.js application.

### FORM-001: Shared requirements

Every public form must include:

- Semantic form markup
- Persistent labels
- Required-field indicators
- Client-side usability validation
- Server-side authoritative validation
- Cloudflare Turnstile verification
- Honeypot field
- Rate limiting
- Input normalization
- Accessible error summary
- Field-level error messages
- Loading state
- Success state
- Failure state
- Privacy-policy link
- Consent language where required
- Form identifier
- Submission identifier
- Submission timestamp
- Landing-page URL
- Referrer
- UTM parameters where available

### FORM-002: Duplicate handling

Form processing must attempt to identify existing contacts using normalized email or phone information before creating duplicates.

### FORM-003: Server-side delivery

Form submissions must pass through a Cloudflare Pages Function before reaching GHL.

Private credentials must never be included in browser code.

### FORM-004: Failure logging

Failed submissions must be logged with enough information for diagnosis without exposing unnecessary personal information.

### FORM-005: Retry protection

The system must prevent accidental duplicate submissions caused by repeated button presses or browser retries.

---

## 9. General Plumbing Quote Request Requirements

### QUOTE-001: Required information

The form must support:

- First name
- Last name
- Mobile phone
- Email
- Residential or commercial
- Plumbing service
- Problem description
- Service address
- City
- State
- ZIP code
- Preferred contact method
- Consent
- Attribution fields

### QUOTE-002: Optional information

The form may support:

- Preferred appointment date
- Preferred appointment window
- Existing-customer status
- Photo upload

Photo upload requires an approved storage and security design before implementation.

### QUOTE-003: GHL routing

A valid submission must:

- Create or update the contact
- Record the lead source
- Apply the correct tag
- Create an opportunity in New Lead
- Store submitted service information
- Notify the plumbing company
- Send an acknowledgment
- Begin standard lead follow-up

---

## 10. Emergency Plumbing Request Requirements

### EMER-001: Required information

The form must support:

- First name
- Last name
- Mobile phone
- Emergency type
- Active flooding status
- Water shutoff status
- Gas odor status
- Service address
- City
- ZIP code
- Problem description
- Consent
- Attribution fields

### EMER-002: Safety warning

The form must state that submission does not guarantee immediate service.

It must direct users to appropriate emergency services or utility providers for immediate threats involving:

- Gas odors
- Fire
- Electrical danger
- Serious injury
- Threats to life
- Immediate threats to property

### EMER-003: Gas odor handling

If a user indicates a gas odor, the interface must display an immediate safety message before submission.

The message must not provide unverified repair instructions.

### EMER-004: Priority routing

A valid emergency request must:

- Create or update the contact
- Apply an emergency tag
- Create a high-priority opportunity
- Notify designated company users
- Send an acknowledgment
- Avoid slow nurture workflows
- Record the emergency category

### EMER-005: No dispatch promise

Automated communications must not state or imply that a technician has been dispatched unless an authorized person or integrated dispatch system has confirmed it.

---

## 11. Contact Form Requirements

### CONTACT-001: Fields

The Contact Form must support:

- First name
- Last name
- Email
- Phone, optional
- Subject
- Message
- Preferred contact method
- Consent where required
- Attribution fields

### CONTACT-002: Routing

A valid submission must:

- Create or update the contact
- Notify the company
- Send confirmation
- Record the subject and message

### CONTACT-003: Opportunity creation

The system should create an opportunity only when the submission reflects a plumbing service or estimate inquiry.

General administrative questions should not automatically become sales opportunities.

---

## 12. Review Feedback Form Requirements

### REVIEW-001: Fields

The form must support:

- Customer name
- Email or phone
- Service date, optional
- Technician name, optional
- Rating
- Written feedback
- Permission to contact
- Testimonial-use consent

### REVIEW-002: Review neutrality

The public review option must not be restricted based on the submitted rating.

### REVIEW-003: Service recovery

A rating at or below the configured threshold must:

- Notify designated company users
- Create a follow-up task
- Record the feedback
- Avoid publishing the feedback automatically

### REVIEW-004: Testimonial consent

Permission to contact and permission to publish feedback must be recorded separately.

### REVIEW-005: Public review links

Public review links must use the verified client-specific review URL.

---

## 13. Website Onboarding Form Requirements

### ONB-001: Access

The onboarding form must be intended for paying customers and authorized representatives.

A secure token or authenticated access mechanism should be evaluated before production launch.

### ONB-002: Information categories

The form must support:

- Business information
- Primary contacts
- Brand assets
- Services
- Service areas
- Credentials
- Company history
- Website content
- Social profiles
- Google Business Profile information
- Domain information
- Analytics status
- Notification preferences
- Calendar requirements
- Review information
- Approval and acknowledgment

### ONB-003: Password prohibition

The form must explicitly instruct users not to submit passwords.

### ONB-004: File uploads

Logo, photo, and document uploads require:

- Allowed file types
- File-size limits
- Malware-risk mitigation
- Secure storage
- Restricted access
- Retention rules

### ONB-005: Fulfillment routing

A valid submission must:

- Update the client onboarding record
- Apply an onboarding-complete tag
- Notify the implementation team
- Move the fulfillment opportunity
- Create implementation tasks
- Send next-step confirmation

---

## 14. GoHighLevel CRM Requirements

### CRM-001: Contact management

Each valid lead submission must create or update a GHL contact.

### CRM-002: Custom fields

GHL must support fields for:

- Plumbing service requested
- Service urgency
- Residential or commercial
- Property address
- Property ZIP code
- Active flooding
- Water shutoff status
- Gas odor status
- Preferred appointment date
- Preferred contact method
- Lead source
- Existing-customer status
- Estimate value
- Job value
- Job-completion date
- Review-request status
- Private-feedback rating
- Testimonial consent

### CRM-003: Pipeline

The snapshot must include the Plumbing Lead Pipeline.

### CRM-004: Pipeline stages

The initial stages are:

1. New Lead
2. Contact Attempted
3. Connected
4. Estimate Requested
5. Estimate Scheduled
6. Estimate Sent
7. Job Won
8. Job Lost
9. Follow-Up Needed

### CRM-005: Opportunity source

Each opportunity must retain the best available source information, including form type and campaign attribution.

### CRM-006: Manual control

Authorized plumbing-company users must be able to update opportunity status without editing agency-managed workflows.

---

## 15. Communication Requirements

### COM-001: Immediate acknowledgment

Eligible lead forms must send an acknowledgment promptly after successful processing.

### COM-002: Internal notification

The plumbing company must receive a notification containing essential lead information.

### COM-003: Consent

Text and email workflows must respect the consent and communication purpose associated with the submission.

### COM-004: Identification

Automated messages must identify the plumbing company.

### COM-005: Opt-out

Marketing or recurring automated text messages must support appropriate opt-out handling.

### COM-006: Quiet hours

Non-emergency automated communication must follow appropriate quiet-hour and frequency rules.

### COM-007: Delivery failures

Delivery failures should be recorded and made available for agency diagnosis.

---

## 16. Workflow Requirements

### WF-001: Website lead intake

Process general quote requests and create the required CRM records.

### WF-002: Emergency intake

Prioritize emergency requests without guaranteeing dispatch.

### WF-003: Contact intake

Process general contact submissions without creating unnecessary opportunities.

### WF-004: Missed-call text-back

Send an appropriate response after an eligible missed call.

### WF-005: Appointment communications

Support appointment confirmation and reminders when appointments are confirmed.

### WF-006: Estimate follow-up

Follow up on open estimate opportunities according to an approved schedule.

### WF-007: Review request

Send an honest review request after a confirmed job-completion event.

### WF-008: Feedback recovery

Notify the business and create a task after low private feedback.

### WF-009: Reactivation

Support limited reactivation of eligible lost or inactive opportunities.

### WF-010: SaaS onboarding

Send onboarding instructions after successful subscription creation.

### WF-011: Failed payment

Notify appropriate parties when subscription payment fails.

### WF-012: Cancellation

Stop or modify applicable services after cancellation according to the approved cancellation policy.

### WF-013: Workflow safeguards

Every workflow must document:

- Trigger
- Filters
- Entry conditions
- Re-entry rules
- Wait steps
- Messages
- Internal notifications
- Exit conditions
- Goal events
- Error handling
- Suppression rules
- Test cases

---

## 17. Calendar Requirements

### CAL-001: Appointment requests

The system must support plumbing appointment requests.

### CAL-002: Confirmation status

A request must not be presented as a confirmed appointment until the company or an authorized scheduling system confirms it.

### CAL-003: Availability

Client-specific availability must be configured during onboarding.

### CAL-004: Reminders

Confirmed appointments may receive reminders based on client preference and valid communication consent.

### CAL-005: Emergency limitations

Emergency requests should not depend solely on calendar booking.

---

## 18. Reputation Requirements

### REP-001: Honest review requests

The system may request honest customer reviews after confirmed job completion.

### REP-002: No review gating

The system must not condition access to a public-review link on a positive private rating.

### REP-003: Verified review URL

The client’s public review destination must be verified before launch.

### REP-004: Review notifications

The system should notify the company when new reviews are detected, where supported.

### REP-005: Schema integrity

Review structured data may be implemented only when eligible, visible, accurate, and supported by verified data.

---

## 19. SaaS Plan Requirements

### SAAS-001: Plan name

Plumber Growth System

### SAAS-002: Price

$297 per month.

### SAAS-003: Setup fee

$0.

### SAAS-004: Trial

No free trial for the initial plan.

### SAAS-005: Provisioning

Successful checkout must provision a GHL sub-account and apply the approved plumbing snapshot.

### SAAS-006: Base capabilities

The plan includes:

- 2 Way Text & Email Conversation
- Web Chat
- Reputation Management
- GMB Call Tracking
- Missed Call Text Back
- Calendar
- CRM
- Opportunities
- Trigger Links
- SMS & Email Templates
- Workflows
- Invoice
- Launchpad

### SAAS-007: Excluded capabilities

The plan does not include:

- Form Builder
- Survey Builder
- Funnels
- Websites

### SAAS-008: Usage billing

Usage-based communications and premium services must be separately billed or rebilled according to approved terms.

### SAAS-009: Snapshot

Only a tested, versioned, production-approved snapshot may be attached to the plan.

---

## 20. Permissions Requirements

### PERM-001: Client access

Client users should primarily access:

- Conversations
- Contacts
- Opportunities
- Calendars
- Reputation
- Invoices
- Relevant reporting

### PERM-002: Agency control

Client users should not receive unrestricted access to:

- Workflow editing
- Integration credentials
- Phone-system configuration
- Custom field architecture
- SaaS configuration
- Agency settings
- Snapshot management
- Marketplace installation
- Developer settings

### PERM-003: Least privilege

Every user must receive the minimum access required for their role.

### PERM-004: Access review

Permissions must be reviewed during onboarding and after material staffing changes.

---

## 21. Analytics Requirements

### ANA-001: Website analytics

The system must support privacy-conscious analytics configuration.

### ANA-002: Conversion events

Track at least:

- Click-to-call
- General quote submission
- Emergency request submission
- Contact submission
- Appointment request
- Chat engagement
- Review-link click

### ANA-003: Attribution

Capture available:

- Landing page
- Referrer
- UTM source
- UTM medium
- UTM campaign
- UTM content
- UTM term

### ANA-004: Error monitoring

The agency must be able to identify recurring form and integration failures.

### ANA-005: No fabricated attribution

The system must distinguish known attribution from direct, unknown, or unavailable attribution.

---

## 22. SEO Requirements

### SEO-001: Metadata

Every indexable page must have distinct, configurable metadata.

### SEO-002: Canonicals

Every indexable page must produce an appropriate canonical URL.

### SEO-003: Sitemap

The website must generate an accurate XML sitemap.

### SEO-004: Robots

The website must provide an appropriate robots policy.

### SEO-005: Structured data

Structured data must use verified client information and match visible content.

### SEO-006: Internal links

Service, audience, service-area, FAQ, and conversion pages must use intentional internal links.

### SEO-007: Location integrity

The system must not publish a location page for an area the client does not serve.

### SEO-008: Content uniqueness

Service and location pages must not rely on superficial token replacement.

---

## 23. Accessibility Requirements

### A11Y-001

Target WCAG 2.2 AA practices.

### A11Y-002

All interactive functionality must be keyboard accessible.

### A11Y-003

Focus indicators must be visible.

### A11Y-004

Forms must use persistent labels and programmatic error associations.

### A11Y-005

Color contrast must meet applicable requirements.

### A11Y-006

The interface must respect reduced-motion preferences.

### A11Y-007

Responsive content must remain usable at common mobile and zoomed viewport sizes.

### A11Y-008

Automated accessibility testing must be supplemented by manual keyboard and screen-reader-oriented review.

---

## 24. Performance Requirements

### PERF-001

Use static generation where appropriate.

### PERF-002

Minimize client-side JavaScript.

### PERF-003

Optimize responsive images.

### PERF-004

Avoid unnecessary third-party scripts.

### PERF-005

Prevent avoidable layout shifts.

### PERF-006

Production builds must be tested under representative mobile conditions.

### PERF-007

Performance budgets will be finalized during technical architecture.

---

## 25. Security Requirements

### SEC-001

GHL credentials and private webhooks must remain server-side.

### SEC-002

All server-side form endpoints must validate input.

### SEC-003

Public forms must use Turnstile and rate limiting.

### SEC-004

Logs must avoid unnecessary personal information.

### SEC-005

File uploads must not be enabled until secure storage and validation are implemented.

### SEC-006

Secrets must use environment variables and must not be committed to Git.

### SEC-007

Dependency and platform updates must follow a controlled maintenance process.

### SEC-008

Production and preview environments must use appropriately separated configuration.

---

## 26. Reliability Requirements

### REL-001

A successful website response must not be shown until the form-processing layer accepts the submission.

### REL-002

The integration must distinguish validation errors, spam rejection, upstream failure, and unexpected server errors.

### REL-003

Repeated submissions must not create uncontrolled duplicate opportunities.

### REL-004

Critical workflow changes must be tested before publication.

### REL-005

A rollback or disable procedure must exist for defective workflows.

---

## 27. Fulfillment Requirements

### FUL-001

Every client must complete onboarding before website production begins.

### FUL-002

The agency must verify business claims before publication.

### FUL-003

The implementation process must use a standardized checklist.

### FUL-004

Client approval must be recorded before production launch.

### FUL-005

The launch process must validate:

- Domain
- SSL
- Forms
- Calls
- Chat
- CRM routing
- Workflows
- Analytics
- Metadata
- Structured data
- Mobile behavior
- Accessibility
- Legal links

### FUL-006

Website customization beyond the base scope must be identified before implementation.

---

## 28. Support Requirements

### SUP-001

The base plan includes support for system defects and defined routine maintenance.

### SUP-002

The final service agreement must define:

- Support channels
- Response targets
- Update allowance
- Revision limits
- Emergency support boundaries
- Excluded development work

### SUP-003

Support requests must be categorized as:

- Defect
- Content update
- Configuration request
- Training request
- Feature request
- Out-of-scope development
- Third-party platform issue

---

## 29. Acceptance Criteria

The pilot release is accepted when:

1. The production website builds successfully.
2. The website deploys to Cloudflare Pages.
3. Client configuration controls required business information.
4. All required routes render correctly.
5. All five forms render accessibly.
6. Public forms pass server-side validation.
7. Turnstile verification functions correctly.
8. Valid submissions reach GHL.
9. Contacts are created or updated correctly.
10. Opportunities are created only when appropriate.
11. Emergency requests receive priority routing.
12. Internal notifications contain correct information.
13. Automated acknowledgments use correct business identity.
14. Missed-call text-back works as configured.
15. Calendar requests do not imply false confirmation.
16. Review workflows do not gate public review access.
17. The snapshot applies successfully to a test account.
18. Client permissions match the approved model.
19. SaaS checkout provisions the correct account.
20. Usage-based billing disclosures are present.
21. Critical accessibility issues are resolved.
22. No private secrets appear in the client bundle.
23. Analytics events fire correctly.
24. Legal and consent content is ready for professional review.
25. Launch and rollback procedures are documented.

---

## 30. Validation Requirements

Before release, Claude Code must run the repository’s applicable:

- Formatting check
- Lint check
- Type check
- Unit tests
- Integration tests
- Production build
- Static export or Cloudflare build
- Broken-link validation
- Accessibility checks
- Form validation tests
- Security-oriented configuration review

Manual validation must include:

- Mobile navigation
- Keyboard navigation
- Form error behavior
- Successful submissions
- Duplicate submissions
- Turnstile failure
- GHL failure behavior
- Emergency warnings
- Click-to-call
- Appointment requests
- GHL opportunity creation
- Workflow notifications
- Review-feedback routing
- SaaS provisioning

---

## 31. Dependencies

The product depends on:

- Approved product scope
- Approved website architecture
- Approved design system
- Verified client information
- GitHub repository
- Cloudflare account
- Cloudflare Pages project
- GoHighLevel agency account
- GHL SaaS plan
- GHL snapshot
- GHL phone and email services
- Stripe account
- Domain access
- Analytics configuration
- Privacy and terms documentation

---

## 32. Open Requirements

The following require resolution in later documents:

- Final page allowance
- Final revision allowance
- Final monthly update allowance
- Final response-time commitments
- Domain ownership and transfer rules
- Website ownership after cancellation
- Data retention after cancellation
- GHL V1 versus V2 final implementation
- Usage markup
- Included communication credits
- File-upload storage
- Onboarding-form access control
- Final analytics platform
- Final error-monitoring platform
- Exact performance budgets
- Exact browser-support policy
- Final consent language
- Final legal agreements

---

## 33. Next Document

The next project document is:

`02-offer-and-pricing-strategy.md`

It will define:

- Offer structure
- Customer-facing deliverables
- Pricing rationale
- Usage charges
- Scope controls
- Risk reversal
- Sales positioning
- Qualification
- Future upgrade path
- Cancellation implications
- Unit economics
