import { LayoutDashboard, ArrowRight } from "lucide-react";

const inputs = ["Every site", "Every contract", "Every connection"];

const OneView = () => (
  <figure className="not-prose my-12">
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 shadow-xl shadow-primary/20">
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">
        {/* Inputs */}
        <div className="flex-1 w-full space-y-3">
          {inputs.map((label) => (
            <div
              key={label}
              className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-3.5 text-sm md:text-base font-medium text-white"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center text-white/80 shrink-0">
          <ArrowRight className="h-6 w-6 hidden md:block" strokeWidth={2} />
          <ArrowRight className="h-6 w-6 md:hidden rotate-90" strokeWidth={2} />
        </div>

        {/* Output */}
        <div className="flex-1 w-full rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm p-6 md:p-7 flex flex-col items-center justify-center text-center">
          <LayoutDashboard className="h-8 w-8 text-white mb-3" strokeWidth={1.75} />
          <div className="text-lg md:text-xl font-semibold text-white">One view</div>
          <div className="text-sm text-white/80 mt-1">One pane of glass</div>
        </div>
      </div>
      <figcaption className="relative z-10 mt-8 text-sm text-white/80 text-center leading-relaxed">
        One view — every site, every contract, every connection, monitored from one place.
      </figcaption>
    </div>
  </figure>
);

export default OneView;