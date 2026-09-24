# Ayush D Gupta & Associates — website

Marketing + lead-generation site for a peer-reviewed Company Secretary firm in Mumbai.
Design system codename **Bourse** — a markets-terminal aesthetic (deep slate, one amber
signal, Geist + Geist Mono, tabular figures, a live statutory-deadline ticker, a searchable
25-service matrix). Serious and institutional by design, not startup-y.

## New here? Read in this order

1. **This README** — stack, how to run, structure, deploy.
2. **[AGENTS.md](./AGENTS.md)** — the non-negotiable conventions (also loaded as `CLAUDE.md`).
3. **[PROGRESS.md](./PROGRESS.md)** — current status, the full decision log, and every known
   placeholder / deferred item. **This is the source of truth for "what's done and why."**
4. **[PRODUCT.md](./PRODUCT.md)** — strategy, users, IA, home scroll narrative.
5. **[DESIGN.md](./DESIGN.md)** — the visual system (tokens, type, components, motion).
6. `Website (1).md` — the original client brief (source of all copy + the 25 services). Do not
   edit; it's the reference.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind v4** — tokens in `app/globals.css` via `@theme` (no `tailwind.config`)
- **Fonts, all self-hosted** (no build-time network fetch): `geist` package (Sans + Mono) +
  **Fraunces** variable serif via `next/font/local` (`app/fonts/fraunces.woff2`)
- **Resend** — transactional email for the enquiry + résumé forms
- **No CMS** — all content is typed data in `lib/`

> ⚠️ **This Next.js is a modified build with breaking changes from public docs.** Before writing
> anything framework-level, read the real docs in `node_modules/next/dist/docs/`. (As-checked in
> this session: route handlers, `sitemap.ts`, and `robots.ts` all follow standard App-Router
> conventions in this version — but verify, don't assume.)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY (see "Email" below)
npm run dev                  # http://localhost:3000
npm run build                # type-checks + lints + prerenders all routes
npm run lint
```

`npm run build` is the gate — it type-checks, lints, and prerenders every route. Run it after
any change.

## Email (enquiry form + résumé upload)

Both forms POST to a single route, `app/api/enquiry/route.ts`, which emails the firm via Resend.
**There is no storage backend** — a résumé is sent as an email *attachment* and never persisted.
This keeps the whole thing to one Next.js deployment.

To go live, set env vars (see `.env.example`):

| Var | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | ✅ | From [resend.com](https://resend.com) (free tier). |
| `ENQUIRY_TO` | — | Recipient inbox. In Resend **test mode** this must be the email you signed up with. Defaults to the firm's first email in `lib/site.ts`. |
| `ENQUIRY_FROM` | — | Sender. Defaults to Resend's shared `onboarding@resend.dev`. Set to a firm address once the domain is verified in Resend. |

**Without a key the site still works** — the form degrades gracefully to a WhatsApp fallback link
(so a lead is never silently lost). Same fallback on any send error.

## Project structure

```
app/
  layout.tsx              root layout — fonts (Geist + Fraunces), metadata, theme script, chrome
  page.tsx               home page (composes the home sections + LegalService JSON-LD)
  globals.css            Bourse tokens (:root + [data-theme=light]) + base styles + keyframes
  robots.ts              robots.txt (MetadataRoute)
  sitemap.ts             sitemap.xml — 6 pages + 25 service URLs
  fonts/fraunces.woff2   self-hosted variable serif (hero headline only)
  api/enquiry/route.ts   enquiry + résumé email endpoint (Resend; résumé = attachment, no storage)
  about/ contact/ career/ insights/   top-level pages
  services/page.tsx      services hub (6 practice areas)
  services/[slug]/       25 statically-generated detail pages (scope + Service JSON-LD)
components/
  site/    masthead, command-bar, ticker, footer, theme-toggle, whatsapp-float, resume-form,
           use-mod-key
  home/    positioning (full-bleed hero), hero-visual (hero background), figures,
           service-cards (6 expandable practice-area cards), capital-markets,
           principal, insights-teaser, enquire
lib/
  site.ts               firm constants (name, phones, emails, address, stats, exchange links)
  services.ts           the 25 services + 6 categories + `law` (governing statute) — feeds
                        matrix, hub, command-bar, detail pages
  service-content.ts    full statutory scope-of-work per service (from the brief) — detail pages
  deadlines.ts          statutory deadlines + `upcomingDeadlines()` — feeds ticker + insights
```

## Conventions (short form — full rules in AGENTS.md / DESIGN.md)

- **Colors are utilities.** `bg-surface`, `text-ink`, `text-signal`, `border-hairline` — never
  hard-coded hex. New token → add to `globals.css` (`:root` **and** `[data-theme=light]`) and the
  `@theme inline` block.
- **Amber is a scalpel** — `signal` for text/figures, `signal-solid` for fills; a small fraction
  of any viewport.
- **Mono names data, not decoration** — Geist Mono for figures/labels/codes; Geist for prose.
- **The serif (Fraunces) is hero-only** — one display serif, one place. Don't spread it.
- **Dark is default**, light via the theme toggle — verify contrast in both (WCAG AA).
- Keep copy formal and statute-precise — that's the institutional guardrail.

## Deploy

Single Next.js app — deploy anywhere that runs Next 16 (Vercel is the obvious host). Static
routes prerender; `/api/enquiry` is the one dynamic (Node runtime) route. Set the env vars above
in the host dashboard. Note Vercel's ~4.5 MB request-body cap — the résumé upload is limited to
4 MB client- and server-side.
