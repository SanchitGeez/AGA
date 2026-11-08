---
version: alpha
name: Bourse
description: Markets-terminal design system for Ayush D Gupta & Associates — deep slate, one amber signal, Geist + Geist Mono, tabular figures. Institutional, not startup.
colors:
  # ---- Dark (nighttime default) · matches app/globals.css exactly ----
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
  whatsapp: rgb(37 211 102) # Brand-logo-only exception, fixed in both themes
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
  hero: { fontFamily: Fraunces, fontSize: "clamp(2.1875rem, 5.425vw, 5.25rem)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.025em" }
  h1: { fontFamily: Fraunces, fontSize: "clamp(2.1875rem, 1.4rem + 2.625vw, 3.71875rem)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.025em" }
  h2: { fontFamily: Fraunces, fontSize: "clamp(1.75rem, 1.1375rem + 1.75vw, 2.84375rem)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.025em" }
  body-lg: { fontFamily: Geist, fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.65 }
  body: { fontFamily: Geist, fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 }
  body-sm: { fontFamily: Geist, fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6 }
  title: { fontFamily: Fraunces, fontSize: "1.3125rem", fontWeight: 500, lineHeight: 1.4 }
  title-lg: { fontFamily: Fraunces, fontSize: "1.625rem", fontWeight: 500, lineHeight: 1.3 }
  field: { fontFamily: Geist, fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 }
  action: { fontFamily: Geist, fontSize: "1rem", fontWeight: 600, lineHeight: 1.5 }
  label: { fontFamily: Geist, fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.5 }
  mono: { fontFamily: Geist Mono, fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6, fontFeature: "tnum" }
  supporting: { fontFamily: Geist Mono, fontSize: "0.8125rem", lineHeight: 1.5 }
  figure: { fontFamily: Geist Mono, fontSize: "clamp(1.75rem,1.05rem + 2.1vw,2.625rem)", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.025em", fontFeature: "tnum" }
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
- Real statutory data in mono; Geist prose and a single Fraunces heading system.
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

The client-approved revision of 8 November 2026 uses **Fraunces for headings and the
wordmark**, Geist Sans for body and controls, and Geist Mono for actual data. This
supersedes the earlier hero-only serif rule. The font files remain self-hosted.

The shared scale is 13 / 14 / 16 / 18 / 21 / 26px. Body text is 16px, introductions
18px. The roughly 10–15% reduction follows Ayush’s feedback; controls retain 44–54px
minimum targets. Main titles, section titles and hero sizes are reduced proportionally.
Long names wrap rather than clip, and the slate/amber contrast tokens are unchanged.

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
  code, filing name and date below 1024px, with a visible Due label. Desktop uses
  an 11rem code column, flexible filing text and a minimum 22rem Due column.
- The homepage practice explorer pairs a left category rail with one right-hand service
  panel from 1024px; below that, the fixed-height selected panel sits below the category list with a visible photograph.
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
  partial gear) beside the two-line Fraunces wordmark “AYUSH D GUPTA” / “& ASSOCIATES”.
  Regenerated as transparent flat line art in `public/brand/firm-emblem.png`; the smaller
  `firm-emblem-web.png` is used as a CSS alpha mask (`.firm-emblem`) so the mark follows
  `signal` in both themes. Shared `components/site/brand.tsx` in the masthead;
  `ink` lettering and the full name remain on mobile. The hero watermark was removed at
  the client's request. Browser and Apple touch icons use the same emblem. This supersedes
  the initial ADG concept, at the client's request.
- **Masthead / top-bar** — retains 80/96/112px heights, with a compact full-name serif
  wordmark and “A Peer-Reviewed Firm” below. Navigation: Home, About us, Services,
  Insights, Career, Contact. Centered desktop navigation starts at 1440px with 18–20px
  links; below that, all routes are available in the centered mobile menu. The selected
  route keeps the amber underline. Home remains transparent over the hero, then solid
  on scroll; menu/search overlays stay opaque. Controls retain generous hit targets.
