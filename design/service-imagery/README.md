# Colour service photography

Prepared 2026-11-07 with the built-in ImageGen tool.

The client approved a homepage practice explorer whose selected photograph fills
the entire services section. Imagery must be colourful, clean and elegant within
the existing Bourse interface. Rich colour belongs in photographs; amber remains
the interface accent. The same subjects introduce the six areas on the Services hub
and the introductory headers of all 25 service detail pages.

## Deliverables

Six generated photographic masters live in `masters/`. Optimised WebP copies
live in `../../public/services/colour/` (site URLs `/services/colour/<id>.webp`).
All are approximately 16:9 at 1672px wide, the native generation resolution.
They have not been upscaled. WebP copies preserve the native framing and colour.

- [Formation & Setup](masters/formation.png): cobalt incorporation folio,
  constitutional papers and a digital-signature token.
- [Ongoing Compliance](masters/compliance.png): forest-green statutory register,
  annual-return working papers and a planning sheet.
- [Capital Markets](masters/capital-markets.png): a generated interpretation of
  the BSE building using a real architectural reference, with blue sky and warm stone.
- [Transactions & Restructuring](masters/transactions.png): transaction review
  papers, navy and burgundy portfolios on a walnut conference table.
- [Cross-Border & NBFC](masters/cross-border.png): diagonal container quay,
  rich teal water and restrained container colours.
- [Advisory & Governance](masters/advisory.png): walnut boardroom, green chairs,
  blue daylight and a quieter slate wall at left.

## Composition and use

These are full-section background plates, not images of the final interface.
The primary subject is toward the centre-right, with quieter visual material
at left for category navigation. Fixed `photo-*` caption tokens and local reading shades
protect component text in both page themes; quiet space alone does not guarantee accessible text. Retain colour
and detail outside the reading regions. Do not apply the incumbent
grayscale/brightness/blend stack.

Each Services-hub category and its complete service list share one photograph-backed
card: two columns from 1024px, one below. All 25 detail introductions use the matching
category image. `lib/service-imagery.ts` owns image paths and focal positions for these
surfaces and the homepage explorer. The six categories, service links and
governing-statute information are retained. The client explicitly approved subtle local
reading gradients for service photographs; this does not change the global Bourse palette.
No generated photo represents the firm's actual office, client documents or regulatory
endorsement.

## Prompts and provenance

`prompts.json` contains the exact six prompts. Each PNG also embeds its prompt;
WebP files have matching `.webp.json` provenance sidecars. `generated-sources.json`
records the original ImageGen output paths. Local copies are self-contained and
do not depend on those original paths.

Port and boardroom generation used the existing project photographs as composition
references. The capital-markets generation used `references/bse-architecture.jpg`
as an architectural reference, downloaded from
https://img.etimg.com/photo/msid-123398727/The%20Bombay%20Stock%20Exchange.jpg
(source article: https://m.economictimes.com/tech/newsletters/full-stack/startup-ipos-by-default-not-design/articleshow/123398662.cms).
The reference itself is not a website asset and is not placed under `public/`.

## Status

All six assets were generated, visually reviewed and integrated on 2026-11-07. The
homepage explorer uses the selected image across its full section with one expanded
service panel; the hub contains six complete category cards, and all 25 detail pages
have category-photo introductions. Original service JPEGs remain as historical assets.
The boardroom plate is also reused by the separately approved homepage hero.

The explorer loads background images on first selection and crossfades after load
(300ms; instant with reduced motion). A failed image leaves the reading ground,
controls and service links usable. No dependencies or external services were added.
Production build and changed-source ESLint pass; browser evidence under
`../../.impeccable/review/services/` includes 31 responsive/selection checks and
100 detail-page checks, covering both themes. See the implementation brief here and
`../../PROGRESS.md` for the decision and verification record.
