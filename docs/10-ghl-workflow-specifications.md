# Plumber Growth System — GoHighLevel Workflow Specifications

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | GoHighLevel Workflow Specifications |
| Document ID | 10-ghl-workflow-specifications |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Documents | 00-project-overview.md through 09-ghl-snapshot-architecture.md |
| Client Automation Platform | GoHighLevel |
| Public Forms | Native Next.js forms |
| Form Processing | Cloudflare Pages Functions |

---

## 1. Purpose

This document defines the workflows required to operate the Plumber Growth System.

It establishes:

- Workflow ownership
- Workflow location
- Triggers
- Entry filters
- Actions
- Wait steps
- Re-entry rules
- Exit conditions
- Suppression rules
- Opportunity behavior
- Communication requirements
- Error handling
- Testing
- Reporting

---

## 2. Workflow Architecture Correction

Two different automation environments are required.

### Client operational workflows

These belong in the plumbing snapshot and are installed in each plumber’s sub-account.

They manage:

- Plumbing leads
- Missed calls
- Customer conversations
- Estimates
- Appointments
- Review requests
- Private feedback
- Limited reactivation

### Agency operational workflows

These belong in the agency operations or SaaS selling sub-account.

They manage:

- SaaS customer onboarding
- Website production
- Missing assets
- Client review
- Website launch
- Failed subscription payments
- Cancellation
- Internal fulfillment tasks

Agency workflows must not be distributed into every plumbing client’s snapshot.

This separation supersedes any earlier workflow inventory that placed agency billing and fulfillment workflows inside the client snapshot.

---

## 3. Workflow Inventory

## 3.1 Client snapshot workflows

### Lead intake

1. General Quote Intake
2. General Lead Acknowledgment
3. General Lead Internal Notification
4. General Lead No-Response Follow-Up
5. Emergency Request Intake
6. Emergency Acknowledgment
7. Emergency Internal Notification
8. Contact Form Routing

### Missed calls

9. Missed Call Text Back
10. Missed Call Internal Notification

### Estimates and opportunities

11. Estimate Requested
12. Estimate Scheduled
13. Estimate Sent Follow-Up
14. Follow-Up Task Creation
15. Job Won Processing
16. Job Lost Processing

### Appointments

17. Appointment Request Received
18. Appointment Confirmation
19. Appointment Reminder
20. Appointment Rescheduled
21. Appointment Canceled
22. Appointment Completed

### Reputation

23. Job Completion Review Request
24. Review Request Reminder
25. Private Feedback Intake
26. Feedback Recovery
27. New Review Notification

### Reactivation

28. Eligible Lost Opportunity Reactivation

## 3.2 Agency operations workflows

29. SaaS Purchase Received
30. Client Welcome
31. Onboarding Reminder
32. Onboarding Submitted
33. Missing Assets
34. Website Review Ready
35. Website Approved
36. Website Live
37. Payment Failed
38. Payment Recovered
39. Cancellation Received
40. Service Termination Tasks

---

## 4. Workflow Naming

### Client workflows

```text
PGS — Lead — General Quote Intake
PGS — Lead — General Acknowledgment
PGS — Lead — General Internal Notification
PGS — Lead — No Response Follow-Up
PGS — Lead — Emergency Request Intake
PGS — Lead — Emergency Acknowledgment
PGS — Lead — Emergency Internal Notification
PGS — Contact — Form Routing
PGS — Call — Missed Call Text Back
PGS — Call — Missed Call Internal Notification
PGS — Estimate — Requested
PGS — Estimate — Scheduled
PGS — Estimate — Sent Follow-Up
PGS — Estimate — Follow-Up Task
PGS — Opportunity — Job Won
PGS — Opportunity — Job Lost
PGS — Appointment — Request Received
PGS — Appointment — Confirmation
PGS — Appointment — Reminder
PGS — Appointment — Rescheduled
PGS — Appointment — Canceled
PGS — Appointment — Completed
PGS — Reputation — Review Request
PGS — Reputation — Review Reminder
PGS — Reputation — Private Feedback Intake
PGS — Reputation — Feedback Recovery
PGS — Reputation — New Review Notification
PGS — Reactivation — Eligible Lost Opportunities
```

### Agency workflows

```text
PGS Agency — SaaS — Purchase Received
PGS Agency — SaaS — Client Welcome
PGS Agency — SaaS — Onboarding Reminder
PGS Agency — SaaS — Onboarding Submitted
PGS Agency — Fulfillment — Missing Assets
PGS Agency — Fulfillment — Website Review Ready
PGS Agency — Fulfillment — Website Approved
PGS Agency — Fulfillment — Website Live
PGS Agency — Billing — Payment Failed
PGS Agency — Billing — Payment Recovered
PGS Agency — Billing — Cancellation Received
PGS Agency — Billing — Service Termination Tasks
```

