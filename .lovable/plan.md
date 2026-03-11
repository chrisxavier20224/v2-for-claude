

## Sticky Mobile Call Bar

Add a persistent call-to-action bar pinned to the bottom of the screen on mobile devices, giving visitors a one-tap way to call 0203 388 7111.

### What it will look like
- A slim bar fixed to the bottom of the viewport, visible only on mobile (hidden on `md:` and above)
- Contains a phone icon and the number "0203 388 7111" as a tap-to-call link (`tel:02033887111`)
- Styled in the brand primary colour with white text for high visibility
- Sits above any cookie consent banner if present

### Technical details

**New component**: `src/components/shared/StickyCallBar.tsx`
- A fixed-position bar (`fixed bottom-0 left-0 right-0 z-40`) with `md:hidden` to show on mobile only
- Uses an `<a href="tel:02033887111">` for native tap-to-call
- Phone icon from Lucide (`Phone`)
- Compact height (~48px) so it doesn't obstruct content

**Integration**: `src/components/layout/PageLayout.tsx`
- Import and render `StickyCallBar` alongside the existing `CookieConsentBanner`
- This ensures it appears on every page automatically

**Bottom padding**: Add a small `pb-12 md:pb-0` to the `<main>` element in PageLayout so page content isn't hidden behind the sticky bar on mobile.

