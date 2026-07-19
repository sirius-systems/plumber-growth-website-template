# Plumber Growth System — Website Information Architecture

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Website Information Architecture |
| Document ID | 04-website-information-architecture |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Documents | 00-project-overview.md through 03-ideal-customer-profile.md |
| Website Framework | Next.js |
| Hosting | Cloudflare Pages |
| CRM and Automation | GoHighLevel |

---

## 1. Purpose

This document defines the structural organization of the reusable Plumber Growth System website.

It establishes:

- Route hierarchy
- Navigation
- Page purposes
- Search intent
- Conversion intent
- Page relationships
- Internal linking
- Form placement
- Service-area architecture
- Indexation rules
- Sitemap behavior
- Template requirements

The website must serve users first while providing a clear, crawlable structure for search engines and answer systems.

---

## 2. Information Architecture Principles

The website architecture must:

1. Make urgent plumbing contact options easy to find.
2. Help visitors identify the relevant service quickly.
3. Separate emergency requests from ordinary quote requests.
4. Connect service pages to verified service areas.
5. Give every indexable page a distinct purpose.
6. Avoid thin or duplicate location pages.
7. Keep navigation understandable on mobile devices.
8. Support local SEO without keyword-stuffed architecture.
9. Direct visitors toward calls, service requests, or appropriate supporting information.
10. Allow client-specific services and pages to be enabled through configuration.
11. Keep legal and onboarding pages outside the primary sales journey.
12. Support future expansion without changing the foundational URL system.

---

## 3. URL Standards

Use:

- Lowercase URLs
- Hyphen-separated words
- Descriptive permanent slugs
- HTTPS
- One canonical hostname
- Consistent trailing-slash behavior
- No unnecessary query parameters in canonical URLs
- No dates in evergreen service URLs
- No unsupported city or service combinations

Examples:

```text
/services/drain-cleaning/
/services/water-heater-repair/
/service-areas/
/request-service/
```

Avoid:

```text
/plumbing-service-1/
/best-cheap-plumber-city-state/
/services?id=123
/emergency-plumbing-near-me/
```

---

## 4. Primary Route Hierarchy

```text
/
├── services/
│   ├── emergency-plumbing/
│   ├── drain-cleaning/
│   ├── water-heater-repair/
│   ├── water-heater-installation/
│   ├── leak-detection/
│   ├── pipe-repair/
│   ├── sewer-line-repair/
│   ├── toilet-repair/
│   ├── faucet-repair/
│   └── garbage-disposal-repair/
├── residential-plumbing/
├── commercial-plumbing/
├── service-areas/
│   └── [approved-location]/
├── about/
├── reviews/
├── financing/
├── faqs/
├── contact/
├── request-service/
├── emergency-plumbing-request/
├── review-feedback/
├── client-onboarding/
├── privacy-policy/
├── terms/
└── thank-you/
```

Not every client must publish every optional route.

Routes must be controlled through client configuration and verified service information.

---

## 5. Global Navigation

## 5.1 Header navigation

Recommended desktop navigation:

1. Services
2. Residential
3. Commercial
4. Service Areas
5. About
6. Reviews
7. FAQs
8. Contact

Primary action:

* Request Service

Secondary action:

* Call Now

If the client legitimately offers emergency service, provide an emergency action without implying guaranteed 24-hour availability unless verified.

## 5.2 Services dropdown

The services menu should be generated from enabled services in client configuration.

Potential entries:

* Emergency Plumbing
* Drain Cleaning
* Water Heater Repair
* Water Heater Installation
* Leak Detection
* Pipe Repair
* Sewer Line Repair
* Toilet Repair
* Faucet Repair
* Garbage Disposal Repair
* View All Services

Do not display service links for services the client does not offer.

## 5.3 Mobile navigation

Mobile navigation must:

* Be keyboard accessible
* Trap focus appropriately when open
* Close with Escape
* Restore focus to the trigger
* Display essential navigation without excessive nesting
* Keep call and request-service actions accessible
* Avoid covering critical emergency information

## 5.4 Footer navigation

Recommended footer groups:

### Plumbing Services

Enabled core services.

### Company

* About
* Reviews
* FAQs
* Contact
* Financing, when applicable

### Service Areas

Primary approved locations plus a link to the Service Areas hub.

### Customer Actions

* Request Service
* Emergency Request
* Leave Feedback
* Call Now

