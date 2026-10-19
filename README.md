# Skyway

An airline website demo with the original GSAP airplane-window opening, inspired by the typography and motion of `portfolio-kinetic`.

The visual system uses charcoal backgrounds, a lime accent (`#e8ff3a`), Instrument Serif headings, and Inter body text. Fonts and photographs are served locally.

## Development

Use Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Bun is also supported with `bun install` and `bun run dev`.

```bash
npm run lint
npm run build
npm run start
```

## Project structure

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Original opening scene, GSAP timeline, booking panel, and section composition |
| `app/globals.css` | Shared colors and body typography |
| `app/kinetic.css` | Header, hero typography, booking panel, and destination introduction |
| `app/travel.css` | Responsive styles for the lower sections |
| `app/layout.tsx` | Local fonts and page metadata |
| `components/travel-sections.tsx` | Experience, cabin tabs, journal, FAQ, and footer; scoped scroll animations |
| `components/destination-explorer.tsx` | Destination image previews for hover, keyboard, and touch |
| `components/mobile-navigation.tsx` | Mobile menu with outside-click and Escape dismissal |
| `components/ui/` | Editable shadcn/ui-style Button and Radix Tabs |
| `lib/travel-content.ts` | Destination, fare, cabin, and FAQ content |

`components.json` configures shadcn components. The opening timeline remains independent of the new section animations: its pinned scroll, window scale, fade timing, and original images are preserved. Hero styling follows the shared theme.

The destination selector supports focus and touch as well as hover. Cabin tabs use Radix keyboard navigation, and FAQs use native disclosure elements. New scroll animations and image transitions respect reduced-motion preferences; the original opening animation retains its existing behavior.

## Demo scope

Skyway is fictional. Routes, fares, and cabin benefits are illustrative. The booking panel is a visual demo and does not process reservations, payments, check-in, or live flight information. Navigation and hero buttons link to the relevant sections.

To adapt the site, edit the shared color variables in `app/globals.css`, replace the content in `lib/travel-content.ts`, and connect the booking panel to your own service.

## Assets

The original mountain and window-mask images remain in `public/images/`. Additional downloaded Unsplash photographs are listed below.

| File | Unsplash photo ID |
| --- | --- |
| `kyoto.jpg` | `photo-1493976040374-85c8e12f0c0e` |
| `bali.jpg` | `photo-1537996194471-e657df975ab4` |
| `tromso.jpg` | `photo-1531366936337-7c912a4589a7` |
| `cabin.jpg` | `photo-1540339832862-474599807836` |

The Inter and Instrument Serif font files come from the local reference project. Their SIL Open Font License texts are included in `public/fonts/`.
