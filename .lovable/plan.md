# Make short URLs canonical

## Route changes (src/App.tsx)

Flip these four pairs — the short URL renders the component, the long URL becomes the redirect:

| Short URL (new canonical, renders page) | Old URL (now redirects to short) |
|---|---|
| `/integra-sd-wan` → `<IntegraSDWAN />` | `/connectivity/integra-sd-wan` → Navigate to `/integra-sd-wan` |
| `/construction-site-broadband` → `<ConstructionSites />` | `/sectors/construction-sites` → Navigate to `/construction-site-broadband` |
| `/rural-business-broadband` → `<RuralSMEs />` | `/sectors/rural-smes` → Navigate to `/rural-business-broadband` |
| `/sd-wan-for-small-business` → `<BusinessBroadband />` | `/lp/business-broadband` → Navigate to `/sd-wan-for-small-business` |

Additional redirects:
- `/farm-broadband` → Navigate to `/rural-business-broadband` (was → `/sectors/rural-smes`)
- `/construction-sites` → Navigate to `/construction-site-broadband` (was → `/sectors/construction-sites`)
- `/rural-smes`, `/rural-sme's` → Navigate to `/rural-business-broadband`
- `/integra-business` → already `/integra-sd-wan` (unchanged)
- `/connectivity/integra-sdwan` → update target from `/connectivity/integra-sd-wan` to `/integra-sd-wan` (avoid redirect chain)

Out of scope (not in user request): `/integra-bridge` ↔ `/connectivity/integra-bridge`, `/business-parks` ↔ `/sectors/business-parks`. Leaving as-is.

## SEO / JSON-LD updates (per-page `url=` and structured data)

- `src/pages/connectivity/IntegraSDWAN.tsx` — SEO `url` and JSON-LD `url`/`item` → `/integra-sd-wan` (absolute URL updated to `https://integra-networks.co.uk/integra-sd-wan`)
- `src/pages/sectors/RuralSMEs.tsx` — SEO `url` → `/rural-business-broadband`
- `src/pages/sectors/ConstructionSites.tsx` — SEO `url` → `/construction-site-broadband`
- `src/pages/landing/BusinessBroadband.tsx` — SEO `url` → `/sd-wan-for-small-business`

## Sitemap (public/sitemap.xml)

Replace the four `<loc>` entries with the new canonicals:
- `/connectivity/integra-sd-wan` → `/integra-sd-wan`
- `/sectors/rural-smes` → `/rural-business-broadband`
- `/sectors/construction-sites` → `/construction-site-broadband`
- `/lp/business-broadband` → `/sd-wan-for-small-business`

(Keep `/sectors/business-parks` as-is — out of scope.)

## Internal link sweep

Across all `src/**` files, rewrite every internal `<Link to=...>`, `href=...`, and related-services array entry that points to the four old paths to point to the new short paths. This keeps internal navigation off the redirect (saves a hop and consolidates link equity).

Targets to find-and-replace (whole-string match on path):
- `/connectivity/integra-sd-wan` → `/integra-sd-wan`
- `/sectors/rural-smes` → `/rural-business-broadband`
- `/sectors/construction-sites` → `/construction-site-broadband`
- `/lp/business-broadband` → `/sd-wan-for-small-business`

Will be done with `rg -l` + targeted edits; expected to touch Navbar, Footer, RelatedServices arrays on multiple connectivity/sector/blog/customer/insight pages.

## Verification

1. `rg -n "/connectivity/integra-sd-wan|/sectors/rural-smes|/sectors/construction-sites|/lp/business-broadband"` should only return matches inside `src/App.tsx` (the redirect Route definitions) and `public/sitemap.xml` should not contain them.
2. Manually load `/integra-sd-wan`, `/rural-business-broadband`, `/construction-site-broadband`, `/sd-wan-for-small-business` — each should render directly (no URL change in the address bar).
3. Load `/connectivity/integra-sd-wan`, `/sectors/rural-smes`, `/sectors/construction-sites`, `/lp/business-broadband`, `/farm-broadband` — each should bounce to its new short URL.
4. View page source on each canonical and confirm `<link rel="canonical">` self-references.

## Notes / trade-offs

- These are client-side `<Navigate replace>` redirects, not server 301s. Googlebot treats them as soft 301s; sufficient for most cases but weaker than a true 301 via `public/_headers`. Can be upgraded later if needed.
- One-time SEO cost: Google will need to re-crawl and swap the canonical. Submitting the updated sitemap in Search Console after deploy will speed this up.
