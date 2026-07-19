# Plumber Growth System — Design System

## Document Control

| Field | Value |
|---|---|
| Project | Plumber Growth System |
| Document | Design System |
| Document ID | 06-design-system |
| Version | 1.0 |
| Status | Draft for Approval |
| Parent Documents | 00-project-overview.md through 05-technical-architecture.md |
| Design Model | Reusable plumbing-industry system with client brand customization |
| Accessibility Target | WCAG 2.2 AA practices |

---

## 1. Purpose

This document defines the reusable visual and interaction system for Plumber Growth System websites.

The design system must:

- Look credible for professional plumbing companies
- Support client branding without requiring redesign
- Prioritize calls and service requests
- Work well on mobile devices
- Communicate urgency without creating panic
- Support accessible forms
- Maintain consistent components
- Protect performance
- Scale across service and location pages
- Avoid generic website-template aesthetics

---

## 2. Design Direction

The default visual direction is:

- Professional
- Dependable
- Local
- Skilled
- Practical
- Clean
- Modern
- Direct
- Service-oriented

The website should resemble a well-operated local service company—not a technology startup, luxury lifestyle brand, or aggressive lead-generation funnel.

### Desired customer impression

A visitor should quickly feel:

- This is a legitimate plumbing company.
- This company serves my area.
- This company provides the service I need.
- I can call or request help easily.
- The process is clear.
- The business appears trustworthy.
- My request will reach a real company.

---

## 3. Design Principles

### 3.1 Clarity before decoration

Service, location, availability, and contact actions must be immediately understandable.

### 3.2 Mobile-first conversion

Many plumbing visitors will be using a phone while dealing with an active problem. Mobile layouts must prioritize:

- Readability
- Call access
- Request-service access
- Short paths
- Large controls
- Fast loading

### 3.3 Urgency without manipulation

Emergency plumbing content may use stronger contrast and direct language, but must not use:

- Fake countdown timers
- False scarcity
- Flashing warnings
- Fabricated availability
- Excessive red
- Fear-based claims

### 3.4 Trust through specificity

Use verified information such as:

- License details
- Service areas
- Business history
- Reviews
- Warranties
- Real company photography
- Clear processes

Do not compensate for missing proof with visual badges that imply unsupported credentials.

### 3.5 One reusable system

Client customization should change the brand expression, not rebuild component behavior for every customer.

---

## 4. Brand Customization Model

The template supports controlled customization through design tokens.

### Client-configurable brand properties

- Primary color
- Primary dark color
- Secondary color
- Accent color
- Logo
- Wordmark
- Approved font preference
- Border-radius style
- Photography
- Icon treatment

### Fixed system properties

The following should remain standardized unless a separately scoped redesign is approved:

- Spacing scale
- Layout grid
- Breakpoints
- Form behavior
- Accessibility patterns
- Navigation behavior
- Error behavior
- Focus styles
- Page-template structure
- Core component anatomy

### Brand validation

Client colors must be tested for:

- Text contrast
- Button contrast
- Link visibility
- Focus visibility
- Hover states
- Disabled states
- Dark-background usage

If a client brand color fails accessibility requirements, generate or select an accessible functional variant.

---

## 5. Default Color Direction

The default template should use a trustworthy plumbing-oriented palette.

### Suggested foundation

| Token | Default direction | Purpose |
|---|---|---|
| Primary | Deep navy | Brand authority, navigation and primary text |
| Secondary | Service blue | Links, secondary actions and informational elements |
| Accent | Warm amber | Important highlights and conversion emphasis |
| Surface | White | Primary reading surface |
| Surface alternate | Cool light gray | Section separation |
| Text | Near-black navy | Primary body content |
| Muted text | Slate gray | Supporting content |
| Success | Accessible green | Successful submissions and confirmed states |
| Warning | Accessible amber | Caution and pending states |
| Danger | Accessible red | Errors and genuine safety warnings |

### Default reference values

These values are starting points, not a client brand:

