# Progress & Decisions

Working log + decision record for the Ayush D Gupta & Associates site. **New here? Read
[README.md](./README.md) first** (stack, run, file map), then this file. Strategy lives in
[PRODUCT.md](./PRODUCT.md); the visual system in [DESIGN.md](./DESIGN.md); the source content
brief is `Website (1).md`. The decision log below is the "why" behind everything — read it
before undoing anything, so a deliberate choice isn't mistaken for an accident.

---

## At a glance (2026-11-08)

- **What works:** the whole site. Home + About, Services (hub + 31 detail pages with full
  statutory scope), Insights (compliance calendar), Career (résumé upload), Contact. Enquiry &
  résumé forms email the firm via Resend (with a WhatsApp fallback). SEO: metadata, JSON-LD,
  sitemap, robots. Dark + light. Build is green at **47 generated pages**.
- **To make forms send in prod:** set `RESEND_API_KEY` (see README → Email). Nothing else is
  wired to a secret.
- **Latest client revision (8 November):** Ayush’s feedback is treated as the business
  brief. Smaller type, serif headings/wordmark, explicit Home/About us navigation and
  peer-reviewed credential; 240+ clients / 5+ years / 40+ entities incorporated. Expanded
  service scopes and six additional detail pages (31 services total), documents/FAQs,
  consent-backed forms, privacy/terms, partnerships, simplified footer, Maps and LinkedIn.
  Capital Markets now uses a photograph-led editorial layout with grouped service links; How we work has a
  connected four-stage sequence. Vision/mission is a larger rotating feature near the top
  of About only. Advisory & Governance has its own generated chess/folio photograph;
  the original hero is unchanged. Office hours are explicitly omitted.
- **Previous UI work:** the site-wide adult-reader readability pass is complete: 18px prose,
  20px introductions, larger headings, clearer contrast, 52px actions, 54px labelled fields,
  default link underlines and readable mobile reflow. Both themes retain Bourse. The approved
  full-colour Boardroom opening and six-category service photography remain. Concurrent header
  work supplies centered About-first navigation and an active underline; Contact has one
  “Start a conversation” h1. Search remains keyboard-operable with focus restoration.
- **Next planned work:** improve production loading performance, complete broader browser/
  physical-device QA, and resolve client content/configuration placeholders. The scoped
  readability phase is complete; this does not establish full WCAG conformance.
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
| **5 — Polish** | SEO/schema, performance, a11y, cross-browser/mobile QA | Partial: header/search, layout, Boardroom/services and site-wide readability completed 2026-11-07; loading performance, broad accessibility and cross-browser/device QA remain |

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

*2026-11-08 — Vercel dependency-install recovery*

- The production deployment for `5ae886b` failed. Reproduced a CI install failure locally:
  `ERR_PNPM_OUTDATED_LOCKFILE` because the pnpm importer lacked the newly added Phosphor
  dependency, while package.json and the canonical npm lockfile already included it.
- Removed the obsolete pnpm lockfile and pnpm-only build-permission workspace file.
  The repository now exposes only package-lock.json for Vercel package-manager detection,
  matching the documented npm workflow rather than maintaining two competing lockfiles.
- Validated a clean archived checkout with `npm ci` and `npm run build`, without local
  environment files or existing node_modules. Install succeeds and all 47 pages build.
  The cloud redeployment is monitored after the fix is pushed.

*2026-11-08 — Insights deadline-column spacing before publishing*

- Replaced the narrow 200px Due column with a flexible column at least 22rem wide,
  aligned its text to the left and matched the header/row grid and column gaps.
- The calendar stays stacked below 1024px, with a visible Due label for each entry;
  increased row spacing and line height keep longer deadline qualifiers readable.
- Full lint, content checks and production build pass (47 generated pages). Desktop,
  tablet and mobile spacing is checked in both themes before the main-branch push.

*2026-11-08 — Main-branch publishing preparation*

- Prepared all client-authorised website revisions, new service/legal/partnership pages,
  image assets, icon dependency and review evidence for the requested main-branch push.
- Fresh production build passes with 47 generated pages; full ESLint, service-guide/
  recurring-calendar checks and whitespace checks pass. Local main matches origin/main
  before the commit. Environment files remain ignored and are not included.
- The owner-dependent email-delivery, Google verification and physical-device checks
  recorded below remain pending; this publishing step does not mark them complete.

