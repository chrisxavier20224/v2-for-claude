import { ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Audit & Tier",
    body: "Map every site. Classify standard vs outlier.",
  },
  {
    n: "02",
    title: "Standardise the Majority",
    body: "One spec, one SLA, one renewal rhythm.",
  },
  {
    n: "03",
    title: "Plan for the Outliers",
    body: "Pre-decided answers for rural, new-build, short-timeline sites.",
  },
  {
    n: "04",
    title: "Single-Pane Management",
    body: "One provider. One view. All data in one place. One number to call.",
  },
];

const EstatePlaybook = () => (
  <figure className="not-prose my-12">
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5">
      The Estate Playbook
    </p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 items-stretch">
      {steps.map((s, i) => (
        <div key={s.n} className="relative flex">
          <div className="flex-1 rounded-2xl border border-border bg-card shadow-sm p-5 md:p-6">
            <div className="text-3xl md:text-4xl font-semibold text-primary tabular-nums leading-none mb-3">
              {s.n}
            </div>
            <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{s.body}</p>
          </div>
          {i < steps.length - 1 && (
            <>
              <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </div>
              <div className="md:hidden flex justify-center w-full mt-2 mb-0 text-primary">
                <ArrowDown className="h-4 w-4" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </figure>
);

export default EstatePlaybook;