---

## 5. Global Workflow Rules

Every workflow must document:

* Trigger
* Entry filters
* Re-entry behavior
* Actions
* Wait steps
* Exit conditions
* Suppression conditions
* Goal
* Owner
* Version
* Test status

### Every customer-facing workflow must stop when appropriate if:

* The contact replies
* The contact opts out
* The contact is marked DND for the channel
* The opportunity reaches Job Won
* The opportunity reaches Job Lost
* The requested task is completed
* The contact is identified as spam
* The company manually applies `do-not-automate`
* The communication purpose no longer applies

### Every SMS workflow must:

* Use an approved sender
* Identify the plumbing company
* Respect consent
* Respect DND
* Support opt-out
* Use approved hours
* Avoid excessive frequency
* Record delivery status where supported

### Every workflow must avoid:

* Duplicate opportunity creation
* Duplicate customer acknowledgments
* Repeated review requests
* Re-entering contacts without a valid reason
* Moving pipeline stages based solely on message delivery
* Confirming appointments that are only requested
* Confirming emergency dispatch automatically
* Sending marketing communications under service-request consent

---

## 6. Form-to-Workflow Entry Contract

The Cloudflare integration layer will:

1. Validate the form.
2. Create or update the GHL contact.
3. Set custom fields.
4. Create an opportunity when required.
5. Apply the routing tag.
6. Return successful acceptance to the website.

The routing tag triggers the relevant GHL workflow.

### Routing tags

| Form               | Trigger tag                           |
| ------------------ | ------------------------------------- |
| General Quote      | `general-quote-request`               |
| Emergency Request  | `emergency-plumbing-request`          |
| Contact            | Subject-specific tag                  |
| Review Feedback    | `customer-feedback-submitted`         |
| Website Onboarding | Agency record: `onboarding-submitted` |

The server must apply a routing tag only after the required GHL records are created successfully.

---

# CLIENT SNAPSHOT WORKFLOWS

# 7. General Quote Intake

## Workflow name

```text
PGS — Lead — General Quote Intake
```

## Objective

Validate and organize a standard website plumbing lead after the Next.js integration creates the contact and opportunity.

## Trigger

Contact tag added:

```text
general-quote-request
```

## Entry filters

* Contact has a valid phone or email
* `Lead Form Type = General Quote`
* Contact is not tagged `spam`
* Contact is not tagged `do-not-automate`
* Submission ID is present

## Re-entry

Allow re-entry only when:

* A new Submission ID is present, and
* The new request is not a duplicate, and
* The previous opportunity is closed or the new request represents a distinct job

## Actions

1. Apply `website-lead`.
2. Apply service-specific tag.
3. Apply `priority-standard`.
4. Verify an open opportunity exists.
5. Assign the configured opportunity owner.
6. Add an opportunity note summarizing the request.
7. Trigger General Acknowledgment.
8. Trigger General Internal Notification.
9. Trigger No-Response Follow-Up when eligible.
10. Remove the one-time routing tag if required by re-entry design.

## Exit conditions

* Contact identified as spam
* Opportunity deleted as duplicate
* Agency integration error detected

## Goal

A complete, assigned New Lead opportunity with customer and company notifications initiated.

---

# 8. General Lead Acknowledgment

## Workflow name

```text
PGS — Lead — General Acknowledgment
```

## Trigger

Internal workflow event from General Quote Intake.

## Entry filters

* Valid service-request consent for SMS, or valid email
* Contact not DND for selected channel
* No acknowledgment recorded for the Submission ID

## Channel selection

1. Use SMS when valid service-related SMS consent exists.
2. Use email when SMS consent is absent but email is available.
3. Do not send through an unavailable or unauthorized channel.

## SMS

> Hi {{contact.first_name}}, this is {{location.name}}. We received your plumbing request and a team member will review it shortly. Your requested date is not confirmed until we contact you. Reply STOP to opt out.

## Email subject

```text
We received your plumbing request
```

## Email purpose

Confirm receipt and explain that requested dates require company confirmation.

## Actions

1. Send acknowledgment.
2. Record acknowledgment channel.
3. Record acknowledgment timestamp.
4. Mark the Submission ID as acknowledged.
5. Continue to No-Response Follow-Up when eligible.

## Re-entry

Once per unique Submission ID.

