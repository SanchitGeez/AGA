---
version: alpha
name: Bourse
description: Markets-terminal design system for Ayush D Gupta & Associates — deep slate, one amber signal, Geist + Geist Mono, tabular figures. Institutional, not startup.
colors:
  # ---- Dark (default) · matches app/globals.css exactly ----
  bg: oklch(0.19 0.015 250)            # slate — page surface
  surface: oklch(0.24 0.018 250)       # panel — cards, matrix, ticker rail
  surface-2: oklch(0.285 0.02 250)     # raised: hover / command-bar / chips
  hairline: oklch(0.34 0.02 250)       # 1px borders, grid rules, dividers
  ink: oklch(0.94 0.005 250)           # primary text, headings
  ink-dim: oklch(0.8 0.012 250)        # secondary prose
  steel: oklch(0.64 0.05 250)          # muted — labels, metadata, captions
  signal: oklch(0.78 0.14 75)          # amber ACCENT/TEXT (mode-dependent): figures, links, live text
  signal-solid: oklch(0.8 0.14 75)     # amber FILL (fixed both modes): CTAs, live dots, active chip
  signal-solid-hover: oklch(0.74 0.13 75)
  on-signal: oklch(0.19 0.02 75)       # dark ink used on amber fills
  due: oklch(0.78 0.14 75)             # deadline imminent (= signal)
  overdue: oklch(0.64 0.17 25)         # restrained red, used sparingly
  filed: oklch(0.72 0.08 165)          # muted teal-green, on-track
  # ---- Light (ships per reference; applied under [data-theme=light]) ----
  # signal-solid / signal-solid-hover / on-signal are NOT overridden — the bright
  # amber fill + dark text works on both themes. Only accent/text tokens shift.
  light-bg: oklch(0.985 0.003 250)
  light-surface: oklch(0.965 0.005 250)
  light-surface-2: oklch(0.94 0.006 250)
  light-hairline: oklch(0.9 0.008 250)
  light-ink: oklch(0.26 0.02 255)
  light-ink-dim: oklch(0.42 0.02 255)
  light-steel: oklch(0.5 0.03 255)
  light-signal: oklch(0.62 0.15 62)    # amber darkens for text contrast on white
