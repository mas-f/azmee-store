# AGENTS.md — Azmee Store

## Project

Indonesian Muslim fashion e-commerce landing page plus one detail page per product. React SPA with a small custom router, no backend logic in repo.

## Stack

- React 18, TypeScript, Vite 5, Tailwind CSS 3
- Supabase client installed but not actively used yet
- Lucide React for icons
- Language: Indonesian (id)

## Commands

```bash
npm run dev          # Vite dev server
npm run build        # production build
npm run typecheck    # tsc --noEmit -p tsconfig.app.json
npm run lint         # eslint .
npm run preview      # preview production build
```

No test suite exists. No CI workflows.

## Path alias

`@/` maps to `src/`. Use it for all imports: `import { X } from '@/components/X'`. Configured in both `vite.config.ts` and `tsconfig.app.json`.

## Tailwind conventions

Custom colors are defined in `tailwind.config.js` under `theme.extend.colors`:
- `coksu` (50–950 scale) — primary brown palette
- `cream`, `beige`, `offwhite`, `charcoal` — semantic surface/text colors

Use these instead of raw hex. Animations `fade-up` and `fade-in` are also custom.

## Routing

`src/lib/router.tsx` — custom `pushState` router: `RouterProvider`, `useRouter`, and `Link`. No `react-router` dependency. Routes:

- `/` — landing page (`src/pages/Home.tsx`)
- `/produk/<slug>` — product detail (`src/pages/ProductDetail.tsx`)
- anything else — `src/pages/NotFound.tsx`

`npm run build` also renders every route to static HTML via `src/entry-server.tsx` + `scripts/prerender.mjs` (per-page title, description, canonical, OG tags, Product JSON-LD). Add new products in `content.ts` and their URLs in `public/sitemap.xml`.

## Content/data

All product data, testimonials, FAQ, pricing, and navigation live in `src/data/content.ts`. Components are presentation-only; data is not fetched from APIs. Each product carries its gallery, structured description blocks, specs, and size chart; `storePromises` is shared across detail pages.

## Scroll reveal

`src/components/Reveal.tsx` + `src/hooks/useReveal.ts` implement Intersection Observer-based fade-in animations. The `.reveal` class is defined in `src/index.css`. Respects `prefers-reduced-motion`.

## Component structure

`App.tsx` is the shell: skip link → Navbar → route view → Footer, plus per-route meta sync. The landing page composition lives in `src/pages/Home.tsx`: Hero → ProblemSection → ValueProposition → ProductCatalog → SocialProof → PricingPackages → Testimonials → FAQ → FinalCTA. All section components are in `src/components/`; detail-page pieces are `ProductGallery`, `Lightbox`, `SizeGuide`, and `PurchaseBar`.

## Gotchas

- `index.html` lang is `id`, not `en`.
- `src/main.tsx` only hydrates when `<div id="root" data-route>` matches the current path; on a mismatch it clears the markup and client-renders. `scripts/prerender.mjs` writes that attribute per page, so unknown paths served as `index.html` never log hydration errors.
- `optimizeDeps.exclude` includes `lucide-react` — intentional for tree-shaking.
- `noUnusedLocals` and `noUnusedParameters` are disabled in tsconfig — don't re-enable without team buy-in.
- No `.env` file exists. Supabase dependency is present but no env vars are configured.
