# Plumber Growth System — Launch Checklist

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Launch Checklist |
| Document ID | 19-launch-checklist |
| Version | 1.0 |
| Status | Active Checklist |
| Parent Documents | 00-project-overview.md through 18-decision-log.md |
| Product | Plumber Growth System |
| Base Price | $297 per month |
| Setup Fee | $0 |

---

## 1. Purpose

This document consolidates the requirements for:

1. Product pilot launch
2. SaaS sales launch
3. Individual plumbing client launch
4. Post-launch verification
5. Ongoing pilot review

No launch should be approved solely because the website looks complete.

A successful launch requires the website, native forms, Cloudflare processing, GHL routing, workflows, billing, security, analytics, client approvals and rollback procedures to work together.

---

## 2. Checklist Statuses

Use:

```text
[ ] Not started
[-] In progress
[x] Complete
[!] Blocked
[N/A] Not applicable
```

Every `N/A` item should include a reason.

---

## 3. Launch Types

### Product launch

Confirms that the overall Plumber Growth System can be sold and fulfilled.

### Client launch

Confirms that one plumbing company’s website and GHL system are ready for production.

### Pilot launch

A controlled product launch limited to five qualified plumbing clients.

---

# PART I — PRODUCT PILOT READINESS

## 4. Product Definition

* [ ] Product name approved
* [ ] Plumbing vertical approved
* [ ] United States market approved
* [ ] Ideal customer profile approved
* [ ] Poor-fit customer profile documented
* [ ] Primary value proposition approved
* [ ] Customer-facing tagline approved
* [ ] Base deliverables approved
* [ ] Excluded services documented
* [ ] No-results-guarantee language approved
* [ ] Product limitations documented
* [ ] Pilot size confirmed as five clients
* [ ] Founder-led pilot responsibilities assigned

### Approved working product

```text
Plumber Growth System
Turn more plumbing calls and website visitors into booked jobs.
```

---

## 5. Pricing and Commercial Terms

* [ ] $297 monthly price configured
* [ ] $0 setup fee confirmed
* [ ] Month-to-month billing confirmed
* [ ] No free trial confirmed
* [ ] Usage-based charges disclosed
* [ ] Phone-number charges disclosed
* [ ] Call charges disclosed
* [ ] SMS and MMS charges disclosed
* [ ] Email usage disclosed
* [ ] Premium workflow usage disclosed
* [ ] Third-party fees disclosed
* [ ] Domain registration responsibility documented
* [ ] Final usage markup approved
* [ ] Initial commitment decision completed
* [ ] Annual billing decision completed or deferred
* [ ] Upgrade and downgrade treatment documented
* [ ] Tax treatment reviewed
* [ ] Payment-failure process documented
* [ ] Refund policy approved
* [ ] Cancellation policy approved
* [ ] Website transition policy approved
* [ ] Data export policy approved

---

## 6. Product Scope

* [ ] Included page count approved
* [ ] Included service-page count approved
* [ ] Included location-page count approved
* [ ] Residential Plumbing inclusion defined
* [ ] Commercial Plumbing inclusion defined
* [ ] Financing page inclusion defined
* [ ] Two consolidated revision rounds approved
* [ ] Monthly update allowance approved
* [ ] Out-of-scope development pricing approved
* [ ] Support channels approved
* [ ] Support hours approved
* [ ] Response targets approved
* [ ] Client-delay policy approved
* [ ] Custom-integration boundaries documented
* [ ] Multi-location client treatment documented

---

## 7. Legal and Agreements

* [ ] SaaS subscription agreement reviewed
* [ ] Service scope incorporated into agreement
* [ ] Website ownership addressed
* [ ] Agency intellectual property addressed
* [ ] Client-provided asset ownership addressed
* [ ] Domain ownership addressed
* [ ] GHL data ownership addressed
* [ ] Phone-number treatment addressed
* [ ] Cancellation consequences addressed
* [ ] Data retention addressed
* [ ] Data deletion addressed
* [ ] Data export addressed
* [ ] Refund terms addressed
* [ ] Usage billing addressed
* [ ] Acceptable-use policy reviewed
* [ ] Privacy responsibilities assigned
* [ ] Data-processing terms reviewed
* [ ] Vendor terms reviewed
* [ ] Liability limitations reviewed
* [ ] Results disclaimer reviewed
* [ ] Electronic acceptance process tested

Legal review must be completed by qualified counsel where required.

---

## 8. Consent and Communications

