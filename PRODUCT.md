# Product

> **Ayush D Gupta & Associates** — Company Secretaries, Mumbai.
> Design system codename: **Bourse** (a markets terminal for corporate compliance).
> This file is the *philosophy + layout* spec. Visual tokens live in [DESIGN.md](./DESIGN.md).

## Register

brand

The website *is* the first impression of the firm. A prospective client — a founder,
a CFO, a merchant banker — decides whether this person can be trusted with an IPO, a
SEBI filing, or an NCLT matter within the first fold. Design is the product here.

---

## Users

Three audiences, one instrument. The site must route each to their need without
diluting for the others.

1. **Founders & startups** — incorporation, DSC, DPIIT, startup advisory. Price-aware,
   fast-moving, WhatsApp-first. Need reassurance that they won't miss a filing.
2. **SME owners & CFOs** — ongoing ROC/LLP compliance, secretarial audit, restructuring.
   This is the recurring-revenue relationship. They judge on reliability and specificity.
3. **Listed companies, merchant bankers, NBFCs, foreign investors** — SEBI LODR, IPO
   advisory, FEMA, corporate actions. Fewer, high-value, and the harshest judges of
   credibility. This is the **growth wedge** and the reason the whole site is pitched as
   a *markets instrument*.

The job to be done, across all three: *"Confirm this firm is competent and current,
find my exact service, and start a conversation — fast."*

---

## Product Purpose

A conversion-focused authority site for a peer-reviewed CS firm. Success =

- A qualified visitor identifies their service among **25** in one move and enquires
  (call / WhatsApp / form) without friction.
- A skeptical capital-markets buyer leaves believing CS Ayush Gupta "means business."
- The firm ranks for Mumbai + service SEO ("company secretary firm in Mumbai",
  "secretarial audit", "FEMA compliance", "IPO advisory Mumbai") — each of the 25
  services is its own indexable page.
- The **statutory-deadline ticker** gives repeat reasons to return and positions the
  firm as always-current.

Not a brochure. An instrument the visitor *uses*.

---

## The Concept: Markets Terminal

The firm's edge is capital markets — IPOs, SEBI, NCLT, FEMA, corporate actions. So the
site borrows the visual grammar of the world it operates in: **a precision compliance
terminal.** Deep slate surface, one amber signal, monospaced figures, a live ticker of
statutory deadlines, a dense searchable service matrix, count-up figures that read like
real telemetry.

Mono earns its place here because there is **real data**: filing deadlines, ROC counts,
regulation numbers, ticker codes. This is the one register where terminal aesthetics are
*literal*, not costume — the firm lives among NSE/BSE/NSDL/CDSL/NCLT every day.

**The single load-bearing tension:** dark + mono can drift into "tech startup" or
"crypto dashboard." Everything that follows exists to keep it reading as an
**institutional, law-adjacent instrument.** Formal copy, statutory precision,
no growth-hack tone, no emoji, no "let's". Bloomberg, not a SaaS landing page.

---

## Brand Personality

Three words: **precise · disciplined · institutional.**

- **Voice:** formal, exact, quietly authoritative. States facts and regulation numbers.
  Never exclaims, never sells hard. Confidence comes from specificity, not adjectives.
- **Emotional goal:** the visitor should feel *"this person will not let me get it
  wrong."* Reassurance through evident competence, not warmth.
- **Trust mechanism:** every figure is real and tabular; every claim is specific
  (a section number, a regulation, a form code). The instrument is honest.

---

## Anti-references

What this must **not** look like:

- **The generic Indian CA/CS template** — Bootstrap grid, cyan buttons, handshake stock
  photo, cramped everything-above-the-fold, spinning testimonial carousel. The default
  we are beating.
- **SaaS / tech-startup landing page** — gradients, playful illustrations, emoji,
  "🚀 Get started free", pastel blobs, big-number hero-metric template.
- **Crypto / trading-bot dashboard** — the nearest wrong neighbour of our own aesthetic.
  We share the dark-terminal lane; we diverge via formal copy and institutional restraint.