## Exit conditions

* DND
* Invalid contact destination
* Delivery permanently fails

---

# 9. General Lead Internal Notification

## Workflow name

```text
PGS — Lead — General Internal Notification
```

## Trigger

Internal workflow event from General Quote Intake.

## Recipients

Use:

* Lead Notification Email
* Lead Notification Phone
* Assigned opportunity owner

## Notification content

Include:

* Contact name
* Phone
* Email
* Service requested
* Customer type
* Property address
* Problem description
* Preferred contact
* Preferred date
* Lead source
* Opportunity link

## Actions

1. Send internal email.
2. Send internal SMS if configured.
3. Create a task:

```text
Contact new plumbing lead
```

4. Task due based on configured response target.
5. Record notification timestamp.

## Re-entry

Once per unique Submission ID.

---

# 10. General Lead No-Response Follow-Up

## Workflow name

```text
PGS — Lead — No Response Follow-Up
```

## Objective

Continue limited service-request follow-up when the plumbing company has not established contact.

## Entry filters

* Open opportunity
* Stage is New Lead or Contact Attempted
* Valid channel consent
* No customer reply
* No confirmed appointment
* Not DND
* Not tagged `do-not-automate`

## Recommended sequence

### Initial acknowledgment

Handled separately.

### Wait

15 minutes during approved communication hours.

### Check

Stop if:

* Customer replied
* Opportunity moved to Connected or later
* Appointment confirmed
* DND applied

### Follow-up 1

> Hi {{contact.first_name}}, this is {{location.name}} following up on your plumbing request. If you would like to add any details, reply here or call {{location.phone}}. Reply STOP to opt out.

### Wait

One business day.

### Check again

Apply the same stop conditions.

### Follow-up 2

> Hi {{contact.first_name}}, we’re checking once more about your plumbing request. Let us know if you still need assistance or call {{location.phone}}. Reply STOP to opt out.

### Final action

* Create a follow-up task
* Do not continue automated service messages indefinitely

## Re-entry

Once per distinct opportunity unless manually restarted.

## Maximum automated messages

Two follow-up messages after the initial acknowledgment.

---

# 11. Emergency Request Intake

## Workflow name

```text
PGS — Lead — Emergency Request Intake
```

## Objective

Route an urgent request immediately without implying dispatch.

## Trigger

Tag added:

```text
emergency-plumbing-request
```

## Entry filters

* Emergency Type populated
* Mobile phone populated
* Submission ID populated
* Contact not identified as spam

## Actions

1. Apply `website-lead`.
2. Apply `priority-emergency`.
3. Apply emergency-type tag.
4. Confirm a high-priority opportunity exists.
5. Assign the emergency opportunity owner.
6. Add the emergency details to the opportunity note.
7. Trigger Emergency Internal Notification.
8. Trigger Emergency Acknowledgment.
9. Create immediate follow-up task.
10. Do not enroll in the General No-Response workflow.

## Safety branch

If any are Yes or Unsure:

* Gas Odor
* Electrical Danger

Apply:

```text
safety-escalation-indicated
```

This tag indicates the customer saw or required safety messaging. It does not represent a technician diagnosis.

## Re-entry

Allow for a new unique emergency Submission ID.

## Goal

Urgent internal visibility and customer acknowledgment without automated dispatch claims.

---

# 12. Emergency Acknowledgment

## Workflow name

```text
PGS — Lead — Emergency Acknowledgment
```

## Trigger

Internal event from Emergency Request Intake.

## Entry filters

* Valid service communication consent
* Mobile phone available
* Not DND
* No acknowledgment for the Submission ID

## SMS

> Hi {{contact.first_name}}, {{location.name}} received your emergency plumbing request. This does not confirm technician availability or dispatch. Please call {{location.phone}} for the fastest available response. For an immediate gas, fire, electrical or life-safety danger, contact the appropriate emergency service or utility. Reply STOP to opt out.

## Actions

1. Send one acknowledgment.
2. Record acknowledgment timestamp.
3. Stop automated customer messaging for this emergency request.

## Prohibited actions

Do not:

* Wait and send a nurture sequence
* State that a technician is on the way
* Confirm an appointment
* State an arrival time
* Send promotional content

---

# 13. Emergency Internal Notification

## Workflow name

```text
PGS — Lead — Emergency Internal Notification
```

## Trigger

Internal event from Emergency Request Intake.

## Recipients

* Emergency Notification Phone
* Emergency Notification Email
* Assigned opportunity owner

## Notification title

```text
URGENT PLUMBING REQUEST
```

## Required information