```css
:root {
  --color-primary-50: #eef5ff;
  --color-primary-100: #d9e9ff;
  --color-primary-500: #1463b8;
  --color-primary-600: #0f4f94;
  --color-primary-700: #123f70;
  --color-primary-800: #12345a;
  --color-primary-900: #102b49;

  --color-accent-400: #f5b942;
  --color-accent-500: #e9a51c;
  --color-accent-600: #c9830d;

  --color-neutral-0: #ffffff;
  --color-neutral-50: #f7f9fc;
  --color-neutral-100: #edf1f5;
  --color-neutral-200: #d8e0e8;
  --color-neutral-500: #657283;
  --color-neutral-700: #384657;
  --color-neutral-900: #172332;

  --color-success-600: #18794e;
  --color-warning-600: #9a6700;
  --color-danger-600: #b42318;
}
```

Final color combinations must be validated, not assumed accessible from token names alone.

---

## 6. Semantic Color Tokens

Components should use semantic variables rather than raw brand values.

```css
:root {
  --color-background: var(--color-neutral-0);
  --color-background-alt: var(--color-neutral-50);
  --color-surface: var(--color-neutral-0);
  --color-surface-strong: var(--color-primary-900);

  --color-text: var(--color-neutral-900);
  --color-text-muted: var(--color-neutral-700);
  --color-text-inverse: var(--color-neutral-0);

  --color-border: var(--color-neutral-200);
  --color-border-strong: var(--color-neutral-500);

  --color-link: var(--color-primary-600);
  --color-link-hover: var(--color-primary-800);

  --color-action: var(--color-primary-600);
  --color-action-hover: var(--color-primary-700);
  --color-action-text: var(--color-neutral-0);

  --color-accent: var(--color-accent-500);
  --color-focus: var(--color-accent-400);

  --color-success: var(--color-success-600);
  --color-warning: var(--color-warning-600);
  --color-danger: var(--color-danger-600);
}
```

---

## 7. Color Usage Rules

### Primary color

Use for:

* Main navigation
* Primary buttons
* Links
* Section headings
* Brand accents
* Icons

### Accent color

Use sparingly for:

* Important callouts
* Small highlights
* Selected states
* Conversion emphasis
* Focus treatment when accessible

Do not use the accent color for large amounts of body text unless contrast is verified.

### Red

Use only for:

* Validation errors
* Safety warnings
* Genuine emergency messaging
* Destructive actions

Do not make the entire website red because plumbing emergencies are offered.

### Status colors

Never communicate status through color alone. Pair colors with:

* Text
* Icons
* Labels
* Accessible announcements

---

## 8. Typography

### Typography direction

Typography should be:

* Highly readable
* Strong without feeling aggressive
* Professional
* Compact enough for mobile
* Distinct between headings and body content
* Efficient to load

### Recommended default

Use one variable sans-serif family where licensing and performance permit.

Potential options:

* Geist
* Inter
* Source Sans 3
* System UI stack

The final font must be:

* Self-hosted or loaded through a performance-conscious method
* Licensed appropriately
* Configured with fallbacks
* Tested for layout shift
* Legible at small sizes

### Default font stack

```css
--font-sans:
  "Inter",
  "Segoe UI",
  Roboto,
  Helvetica,
  Arial,
  sans-serif;
```

### Heading style

Headings should use:

* Strong weight
* Tight but readable line height
* Limited line length
* Clear hierarchy

Avoid all-uppercase paragraphs and overly condensed display fonts.

---

## 9. Type Scale

Use a fluid scale with conservative maximum sizes.

```css
:root {
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: clamp(1.5rem, 2vw, 1.875rem);
  --font-size-3xl: clamp(1.875rem, 3vw, 2.5rem);
  --font-size-4xl: clamp(2.25rem, 5vw, 3.75rem);
}
```

Recommended usage:

| Element         | Size       |
| --------------- | ---------- |
| Utility text    | XS or SM   |
| Body            | Base       |
| Lead paragraph  | LG         |
| Card title      | XL         |
| Section heading | 2XL or 3XL |
| Page H1         | 3XL or 4XL |