*2026-11-08 — Capital Markets rebuilt after client rejection of the diagram*

- Replaced the rejected circle network with an asymmetric, photograph-led composition:
  a substantial exchange image and local caption shade beside a tighter introduction,
  four clearly grouped practice areas and all seven direct service links. The section
  is a Server Component again; no selector state or hidden service content remains.
- Removed obsolete map geometry, diagram styles and introductory selection instructions.
  Image hover and link-arrow transitions respect reduced motion. Retained the current
  Bourse type, palette, section anchor and service URLs.
- Replaced the floating WhatsApp amber dot with Phosphor’s filled WhatsApp logo in
  brand green. Added `@phosphor-icons/react` 2.1.10, using a tiny client icon leaf and
  preserving the native chat link and mobile Call action. The green token is scoped
  to this requested brand mark rather than used as another general UI accent.
- Validation: production build passes (47 generated pages); changed-source lint passes.
  Ten browser cases at 320/390/768/1024/1440px in both themes confirm all seven
  service links remain visible, no horizontal overflow, the green SVG logo renders
  and reduced motion disables the image transition. Full lint and whitespace checks
  pass; the scoped UI detector returns no findings. Evidence is recorded in
  `.impeccable/review/client-feedback/editorial-checks.json`.

*2026-11-08 — Owner feedback implemented and visual sections expanded*

1. **Authority and design:** the user confirmed the reviewer is Ayush, the firm’s owner,
   and authorised all requested changes. This supersedes earlier hero-only Fraunces and
   larger-type preferences. Body/actions are 16px, introductions 18px; headings and
   figures are approximately 10–15% smaller. Fraunces headings/wordmark, Geist body/UI
   and Mono data retain slate/amber and comfortable control targets. Header includes Home,
   About us and “A Peer-Reviewed Firm”. The brand link’s accessible name includes the
   new visible credential. No service counts were reintroduced.
2. **Content and identity:** metrics are now owner-specified 240+ clients, 5+ years and
   40+ entities incorporated. Firm and personal copy are separated; Career uses the
   requested invitation and experienced-personnel guidance. Removed calendar meta-copy,
   standardised Our office, removed Mumbai only from the visible footer description,
   retained local metadata/address/structured data, and simplified the footer. Added
   SEBI, ICSI, IBBI, MSME and the supplied LinkedIn profile.
3. **Services:** explicitly surfaced LLP, trust, society and Section 8 formation; added
   capital reconciliation, annual-report support, Annual Secretarial Compliance Report,
   RERA, Audit/Tax/GST support and DPDP privacy setup. Secretarial Audit is grouped under
   Capital Markets. Restructuring covers tax/legal/compliance; FEMA scope includes FLA;
   IPR includes designs and international filing. All 31 services have scope, starter
   documents and three relevant FAQs. Overview cards show plain-English taglines; detail
   references spell out Section. Direct enquiry actions preserve service preselection.
4. **Interactions and conversion:** practice minus now closes; mouse hover and touch
   activation follow separate paths so a first tap does not immediately close a selection.
   Home adds a connected service map and four-stage process with real linked services,
   hover/focus/click selection and reduced-motion transitions. Vision/mission rotates
   every five seconds on About only, with dots, named controls, pause, hover/focus and
   offscreen suspension. Reduced motion exposes both statements and removes rotation.
   A dedicated partnership page and enquiry selection support CA/CS/law-firm collaboration.
5. **Forms and privacy:** real organisation field is separate from the renamed hidden
   website spam trap in both forms and the endpoint. Consent is required in browser and
   server; added origin, size, length/email and résumé checks, handled delivery exceptions,
   announced success and retained failure recovery. Public email and default recipient
   use the existing non-staff info address; owner confirmation is still requested.
   Privacy and Terms/Disclaimer pages describe the actual email-only implementation.
   Retention details await the owner; no arbitrary retention period is asserted. No
   analytics integration exists, so an analytics cookie banner is not introduced.
6. **Maps and imagery:** owner supplied the exact Maps location and LinkedIn URL and
   explicitly said not to publish hours. Google’s Share → Embed dialog provided the
   actual embeddable map, with a directions link retained. New Advisory & Governance
   image was generated with the built-in image tool; the original boardroom remains the
   hero. Master: `design/service-imagery/advisory-governance-master.png`; web export:
   `public/services/colour/advisory-governance.webp` (89,550 bytes). Prompt/provenance:
   adjacent `.webp.json`. Illustrative-image disclosure remains in Terms/Disclaimer.