* Contact name
* Phone
* Property address
* Emergency type
* Active flooding
* Water shut off
* Gas odor
* Electrical danger
* Problem description
* Submission time
* Opportunity link

## Actions

1. Send internal SMS.
2. Send internal email.
3. Send in-app notification where configured.
4. Create immediate task.
5. Escalate to backup recipient if unacknowledged, when the client has approved an escalation design.

## Important limitation

Internal escalation is operational notification, not customer dispatch confirmation.

---

# 14. Contact Form Routing

## Workflow name

```text
PGS — Contact — Form Routing
```

## Trigger

One of these tags is applied:

```text
contact-plumbing-service-question
contact-existing-appointment
contact-existing-customer-support
contact-billing-question
contact-financing-question
contact-vendor-inquiry
contact-employment-inquiry
contact-general-question
contact-other
```

## Branching

### Plumbing service question

* Create an opportunity if one does not exist
* Send to New Lead
* Notify lead recipient
* Send receipt confirmation

### Financing question

* Create an opportunity if connected to potential plumbing work
* Notify appropriate recipient
* Send receipt confirmation

### Existing appointment

* Do not create a new sales opportunity
* Notify scheduling recipient
* Create service task

### Existing customer support

* Do not create a sales opportunity automatically
* Notify support recipient
* Create follow-up task

### Billing question

* Do not create a sales opportunity
* Notify billing recipient

### Vendor inquiry

* Do not create a sales opportunity
* Notify administrative recipient

### Employment inquiry

* Do not create a sales opportunity
* Notify hiring recipient when configured

### General or other

* Notify administrative recipient
* Create a task when necessary

## Re-entry

Allow for each unique Submission ID.

---

# 15. Missed Call Text Back

## Workflow name

```text
PGS — Call — Missed Call Text Back
```

## Objective

Acknowledge an eligible missed call and invite the caller to continue the service-related conversation.

## Trigger

Eligible inbound call status indicates missed or unanswered call.

## Entry filters

* Caller has a valid mobile number
* Number is not blocked
* Contact is not DND
* Contact is not tagged `do-not-automate`
* No missed-call text sent within the suppression window
* Call was not immediately returned or connected
* Client has approved the workflow

## Suppression window

Recommended initial setting:

```text
One missed-call response per contact within 24 hours
```

## SMS

> Hi, this is {{location.name}}. Sorry we missed your call. How can we help with your plumbing issue? Reply STOP to opt out.

## Actions

1. Create or update contact.
2. Apply `phone-lead`.
3. Apply `missed-call-text-sent`.
4. Send one text.
5. Trigger Missed Call Internal Notification.
6. Create an opportunity only if the reply or subsequent qualification indicates service intent.

## Re-entry

After the suppression window expires.

## Stop conditions

* Caller replies
* Call is returned
* DND applied
* Number invalid
* Contact identified as spam

---

# 16. Missed Call Internal Notification

## Workflow name

```text
PGS — Call — Missed Call Internal Notification
```

## Trigger

Internal event from Missed Call Text Back.

## Actions

1. Notify the designated office user.
2. Create a callback task.
3. Include caller identity, phone, call time and conversation link.
4. Remove the task when the call is returned or the contact replies, where supported.

---

# 17. Estimate Requested

## Workflow name

```text
PGS — Estimate — Requested
```

## Trigger

Opportunity stage changes to:

```text
Estimate Requested
```

## Actions

1. Record stage-change timestamp.
2. Create a task to schedule the estimate.
3. Notify assigned user.
4. Send a customer message only if the business has approved the process and appropriate consent exists.

## Customer message

> Hi {{contact.first_name}}, {{location.name}} has recorded your request for a plumbing estimate. A team member will contact you to confirm the next step. Reply STOP to opt out.

Do not state that the estimate appointment is confirmed.

---

# 18. Estimate Scheduled

## Workflow name

```text
PGS — Estimate — Scheduled
```

## Trigger

Opportunity stage changes to Estimate Scheduled or a confirmed estimate appointment is created.

## Entry filters

* Confirmed appointment date exists
* Assigned team member exists
* Customer contact destination exists

## Actions

1. Record estimate date.
2. Send confirmation.
3. Enroll in applicable reminder workflow.
4. Create internal preparation task.

## Prohibited behavior

Do not trigger merely because the customer selected a preferred date on a website form.

---

# 19. Estimate Sent Follow-Up

## Workflow name

```text
PGS — Estimate — Sent Follow-Up
```

## Trigger

Opportunity stage changes to:

```text
Estimate Sent
```

## Entry filters

