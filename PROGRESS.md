# Progress & Decisions

Working log + decision record for the Ayush D Gupta & Associates site. **New here? Read
[README.md](./README.md) first** (stack, run, file map), then this file. Strategy lives in
[PRODUCT.md](./PRODUCT.md); the visual system in [DESIGN.md](./DESIGN.md); the source content
brief is `Website (1).md`. The decision log below is the "why" behind everything — read it
before undoing anything, so a deliberate choice isn't mistaken for an accident.

---

## At a glance (2026-07-09)

- **What works:** the whole site. Home + About, Services (hub + 25 detail pages with full
  statutory scope), Insights (compliance calendar), Career (résumé upload), Contact. Enquiry &
  résumé forms email the firm via Resend (with a WhatsApp fallback). SEO: metadata, JSON-LD,
  sitemap, robots. Dark + light. Build is green at **37 routes**.
- **To make forms send in prod:** set `RESEND_API_KEY` (see README → Email). Nothing else is
  wired to a secret.
- **Next planned work:** a **UI-polish pass** (functionality was built first, by request). The
  known polish items are collected under "Known placeholders / tech-debt" below. Formal Phase 5
  (a11y focus-trap, Lighthouse, cross-browser QA) also remains.
- **Before you build framework-level code:** this Next.js is a modified build — read
  `node_modules/next/dist/docs/`. Standard App-Router conventions held for everything used so far.

---

## Phase status

| Phase | Scope | Status |
|---|---|---|
| **1 — Foundation + Home** | Token system, layout shell (masthead, ticker, footer, WhatsApp float), command-bar, full home page, minimal service detail pages | ✅ **Done** (2026-07-08) |
| **2 — About + Contact + real enquiry** | `/about` and `/contact` pages + working enquiry form (POST → `/api/enquiry` → Resend email; WhatsApp fallback) | ✅ **Done** (2026-07-09). Needs `RESEND_API_KEY` set to go live |
| **3 — Services engine** | `/services` hub (6 areas) + full statutory scope for all 25 (`lib/service-content.ts`, from the brief) + per-service `Service` JSON-LD | ✅ **Done** (2026-07-08). Per-category standalone routes skipped — hub + anchors + 25 indexable detail pages cover it |
| **4 — Insights + Career** | `/insights` (compliance calendar, orders by next-upcoming) + `/career` (real résumé upload → email attachment). Dated regulatory-update *articles* deferred (no content yet, YAGNI) | ✅ **Done** (2026-07-09) |
| **5 — Polish** | SEO/schema completion, performance, a11y (incl. command-bar focus trap), Lighthouse pass, cross-browser/mobile QA | ⬜ Planned |

---

## Phase 1 — what shipped

- **Design system in code** — Bourse tokens in `app/globals.css` (dark default + light via
  `[data-theme=light]`), exposed to Tailwind v4 via `@theme inline`.
- **Shell** — `masthead` (sticky, nav, search trigger, theme toggle, Enquire),
  `ticker` (marquee of statutory deadlines), `footer` (services / contact / exchange links),
  `whatsapp-float`, `command-bar` (⌘K search over all 25 services + sections).
- **Home** (`app/page.tsx`) — the 9-beat narrative: positioning hero, count-up figures, service
  matrix, capital-markets spotlight, principal, insights teaser, enquire form. *(The hero and
  matrix were reworked in the 2026-07-08 craft pass — the original firm-profile readout panel is
  gone; see that decision entry. This bullet is the historical Phase-1 record.)*
- **Services** — `app/services/[slug]/page.tsx` statically generates all 25 pages. *(Phase-1
  shipped summary-only; full statutory scope landed in the Phase-3 build-out.)*
- **Verified** — clean production build, no console errors; checked on desktop, tablet width,
  light mode, command-bar search, and a service page. *(Route count has since grown to 37.)*

---

## Decisions log

*2026-07-09 — Home UI pass: full-bleed hero + services cards (client-requested)*

1. **Hero is now full-bleed** (`components/home/positioning.tsx` + `hero-visual.tsx`, renamed
   export `HeroBackground`). The old right-column duotone *card* became a background image
   spanning the section, copy overlaid left on a legibility scrim. Ambient, on-theme motion:
   slow Ken Burns zoom + a drifting ruled grid + the existing scroll parallax — all
   reduced-motion gated (`app/globals.css` keyframes `hero-zoom`, `hero-grid-drift`). Still uses
   `public/hero.jpg` (ruled-grid placeholder until added).
2. **Service matrix → six expandable cards** on the home page (`service-cards.tsx`; deleted
   `service-matrix.tsx`, only home used it). Deliberate deviation from DESIGN's "no service card
   grid" rule, **at the client's request** — the landing page read as too much text/list. These
   are **6 category cards** (not 25 service cards); the full searchable 25-row matrix still lives
   on `/services` and under ⌘K, so routing/structure is preserved.
