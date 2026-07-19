# Plumber Growth System — GoHighLevel Snapshot Architecture

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | GoHighLevel Snapshot Architecture |
| Document ID | 09-ghl-snapshot-architecture |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Documents | 00-project-overview.md through 08-nextjs-form-specifications.md |
| Snapshot Purpose | Reusable plumbing CRM and automation foundation |
| Public Website | Next.js on Cloudflare Pages |
| Base SaaS Plan | $297 per month |

---

## 1. Purpose

This document defines the reusable GoHighLevel snapshot that will be attached to the Plumber Growth System SaaS plan.

It establishes:

- Snapshot-source sub-account
- Snapshot naming
- Included assets
- Excluded assets
- Custom values
- Custom fields
- Tags
- Pipeline
- Calendars
- Workflow inventory
- Message templates
- Trigger links
- Reputation settings
- Permissions
- Provisioning
- Client-specific configuration
- Testing
- Versioning
- Snapshot updates

The snapshot is the reusable operational foundation for each plumber’s GHL sub-account.

It is not responsible for building or hosting the public website.

---

## 2. Snapshot Objectives

The snapshot must:

1. Provision a consistent plumbing CRM structure.
2. Support the five native Next.js forms.
3. Create the Plumbing Lead Pipeline.
4. Provide reusable lead-response workflows.
5. Support missed-call recovery.
6. Support appointment requests and reminders.
7. Support estimate follow-up.
8. Support honest review requests.
9. Support private-feedback recovery.
10. Support SaaS customer onboarding.
11. Minimize manual account configuration.
12. Keep client-specific credentials and values out of the source snapshot.
13. Avoid including unused GHL features.
14. Allow controlled future updates.

---

## 3. Snapshot Source Sub-Account

Create a dedicated internal sub-account named:

```text
Plumber Growth System — Snapshot Source
```

### Purpose

This account exists only to:

* Build reusable assets
* Test workflows
* Validate field relationships
* Create snapshot versions
* Test snapshot updates
* Maintain master templates

### Restrictions

Do not use this account for:

* Live customer conversations
* Real client contacts
* Production phone traffic
* Production appointments
* Client billing
* Real customer reviews
* Live advertising
* Daily agency operations

### Test data

Use clearly labeled fictional records:

```text
TEST — Residential Drain Lead
TEST — Emergency Leak Lead
TEST — Review Feedback Contact
TEST — Website Onboarding Client
```

Never include actual customer records in the source account.

---

## 4. Snapshot Naming Convention

Use:

```text
Plumber Growth System — vMAJOR.MINOR.PATCH
```

Examples:

```text
Plumber Growth System — v1.0.0
Plumber Growth System — v1.1.0
Plumber Growth System — v1.1.1
```

### Version meanings

| Change                               | Version |
| ------------------------------------ | ------- |
| Breaking pipeline or workflow change | Major   |
| New backward-compatible asset        | Minor   |
| Correction to an existing asset      | Patch   |

Each client record should retain:

* Snapshot name
* Snapshot version
* Date applied
* Date last updated
* Deviations from the standard snapshot

---

## 5. Included Snapshot Assets

Include only approved reusable assets.

### CRM and data structure

* Custom values
* Contact custom fields
* Opportunity custom fields where supported and required
* Plumbing Lead Pipeline
* Tags
* Trigger links
* Approved custom contact views

### Calendar and scheduling

* Plumbing Service Request Calendar template
* Calendar notification templates
* Calendar-related workflows
* Calendar group when operationally useful

### Automation

* Approved workflows
* Workflow folders
* Internal notification templates
* Text templates
* Email templates

### Reputation

* Approved review-request templates
* Reusable review workflow
* Review settings that do not contain client-specific destination data

### Reporting

Optional after validation:

* Plumbing Lead Overview dashboard
* Opportunity Pipeline dashboard
* Lead Source dashboard
* Missed Call dashboard
* Review Activity dashboard

### Do not include

