import { ArrowRight } from "lucide-react";

const WrongBucketDiagram = () => (
  <figure className="not-prose my-12">
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6">
        Engineering labour — drifting into the wrong bucket
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* P&L bucket */}
        <div className="rounded-xl border-2 border-dashed border-primary/40 bg-primary/[0.04] p-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
            P&amp;L (product cost)
          </div>
          <div className="text-sm text-foreground/70 line-through decoration-[hsl(0_75%_55%)] decoration-2">
            Engineering labour
          </div>
          <div className="mt-3 text-[11px] text-muted-foreground">
            Where it belongs
          </div>
        </div>

        {/* arrow */}
        <div className="flex md:flex-col items-center justify-center gap-2 text-[hsl(0_75%_55%)]">
          <ArrowRight className="h-6 w-6 md:rotate-0" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
            drifts
          </span>
        </div>

        {/* Capex bucket */}
        <div className="rounded-xl border-2 p-6 text-center" style={{ borderColor: "hsl(0 75% 55%)", background: "hsl(0 75% 55% / 0.06)" }}>
          <div className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "hsl(0 75% 45%)" }}>
            Capex
          </div>
          <div className="text-sm font-semibold text-foreground">
            Engineering labour
          </div>
          <div className="mt-3 text-[11px] text-muted-foreground">
            Flatters the margin report
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground text-center">
        The cost is the same. The bucket it lands in decides whether the product
        looks profitable.
      </p>
    </div>
  </figure>
);

export default WrongBucketDiagram;