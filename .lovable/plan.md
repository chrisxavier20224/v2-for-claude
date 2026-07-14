# Publish the availability-checker conversion label fix

## Situation

- Source (`src/components/availability-checker/AvailabilityCheckerInline.tsx`, line 775) already contains the correct label:
  `send_to: "AW-344295012/GHgLCKWQt9sCEOSMlqQB"`
- Live bundle at `https://v2scale.lovable.app/assets/index-z8SWTQ_g.js` still contains the **old** label `kTuMCNmN8okcEOSMlqQB` and does **not** contain `GHgLCKWQt9sCEOSMlqQB`.
- Conclusion: the code fix is correct; the deploy just hasn't shipped. Frontend changes on Lovable only go live after Publish → Update.

## Plan

1. No code changes required — the file is already correct.
2. Click **Publish → Update** (top-right of the editor) to push the current build to `v2scale.lovable.app`. Or approve this plan and I'll run the publish action for you once switched to build mode.
3. After deploy, re-verify by fetching the new JS bundle from `v2scale.lovable.app/check` and confirming:
   - `GHgLCKWQt9sCEOSMlqQB` is present
   - `kTuMCNmN8okcEOSMlqQB` is gone from the availability-checker call site
4. Fire a test submission (Business or Home Worker path) and check Google Ads → Conversions → "2026 Availability Checker" for the recorded event (may take up to a few hours to appear).

## Notes

- The gate (case-insensitive `t !== "consumer"`) and the `conversionFiredRef` de-dupe are unchanged.
- gclid / UTM capture untouched.
- Phone-call (`xVXnC…`) and phone-click (`zReJC…`) conversions remain as-is.