### Legal

* Privacy Policy
* Terms and Conditions

Client Onboarding should not appear in the public footer unless required. It should normally be accessed through a direct secure link.

---

## 6. Homepage

### Route

`/`

### Purpose

Introduce the plumbing company, communicate its primary services and service area, establish credibility, and direct visitors toward the appropriate conversion action.

### Primary search intent

* Plumber in the client’s primary market
* Plumbing company in the client’s primary market
* Local plumbing services

### Primary conversion

* Call the company
* Request plumbing service

### Secondary conversions

* View services
* Submit an emergency request
* Review credentials
* Read reviews
* View service areas

### Required sections

1. Hero
2. Primary services
3. Credibility indicators
4. Customer problems addressed
5. Why choose the company
6. Service process
7. Emergency-service section when applicable
8. Residential and commercial pathways
9. Service-area summary
10. Reviews
11. Frequently asked questions
12. Request-service call to action

### Hero requirements

The hero should include:

* Clear H1
* Verified location or service-area context
* Short value proposition
* Call action
* Request-service action
* Trust indicators supported by client data

Do not overload the hero with every service or unverified claim.

---

## 7. Services Hub

### Route

`/services/`

### Purpose

Organize all verified plumbing services and help users find the correct service page.

### Primary search intent

* Plumbing services
* Local plumbing services
* Residential and commercial plumbing services

### Primary conversion

* Choose a service
* Request service

### Required sections

1. Service overview
2. Enabled service categories
3. Emergency-service guidance
4. Residential services
5. Commercial services when applicable
6. Service process
7. Service-area summary
8. FAQs
9. Request-service call to action

The hub must add value beyond repeating service-card excerpts from the homepage.

---

## 8. Service Page Template

### Route pattern

`/services/[service-slug]/`

### Purpose

Explain one verified plumbing service and convert service-specific visitors.

### Required content

* Unique H1
* Customer problem and symptoms
* Service explanation
* Situations requiring professional help
* Client-specific capabilities
* Service process
* Related services
* Service-area context
* Relevant FAQs
* Call action
* Request-service action

### Primary conversion

* Request the specific service
* Call the plumbing company

### Form behavior

Buttons should route to the General Plumbing Quote Request form with the service preselected.

Example:

```text
/request-service/?service=drain-cleaning
```

The server must validate the value instead of trusting the query parameter.

### Internal links

Every service page should link to:

* Services hub
* Related services
* Residential or commercial hub where relevant
* Service Areas hub
* Request Service
* Relevant FAQs

### Content requirements

Each service page must answer questions specific to that service. Do not create pages by changing only the service name.

---

## 9. Emergency Plumbing Service Page

### Route

`/services/emergency-plumbing/`

### Purpose

Explain the client’s verified emergency plumbing capabilities.

This page is distinct from the Emergency Plumbing Request form.

### Primary search intent

* Emergency plumber
* Emergency plumbing service
* Urgent plumbing repair

### Required content

* What the company considers an emergency
* Services actually available
* Verified availability
* Immediate safety limitations
* What information to prepare
* What happens after contact
* Emergency Request action
* Call action

### Safety requirement

The page must advise users to contact the appropriate emergency service or utility provider when there is an immediate threat involving:

* Gas odor
* Fire
* Electrical danger
* Serious injury
* Life safety
* Severe property danger

Do not claim 24/7 service unless verified.

---

## 10. Residential Plumbing Hub

### Route

`/residential-plumbing/`

### Purpose

Organize homeowner-focused services and explain the company’s residential capabilities.

### Primary search intent

* Residential plumber
* Home plumbing services
* Local residential plumbing company

### Required sections

* Residential service overview
* Common home plumbing problems
* Enabled residential services
* Service process
* Homeowner FAQs
* Service-area summary
* Request-service call to action

Publish only if residential plumbing is offered.

---

## 11. Commercial Plumbing Hub

### Route

`/commercial-plumbing/`

### Purpose

Explain verified commercial plumbing capabilities and supported property types.

### Primary search intent

* Commercial plumber
* Commercial plumbing services
* Business plumbing repair

### Required sections

* Commercial service overview
* Supported facility types
* Relevant services
* Scheduling considerations
* Maintenance or ongoing support, if offered
* Credentials
* Service areas
* Commercial request call to action

Publish only if commercial plumbing is genuinely offered.

