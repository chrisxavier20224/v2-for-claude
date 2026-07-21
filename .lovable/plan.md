## Goal

Verify at runtime that the phone-call `gtag('config', 'AW-344295012/zReJCNaN8okcEOSMlqQB', …)` call fires exactly once on initial page load and does NOT re-fire on SPA route changes.

## Check

Drive Playwright (headless Chromium) against the preview URL:

1. Open `https://id-preview--07f3936b-523c-4c24-9437-e98579c2728b.lovable.app/`, capture all console logs and all outbound requests to `googleadservices.com/pagead/conversion/344295012/`.
2. Count `PHONE_CONFIG_FIRED_ONCE` log lines after initial load → expect exactly 1.
3. Navigate client-side to `/check`, then `/insights`, then back to `/` (using in-app links so it's SPA navigation, not full reloads).
4. Re-count `PHONE_CONFIG_FIRED_ONCE` → expect still exactly 1.
5. Count conversion beacons hit during the route changes → expect 0.

## Report back

- Number of `PHONE_CONFIG_FIRED_ONCE` logs on load and after navigation.
- Any conversion beacons that fired during navigation (URL + label).
- Pass/fail verdict.

## Target environment

Preview URL by default (reflects latest committed code, no publish needed). If you'd prefer to test the live published site, say so and I'll point the check at `https://v2scale.lovable.app` instead — but that only works after you publish.

## Out of scope

No code changes. This is a read-only runtime verification.