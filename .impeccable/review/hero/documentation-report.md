# Boardroom hero documentation reconciliation

Written: `README.md`, `PROGRESS.md`, `PRODUCT.md`, `DESIGN.md`.

Ground truth checked: `components/home/positioning.tsx`, `hero-visual.tsx`,
`components/site/masthead.tsx`, `app/page.tsx`, `app/globals.css` and
`lib/service-imagery.ts`. Browser/build evidence supplied by implementation review:
12 viewport/theme checks, six behavior checks, 38 generated pages and scoped ESLint pass.
Final Lighthouse evidence: `lighthouse-final.json` (performance 82, accessibility 92,
LCP 4.8s, CLS 0, TBT 100ms; high-priority image-discovery audit passes).
No build or screenshot rerun was performed by the documenter.

- Palette: existing Bourse slate and amber; shared fixed photo foreground tokens in both themes.
- Type: Fraunces only on the two-line home motto, Geist for prose/controls, Geist Mono for data.
- Composition: one full-colour illustrative boardroom behind header and hero; ticker follows.
- Rules: local reading/navigation shades protect legibility; no duotone, grid, zoom or parallax in this hero.
- Behavior: photo header at home top, solid themed header after scroll, opaque menu/search overlays.

Scope: merged the approved local surface change into incumbent documentation; no identity
replacement, document restructuring or `.impeccable/design.json` creation. Preserved existing
uncommitted edits and historical decision entries. Retired only current hero-placeholder and
duotone/parallax guidance; earlier dated decisions remain as history.

Not canonized or repaired: pre-existing service-matrix/component descriptions and noncanonical
DESIGN.md structure, plus the global 2px focus-radius advisory. These are outside this hero
redesign. Existing enquiry/select and email target findings remain; LCP is above target.