Do not claim industrial, municipal, medical, or specialized capabilities without verification.

---

## 12. Service Areas Hub

### Route

`/service-areas/`

### Purpose

Explain the company’s legitimate geographic coverage and link to approved location pages.

### Required sections

* Primary service region
* Cities or communities served
* Travel or availability limitations
* Services available by area when they differ
* Location links
* Request-service call to action

### Configuration requirements

Each service area must support:

* Location name
* State
* ZIP codes, when appropriate
* Services available
* Emergency availability
* Office or service-area distinction
* Unique local information
* Indexation status

Do not imply a physical office where none exists.

---

## 13. Location Page Template

### Route pattern

`/service-areas/[location-slug]/`

### Publication standard

A location page may be indexed only when it contains meaningful information about:

* Actual service availability
* Local service conditions
* Neighborhoods or ZIP codes
* Relevant plumbing concerns
* Client experience in the area
* Location-specific processes
* Applicable local credentials or regulations
* Unique FAQs
* Appropriate calls to action

### Do not publish when

* Only the city name changes
* The client does not serve the area
* The page implies a nonexistent office
* The page has no location-specific value
* The location information cannot be verified

### Initial launch recommendation

Launch with:

* Service Areas hub
* Primary-market location page
* Only additional locations with sufficient verified content

Avoid launching dozens of location pages during the first version.

---

## 14. About Page

### Route

`/about/`

### Purpose

Establish company identity, experience, values, credentials, and local relevance.

### Required content

* Company story
* Owner or leadership information
* Verified experience
* Service philosophy
* Credentials
* Team information when available
* Community connection
* Call to action

Avoid generic claims such as “best plumber” unless substantiated.

---

## 15. Reviews Page

### Route

`/reviews/`

### Purpose

Present legitimate customer experiences and explain how customers can provide honest feedback.

### Required content

* Verified testimonials
* Review-source attribution when appropriate
* Public review link
* Private feedback link
* Reputation standards
* Request-service call to action

### Schema restrictions

Do not add aggregate ratings or review schema unless the data and page satisfy applicable eligibility requirements.

---

## 16. Financing Page

### Route

`/financing/`

### Publication rule

Publish only when financing is genuinely offered through a verified provider.

### Required content

* General financing availability
* Eligible service types
* Application process
* Required disclosures
* Provider information
* Terms disclaimer
* Contact action

Do not fabricate rates, approvals, payment amounts, or eligibility.

If financing is not offered, omit the route and navigation item.

---

## 17. FAQ Page

### Route

`/faqs/`

### Purpose

Answer common questions about services, scheduling, estimates, emergencies, payments, warranties, and service areas.

### FAQ categories

* General plumbing
* Emergency service
* Appointments
* Estimates
* Residential plumbing
* Commercial plumbing
* Water heaters
* Drains and sewer lines
* Service areas
* Payments and financing
* Warranties
* Customer communication

### Requirements

* Answers must be accurate for the specific client
* Avoid legal or safety overreach
* Link answers to relevant service pages
* Use FAQ structured data only when appropriate
* Do not duplicate every FAQ across multiple pages

---

## 18. Contact Page

### Route

`/contact/`

### Purpose

Provide verified business contact information and a general communication path.

### Required content

* Business name
* Phone
* Email
* Address or appropriate service-area statement
* Hours
* General Contact Form
* Emergency guidance
* Service-request link
* Map only when appropriate

The Contact Form is not the preferred path for detailed service requests.

---

## 19. Request Service Page

### Route

`/request-service/`

### Purpose

Host the General Plumbing Quote Request form.

### Indexation

Indexing may be permitted when the page contains useful explanatory content. If the page is primarily a form with little standalone value, consider `noindex, follow`.

### Required content

* What information to provide
* Expected next step
* Availability disclaimer
* General Plumbing Quote Request form
* Emergency-request link
* Call option
* Privacy and consent disclosure

### Service preselection

The page may accept an approved service query parameter and preselect the appropriate service.

---

## 20. Emergency Plumbing Request Page

### Route

`/emergency-plumbing-request/`

### Purpose

Host the Emergency Plumbing Request form.

### Indexation

Recommended:

* `noindex, follow`

The service-focused emergency page should target search intent. The form page should prioritize safe conversion.

### Required content