Body text should generally remain at least 16px.

---

## 10. Line Height and Measure

```css
:root {
  --line-height-tight: 1.15;
  --line-height-heading: 1.25;
  --line-height-body: 1.6;
  --line-height-loose: 1.75;

  --measure-narrow: 42rem;
  --measure-reading: 68ch;
  --measure-wide: 78rem;
}
```

Long-form body content should generally remain within 60–75 characters per line.

---

## 11. Spacing Scale

Use a consistent spacing scale based on a 4px foundation.

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

Avoid arbitrary one-off spacing unless required by a documented layout exception.

---

## 12. Layout System

### Page width

```css
:root {
  --container-sm: 42rem;
  --container-md: 64rem;
  --container-lg: 75rem;
  --container-xl: 84rem;
}
```

### Container behavior

* Center content
* Maintain responsive side padding
* Avoid edge-to-edge body text
* Allow controlled full-width backgrounds
* Keep primary content within readable bounds

### Suggested page padding

```css
--page-gutter: clamp(1rem, 4vw, 2rem);
```

### Section spacing

Use generous but controlled vertical rhythm.

Recommended:

* Mobile: 48–64px
* Tablet: 64–80px
* Desktop: 80–96px

Conversion sections may be more compact when urgency warrants.

---

## 13. Grid System

Use CSS Grid and Flexbox rather than a rigid twelve-column dependency.

Standard responsive patterns:

* Single-column mobile
* Two-column tablet and desktop
* Three-card desktop grids
* Four-card grids only when content remains readable
* Sidebar layouts only when they improve task completion

Cards in a row should align visually without forcing excessive equal-height whitespace.

---

## 14. Breakpoint Strategy

Use content-driven breakpoints.

Suggested starting points:

```css
--breakpoint-sm: 30rem;
--breakpoint-md: 48rem;
--breakpoint-lg: 64rem;
--breakpoint-xl: 80rem;
```

Components should adapt based on available space rather than device labels.

---

## 15. Border Radius

Default direction:

```css
:root {
  --radius-sm: 0.375rem;
  --radius-md: 0.625rem;
  --radius-lg: 1rem;
  --radius-pill: 999px;
}
```

Recommended use:

* Form fields: small
* Buttons: medium
* Cards: medium or large
* Status badges: pill
* Large sections: avoid excessive rounding

Client branding may select a square, balanced, or rounded style within controlled limits.

---

## 16. Shadows

Use shadows sparingly.

```css
:root {
  --shadow-sm: 0 1px 2px rgb(15 23 42 / 0.08);
  --shadow-md: 0 8px 24px rgb(15 23 42 / 0.10);
  --shadow-lg: 0 18px 48px rgb(15 23 42 / 0.14);
}
```

Use:

* Small shadow for cards
* Medium shadow for menus and elevated forms
* Large shadow only for important overlays

Do not rely on shadows as the only boundary between elements.

---

## 17. Motion

Motion must be restrained and purposeful.

Use motion for:

* Menu opening
* Disclosure expansion
* Form-state transitions
* Subtle hover feedback

Avoid:

