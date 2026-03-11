
## Plan: Trigger Fresh Build

**What I'll do:**
Add a small comment to `src/pages/CheckAvailability.tsx` near the Ideal Postcodes integration to trigger the build system to rebuild and publish the latest code.

**Why this works:**
- The build system detects file changes and triggers a new build
- A comment addition is a minimal, safe change that won't affect functionality
- This will include all the external commits (Ideal Postcodes integration + image optimizations) in the published build

**Technical details:**
- Target file: `src/pages/CheckAvailability.tsx`
- Location: Near the Ideal Postcodes API integration section (around line 379)
- Change: Add a descriptive comment explaining the address lookup feature
