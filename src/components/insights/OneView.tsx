import { LayoutDashboard, ArrowRight } from "lucide-react";

const inputs = ["Every site", "Every contract", "Every connection"];

const OneView = () => (
  <figure className="not-prose my-12 rounded-2xl border border-border bg-muted/30 p-8 md:p-10">
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">
      {/* Inputs */}
      <div className="flex-1 w-full space-y-3">
        {inputs.map((label) => (
          <div
            key={label}
            className="relative rounded-lg border border-border bg-card px-5 py-3 text-sm md:text-base font-medium text-foreground/85"
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 h-2 w-2 rounded-full bg-primary" />
            {label}
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center text-primary shrink-0">
        <ArrowRight className="h-6 w-6 hidden md:block" strokeWidth={2} />
        <ArrowRight className="h-6 w-6 md:hidden rotate-90" strokeWidth={2} />
      </div>

      {/* Output */}
      <div className="flex-1 w-full rounded-xl bg-primary/5 border border-primary/20 p-6 md:p-7 flex flex-col items-center justify-center text-center">
        <LayoutDashboard className="h-8 w-8 text-primary mb-3" strokeWidth={1.75} />
        <div className="text-lg md:text-xl font-semibold text-foreground">One view</div>
        <div className="text-sm text-foreground/70 mt-1">One pane of glass</div>
      </div>
    </div>
    <figcaption className="mt-6 text-sm text-muted-foreground text-center leading-relaxed">
      One view — every site, every contract, every connection, monitored from one place.
    </figcaption>
  </figure>
);

export default OneView;