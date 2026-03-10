# Typeform Availability Checker — Historical Performance

> Archived benchmarks from the original Typeform-based availability checker used on integra-networks.co.uk.
> This data serves as a baseline for measuring the performance of our new custom availability checker at `/check`.

## Key Metrics (Lifetime — up to March 2026)

| Metric              | Value     |
|---------------------|-----------|
| **Views**           | 86,188    |
| **Starts**          | 56,791    |
| **Submissions**     | 18,196    |
| **Completion Rate** | 32.0%     |
| **Time to Complete**| 02:16     |

## Funnel Breakdown

- **View → Start rate**: 65.9% (56,791 / 86,188)
- **Start → Submit rate**: 32.0% (18,196 / 56,791)
- **Overall conversion (View → Submit)**: 21.1% (18,196 / 86,188)

## Typeform Optimisation Tips (at time of archival)

1. **Remove 3 questions** — Typeform suggested the form had too many fields, contributing to drop-off.
2. **Simplify Welcome Screen** — The initial screen was flagged as a friction point.
3. **High drop-off at first question** — "First up, what's your..." had significant abandonment, indicating users were put off early.

## Migration Notes

- **Old URL**: `/availability-checker` (Typeform embed on SD-WAN landing page)
- **New URL**: `/check` (custom React multi-step form submitting to HubSpot)
- **Migration date**: March 2026
- **Old `/availability-checker` URL now redirects to `/check`**

## Goals for New Form

- Beat the 32% completion rate by reducing steps and simplifying the flow
- Reduce time-to-complete below 02:16
- Capture richer data (postcode lookup, map pin, coordinates) for sales team
- Direct HubSpot CRM integration (no Typeform middleman)
