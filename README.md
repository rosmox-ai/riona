# Riona Life Science website

Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Planning docs live in [`docs/`](docs/README.md); build phases in [`docs/04-build-phases.md`](docs/04-build-phases.md).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run lint
```

## Where things are

| Path | Contents |
|---|---|
| `src/content/site.ts` | Brand, navigation, offerings, form endpoint and the fact register |
| `src/content/pages/*.ts` | Page copy (demo wording from `docs/content/`) |
| `src/app/globals.css` | Design tokens and type scale |
| `src/components/` | Layout, sections and the contact form |

## Preview mode

`site.isPreview` is `true`. While it is:

- every page shows the design-preview label and is marked `noindex`; `robots.txt` disallows everything;
- labelled editorial slots and notes stand in for unconfirmed offerings, images, contacts and legal text;
- the contact form validates but never sends anything.

## Going live

1. Fill `site.facts` (legal name, domain, email, phone, address) with approved values only.
2. Add confirmed items to `site.offerings` and `site.partnershipTypes`.
3. Replace image slots with approved photography.
4. Supply approved privacy, terms and accessibility text in `src/content/pages/legal.ts`.
5. Set `site.forms.enquiryEndpoint` once the recipient, retention and failure handling are agreed.
6. Set `site.isPreview` to `false`. Unconfirmed sections and notes are then omitted automatically.
