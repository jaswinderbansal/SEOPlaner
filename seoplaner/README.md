# SEOPlaner

A mobile-friendly Next.js 14 (App Router) marketing site for SEOPlaner, an IT services agency
focused on SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build
npm start
```

## What's included

- **Next.js App Router + TypeScript + Tailwind CSS**, fully server-rendered for crawlability.
- **Pages**: Home, Services (overview + SEO / AEO / GEO / Content Strategy detail pages),
  Case Studies (index + dynamic detail pages), Blog (index + dynamic detail pages), About, Contact.
- **SEO plumbing**: per-page metadata (`generateMetadata`), canonical URLs, Open Graph + Twitter
  cards, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`.
- **Structured data (JSON-LD)** for AEO/GEO: `ProfessionalService`/Organization schema sitewide,
  `Service` schema on each service page, `Article` schema on blog posts and case studies, and
  `FAQPage` schema wherever an FAQ block appears.
- **AI-crawler-friendly `robots.ts`**: explicitly allows GPTBot, PerplexityBot, Google-Extended,
  ClaudeBot, and OAI-SearchBot in addition to standard search crawlers.
- **Mobile-first responsive design** with a custom Tailwind token set (see `tailwind.config.ts`)
  and an accessible mobile nav (`components/Header.tsx`).

## Before you launch

1. Replace placeholder contact details (`hello@seoplaner.com`, phone number) throughout.
2. Add real images to `/public`: `og-image.png` (1200×630), `logo.png`, `icon-192.png`, `icon-512.png`.
3. Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts` if the domain changes from
   `https://www.seoplaner.com`.
4. Wire `components/ContactForm.tsx` to a real backend (e.g. an API route at
   `app/api/contact/route.ts`, or a service like Resend/Formspree) — it currently only
   simulates a successful submission client-side.
5. Swap the sample content in `lib/blog.ts` and `lib/case-studies.ts` for real posts and results.
6. Add real backlinks/social profiles to the `sameAs` array in `app/layout.tsx`.
7. Run Lighthouse / PageSpeed Insights after deploying and address any flagged Core Web Vitals.

## Why this structure supports SEO / AEO / GEO

- **SEO**: static generation + clean URLs + sitemap/robots + semantic HTML + Core Web Vitals-friendly
  defaults (no client-side-only rendering for content).
- **AEO**: FAQ sections with `FAQPage` schema on the homepage and every blog post, answer-first
  copy patterns (claim → specific supporting fact) in blog content.
- **GEO**: consistent facts/terminology across the site, `Service`/`Article` schema so generative
  engines can parse a clear, structured version of each page, and an explicit robots policy that
  invites AI crawlers instead of blocking them.