* [ ] Service-related SMS consent language approved
* [ ] Marketing SMS consent language approved
* [ ] Service and marketing consent separated
* [ ] Marketing consent unchecked by default
* [ ] Consent text versioning implemented
* [ ] Consent timestamp stored
* [ ] Consent source stored
* [ ] DND behavior tested
* [ ] STOP handling tested
* [ ] Natural-language revocation process documented
* [ ] HELP response reviewed
* [ ] Quiet hours approved
* [ ] Message frequency limits approved
* [ ] Commercial email footer approved
* [ ] Commercial email unsubscribe tested
* [ ] Call-recording policy approved or recording disabled
* [ ] Call-transcription policy approved or transcription disabled
* [ ] Review-request language approved

---

## 9. Review and Reputation Compliance

* [ ] Honest review-request language approved
* [ ] Public review link available regardless of private rating
* [ ] Review gating prohibited in workflow documentation
* [ ] No incentivized-review workflow
* [ ] Private feedback remains private by default
* [ ] Testimonial permission is separate
* [ ] Testimonial attribution options defined
* [ ] Low-feedback recovery process approved
* [ ] Public review-response process documented
* [ ] Review structured-data policy approved
* [ ] Fake or demonstration reviews blocked from production

---

## 10. Emergency Plumbing Controls

* [ ] Emergency Request warning approved
* [ ] No-dispatch-guarantee language approved
* [ ] Gas-odor message approved
* [ ] Electrical-danger message approved
* [ ] Emergency-service and utility direction approved
* [ ] 24/7 claims require explicit verification
* [ ] Arrival-time claims prohibited unless verified
* [ ] Requested appointment is distinguished from confirmed appointment
* [ ] Emergency request does not enter general nurture
* [ ] Emergency internal recipients configured
* [ ] Direct-call fallback configured
* [ ] Emergency workflow tested outside normal hours where applicable

---

# PART II — DEVELOPMENT FOUNDATION

## 11. Repository Foundation

* [ ] Canonical template repository created
* [ ] Repository is private
* [ ] `CLAUDE.md` added
* [ ] Project documentation added
* [ ] Decision log added
* [ ] Package manager selected
* [ ] Next.js version pinned
* [ ] Node.js version pinned
* [ ] TypeScript strict mode enabled
* [ ] Formatting configured
* [ ] Linting configured
* [ ] Unit testing configured
* [ ] Integration testing configured
* [ ] End-to-end testing configured
* [ ] Accessibility testing configured
* [ ] Secret scanning configured
* [ ] Dependency monitoring configured
* [ ] Branch protection configured
* [ ] Continuous integration configured
* [ ] Production build succeeds

---

## 12. Technical Architecture

* [ ] Next.js App Router configured
* [ ] Static export configured
* [ ] Cloudflare-compatible output verified
* [ ] Pages Functions directory configured
* [ ] Client/server code boundaries verified
* [ ] Typed client configuration created
* [ ] Production-placeholder validation created
* [ ] Service schema created
* [ ] Service-area schema created
* [ ] Navigation generated from configuration
* [ ] Routes generated from configuration
* [ ] Sitemap generated from configuration
* [ ] Structured-data utilities created
* [ ] Analytics module created
* [ ] GHL integration adapter created
* [ ] Error taxonomy implemented
* [ ] Safe logging implemented

---

## 13. Design System

* [ ] Color tokens implemented
* [ ] Client brand tokens implemented
* [ ] Typography implemented
* [ ] Spacing system implemented
* [ ] Layout primitives implemented
* [ ] Header implemented
* [ ] Desktop navigation implemented
* [ ] Accessible mobile navigation implemented
* [ ] Footer implemented
* [ ] Mobile action bar implemented
* [ ] Buttons implemented
* [ ] Links implemented
* [ ] Cards implemented
* [ ] Alerts implemented
* [ ] Emergency safety component implemented
* [ ] Form controls implemented
* [ ] Error summary implemented
* [ ] Success states implemented
* [ ] Reduced-motion behavior implemented
* [ ] Focus-visible states implemented
* [ ] Contrast validated

---

## 14. Page Templates

* [ ] Homepage template
* [ ] Services hub template
* [ ] Service-detail template
* [ ] Residential Plumbing template
* [ ] Commercial Plumbing template
* [ ] Service Areas hub template
* [ ] Location-page template
* [ ] About template
* [ ] Reviews template
* [ ] Financing template
* [ ] FAQ template
* [ ] Contact template
* [ ] Request Service template
* [ ] Emergency Request template
* [ ] Review Feedback template
* [ ] Client Onboarding template
* [ ] Privacy Policy template
* [ ] Terms template
* [ ] Thank You template
* [ ] Not Found template