- **Ticker** — directly below the home hero; horizontal rail of statutory deadlines in mono; imminent items in `signal`
  with a small live-dot glow; continuous marquee scroll (linear). Reduced-motion → static list.
- **Command-bar** — native modal `<dialog>` in the browser top layer. A horizontally
  centered `surface` panel (max 672px wide / 640px content height) stays inside the viewport,
  including short landscape screens. Top position stays fixed while results change. Header
  and footer remain visible; only results scroll. Names wrap above readable practice-area
  labels, with a text Close action and a full-width input focused on open. Searches all
  31 services and page shortcuts by name, area or governing statute; no result truncation.
  Combobox/listbox semantics, Arrow/Enter navigation, Escape/backdrop dismissal, explicit
  Tab wrapping, focus restoration, and preservation of the prior body-scroll setting.
  Uses the existing keyboard shortcut and open event. This supersedes the original flex
  overlay, which stretched the panel vertically and produced a large blank area.
- **Homepage practice explorer** (`components/home/service-cards.tsx`) — the selected
  category's full-colour photograph covers the entire section. Category buttons omit
  service counts; one expanded service panel shows names, plain-English service summaries and direct
  detail links. On desktop the navigation occupies the shaded left rail and the panel sits
  at lower right; on mobile it stays below the category list, with an additional visible
  image. Panels are 38rem high on desktop and 42rem below 1024px, scrolling internally.
  Hover or keyboard focus selects a category; touch/click remains supported. An amber
  progress line advances to the next category every six seconds while visible. Reading
  hover, keyboard focus and the explicit pause control suspend playback; reduced motion
  disables automatic playback. Up/Down and Home/End select categories; native buttons retain Tab, Enter and Space
  behavior. `aria-expanded`, controlled regions and `hidden` keep selection explicit.
  Formation is initial; other background images mount on first selection. The previous
  image stays visible until the new one loads, then opacity crossfades over 300ms. A failed
  selected image reveals `photo-ground`; controls and service links remain usable.
- **Services directory** (`app/services/page.tsx`) — six consistent photograph-backed
  category cards, each containing its name, description and complete lower service
  list. Two columns at 1024px+, one on smaller screens; 12px corners, 20px padding (28px
  from 640px), 52rem fixed height with internal list scrolling and 32px grid gaps. Category jump navigation and all
  31 links and plain-English summaries remain available without expansion. A restrained local reading gradient
  protects both introduction and list while retaining visible image colour.
- **Service detail introduction** (`app/services/[slug]/page.tsx`) — every service uses
  its category photograph behind the breadcrumbs, Fraunces heading, tagline and governing
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
  labels. Client figures are 240+ clients, 5+ years and 40+ entities incorporated,
  all using the same numeric count-up treatment. Shared section spacing clears both
  edges of the row.
- **Buttons** — `.action-primary` gives the key action an amber fill; `.action-secondary`
  uses a visible `control-line` outline on `surface`. Both have 52px minimum height,
  16px semibold Geist text, 12px/24px padding and 6px corners. Hover changes fill or boundary;
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

**Theme:** the before-paint `<head>` script selects light from 06:00 to 18:00 in the
visitor’s local time and dark overnight. A saved `localStorage.theme` choice takes
precedence; invalid or unavailable storage falls back to the clock. The theme toggle
observes the applied document theme and remembers manual changes. Dark tokens remain
on `:root`; light overrides use `data-theme="light"`.

**z-index scale (semantic, as used):** ticker/masthead sticky `z-40`, WhatsApp float `z-30`;
the search dialog uses the browser's native top layer. No arbitrary 999s.

## Do's and Don'ts

**Do**
- Keep amber to a small percentage of any viewport — live, active, figure, one CTA.
- Make every figure real and tabular; align numbers in columns with `tnum`.
- Use mono for *data* (labels, deadlines, codes, figures) and Geist for language.
- Build depth from tonal layers + hairlines; save shadow for overlays and glow for the one live element.
- Keep copy formal and statute-exact — the aesthetic's institutional guardrail lives in the words.
- Vary density while preserving 16px prose, clear 16px legal labels and generous targets.
- Keep explicit filled/outlined actions, default link underlines and visible keyboard focus.