- **Creative-agency / funky** — oversized experimental type, off-kilter layouts, loud
  color. This is a law-adjacent firm; strangeness erodes trust here.
- **Editorial-magazine** — display-serif-italic + drop caps + broadsheet grid. A
  different, saturated lane; not ours.

---

## Design Principles

Strategic, not visual (visual rules live in DESIGN.md).

1. **Precision is the trust signal.** Real numbers, tabular alignment, regulation-exact
   copy. Never round a stat for effect, never invent a metric. If a figure isn't known
   yet, show the label and leave the instrument honest rather than fake it.

2. **Density where it's data, air where it's argument.** The service matrix and ticker
   are dense and gridded on purpose — that *is* the instrument. The positioning, the
   person, and the CTA breathe. Uniform cramming is the CA-template failure; uniform
   airiness wastes the concept. Rhythm between the two is the craft.

3. **Institutional over startup — always.** When a choice could read as either a serious
   markets desk or a growth hack, pick the desk. This governs copy tone, motion energy,
   and every micro-decision. It is the guardrail on the whole aesthetic.

4. **Route, don't parade.** 25 services is the strength and the risk. Navigation is a
   *tool*: a command-bar search (⌘K feel) across all services and a filterable matrix
   resolve "my need" in one move. Never make the visitor scroll a wall of identical cards.

5. **The site knows what day it is.** The live statutory-deadline ticker is the
   differentiator and the reason to return. Currency = authority for a compliance firm.

---

## Information Architecture

```
Home                                                                        ✅ built
About      → firm story · CS Ayush bio + credentials · Vision & Mission     ✅ built
Services   → 6-area hub → 25 service detail pages (full scope + Service JSON-LD) ✅ built
   Formation & Setup · Ongoing Compliance · Capital Markets ·
   Transactions & Restructuring · Cross-Border & NBFC · Advisory & Governance
Insights   → the compliance calendar, ordered by next-upcoming (feeds the ticker) ✅ built
Career     → pitch + résumé upload (emails the firm; attachment, no storage)   ✅ built
Contact    → form · 2 phones · 2 emails · Andheri (E) location card            ✅ built
Footer     → NSE · BSE · NSDL · CDSL · ROF · NCLT (the "important links")       ✅ built
```

> **As built (2026-07-09):** all routes exist and are wired (nav, ⌘K command-bar, and footer
> point to the real pages, not home anchors). Two IA notes vs. the original plan:
> **(1)** the 6 categories live as *anchored sections* on the `/services` hub
> (`/services#capital-markets`) plus 25 indexable detail pages — no separate per-category routes
> (YAGNI; the hub + detail pages already cover navigation and SEO). **(2)** Contact uses a
> location *card* linking to Google Maps, not an embedded iframe (keyless embeds render blank).
> Insights ships the **calendar**; dated regulatory-update *articles* are deferred until the
> client writes them (then add as in-repo MDX — still no CMS).

The **25 services collapse into 6 categories** so the matrix is navigable:

| Category | Services |
|---|---|
| Formation & Setup | Incorporation & Registration · Startup Advisory · Regulatory Registrations & Licenses · DSC Services · Partnership Firms / Registrar of Firms |
| Ongoing Compliance | Company Law & Secretarial · LLP Compliance · XBRL Filings · Statutory Certification · Secretarial Audit |
| Capital Markets | SEBI & Stock Exchange · IPO Advisory · Corporate Actions |
| Transactions & Restructuring | Corporate Restructuring · Due Diligence · NCLT & Legal · Sell/Purchase (Corporate Matchmaking) · Closure & Exit |
| Cross-Border & NBFC | RBI & FEMA · Services to NBFCs |
| Advisory & Governance | Advisory & Consulting · Approvals & Appearances · Trademark & IPR · Drafting & Vetting · Independent Director Services |

---

## Home Scroll Narrative (the spine)

Ordered to move a skeptic from "who is this" to "I should call," using the instrument
metaphor as the through-line. Full section-by-section walkthrough is delivered as prose
after the specs; this is the canonical order.

