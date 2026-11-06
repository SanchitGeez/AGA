---
version: alpha
name: Bourse
description: Markets-terminal design system for Ayush D Gupta & Associates — deep slate, one amber signal, Geist + Geist Mono, tabular figures. Institutional, not startup.
colors:
  # ---- Dark (default) · matches app/globals.css exactly ----
  bg: oklch(0.19 0.015 250)            # slate — page surface
  surface: oklch(0.24 0.018 250)       # panel — cards, ticker rail
  surface-2: oklch(0.285 0.02 250)     # raised: hover / command-bar / chips
  hairline: oklch(0.43 0.02 250)       # 1px borders, grid rules, dividers
  control-line: oklch(0.6 0.025 250)   # interactive control boundaries
  ink: oklch(0.94 0.005 250)           # primary text, headings
  ink-dim: oklch(0.87 0.012 250)        # secondary prose
  steel: oklch(0.76 0.025 250)          # muted — labels, metadata, captions
  signal: oklch(0.78 0.14 75)          # amber ACCENT/TEXT (mode-dependent): figures, links, live text
  signal-solid: oklch(0.8 0.14 75)     # amber FILL (fixed both modes): CTAs, live dots, active chip
  signal-solid-hover: oklch(0.74 0.13 75)
  on-signal: oklch(0.19 0.02 75)       # dark ink used on amber fills
  due: oklch(0.78 0.14 75)             # deadline imminent (= signal)
  overdue: oklch(0.64 0.17 25)         # restrained red, used sparingly
  filed: oklch(0.72 0.08 165)          # muted teal-green, on-track
  # ---- Photography foregrounds (fixed in both page themes) ----
  photo-ground: oklch(0.19 0.015 250)
  photo-ink: oklch(0.97 0.005 250)
  photo-dim: oklch(0.92 0.008 250)
  photo-rule: oklch(0.97 0.005 250 / 0.42)
  photo-signal: oklch(0.8 0.14 75)
  # ---- Light (ships per reference; applied under [data-theme=light]) ----
  # Bright amber fills remain fixed; light on-signal ink is slightly adjusted.
  light-bg: oklch(0.985 0.003 250)
  light-surface: oklch(0.965 0.005 250)
  light-surface-2: oklch(0.94 0.006 250)
  light-hairline: oklch(0.8 0.012 250)
  light-ink: oklch(0.26 0.02 255)
  light-ink-dim: oklch(0.42 0.02 255)
  light-steel: oklch(0.45 0.025 255)
  light-signal: oklch(0.54 0.14 62)    # amber darkens for text contrast on white
  light-control-line: oklch(0.6 0.025 250)
  light-on-signal: oklch(0.2 0.02 75)
  light-due: oklch(0.54 0.14 62)
  light-overdue: oklch(0.55 0.19 27)
  light-filed: oklch(0.52 0.1 165)
