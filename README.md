# Su Shwe Sin Win Portfolio

A single-page developer portfolio for **Su Shwe Sin Win**, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

It presents selected work, technical skills, education, certifications, and contact links with responsive layouts and interactive visual effects.

## Highlights

- Sticky selected-work section with project previews
- Animated hero with rotating tech icons
- Desktop target cursor interaction
- Mobile contact drawer
- Responsive tech stack, education, and certification sections
- Static portfolio data extracted into a shared data module

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Motion / Effects | GSAP, OGL, custom CSS animations |
| Icons | lucide-react, react-icons, Hugeicons |
| UI primitives | radix-ui, vaul, shadcn utilities |

## Project Structure

```text
app/
  icon.svg          Site icon
  layout.tsx        Metadata, fonts, root layout
  page.tsx          Main portfolio page
  globals.css       Global styles and animations

components/
  portfolio-nav.tsx          Fixed nav and contact drawer
  selected-work-section.tsx  Sticky selected-work showcase
  TargetCursor.jsx           Custom cursor behavior
  SpotlightCard.jsx          Footer spotlight effect
  Ferrofluid.jsx             Background visual effect
  ui/                        Shared UI primitives

lib/
  portfolio-data.ts  In-memory portfolio content arrays
  utils.ts           Shared utility helpers

public/
  selected-work/    Project preview images
  certi/            Certification assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Create production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Customization

Most portfolio content lives in `lib/portfolio-data.ts`:

- `selectedWork` controls featured projects
- `techArsenal` controls the stack grid
- `education` controls education rows
- `certifications` controls certification cards
- `training` controls training rows
- `footerColumns` controls footer navigation links

Main page composition lives in `app/page.tsx`.

Reusable behavior lives in:

- `components/selected-work-section.tsx`
- `components/portfolio-nav.tsx`
- `components/TargetCursor.jsx`

## Build

Create a production build:

```bash
npm run build
```

The app is ready to deploy on any platform that supports Next.js, including Vercel.

## Next.js Note

This repo uses **Next.js 16**, which has API and convention changes. Before editing Next-specific behavior, check the local docs:

```text
node_modules/next/dist/docs/
```
