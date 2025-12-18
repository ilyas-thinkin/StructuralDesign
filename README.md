## Getting Started

1. Install dependencies with `npm install`.
2. Run the development server with `npm run dev` and open [http://localhost:3000](http://localhost:3000).
3. Edit the marketing pages in `src/app` and components in `src/components`.

## SEO

- Global metadata, Open Graph, and Twitter cards are defined in `src/app/layout.tsx` using reusable values from `src/lib/seo.ts`.
- Dynamic service pages generate per-service Open Graph/Twitter metadata in `src/app/services/[slug]/page.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` create a sitemap and robots.txt at build time, pulling slugs from `src/data/servicesData.ts`.
- A PWA/SEO manifest is provided via `src/app/manifest.ts` and references the brand icons in `public/icon-192.svg`, `public/icon-512.svg`, and `public/og-default.svg`.

## Deploying to Vercel

- The project uses a static export (`output: 'export'` in `next.config.ts`). Running `npm run build` produces the `out/` directory.
- `vercel.json` is configured for Vercel’s static build (`@vercel/static-build`) with `out/` as the dist directory, so connecting this repo to Vercel or running `vercel` locally will publish the pre-rendered site.
- Dynamic service routes are statically generated via `generateStaticParams`, so all service detail pages are included in the export and sitemap.
