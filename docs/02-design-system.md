# 02 · Brand and Design System

> **Current direction:** The image-led redesign requested on 4 November supersedes conflicting simplifications below. See [Editorial redesign](05-editorial-redesign.md) and [Media assets](06-media-assets.md) for the implemented navigation, hero, imagery, SVGs and expanded routes. Startup fact constraints and two-font limit remain in force.

Working direction for a newly established Riona Life Science. Palette is provisional until brand assets arrive.

## 1. Light theme

Use white as the main background, with occasional off-white surfaces and a dark footer. White is a suitable design choice here, not a guarantee of trust or readability for every user. Hierarchy, contrast and execution matter more than fixed background percentages.

| Role | Value | Usage |
|---|---|---|
| White | `#FFFFFF` | Main canvas, forms and reading surfaces |
| Mist | `#F4F6F9` | Selected secondary sections |
| Ink | `#0A1A2F` | Headings, footer, occasional emphasis |
| Body | `#465264` | Body copy |
| Secondary | `#5E6B7D` | Captions and secondary copy |
| Border | `#D6DCE4` | Decorative separators; not sufficient alone for essential control boundaries |
| Cobalt | `#1E47C8` | Primary buttons and links on white |
| Cobalt hover | `#1A3AA3` | Primary action hover |
| Light cobalt | `#8AA9FA` | Links on Ink |
| Cobalt tint | `#EEF3FF` | Quiet selected surfaces |
| Teal | `#12B5A4` | Small decorative accents only |
| Deep teal | `#0B7A6F` | Optional accent text on white |
| Error | `#C2362B` | Error text with an explicit message |

Do not use bright teal for small text on white. Validate actual foreground/background combinations, focus indicators and controls during design QA; a palette alone does not establish WCAG conformance. No mandatory gradient bands, colour quotas or dark sections on every page.

## 2. Typography: exactly two families

| Role | Family | Weights |
|---|---|---|
| Headings and display | Manrope | 500, 600, 700 |
| Body, navigation, labels, forms and captions | Inter | 400, 500, 600 |

No Newsreader, JetBrains Mono, decorative italic heading words or numbered scientific labels. Load only necessary weights and subsets. Plain labels use Inter; factual tables can use its tabular figures if needed.

| Role | Desktop | Mobile | Line height |
|---|---|---|---|
| Home display | 64–72 px | 38–44 px | 1.08 |
| Page title | 48–56 px | 34–38 px | 1.12 |
| Section title | 32–40 px | 26–30 px | 1.2 |
| Card title | 22–24 px | 20–22 px | 1.3 |
| Lead | 19–20 px | 18 px | 1.6 |
| Body | 17 px | 16 px | 1.65 |
| Caption / label | 14 px | 14 px | 1.5 |

Use fluid sizes and test long titles. Body width: roughly 60–68 characters. Do not equate a visual size token with a specific heading level.

## 3. Layout

- Maximum content width: 1280 px; intentional wide imagery may extend further.
- Page padding: 20–24 px on mobile, 32–40 px on tablet, up to 64 px on desktop.
- Desktop grid: 12 columns; collapse according to content rather than device labels alone.
- Section spacing: roughly 80–112 px desktop, 48–64 px mobile, adjusted for density.
- Use a mix of editorial image/text layouts and a few purposeful cards. Avoid putting every paragraph inside a rounded box.
- Radius: 8 px controls, 12–20 px cards and media. Buttons use one consistent 8 px radius.
- Subtle borders; shadows reserved for overlays or a small hover cue.

## 4. Art direction

The recognisable identity should come from composition, photography and consistent typography. Molecular lattices, glass effects and decorative laboratory graphics are not default brand assets.

Explore two compositions before implementation:
1. Editorial: generous headline, distinctive image crop, open layouts and substantial whitespace.
2. Structured corporate: compact introduction, clear offering blocks and disciplined alignment.

Both use the same two fonts and provisional palette. Review a homepage and an interior page at desktop and mobile widths.

## 5. Imagery

Prioritise approved photographs of the actual team, workplace and products where available. Do not assume a plant or laboratory exists. Prepare the shot list only after confirming the business model.

Licensed stock may be used for concept review. Record source and licence and identify it as illustrative. Never caption a stock laboratory as Riona's facility. Avoid fabricated buildings, certificates, customer portraits, glowing flasks and generic handshake imagery.

A still hero image is the default. Video is optional only when relevant, licensed and performant; provide a poster, pause control and reduced-motion alternative. No essential information should exist only in video.

## 6. Interaction

Native browser scrolling. No Lenis, pinned sequences, scroll-linked word reveals, animated molecular patterns or count-up metrics in the initial scope.

Use 150–250 ms control transitions and, optionally, subtle entrance motion that never hides essential content when scripts fail. Respect reduced motion. Prefer straightforward links over external-link interstitials unless a particular destination needs one.

## 7. Core components

Header, accessible mobile menu, button/link styles, section heading, editorial image/text section, offering card, simple enquiry form, optional FAQ, footer and accessible form status messages.

Add product filtering, tabs, search, portals or mega menus only when confirmed content volume warrants them. A sticky enquiry bar is not part of the launch default.

## 8. Accessibility and performance

Target WCAG 2.2 AA with contrast verification, keyboard access, visible focus, skip link, semantic headings, labelled controls and clear error messages. Aim for 44 px touch areas; ensure sticky elements do not obscure content or focus. Test zoom and narrow screens.

Use responsive images with explicit dimensions. Do not preload unnecessary fonts or video. Essential content must render without animation scripts. Assess the final design on mobile with measured performance; do not claim certification or accessibility compliance before evaluation.