---

# PART III — NATIVE FORMS

## 15. Shared Form Infrastructure

* [ ] Native HTML controls used
* [ ] Shared field components created
* [ ] Shared validation schemas created
* [ ] Server-side validation implemented
* [ ] Turnstile integrated
* [ ] Turnstile verified server-side
* [ ] Honeypot implemented
* [ ] Rate limiting implemented
* [ ] Idempotency implemented
* [ ] Request-size limit implemented
* [ ] Origin checks implemented
* [ ] Field allowlists implemented
* [ ] Input normalization implemented
* [ ] Accessible error summary implemented
* [ ] Field-error association implemented
* [ ] Loading state implemented
* [ ] Success state implemented
* [ ] Direct-call failure fallback implemented
* [ ] Personal information excluded from analytics
* [ ] Public file uploads disabled

---

## 16. General Plumbing Quote Request

* [ ] Required fields implemented
* [ ] Enabled-service list generated from configuration
* [ ] Service query preselection validated
* [ ] Residential and commercial options implemented
* [ ] Address fields implemented
* [ ] Preferred date clearly marked as a request
* [ ] Service consent implemented
* [ ] Marketing consent separate
* [ ] GHL contact mapping implemented
* [ ] GHL opportunity creation implemented
* [ ] Service tag implemented
* [ ] Workflow-routing tag applied last
* [ ] Customer acknowledgment tested
* [ ] Internal notification tested
* [ ] Analytics success event tested
* [ ] Duplicate submission tested

---

## 17. Emergency Plumbing Request

* [ ] Safety warning visible
* [ ] Emergency types configured
* [ ] Active flooding captured
* [ ] Water-shutoff status captured
* [ ] Gas-odor status captured
* [ ] Electrical-danger status captured
* [ ] Conditional safety messages implemented
* [ ] Safety acknowledgment required
* [ ] High-priority GHL opportunity implemented
* [ ] Emergency tags implemented
* [ ] Immediate internal notification tested
* [ ] One customer acknowledgment tested
* [ ] No dispatch confirmation
* [ ] No general nurture
* [ ] Sensitive values excluded from analytics
* [ ] Failure fallback tested

---

## 18. Contact Form

* [ ] Subject categories configured
* [ ] Service inquiry routing implemented
* [ ] Existing appointment routing implemented
* [ ] Existing customer support routing implemented
* [ ] Billing routing implemented
* [ ] Financing routing implemented
* [ ] Vendor routing implemented
* [ ] Employment routing implemented
* [ ] General inquiry routing implemented
* [ ] Opportunity creation limited to eligible subjects
* [ ] Confirmation message tested
* [ ] Analytics event tested

---

## 19. Review Feedback Form

* [ ] Ratings 1–5 accessible
* [ ] Written feedback implemented
* [ ] Permission to contact separate
* [ ] Testimonial permission separate
* [ ] Testimonial attribution conditional
* [ ] Public review option visible for every rating
* [ ] Low-rating recovery task tested
* [ ] No sales opportunity created
* [ ] Private rating excluded from analytics
* [ ] Feedback excluded from ordinary logs
* [ ] No automatic publication

---

## 20. Website Onboarding Form

* [ ] Signed or authenticated access implemented
* [ ] Expiration implemented
* [ ] Cross-client access prevented
* [ ] `noindex, nofollow`
* [ ] Password warning visible
* [ ] Business section implemented
* [ ] Hours section implemented
* [ ] Services section implemented
* [ ] Service Areas section implemented
* [ ] Credentials section implemented
* [ ] Branding section implemented
* [ ] Content section implemented
* [ ] Digital properties section implemented
* [ ] GHL operations section implemented
* [ ] Approval section implemented
* [ ] Agency record mapping implemented
* [ ] Fulfillment stage update implemented
* [ ] No plumbing opportunity created
* [ ] Public analytics excluded
* [ ] Save-and-return decision implemented or formally deferred

---

# PART IV — GOHIGHLEVEL PRODUCT

## 21. SaaS Configurator

* [ ] SaaS V1 or V2 decision completed
* [ ] Payment provider connected
* [ ] Plan category created
* [ ] Plan name entered
* [ ] Plan description entered
* [ ] Monthly price set to $297
* [ ] Setup fee set to $0
* [ ] Trial disabled
* [ ] Annual pricing configured or disabled
* [ ] Approved capabilities selected
* [ ] Excluded capabilities remain unselected
* [ ] Usage billing configured
* [ ] Usage disclosure added
* [ ] Add-ons disabled for initial launch
* [ ] Snapshot attached
* [ ] Checkout tested
* [ ] Failed payment tested
* [ ] Direct sale link tested
* [ ] Account provisioning tested

