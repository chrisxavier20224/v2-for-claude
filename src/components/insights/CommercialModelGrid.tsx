import { PoundSterling, Palette, LogOut, Boxes } from "lucide-react";

const tiles = [
  {
    icon: PoundSterling,
    label: "Revenue share",
    body:
      "Integra charges a wholesale rate. The partner sets end-customer pricing and keeps the margin above it.",
  },
  {
    icon: Palette,
    label: "Branded delivery",
    body:
      "All customer-facing communications, paperwork and support carry the partner's brand.",
  },
  {
    icon: LogOut,
    label: "Exit terms",
    body:
      "The customer contract sits with the partner. If you ever choose to build or switch supplier, the relationship is yours to take.",
  },
  {
    icon: Boxes,
    label: "No minimum commitment",
    body: "Start with one site. Scale as demand grows.",
  },
];

const CommercialModelGrid = () => (
  <figure className="not-prose my-12">
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
      How the commercial model works
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {tiles.map(({ icon: Icon, label, body }) => (
        <div
          key={label}
          className="rounded-2xl border border-border bg-card shadow-sm p-6 md:p-7"
        >
          <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
            {label}
          </h3>
          <p className="text-sm md:text-[15px] text-foreground/75 leading-relaxed">
            {body}
          </p>
        </div>
      ))}
    </div>
  </figure>
);

export default CommercialModelGrid;