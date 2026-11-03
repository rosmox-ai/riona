# Editorial redesign — current implementation direction

Approved request: keep the light theme and two fonts, but make the website richer and more detailed using the four supplied screenshots as visual references. This supersedes the earlier blanket exclusions of dropdown menus, multiple hero images, editorial demo content and SVG illustrations. It does not supersede the ban on invented company statistics and credentials.

## Implemented experience

- Sticky white header with Company, Our focus, Partnerships and Insights mega menus, plus Careers and a contact action. Each menu contains descriptions, meaningful destinations and an image feature. Mobile uses expandable groups.
- Three-scene photographic hero with distinct headings, descriptions and links. Manual previous/next and labelled selectors; optional timed playback, paused by focus/hover and disabled for reduced motion. No autoplay by default.
- White introductory editorial section and a quick-link strip.
- Four original SVG-illustrated focus cards in coordinated blue, green, lavender and warm neutral tones.
- Large photo/text quality section with a concise process narrative.
- Horizontal image-led journal: category, title, description, link and large photo. Touch/trackpad scrolling and arrow controls. Four complete demo perspective articles, not fictional company news or scientific results.
- Full-width cobalt people/purpose feature paired with illustrative photography.
- Partnership introduction, closing contact section and multi-column footer.
- Matching photographic interior heroes and complete Science, Quality, Careers and Insights pages.

## Navigation and routes

Company → `/about`, `/about#values`, `/careers`.
Our focus → `/portfolio`, `/science`, `/quality`.
Partnerships → `/partnerships`, `/partnerships#how-we-begin`, `/contact`.
Insights → `/insights` and its four article routes.

The focus/science/quality pages describe perspectives and aspirations, not unconfirmed manufacturing or research services. Careers describes intended culture; no vacancies or hiring claims are invented.

## Visual system

Keep Manrope and Inter. Retain white, mist, ink, cobalt and small teal accents. Supporting illustration colours create variation. Sharp photography, deliberate section contrast, mostly square media, consistent alignment and generous whitespace provide visual depth. Avoid empty image/editorial slots in the primary experience.

## Assets and demo boundaries

See `06-media-assets.md` for actual image dimensions, generation prompts and vector source. Imagery and copy remain visibly identified as demo material. No counts, badges, testimonials, market map, plant ownership or certification claims. Contact forms remain previews; no submission backend was added.

## Implementation map

- Homepage: `src/app/page.tsx`
- Header and menus: `src/components/layout/SiteHeader.tsx`
- Hero, journal, SVG artwork and focus cards: `src/components/brand/`
- Shared navigation and journal content: `src/content/editorial.ts`
- Responsive visual styles: `src/app/globals.css`
- Images: `public/images/`

The previous five-page limit is retired. New routes exist because the user explicitly asked for richer navigation and content. No investor, certification or manufacturing section should be added merely to imitate the reference sites.
