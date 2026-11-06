# Ayush D Gupta & Associates — website

Marketing + lead-generation site for a peer-reviewed Company Secretary firm in Mumbai.
Design system codename **Bourse** — a markets-terminal aesthetic (deep slate, one amber
signal, Geist + Geist Mono, tabular figures, a live statutory-deadline ticker, a photographic
25-service practice explorer and command-bar search). Serious and institutional by design, not startup-y.

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
  services/page.tsx      services hub (6 photographic category cards, all 25 links)
  services/[slug]/       25 static detail pages (category-photo introduction, scope + Service JSON-LD)
components/
  site/    masthead, command-bar, ticker, footer, theme-toggle, whatsapp-float, resume-form,
           use-mod-key
  home/    positioning (full-bleed hero), hero-visual (hero background), figures,
           service-cards (full-section photo practice explorer), capital-markets,
           principal, insights-teaser, enquire
lib/
  site.ts               firm constants (name, phones, emails, address, stats, exchange links)
  services.ts           the 25 services + 6 categories + `law` (governing statute) — feeds
                        explorer, hub, command-bar, detail pages
  service-content.ts    full statutory scope-of-work per service (from the brief) — detail pages
  service-imagery.ts    6 category photographs + focal crops — explorer, hub, detail intros
  deadlines.ts          statutory deadlines + `upcomingDeadlines()` — feeds ticker + insights
public/services/colour/ optimised full-colour WebPs for the six practice areas
design/service-imagery/ photographic masters, provenance and approved implementation brief
```

## Conventions (short form — full rules in AGENTS.md / DESIGN.md)

- **Colors are utilities.** `bg-surface`, `text-ink`, `text-signal`, `border-hairline` — never
  hard-coded hex. New token → add to `globals.css` (`:root` **and** `[data-theme=light]`) and the
  `@theme inline` block.
- **Amber is a scalpel** — `signal` for text/figures, `signal-solid` for fills; a small fraction
  of any viewport.
- **Mono names data, not decoration** — Geist Mono for figures/labels/codes; Geist for prose.
- **The serif (Fraunces) is hero-only** — one display serif, one place. Don't spread it.
- **Reading scale:** 18px prose/actions, 20px introductions, 16px labels/statutes and 14px
  short counts/keyboard hints. Use shared `page-title` / `section-title` headings.
- **Controls:** `action-primary` / `action-secondary` are at least 52px; `form-field` is
  at least 54px with 18px text, paired `form-label` and a visible `control-line` border.
  Standalone `text-link` actions are underlined and at least 48px tall.
- **Dark is default**, light via the theme toggle — verify text/control contrast in both.
  The target is WCAG AA; scoped contrast/Lighthouse checks are not a full conformance claim.
- Keep copy formal and statute-precise — that's the institutional guardrail.

## Deploy to Vercel

This is a Next.js App Router application, not a static React-only bundle. Most pages are
prerendered; `/api/enquiry` runs as a Node.js function to send enquiries and résumé attachments
through Resend. Vercel supports both as part of one project, so no separate backend or
`vercel.json` is needed.

1. Import `SanchitGeez/AGA` from GitHub in Vercel.
2. Keep the framework preset as **Next.js**, the root directory as `./`, and the build, install,
   and output settings on **Automatic**. The build script is `npm run build`; `package-lock.json`
   is the canonical lockfile.
3. Add the environment variables below under the Vercel project's **Settings → Environment
   Variables**. Add them to Production; add them to Preview too if preview forms should send mail.
4. Deploy. Connect the confirmed domain in **Settings → Domains**. `NEXT_PUBLIC_SITE_URL` must
   match the canonical HTTPS domain so metadata, sitemap, robots.txt, and structured data use
   the right origin. It defaults to `https://agaassociates.in`.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical HTTPS origin; defaults to `https://agaassociates.in`. |
| `RESEND_API_KEY` | For email forms | Server-only Resend API key. Without it, enquiry forms offer a WhatsApp fallback and résumé email submissions cannot be sent. |
| `ENQUIRY_TO` | Optional | Recipient address; defaults to the first firm email in `lib/site.ts`. In Resend test mode, use the account's verified email. |
| `ENQUIRY_FROM` | Optional | Sender; use a domain-verified address for live mail. Defaults to Resend's shared onboarding sender. |

The résumé limit is 4 MB, below Vercel's function request-body limit. Do not set Next.js static
export (`output: "export"`): the email route needs a server runtime.

Before a public launch, confirm the domain and replace the placeholder firm statistics and deadline
calendar noted in `PROGRESS.md`. The hero uses the approved full-colour illustrative boardroom
image (`public/services/colour/advisory.webp`), continuous behind the home header and opening;
it does not depict the firm's office. The principal portrait's master and web export live in
`public/portraits/`.
