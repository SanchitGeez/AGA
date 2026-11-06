# Services redesign implementation brief

Approved by the client in this conversation, 2026-11-07. Code-led local evolution
inside Bourse; existing generated photographs are the visual authority for imagery.

- **Audience and job:** founders, company owners, CFOs and boards locate their
  practice area, identify an exact service and follow its existing detail link.
  Homepage mode: Persuade. Directory mode: Read with direct service navigation.
- **Homepage:** the selected practice's colour photograph fills the whole services
  section. A readable left category rail keeps all six choices visible on desktop;
  the selected practice's service links sit over a compact shaded region at right.
  At mobile widths the same choices expand inline, with a visible photograph.
- **Directory (client revision):** each category and its sub-services live inside
  one photograph-backed card. Two columns on desktop, one on mobile. Consistent
  heading, description and lower service list; a restrained gradient protects copy.
  Category jump navigation and all 25 links/statutes remain present without interaction.
- **Service details (client addition):** all 25 detail pages use their category's
  photograph behind the introductory heading, tagline, statute and breadcrumbs.
  Summary and detailed scope remain on the normal page surface below.
- **Preserve:** brand, fonts, shared 1600px rail, amber interface accent, all routes,
  anchors, service names, laws, enquiry component and global navigation.
- **Acceptance:** full-colour photos without filters; full-section selected backdrop;
  one selected panel; correct links and counts for every selection; keyboard and
  touch operation; reduced-motion support; readable overlays in both themes; stable
  loading/error fallback; no horizontal overflow at 320px through 1920px.

Composition variance 5/10, motion 3/10, density 4/10. Short CSS crossfades communicate
selection changes. No autoplay, scroll hijacking or added animation dependencies.
Fixed photo-caption tokens are a media legibility treatment in both page themes,
not a change to global theme preference. The client explicitly requested subtle
image gradients, overriding the earlier project-wide default against gradients
only for these service photographs.