* Constant animation
* Parallax
* Auto-playing decorative movement
* Bouncing calls to action
* Flashing emergency elements

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  /* Remove or reduce nonessential animation. */
}
```

---

## 18. Iconography

Use one consistent icon family.

Icons should be:

* Simple
* Recognizable
* Visually balanced
* Accompanied by labels when meaning is not universal
* Hidden from assistive technology when decorative

Useful icons include:

* Phone
* Calendar
* Message
* Location
* Wrench
* Water drop
* Shield
* Star
* Clock
* Check
* Warning

Avoid combining multiple unrelated icon styles.

---

## 19. Photography

### Preferred images

Use:

* Real plumbers
* Real company vehicles
* Real team photographs
* Plumbing work environments
* Professional equipment
* Residential and commercial service contexts
* Local community imagery where appropriate

### Image direction

Images should feel:

* Authentic
* Professional
* Clean
* Competent
* Local
* Service-oriented

### Avoid

* Obvious generic stock poses
* Fake uniforms with unreadable logos
* Unsafe work practices
* Overly staged handshake imagery
* Graphic property damage
* Images implying services the client does not offer
* AI-generated text, licenses, badges, or vehicle branding
* Unverified team representations

Client-provided photographs must be reviewed for quality, permission, and accuracy.

---

## 20. Logo Treatment

The header logo area must:

* Support horizontal logos
* Support compact marks
* Preserve aspect ratio
* Prevent layout shift
* Maintain sufficient contrast
* Provide appropriate alternative text

Do not:

* Stretch the logo
* Apply unapproved effects
* place dark logos on dark backgrounds
* Make the logo the dominant mobile element

Provide a text-based business-name fallback when an approved logo is unavailable.

---

## 21. Header Component

### Desktop anatomy

* Logo
* Primary navigation
* Phone number
* Request Service button

Optional utility row:

* Business hours
* Service-area statement
* Verified emergency availability

### Mobile anatomy

* Logo
* Call action
* Menu trigger
* Request Service action where space permits

### Behavior

* Sticky positioning may be used when it does not consume excessive viewport height
* The mobile menu must be accessible
* Dropdowns must support keyboard navigation
* Current-page state must be communicated
* Header height should remain stable

---

## 22. Mobile Conversion Bar

A mobile bottom action bar may provide:

* Call Now
* Request Service

Add Emergency Request only when the client offers verified emergency service and the layout remains understandable.

Requirements:

* Respect safe-area insets
* Not obscure form controls
* Not cover cookie or consent controls
* Use large touch targets
* Remain accessible by keyboard
* Avoid appearing on Client Onboarding when inappropriate

---

## 23. Button System

### Variants

* Primary
* Secondary
* Outline
* Text
* Danger
* Inverse

### Sizes

* Small
* Medium
* Large

### Minimum interaction size

Target at least 44×44 CSS pixels for important touch controls.

### Button states

Every button must support:

* Default
* Hover
* Focus-visible
* Active
* Disabled
* Loading

### Primary button

Use for the most important action in a section.

Examples:

* Request Service
* Submit Request
* Schedule Request

### Secondary button

Use for:

* Call Now
* View Services
* Learn More

Do not place multiple visually equal primary buttons in the same small decision area.

---

## 24. Link System

Links must:

* Be distinguishable from ordinary text
* Have visible hover and focus states
* Use descriptive language
* Avoid “click here”
* Maintain adequate contrast
* Communicate external behavior when necessary

Body-content links should normally use underlines.

Navigation links may rely on placement and state styling.

---

## 25. Card System

### Card types

* Service card
* Review card
* Benefit card
* Process card
* Location card
* Credential card
* FAQ preview card
* Contact-method card

### Standard anatomy

* Optional icon or image
* Heading
* Concise description
* Optional metadata
* Clear action

### Card behavior

Do not make an entire card clickable when it contains multiple interactive controls.

If the whole card is linked:

* Use valid semantic structure
* Provide a visible focus state
* Avoid nested interactive elements

---

## 26. Hero System

### Homepage hero

Recommended layout:

* Content and actions on one side
* Authentic company or service image on the other
* Trust indicators below or within the content area

Required content:

* One H1
* Supporting statement
* Primary action
* Secondary call action
* Verified service-area context

### Internal page hero

Use a more compact layout containing:

* Breadcrumbs
* H1
* Short introduction
* Relevant action
* Optional supporting image

### Emergency hero

May use stronger warning treatment but must remain calm and readable.

---

## 27. Trust Components

Potential trust components include:

* License number
* Insured or bonded status
* Verified years in business
* Review source and count
* Warranty
* Financing provider
* Service-area statement
* Association membership

Every displayed trust element must be verified.

Do not use decorative trust seals that imitate official certification.

---

## 28. Form Design System

### Form layout

Use:

* One-column layout for most forms
* Two-column grouping only for closely related short fields
* Clear section headings for long forms
* Progressive disclosure when useful
* Logical tab order

### Field anatomy

Each field may include:

* Label
* Required indicator
* Control
* Optional hint
* Error message

### Labels

Labels must:

* Remain visible
* Be programmatically associated
* Describe the expected value
* Not rely on placeholders

### Placeholders

Placeholders may provide examples but must not replace labels.

### Inputs

Inputs should provide:

* Large touch area
* Clear border
* Visible focus state
* Appropriate autocomplete attributes
* Appropriate input mode
* Appropriate keyboard type on mobile

### Error behavior

Errors must:

* Appear near the relevant field
* Be summarized at the top when submission fails
* Use text, not color alone
* Move or manage focus appropriately
* Preserve valid entered values

### Success behavior

A successful submission should:

* Clearly confirm receipt
* Explain what happens next
* Provide the business phone number
* Avoid guaranteeing response or dispatch
* Trigger analytics only after server acceptance

---

## 29. General Quote Form Pattern

Recommended sections:

1. Contact information
2. Service details
3. Property location
4. Scheduling preference
5. Contact preference
6. Consent
7. Submission

Keep the form concise enough for mobile completion.

---

## 30. Emergency Request Form Pattern

The emergency form must:

* Display a safety notice before the fields
* Ask urgency questions early
* Use high-contrast but calm warning styles
* Keep the call action visible
* Make gas-odor guidance immediately noticeable
* Avoid long marketing content
* Avoid implying technician dispatch

The submit button should say:

> Submit Emergency Request

It should not say:

* Dispatch a Plumber
* Get Immediate Service
* Technician on the Way

---

## 31. Review Feedback Form Pattern

The rating control must:

* Be keyboard accessible
* Have clear labels
* Avoid icons without accessible names
* Accept all ratings neutrally
* Avoid visual manipulation toward positive ratings

Testimonial consent must be separate from permission to contact.

The public-review option must remain available regardless of rating.

---

## 32. Client Onboarding Form Pattern

The form should use clearly separated sections:

1. Business
2. Contacts
3. Branding
4. Services
5. Service areas
6. Credentials
7. Website content
8. Technical information
9. Integrations
10. Approval

Requirements:

* Save-and-return behavior should be evaluated because the form is long
* Do not request passwords
* Explain secure access-sharing methods
* Show progress
* Preserve data safely
* Avoid exposing onboarding content publicly

---

## 33. Alerts and Status Messages

### Information

Use for:

* Process explanations
* General service notices

### Success

Use for:

* Accepted form submissions
* Completed actions

### Warning

Use for:

* Scheduling limitations
* Incomplete information
* Potential delays

### Danger

Use for:

* Validation failures
* Gas odor warnings
* Immediate safety guidance
* Failed form delivery

Alerts must include:

* Clear heading where helpful
* Concise description
* Appropriate icon
* Textual status
* Accessible announcement behavior

---

## 34. Emergency Safety Component

Create one reusable emergency safety component.

Potential content categories:

* Gas odor
* Fire
* Electrical hazard
* Serious injury
* Immediate danger to life or property

The component must support client-specific verified wording while maintaining mandatory safety limitations.

It must not provide repair instructions.

---

## 35. FAQ Component

Use an accessible disclosure pattern.

Requirements:

* Native `details` and `summary` where appropriate, or an equally accessible implementation
* Keyboard support
* Visible focus
* Stable layout
* Deep linking if useful
* No unnecessary animation

Do not collapse essential emergency instructions inside an accordion.

---

## 36. Review Component

Review cards should include, when verified:

* Customer name or approved attribution
* Review text
* Review source
* Date, if appropriate
* Rating, if legitimately provided

Do not:

* Invent reviewer photos
* Alter the meaning
* Combine reviews
* Display ratings without a source
* Publish private feedback without consent

---

## 37. Service Process Component

Recommended steps:

1. Request service
2. Company reviews the request
3. Appointment or next step is confirmed
4. Plumbing service is performed
5. Follow-up and feedback

The exact process must reflect the client’s operations.

Do not state that an appointment is confirmed immediately unless the system actually confirms it.

---

## 38. Empty and Conditional States

Components must handle missing client data safely.

Examples:

* Hide financing when unavailable
* Hide commercial services when not offered
* Hide emergency action when not offered
* Hide license display when not verified
* Hide review count when unavailable
* Omit location pages without sufficient content

Do not display:

* Empty cards
* “Coming soon” sections
* Zero-review placeholders
* Fake demonstration information

---

## 39. Responsive Requirements

### Mobile

Prioritize:

* Call and request actions
* Single-column content
* Short paragraphs
* Large controls
* Simplified navigation
* Minimal visual obstruction

### Tablet

Support:

* Two-column sections
* Larger service grids
* Balanced form layouts

### Desktop

Support:

* Wider navigation
* Two-column heroes
* Three-card grids
* Enhanced supporting content

No viewport should require horizontal scrolling at normal zoom.

---

## 40. Accessibility Requirements

The design system must support:

* Semantic landmarks
* Logical headings
* Keyboard navigation
* Focus-visible styling
* Skip link
* Accessible menu behavior
* Sufficient contrast
* Form labels
* Error associations
* Live-region announcements
* Reduced motion
* Touch targets
* Zoom up to at least 200%
* Reflow at narrow widths
* Meaningful alternative text

Accessibility must be validated in implementation, not assumed from the design tokens.

---

## 41. Performance Requirements

The design system must avoid:

* Large UI libraries without clear need
* Excessive animation dependencies
* Unoptimized images
* Multiple unnecessary font families
* Icon fonts
* Layout shifts from missing dimensions
* Large decorative videos
* Blocking third-party scripts

Prefer:

* CSS
* Inline SVG icons
* Optimized images
* One font family
* Static content
* Reusable components
* Progressive enhancement

---

## 42. Component Naming

Use clear functional component names.

Examples:

```text
SiteHeader
SiteFooter
MobileNavigation
MobileActionBar
PageHero
ServiceCard
ServiceGrid
ReviewCard
ReviewGrid
TrustBar
ProcessSteps
ServiceAreaList
CallToAction
EmergencySafetyAlert
GeneralQuoteForm
EmergencyRequestForm
ContactForm
ReviewFeedbackForm
WebsiteOnboardingForm
FormErrorSummary
```

Avoid vague names such as:

```text
BoxOne
SectionThing
BlueArea
CardNew
ComponentFinal
```

---

## 43. Design-System Acceptance Criteria

The design system is approved when:

1. Client branding can be applied through tokens.
2. Client colors are validated for functional contrast.
3. Typography remains readable on mobile.
4. Navigation supports keyboard and touch use.
5. Forms use persistent labels and accessible errors.
6. Emergency messaging is clear without manipulation.
7. Buttons have complete interaction states.
8. Cards use consistent anatomy.
9. Conditional client data does not leave empty sections.
10. Motion respects user preferences.
11. Component styling does not depend on scattered client-specific values.
12. The design can support all page templates defined in the information architecture.
13. The system avoids unnecessary performance costs.
14. Review presentation remains accurate and policy compliant.
15. No visual element implies an unverified license, guarantee, review, or availability claim.

---

## 44. Open Design Decisions

The following require approval during implementation:

* Final default font
* Final styling approach
* Default logo dimensions
* Exact header behavior
* Mobile action-bar behavior
* Default hero composition
* Final icon library
* Final image aspect ratios
* Client radius customization range
* Whether dark mode provides customer value
* Whether the onboarding form requires save-and-return
* Exact form progress treatment
* Final default color values after contrast testing

---

## 45. Next Document

The next project document is:

`07-content-and-seo-strategy.md`

It will define:

* Brand voice
* Plumbing content standards
* Page-level search intent
* Keyword research process
* Entity strategy
* Local SEO
* Service content
* Service-area content
* FAQs
* Internal linking
* Structured data
* Conversion copy
* Content verification
* AI and LLM search readiness