* Open opportunity
* Estimate-sent date exists
* Customer not DND
* No accepted or rejected outcome recorded

## Recommended sequence

### Wait

Two business days.

### Follow-up 1

> Hi {{contact.first_name}}, this is {{location.name}} following up on the plumbing estimate we provided. Do you have any questions about the recommended work? Reply STOP to opt out.

### Wait

Three additional business days.

### Follow-up 2

> Hi {{contact.first_name}}, we’re checking in once more about your plumbing estimate. Let us know if you would like to discuss the next step. Reply STOP to opt out.

### Final action

Create a task for manual follow-up.

## Stop conditions

* Customer replies
* Stage becomes Job Won
* Stage becomes Job Lost
* Contact becomes DND
* Appointment or job is scheduled
* `do-not-automate` applied

---

# 20. Estimate Follow-Up Task

## Workflow name

```text
PGS — Estimate — Follow-Up Task
```

## Trigger

* Follow-up date reached, or
* Automated estimate sequence completes without resolution

## Actions

Create task:

```text
Follow up on plumbing estimate
```

Assign to the opportunity owner.

Include:

* Contact
* Estimate date
* Estimate value when available
* Last conversation date
* Opportunity link

---

# 21. Job Won Processing

## Workflow name

```text
PGS — Opportunity — Job Won
```

## Trigger

Opportunity stage changes to:

```text
Job Won
```

## Actions

1. Mark opportunity status as won.
2. Stop active lead and estimate follow-up.
3. Record won date.
4. Preserve source attribution.
5. Wait for confirmed job completion before requesting a review.
6. Remove inappropriate open-lead tasks.

Do not request a review solely because the estimate was accepted.

---

# 22. Job Lost Processing

## Workflow name

```text
PGS — Opportunity — Job Lost
```

## Trigger

Opportunity stage changes to:

```text
Job Lost
```

## Entry requirements

Lost reason should be populated.

## Actions

1. Stop active lead, appointment and estimate workflows.
2. Record lost date and reason.
3. Remove open follow-up tasks where appropriate.
4. Evaluate future reactivation eligibility.
5. Apply `do-not-reactivate` when the reason is:

   * Spam
   * Outside Service Area
   * Service Not Offered
   * Customer Requested No Contact
   * Invalid Contact

---

# 23. Appointment Request Received

## Workflow name

```text
PGS — Appointment — Request Received
```

## Trigger

Appointment-request status becomes:

```text
Requested
```

## Actions

1. Notify scheduling recipient.
2. Create confirmation task.
3. Send receipt acknowledgment.
4. Set status to Pending Confirmation.
5. Do not send appointment-confirmation language.

## Customer message

> Hi {{contact.first_name}}, {{location.name}} received your appointment request. The requested time is not confirmed until a team member contacts you. Reply STOP to opt out.

---

# 24. Appointment Confirmation

## Workflow name

```text
PGS — Appointment — Confirmation
```

## Trigger

A confirmed GHL appointment is created or appointment status becomes Confirmed through an authorized action.

## Actions

1. Send confirmation with verified date, time and instructions.
2. Record confirmation timestamp.
3. Enroll in reminder workflow.
4. Update related opportunity stage when appropriate.

---

# 25. Appointment Reminder

## Workflow name

```text
PGS — Appointment — Reminder
```

## Recommended timing

* 24 hours before
* Optional shorter reminder based on client preference

## Entry filters

* Appointment status Confirmed
* Appointment remains active
* Valid communication channel
* Contact not DND

## Stop conditions

* Canceled
* Rescheduled
* Completed
* Customer opts out

---

# 26. Appointment Rescheduled

## Workflow name

```text
PGS — Appointment — Rescheduled
```

## Trigger

Confirmed appointment time changes.

## Actions

1. Stop prior reminders.
2. Send updated appointment details.
3. Enroll in a new reminder schedule.
4. Notify assigned team member.

---

# 27. Appointment Canceled

## Workflow name

```text
PGS — Appointment — Canceled
```

## Trigger

Appointment status changes to Canceled.

## Actions

1. Stop reminders.
2. Record cancellation.
3. Notify assigned team member.
4. Create follow-up task when rescheduling is appropriate.
5. Do not mark the opportunity lost automatically.

---

# 28. Appointment Completed

## Workflow name

```text
PGS — Appointment — Completed
```

## Trigger

Appointment status changes to Completed.

## Actions

1. Record completion.
2. Update opportunity only according to the client’s approved process.
3. Do not request a review unless the plumbing job itself is confirmed complete.
4. Create next-step task when an estimate or additional work is required.