7. **Calendar and SEO:** added listed-company RSCA, shareholding, annual secretarial
   compliance and conditionally applicable SDD reference deadlines. Multi-date obligations
   sort by their next occurrence. Removed fixed AGM assumptions and the obsolete annual
   director-KYC entry; the revised cycle is backed by the ICAI reproduction of MCA’s
   update. Calendar sources/applicability notes are linked. Removed meta keywords,
   added descriptive hero-image alt text, retained sitemap/robots and local markup,
   added legal/partnership sitemap URLs and a custom 404.
8. **Validation:** full lint and production build pass (47 generated pages). Content
   checks cover all 31 scopes/guides and recurrence edge cases; seven API negative/spam
   checks pass without sending mail. Initial Chromium review covered 102 route/theme/
   viewport cases, 40 sitemap routes and 42 internal destinations; the custom route
   returns HTTP 404. Interaction tests cover collapse, keyboard/touch-path selection,
   five-second rotation/pause, service/partnership defaults, required consent and announced
   mocked success. Final visual checks and Lighthouse results are recorded below.
9. **Owner-dependent launch work:** local `RESEND_API_KEY` is absent, so a real email and
   physical-phone receipt test cannot run yet. Need final public-email/domain confirmation,
   enquiry/résumé retention practices and Search Console/Business Profile access/status.
   Real iPhone/Android/Safari testing requires devices or an appropriate browser service.
   No deployment, Google account creation/verification or real mail was performed.
10. **Final visual verification:** 35 additional checks cover the new diagrams and About
    feature at 320/390/768/1024/1440px in both themes, all cluster/process selections,
    measured five-second rotation, both statements visible and accessible under reduced
    motion, and distinct advisory/hero images. Google’s embedded location finished loading
    with its place card, map and controls. Browser errors were empty. Production Lighthouse
    Home scores: performance 83, accessibility 100, best practices 100 and SEO 100; LCP
    4.7s and CLS 0. The label-in-name warning was addressed by deriving the home link’s
    name directly from the full visible brand. The focused accessibility recheck passes (100, label-in-name audit passing).
    The UI detector reported one false positive: SVG `stroke-width` interpolation was
    mistaken for layout-width animation; it only paints the connection path. These checks
    do not constitute a physical-device test or a complete WCAG audit.

*2026-11-07 — Client-confirmed incorporation metric*

- Replaced the qualitative peer-reviewed card with the client-supplied **40+ Companies
  Incorporated** on Home and About through shared firm data. All three cards now use
  the same numeric count-up treatment; removed the unused text-value styling branch.
- Validation: production build passes (38 generated pages); changed-source ESLint and
  whitespace checks pass.

*2026-11-07 — Client metrics, practice browsing, About identity and time-based theme*

- Replaced 500+/10+/2,400+ with client-supplied 200+ clients, 5+ years and the existing
  peer-reviewed-firm credential. Shared Figures now has section spacing on both sides.
- Removed promotional service/category totals from Home, the Services directory,
  directory metadata and search prompts; statutory numbers and search-result counts stay.
- Practice buttons select on hover/focus, retaining click/touch and arrow/Home/End keys.
  A six-second amber progress line advances through categories and wraps. Playback pauses
  offscreen, on reading hover, keyboard focus or the explicit pause control; reduced-motion
  preference disables playback. The progress animation itself controls advancement.
- Panels are fixed at 38rem desktop / 42rem smaller screens with internal overflow.
  Mobile puts the panel below all choices, preventing rotation from shifting navigation.
- About pairs its introduction with the existing masked emblem, firm name and designation;
  the identity stacks under the introduction on mobile. No new image or dependency added.
- Before-paint theme selection uses the visitor’s local hour: light 06:00–18:00, dark
  otherwise. Valid saved choices override the clock; blocked storage still uses the clock.
  The toggle observes the applied theme so its action label stays accurate.