### Approved capabilities

* [ ] 2 Way Text & Email Conversation
* [ ] Web Chat
* [ ] Reputation Management
* [ ] GMB Call Tracking
* [ ] Missed Call Text Back
* [ ] Calendar
* [ ] CRM
* [ ] Opportunities
* [ ] Trigger Links
* [ ] SMS & Email Templates
* [ ] Workflows
* [ ] Invoice
* [ ] Launchpad

### Intentionally excluded

* [ ] GHL Websites remains unselected
* [ ] GHL Funnels remains unselected
* [ ] GHL Form Builder remains unselected
* [ ] GHL Survey Builder remains unselected

---

## 22. Snapshot Source Account

* [ ] Dedicated source account created
* [ ] No real customer data
* [ ] Custom values created
* [ ] Contact fields created
* [ ] Opportunity fields created where required
* [ ] Tags created
* [ ] Plumbing Lead Pipeline created
* [ ] Pipeline stages verified
* [ ] Calendar template created
* [ ] Trigger links created
* [ ] SMS templates created
* [ ] Email templates created
* [ ] Client workflows created
* [ ] Agency workflows excluded
* [ ] GHL forms excluded
* [ ] GHL surveys excluded
* [ ] GHL websites excluded
* [ ] GHL funnels excluded
* [ ] Snapshot version assigned
* [ ] Snapshot loaded into fresh test account
* [ ] Fresh-account validation passed

---

## 23. Client GHL Workflows

* [ ] General Quote Intake
* [ ] General Acknowledgment
* [ ] General Internal Notification
* [ ] No-Response Follow-Up
* [ ] Emergency Request Intake
* [ ] Emergency Acknowledgment
* [ ] Emergency Internal Notification
* [ ] Contact Form Routing
* [ ] Missed Call Text Back
* [ ] Missed Call Internal Notification
* [ ] Estimate Requested
* [ ] Estimate Scheduled
* [ ] Estimate Sent Follow-Up
* [ ] Estimate Follow-Up Task
* [ ] Job Won Processing
* [ ] Job Lost Processing
* [ ] Appointment Request Received
* [ ] Appointment Confirmation
* [ ] Appointment Reminder
* [ ] Appointment Rescheduled
* [ ] Appointment Canceled
* [ ] Appointment Completed
* [ ] Job Completion Review Request
* [ ] Review Request Reminder
* [ ] Private Feedback Intake
* [ ] Feedback Recovery
* [ ] New Review Notification
* [ ] Reactivation remains unpublished until approved

---

## 24. Agency Operations Workflows

* [ ] SaaS Purchase Received
* [ ] Client Welcome
* [ ] Onboarding Reminder
* [ ] Onboarding Submitted
* [ ] Missing Assets
* [ ] Website Review Ready
* [ ] Website Approved
* [ ] Website Live
* [ ] Payment Failed
* [ ] Payment Recovered
* [ ] Cancellation Received
* [ ] Service Termination Tasks

Agency workflows must remain outside the plumbing client snapshot.

---

## 25. GHL Permissions

* [ ] Owner role configured
* [ ] Office manager role configured
* [ ] Technician role evaluated
* [ ] Agency administrator access retained
* [ ] Workflow editing restricted
* [ ] Integration credentials restricted
* [ ] Phone settings restricted
* [ ] SaaS settings restricted
* [ ] Marketplace installation restricted
* [ ] Former-user removal process documented
* [ ] Least-privilege review completed

---

# PART V — INDIVIDUAL CLIENT READINESS

## 26. Client Qualification

* [ ] Business legitimacy verified
* [ ] Operating history verified
* [ ] Services verified
* [ ] Service area verified
* [ ] Google Business Profile reviewed
* [ ] Existing reviews reviewed
* [ ] Website need identified
* [ ] Lead-response need identified
* [ ] Operational capacity confirmed
* [ ] Budget fit confirmed
* [ ] Expectations aligned
* [ ] Authorized approver identified
* [ ] No disqualifying compliance request
* [ ] Qualification score recorded

---

## 27. Client Onboarding

* [ ] Subscription active
* [ ] Welcome delivered
* [ ] Secure onboarding link delivered
* [ ] Onboarding completed
* [ ] Required business information received
* [ ] Branding received
* [ ] Services received
* [ ] Service areas received
* [ ] Credentials received
* [ ] Domain information received
* [ ] Google Business Profile received
* [ ] Review URL received
* [ ] GHL recipients received
* [ ] Calendar availability received
* [ ] Authorized approver confirmed
* [ ] Missing-items request completed
* [ ] Scope summary approved

