## Goal

Add a runtime log that proves the phone-call `gtag('config', 'AW-344295012/zReJCNaN8okcEOSMlqQB', …)` call runs exactly once on initial mount and is not re-invoked on SPA route changes.

## Change

In `src/components/shared/Analytics.tsx`, inside `initializeGA()`, immediately before the phone-call `gtag('config', …)` call (currently ~line 64), add:

```ts
console.log("PHONE_CONFIG_FIRED_ONCE", { at: "initializeGA", ts: Date.now() });
```

`initializeGA()` is only called from the mount-only `useEffect(() => { … }, [])` in the `Analytics` component, so this log will print exactly once per full page load. If it ever prints on a client-side route change, that's the signal something re-invoked the config.

## Verification

1. Load any page → console shows one `PHONE_CONFIG_FIRED_ONCE` line.
2. Navigate between routes (e.g. `/` → `/check` → `/insights`) → no additional `PHONE_CONFIG_FIRED_ONCE` lines appear.
3. Confirm no additional beacons hit `googleadservices.com/pagead/conversion/344295012/` during route changes.

## Out of scope

No changes to the availability-checker submit fire, the `conversionFiredRef` guard, the label, the gate logic, or any other tracking behaviour.