* Immediate safety warning
* No-guaranteed-response disclosure
* Emergency Plumbing Request form
* Call option
* Utility and emergency-service direction
* Privacy and consent disclosure

---

## 21. Review Feedback Page

### Route

`/review-feedback/`

### Purpose

Collect private service feedback while offering a neutral public-review path.

### Indexation

Recommended:

* `noindex, follow`

### Required content

* Review Feedback Form
* Honest-feedback language
* Testimonial consent
* Public-review option available regardless of rating
* Privacy disclosure

---

## 22. Client Onboarding Page

### Route

`/client-onboarding/`

### Purpose

Collect implementation information from paying SaaS customers.

### Indexation

Required:

* `noindex, nofollow`

### Navigation

Do not include in public navigation.

### Access

Production implementation should use a secure or tokenized access method.

### Required content

* Onboarding explanation
* Website Onboarding Form
* File-upload guidance
* Password prohibition
* Access-sharing instructions
* Next-step expectations

---

## 23. Thank-You Page

### Route

`/thank-you/`

### Purpose

Provide a controlled conversion confirmation.

### Indexation

Required:

* `noindex, follow`

### Requirements

The page should vary its message using a safe, approved submission type.

It must not expose submitted personal data through the URL.

Potential confirmation types:

* General quote received
* Emergency request received
* Contact message received
* Feedback received
* Onboarding received

Emergency confirmation must not imply dispatch.

---

## 24. Privacy Policy

### Route

`/privacy-policy/`

### Purpose

Explain data collection, use, sharing, retention, communications, analytics, and customer rights.

### Requirements

The policy must account for:

* Website forms
* Cloudflare
* GoHighLevel
* Communications
* Analytics
* Turnstile
* File uploads if enabled
* Third-party processors
* Client-specific business practices

Legal review is required before commercial launch.

---

## 25. Terms and Conditions

### Route

`/terms/`

### Purpose

Provide the website-use terms and relevant service limitations.

This public website document is distinct from the SaaS subscription agreement.

Legal review is required.

---

## 26. Form Placement Strategy

### General Plumbing Quote Request

Primary location:

* `/request-service/`

Supporting calls to action:

* Homepage
* Services hub
* Service pages
* Residential hub
* Commercial hub
* Service-area pages

### Emergency Plumbing Request

Primary location:

* `/emergency-plumbing-request/`

Supporting calls to action:

* Emergency Plumbing service page
* Homepage emergency section
* Mobile emergency action
* Relevant service pages

### Contact Form

Primary location:

* `/contact/`

### Review Feedback Form

Primary location:

* `/review-feedback/`

### Website Onboarding Form

Primary location:

* `/client-onboarding/`

Do not duplicate entire forms across many pages when a focused conversion page and preselected context can accomplish the same goal.

---

## 27. Internal-Linking Model

```text
Homepage
├── Services Hub
│   ├── Individual Service Pages
│   ├── Residential Plumbing
│   └── Commercial Plumbing
├── Service Areas Hub
│   └── Approved Location Pages
├── About
├── Reviews
├── FAQs
└── Request Service
```

### Required linking relationships

#### Homepage links to

* Services hub
* Priority service pages
* Residential or commercial hub
* Service Areas hub
* About
* Reviews
* FAQs
* Request Service

#### Services hub links to

* Every enabled service
* Residential Plumbing
* Commercial Plumbing
* Service Areas
* Request Service

#### Service pages link to

* Services hub
* Related services
* Relevant audience hub
* Service Areas
* Request Service
* Relevant FAQs

#### Location pages link to

* Services available in that location
* Service Areas hub
* About
* Reviews
* Request Service

#### FAQ answers link to

* Relevant service pages
* Request Service
* Contact

Internal links must be contextually useful and use natural anchor text.

---

## 28. Breadcrumbs

Use breadcrumbs on:

* Service pages
* Location pages
* Other nested pages where helpful

Example:

```text
Home > Services > Drain Cleaning
```

Breadcrumb structured data must match visible breadcrumbs.

---

## 29. Indexation Rules