---

## 28. Claim Verification

* [ ] Business name
* [ ] Legal business name
* [ ] Phone
* [ ] Email
* [ ] Address or service-area status
* [ ] Hours
* [ ] Emergency availability
* [ ] 24/7 availability, if claimed
* [ ] Licenses
* [ ] Insurance
* [ ] Bonding
* [ ] Certifications
* [ ] Years in business
* [ ] Financing
* [ ] Warranties
* [ ] Guarantees
* [ ] Reviews
* [ ] Review count
* [ ] Team information
* [ ] Social profiles
* [ ] Service areas

Unsupported claims have been removed.

---

## 29. Client Repository and Cloudflare

* [ ] Private repository created
* [ ] Template version recorded
* [ ] Client configuration added
* [ ] Client content added
* [ ] Client assets added
* [ ] No secrets committed
* [ ] Cloudflare Pages project created
* [ ] GitHub repository connected
* [ ] Production branch configured
* [ ] Build command configured
* [ ] Output directory configured
* [ ] Pages Functions configured
* [ ] Preview variables configured
* [ ] Production variables configured
* [ ] Turnstile configured
* [ ] Client GHL token configured
* [ ] Field map configured
* [ ] Pipeline map configured
* [ ] Tag map configured
* [ ] Preview deployment passed

---

## 30. Client Domain and DNS

* [ ] Domain ownership confirmed
* [ ] Registrar access granted securely
* [ ] Existing DNS recorded
* [ ] MX records preserved
* [ ] SPF preserved
* [ ] DKIM preserved
* [ ] DMARC preserved
* [ ] Existing verification records preserved
* [ ] Canonical hostname selected
* [ ] Cloudflare domain configured
* [ ] DNS records added
* [ ] Alternate hostname redirect configured
* [ ] SSL active
* [ ] Domain expiration responsibility documented
* [ ] Rollback records preserved

---

## 31. Client GHL Configuration

* [ ] Correct sub-account provisioned
* [ ] Correct snapshot applied
* [ ] Snapshot version recorded
* [ ] Business information populated
* [ ] Custom values populated
* [ ] Placeholder values removed
* [ ] Phone number assigned
* [ ] Call forwarding configured
* [ ] Missed-call text-back configured
* [ ] Email sending configured
* [ ] Sender identity verified
* [ ] Calendar assigned
* [ ] Calendar availability configured
* [ ] Review URL configured
* [ ] Notification recipients configured
* [ ] Users invited
* [ ] Permissions configured
* [ ] Usage rebilling configured
* [ ] Client-specific GHL token created
* [ ] Workflows tested
* [ ] Workflows published individually

---

# PART VI — CONTENT, SEO AND ANALYTICS

## 32. Website Content

* [ ] Homepage customized
* [ ] Services hub customized
* [ ] Enabled service pages customized
* [ ] Residential page customized
* [ ] Commercial page customized or disabled
* [ ] Service Areas hub customized
* [ ] Approved location pages customized
* [ ] About page customized
* [ ] Reviews page uses legitimate content
* [ ] Financing page verified or disabled
* [ ] FAQs customized
* [ ] Contact page verified
* [ ] Calls to action accurate
* [ ] No demonstration content
* [ ] No competitor content
* [ ] No thin location pages
* [ ] No unsupported emergency claims
* [ ] No fabricated credentials
* [ ] Client content approval recorded

---

## 33. Technical SEO

* [ ] Distinct page titles
* [ ] Distinct meta descriptions
* [ ] One appropriate H1 per page
* [ ] Canonical URLs
* [ ] Production hostname
* [ ] Open Graph metadata
* [ ] Robots directives
* [ ] Preview `noindex`
* [ ] Client Onboarding `noindex, nofollow`
* [ ] Emergency Request `noindex`
* [ ] Review Feedback `noindex`
* [ ] Thank You `noindex`
* [ ] XML sitemap
* [ ] Disabled routes excluded
* [ ] Breadcrumbs
* [ ] Internal links
* [ ] No broken links
* [ ] Image alternative text
* [ ] Structured data validated
* [ ] No fabricated review schema
* [ ] No false location schema
* [ ] Mobile content parity

---

## 34. Search Platform Setup

* [ ] Google Search Console property verified
* [ ] XML sitemap submitted to Google
* [ ] Bing Webmaster Tools verified
* [ ] XML sitemap submitted to Bing
* [ ] IndexNow decision implemented or deferred
* [ ] Google Business Profile website URL updated
* [ ] Google Business Profile action links reviewed
* [ ] Bing Places reviewed where included
* [ ] Apple Business Connect reviewed where included
* [ ] Search-platform ownership documented
* [ ] Agency access granted securely