**Don't**
- Don't let it read as SaaS/crypto: no decorative gradients, gradient text, emoji, playful copy, or big boxed hero-metrics. Local photographic reading shades are the approved exception.
- Don't use mono as a decorative eyebrow above prose headings — mono names data or it goes.
- Don't set reading prose in `steel` or `signal`; use `ink` or `ink-dim`.
- Don't turn the 25 services into separate identical cards. Keep them within the six practice
  areas, with direct detail links and governing statutes; the approved hub has six category cards.
- Don't add a second accent color; the discipline of one signal is the design.
- Use Fraunces consistently for headings and the wordmark; keep body and controls in Geist.
- Don't animate floaty/bouncy or gate content visibility on reveal classes.
- Don't use side-stripe borders, glassmorphism, or arbitrary z-index (use a semantic scale).

## Client revision — 8 November 2026

- The service explorer’s minus button now closes the panel and suspends rotation;
  hovering a different practice or selecting it reopens the fixed-size panel. Touch
  input selects on tap without the mouse-hover event consuming the first tap.
- Firm vision and mission appear prominently near the top of About only and rotate
  every five seconds with manual dots and pause.
  Hover/focus and offscreen visibility suspend playback; reduced motion shows both
  statements statically. Both slides reserve their natural height to prevent jumps; the longer mission uses
  a slightly smaller display scale to avoid excessive empty space on mobile; the inactive slide uses
  data/ARIA state rather than the HTML hidden attribute, so Tailwind’s hidden reset
  cannot suppress the static reduced-motion presentation.
- About separates firm and principal copy. Home adds How we work, entity types and
  an assignment-specific timeline explanation. Professional collaborations have a page.
- Overview service cards use plain-English taglines; full statute references remain on
  detail pages with “Section” spelled out. All 31 detail pages have three FAQs, a starter
  documents list and a direct enquiry action with the service preselected below.
- Footer is reduced to navigation, Our office and important links, with privacy/terms
  links and LinkedIn. Internal footer destinations open in new tabs as requested by the
  client. Call and WhatsApp are both available in the mobile floating control.
- Contact embeds Google’s actual share-generated map for the supplied location and
  retains a directions link. Office hours are deliberately absent.
- Forms have a distinct company field and hidden website spam trap, server-enforced
  consent, length/email checks, failure recovery and announced success. Résumés remain
  email attachments; no new storage service or analytics was introduced.

### Owner-directed visual features

Capital Markets now uses a photograph-led editorial composition after the client
rejected the circle network. A tall illustrative exchange photograph anchors the left;
the right combines the heading, concise introduction, four grouped service areas and
all seven direct links. No service information requires a selector. The layout stacks
on mobile, and photo/link hover motion respects reduced motion. The component renders
on the server and obsolete diagram styles are removed.

How we work uses connected stage circles on a horizontal desktop rail, a vertical mobile
rail and a selected detail panel. Stage numbers communicate actual sequence. Neither
feature adds scroll hijacking, continuous decorative movement or a motion dependency.

Advisory & Governance has a new generated photograph of walnut chess pieces, a burgundy
folio and fountain pen. Its optimized WebP is distinct from the hero’s original boardroom;
image metadata, focal crop and descriptive alt text are in `lib/service-imagery.ts`.

The floating WhatsApp action uses Phosphor’s filled WhatsApp logo in fixed brand green
(`--whatsapp`, exposed as `text-whatsapp`) in both themes. This is an explicit client
exception for brand recognition, not a second general interface accent. The chat label
and mobile call action remain accessible native links.

The Insights calendar uses matching header/row tracks of
`11rem minmax(0,1.1fr) minmax(22rem,1fr)` from 1024px. Deadline text is left-aligned,
with relaxed line height and 32px column gaps; smaller screens use labelled stacked
entries instead of compressing all three columns.
