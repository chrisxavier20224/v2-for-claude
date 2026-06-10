## 1. Fix the gclid/UTM capture bug (do first)

**Root cause:** the capture readers (`src/App.tsx` lines 124-137, `AvailabilityCheckerInline.tsx` lines 261-280, and `useUTMCapture.ts`) trust `URLSearchParams.get()` blindly. When an ad tracking template lands with a malformed query like `?gclid=Cj0...EALw_wcBhttps://www.integra-networks.co.uk/rural-business-broadband?utm_keyword=...`, the raw URL is glued onto the gclid value and we persist it verbatim — exactly what HubSpot is now showing.

**Fix:** centralise capture in one helper used by every form path, with sanitisation + localStorage persistence.

- Create `src/lib/leadAttribution.ts`:
  - `captureLeadAttribution()` — runs on every page load. Reads `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid` from `window.location.search`. For each value: `decodeURIComponent` → trim → take only the portion *before* the first whitespace, `http://`, `https://`, `<`, or stray `?`/`&` (regex split). Drop empty strings. Each param is captured **independently** from its own query key — never substitute the page URL.
  - Merge with existing stored attribution (URL params win when present, otherwise keep persisted). First-touch attribution preserved when URL has none.
  - Persist to **`localStorage`** under key `integra_lead_attribution` (sessionStorage too, for back-compat with the existing key `integra_utm_params`, so in-flight code keeps working).
  - `getLeadAttribution()` — returns a clean `{ utm_source?, utm_medium?, utm_campaign?, utm_term?, utm_content?, gclid? }`. Re-validates on read (anyone with poisoned legacy storage gets it cleaned next visit).
- Wire it up:
  - `src/App.tsx`: replace the inline IIFE with `captureLeadAttribution()`.
  - `src/components/availability-checker/AvailabilityCheckerInline.tsx`: replace `INITIAL_UTM_PARAMS` IIFE + `utmParamsRef` population with `getLeadAttribution()`. Submission payload spread (`...utmParamsRef.current`) unchanged.
  - `src/components/availability-checker/hooks/useUTMCapture.ts` + `hubspotApi.ts`: route through the new helper so the (currently unused) `AvailabilityCheckerForm` path is also safe.
  - `src/pages/Contact.tsx`: add hidden HubSpot fields for `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid` populated from `getLeadAttribution()` at submit time. Currently this form sends none — adding it closes the attribution gap.
- Absent params → omit the field entirely (no empty-string submissions, no URL substitution).

## 2. /check — convert from consumer to business framing

File: `src/components/availability-checker/AvailabilityCheckerInline.tsx` (this is what `/check` renders).

- **Hero copy** (`HERO_COPY` map, line 91):
  - Step 1 title → `"Let's get your business connected"`
  - Step 1 sub → `"60-second coverage check for UK business sites — fibre-class speeds, live in 10 working days."`
  - Steps 2/3 untouched.
- **Hero image:** replace the `heroBg` import (currently `@/assets/sectors/homeworker-remote-work.avif`, a domestic interior) with a business-coded image — generate a new asset via `imagegen` (rural UK business site with a roof-mounted antenna/Starlink dish on a small commercial building, golden-hour, no people interiors) → externalise with `lovable-assets` → import the `.asset.json`. Save under `src/assets/check/check-hero.jpg.asset.json`.
- **Step 1 form — add required Company field:**
  - Add `company` state.
  - Insert a new `<Input>` directly above the First/Last name grid (label "Company name", placeholder `"Company name"`, `autoComplete="organization"`, required).
  - Change email placeholder from `"sarah@example.com"` → `"sarah@yourcompany.co.uk"`.
  - Extend `step1Valid` to require `company.trim().length > 0` and show a "Required" error when touched.
  - Extend `submitToHubSpot` payload typing + field push: `{ objectTypeId: "0-1", name: "company", value: payload.company }` — `company` is the standard HubSpot contact property, so it lands on the Company contact field automatically.
- **Microcopy:** under the form (below the "No commitment…" reassurance for step 2, and visible on step 1 too), add a single muted-foreground line: `"Integra is a business-only provider — we don't supply residential addresses."`
- **Untouched:** step order, qualifier questions (service type, pain points, urgency), pin-drop step, all submission/conversion logic, the "2026 Availability Checker" conversion fire on `/thankyou`.

## 3. /lp/wireless-internet-providers-uk — repairs + polish

File: `src/pages/landing/WirelessInternetProvidersUK.tsx`.

**Bug fixes (confirmed broken):**