---

# 29. Job Completion Review Request

## Workflow name

```text
PGS — Reputation — Review Request
```

## Trigger

A verified job-completion event occurs.

Examples:

* Job Completion Date populated
* Approved completed-job tag added
* Client-approved pipeline event

## Entry filters

* Job confirmed complete
* Valid review destination
* Eligible customer
* Contact not DND
* No review request sent recently
* No unresolved service complaint
* Appropriate communication consent exists

## Wait

Recommended:

```text
Two hours after completion or next appropriate business period
```

## SMS

> Hi {{contact.first_name}}, thank you for choosing {{location.name}}. We would appreciate your honest feedback about your experience: {{custom_values.google_review_url}}. Reply STOP to opt out.

## Actions

1. Send review request.
2. Set Review Request Status to Sent.
3. Record sent date.
4. Apply review-requested tag.
5. Enroll in one reminder when eligible.

## Neutrality requirement

The same honest-review request process must apply without filtering customers by predicted satisfaction.

---

# 30. Review Request Reminder

## Workflow name

```text
PGS — Reputation — Review Reminder
```

## Entry filters

* Review request sent
* No known review completion
* Contact not DND
* No active complaint
* Reminder not previously sent

## Wait

Three to seven days, based on client approval.

## Message

> Hi {{contact.first_name}}, this is a quick follow-up from {{location.name}}. If you have a moment, we would still appreciate your honest feedback: {{custom_values.google_review_url}}. Reply STOP to opt out.

## Limit

One automated reminder.

---

# 31. Private Feedback Intake

## Workflow name

```text
PGS — Reputation — Private Feedback Intake
```

## Trigger

Tag added:

```text
customer-feedback-submitted
```

## Actions

1. Store submission status.
2. Record rating and consent.
3. Branch by rating.
4. Maintain public-review access regardless of rating.
5. Trigger Feedback Recovery for configured low ratings.
6. Notify company of feedback.

## Re-entry

Once per unique feedback Submission ID.

---

# 32. Feedback Recovery

## Workflow name

```text
PGS — Reputation — Feedback Recovery
```

## Trigger

Private rating is at or below the configured threshold, initially 3.

## Actions

1. Apply `feedback-recovery-required`.
2. Notify designated manager.
3. Create priority task:

```text
Contact customer about service feedback
```

4. Include permission-to-contact status.
5. Do not automatically publish feedback.
6. Do not send promotional messaging.
7. Do not remove the public-review option.

## Customer contact

Any automated recovery message requires separate approval. Initial version should create an internal task for human review.

---

# 33. New Review Notification

## Workflow name

```text
PGS — Reputation — New Review Notification
```

## Trigger

New review detected where supported.

## Actions

1. Notify designated client user.
2. Include rating, source and review link.
3. Create response task.
4. Flag low ratings for priority response.
5. Do not generate or publish an automatic public response without client approval.

---

# 34. Eligible Lost Opportunity Reactivation

## Workflow name

```text
PGS — Reactivation — Eligible Lost Opportunities
```

## Default status

Unpublished in initial snapshot.

## Eligibility

A contact may qualify only when:

* Lost reason permits reactivation
* Contact has appropriate consent
* Contact is not DND
* No active opportunity exists
* No recent service request exists
* Client approved the campaign
* Communication timing is appropriate

## Exclude

* Spam
* Outside service area
* Unsupported service
* Complaint
* Legal dispute
* Requested no contact
* Invalid number
* No consent
* Recent emergency request

## Initial limit

One short campaign with no more than two messages.

The workflow must be reviewed separately before publication.

---

# AGENCY OPERATIONS WORKFLOWS

# 35. SaaS Purchase Received

## Location

Agency operations or SaaS selling sub-account.

## Trigger

Successful Plumber Growth System subscription event.

Exact trigger depends on the final SaaS V1 or V2 architecture.

## Actions

1. Create or update agency customer record.
2. Apply `saas-customer`.
3. Create fulfillment opportunity.
4. Set stage to Payment Received.
5. Record plan and subscription details.
6. Assign implementation owner.
7. Trigger Client Welcome.
8. Start onboarding deadline tracking.

---

# 36. Client Welcome

## Workflow name

```text
PGS Agency — SaaS — Client Welcome
```

## Actions

1. Send welcome email.
2. Explain the implementation process.
3. Provide secure Website Onboarding link.
4. Explain required assets and access.
5. State that production begins after required information is received.
6. Create onboarding task.
7. Set stage to Questionnaire Sent.

---

# 37. Onboarding Reminder

