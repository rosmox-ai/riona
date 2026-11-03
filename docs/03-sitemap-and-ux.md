# 03 · Sitemap, Page Blueprints and UX

> **Current direction:** The image-led redesign requested on 4 November supersedes conflicting simplifications below. See [Editorial redesign](05-editorial-redesign.md) and [Media assets](06-media-assets.md) for the implemented navigation, hero, imagery, SVGs and expanded routes. Startup fact constraints and two-font limit remain in force.

This replaces the earlier large-company launch plan. Section IDs correspond to the revised content files.

## 1. Audience and objective

Provisional primary audience: prospective business contacts and partners. Confirm whether Riona primarily serves distributors, healthcare organisations, pharmaceutical companies or another customer group.

Primary task: understand what Riona offers and make an enquiry. Secondary tasks: learn about the company and find appropriate contact information. Do not build around assumed regulators, global investors or a large recruitment programme.

## 2. Focused launch sitemap

| Route | Purpose | Dependency |
|---|---|---|
| `/` | Clear introduction, offering preview, approach, enquiry | Business positioning confirmed |
| `/about` | Purpose, values and actual team/company information | Approved company description |
| `/portfolio` | Offerings overview | Confirm whether products, services or both; rename if needed |
| `/partnerships` | Types of conversations welcomed and contact path | Actual partnership models confirmed |
| `/contact` | Enquiry and verified contact details | Recipient and delivery process confirmed |
| `/legal/privacy-policy` | Actual data practices | Approved policy |
| `/legal/terms-of-use` | Website terms | Approved text |
| `/accessibility` | Accessibility support and known limitations | Actual evaluation and contact |

Five primary pages plus utility pages. Additional pages must earn their place through real content; there is no launch page-count target.

Conditional, not launch commitments: product details/finder, science, manufacturing/quality, sustainability, careers, newsroom, safety reporting, HCP resources and cookie policy/settings. Their content files are retained as optional material. No investor section, global map, milestone timeline or leadership directory by default.

## 3. Navigation

Primary: About · Our offerings · Partnerships · Contact, with one primary **Start a conversation** action. Home is accessible through the logo. Final offering label follows the confirmed business model.

Use simple links and a compact mobile menu. No mega menu, search palette, utility bar or sticky partner strip unless later content needs justify them. Footer: concise positioning, essential links, verified contact details and legal links. Safety reporting must be easy to find if applicable and operational.

## 4. Page blueprints

### Home

| ID | Section | Structure |
|---|---|---|
| HOME-01 | Hero | Brand name, one headline, brief factual introduction, primary enquiry CTA, secondary offering link, optional approved image |
| HOME-02 | Who we are | Short introduction and About link |
| HOME-03 | Our focus | Up to three actual offering categories; omit unsupported categories |
| HOME-04 | Our approach | Quality, communication and collaboration expressed as commitments, not invented performance results |
| HOME-05 | Company story | One substantial team/purpose story; no fictional case study; optional until supplied |
| HOME-06 | Conversation | Short invitation to contact, followed by footer |

No statistics band, approval strip, customer logo wall, international map or automated news carousel. Do not leave empty placeholders where removed sections used to be.

### About

ABOUT-01 introduction → ABOUT-02 purpose → ABOUT-03 values → ABOUT-04 optional real team material → ABOUT-05 enquiry link. No invented founding date, origin story, career history or leadership quotation.

### Offerings (`/portfolio`, provisional label)

PORT-01 introduction → PORT-02 confirmed categories/products → PORT-03 enquiry → PORT-04 applicable information notice. For the design review use visibly labelled category slots; do not invent a medicine catalogue. Detail templates and filtering only follow sufficient approved content.

### Partnerships

PART-01 introduction → PART-02 confirmed collaboration types → PART-03 simple enquiry process → PART-04 optional factual FAQ → PART-05 short form or Contact link. No testimonial, numerical proof or response-time guarantee without approval.

### Contact

CONTACT-01 introduction → CONTACT-02 name/email/topic/message form → CONTACT-03 verified contact methods. Company and phone optional where useful. One screen, not a multi-step funnel. Marketing subscription is excluded by default.

## 5. Forms and demo behaviour

During concept review, forms are non-submitting and clearly labelled. No emails, file uploads, health data or personal data are collected. Demo status must not claim an enquiry was sent.

Before activation, define recipient, purpose, required fields, retention, access, spam controls, failure handling and privacy notice. Success appears only after server acceptance; provide an honest failure state. Avoid promising a response deadline until the company commits to one. A capability deck is optional and should be directly downloadable if supplied; no default lead gate.

## 6. Product information, privacy and safety

These are requirements to resolve with the company and its qualified reviewers, not a declaration of compliance.

- Confirm actual products, markets and intended audiences before deciding public/restricted content.
- A self-declaration modal does not verify professional status or secure content. If restriction is required, specify server-side access and handling of direct documents, search indexes and caches.
- If Riona needs adverse-event intake, establish the responsible team, monitored channels, escalation, secure storage, access and retention before activating a form. Keep it separate from general marketing enquiries.
- Do not invent a safety phone number, 24-hour availability, office, licence or grievance officer.
- Privacy notices must reflect the actual services and processing. A cookie banner is conditional on the technologies used; it is not proof of compliance.
- Legal applicability and wording require review against current authoritative material. Reference: [MeitY DPDP Rules resource](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digit).

## 7. Implementation direction — later phase

Next.js App Router with TypeScript; CSS-variable tokens and Tailwind if useful; typed content files initially. Use accessible native HTML and add tested primitives where interaction requires them. Avoid adding motion, search, form or CMS libraries before their need is established.

Plan page titles, descriptions, canonical URLs and sitemap from approved content. Structured data must describe actual visible information; no fictional products, jobs or news. Demo previews should use access protection and noindex; noindex alone is not access control.

Performance aspirations: mobile LCP under 2.5 s, CLS under 0.1 and INP under 200 ms. Record measurement conditions and distinguish lab checks from field evidence. Prefer a lightweight page over a complex animation budget.

## 8. Before development

1. Confirm business category, principal customer and real offering.
2. Approve page scope and content labels.
3. Compare two visual directions on desktop and mobile.
4. Select one direction and test its homepage/interior-page compositions.
5. Confirm image sources, demo handling and form behaviour.
6. Only then implement the approved direction and validate accessibility, responsive behaviour, content and performance.
