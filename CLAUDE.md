# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for **Din Feiring** — rental of party tents, tables, chairs and sound equipment in Sandefjord, Norway. All user-facing copy is Norwegian (Bokmål, `lang="no"`). Keep new copy Norwegian unless explicitly asked otherwise.

## Commands

```bash
npm install          # install deps (Node >=18)
npm run dev          # Vite dev server on 0.0.0.0:3000
npm run build        # production build
npm run preview      # serve the built bundle
npm run lint         # eslint . --ext js,jsx --max-warnings 0
```

There is no test runner configured. `tsconfig.json` exists but the source is plain `.jsx` (`allowJs: true`); do not introduce `.ts/.tsx` without a reason.

`vite.config.js` honors `DISABLE_HMR=true` to turn HMR off — this is set in AI Studio to prevent file-watch flicker during agent edits. Don't remove it.

`.env.local` holds `VITE_CONTACT_ENDPOINT` and `VITE_CONTACT_ACCESS_KEY` (Web3Forms) used by the quote/contact form. See `.env.example`.

## Architecture

**Stack:** Vite + React 18 (JSX only), React Router v7, react-helmet-async, Tailwind v3, lucide-react, motion (Framer Motion successor). Deployed on Vercel.

**Entry & shell:** `src/main.jsx` mounts `<HelmetProvider><App/></HelmetProvider>`. `src/App.jsx` wraps everything in `<Router basename={import.meta.env.BASE_URL}>` plus `ScrollToTop`, `CookieConsent`, `Navbar`, a lazy-loaded `<Routes>` block with `Suspense` fallback, and `Footer`. Every page module is `lazy()`-imported — keep new pages on that pattern so the initial bundle stays small.

**Routes are Norwegian slugs.** Examples: `/partytelt`, `/bord-og-stoler`, `/partytelt-bryllup`, `/partytelt-konfirmasjon`, `/produkter/:id`, `/hvor-stort-partytelt`, `/artikler/:slug`, `/kalkulator`, `/kontakt`, `/leievilkar`, `/personvern`. Several legacy slugs are 301-redirected at two layers — keep them in sync:
- Client-side `<Navigate replace>` in `App.jsx` (so SPA links don't 404 mid-session).
- Server-side `redirects` in `vercel.json` (so the same URLs resolve correctly on a cold load and for SEO).
- Add new public URLs to `public/sitemap.xml` as well.

**SEO is centralized.** Every page renders `<SEO …/>` (`src/components/SEO.jsx`) which uses `react-helmet-async` to inject title, meta, canonical, OG/Twitter tags and one or more JSON-LD blocks. URL-shaped JSON-LD fields are auto-resolved against `DEFAULT_SITE_URL` via helpers in `src/lib/seo.js` (`URL_LIKE_KEYS`, `resolveCurrentUrl`, `serializeJsonLd`). Pass relative paths in `jsonLd`/`canonical`/`ogImage`; the helpers will absolutize them. New pages must include `<SEO>` with at minimum `title`, `description`, and a `path` or `canonical`.

**Content data lives in `src/data/`** and is the source of truth for the product catalog (`produkter.js`, includes `companyInfo`), SEO-driven landing pages (`seoLandingPages.js` — FAQ, sections, hero copy used by the Partytelt/Bord landing pages), articles (`artikler.js`, used by `/artikler` and `/artikler/:slug`), and the bigger `partyteltPageContent.js`. Images are imported from `src/images/` so Vite fingerprints them — don't hard-code `/src/images/...` paths in JSX.

**Styling.** Tailwind is configured (`tailwind.config.cjs`, `postcss.config.cjs`) but most layout is hand-rolled CSS in `src/index.css` (~90KB of design-system classes like `section`, `container`, `app-shell`, etc.). Prefer reusing those classes and the existing component primitives (`SectionIntro`, `Eyebrow`, `FadeIn`, `ArticleCard`, `ProduktKort`) over introducing new Tailwind utilities or new one-off CSS. See `AGENTS.md` and `ai.md` for the team's UI/UX rubric — they describe the expected snapshot/review loop, breakpoint checks (1440/1024/768/390), and "done" criteria.

**Hosting quirks.**
- `vercel.json` rewrites `/(.*)` → `/index.html` (SPA fallback) and sets long-cache headers on `/assets/*` and `/logo.png`. The `404.html` and the `index.html` redirect-shim script are there so GitHub Pages-style fallbacks also resolve deep links.
- `index.html` initializes Google Analytics (`G-PJR6N81493`) with consent-mode default `denied`; `CookieConsent.jsx` is what flips storage to granted. Don't fire analytics events before consent.
