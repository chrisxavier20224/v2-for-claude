## Goal

Apply the same image-header card treatment that lifted the LP pages (16/9 photo header → dark gradient overlay → eyebrow + title sitting over the image → body copy underneath) to the card sections on `/integra-bridge` and `/wholesale`. Visual lift only — no copy, layout order, routes, or SEO changes.

## The card pattern (one shared spec)

Every card in scope gets:

```text
┌──────────────────────────────┐
│  16/9 photo                  │  ← object-cover, group-hover scale-105
│  ↑ gradient to bottom        │
│  EYEBROW (optional)          │  ← uppercase tracking, primary/300
│  Title                       │  ← 2xl, white
├──────────────────────────────┤
│  Body copy                   │
│  …                           │
│  ───────────────────────     │
│  Footer chip / Learn more →  │
└──────────────────────────────┘
```

Dark sections use `border-white/10 bg-white/5` shells; light sections use `border-border bg-card`. Group hover lifts `-translate-y-1` and brightens border, matching the LP reference exactly.

## Sections to update

### `/integra-bridge` (src/pages/connectivity/IntegraBridge.tsx)

1. **The Solution — "Deliver now. Impress always" (3 cards)** — dark
   Replace the icon-circle cards with image-header cards. Imagery reuse:
   - Card 1 (days, not months) → `landing/enterprise-install-rehlko`
   - Card 2 (you as the provider) → `landing/building-connectivity`
   - Card 3 (reputation / always-on) → `connectivity/sdwan-aerial`

2. **How It Works — "The fastest route to Enterprise Internet" (3 spec cards)** — light
   Image header per bearer; keep the speed line as the footer chip.
   - Starlink Satellite → `connectivity/starlink-hero`
   - 5G/4G Carriers ×2 → `landing/celltower`
   - Bonded Output → `connectivity/sdwan-hero` (server/datacentre look)

3. **Other Solutions — "Where fibre isn't available" (3 cards)** — light
   - Integra SD-WAN → `connectivity/sdwan-hero`
   - Leased Lines → `connectivity/leased-lines-hero`
   - Starlink Installation → `connectivity/starlink-engineers`

4. **Complementary Services (shared `RelatedServices` component, dark)** — same group as the screenshot
   Extend `RelatedServices` with an optional `image?: string` field per service (when present, render a 16/9 image header instead of the icon-only block; when absent, render today's icon block — fully backwards-compatible for every other page using this component). Then pass images for the three Bridge entries:
   - SD-WAN → `connectivity/sdwan-hero`
   - Wireless Distribution → `landing/wireless-rural-industrial`
   - Leased Lines → `connectivity/leased-lines-hero`

### `/wholesale` (src/pages/Wholesale.tsx)

5. **What Integra Handles — "We do the heavy lifting" (4 cards)** — dark
   - Site Survey → `connectivity/business-wifi-surveys`
   - Professional Installation → `connectivity/sdwan-install`
   - Configuration & Go-Live → `connectivity/sdwan-stable`
   - Ongoing Support & Monitoring → `connectivity/managed-sim-visibility`

6. **How Partnering Works — "Three steps to your first delivery" (3 cards)** — light
   Keep the numbered badge (1/2/3) overlayed on the top-left of the image header. No existing photo matches "talk / onboard / register deal" well, so generate **three fresh photographic images** here (the only generated images in this batch):
   - 1 — meeting/handshake in a UK office
   - 2 — engineer + account manager reviewing a partner portal screen
   - 3 — laptop showing a clean dashboard/form mid-submission
   Style: cool natural light, navy/blue tones, no AI sheen, premium-tier model.

## Technical notes

- All listed `connectivity/*` files are local `.webp`/`.jpg` imports already used elsewhere in the project — re-importing them adds no extra bundle weight.
- `landing/*` paths are CDN-pointer `.asset.json` files — import the JSON and use `.url`.
- Animations stay as today (`staggerContainer` + `fadeUp` on each grid); add only the `group` + `group-hover:scale-105` on the inner `<img>` for the photo zoom-in.
- `RelatedServices.tsx` signature change: add optional `image?: string` to the `RelatedService` interface. Default (no image) path renders exactly the current markup; image path renders the new 16/9 header + body. No other consumer is touched.
- No copy edits, no section reordering, no SEO/JSON-LD changes, no route changes.

## Out of scope

- Hero sections (already image-led).
- The "Every Integra Bridge deployment includes" CTA card on Bridge.
- The "Integra Bridge for ISPs & MSPs" featured CTA card on Wholesale.
- Mini stat tiles (Deadlines slip / Goodwill erodes / Revenue delayed) — too small for an image header.

## Verification after build

Visit `/integra-bridge` and `/wholesale` in the preview, screenshot each of the 6 updated grids, and confirm the photo headers render with the gradient + eyebrow overlay and that the existing copy is unchanged.
