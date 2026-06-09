## Goal

Restore the Google Ads phone-call conversion snippet (`AW-344295012/xVXnCOGsvP8CEOSMlqQB`, `phone_conversion_number: '0203 388 7111'`) so Google can swap the visible number with a tracking number and record call conversions. Must keep working across client-side route changes.

## Important deviation from the brief

The brief asks to add the snippet inside `index.html <head>` right after "the existing gtag.js Google tag block". There is no gtag.js block in `index.html` — both GA4 and Google Ads `gtag.js` scripts are loaded dynamically by `src/components/shared/Analytics.tsx` (`initializeGA`) after React mounts. If we hard-code the `gtag('config', ...)` call in `index.html`, it will run before `gtag` is defined and silently no-op.

So we will install the phone snippet inside `Analytics.tsx`, where `gtag` is guaranteed to be initialised, and re-fire it on every route change. Same outcome, SPA-safe.

## Changes

### 1. `src/components/shared/Analytics.tsx`

- In `initializeGA()`, immediately after the existing `window.gtag("config", GOOGLE_ADS_ID)` call, add:
  ```ts
  window.gtag("config", `${GOOGLE_ADS_ID}/xVXnCOGsvP8CEOSMlqQB`, {
    phone_conversion_number: "0203 388 7111",
  });
  ```
- In the existing route-change `useEffect` (the one that calls `trackPageView` / `trackHubSpotPageView`), after the page-view calls, re-fire the same phone-conversion config so Google's swap re-applies after client-side navigation. Guarded by `window.gtag` being defined.
- Do not touch GA4 page-view tracking, contact-form conversion, lead-form conversion on `/thankyou`, or Enhanced Conversions logic.

### 2. Phone-number rendering

Audit shows every visible phone string on the site is already rendered as `0203 388 7111` (Footer, StickyCallBar aria-label, Contact, Support, Pricing, ThankYou, CheckingOutYourProperty, BrandGuidelines, legal pages, IntegraBridge, all landing pages, insights PDFs). `tel:` hrefs use `tel:02033887111` / `tel:+442033887111`, which is correct and does not interfere with the swap (Google swaps text content, not `tel:` URIs are left to the swap script which handles both). No copy changes required.

### 3. `index.html`

No changes. (The brief's literal snippet cannot run there because `gtag` is loaded by React.)

## Out of scope

- GA4 measurement (`G-YWR9JZCZP1`) — untouched.
- Lead-form conversion on `/thankyou` (`GHgLCKWQt9sCEOSMlqQB`) — untouched.
- Phone-click conversion (`zReJCNaN8okcEOSMlqQB`) — untouched.
- HubSpot tracking — untouched.