3. **Expansion = lift-and-overlay popover, not reflow.** Clicking a card expands its services as
   a list directly below it, but the list is `absolute` and the card+list are elevated (`z-20`) and
   scale up slightly (~1.03) — so it pops above the cards beneath instead of pushing the grid.
   One open at a time; close on click-away (document `pointerdown`) or Esc. Native `<details>` and
   a `<dialog>` modal were both tried and rejected (details reflows the row; a full modal was too
   heavy) — see iteration.
4. **Cards need themed photos** at `public/services/<category-id>.jpg` (formation, compliance,
   capital-markets, transactions, cross-border, advisory), duotone-treated like the hero; ruled-grid
   placeholder until added. Image briefs handed to the client.

*2026-07-09 — Working forms + SEO (simple v1, single Next deploy, no storage)*

1. **One email endpoint for both forms** — `app/api/enquiry/route.ts` (Resend). The enquiry
   form and the career résumé form both POST `multipart/form-data` here. **No storage backend:**
   the résumé rides through as an email *attachment* (≤4 MB, PDF/DOC/DOCX/RTF) and is never
   persisted. Satisfies "one Next.js deployment, no separate storage."
2. **Resend over SMTP** — free tier, reliable, clean attachments. In test mode it sends from
   `onboarding@resend.dev` to the account's own email (the firm's Gmail) with zero domain setup;
   verify the domain later to send from `enquiries@agaassociates.in`. Config via env (see
   `.env.example`): `RESEND_API_KEY` (required), `ENQUIRY_TO`, `ENQUIRY_FROM` (optional).
3. **Graceful degradation** — no key set → route returns 503 and the form shows a friendly error
   with a **WhatsApp fallback** link; Resend failure → 502 + same fallback. The site never
   silently drops a lead. Verified all paths by curl + browser (validation, honeypot, send, file-type).
4. **Spam = honeypot only** — hidden `company` field; filled → silently accepted, never emailed.
   No captcha (no infra, no friction).
5. **Calendar orders by next-upcoming** — `lib/deadlines.ts` gained numeric `month`/`day` +
   `upcomingDeadlines()`; ticker, insights page, and home teaser now lead with the soonest
   deadline from the build date. Event-based/recurring rows (ADT-1, SEBI Reg 33, CSR-2) sort last.
   Still typed data (no CMS); "today" = build/deploy time for static routes.
6. **SEO files added** — `app/sitemap.ts` (31 URLs: 6 pages + 25 services) and `app/robots.ts`.
7. **Regulatory-update articles deferred** — a blog/posts system for zero posts is YAGNI. When the
   client writes one, MDX files in-repo cover it (still one deploy, no CMS).

*2026-07-08 — Build-out (Phases 2–4 structure)* ("build everything first, UI polish later")

1. **All routes now exist** — `/services` (hub), `/about`, `/contact`, `/career`, `/insights`,
   plus the 25 `/services/[slug]` detail pages. 34 static routes total. Nav, command-bar, and
   footer repointed from home-anchors to the real pages.
2. **Full service content shipped** — `lib/service-content.ts` holds the statutory scope-of-work
   for all 25 services, transcribed faithfully from `Website (1).md` → "SERVICES TAB". Rendered
   on each detail page as a two-column checklist, plus per-service `Service` JSON-LD.
3. **Per-category standalone routes skipped** (YAGNI). The `/services` hub groups all 6 areas
   with anchors (`/services#capital-markets`) and every service already has its own indexable
   detail page — that covers navigation + SEO without 6 near-duplicate routes. Split out later
   only if category-level SEO pages are wanted.
4. **Forms kept on WhatsApp/mailto** — it works today with zero infra (ponytail). A real
   POST-to-email backend and résumé file-upload both need the client's provider/key (Resend,
   Formspree, etc.) and storage; deferred until those are supplied, not stubbed.
5. **Contact map = keyless location card**, not an embedded iframe. The classic keyless Google
   Maps embed renders blank (deprecated); the newer Embed API needs a key. A card linking to
   `google.com/maps/search/?api=1&query=…` is reliable and key-free.
6. **Sub-page headings stay Geist** — the display serif remains the home-hero signature only
   (one serif, one place), per the craft-pass intent.

*2026-07-08 — Home craft pass* (post-Phase-1 design review: the home read too
"generated" — repeated section template, a fake telemetry panel, a flat service list)

1. **Killed the hero "Firm Profile" readout panel.** Not in the brief, duplicated the
   Principal section, and was mono-costume (label:value dressed as live data with a fake
   pulsing dot) — the exact "mono names data or it goes" violation. Its useful facts moved
   into a hairline meta row under the hero.
2. **Display serif on the hero headline** (`Fraunces`, self-hosted variable woff2 in
   `app/fonts/`, exposed as `font-serif` / `--font-serif`). One serif, one place, for
   financial-broadsheet gravitas — pulls the hero off generic Geist. Geist Mono still owns
   all data. Self-hosted (not `next/font/google`) to keep the no-build-fetch rule.
3. **Hero visual = treated duotone photo** (`components/home/hero-visual.tsx`): grayscale +
   slate `mix-blend-color` + amber `mix-blend-overlay`, with a subtle scroll parallax
   (rAF, reduced-motion aware). Ruled-grid placeholder until `public/hero.jpg` is added.
