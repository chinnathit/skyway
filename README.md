# Skyway

An airline landing page demo with a quiet, editorial feel: warm whites, forest green, destination photography, and Lucide icons. Built to be a useful starting point for a travel website.

This is a fictional airline. Routes, fares, and service descriptions are illustrative. The site does not sell tickets, process payments, or retrieve live flight information.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Bun is also supported: run `bun install` and `bun run dev`.

```bash
npm run lint
npm run build
npm run start
```

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4 and custom responsive styles
- shadcn/ui-style Button and Tabs, using Radix primitives
- Lucide React icons
- Next Image with locally stored photography

The UI components live in the repository so their styling and behavior can be changed directly. `components.json` provides the shadcn configuration for adding more components.

## Where to make changes

| File                            | Purpose                                                   |
| ------------------------------- | --------------------------------------------------------- |
| `app/page.tsx`                  | Hero, destinations, experience, journal, and footer       |
| `app/globals.css`               | Colors, layout, breakpoints, hover states, reduced motion |
| `app/layout.tsx`                | Page title, description, and fonts                        |
| `components/site-header.tsx`    | Navigation and mobile menu                                |
| `components/booking-widget.tsx` | Booking tabs, airports, date, cabin, and demo feedback    |
| `components/ui/`                | Reusable Button and accessible Tabs                       |
| `public/images/`                | Local image assets                                        |

Edit the `destinations` array in `app/page.tsx` to change destination cards. Replace the image files or update the corresponding image paths. The new photographs are downloaded from Unsplash; source photo IDs are listed below.

| Asset        | Unsplash photo ID                  |
| ------------ | ---------------------------------- |
| `hero.jpg`   | `photo-1464822759023-fed622ff2c3b` |
| `kyoto.jpg`  | `photo-1493976040374-85c8e12f0c0e` |
| `bali.jpg`   | `photo-1537996194471-e657df975ab4` |
| `tromso.jpg` | `photo-1531366936337-7c912a4589a7` |
| `cabin.jpg`  | `photo-1540339832862-474599807836` |

## Demo interactions

The booking widget supports keyboard-accessible tabs, airport selection and swapping, one-way/return choices, a departure date, and traveler/cabin presets. Submission shows an inline demo message. Manage booking, check-in, and flight status accept example input and explain that live services are not connected. Navigation links lead to the relevant page sections.

To add real booking, replace the form submit handlers with your API integration and introduce return dates, separate passenger/cabin controls, validation, availability, and pricing. Keep credentials and payment processing on the server.

Animations respect `prefers-reduced-motion`. The layout adapts to mobile, tablet, and desktop screens.
