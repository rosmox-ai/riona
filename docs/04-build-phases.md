# 04 · Build Phases

Implementation plan derived from docs 01–03 and the content files. Each phase ends with a working, buildable site.

**Status (4 November 2026):** phases 1–6 implemented in preview mode. Remaining work depends on client-supplied facts — see "Going live" in the project README.

Demo rules from `content/00-content-guidelines.md` apply throughout: preview label visible, forms non-submitting, noindex, no invented facts.

## Phase 1 · Foundation

- Next.js App Router, TypeScript, Tailwind CSS v4, ESLint.
- Design tokens from `02-design-system.md` as CSS variables mapped into Tailwind (colours, radii, fluid type scale, container and section spacing).
- Manrope (500/600/700) and Inter (400/500/600) through `next/font`, Latin subset only.
- Single typed site config (`src/content/site.ts`) holding brand, navigation, footer and the fact register; no facts hard-coded in components.
- Root layout: metadata title pattern, noindex for previews, skip link, design-preview banner, header, footer.
- Header with accessible mobile menu (button with `aria-expanded`, Escape to close, 44 px targets).
- Footer (Ink background) with positioning, links and copyright using the placeholder owner.
- Primitives: `Container`, `Section`, `SectionHeading`, `Button`/`ButtonLink`, `Eyebrow`.
- Shared `Invitation` (reusable conversation block) and custom 404.
- Temporary home page exercising the primitives.

## Phase 2 · Home page

- HOME-01 hero with still illustrative image slot (licensed, captioned as illustrative).
- HOME-02 who we are, HOME-03 focus (labelled editorial slots), HOME-04 approach, HOME-06 invitation.
- HOME-05 omitted until real team material exists.
- Editorial image/text component and offering card component.

## Phase 3 · Interior pages

- `/about` (ABOUT-01–05), `/portfolio` (PORT-01–04), `/partnerships` (PART-01–05 with optional native `<details>` FAQ).
- Shared page hero component; per-page metadata.

## Phase 4 · Contact and forms

- `/contact` with name / email / topic / message / company (optional).
- Client-side validation with the approved error copy, accessible error summary and live status region.
- Demo mode only: submission shows the demo status message and sends nothing.

## Phase 5 · Legal and utility

- `/legal/privacy-policy`, `/legal/terms-of-use`, `/accessibility` as outlined templates with visible pending-approval notes.
- `sitemap.ts` and `robots.ts` (disallow all while in preview), Open Graph defaults.

## Phase 6 · QA and hardening

- Keyboard, focus, zoom and narrow-screen checks; contrast checks of real combinations.
- Reduced-motion check, Lighthouse lab run on mobile with conditions recorded.
- Launch checklist from `00-content-guidelines.md` tracked as open items.

## Conditional (not scheduled)

Product detail/finder, science, manufacturing/quality, sustainability, careers, updates, safety intake, HCP resources and cookie settings — only after real content and operational owners exist.