| Page type                | Default directive             |
| ------------------------ | ----------------------------- |
| Homepage                 | index, follow                 |
| Services hub             | index, follow                 |
| Qualified service pages  | index, follow                 |
| Residential hub          | index, follow                 |
| Commercial hub           | index, follow when applicable |
| Service Areas hub        | index, follow                 |
| Qualified location pages | index, follow                 |
| About                    | index, follow                 |
| Reviews                  | index, follow                 |
| Financing                | index, follow when applicable |
| FAQs                     | index, follow                 |
| Contact                  | index, follow                 |
| Request Service          | Conditional                   |
| Emergency Request        | noindex, follow               |
| Review Feedback          | noindex, follow               |
| Client Onboarding        | noindex, nofollow             |
| Thank You                | noindex, follow               |
| Privacy Policy           | index, follow                 |
| Terms                    | index, follow                 |

Preview and staging deployments must not be indexable.

---

## 30. XML Sitemap Rules

Include only canonical, indexable URLs.

Exclude:

* Client Onboarding
* Thank You
* Review Feedback
* Emergency Request
* Preview routes
* Disabled services
* Unapproved location pages
* Redirected URLs
* Duplicate URLs
* Error pages

The sitemap must use the production hostname from client configuration.

---

## 31. Structured Data Map

| Page type                  | Potential schema                                |
| -------------------------- | ----------------------------------------------- |
| Homepage                   | WebSite, Organization, Plumber or LocalBusiness |
| Services hub               | CollectionPage, BreadcrumbList                  |
| Service page               | Service, WebPage, BreadcrumbList                |
| Residential/Commercial hub | CollectionPage, BreadcrumbList                  |
| Service Areas hub          | CollectionPage, BreadcrumbList                  |
| Location page              | WebPage, Service, BreadcrumbList                |
| About                      | AboutPage                                       |
| Reviews                    | WebPage; review markup only when eligible       |
| FAQs                       | FAQPage only when supported and appropriate     |
| Contact                    | ContactPage                                     |
| Other standard pages       | WebPage                                         |

All structured data must:

* Match visible content
* Use verified information
* Avoid fabricated ratings
* Avoid unsupported service areas
* Use the correct canonical URL
* Remain configurable per client

---

## 32. Page Template System

The codebase should provide reusable templates for:

* Core marketing page
* Services hub
* Service detail
* Residential or commercial hub
* Service Areas hub
* Location detail
* FAQ page
* Contact page
* Form page
* Legal page
* System confirmation page

Templates should accept structured data and reusable sections rather than duplicate page code.

---

## 33. Client Configuration Requirements

Each route must be configurable as:

* Enabled
* Disabled
* Indexable
* Non-indexable
* Navigation-visible
* Sitemap-visible

Configuration must prevent links to disabled routes.

Service and location data should control:

* Page creation
* Navigation
* Internal links
* Sitemap entries
* Form options
* Structured data

---

## 34. Content Governance

Before publishing a client site:

* Verify every service
* Verify every service area
* Verify emergency availability
* Verify hours
* Verify contact information
* Verify licenses
* Verify financing
* Verify warranties
* Verify reviews
* Verify business address
* Confirm whether the address may be displayed
* Obtain content approval

Unverified placeholder data must never reach production.

---

## 35. Information Architecture Acceptance Criteria

The architecture is approved when:

1. Every route has a distinct purpose.
2. Navigation reflects enabled client services.
3. Emergency service content and the emergency form remain separate.
4. Native Next.js forms have defined destinations.
5. Client onboarding is excluded from public navigation and search.
6. Thin location pages are prevented.
7. Disabled routes do not appear in navigation or the sitemap.
8. Internal-linking relationships are documented.
9. Canonical and indexation rules are defined.
10. Structured data maps to appropriate page types.
11. Mobile navigation supports primary conversions.
12. The architecture can be generated from structured client data.
13. The base-plan page allowance is enforced separately from the template’s full capabilities.

---

## 36. Open Decisions

The following still require approval:

* Exact number of service pages included at launch
* Whether Commercial Plumbing is included by default
* Number of location pages included at $297
* Whether Request Service should be indexed
* Secure access method for Client Onboarding
* File-upload architecture
* Final trailing-slash behavior
* Final route-generation mechanism
* Whether financing is part of the base template
* Whether client-specific blog capability will be introduced later

---

## 37. Next Document

The next project document is:

`05-technical-architecture.md`

It will define:

* Next.js application architecture
* Static-generation strategy
* Cloudflare Pages deployment
* Cloudflare Pages Functions
* Form endpoint design
* GHL integration layer
* Client configuration
* Environment variables
* Security boundaries
* Repository structure
* Testing architecture
* Deployment environments
* Logging and monitoring
