# Restyle Complementary Services cards on /sectors/marinas-yacht-clubs

Adopt the Bridge / SD-WAN "image-led" card pattern (image hero with overlaid eyebrow + title, body copy below, divider, eyebrow label + arrow link) for the three Complementary Services cards (Integra SD-WAN, Wireless Distribution, CCTV). Scope is **only** this page — if we like it, we'll roll it across other sector pages in a follow-up.

## What changes

1. **MarinasYachtClubs.tsx** — replace the generic `<RelatedServices …/>` block with an inline 3-column grid of image-led cards built to match the reference (Two situations / Bridge & SD-WAN) styling:
   - Card surface: `rounded-2xl` `bg-card` `border-border`, subtle shadow, hover lift.
   - **Top half:** full-bleed photo, ~16:10 ratio, with a dark gradient overlay from bottom. Overlaid bottom-left: small uppercase eyebrow ("SERVICE" / a category tag) above a large white card title (`Integra SD-WAN`, `Wireless Distribution`, `CCTV`).
   - **Bottom half:** body description in muted-foreground, then a thin divider, then a small uppercase eyebrow tag ("BONDED 4G/5G" / "POINT-TO-POINT" / "ON-SITE MONITORING") above the `Explore … →` link in primary blue.
   - Stagger-fade in on scroll, matching the existing `staggerContainer` / `staggerItem` variants already in this file.
   - Keep the existing section heading ("Complementary Services") and subheading ("Built for waterside sites…") above the grid.

2. **Three new marina-context images** (generated, premium tier, JPG) saved as Lovable asset pointers under `src/assets/sectors/`:
   - `marina-sdwan.jpg` — cell tower / antenna against a coastal sky.
   - `marina-wireless.jpg` — point-to-point dish on a clubhouse mast looking down a row of pontoons.
   - `marina-cctv.jpg` — outdoor CCTV camera mounted on a pontoon post overlooking moored boats.

3. **No changes** to `RelatedServices.tsx` itself (we keep the existing component intact for the other sector pages until we decide to roll out).

## Out of scope (for now)

- `/sectors/business-parks`, `/sectors/construction-sites`, `/sectors/rural-smes` — left as-is until we approve the marina version.
- Section heading, FAQ, hero, checker — unchanged.
- Routes, SEO, sitemap — unchanged.

## Technical notes

- Component pattern mirrors the reference card: image block with absolute eyebrow + H3 overlay, content block below with `<p>`, `<hr>`, eyebrow tag, then `<Link>` with arrow.
- Use semantic tokens only (`bg-card`, `border-border`, `text-primary`, `text-muted-foreground`, `text-foreground`). No hard-coded colours.
- Images generated via `imagegen` (premium quality, JPG), then registered as `lovable-assets` pointer JSONs and imported into the page.
