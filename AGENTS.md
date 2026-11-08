<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Ayush D Gupta & Associates

A marketing site for a Company Secretary firm in Mumbai. Design system codename **Bourse**
(markets-terminal: deep slate, one amber signal, Geist + Geist Mono, tabular figures).
Institutional and serious — **never** tech-startup/SaaS/crypto in tone or look.

**Read before working (in order):**
- `README.md` — stack, how to run, file map, env/deploy
- `PROGRESS.md` — **source of truth** for status, the full decision log, and placeholders
- `PRODUCT.md` — strategy, IA, design principles, scroll narrative
- `DESIGN.md` — the visual system (tokens, type, components, motion, as-built notes)
- `Website (1).md` — the client content brief (source copy + the 25 services); reference only

**Where things are** (full map in README):
- Content/data: `lib/` — `site.ts`, `services.ts` (incl. `law`), `service-content.ts`, `deadlines.ts`.
- Pages: `app/` — home + `about/ contact/ career/ insights/ services/` + `services/[slug]/`.
- Forms email endpoint: `app/api/enquiry/route.ts` (Resend; résumé = attachment, no storage).
- SEO: `app/sitemap.ts`, `app/robots.ts`.

**Current state (2026-07-09):** all pages + the 25 detail pages are built; forms work (need
`RESEND_API_KEY` to send, else WhatsApp fallback); SEO files done. **Functionality is complete;
a UI-polish pass is the next planned work** (see PROGRESS → "Known content polish"). Build is
green at 37 routes.

**Conventions**
- Stack: Next 16 App Router + React 19 + TS + Tailwind v4 (tokens in `app/globals.css` via
  `@theme`, no `tailwind.config`). No CMS — content is typed data in `lib/`.
- Fonts are **self-hosted** (no `next/font/google`): `geist` (Sans + Mono) + `Fraunces` variable
  serif via `next/font/local`. Utilities: `font-sans`, `font-mono`, `font-serif`.
- Use color **utilities** (`bg-surface`, `text-ink`, `text-signal`, `border-hairline`), never
  hex. `signal` = amber text/accent; `signal-solid` = amber fill. Amber is a scalpel.
- Mono (`font-mono`) names data (figures, labels, codes) — not decoration. No mono eyebrows
  above prose headings (two legacy ones remain in `capital-markets`/`principal` — remove in the
  UI pass, don't add more).
- **Typography (client revision 2026-11-08):** Fraunces for headings and the wordmark;
  Geist Sans for body/UI, Geist Mono for actual data. Body is 16px, introductions 18px.
- Theme defaults to light 06:00–18:00 local time and dark overnight; saved manual choices
  take precedence. Light uses `[data-theme=light]` — verify contrast in both (WCAG AA).
- Keep copy formal and statute-precise. No emoji, no gradients, no hero-metric boxes.
- **No new storage/services.** The stated constraint is a *single Next.js deployment*. Forms
  email through Resend; résumés pass through as attachments (never stored). Don't add a DB/bucket.
- After changes, run `npm run build` (it type-checks + lints + prerenders all routes).
- Update `PROGRESS.md` (status + decision log) when you finish a phase or make a real decision.

**Gotchas learned (don't rediscover):**
- `⌘`/emoji render as tofu on Linux/Windows → OS-aware key hint (`use-mod-key.ts`), inline-SVG
  icons, never emoji in UI.
- Do not construct a keyless Maps search iframe. Contact now uses the actual Google
  Share → Embed URL for the client-supplied Madhu Industrial Estate location, plus a
  working directions link. Office hours are intentionally omitted (client instruction).
- Hero image (`public/hero.jpg`) isn't committed yet → `hero-visual.tsx` shows a ruled-grid
  placeholder and auto-treats any photo to slate+amber duotone. Pick photos for composition.
- Static routes bake `new Date()` at **build time** — the calendar's "next upcoming" order and
  the footer year refresh on each deploy, not per-request.