- Validation: production build passes (38 generated pages), changed-source ESLint and
  whitespace checks pass. Theme-script checks cover 35 hour/storage combinations.
  Chromium checks cover Home, About and Services at 320/390/1024/1440px across the
  two themes: identical dimensions across all practice panels, six-second advancement,
  hover and keyboard selection, pause, reduced motion, remembered theme overrides,
  spacing and no horizontal overflow. Browser errors are empty; UI detector has no
  findings. Safari/Firefox and physical-device checks remain outside this scoped pass.

*2026-11-07 — Main-branch publishing preparation*

- Included all pending source changes, brand/portrait/service assets, design provenance,
  documentation and review evidence in the requested main-branch update. Environment
  files and SSH keys remain outside the commit.
- Replaced the unfinished pnpm `sharp` build-permission placeholder with `true`, as
  required by pnpm's boolean `allowBuilds` configuration. The documented npm workflow
  and canonical `package-lock.json` remain unchanged.
- Production build passes with 38 generated pages; whitespace checks are clean. The
  existing hook-lint limitations are recorded in the readability phase below.

*2026-11-07 — Site-wide readability for adult professional readers*

1. **Approved system evolution:** the client requested larger fonts, clear actions and easier
   reading across the site, accepting a modest increase in visual weight. The RIL reference
   (`https://www.ril.com/`) informed comfortable 18px prose and explicit outlined actions;
   it did not replace Bourse. Slate/amber, Geist/Geist Mono, hero-only Fraunces, approved
   natural-colour photography and the continuous home header/hero remain.
2. **Type, space and contrast:** Tailwind's shared scale is now 14/16/18/20/24/30px; body
   is 18px, introductions 20px, labels/statutes 16px and short counts/hints 14px. Page
   statements span 40–68px, main section headings 32–52px. Section spacing is 64–88px.
   Raised secondary ink, steel, rules and photo captions; introduced `control-line` for
   visible controls. Light amber now supports small text. Dark/light text ratios on
   `surface` include steel 7.70/6.75:1, signal 8.04/4.77:1 and control borders 4.18/3.56:1.
3. **Affordances and forms:** shared filled/outlined actions have 52px minimum height;
   fields are 54px minimum with 18px text and 16px semibold associated labels. Text links
   are underlined, standalone actions at least 48px tall. Forms use unique label IDs,
   autocomplete and announced errors; textareas resize vertically. Existing fields/order,
   payloads, Resend attachment handling and WhatsApp fallback remain. No dependency,
   asset, backend or storage was introduced for this pass.
4. **Site-wide application:** enlarged reading copy, statutes, service controls and footer;
   all directory practice links stay visible. Scope lists become two columns on desktop;
   the mobile calendar stacks code/name/date. Contact phone/email links occupy separate
   rows. Footer headings are h2 and the bottom rail clears the floating WhatsApp control.
   Removed redundant prose eyebrows. The home Insights action now reads “View compliance
   calendar” and opens `/insights`, accurately representing the available feature.
5. **Concurrent work preserved:** the About-first, centered 22–24px header navigation,
   centered mobile menu, current-route underline and single Contact h1 were being refined
   separately during this session. Their current implementation is ground truth; this pass
   preserves those decisions rather than attributing the entire header/Contact revision
   to readability. Historical entries below remain the record of their own phases.
6. **Validation:** production build passes (38 generated pages); scoped ESLint passes.
   Full ESLint still reports three pre-existing `setState-in-effect` findings in figures,
   theme-toggle and use-mod-key; offending logic was not changed here. Recorded browser
   checks total 166 across all 31 content routes at 320/1440px in both themes and seven
   representative routes at 390/768/1024/1360/1920px plus 667px landscape. No horizontal
   overflow, clipped headings or unlabelled/undersized fields were found. Nine behavior
   checks passed for menu/search, keyboard practice selection, error retention and form
   success. Submissions were browser-mocked; no real email was sent. One UI-detector run
   over app/components returned no findings. Independent finish review found only footer
   heading order and documentation sync; both are now resolved.
7. **Limits and follow-up:** production Lighthouse Home is performance 80/accessibility
   100 (LCP 4.6s, TBT 230ms, CLS 0). Final Contact accessibility is 100 with heading order
   passing and no failed accessibility audits. These are scoped automated results, not a
   performance or full WCAG pass. Fresh production browser console was empty; an earlier
   development hydration warning contained `data-agent-browser-located` instrumentation.
   Safari/Firefox and physical-device QA were not performed. Evidence is in
   `.impeccable/review/readability/`; design tokens and sidecar are synchronized.

