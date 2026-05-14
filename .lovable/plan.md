# Use uploaded video as homepage hero background

The uploaded clip is a 10s, 720p abstract fibre/data visual — a perfect fit as a moving background for the homepage hero (currently a static image).

## What I'll do

1. **Condense and optimise the video**
   - Trim to ~6s of the strongest motion (skipping any soft start/end frames).
   - Encode two web-friendly versions in `public/video/`:
     - `hero-bg.mp4` — H.264, ~1280×720, CRF 26, no audio, faststart (~600–900 KB target)
     - `hero-bg.webm` — VP9 fallback for better compression
   - Generate a `hero-bg-poster.jpg` from frame 1 so the hero shows instantly before the video loads.

2. **Swap the hero background in `src/pages/Index.tsx`**
   - Replace the current `<img src={heroImg} …>` with a `<video>` element:
     `autoPlay muted loop playsInline preload="metadata"` + `poster={…}` + `<source>` tags.
   - Keep the existing dark gradient overlay (`from-surface-dark via-black/50 to-black/20`) so headline contrast is unchanged.
   - Keep `loading="eager"` behaviour by preloading the poster image.
   - Respect `prefers-reduced-motion`: fall back to the poster image (no video playback) for users with reduced motion enabled.

3. **No other section changes** — only the hero visual changes.

## Technical notes

- Files served from `/public/video/` so they're not bundled by Vite.
- `<video>` sized with `w-full h-full object-cover` to match the current image.
- Existing `heroImg` import will be removed from `Index.tsx` if no longer used.
