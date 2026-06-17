## Why this wasn't done before

The previous round only optimized hero images because they drive the LCP (Largest Contentful Paint) metric — the single biggest Core Web Vitals score and what Google measures for ranking. Below-the-fold images already use `loading="lazy"`, so they don't block the initial paint and weren't the bottleneck.

That said, you're right — lazy-loaded JPGs still cost bandwidth, slow scrolling on mobile, and hurt the overall PageSpeed score (Total Byte Weight, "Serve images in next-gen formats" audit). It's worth doing.

## Scope

Convert every remaining below-the-fold JPG on the 10 new sector pages to WebP. That's 5 images per page × 10 pages = **~50 images**:

- `*-alt1.jpg` and `*-alt2.jpg` (checklist-over-hero panels)
- `*-card-mid.jpg`, `*-card-sdwan.jpg`, `*-card-third.jpg` (service card thumbnails)

Plus the `events-gpay.jpg` extra.

The shared `*-card-sdwan.jpg` (cell tower) is already a single asset reused across all 10 pages — convert once.

## What I'll do

1. **Download** each unique source JPG from CDN to `/tmp`.
2. **Re-encode** with `sharp`:
   - Alt panels (full-width feature images): WebP 1200w, quality ~80, target ≤200KB.
   - Card thumbnails (display ~400px wide in a 3-col grid): WebP 800w, quality ~78, target ≤80KB.
3. **Upload** each new `.webp` to CDN via `lovable-assets create`, producing new `.webp.asset.json` files.
4. **Swap imports** in the 10 sector page `.tsx` files from `*-alt1.jpg` → `*-alt1.webp`, etc.
5. **Delete** the now-unused `.jpg.asset.json` files (or leave them — they're tiny pointers; I'll delete to keep the tree clean).
6. **Keep** `loading="lazy"` exactly as it is — no markup/layout changes, just the file extension swap.

## What I will NOT change

- Hero images (already optimized last round).
- Any layout, copy, alt text, or component structure.
- The 3 older sector pages (`business-parks`, `construction-site-broadband`, `rural-business-broadband`) — they already use `.webp` assets.
- `sectors/MarinasYachtClubs.tsx` below-fold images — say if you want those done too (they predate this batch).

## Expected gain

Typical savings: 60-75% per image. Across ~50 images, roughly **8–12 MB** of total page weight removed across the 10 sector pages combined, with no visible quality change at the rendered sizes.

Shall I proceed?