*2026-11-07 — Centered header navigation and concise Contact page*

1. **Header prominence:** centered the desktop links with equal left/right grid
   columns, retaining the logo and utility controls. Enlarged links to 22px
   (24px from 1536px); the mobile menu is centered at 22px. Preserved the existing
   1360px desktop-navigation breakpoint and header heights.
2. **Order and selection:** About now precedes Services in both header menus.
   A 2px amber underline scales from its center on hover and keyboard focus,
   and persists for the current page/section, including Services detail routes.
   Uses `aria-current`; reduced-motion mode changes the indicator instantly.
3. **Contact duplication:** removed the separate Contact introduction. The shared
   enquiry section now supplies its single visible h1, “Start a conversation.”
   Other uses retain h2. Kept form fields, service defaults and the Maps link;
   stacked email links to keep the two addresses visually distinct.
4. **Verified:** build passes (38 generated pages), changed TSX files pass ESLint,
   and the UI detector returns no findings. Browser checks cover exact desktop
   centering and separation at 1360–1920px, mobile menu order/centering at
   320–1280px, both themes, hover/focus and reduced-motion indicators, nested
   Services routes, and Contact's single h1, form and Maps link (22 cases plus
   interaction checks). Active navigation text contrast in light is 5.05:1.

*2026-11-07 — Photographic services explorer, directory and detail introductions shipped*

1. **Approved local evolution:** implemented the colourful service-image direction within
   Bourse. The selected category photograph fills the entire homepage services section;
   six choices remain visible and one service panel expands. Desktop pairs a shaded left
   category rail with the lower-right panel; mobile expands the selected content inline
   with a visible image. Counts, direct service links and governing statutes remain.
2. **Client directory revision:** each category and all its sub-services share one
   photograph-backed card. The hub uses a consistent two-column grid from 1024px and one
   column below, retaining category jump anchors and all 25 links without interaction.
   The client explicitly requested subtle reading gradients on service photographs; this
   local exception does not authorise decorative UI gradients or another interface accent.
3. **Detail pages:** all 25 introductions use their category photograph behind breadcrumbs,
   heading, tagline and law. Summary, scope, related services and the enquiry form retain
   normal page-theme surfaces. Existing URLs, anchors, service names, statutes, scope copy,
   metadata, Service JSON-LD and service-prefilled enquiry defaults are preserved.
4. **Image system:** `lib/service-imagery.ts` centralises six optimised WebPs and focal
   crops. Natural colour remains unfiltered. Five fixed `photo-*` tokens protect media
   captions in either page theme; they are not another global theme or accent palette.
   Background images mount on first selection and crossfade over 300ms after loading;
   reduced motion removes that transition. Failed images leave usable controls and links
   over `photo-ground`. No dependency, storage or service was added.
5. **Verified:** changed-source ESLint and the production build pass (38 generated pages).
   Browser evidence records 31 responsive/selection checks at 320–1920px in both themes,
   plus 100 checks across all 25 detail pages at 320px/1440px in both themes, covering image
   mapping, titles, scope, breadcrumbs, enquiry default and JSON-LD. Reduced-motion
   background transition is `none`. Evidence: `.impeccable/review/services/checks.json`,
   `detail-checks.json`, `final-verification.json` and `recapture-evidence.json`. The detector
   reported only the existing global 2px focus-radius advisory. Independent review of the
   corrected 17-capture set found no material introduced findings. Fresh production
   Lighthouse: Home performance 81 / accessibility 92; Services performance 79 /
   accessibility 92. Both colour-contrast audits pass. Existing enquiry-select naming and
   contact-link target-spacing findings remain; these scores are not a full AA or
   performance pass. Reports: `final-lighthouse-home.json` and
   `final-lighthouse-services.json` in the same review directory. Broad site accessibility,
   performance and cross-browser work remains outside this phase. An intentionally failed
   Cross-Border image retained its two service links; selecting cached Formation restored
   the photo (`image-failure-check.json`). The main browser error log is empty; the final
   review disposition is recorded in `review.md`.

*2026-11-07 — Approved Boardroom hero within Bourse*

1. **Direction:** the client selected Boardroom to give the opening more personality and
   express “Where governance meets growth”. This is a home-surface redesign within Bourse;
   the existing firm identity, slate/amber system, fonts and remaining section order stay.