* GHL websites
* GHL funnels
* GHL forms
* GHL surveys
* Membership products
* Courses
* Communities
* Affiliate tools
* Social-planner assets
* Advertising campaigns
* AI agents
* Voice AI
* Unapproved marketplace applications

---

## 6. Items Requiring Post-Provisioning Setup

The following must be configured after the client sub-account exists:

* Client business information
* Location address
* Business hours
* Client users
* User permissions
* Assigned calendars
* Calendar availability
* Phone number
* Call routing
* Missed-call behavior
* Email services
* Sending domain
* Google Business Profile connection
* Google review URL
* Facebook connection
* Stripe connection when needed for client invoices
* GHL API or webhook credentials
* Next.js form integration
* Client notification recipients
* Workflow sender details
* Consent settings
* Domain and website URLs
* Third-party integrations
* Usage rebilling
* Live workflow publication

HighLevel snapshots transfer reusable configuration, not live contacts, conversations, appointments, assigned phone numbers, payment connections, or third-party integrations.

---

## 7. Naming Standards

All snapshot assets should use predictable prefixes.

### Workflows

```text
PGS — Lead — General Quote Intake
PGS — Lead — Emergency Request Intake
PGS — Lead — Contact Form Intake
PGS — Call — Missed Call Text Back
PGS — Estimate — Follow-Up
PGS — Appointment — Confirmation
PGS — Appointment — Reminder
PGS — Reputation — Review Request
PGS — Reputation — Feedback Recovery
PGS — SaaS — Client Onboarding
```

### Custom fields

Use customer-facing labels but document internal keys.

```text
Plumbing Service Requested
Service Urgency
Property Address
Active Flooding
```

### Tags

Use lowercase kebab-case:

```text
website-lead
general-quote-request
emergency-plumbing-request
```

### Templates

```text
PGS — SMS — General Lead Acknowledgment
PGS — SMS — Missed Call Text Back
PGS — Email — Onboarding Received
```

### Calendars

```text
Plumbing Service Request Calendar
```

---

## 8. Workflow Folder Structure

Create folders:

```text
01 — Lead Intake
02 — Missed Calls
03 — Estimates
04 — Appointments
05 — Reputation
06 — Reactivation
07 — SaaS Onboarding
08 — Billing and Cancellation
90 — Test Utilities
99 — Archived
```

Only production-approved workflows should be included in the attached snapshot.

Test utilities should be excluded unless required for post-load validation.

---

## 9. Custom Values

Custom values allow reusable workflows to reference client-specific information.

### 9.1 Business identity