typography:
  display:  { fontFamily: Geist, fontSize: "clamp(2.75rem, 1.5rem + 4vw, 4.5rem)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.03em" }
  hero:     { fontFamily: Fraunces, fontSize: "clamp(2.5rem, 1.4rem + 4vw, 4.5rem)", fontWeight: 500, lineHeight: 1.03, letterSpacing: "-0.015em" }  # HERO HEADLINE ONLY — variable display serif, financial-broadsheet gravitas (utility: font-serif)
  h1:       { fontFamily: Geist, fontSize: "clamp(2.25rem, 1.4rem + 3vw, 3.25rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.025em" }
  h2:       { fontFamily: Geist, fontSize: "clamp(1.6rem, 1.2rem + 1.5vw, 2.25rem)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.02em" }
  h3:       { fontFamily: Geist, fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.01em" }
  body-lg:  { fontFamily: Geist, fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.6 }
  body:     { fontFamily: Geist, fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 }
  body-sm:  { fontFamily: Geist, fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.55 }
  label:    { fontFamily: Geist Mono, fontSize: "0.75rem", fontWeight: 500, lineHeight: 1.4, letterSpacing: "0.04em", fontFeature: "tnum" }  # data labels / column heads (UPPERCASE)
  mono:     { fontFamily: Geist Mono, fontSize: "0.8125rem", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0.01em", fontFeature: "tnum" }
  figure:   { fontFamily: Geist Mono, fontSize: "clamp(2rem, 1.2rem + 2.5vw, 3rem)", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.01em", fontFeature: "tnum" }
rounded:
  # As built we use Tailwind v4's DEFAULT radius scale (no custom theme radii).
  # Mapping to the utilities actually in the code:
  controls: 6px   # rounded-md — buttons, inputs, chips, icon buttons
  panel: 12px     # rounded-xl — panels, cards, command-bar, figures container
  mark: 4px       # rounded — the amber logo square
  full: 9999px    # rounded-full — status dots, category pills
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  section: "clamp(4rem, 8vw, 8rem)"
components:
  button-primary:   { backgroundColor: "{colors.signal-solid}", textColor: "{colors.on-signal}", typography: "{typography.mono}", rounded: "{rounded.controls}", height: 44px, padding: "0 20px" } # hover → signal-solid-hover
  button-secondary: { backgroundColor: transparent, textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.controls}", height: 44px, padding: "0 20px" } # 1px {colors.hairline} border
  panel:            { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", rounded: "{rounded.panel}", padding: "{spacing.lg}" }             # 1px {colors.hairline} border
  input:            { backgroundColor: "{colors.bg}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.controls}", height: 44px, padding: "0 14px" } # focus → 1px {colors.signal}
  chip:             { backgroundColor: "{colors.surface-2}", textColor: "{colors.steel}", typography: "{typography.label}", rounded: "{rounded.full}", padding: "4px 10px" } # active filter → signal-solid fill
  matrix-row:       { backgroundColor: transparent, textColor: "{colors.ink}", typography: "{typography.body-sm}" }                                     # 1px bottom {colors.hairline}; hover → {colors.surface}
  ticker-item:      { backgroundColor: transparent, textColor: "{colors.steel}", typography: "{typography.mono}" }                                     # due date → {colors.signal}
  command-bar:      { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.mono}", rounded: "{rounded.panel}", padding: "{spacing.sm}" }
---

# Bourse — Design System

Design system for **Ayush D Gupta & Associates**. Read alongside [PRODUCT.md](./PRODUCT.md),
which carries the philosophy, IA, and scroll narrative. This file is *how it looks and moves*.

## Overview

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
will not let them get it wrong.

## Colors

Strategy: **Committed dark.** The slate surface carries the whole page; amber is the single
signal, spent sparingly on what is live, active, or a figure. No second accent. No gradients.

| Role | Token | Use |
|---|---|---|
| Page | `bg` | body background, the slate field everything sits on |
| Panel | `surface` | matrix, ticker rail, cards, the positioning panel |
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

**Amber is a scalpel.** If more than a small percentage of a viewport is amber, cut it back.
Live figures, the active deadline, the primary CTA, focus rings — that's the whole budget.

**Status colors** (`due` / `overdue` / `filed`) appear *only* in the compliance calendar and
deadline contexts, never as general UI accents. `due` is literally `signal` — imminence is
the amber's natural job.

**Contrast (WCAG AA, verify in build):**
- Body = `ink` on `bg`/`surface` → ~12–15:1. Never set body text to `steel`.
- `steel` on `bg` ≥ 4.5:1 ✓; `steel` on `surface` is tighter — verify, bump toward `ink` if close.
- `signal` on `bg`/`surface` ≥ 4.5:1 → fine for figures and small/bold text, **not** paragraphs.
- `on-signal` on `signal` fill ≥ 4.5:1 → button text safe.
- Light mode: amber drops to `light-signal` for any text/icon use; the bright `signal`
  survives only as a *fill* with `on-signal` text on top.

## Typography

Two workhorse families on a real contrast axis — a grotesque and its monospace sibling — plus
**one display serif used as a scalpel** (hero headline only):

- **Geist** (grotesque) — all headings and prose. Neutral, precise, modern without being trendy.
- **Geist Mono** (tabular) — every figure, all data labels, ticker, metadata, column headers,
  search input. `font-feature-settings: "tnum"` on all numerics so figures align in columns.
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

Scale is modular with fluid `clamp()`; display caps at 4.5rem (never shouts). Line-height on
dark body is 1.7 (light type on dark reads lighter and needs air). Use `text-wrap: balance`
on h1–h3, `text-wrap: pretty` on prose. Body measure capped at 68ch.

**The mono label is a *functional* element, not an eyebrow.** Uppercase mono `label` marks
real metadata: column headers (`SERVICE`, `CATEGORY`, `DUE`), figure captions, ticker codes,
deadline dates. It is **banned as a decorative kicker above prose section headings** — that
would be the AI-eyebrow tell wearing a terminal costume. If a mono label isn't naming data,
delete it.

## Layout & Spacing

- **A visible grid is the identity.** Content sits on a 12-column max-width grid (~1200px)
  with hairline rules delineating regions — the SEBI panel, the figure row, the service
  matrix, the meta rows all share the terminal's ruled structure (see the reference comp).
- **Density vs. air is intentional** (Principle 2). The matrix and ticker are tight and
  gridded; positioning, the person, and the CTA use generous `section` spacing. Alternate
  deliberately; never uniform.
- Spacing scale is 4px-based. Section vertical rhythm = `spacing.section` (`clamp(4rem,8vw,8rem)`),
  reduced between tightly-related blocks.
- Responsive grids without breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`. Flex for 1D
  rows (ticker, meta rows), Grid for the matrix and figure clusters.
- The service matrix is a real table on desktop (aligned columns, hairline rows); on mobile
  it reflows to stacked rows with the mono `label` promoting each field — it never becomes a
  pile of identical cards.
- Test every heading at 360 / 768 / 1280px. Long service names (e.g. "Regulatory
  Registrations & Licenses") must not overflow — reduce clamp or wrap, never clip.

## Elevation & Depth

Dark UI: depth comes from **tonal layers + hairlines,** not drop shadows.

- Stack: `bg` → `surface` → `surface-2`. Each step up is +~0.045 L and gains a 1px
  `hairline` border. That layering *is* the depth model.
- **Shadows only for true overlays** (command-bar dialog, mobile menu, modals):
  `0 16px 48px -12px oklch(0 0 0 / 0.6)`.
- **One glow, used once:** a faint amber ring on the *active* live element (the imminent
  ticker item and focus states) — `0 0 0 1px signal, 0 0 24px -8px signal`. Glow anywhere
  else reads as crypto-dashboard; hold the line.

## Shapes

Moderately rounded, matching the reference panels — soft enough to read *refined
institutional* rather than brutalist-terminal (this softening is part of the tech-startup
guardrail).

As built, using Tailwind's default radius scale (no custom radii in the theme):

- `rounded-xl` (12px) — panels, cards, the matrix container, command-bar, figures row.
- `rounded-md` (6px) — buttons, inputs, chips, icon buttons.
- `rounded` (4px) — the amber logo square.
- `rounded-full` — status dots, category/filter pills.
- Corners are consistent; borders are 1px `hairline`. No heavy strokes, no double borders.

## Components

- **Masthead / top-bar** — compact, dense, keyboard-feel. Firm mark (amber initial + name),
  slim mono nav, a persistent command-bar trigger showing `⌘K`. Sticky, `surface` with a
  hairline bottom rule. This is the terminal header.
- **Ticker** — horizontal rail of statutory deadlines in mono; imminent items in `signal`
  with the single glow; continuous marquee scroll (linear). Reduced-motion → static list.
- **Command-bar** — `⌘K` search across all 25 services + section links. Built as a fixed
  full-screen overlay (`z-50`) with a scrim + a `surface-2` panel at 12vh, mono input,
  overlay shadow — chosen over native `<dialog>` for reliable React state control; it opens
  via a global `keydown` (⌘/Ctrl+K) or an `open-command-bar` window event the masthead
  dispatches. Arrow/Enter/Esc keyboard nav. The primary nav affordance for the 25-service
  problem. (Full focus-trap deferred to Phase 5 harden.)
- **Service matrix** — the anti-card. All 25 rendered under **6 group headers** (name + blurb +
  count) so the practice structure is visible before any interaction. Columns: `UNDER · SERVICE ·
  →`, where **`UNDER` is the governing statute** (mono `law` from `lib/services.ts` — `§204`,
  `SEBI LODR`, `FEMA 1999`…), the real data that makes it read as an instrument, not a list.
  Above it: a mono **search input** (name / statute / area) and **counted filter chips**
  (`All 25`, `Capital Markets 3`…). Hairline rows, hover → `surface`, whole row links to the
  detail page. Empty state points to ⌘K. Reused (grouped, no search) on the `/services` hub.
- **Hero visual** (`components/home/hero-visual.tsx`) — the home hero's right column. A
  photograph rendered **grayscale + slate `mix-blend-color` + amber `mix-blend-overlay`** (the
  Bourse duotone), with a subtle scroll **parallax** (rAF, reduced-motion-aware). Until
  `public/hero.jpg` exists it shows a ruled-grid placeholder. Pick photos for composition, not
  colour — the treatment unifies anything to the theme. Institutional/architectural or
  documentary subjects only; **no people/handshakes** (the CA-template tell).
- **Forms** (`enquire.tsx`, `resume-form.tsx`) — `surface` panel, `bg`-inset mono-adjacent
  fields, `signal` focus border, placeholder ≥4.5:1. Four states: idle → **sending** (button
  disabled, "Sending…") → **sent** (amber ✓ + confirmation, form replaced) → **error** (mono
  `overdue` message + a WhatsApp fallback link; the primary CTA never dead-ends). A hidden
  honeypot field (`company`) sits in every form. One key CTA (`button-primary`), WhatsApp as
  `button-secondary`. See README → Email for the backend.
- **Figure / count-up** — mono `figure`, tabular, `signal`-colored numerals with a `steel`
  mono `label`. Rendered inline in a ruled row (Clients · Years · ROC filings), **not** as
  boxed hero-metric cards.
- **Buttons** — `button-primary` (amber fill, `on-signal` text) for the single key CTA per
  view; `button-secondary` (hairline border, `ink`) for everything else. No shadows, no
  gradients. Focus ring in `signal`.
- **Panel / card** — `surface`, 1px `hairline`, `rounded-xl`. Used for the positioning block,
  firm-profile readout, figures row, and grouped content. Never nest a card in a card.
- **Chip** — mono category/filter pills; `surface-2`, `steel` text, `rounded-full`; the active
  filter chip inverts to a `signal-solid` fill with `on-signal` text.
- **Input** — mono, `bg` (insets below the `surface` form panel), hairline, 44px min height.
  `signal` focus border; placeholder meets 4.5:1 (not default gray).

## Motion

Crisp and snappy — "everything fast, nothing floaty." **As built, Phase 1 is CSS-only** —
no motion library yet (add Motion/GSAP only when a section genuinely needs choreography).

- **Durations:** 80ms (micro), 140ms (fast, the default), 200ms (base), 320ms (rare, large).
- **Easing:** ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`. No bounce, no elastic.
- **Signature motions (implemented):**
  - Figures **count up** when scrolled into view — `IntersectionObserver` + `requestAnimationFrame`, one-shot (`components/home/figures.tsx`).
  - The ticker scrolls continuously (linear CSS `@keyframes`, `.animate-marquee`); pauses on hover; the leading "live" dot glows.
  - Command-bar opens with a 140ms scale `0.98→1` + fade (`@keyframes cmd`).
  - Matrix rows / links: fast background wipe to `surface` on hover.
  - Hero visual: subtle scroll **parallax** on the duotone photo (`requestAnimationFrame`, small
    ±22px travel, disabled under reduced-motion) — `components/home/hero-visual.tsx`.
  - Still no uniform scroll-reveal reflex — the ticker, count-ups, hover wipes, and the one
    parallax carry the motion; add per-section reveals only where they earn it.
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
| `--surface` | `bg-surface` | panels, matrix, ticker, form panel |
| `--surface-2` | `bg-surface-2` | command-bar, hover, chips |
| `--hairline` | `border-hairline` | also the default `*` border color |
| `--ink` / `--ink-dim` | `text-ink` / `text-ink-dim` | body / secondary |
| `--steel` | `text-steel` | mono labels, metadata |
| `--signal` | `text-signal` `border-signal` | amber accent/text |
| `--signal-solid` | `bg-signal-solid` | amber fills / live dots |
| `--on-signal` | `text-on-signal` | text on amber fills |
| `--due` `--overdue` `--filed` | `text-due` etc. | calendar status only |

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

**z-index scale (semantic, as used):** ticker/masthead sticky `z-40`, WhatsApp float `z-30`,
command-bar overlay `z-50`. No arbitrary 999s.

## Do's and Don'ts

**Do**
- Keep amber to a small percentage of any viewport — live, active, figure, one CTA.
- Make every figure real and tabular; align numbers in columns with `tnum`.
- Use mono for *data* (labels, deadlines, codes, figures) and Geist for language.
- Build depth from tonal layers + hairlines; save shadow for overlays and glow for the one live element.
- Keep copy formal and statute-exact — the aesthetic's institutional guardrail lives in the words.
- Vary density: tight matrix/ticker, airy argument/person/CTA.

**Don't**
- Don't let it read as SaaS/crypto: no gradients, gradient text, emoji, playful copy, or big boxed hero-metrics.
- Don't use mono as a decorative eyebrow above prose headings — mono names data or it goes.
- Don't set body text in `steel` or `signal`; body is `ink`.
- Don't render the 25 services as an identical-card grid — it's a matrix, or it's a routing failure.
- Don't add a second accent color; the discipline of one signal is the design.
- Don't spread the display serif — it's the **home-hero headline only**; every other heading is Geist.
- Don't animate floaty/bouncy or gate content visibility on reveal classes.
- Don't use side-stripe borders, glassmorphism, or arbitrary z-index (use a semantic scale).