2. **One continuous image:** reused `public/services/colour/advisory.webp`, the generated
   illustrative boardroom from the colour service imagery. It is not the firm's office.
   The photograph spans the home masthead and hero from the document top. Natural colour
   remains visible, with a directional reading shade and top navigation shade only; the
   old duotone, grid, zoom and parallax are removed. No separate `public/hero.jpg` is needed.
3. **Content:** two-line Fraunces motto, with “growth” in amber; short support line:
   “Company secretarial, governance and capital markets advisory, from incorporation to IPO.”
   Enquire links to `/contact`; Explore services links to `/#services`. Removed the legacy
   credentials/meta strip. The ticker now follows the hero, then the existing figures,
   services, capital-markets, principal, insights and enquiry sections.
4. **Header behavior:** the existing 80/96/112px rail (plus border) shares the image at the
   home top. A 1px intersection marker restores the normal solid, theme-aware sticky header
   on scrolling. Inner pages retain their normal header. Photo foreground tokens are fixed
   in both themes, like the service photography. Mobile navigation overlays below the
   header, scrolls within the viewport and does not displace the image; menu/search surfaces
   stay opaque.
5. **Delivery:** server-rendered `next/image` uses eager loading and high fetch priority
   (the local Next 16 docs deprecate `priority`). No dependency or service was added.
6. **Verified:** production build passes (38 generated pages); scoped ESLint passes.
   Twelve viewport/theme checks cover 320×667, 390×844, 667×375, 1024×768, 1440×600 and
   1440×900 in both themes: two-line heading and CTA visibility, no horizontal overflow,
   unfiltered image, hero at document top, and ticker after it. Six behavior checks cover
   solid sticky header after scroll, mobile menu position/bounds, search focus/dismissal,
   inner-page header and return to the home photographic header. Review evidence lives in
   `.impeccable/review/hero/`. Final production mobile Lighthouse: performance 82,
   accessibility 92, LCP 4.8s, CLS 0 and TBT 100ms. High-priority LCP discovery now passes;
   LCP remains above the 2.5s target. Existing enquiry-select naming and email-link target
   spacing findings remain; this is not a full performance or AA pass. No new hero contrast
   failure was reported. The detector's existing global 2px focus-radius advisory is outside
   this change. See `lighthouse-final.json` in the review directory.

*2026-11-07 — Career form aligns beside the entire introduction*

- Corrected the previous layout grouping: the Career heading, introduction and reasons
  now occupy one left column, with the résumé form as its right-hand sibling. The form
  starts at the top of the text block instead of below the introduction beside the list.
- Mobile keeps the full text block followed by the form. Shared site width and gutters
  remain in effect.
- Verified visually on desktop/mobile; browser assertions confirm identical column top
  coordinates and a 48px desktop gap, and equal widths with a 32px mobile stacking gap.
  Production build (38 generated pages) and Career-page ESLint pass.

*2026-11-07 — Colour service imagery prepared; explorer direction approved*

1. **Approved direction:** the homepage service explorer will use the selected
   category's photograph as the entire section background. The Services hub will
   introduce its six practice areas with the same photographic subjects while
   retaining all 25 direct service links and governing-statute information.
2. **Colour photography:** client explicitly requested richer colour, clean and
   elegant. Retain the Bourse interface and its amber accent; the new photographs
   must not receive the incumbent grayscale, brightness and duotone overlay stack.
3. **Asset phase completed:** generated and visually reviewed six standalone
   approximately 16:9 photographs with built-in ImageGen. Incorporation documents,
   statutory register, BSE architecture and transaction review replace the old four
   concepts. The port and boardroom concepts return in colour with revised framing.
4. **Saved deliverables:** native-resolution PNGs and exact prompts/provenance in
   `design/service-imagery/`; optimised WebPs in `public/services/colour/`.
   See that directory's README for composition, references and integration notes.
   Existing JPEGs and page components are unchanged; layout integration remains.

*2026-11-07 — Consistent, wider site layout (client-requested)*

1. **Root cause:** header, standard sections and inner pages used separate 1280px,
   1152px and 896px outer widths. About and service-detail introductions shifted inward
   relative to their reused enquiry/portrait sections; the figure row also added a second
   large gap after About's padded introduction.