| Custom value         | Example placeholder                             |
| -------------------- | ----------------------------------------------- |
| Business Public Name | Your Plumbing Company                           |
| Business Legal Name  | Your Plumbing Company LLC                       |
| Owner Name           | Account Owner                                   |
| Primary Email        | [office@example.com](mailto:office@example.com) |
| Primary Phone        | +15555555555                                    |
| SMS Phone            | +15555555555                                    |
| Website URL          | [https://example.com](https://example.com)      |
| Domain               | example.com                                     |

### 9.2 Location

| Custom value          | Purpose                               |
| --------------------- | ------------------------------------- |
| Business Address      | Verified display address              |
| City                  | Primary city                          |
| State                 | State abbreviation                    |
| ZIP Code              | Primary ZIP                           |
| Primary Service Area  | Main market                           |
| Service Areas Summary | Human-readable service coverage       |
| Address Display Mode  | Full address or service-area business |

### 9.3 Hours and availability

| Custom value                | Purpose               |
| --------------------------- | --------------------- |
| Business Hours Summary      | Customer-facing hours |
| Emergency Service Available | Yes or No             |
| 24/7 Service Available      | Yes or No             |
| After-Hours Instructions    | Verified instructions |
| Holiday Hours Instructions  | Optional              |

### 9.4 Reviews

| Custom value                | Purpose                          |
| --------------------------- | -------------------------------- |
| Google Business Profile URL | Verified profile                 |
| Google Review URL           | Direct honest-review destination |
| Review Contact Email        | Internal reputation recipient    |
| Low Feedback Threshold      | Default 3                        |

### 9.5 Notifications

| Custom value                      | Purpose                 |
| --------------------------------- | ----------------------- |
| Lead Notification Email           | Internal lead recipient |
| Lead Notification Phone           | Internal SMS recipient  |
| Emergency Notification Email      | Urgent recipient        |
| Emergency Notification Phone      | Urgent SMS recipient    |
| Billing Notification Email        | Billing recipient       |
| Implementation Notification Email | Agency recipient        |

### 9.6 Website and forms

| Custom value               | Purpose                      |
| -------------------------- | ---------------------------- |
| General Quote Form URL     | Next.js request-service page |
| Emergency Request Form URL | Next.js emergency form       |
| Contact Form URL           | Next.js contact page         |
| Review Feedback URL        | Next.js feedback page        |
| Client Onboarding URL      | Secure onboarding page       |
| Privacy Policy URL         | Website privacy policy       |
| Terms URL                  | Website terms                |

### 9.7 Scheduling

| Custom value            | Purpose                             |
| ----------------------- | ----------------------------------- |
| Appointment Request URL | Approved calendar or request URL    |
| Scheduling Phone        | Phone used for scheduling           |
| Appointment Disclaimer  | Requested versus confirmed language |

### Custom-value warning

The snapshot must not ship with realistic production-looking placeholders that could accidentally be sent to customers.

Use unmistakable values such as:

```text
CONFIGURATION REQUIRED
```

Workflows must remain unpublished until required client values are populated and tested.

---

## 10. Contact Custom Fields

### 10.1 Service details

| Field                      | Type            | Allowed values                    |
| -------------------------- | --------------- | --------------------------------- |
| Plumbing Service Requested | Dropdown        | Enabled plumbing service list     |
| Service Urgency            | Dropdown        | Standard, Urgent, Emergency       |
| Customer Type              | Dropdown        | Residential, Commercial           |
| Problem Description        | Multi-line text | Customer description              |
| Existing Customer          | Dropdown        | Yes, No, Unsure                   |
| Lead Form Type             | Dropdown        | General Quote, Emergency, Contact |

### 10.2 Property information

| Field                  | Type             |
| ---------------------- | ---------------- |
| Service Street Address | Single-line text |
| Service Address Line 2 | Single-line text |
| Service City           | Single-line text |
| Service State          | Dropdown         |
| Service ZIP Code       | Single-line text |

Do not assume the service address is always the same as the contact’s mailing address.

### 10.3 Emergency information

| Field                 | Type     | Values                    |
| --------------------- | -------- | ------------------------- |
| Emergency Type        | Dropdown | Approved emergency values |
| Active Flooding       | Dropdown | Yes, No, Unsure           |
| Water Shut Off        | Dropdown | Yes, No, Unsure           |
| Gas Odor              | Dropdown | Yes, No, Unsure           |
| Electrical Danger     | Dropdown | Yes, No, Unsure           |
| Safety Acknowledgment | Checkbox | Selected or not selected  |

### 10.4 Scheduling

| Field                      | Type     |
| -------------------------- | -------- |
| Preferred Appointment Date | Date     |
| Preferred Appointment Time | Dropdown |
| Preferred Contact Method   | Dropdown |
| Appointment Request Status | Dropdown |

Suggested Appointment Request Status values:

```text
Not Requested
Requested
Pending Confirmation
Confirmed
Reschedule Requested
Canceled
Completed
```

### 10.5 Attribution

| Field                      | Type             |
| -------------------------- | ---------------- |
| Original Landing Page      | Single-line text |
| Original Referrer          | Single-line text |
| UTM Source                 | Single-line text |
| UTM Medium                 | Single-line text |
| UTM Campaign               | Single-line text |
| UTM Term                   | Single-line text |
| UTM Content                | Single-line text |
| GCLID                      | Single-line text |
| GBRAID                     | Single-line text |
| WBRAID                     | Single-line text |
| FBCLID                     | Single-line text |
| Submission ID              | Single-line text |
| First Form Submitted       | Dropdown         |
| Most Recent Form Submitted | Dropdown         |

### 10.6 Consent

| Field                         | Type             |
| ----------------------------- | ---------------- |
| Service SMS Consent           | Checkbox         |
| Service SMS Consent Date      | Date and time    |
| Service SMS Consent Source    | Single-line text |
| Service SMS Consent Version   | Single-line text |
| Marketing SMS Consent         | Checkbox         |
| Marketing SMS Consent Date    | Date and time    |
| Marketing SMS Consent Source  | Single-line text |
| Marketing SMS Consent Version | Single-line text |
| Email Marketing Consent       | Checkbox         |
| Consent Withdrawal Date       | Date and time    |

Final consent architecture requires legal review.

### 10.7 Feedback and reviews

| Field                                | Type                    |
| ------------------------------------ | ----------------------- |
| Private Feedback Rating              | Numeric or dropdown 1–5 |
| Private Feedback                     | Multi-line text         |
| Feedback Submitted Date              | Date and time           |
| Permission to Contact About Feedback | Checkbox                |
| Testimonial Permission               | Checkbox                |
| Testimonial Attribution              | Dropdown                |
| Review Request Status                | Dropdown                |
| Review Request Date                  | Date and time           |

### 10.8 Onboarding reference

Do not place the complete Website Onboarding Form into ordinary contact fields.

Use only necessary status fields:

| Field                     | Type                             |
| ------------------------- | -------------------------------- |
| SaaS Onboarding Status    | Dropdown                         |
| Onboarding Submitted Date | Date and time                    |
| Authorized Approver       | Single-line text                 |
| Website Production Status | Dropdown                         |
| Client Repository URL     | URL or secure internal reference |
| Production Website URL    | URL                              |

Sensitive or extensive onboarding content should remain within an approved restricted operational system.

---

## 11. Opportunity Fields

Where GHL supports the required opportunity-level fields, create:

| Field               | Purpose                         |
| ------------------- | ------------------------------- |
| Service Requested   | Opportunity-specific service    |
| Service Urgency     | Standard, urgent or emergency   |
| Estimate Value      | Expected estimate               |
| Job Value           | Final job value                 |
| Lead Source Detail  | Form or campaign source         |
| Service Address     | Job location                    |
| Estimate Date       | Scheduled or completed estimate |
| Job Completion Date | Completed job date              |
| Lost Reason         | Controlled reason               |
| Follow-Up Date      | Next action                     |

Contact fields should describe the person. Opportunity fields should describe the specific potential job.

---

## 12. Plumbing Lead Pipeline

### Pipeline name

```text
Plumbing Lead Pipeline
```

### Stages

| Order | Stage              | Definition                                 |
| ----: | ------------------ | ------------------------------------------ |
|     1 | New Lead           | New unworked opportunity                   |
|     2 | Contact Attempted  | Initial outreach attempted                 |
|     3 | Connected          | Two-way customer contact established       |
|     4 | Estimate Requested | Customer wants an estimate or assessment   |
|     5 | Estimate Scheduled | Estimate appointment confirmed             |
|     6 | Estimate Sent      | Estimate provided                          |
|     7 | Job Won            | Customer accepted and job secured          |
|     8 | Job Lost           | Opportunity closed without a job           |
|     9 | Follow-Up Needed   | Active opportunity requiring future action |

### Stage rules

* Workflows must not move opportunities to Connected without a qualifying customer response.
* Appointment requests must not move automatically to Estimate Scheduled until confirmed.
* Job Won requires a deliberate operational event.
* Job Lost should record a reason.
* Follow-Up Needed requires a next-action date where practical.

### Initial lost reasons

```text
Unable to Contact
Customer Chose Competitor
Price
Outside Service Area
Service Not Offered
Customer Delayed Work
Duplicate
Spam
Existing Customer Support Only
Other
```

---

## 13. Tags

### 13.1 Source tags

```text
website-lead
phone-lead
chat-lead
manual-lead
google-business-profile
paid-search-lead
organic-search-lead
referral-lead
```

### 13.2 Form tags

```text
general-quote-request
emergency-plumbing-request
website-contact
customer-feedback-submitted
saas-onboarding-submitted
```

### 13.3 Service tags

```text
service-emergency-plumbing
service-drain-cleaning
service-water-heater-repair
service-water-heater-installation
service-leak-detection
service-pipe-repair
service-sewer-line-repair
service-toilet-repair
service-faucet-repair
service-garbage-disposal-repair
service-commercial-plumbing
service-other
```

### 13.4 Priority tags

```text
priority-standard
priority-urgent
priority-emergency
```

### 13.5 Communication tags

```text
service-sms-consent
marketing-sms-consent
email-marketing-consent
do-not-automate
manual-follow-up-required
```

### 13.6 Feedback tags

```text
private-rating-1
private-rating-2
private-rating-3
private-rating-4
private-rating-5
feedback-recovery-required
testimonial-consent-yes
```

### 13.7 Onboarding tags

```text
saas-customer
onboarding-not-started
onboarding-in-progress
onboarding-submitted
assets-missing
website-in-production
client-review
website-live
```

Avoid tags that duplicate a field without serving a workflow, filtering, or reporting purpose.

---

## 14. Trigger Links

Create only trigger links with defined operational use.

Potential links:

```text
PGS — Review — Google Review Link
PGS — Scheduling — Appointment Request
PGS — Lead — Call Business
PGS — Onboarding — Complete Website Questionnaire
PGS — Billing — Update Payment Method
```

Trigger links must use client-specific destinations after provisioning.

Do not publish workflows while trigger links still point to placeholders.

---

## 15. Calendar Architecture

### Calendar name

```text
Plumbing Service Request Calendar
```

### Purpose

Support appointment requests and confirmed estimate or service appointments.

### Recommended initial model

Use one calendar unless the client’s staffing requires separate calendars.

### Calendar fields

Collect:

* Name
* Phone
* Email
* Service requested
* Service address
* Problem summary
* Preferred communication method
* Consent where applicable

### Calendar configuration after provisioning

Configure:

* Assigned users
* Availability
* Duration
* Buffer
* Minimum scheduling notice
* Date range
* Confirmation behavior
* Rescheduling
* Cancellation
* Time zone
* Notification sender
* Calendar ownership

### Appointment request distinction

If the calendar cannot guarantee availability, label it:

```text
Request a Plumbing Appointment
```

Do not label it:

```text
Book a Confirmed Appointment
```

unless the operational configuration truly confirms the appointment.

### Emergency limitation

Do not make the calendar the only path for emergency plumbing requests.

---

## 16. Workflow Inventory

Detailed workflow logic will be defined in `10-ghl-workflow-specifications.md`.

### 16.1 Lead intake

1. `PGS — Lead — General Quote Intake`
2. `PGS — Lead — Emergency Request Intake`
3. `PGS — Lead — Contact Form Intake`
4. `PGS — Lead — Internal New Lead Notification`
5. `PGS — Lead — Standard Acknowledgment`
6. `PGS — Lead — No Response Follow-Up`

### 16.2 Missed calls

7. `PGS — Call — Missed Call Text Back`
8. `PGS — Call — Missed Call Internal Notification`

### 16.3 Estimates

9. `PGS — Estimate — Requested`
10. `PGS — Estimate — Scheduled`
11. `PGS — Estimate — Sent Follow-Up`
12. `PGS — Estimate — Follow-Up Task`

### 16.4 Appointments

13. `PGS — Appointment — Request Received`
14. `PGS — Appointment — Confirmation`
15. `PGS — Appointment — Reminder`
16. `PGS — Appointment — Reschedule or Cancellation`

### 16.5 Reputation

17. `PGS — Reputation — Job Completion Review Request`
18. `PGS — Reputation — Review Reminder`
19. `PGS — Reputation — Private Feedback Intake`
20. `PGS — Reputation — Feedback Recovery`
21. `PGS — Reputation — New Review Notification`

### 16.6 Reactivation

22. `PGS — Reactivation — Eligible Lost Opportunities`

Do not publish broad reactivation until consent, eligibility, frequency, and client approval are configured.

### 16.7 SaaS onboarding

23. `PGS — SaaS — Welcome`
24. `PGS — SaaS — Onboarding Reminder`
25. `PGS — SaaS — Onboarding Submitted`
26. `PGS — SaaS — Missing Assets`
27. `PGS — SaaS — Website Review Ready`
28. `PGS — SaaS — Website Live`

### 16.8 Billing and cancellation

29. `PGS — Billing — Payment Failed`
30. `PGS — Billing — Payment Recovered`
31. `PGS — Billing — Cancellation Received`
32. `PGS — Billing — Service Termination Tasks`

Billing workflows must align with the selected SaaS architecture and approved subscription policy.

---

## 17. Workflow Publication Policy

All workflows in the snapshot should load in one of these states:

### Safe to publish after required values exist

* Internal notification workflows
* Contact-form routing
* Opportunity-management workflows

### Require client-specific configuration and testing

* SMS workflows
* Email workflows
* Missed-call text-back
* Calendar workflows
* Review requests
* Reactivation
* Billing workflows
* Next.js form-triggered workflows

Recommended default:

* Load workflows unpublished
* Populate required values
* Connect communication services
* Test
* Publish individually
* Record publication status

---

## 18. SMS Templates

### General lead acknowledgment

> Hi {{contact.first_name}}, this is {{location.name}}. We received your plumbing request and a team member will review it shortly. Your requested date is not confirmed until we contact you. Reply STOP to opt out.

### Emergency request acknowledgment

> Hi {{contact.first_name}}, {{location.name}} received your emergency plumbing request. This does not confirm technician availability or dispatch. Please call {{location.phone}} for the fastest available response. For an immediate gas, fire, electrical or life-safety danger, contact the appropriate emergency service or utility. Reply STOP to opt out.

### Missed-call text-back

> Hi, this is {{location.name}}. Sorry we missed your call. How can we help with your plumbing issue? Reply STOP to opt out.

### Estimate follow-up

> Hi {{contact.first_name}}, this is {{location.name}} following up about your plumbing estimate. Do you have any questions or would you like help with the next step? Reply STOP to opt out.

### Review request

> Hi {{contact.first_name}}, thank you for choosing {{location.name}}. We would appreciate your honest feedback about your experience: {{custom_values.google_review_url}}. Reply STOP to opt out.

Final communication language requires legal and client review.

---

## 19. Email Templates

Create reusable templates for:

* General Request Received
* Emergency Request Received
* Appointment Request Received
* Appointment Confirmation
* Appointment Reminder
* Estimate Follow-Up
* Review Request
* SaaS Welcome
* Onboarding Reminder
* Onboarding Received
* Missing Assets
* Website Review Ready
* Website Live
* Payment Failed
* Cancellation Received

### Email requirements

Every email must include:

* Client business identity
* Accurate subject
* Clear next step
* Verified contact information
* Appropriate footer
* Required unsubscribe or communication controls
* No unsupported promises
* No placeholder data

---

## 20. Internal Notifications

### General lead notification

Include:

* Contact
* Phone
* Email
* Service
* Customer type
* Address
* Problem description
* Preferred contact
* Source
* Submission ID
* Opportunity link

### Emergency notification

Include:

* `URGENT` label
* Contact
* Phone
* Address
* Emergency type
* Active flooding
* Water shut off
* Gas odor
* Electrical danger
* Description
* Submission time
* Opportunity link

Do not include sensitive data beyond what the recipient needs.

---

## 21. Reputation Architecture

The snapshot should support:

* Honest review requests
* One appropriate reminder
* Private feedback collection
* Low-feedback recovery
* Internal review notifications

The snapshot must not:

* Send the public review link only to positive respondents
* Suppress public-review access for negative respondents
* Publish private feedback automatically
* Fabricate review activity
* Incentivize reviews without policy and legal review
* Add review schema automatically without eligibility validation

The Google review URL must be configured separately for each client.

---

## 22. Custom Views

Potential contact views:

* New Website Leads
* Emergency Requests
* Leads Needing Follow-Up
* Customers Eligible for Review Request
* Feedback Recovery Required
* SaaS Onboarding Incomplete

Potential opportunity views:

* New Leads Today
* Emergency Opportunities
* Estimates Scheduled
* Estimates Sent
* Follow-Up Needed
* Won This Month
* Lost This Month

Views should simplify customer operations rather than expose every internal field.

---

## 23. Dashboard Requirements

A future base dashboard may display:

* New leads
* Missed calls
* Open opportunities
* Estimate pipeline
* Won opportunities
* Lead sources
* Appointment requests
* Review requests
* New reviews

Do not display estimated revenue as actual revenue unless the underlying data supports it.

Dashboard inclusion should follow pilot validation because dashboards can add maintenance and customer confusion.

---

## 24. User Roles and Permissions

### Plumbing owner

Enable:

* Dashboard
* Conversations
* Contacts
* Opportunities
* Calendars
* Reputation
* Invoices
* Relevant reporting

### Office manager or dispatcher

Enable:

* Conversations
* Contacts
* Opportunities
* Calendars
* Reputation as needed
* Invoices as needed

### Technician

Potentially enable only:

* Assigned conversations
* Assigned contacts
* Assigned opportunities
* Calendar access

### Agency administrator

Retain access to:

* Workflows
* Custom fields
* Custom values
* Integrations
* Phone configuration
* Email configuration
* SaaS management
* Snapshot management
* Developer settings

### Permission principle

Selecting Workflows in the SaaS plan makes the capability available to the sub-account. It does not require giving client users permission to edit agency-managed workflows.

---

## 25. Phone Configuration

Post-provisioning tasks include:

* Assign phone number
* Configure forwarding
* Configure call recording where legally appropriate
* Configure whisper message if used
* Configure business hours
* Configure voicemail
* Configure missed-call text-back
* Test inbound calls
* Test outbound calls
* Test caller ID
* Verify usage rebilling

Do not activate missed-call automation before the phone route is tested.

---

## 26. Email Configuration

Post-provisioning tasks include:

* Configure sending service
* Configure sending domain where applicable
* Verify DNS
* Configure sender identity
* Configure reply-to
* Test delivery
* Test replies
* Test unsubscribe behavior
* Review usage billing

Do not send from an unverified or misleading business identity.

---

## 27. Next.js Integration Configuration

After the GHL sub-account is provisioned:

1. Create or authorize the required private integration.
2. Record the GHL Location ID.
3. Record required pipeline and stage IDs.
4. Record custom field IDs.
5. Configure Cloudflare server-side environment variables.
6. Test the General Quote endpoint.
7. Test the Emergency Request endpoint.
8. Test the Contact endpoint.
9. Test Review Feedback.
10. Test Website Onboarding.
11. Confirm contact deduplication.
12. Confirm opportunity creation.
13. Confirm workflow entry.
14. Confirm internal notifications.
15. Confirm customer acknowledgments.
16. Confirm no secrets reach the client bundle.

---

## 28. Snapshot Creation Procedure

1. Build assets inside the clean snapshot-source account.
2. Remove live or accidental test data.
3. Review all custom values.
4. Confirm no production credentials exist.
5. Confirm forms, surveys, funnels and websites are excluded.
6. Confirm workflows are in the approved publication state.
7. Run workflow test cases.
8. Create the snapshot in Agency View.
9. Name it using the version convention.
10. Select only approved assets.
11. Save the asset inventory.
12. Load it into a fresh test sub-account.
13. Complete post-provisioning configuration.
14. Run end-to-end testing.
15. Approve it for attachment to the SaaS plan.

---

## 29. Fresh-Account Validation

Every snapshot version must be tested in a new blank sub-account.

Validate:

* Custom fields
* Custom values
* Tags
* Pipeline
* Stages
* Calendars
* Templates
* Trigger links
* Workflows
* Workflow references
* Internal links
* Review settings
* Permissions
* Duplicate assets
* Missing dependencies
* Placeholder values

Testing only inside the source account is insufficient.

---

## 30. Workflow Test Personas

Use:

### Standard residential lead

* Drain-cleaning request
* Valid SMS consent
* Normal priority

### Emergency lead

* Active flooding
* Water not shut off
* Emergency priority

### Gas-odor request

* Confirms gas odor
* Tests safety messaging
* Tests lack of dispatch confirmation

### General contact

* Billing question
* Must not create a sales opportunity

### Feedback customer

* Two-star rating
* Tests recovery task
* Must retain public-review option

### SaaS customer

* Completes onboarding
* Must update fulfillment status
* Must not create a plumbing opportunity

---

## 31. Snapshot Update Policy

Do not assume changing the source account automatically changes the snapshot or client accounts.

For every update:

1. Create a change record.
2. Classify the change as major, minor or patch.
3. Test in the source account.
4. Refresh the snapshot.
5. Review included assets.
6. Load into a fresh test account.
7. Test the client impact.
8. Identify conflicts.
9. Select pilot accounts.
10. Push or apply only approved assets.
11. Verify each account.
12. Record the deployed version.

### Never push blindly

Avoid uncontrolled pushes involving:

* Pipeline replacements
* Custom field deletion
* Workflow trigger changes
* Consent changes
* Phone routing
* Calendar availability
* Review URLs
* Client-customized messages

---

## 32. Client Customization Record

Maintain a configuration record containing:

* Client name
* GHL Location ID
* Snapshot version
* Website template version
* Pipeline ID
* Stage IDs
* Custom field IDs
* Calendar ID
* Phone number
* Review URL
* Notification recipients
* Workflow publication status
* GHL integration method
* Cloudflare project
* Production domain
* Custom deviations
* Last QA date

Do not store secret values in ordinary documentation.

---

## 33. Snapshot Acceptance Criteria

The snapshot is approved when:

1. It is built from a clean source sub-account.
2. It contains no real customer data.
3. It contains the approved pipeline.
4. It contains the approved fields and tags.
5. It supports all five Next.js forms.
6. It contains no GHL forms or surveys.
7. It contains no GHL websites or funnels.
8. It contains only approved workflows.
9. Required client-specific values are clearly identified.
10. Placeholder values cannot be sent accidentally.
11. Workflows are tested in a fresh account.
12. Emergency workflows do not promise dispatch.
13. Contact inquiries create opportunities only when appropriate.
14. Review workflows do not gate public reviews.
15. Client Onboarding does not create plumbing opportunities.
16. User permissions follow least privilege.
17. Phone and email services are tested after provisioning.
18. The Next.js integration works end to end.
19. Snapshot version and client deployment are documented.
20. Update and rollback procedures exist.

---

## 34. Open Decisions

The following require resolution:

* Final workflow publication state inside the attached snapshot
* Final GHL API versus inbound-webhook architecture
* Exact custom-field identifiers
* Whether opportunity custom fields are required
* Final calendar type
* Calendar request versus direct booking behavior
* Default appointment duration
* Default reminder schedule
* Final SMS and email consent language
* Final phone and messaging provider setup
* Included communication credits
* Final usage markup
* Dashboard inclusion
* Custom contact-view inclusion
* Final snapshot update policy for customized client accounts
* Website Onboarding operational storage
* Final SaaS V1 or V2 implementation

---

## 35. Next Document

The next project document is:

`10-ghl-workflow-specifications.md`

It will define each workflow’s:

* Objective
* Trigger
* Entry filters
* Re-entry rules
* Actions
* Wait steps
* Messages
* Opportunity behavior
* Exit conditions
* Suppression rules
* Error handling
* Reporting
* Test cases