---

## 35. Analytics

* [ ] Analytics property created or verified
* [ ] Production identifier configured
* [ ] Preview traffic excluded
* [ ] Internal tests excluded
* [ ] Approved events implemented
* [ ] Phone clicks tracked
* [ ] Form starts tracked
* [ ] Accepted form submissions tracked
* [ ] Failed submissions excluded from conversions
* [ ] Appointment requests tracked
* [ ] Chat engagement tracked
* [ ] Review-link clicks tracked
* [ ] UTM parameters preserved
* [ ] Original attribution preserved
* [ ] Most-recent attribution preserved
* [ ] Opportunity attribution populated
* [ ] No personal information in analytics
* [ ] Consent behavior tested
* [ ] Data-retention settings reviewed

---

# PART VII — QUALITY ASSURANCE

## 36. Automated Validation

* [ ] Format check passed
* [ ] Lint passed
* [ ] Type check passed
* [ ] Unit tests passed
* [ ] Integration tests passed
* [ ] Production build passed
* [ ] End-to-end tests passed
* [ ] Accessibility automation passed
* [ ] Secret scan passed
* [ ] Dependency review passed
* [ ] Broken-link check passed
* [ ] Structured-data validation passed

Record commands and results in the release record.

---

## 37. Accessibility QA

* [ ] Skip link works
* [ ] Keyboard navigation works
* [ ] Mobile menu keyboard behavior works
* [ ] Focus-visible states work
* [ ] Focus restoration works
* [ ] Heading hierarchy is logical
* [ ] Forms have persistent labels
* [ ] Required fields are identified
* [ ] Error summary works
* [ ] Field errors are associated
* [ ] Success messages are announced
* [ ] Emergency warning is accessible
* [ ] Contrast meets target
* [ ] Touch targets are sufficient
* [ ] Reduced motion works
* [ ] 200% zoom works
* [ ] Narrow-screen reflow works
* [ ] No critical automated accessibility defects

---

## 38. Responsive and Browser QA

* [ ] Small mobile
* [ ] Standard mobile
* [ ] Large mobile
* [ ] Tablet portrait
* [ ] Tablet landscape
* [ ] Laptop
* [ ] Desktop
* [ ] Chrome
* [ ] Edge
* [ ] Firefox
* [ ] Safari
* [ ] Mobile Safari
* [ ] Chrome for Android
* [ ] Portrait orientation
* [ ] Landscape orientation
* [ ] On-screen keyboard
* [ ] Mobile action bar does not obscure content
* [ ] GHL chat does not obstruct actions

---

## 39. Performance QA

* [ ] Homepage tested
* [ ] Service page tested
* [ ] Location page tested
* [ ] Request Service tested
* [ ] Emergency Request tested
* [ ] Client Onboarding tested
* [ ] Images optimized
* [ ] Font loading reviewed
* [ ] Layout shift reviewed
* [ ] Client JavaScript reviewed
* [ ] Third-party scripts reviewed
* [ ] GHL chat impact reviewed
* [ ] Turnstile impact reviewed
* [ ] Mobile performance approved

---

## 40. Security QA

* [ ] HTTPS enforced
* [ ] SSL valid
* [ ] Security headers reviewed
* [ ] Secrets absent from browser bundle
* [ ] Secrets absent from Git
* [ ] Turnstile verified server-side
* [ ] Rate limiting works
* [ ] Idempotency works
* [ ] Request-size limits work
* [ ] Origin validation works
* [ ] Safe errors returned
* [ ] Logs exclude personal information
* [ ] Onboarding access restricted
* [ ] Expired onboarding access rejected
* [ ] Cross-client form routing blocked
* [ ] Client tokens isolated
* [ ] Call recording disabled unless approved
* [ ] Session replay disabled
* [ ] File uploads disabled
* [ ] Rollback tested

---

## 41. End-to-End GHL Tests

### General Quote

* [ ] Contact created or updated
* [ ] Opportunity created
* [ ] Correct pipeline
* [ ] Correct stage
* [ ] Correct service tag
* [ ] Routing tag applied last
* [ ] Internal notification
* [ ] Customer acknowledgment
* [ ] Analytics conversion
* [ ] Duplicate prevented

### Emergency Request