2. **Shared layout:** `site-container` in `app/globals.css` now owns the outer width
   (1600px) and responsive gutters (16px mobile / 24px tablet / 32px desktop). Applied
   across all pages, all 25 service details, home sections, header and both footer rows.
   At 1440px, standard content spans 1376px instead of 1104px; previously narrow inner
   pages start at the same 32px left edge. Prose and search keep local readable measures.
3. **Spacing:** shared `section-space`, `section-start` and `section-end` utilities use
   48–64px instead of the former 64–96px section padding. Removed About's doubled gap
   before figures; reduced hero minimum height and padding. Capital-markets, insights
   and enquiry sections share equal desktop columns and 48px gaps (32px stacked).
4. **Responsive composition:** Career places reasons beside the résumé form on desktop
   and stacks them on mobile. The principal portrait aligns with the left content edge
   when stacked. Section anchors clear the existing larger sticky header.
5. **Verified:** production build passes (38 generated pages). Browser assertions pass
   on all 31 content routes at 390px and 1440px; seven representative routes also pass
   in light theme at 320px, 768px, 1280px and 1920px (90 checks total). Assertions verify
   shared width, left/right gutter alignment, heading/form bounds and no horizontal
   overflow. Visually inspected Home, About, Career, Contact and a long service title
   across desktop/mobile and both themes. Layout detector returns no findings; browser
   error log is empty. Full ESLint still reports five existing copy/hook errors in
   capital-markets, figures, insights-teaser, theme-toggle and use-mod-key; their
   offending code is unchanged by this layout pass.

*2026-11-07 — Professional principal portrait from client-supplied photos*

1. **Placement informed the asset:** the shared `Principal` component appears on About
   and Home, with a 300px-wide 4:5 portrait beside the biography on desktop. Chose an
   upper-torso composition, navy suit/white shirt/plain navy tie, and a simple cool gray
   studio background. Natural face color remains unchanged by CSS in either theme.
2. **Identity preservation:** used `IMG_0054.JPG` as the primary edit source and
   `IMG_0078.JPG` as a secondary identity reference. Prompt explicitly locks facial
   proportions, smile/teeth, hairline/curls, stubble, skin tone and natural asymmetry;
   avoids beautification, facial slimming and changing expression. One built-in ImageGen
   edit selected after visual comparison; client can review the full-resolution result.
3. **Assets:** `public/portraits/ayush-gupta-master.png` retains the generated master;
   `ayush-gupta.webp` is a 960x1200, ~96KB website export. Full prompt/provenance in
   `design/portrait-generation.txt`. Original photos in Downloads were not modified or
   copied into the public website.
4. **Implementation:** replaced the AG placeholder and its caption with `next/image`,
   preserving the 4:5 frame. Mobile/tablet portrait width caps at 384px; desktop stays
   300px. Explicit image sizes, lazy loading, descriptive alt text, and reserved dimensions.
   Anchor offset now accommodates the larger sticky header.
5. **Verified:** production build passes (38 generated pages), portrait component ESLint
   passes, detector has no findings. About inspected on desktop/mobile in both theme
   contexts; Home portrait also loads. Browser assertions confirm image load, 4:5 bounds,
   no horizontal overflow, and no CSS color filter; no console errors.

*2026-11-07 — Larger uppercase header + responsive search redesign*

1. **Header prominence:** enlarged the rail to 80px mobile / 96px tablet / 112px desktop,
   with a larger emblem and bold “AYUSH D GUPTA”. The shared footer wordmark is uppercase
   too. Navigation is 16px semibold with stronger contrast; search/Enquire controls are
   48px tall, theme/menu targets at least 44px. Navigation collapses below 1280px.
   Preserved the Bourse palette, fonts, routes and existing brand asset. This deliberately
   overrides the design skill's default header-height cap in response to the client's request.
2. **Removed the hero emblem watermark** completely; retained the header/footer and icons.
3. **Search root cause:** the flex overlay stretched its child vertically, creating a large
   blank area. Replaced it with native `<dialog>` in the browser top layer, capped to viewport
   height with a stable top position, an internally scrolling results list and fixed controls.
   This supersedes the original Phase-1 decision to use a custom overlay.
4. **Search behavior:** full names wrap above practice areas; clear Close and empty-state
   actions; searches all 25 services + 6 page shortcuts by name, category and governing law.
   Removed the silent result limit. Added combobox/listbox semantics, explicit Tab wrapping,
   focus restoration (including after opening from the mobile menu), and prior-scroll-style
   restoration. Existing shortcut and events remain compatible. No dependency added.