## Workflow name

```text
PGS Agency — SaaS — Onboarding Reminder
```

## Entry filters

* Subscription active
* Onboarding incomplete
* Client not canceled
* Reminder limit not reached

## Recommended sequence

* Reminder after two business days
* Final automated reminder after five business days
* Internal task after final reminder

Avoid endless reminders.

---

# 38. Onboarding Submitted

## Workflow name

```text
PGS Agency — SaaS — Onboarding Submitted
```

## Trigger

Secure onboarding integration applies:

```text
onboarding-submitted
```

## Actions

1. Record submission date.
2. Set fulfillment stage to Assets Received.
3. Notify implementation team.
4. Create verification checklist.
5. Evaluate missing information.
6. Send receipt confirmation.
7. Trigger Missing Assets when necessary.

---

# 39. Missing Assets

## Workflow name

```text
PGS Agency — Fulfillment — Missing Assets
```

## Trigger

Implementation reviewer identifies missing items.

## Actions

1. Apply `assets-missing`.
2. Send a consolidated missing-items request.
3. Pause production timeline.
4. Create follow-up task.
5. Resume only after required assets arrive.

Do not send separate messages for every missing item when one consolidated request is possible.

---

# 40. Website Review Ready

## Workflow name

```text
PGS Agency — Fulfillment — Website Review Ready
```

## Trigger

Fulfillment stage changes to Client Review.

## Actions

1. Send preview link.
2. Explain the two consolidated revision rounds.
3. Provide revision deadline.
4. Explain how to submit consolidated feedback.
5. Record review-start date.
6. Create approval follow-up task.

---

# 41. Website Approved

## Workflow name

```text
PGS Agency — Fulfillment — Website Approved
```

## Trigger

Authorized client approval recorded.

## Actions

1. Record approver and approval date.
2. Move stage to Launch Scheduled.
3. Create launch checklist.
4. Notify implementation owner.
5. Prevent further pre-launch revisions outside approved scope.

---

# 42. Website Live

## Workflow name

```text
PGS Agency — Fulfillment — Website Live
```

## Trigger

Production deployment and post-launch QA are complete.

## Actions

1. Record production URL.
2. Record launch date.
3. Send launch confirmation.
4. Provide GHL access and basic usage guidance.
5. Schedule 30-day review.
6. Move fulfillment opportunity to Live.
7. Begin maintenance status.

---

# 43. Payment Failed

## Workflow name

```text
PGS Agency — Billing — Payment Failed
```

## Trigger

Subscription payment failure.

## Actions

1. Record failed-payment date.
2. Notify client.
3. Provide approved payment-update path.
4. Notify billing administrator.
5. Set account status to Payment Issue.
6. Follow the approved retry schedule.
7. Do not terminate service immediately unless the contract permits it.

Exact actions must match SaaS V1 or V2 behavior.

---

# 44. Payment Recovered

## Workflow name

```text
PGS Agency — Billing — Payment Recovered
```

## Trigger

Previously failed payment succeeds.

## Actions

1. Clear Payment Issue status.
2. Notify billing administrator.
3. Cancel pending suspension tasks.
4. Restore eligible services when necessary.
5. Record recovery date.

---

# 45. Cancellation Received

## Workflow name

```text
PGS Agency — Billing — Cancellation Received
```

## Trigger

Approved cancellation event or verified cancellation request.

## Actions

1. Record request date.
2. Verify requester authority.
3. Record effective cancellation date.
4. Confirm outstanding balances and usage.
5. Explain website and GHL implications.
6. Stop future sales or onboarding reminders.
7. Create termination checklist.
8. Trigger Service Termination Tasks at the appropriate time.

Do not delete customer data automatically.

---

# 46. Service Termination Tasks

## Workflow name

```text
PGS Agency — Billing — Service Termination Tasks
```

## Trigger

Effective cancellation date reached.

## Actions

Create controlled tasks to:

1. Disable or terminate SaaS access according to policy.
2. Stop agency-managed workflows.
3. Review phone-number treatment.
4. Review domain and website status.
5. Export eligible customer data.
6. Preserve required billing records.
7. Revoke integration credentials.
8. Remove Cloudflare secrets.
9. Archive repository and deployment according to policy.
10. Confirm completion to the former client when appropriate.

No destructive deletion may occur without the approved retention and cancellation policy.

---

## 47. Communication Windows

Recommended default for non-emergency automated communication:

```text
8:00 AM–7:00 PM recipient local time
```

Final communication windows require legal and operational review.

Emergency-request acknowledgment may occur outside standard hours when:

