

# One-Page Brand Guidelines PDF

## What I'll Create
A single-page PDF brand guidelines reference document capturing all visual design tokens from this website, formatted for use when building another project.

## Content to Include
- **Typography**: Inter font family, all scale sizes (display 4.5rem, display-sm 3rem, heading-1 2.25rem, heading-2 1.75rem, heading-3 1.25rem, eyebrow 0.75rem) with weights and letter-spacing
- **Color Palette**: Primary blue (hsl 216 100% 50%), foreground (hsl 222 47% 11%), background white, background-alt (hsl 210 20% 97%), muted (hsl 210 15% 93%), muted-foreground (hsl 220 10% 40%), border (hsl 220 13% 88%), status colors (ok/warning/critical), surface-dark
- **Button Styles**: 6 variants (default/destructive/outline/secondary/ghost/link), 5 sizes (sm/default/lg/xl/icon), border-radius 0.5rem
- **Spacing & Layout**: Container max-width 1400px, 2rem padding, border-radius 0.5rem base
- **Component Patterns**: Card styles, glass-card, eyebrow labels (uppercase, tracking-widest, primary color), section patterns

## Technical Approach
- Generate using ReportLab (Python) with color swatches rendered as actual colored rectangles
- Use Inter-like system font for the document itself
- Clean, professional layout matching the site's minimal aesthetic
- Output to `/mnt/documents/brand-guidelines.pdf`
- Visual QA via pdftoppm conversion