* [ ] Contact created or updated
* [ ] High-priority opportunity
* [ ] Emergency fields mapped
* [ ] Emergency tags
* [ ] Immediate internal alert
* [ ] One acknowledgment
* [ ] No dispatch promise
* [ ] No general nurture
* [ ] Sensitive analytics excluded

### Contact

* [ ] Service question creates opportunity
* [ ] Billing question does not
* [ ] Existing appointment does not
* [ ] Correct internal routing
* [ ] Confirmation delivered

### Review Feedback

* [ ] Feedback stored privately
* [ ] Low rating creates recovery task
* [ ] Public review link remains available
* [ ] No sales opportunity
* [ ] Testimonial consent separated

### Website Onboarding

* [ ] Agency record updated
* [ ] Fulfillment stage updated
* [ ] Client plumbing pipeline unaffected
* [ ] Implementation notification delivered
* [ ] No public analytics content

---

# PART VIII — CLIENT APPROVAL AND PRODUCTION LAUNCH

## 42. Internal Sign-Off

* [ ] Implementation review complete
* [ ] Technical review complete
* [ ] Content review complete
* [ ] SEO review complete
* [ ] Accessibility review complete
* [ ] Security review complete
* [ ] GHL workflow review complete
* [ ] Analytics review complete
* [ ] No Severity 1 defects
* [ ] No Severity 2 defects
* [ ] Remaining defects documented
* [ ] Rollback deployment identified

---

## 43. Client Review

* [ ] Preview sent
* [ ] Review instructions sent
* [ ] Authorized approver confirmed
* [ ] Revision round one received
* [ ] Revision round one completed
* [ ] Revision round two received or waived
* [ ] Revision round two completed or waived
* [ ] Out-of-scope requests separated
* [ ] Business facts reconfirmed
* [ ] Final preview approved
* [ ] Written approval recorded
* [ ] Launch date approved

---

## 44. Final Go/No-Go Review

### Launch information

```text
Client:
Domain:
Repository:
Cloudflare project:
GHL Location ID:
Template version:
Snapshot version:
Production commit:
Rollback deployment:
Launch date:
Launch owner:
```

### Go/no-go questions

* [ ] Is the client approved?
* [ ] Is the production build passing?
* [ ] Are production secrets configured?
* [ ] Is the correct GHL account connected?
* [ ] Do all primary forms work?
* [ ] Does emergency routing work?
* [ ] Does the business phone work?
* [ ] Is the domain ready?
* [ ] Is SSL ready?
* [ ] Is rollback available?
* [ ] Are there any critical unresolved risks?

### Decision

```text
[ ] GO
[ ] NO-GO
[ ] CONDITIONAL GO
```

Conditional launch requires:

* Written condition
* Owner
* Deadline
* No critical security, form-routing, legal or emergency defect

---

## 45. Production Launch Procedure

* [ ] Confirm DNS record
* [ ] Deploy approved production commit
* [ ] Monitor Cloudflare build
* [ ] Confirm deployment success
* [ ] Confirm production hostname
* [ ] Confirm alternate-host redirect
* [ ] Confirm SSL
* [ ] Confirm homepage
* [ ] Confirm navigation
* [ ] Confirm phone links
* [ ] Confirm GHL chat
* [ ] Confirm General Quote
* [ ] Confirm Emergency Request
* [ ] Confirm Contact Form
* [ ] Confirm Review Feedback
* [ ] Confirm GHL contacts
* [ ] Confirm GHL opportunities
* [ ] Confirm workflows
* [ ] Confirm internal notifications
* [ ] Confirm customer acknowledgments
* [ ] Confirm analytics
* [ ] Confirm sitemap
* [ ] Confirm robots
* [ ] Confirm canonical URLs
* [ ] Record deployment
* [ ] Move fulfillment stage to Live
* [ ] Notify client

---

# PART IX — POST-LAUNCH

## 46. First 24 Hours

* [ ] Website availability monitored
* [ ] SSL monitored
* [ ] Forms monitored
* [ ] GHL authentication monitored
* [ ] Opportunity creation monitored
* [ ] Workflow failures monitored
* [ ] Phone routing monitored
* [ ] Chat monitored
* [ ] Analytics monitored
* [ ] Search accessibility verified
* [ ] No cross-client routing
* [ ] No production secrets exposed
* [ ] Test records removed or archived

---

## 47. Client Handoff

* [ ] Production URL sent
* [ ] GHL login sent
* [ ] Mobile application guidance sent
* [ ] Conversations demonstrated
* [ ] Contacts demonstrated
* [ ] Opportunities demonstrated
* [ ] Pipeline stages explained
* [ ] Appointments explained
* [ ] Reviews explained
* [ ] DND and opt-outs explained
* [ ] Usage charges explained
* [ ] Support process explained
* [ ] Website update process explained
* [ ] Scope boundaries restated
* [ ] Walkthrough recording delivered
* [ ] Training session completed or scheduled