1. **Masthead** — compact terminal header, firm mark, command-bar trigger.
2. **Live ticker** — scrolling statutory deadlines, ordered by next-upcoming. Currency in one second.
3. **Hero (positioning)** — a **display-serif** headline (the one serif on the site) + subhead +
   a single primary CTA + a hairline meta row, beside a **treated duotone photo** visual with
   subtle scroll parallax. *(As built: the earlier "Firm Profile" readout panel was removed — it
   was fake telemetry and duplicated the Principal section; the serif + photo replaced it to give
   the hero its own weight and stop the page reading as one repeating template.)*
4. **Figures** — count-up, tabular, *integrated inline* (Clients · Years · ROC filings).
   Deliberately not the boxed hero-metric cliché.
5. **Service matrix** — the instrument. All 25 **grouped under the 6 practice areas** (structure
   visible by default, not only on filter), each row anchored to its **governing statute** (mono
   `law` column — real data), with a visible search box + counted filter chips. The anti-list.
6. **Capital-markets spotlight** — the growth wedge foregrounded (IPO / SEBI / NCLT).
7. **The person** — CS Ayush, ICSI, peer-reviewed. Credibility made human but formal.
8. **Insights / deadlines** — teaser into the calendar; the reason to return.
9. **Enquire** — low-friction contact. Real form (emails the firm) with a WhatsApp fallback + phones.

---

## Accessibility & Inclusion

- **WCAG 2.1 AA** target. The dark theme makes contrast the first-class risk:
  - Body text uses `ink`, not `steel`; `steel` is for secondary/labels only and must be
    verified ≥4.5:1 on both `bg` and `surface`.
  - `signal` (amber) is for figures, accents, and small/bold highlights (≥3:1), **never**
    for body paragraphs.
  - Placeholder text meets 4.5:1 — no default light-gray placeholder.
- **Ships a light mode** (per the reference). Amber darkens in light mode to hold contrast
  for text use; see DESIGN.md.
- **Reduced motion is mandatory:** the ticker becomes a static list, count-ups render at
  final value, reveals become instant. Nothing about the instrument depends on motion to
  be usable.
- Keyboard-first: the command-bar is fully operable by keyboard; matrix rows are focusable
  links; visible focus rings in `signal`.

---

## Build Notes (non-visual, as built)

- **Stack:** Next.js **16** (App Router, Turbopack) + React 19 + TypeScript + Tailwind **v4**
  (CSS `@theme`, no `tailwind.config`). Static-generated for SEO; one dynamic route (`/api/enquiry`).
- **Fonts, self-hosted** (no build-time fetch): `geist` package (Sans + Mono) + **Fraunces**
  variable serif via `next/font/local`. The serif is scoped to the hero headline only.
- **No CMS:** content lives in typed data files under `lib/` — `site.ts`, `services.ts`
  (incl. each service's governing `law`), `service-content.ts` (full statutory scope), and
  `deadlines.ts`. The dev edits. No headless CMS.
- **Services engine:** one template (`app/services/[slug]/page.tsx`) + `lib/services.ts` +
  `lib/service-content.ts` generates all 25 detail pages via `generateStaticParams` — full
  scope-of-work checklist + per-service `Service` JSON-LD. A `/services` hub groups the 6 areas.
- **Forms:** enquiry + résumé both POST to `app/api/enquiry/route.ts` → **Resend** email. No
  storage — the résumé is an email attachment. Honeypot spam guard; graceful WhatsApp fallback
  when unconfigured or on error. Needs `RESEND_API_KEY` (see README → Email).
- **SEO:** per-page metadata, `LegalService` JSON-LD (home, with nested `Person`), per-service
  `Service` JSON-LD, plus `app/sitemap.ts` (31 URLs) and `app/robots.ts`.
- **Assets:** real stats / hero photo / headshot / logo swapped in as available; tasteful
  placeholders never block a build. See placeholder inventory in `PROGRESS.md`.

> **Status & decision log:** see [PROGRESS.md](./PROGRESS.md) for phase tracking, the
> decisions made during the build, and known placeholders / tech-debt.
