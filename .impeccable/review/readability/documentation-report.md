# Readability documentation reconciliation

Date: 2026-11-07. Disposition: synchronized.

The approved adult-reader type, contrast and control evolution is recorded in the existing
Bourse system. No visual world was replaced. Source ground truth was `app/globals.css`,
shared masthead/footer/command-bar, enquiry/résumé forms, home hero/service explorer/figures,
Services hub/details and the Insights/Contact pages. Home desktop dark and Contact mobile
light final captures were also inspected. Current concurrent navigation/Contact changes
were preserved and attributed separately in the decision log.

Files written:
- `README.md`: practical reading/control conventions and scoped accessibility language.
- `PRODUCT.md`: durable adult-reader priority, explicit actions, mobile reflow and validation scope.
- `DESIGN.md`: actual dark/light/photo primitives, 14–30px reading scale, 40–68px page titles,
  32–52px main section statements, responsive hero, 64–88px section rhythm, 52px actions,
  54px fields, control boundaries, underlines, focus and footer/form behavior.
- `.impeccable/design.json`: retained schemaVersion 2, photo colour metadata, practice
  crossfade and masthead underline/breakpoint extensions; updated the existing photo-link
  snippet and added live-bound action, field, nav and panel examples. Primitives remain
  owned by DESIGN.md; extensions record states, focus, responsive behavior and metadata.
- `PROGRESS.md`: refreshed current status/Phase 5 and prepended a dated readability decision
  entry without removing previous history or the separate header/Contact record.

Evidence recorded, without broadening its claims:
- `final-checks.json`: 166 checks, all 31 content routes at 320/1440px in both themes plus
  representative intermediate/large/landscape layouts; no recorded overflow, clipped
  headings or unlabelled/undersized fields.
- `behaviour-checks.json`: nine passed checks. All submissions mocked in the browser;
  no real messages sent.
- `contrast-checks.json`: surface contrast for dark/light ink 13.75/14.00, secondary ink
  11.09/7.64, steel 7.70/6.75, amber 8.04/4.77, errors 4.51/4.82 and control borders
  4.18/3.56:1.
- Production build: 38 generated pages; scoped ESLint passes. Full ESLint retains three
  pre-existing state-in-effect findings in figures/theme-toggle/use-mod-key.
- One app/components detector run returned no findings. Finish review's footer heading
  skip was corrected to h2; its other finding was this documentation reconciliation.
- `lighthouse-home.json`: performance 80, accessibility 100, LCP 4.6s, TBT 230ms, CLS 0.
  `lighthouse-contact-final.json`: accessibility 100, heading-order passes, no failed
  accessibility audits. The initial Contact score is superseded by this corrected rerun.
- Fresh production browser console was empty. The earlier development hydration warning
  named `data-agent-browser-located` browser instrumentation.

Not canonized or repaired: loading-performance limits, existing lint logic, client
statistics/calendar/domain placeholders and unrelated historical motion/documentation drift.
They are outside the authorized readability change. No Safari/Firefox or physical-device QA
was performed; the evidence does not establish a full WCAG or performance pass.