---

## 48. First Seven Days

* [ ] Real lead routing reviewed
* [ ] Missed-call behavior reviewed
* [ ] Client login activity reviewed
* [ ] Pipeline use reviewed
* [ ] Customer-response behavior reviewed
* [ ] Message delivery reviewed
* [ ] Usage charges reviewed
* [ ] Client questions recorded
* [ ] Configuration corrections completed
* [ ] No recurring form defects
* [ ] No recurring workflow defects

---

## 49. 30-Day Review

* [ ] 30-day review completed
* [ ] Website activity reviewed
* [ ] Calls reviewed
* [ ] Forms reviewed
* [ ] Chat reviewed
* [ ] Opportunities reviewed
* [ ] Estimates reviewed
* [ ] Won and lost outcomes reviewed
* [ ] Review requests reviewed
* [ ] Workflow errors reviewed
* [ ] Client adoption reviewed
* [ ] Support volume reviewed
* [ ] Usage costs reviewed
* [ ] Product value explained
* [ ] Training gaps addressed
* [ ] Churn risk assessed
* [ ] Pilot lessons recorded
* [ ] Client moved to Ongoing Service

---

# PART X — PILOT LEARNING

## 50. Pilot Metrics

Record for each pilot client:

* [ ] Qualification score
* [ ] Acquisition source
* [ ] Sales conversion
* [ ] Onboarding completion time
* [ ] Missing-asset count
* [ ] Website production time
* [ ] GHL configuration time
* [ ] QA time
* [ ] Revision count
* [ ] Total time to launch
* [ ] First lead date
* [ ] First conversation date
* [ ] First estimate date
* [ ] First won opportunity date
* [ ] Support time
* [ ] Communications usage
* [ ] Client satisfaction
* [ ] Scope exceptions
* [ ] Defects
* [ ] Churn risk
* [ ] Gross-margin estimate

---

## 51. Pilot Improvement Review

After each pilot:

* [ ] Update qualification criteria
* [ ] Update onboarding questions
* [ ] Update missing-assets checklist
* [ ] Update template
* [ ] Update snapshot
* [ ] Update workflows
* [ ] Update forms
* [ ] Update testing
* [ ] Update training
* [ ] Update pricing assumptions
* [ ] Update scope boundaries
* [ ] Update decision log
* [ ] Version affected assets
* [ ] Test changes before the next client

---

# PART XI — LAUNCH BLOCKERS

## 52. Automatic No-Go Conditions

Do not launch when:

* [ ] Payment or subscription configuration is unresolved
* [ ] Client identity is unverified
* [ ] Required legal agreements are unavailable
* [ ] Critical consent language is unresolved
* [ ] Production build fails
* [ ] Secrets are exposed
* [ ] Cross-client isolation fails
* [ ] General Quote fails
* [ ] Emergency Request fails
* [ ] Forms route to the wrong GHL account
* [ ] Phone routing fails
* [ ] Emergency workflow promises dispatch
* [ ] Review workflow gates public reviews
* [ ] Client Onboarding is publicly exposed
* [ ] Material business information is false
* [ ] Client approval is missing
* [ ] SSL is invalid
* [ ] Canonical hostname is wrong
* [ ] Preview environment is indexable
* [ ] No rollback is available
* [ ] Severity 1 or Severity 2 defects remain

Unchecked boxes in this section indicate the condition is absent. Any confirmed condition requires a no-go decision.

---

## 53. Launch Sign-Off

### Product pilot approval

```text
Product owner:
Technical owner:
GHL owner:
Security reviewer:
Content and SEO reviewer:
Approval date:
```

### Client launch approval

```text
Client:
Authorized client approver:
Implementation owner:
Technical reviewer:
GHL reviewer:
Launch owner:
Approval date:
```

### Final status

```text
[ ] Approved for pilot
[ ] Approved for production
[ ] Conditionally approved
[ ] Not approved
```

### Conditions or notes

```text
____________________________________________________________

____________________________________________________________

____________________________________________________________
```

---

## 54. Checklist Completion Rule

This checklist is complete only when:

1. Every required item is marked.
2. Every `N/A` item has a reason.
3. Every blocker is resolved.
4. Required evidence is linked or recorded.
5. Client approval is documented.
6. The production release is recorded.
7. Post-launch verification is scheduled.
8. The decision log reflects material changes.
