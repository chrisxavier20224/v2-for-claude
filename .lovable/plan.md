

# Export Homeworkers Page Code as Reference Document

## What
Generate a comprehensive code reference file containing the full source code of the Homeworkers page and all its shared components/design tokens — everything needed to replicate the exact styling in another Lovable project.

## Files to Include

1. **Design System Foundation**
   - `tailwind.config.ts` — full type scale, colors, animations
   - `src/index.css` — CSS variables, utility classes, gradient presets
   - `src/components/ui/button.tsx` — button variants and sizes

2. **Shared Components**
   - `Section.tsx`, `AnimatedSection.tsx`, `StaggeredContainer.tsx` — layout + animation primitives
   - `GradientBand.tsx`, `EyebrowLabel.tsx` — decorative elements
   - `RelatedServices.tsx` — service card grid
   - `CustomerLogoBar.tsx` — scrolling logo carousel
   - `StickyCallBar.tsx` — mobile sticky CTA
   - `PageLayout.tsx` — page wrapper (Navbar + Footer + CookieConsent)

3. **The Page Itself**
   - `src/pages/sectors/Homeworkers.tsx` — full 479-line component

## Output
A single organised text/markdown file at `/mnt/documents/homeworkers-page-code-reference.md` with all code blocks clearly labelled, ready to paste into the other project.

## Approach
- Compile all files into one markdown document with file paths as headers
- Include a "Quick Start" section listing required npm packages (`framer-motion`, `lucide-react`, `class-variance-authority`, `@radix-ui/react-slot`, `tailwindcss-animate`, `@tailwindcss/typography`)
- No changes to this project's codebase