typography:
  hero:     { fontFamily: Fraunces, fontSize: "clamp(2.5rem, 6.2vw, 6rem)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.025em" } # HOME HERO ONLY; responsive overrides below
  h1:       { fontFamily: Geist, fontSize: "clamp(2.5rem, 1.6rem + 3vw, 4.25rem)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.025em" }
  h2:       { fontFamily: Geist, fontSize: "clamp(2rem, 1.3rem + 2vw, 3.25rem)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.025em" }
  body-lg:  { fontFamily: Geist, fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.65 }
  body:     { fontFamily: Geist, fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.7 }
  body-sm:  { fontFamily: Geist, fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 }
  title:    { fontFamily: Geist, fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.4 }
  title-lg: { fontFamily: Geist, fontSize: "1.875rem", fontWeight: 600, lineHeight: 1.3 }
  field:    { fontFamily: Geist, fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.5 }
  action:   { fontFamily: Geist, fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.5 }
  label:    { fontFamily: Geist, fontSize: "1rem", fontWeight: 600, lineHeight: 1.5 }
  mono:     { fontFamily: Geist Mono, fontSize: "1rem", fontWeight: 400, lineHeight: 1.6, fontFeature: "tnum" }
  supporting: { fontFamily: Geist Mono, fontSize: "0.875rem", lineHeight: 1.5 } # short counts, keyboard hints and brief data labels
  figure:   { fontFamily: Geist Mono, fontSize: "clamp(2rem,1.2rem + 2.4vw,3rem)", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.025em", fontFeature: "tnum" }
rounded:
  # As built we use Tailwind v4's DEFAULT radius scale (no custom theme radii).
  # Mapping to the utilities actually in the code:
  controls: 6px   # rounded-md — buttons, inputs, chips, icon buttons
  panel: 12px     # rounded-xl — panels, cards, command-bar, figures container
  full: 9999px    # rounded-full — status dots, category pills
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  section: "clamp(4rem, 6vw, 5.5rem)"
components:
  button-primary:   { backgroundColor: "{colors.signal-solid}", textColor: "{colors.on-signal}", typography: "{typography.action}", rounded: "{rounded.controls}", height: 52px, padding: "12px 24px" } # min-height; hover → signal-solid-hover
  button-secondary: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.action}", rounded: "{rounded.controls}", height: 52px, padding: "12px 24px" } # min-height; 1px control-line border
  panel:            { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", rounded: "{rounded.panel}", padding: "{spacing.lg}" }
  input:            { backgroundColor: "{colors.bg}", textColor: "{colors.ink}", typography: "{typography.field}", rounded: "{rounded.controls}", height: 54px, padding: "12px 16px" } # min-height; control-line border
  service-photo-card: { backgroundColor: "{colors.photo-ground}", textColor: "{colors.photo-ink}", rounded: "{rounded.panel}", padding: "20px" } # 28px from 640px; photograph + reading shade
  service-photo-link: { backgroundColor: transparent, textColor: "{colors.photo-ink}", typography: "{typography.body}" } # underlined name, 80px min-height, 16px statute
  ticker-item:      { backgroundColor: transparent, textColor: "{colors.steel}", typography: "{typography.mono}" }
  command-bar:      { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.panel}" }

---

# Bourse — Design System

Design system for **Ayush D Gupta & Associates**. Read alongside [PRODUCT.md](./PRODUCT.md),
which carries the philosophy, IA, and scroll narrative. This file is *how it looks and moves*.

## Overview

**Creative North Star: "Bourse — a markets terminal for corporate compliance"**

Bourse is a **markets terminal for corporate compliance.** Deep slate surface, a single
amber signal, monospaced tabular figures, ruled grids, a live statutory-deadline ticker.
It borrows the visual language of the exchanges the firm works with daily (NSE/BSE/NSDL/
CDSL/NCLT) because the firm's edge is capital markets — IPO, SEBI, FEMA, corporate actions.

The aesthetic is deliberately distinctive-yet-serious. Its one risk is reading as a tech
startup or a crypto dashboard; the guardrail is **institutional restraint** — formal copy,
statutory precision, disciplined color, calm-but-crisp motion. Bloomberg terminal energy,
law-firm gravitas. Mono is used because there is *real data* (deadlines, filing counts,
regulation numbers), never as decoration.

Personality: **precise · disciplined · institutional.** The visitor should feel the firm
will not let them get it wrong. Adult professional readers need comfortable text, clear
headings and unmistakable actions. Readability takes precedence over extreme minimalism.

**Key Characteristics:**
- Deep slate, cool light mode and one restrained amber interface accent.
- Generous reading type, explicit actions and visible control boundaries.
- Real statutory data in mono; Geist prose and a single hero-only Fraunces statement.
- Natural-colour photography with local reading shades and ruled structure.

## Colors

Strategy: **Committed dark.** The slate surface carries the whole page; amber is the single
signal, spent sparingly on what is live, active, or a figure. No second interface accent.
Photographic colour is retained. Gradients are reserved for local reading/navigation shades
on the approved photographic surfaces, never decorative UI fills or text.

| Role | Token | Use |
|---|---|---|
| Page | `bg` | body background, the slate field everything sits on |
| Panel | `surface` | ticker rail, cards, forms and grouped content |
| Raised | `surface-2` | hover states, command-bar, chips |
| Rule | `hairline` | 1px borders and grid lines — the terminal's structure |
| Text | `ink` | all body copy and headings |
| Text 2 | `ink-dim` | secondary prose, long descriptions |
| Muted | `steel` | mono labels, column headers, metadata, captions |
| Signal | `signal` | amber **text/accent** — figures, ticker due-dates, links, focus (mode-dependent) |
| Signal solid | `signal-solid` | amber **fill** — CTAs, live dots, active filter chip (fixed both modes) |
| On-signal | `on-signal` | text on amber fills |

> **Why two amber tokens (the one deviation from the first draft).** On white, a bright
> amber can't carry text at 4.5:1, but a bright amber *fill* under dark text is fine in both
> themes. So `signal` is the mode-shifting accent used for text/figures (darkens in light
> mode), and `signal-solid` is the fixed bright fill used for buttons and live dots. This
> split is the reason light mode passes contrast without muddy buttons.

**Photography foregrounds:** `photo-ground`, `photo-ink`, `photo-dim`, `photo-rule` and
`photo-signal` retain the same values in both page themes. The Boardroom hero and transparent
home masthead, homepage practice explorer, Services-hub category cards and all 25 service
detail introductions use these media-caption tokens. They protect legibility rather than
introduce another theme or interface accent; ordinary sections and the solid sticky header
continue to follow the selected page theme.

**The Amber Scalpel Rule.** If more than a small percentage of a viewport is amber, cut it back.
Live figures, the active deadline, the primary CTA, focus rings — that's the whole budget.

**Status colors** (`due` / `overdue` / `filed`) appear *only* in the compliance calendar and
deadline contexts, never as general UI accents. `due` is literally `signal` — imminence is
the amber's natural job.

**Measured contrast:** on `surface`, dark `ink` / `ink-dim` / `steel` / `signal`
are 13.75 / 11.09 / 7.70 / 8.04:1; light equivalents are 14.00 / 7.64 / 6.75 / 4.77:1.
`overdue` error text is 4.51:1 dark and 4.82:1 light. Interactive `control-line`
borders measure 4.18:1 dark and 3.56:1 light. These are scoped measurements, not a full
WCAG certification; see `.impeccable/review/readability/contrast-checks.json`.

**The Visible Control Rule.** Decorative dividers use `hairline`; actionable outlined
controls and fields use `control-line`. Keep their boundaries visibly distinct from the
surrounding surface. Use `on-signal` on `signal-solid` fills. Ordinary body text uses
`ink` or `ink-dim`; `steel` remains secondary and `signal` remains an accent.

## Typography

Two workhorse families on a real contrast axis — a grotesque and its monospace sibling — plus
**one display serif used as a scalpel** (hero headline only):

- **Geist** (grotesque) — all headings and prose. Neutral, precise, modern without being trendy.
- **Geist Mono** (tabular) — figures, statutory codes, dates, ticker data, counts and keyboard hints. `font-feature-settings: "tnum"` on all numerics so figures align in columns.
- **Fraunces** (variable display serif, `font-serif`) — **the home-hero headline only.** One
  serif, one place. It gives the hero *financial-broadsheet* gravitas (the FT/Economist/Bloomberg
  register), which pulls the site off "generic Geist SaaS" toward institutional weight.

> **Why a serif — and how it differs from the "editorial-magazine" anti-reference.** The
> anti-ref rejects *editorial* serif: display-italic + drop caps + broadsheet grid, a saturated
> magazine look. That is not this. Fraunces here is upright, tight, used once, at large size, for
> a single institutional headline — the register of a markets desk, not a magazine. The rule that
> keeps it safe is **containment**: it never appears on sub-page headings, body, or data. If you
> find yourself reaching for the serif anywhere but the home hero, stop — that's the drift the
> anti-ref warns about. All other headings stay Geist.

The grotesque + its own mono is the most honest pairing for a data instrument — same skeleton,
different job. The serif is the one deliberate exception, and it earns its place by staying rare.

The global Tailwind reading scale is 14 / 16 / 18 / 20 / 24 / 30px (`xs` through
`2xl`), with line heights 1.5 / 1.6 / 1.65 / 1.65 / 1.4 / 1.3. Body defaults to
18px at 1.7 line height. Prose/actions use 18px, introductions 20px (hero support reaches
24px on desktop), statutory references and labels 16px. The 14px step serves short counts,
keyboard hints and compact data labels. It is not the reading-prose size.

Page titles span 40–68px; main section statements 32–52px. Smaller subheadings use the
24px/30px steps. The hero uses the frontmatter `hero` role with deliberate two-line spans;
below 768px it uses `clamp(2rem, 9vw, 3.25rem)`. At widths of at least 768px and heights
below 720px, `min(5.35vw, 10svh)` protects the opening composition. Other h1–h4 balance
wrapping; prose uses pretty wrapping. Reading measures are local (`max-w-xl`, `max-w-2xl`,
`max-w-3xl`) rather than a second centered page rail.

**The Reading First Rule.** Keep prose comfortably readable and actions explicit before
pursuing sparse styling. Increase wrapping or stack content on narrow screens; never
shrink long names, legal copy or form text to fit a dense desktop arrangement.

**The Mono Names Data Rule.** Mono labels identify actual figures, statutes, codes,
deadlines or keyboard hints. They do not introduce prose headings as decorative eyebrows.
Form labels, ordinary links, search text and explanatory copy use Geist.

## Layout

- **One shared content rail.** `site-container` sets a 1600px maximum outer width,
  centered only beyond that width, with 16px mobile / 24px tablet / 32px desktop gutters.
  Header, footer, page introductions, figures, lists and forms all use this rail; never
  center a narrower page shell inside it. Full-width section backgrounds keep their
  content on the same rail. Paragraph measures remain local for readable line lengths.
- **A visible grid is the identity.** Hairline rules delineate regions — the SEBI panel,
  the figure row, service-link lists and the meta rows share the terminal's ruled structure.
- **Density vs. air is intentional** (Principle 2). Service lists and the ticker are tight and
  gridded; positioning, the person, and the CTA use generous `section` spacing. Alternate
  deliberately; never uniform.
- Spacing scale is 4px-based. `section-space` uses `--section-space`
  (`clamp(4rem,6vw,5.5rem)`, 64–88px per side); `section-start` / `section-end` apply
  only one side, avoiding doubled whitespace between related blocks. Main paired
  sections use equal columns at 1024px+, with a 32px stacked / 48px desktop gap.
  The portrait retains its dedicated 300px column and aligns left when stacked.
- Flex handles single-axis rows; Grid handles service lists, figures and grouped layouts.
  Scope-of-work lists become two columns only from 1024px. The calendar stacks its
  code, filing name and date on phones and restores three columns from 768px.
- The homepage practice explorer pairs a left category rail with one right-hand service
  panel from 1024px; below that, the selected panel expands inline with a visible photograph.
  The Services hub uses six photograph-backed category cards in two columns from 1024px
  and one below, with a 32px gap. Each card contains its introduction and all its services;
  the 25 services are links within categories, not 25 separate cards.
- Test every heading at 360 / 768 / 1280px. Long service names (e.g. "Regulatory
  Registrations & Licenses") must not overflow — reduce clamp or wrap, never clip.

## Elevation & Depth

Dark UI: depth comes from **tonal layers + hairlines,** not drop shadows.

- Stack: `bg` → `surface` → `surface-2`. Each step up is +~0.045 L and gains a 1px
  `hairline` border where separation is needed. That layering *is* the depth model.
- **Shadows only for true overlays** (command-bar dialog, mobile menu, modals):
  the command-bar uses `0 20px 64px -16px var(--bg)`.
- The ticker’s live-status dot carries a small amber glow (`0 0 10px 1px var(--signal-solid)`).
  Other surfaces remain flat; keyboard focus is a clear outline rather than a diffuse glow.

## Shapes

Moderately rounded, matching the reference panels — soft enough to read *refined
institutional* rather than brutalist-terminal (this softening is part of the tech-startup
guardrail).

As built, using Tailwind's default radius scale (no custom radii in the theme):

- `rounded-xl` (12px) — panels, category cards, command-bar, figures row.
- `rounded-md` (6px) — buttons, inputs, chips, icon buttons.
- `rounded-full` — status dots, category/filter pills.
- Corners are consistent; structural borders are 1px `hairline`, control borders are 1px
  `control-line`. Keyboard focus is a 3px `signal` outline, 4px offset, with 6px corners.

## Components

- **Firm identity** — the supplied circular emblem (sprout, three people, central Y,
  partial gear) beside the two-line Geist wordmark “AYUSH D GUPTA” / “& ASSOCIATES”.
  Regenerated as transparent flat line art in `public/brand/firm-emblem.png`; the smaller
  `firm-emblem-web.png` is used as a CSS alpha mask (`.firm-emblem`) so the mark follows
  `signal` in both themes. Shared `components/site/brand.tsx` in the masthead and footer;
  `ink` lettering and the full name remain on mobile. The hero watermark was removed at
  the client's request. Browser and Apple touch icons use the same emblem. This supersedes
  the initial ADG concept, at the client's request.
- **Masthead / top-bar** — deliberately larger at the client's request: 80px mobile,
  96px tablet, 112px desktop (overriding the skill's generic 80px cap). Uses a wider
  shared `site-container` rail, larger emblem (up to 72px) and bold uppercase name
  (up to 26px). Navigation is centered in an equal-flank three-column grid, with
  22px semibold links (24px from 1536px) in `ink`. Order: About, Services, Insights,
  Career, Contact. A 2px amber underline grows from its center over 200ms on hover
  or keyboard focus and stays visible for the current page or section; reduced
  motion removes the transition. Full navigation starts at 1360px; below that,
  the menu uses centered 22px links with the same indicator. Search/enquiry controls
  are at least 52px tall; theme/menu targets remain at least 44px wide. At the home top, the header
  is transparent over the same photograph as the hero, using fixed photo foreground tokens.
  A 1px hero-start marker observed with `IntersectionObserver` restores normal solid `bg`
  and page-theme tokens on scroll. Inner pages use the normal solid header. The mobile
  menu overlays below the rail with a viewport-bounded scrolling height, so opening it does
  not shift the hero; menu/search surfaces remain opaque. Existing routes are retained.
- **Ticker** — directly below the home hero; horizontal rail of statutory deadlines in mono; imminent items in `signal`
  with a small live-dot glow; continuous marquee scroll (linear). Reduced-motion → static list.
- **Command-bar** — native modal `<dialog>` in the browser top layer. A horizontally
  centered `surface` panel (max 672px wide / 640px content height) stays inside the viewport,
  including short landscape screens. Top position stays fixed while results change. Header
  and footer remain visible; only results scroll. Names wrap above readable practice-area
  labels, with a text Close action and a full-width input focused on open. Searches all
  25 services and 6 page shortcuts by name, area or governing statute; no result truncation.
  Combobox/listbox semantics, Arrow/Enter navigation, Escape/backdrop dismissal, explicit
  Tab wrapping, focus restoration, and preservation of the prior body-scroll setting.
  Uses the existing keyboard shortcut and open event. This supersedes the original flex
  overlay, which stretched the panel vertically and produced a large blank area.
- **Homepage practice explorer** (`components/home/service-cards.tsx`) — the selected
  category's full-colour photograph covers the entire section. Six category buttons retain
  visible counts; one expanded service panel shows names, governing statutes and direct
  detail links. On desktop the navigation occupies the shaded left rail and the panel sits
  at lower right; on mobile it expands inline after its button, with an additional visible
  image. Up/Down and Home/End select categories; native buttons retain Tab, Enter and Space
  behavior. `aria-expanded`, controlled regions and `hidden` keep selection explicit.
  Formation is initial; other background images mount on first selection. The previous
  image stays visible until the new one loads, then opacity crossfades over 300ms. A failed
  selected image reveals `photo-ground`; controls and service links remain usable.
- **Services directory** (`app/services/page.tsx`) — six consistent photograph-backed
  category cards, each containing its name, description, count and complete lower service
  list. Two columns at 1024px+, one on smaller screens; 12px corners, 20px padding (28px
  from 640px), 46rem minimum height and 32px grid gaps. Category jump navigation and all
  25 links/statutes remain available without expansion. A restrained local reading gradient
  protects both introduction and list while retaining visible image colour.
- **Service detail introduction** (`app/services/[slug]/page.tsx`) — every service uses
  its category photograph behind the breadcrumbs, Geist heading, tagline and governing
  statute. A directional reading gradient protects text; summary, full scope, related links
  and the service-prefilled enquiry form remain on normal theme-aware surfaces below.
  `lib/service-imagery.ts` is the shared six-category image and focal-position map for all
  three surfaces. Photographs are illustrative, not firm premises or client documents.
- **Boardroom hero** (`positioning.tsx`, `hero-visual.tsx`) — one continuous full-bleed
  photograph behind the home masthead and opening. Reuses `public/services/colour/advisory.webp`,
  a generated illustrative boardroom, not the firm's office. Natural colour; a directional
  left reading shade and shallow top navigation shade protect copy. Mobile uses a uniform
  translucent reading shade. No grayscale, duotone, ruled grid, zoom or parallax. The image
  uses `next/image`, eager loading, high fetch priority and `sizes="100vw"`.
  Fraunces sets “Where governance” / “meets growth.” in two lines; only “growth” is amber.
  A short Geist support line leads to the filled Enquire action (`/contact`) and quiet
  outlined Explore services action (`/#services`); the previous credential/meta strip is removed.
  Negative top margin includes the masthead height and its 1px border, bringing the image
  to the document top. Hero minimum height is capped at 54rem (48rem below 768px) against
  `100svh - 2.75rem`; short screens reduce padding/type and retain normal vertical scrolling.
- **Principal portrait** (`components/home/principal.tsx`) — client-photo-based professional
  portrait in a navy suit with a plain cool gray background. Natural skin color, no duotone
  or grayscale treatment. 4:5 frame, 300px wide on desktop, capped at 384px on smaller
  screens. Shared on About and Home; uses `next/image` with explicit responsive sizes and
  a 960x1200 WebP. Generated master and identity-preserving prompt are retained in the repo.
- **Forms** (`enquire.tsx`, `resume-form.tsx`) — `surface` panels with Geist labels
  (16px semibold), 18px field text, `control-line` boundaries and 54px minimum fields.
  Labels connect through unique `useId`/`htmlFor`; name/email/phone autocomplete is explicit.
  Textareas resize vertically and start at 144px tall. Idle → sending (disabled button) →
  sent confirmation or a readable `role="alert"` error. Enquiry errors retain input and
  offer the existing WhatsApp fallback; career errors show the existing email alternative.
  The hidden `company` honeypot, field order, payloads and email-only backend remain.
  Contact uses the enquiry heading as its single h1; reused instances use h2.
- **Figure / count-up** — tabular Geist Mono `figure` in `signal`, with readable 16px Geist
  labels, inline in a ruled row. This is not a collection of boxed hero metrics.
- **Buttons** — `.action-primary` gives the key action an amber fill; `.action-secondary`
  uses a visible `control-line` outline on `surface`. Both have 52px minimum height,
  18px semibold Geist text, 12px/24px padding and 6px corners. Hover changes fill or boundary;
  active moves by 1px; keyboard focus uses the shared 3px outline. Hero secondary actions
  use photo foregrounds and a translucent photo-ground fill.
- **Text links** — ordinary standalone `.text-link` actions are underlined by default and
  at least 48px tall. Photo service names are underlined; their full rows are at least
  80px tall and statutory references are 16px mono. Contact telephone/email links occupy
  separate underlined rows, so addresses do not read as one link.
- **Panel / card** — `surface`, 1px `hairline`, 12px corners for forms, grouped content and
  the ruled figures row. Photo category cards retain their approved local reading shades.
- **Footer** — 20px semibold section headings are semantic h2 elements. Copy and links use
  18px, legal text uses 16px; footer list/navigation links provide at least 44px height.
  The bottom rail reserves 96px below its content to clear the floating WhatsApp action.
- **Insights teaser** — “View compliance calendar” goes to `/insights`; there is no
  subscription flow. The calendar uses readable stacked mobile rows and 18px data.

## Motion

Crisp and snappy — "everything fast, nothing floaty." **As built, Phase 1 is CSS-only** —
no motion library yet (add Motion/GSAP only when a section genuinely needs choreography).

- **Durations:** 80ms (micro), 140ms (fast, the default), 200ms (base), 320ms (rare, large).
- **Easing:** ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`. No bounce, no elastic.
- **Signature motions (implemented):**
  - Figures **count up** when scrolled into view — `IntersectionObserver` + `requestAnimationFrame`, one-shot (`components/home/figures.tsx`).
  - The ticker scrolls continuously (linear CSS `@keyframes`, `.animate-marquee`); pauses on hover; the leading "live" dot glows.
  - Command-bar opens with a 140ms scale `0.98→1` + fade (`@keyframes cmd`).
  - Service links: fast colour response; arrows shift subtly on hover, with the shift
    disabled under reduced motion.
  - Practice selection: 300ms background-opacity crossfade after image load;
    `motion-reduce:transition-none` makes the background change instant.
  - Home masthead: 200ms colour transition from photographic to solid header; disabled
    under reduced motion. The Boardroom photograph itself is static.
  - Still no uniform scroll-reveal reflex — ticker, count-ups and hover wipes carry the
    motion; add per-section reveals only where they earn it.
- **Reveals** are subtle and per-section-appropriate, never one uniform fade applied to every
  block. Content is visible by default; motion enhances an already-rendered page (reveals are
  not gated on JS classes that could ship blank).
- **Reduced motion (mandatory):** ticker → static list; count-ups → final value; reveals →
  instant; command-bar → instant. `@media (prefers-reduced-motion: reduce)` on every animation.

## Implementation Notes (as built)

**Tokens live in `app/globals.css`**, defined as CSS variables on `:root` (dark) and
overridden under `[data-theme="light"]`, then exposed to Tailwind v4 via `@theme inline`.
So every color token is a utility:

| CSS var | Tailwind utility | Notes |
|---|---|---|
| `--bg` | `bg-bg` `text-bg` | page field; usually applied to `body`, rarely as a utility |
| `--surface` | `bg-surface` | panels, ticker, form panel |
| `--surface-2` | `bg-surface-2` | command-bar, hover, chips |
| `--hairline` | `border-hairline` | also the default `*` border color |
| `--control-line` | `border-control-line` | actionable control and field boundaries |
| `--ink` / `--ink-dim` | `text-ink` / `text-ink-dim` | body / secondary |
| `--steel` | `text-steel` | mono labels, metadata |
| `--signal` | `text-signal` `border-signal` | amber accent/text |
| `--signal-solid` | `bg-signal-solid` | amber fills / live dots |
| `--on-signal` | `text-on-signal` | text on amber fills |
| `--due` `--overdue` `--filed` | `text-due` etc. | calendar status only |
| `--photo-ground` / `--photo-ink` / `--photo-dim` | `bg-photo-ground` / `text-photo-ink` / `text-photo-dim` | fixed media reading ground and foregrounds |
| `--photo-rule` / `--photo-signal` | `border-photo-rule` / `text-photo-signal` | photographic dividers, selected/hover/focus states |

**Fonts (all self-hosted, no build-time network fetch):** the `geist` npm package
(`GeistSans` / `GeistMono`) sets `--font-geist-sans` / `--font-geist-mono` → Tailwind
`font-sans` / `font-mono`. **Fraunces** (variable display serif) is loaded via `next/font/local`
from `app/fonts/fraunces.woff2` in `app/layout.tsx`, exposed as `--font-serif` → `font-serif`,
and used **only** on the home-hero headline. Chosen over `next/font/google` to avoid a build-time
fetch (and to commit the exact file). Tabular figures via `tabular-nums` on all numeric mono.

**Cross-platform glyphs (a real Phase-1 fix):** the `⌘` symbol and emoji rendered as tofu on
Linux/Windows. So the keyboard hint is OS-aware — `⌘K` on Mac, `Ctrl K` elsewhere
(`components/site/use-mod-key.ts`, empty until mount to avoid hydration mismatch), and the
theme toggle uses inline SVG sun/moon icons, not emoji. The command handler always listens
for both `metaKey` and `ctrlKey`.

**Theme:** default is dark (`:root`); light is opt-in via `data-theme="light"` set by an inline
`<head>` script (reads `localStorage.theme`) before paint to avoid FOUC, toggled by
`components/site/theme-toggle.tsx`.

**z-index scale (semantic, as used):** ticker/masthead sticky `z-40`, WhatsApp float `z-30`;
the search dialog uses the browser's native top layer. No arbitrary 999s.

## Do's and Don'ts

**Do**
- Keep amber to a small percentage of any viewport — live, active, figure, one CTA.
- Make every figure real and tabular; align numbers in columns with `tnum`.
- Use mono for *data* (labels, deadlines, codes, figures) and Geist for language.
- Build depth from tonal layers + hairlines; save shadow for overlays and glow for the one live element.
- Keep copy formal and statute-exact — the aesthetic's institutional guardrail lives in the words.
- Vary density while preserving 18px prose, clear 16px legal labels and generous targets.
- Keep explicit filled/outlined actions, default link underlines and visible keyboard focus.

**Don't**
- Don't let it read as SaaS/crypto: no decorative gradients, gradient text, emoji, playful copy, or big boxed hero-metrics. Local photographic reading shades are the approved exception.
- Don't use mono as a decorative eyebrow above prose headings — mono names data or it goes.
- Don't set reading prose in `steel` or `signal`; use `ink` or `ink-dim`.
- Don't turn the 25 services into separate identical cards. Keep them within the six practice
  areas, with direct detail links and governing statutes; the approved hub has six category cards.
- Don't add a second accent color; the discipline of one signal is the design.
- Don't spread the display serif — it's the **home-hero headline only**; every other heading is Geist.
- Don't animate floaty/bouncy or gate content visibility on reveal classes.
- Don't use side-stripe borders, glassmorphism, or arbitrary z-index (use a semantic scale).