4. **Service matrix rebuilt into an instrument** (`components/home/service-matrix.tsx`):
   now grouped by the 6 practice areas (structure visible by default, not only on filter),
   a visible mono search, filter chips with counts, and a new **`UNDER` column** showing
   each service's governing statute — real data from the brief added as `Service.law` in
   `lib/services.ts`. This is what turns the "boring list" into the terminal.
5. **Dropped the amber mono eyebrow from the hero** (the AI-tell DESIGN.md bans). The two
   remaining ones (`capital-markets`, `principal`) are left per "rest is fine for now" —
   flagged as a quick follow-up.

*2026-07-08 — Phase 1*

1. **Design direction: the "Bourse" markets-terminal aesthetic.** Client picked it from a
   reference comp. It fits the capital-markets edge and is distinctive-yet-serious. The
   standing guardrail (from the reference's own watch-out): keep it institutional/law-adjacent,
   never tech-startup. Encoded throughout PRODUCT.md + DESIGN.md.
2. **Stack: Next.js 16 + Tailwind v4 + `geist` package.** create-next-app pinned Next 16 /
   React 19 / Tailwind v4. Chose the `geist` npm package over `next/font/google` to self-host
   fonts and avoid a build-time network fetch.
3. **No CMS** (per client) — content is typed data in `lib/`. Simplest, fastest, best perf;
   the dev edits.
4. **Two amber tokens: `signal` (text/accent, mode-dependent) vs `signal-solid` (fixed bright
   fill).** Not in the first draft — added during build because a bright amber can't carry
   *text* at 4.5:1 on white but works as a *fill* under dark text in both themes. This is what
   makes light mode pass contrast. (Documented in DESIGN.md → Colors.)
5. **Command-bar = fixed overlay, not native `<dialog>`.** Chosen for reliable React state
   control across the sticky header's stacking context. Opens via global ⌘/Ctrl+K keydown or
   an `open-command-bar` window event. Full focus-trap deferred to Phase 5.
6. **OS-aware shortcut + SVG icons.** `⌘` and emoji render as tofu on Linux/Windows, so the
   hint is `⌘K` on Mac / `Ctrl K` elsewhere (`use-mod-key.ts`) and the theme toggle uses inline
   SVGs. Handler always accepts both `metaKey` and `ctrlKey`.
7. **Motion is CSS-only in Phase 1.** Marquee (CSS keyframes), count-up (IO + rAF), hover
   wipes. No motion library added yet (YAGNI); add one only when a section needs choreography.
   No uniform scroll-reveal reflex.
8. **Enquiry form composes WhatsApp/mailto** (no backend yet) — genuinely useful now; a real
   POST backend is Phase 2.
9. **Service pages are summary-only in Phase 1** to avoid entering 25× deep bullet lists before
   the shell is validated; full content is Phase 3 (data already exists in `Website (1).md`).
10. **Radius: Tailwind default scale** (no custom radii) — panels `rounded-xl` (12px),
    controls `rounded-md` (6px), pills `rounded-full`. Matches the reference's soft panels.

---

## Known placeholders / tech-debt

Swap these for real client assets when available (never block a build on them):

- **Stats** — `lib/site.ts` (`500+ / 10+ / 2,400+`) are placeholders.
- **Hero image** — `public/hero.jpg` not yet added; hero shows a ruled-grid placeholder.
  Source spec: Mumbai financial district / BSE / BKC architecture (or documentary detail —
  seals, ledgers), landscape-ish, **no people, no handshakes**, high detail. It's rendered
  grayscale + slate/amber duotone automatically, so pick for composition, not colour.
- **CS Ayush headshot** — monogram placeholder in `components/home/principal.tsx`.
- **Logo** — currently an amber "A" initial mark; no supplied logo yet.
- **Testimonials / client logos** — none yet (not in the layout yet; add when supplied).
- **Deadline data** — `lib/deadlines.ts` is illustrative; wire to a maintained calendar.
- **Domain** — `site.url` guesses `agaassociates.in`; confirm the real domain.

To go live (config, not code):

- **`RESEND_API_KEY`** — sign up at resend.com (free), sign up with the firm's Gmail, drop the
  key in `.env.local` (local) and the host's env (prod). Copy `.env.example`. Until then the
  form shows the WhatsApp fallback. Optionally set `ENQUIRY_TO` / verify domain for a branded
  `ENQUIRY_FROM`.

Deferred (need client input, not stubbed):

- **Regulatory-update articles** — client-written; add as in-repo MDX when there's a first post.
- **Live calendar data** — `lib/deadlines.ts` is illustrative; confirm/extend the dates.
- Command-bar focus trap (Phase 5) · leftover default `public/*.svg` from create-next-app.

Known content polish (UI pass): `/about` repeats the firm blurb + Vision between the intro,
the reused `Principal` block, and the Vision card — de-duplicate when polishing.

---

## Run it

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY to make the forms send (see README → Email)
npm run dev     # http://localhost:3000
npm run build   # type-checks + lints + prerenders all routes — the gate; run after any change
npm run lint
```