5. **Verified:** production build passes (38 generated pages). Changed search, masthead,
   brand and hero TSX files pass ESLint. Browser assertions cover viewport bounds at desktop,
   320px mobile and 667x375 landscape; filtering, empty recovery, Arrow/Enter navigation,
   Escape/backdrop closing, Tab wrapping, focus restoration and body-scroll restoration.
   Both themes inspected; no browser console errors. Mechanical UI detector returned no findings.
6. **Broader Lighthouse findings:** a mobile run scored performance 54 / accessibility 84.
   Existing image payload/LCP, principal-placeholder contrast, hero definition-list markup,
   enquiry select labeling, and contact-link target spacing remain outside this scoped pass.
   The reported contrast/target-size failures are outside the header/search components.

*2026-11-07 — Supplied firm emblem replaces the ADG concept*

1. **Source:** the client's attached circular logo, also present on the newly downloaded
   visiting card. Preserved the sprout, three people, central Y, and partial gear; used
   built-in ImageGen to regenerate transparent flat gold linework (one cleanup iteration).
2. **Assets:** `public/brand/firm-emblem.png` is the 1254px transparent master;
   `firm-emblem-web.png` is the 640px website derivative. The shared `Brand` uses its alpha
   mask with the existing theme-aware `signal` token, retaining the full firm name.
3. **Placement:** header + footer throughout the site, a restrained static watermark on
   the right of the home hero at 1280px+, and matching favicon / Apple touch icon. The
   watermark is decorative, ignores pointer events, and stays off smaller screens.
4. **Validation:** build passes (38 generated pages including the new Apple icon route).
   Changed TSX files pass ESLint. Detector's only finding is the existing 2px focus-ring
   radius in globals.css; it is unrelated to the logo and remains unchanged.

*2026-11-07 — Full-name wordmark + custom ADG monogram*

1. **Replaced the abbreviated masthead identity** with “Ayush D Gupta & Associates”,
   set as a two-line Geist wordmark beside an authored amber SVG monogram. The A shares
   its apex with the D bowl; a return bar suggests G. No additional font or image dependency.
2. **One shared identity** (`components/site/brand.tsx`) serves the header and footer.
   The masthead has more vertical room (72px mobile / 80px desktop) and preserves the
   full firm name on small screens. Both home links expose the full name to assistive tech.
3. **Validation:** production build passes (37 generated pages); responsive/theme browser
   checks pass, including the mobile menu at 320px. Impeccable's detector returned no findings.
   The full lint run still reports seven existing errors in unchanged components.

*2026-11-07 — Contact number removal*

- Removed the retired phone entry from `lib/site.ts`, updating the footer, enquiry/contact
  sections, confirmation copy, and structured data through their shared source.
- WhatsApp links now use the remaining listed number, +91 99307 66702, including form fallbacks.
- The original client brief remains an unchanged historical reference.
- Verified: production build passed (37 pages); the removed number is absent from generated
  pages and client bundles.
- Separate lint check reports seven existing errors in unchanged components (unescaped
  apostrophes and synchronous state updates in effects).

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

- **Stats — resolved:** owner confirmed 240+ clients, 5+ years and 40+ entities incorporated (8 November revision).
- **Hero image — resolved** — approved full-colour illustrative boardroom at
  `public/services/colour/advisory.webp`, shared with Advisory & Governance. It does not
  depict the firm's office; no `public/hero.jpg` placeholder remains in the implementation.
- **CS Ayush portrait** — AI-edited professional portrait from client-supplied photos now
  replaces the monogram on About/Home. Master and web asset in `public/portraits/`.
- **Logo** — regenerated client-supplied circular emblem + full-name wordmark; header,
  footer and browser/touch icons shipped on 2026-11-07. Hero watermark subsequently removed.
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
- Leftover default `public/*.svg` from create-next-app.

Resolved content polish (8 November): About now separates the firm introduction, personal
principal copy and one prominent vision/mission feature.

---

## Run it

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY to make the forms send (see README → Email)
npm run dev     # http://localhost:3000
npm run build   # type-checks + lints + prerenders all routes — the gate; run after any change
npm run lint
```