- **Hero second button** — currently `<Button variant="outline">` whose default styles (`border-white/50 text-foreground`) render invisibly against the gradient. Replace with explicit classes matching `/integra-bridge`: `className="border-white/40 bg-white/10 backdrop-blur text-white hover:bg-white/20"` and label `"Talk to Sales"` → `/contact`. Both hero buttons read clearly against the dark hero.
- **Final CTA section** ("Ready to switch…") — currently `<Section variant="dark">`, but in the running build it renders white-on-white. Replace the wrapping `<Section variant="dark" size="large">` with a plain `<section className="bg-surface-dark py-20 md:py-28">` block (the exact pattern `/integra-bridge` uses) and explicit text classes: heading `text-surface-dark-foreground`, body `text-surface-dark-muted`, primary button default, secondary `border-white/40 bg-white/10 text-white hover:bg-white/20`. Phone number `tel:+442033887111` link preserved.
- **"Check coverage in 60 seconds" empty band** (lines 256-262) — remove the standalone `<Section size="compact" variant="alt">` band. Replace with a slim single-row strip directly above the stats: `bg-background-alt py-6` with one line of supporting copy ("Coverage check takes 60 seconds — no postcode lottery") + a `<Button asChild>` linking to `#availability-checker` (the existing anchor). No large empty void.

**Hero copy + image:**

- H1 → `"Wireless internet for UK business — live in 10 working days, where fibre can't reach."` (highlight "10 working days" in `text-primary`).
- Sub → `"Bonded 4G/5G + Starlink, engineered for business. Up to 500Mbps, 99.5% SLA, UK engineers. No fibre required. No 10-week wait."`
- Keep "Check Coverage" primary (scrolls to availability checker), add fixed "Talk to Sales" secondary → `/contact`.
- Replace hero image (`@/assets/sectors/rural-sme-hero.webp`, lifestyle/plant) with a new business-coded asset. Reuse the same generated image as `/check` for visual consistency OR generate a second variant (construction site cabin + antenna). Externalise via `lovable-assets`.
- Update the three stat cards' copy to the requested phrasing ("10 working days · from order to live", "Up to 500Mbps · bonded 4G/5G + Starlink", "99.5% SLA · UK engineer support").

**Polish to /integra-bridge quality:**

- **Bonded "how it works" visual:** insert a new section after the stats, before "WHO IT'S FOR". Three icon-cards (lucide `Satellite`, `Radio`, `Server`) showing `Starlink → 5G/4G ×2 → Bonded Output`, matching the bridge `howItWorks` cards (lines 204-213 of `IntegraBridge.tsx`). Pure visual — same `rounded-2xl border border-border bg-card p-6` styling, same `staggerContainer`/`fadeUp` motion variants.
- **Trust strip:** add directly under the hero (between hero `</section>` and the slim coverage band). A single row on `bg-background-alt py-6` with four credibility chips separated by primary dots: `"SLA-backed"`, `"UK-based engineers"`, `"Trusted by rural & multi-site businesses"`, `"99.5% uptime guarantee"`. Mobile: wraps to two rows. Reuse `CustomerLogoBar` if there's an appropriate variant; otherwise inline.
- **Section padding:** swap inconsistent `<Section size="compact|default|large">` usages for `py-20 md:py-28` to match the bridge rhythm. Don't touch the `<AvailabilityCheckerInline compact sourceTag="lp-wireless-internet-providers" />` block.

**Preserved unchanged:** URL, canonical, SEO meta, all three schema blocks, FAQs, pricing tiers, "What we are/not" compare, pain points, customer proof, availability checker behaviour, every `tel:` link, the Google Ads phone-conversion snippet in `Analytics.tsx`.

## Verification after build

1. Load `/check?utm_source=google&utm_medium=cpc&utm_campaign=test&gclid=CjFakeValue123` → open devtools → submit step 1 with dummy data → confirm payload to `api.hsforms.com` shows `gclid: "CjFakeValue123"` and the five utm_ fields cleanly populated, with no URL appended and no empty fields.
2. Load `/check` with a poisoned URL like `?gclid=ABChttps://www.integra-networks.co.uk/bad` → confirm only `ABC` is captured (or whatever is before the `http`).
3. Refresh `/check` with no query params → confirm stored attribution from previous step still submits.
4. `/check` step 1 → confirm Company field is required + lands as the HubSpot Company property on the test contact.
5. `/check` → submit a full lead → confirm redirect to `/thankyou` still fires the `AW-344295012/GHgLCKWQt9sCEOSMlqQB` conversion (untouched in `Analytics.tsx`).
6. `/lp/wireless-internet-providers-uk` → hero "Talk to Sales" visible; final CTA legible on dark navy; no empty band; new bonded visual and trust strip render; mobile-responsive.
7. Phone snippet: load any page → check `dataLayer` for the `phone_conversion_number` config call (still fires from `Analytics.tsx`).

## Technical notes

- The existing `Analytics.tsx` phone-conversion config (lines 60-68 + the route-change re-fire) is **not** touched.
- localStorage chosen over sessionStorage so a user clicking an ad → bouncing to a separate browser tab → returning later still attributes correctly. Existing sessionStorage key kept written for any code still reading it.
- No new dependencies. No schema/migration changes.