* The customer initiated the request
* Consent and platform rules permit it
* The message only acknowledges the request
* It does not become a promotional sequence

---

## 48. Workflow Error Handling

Every critical workflow should account for:

* Missing phone
* Missing email
* Invalid custom values
* Invalid review URL
* Missing assignee
* Failed message
* Opportunity not found
* Duplicate opportunity
* Missing calendar
* Missing appointment
* DND
* Workflow re-entry
* GHL service interruption

### Critical configuration errors

If required configuration contains `CONFIGURATION REQUIRED`:

* Do not send the message
* Notify the agency
* Create a configuration task
* Stop the affected workflow

---

## 49. Workflow Reporting

Track:

* Workflow entries
* Successful acknowledgments
* Delivery failures
* Customer replies
* Internal notification delivery
* Missed-call texts
* Opportunities created
* Stage movement
* Estimate follow-up
* Appointment confirmation
* Review requests
* Feedback-recovery tasks
* Workflow errors
* Unsubscribes
* DND events

Do not measure workflow success solely by messages sent.

---

## 50. Workflow Testing Standards

Every workflow requires:

* Happy-path test
* Missing-data test
* DND test
* Reply test
* Duplicate-entry test
* Stop-condition test
* Incorrect-stage test
* Invalid-configuration test
* Delivery-failure test
* Mobile conversation review
* Opportunity-state verification

### Emergency workflow tests

Confirm:

* One acknowledgment only
* No dispatch claim
* Immediate internal alert
* Safety branch behavior
* No slow nurture enrollment

### Review workflow tests

Confirm:

* Honest review link
* No rating-based gating
* One reminder maximum
* Low feedback creates internal recovery
* No automatic publication

### Agency workflow tests

Confirm:

* Client workflow assets are not mixed with agency fulfillment records
* Failed payment does not trigger premature destructive action
* Cancellation creates reviewable tasks
* No automatic deletion occurs

---

## 51. Workflow Publication Checklist

Before publishing any workflow:

1. Confirm workflow location.
2. Confirm trigger.
3. Confirm entry filters.
4. Confirm re-entry.
5. Confirm client custom values.
6. Confirm sender identity.
7. Confirm phone configuration.
8. Confirm email configuration.
9. Confirm consent treatment.
10. Confirm communication window.
11. Confirm stop conditions.
12. Confirm opportunity behavior.
13. Confirm internal recipients.
14. Test using a fresh test contact.
15. Review conversation history.
16. Review pipeline result.
17. Record workflow version.
18. Obtain production approval.

---

## 52. Workflow Acceptance Criteria

The workflow system is accepted when:

1. Client and agency workflows are stored separately.
2. Next.js forms trigger the correct client workflows.
3. General requests create one appropriate opportunity.
4. Emergency requests receive priority handling.
5. Emergency messages do not confirm dispatch.
6. General follow-up stops after customer response.
7. Missed-call texting observes a suppression window.
8. Contact subjects route correctly.
9. Preferred appointment dates are not treated as confirmed.
10. Estimate follow-up stops after resolution.
11. Review requests follow confirmed job completion.
12. Public review access is not gated.
13. Low feedback creates human recovery tasks.
14. Reactivation remains unpublished until approved.
15. SaaS onboarding operates in the agency environment.
16. Failed payments follow approved billing policy.
17. Cancellation does not delete data automatically.
18. Critical configuration placeholders prevent sending.
19. Every production workflow passes required tests.
20. Workflow versions and client deviations are documented.

---

## 53. Open Decisions

The following remain unresolved:

* Final communication windows
* Exact response task deadlines
* Final no-response timing
* Final estimate follow-up timing
* Appointment reminder timing
* Final review-request timing
* Final review-reminder timing
* Whether automated feedback recovery will be permitted
* Final reactivation consent requirements
* Final SaaS V1 or V2 billing triggers
* Failed-payment retry and suspension schedule
* Cancellation notice and effective date
* Data-retention policy
* Phone-number treatment after cancellation
* Website hosting treatment after cancellation
* Whether job completion comes from pipeline, field service software or manual tag
* Whether opportunity creation occurs entirely in Cloudflare or partly in GHL

---

## 54. Next Document

The next project document is:

`11-data-mapping-and-integrations.md`

It will define:

* Next.js-to-GHL field mapping
* GHL identifiers
* Cloudflare environment variables
* Contact deduplication
* Opportunity creation
* Tags and trigger contract
* Calendar integration
* Analytics events
* Error mapping
* Consent records
* Agency onboarding integration
* Integration testing
