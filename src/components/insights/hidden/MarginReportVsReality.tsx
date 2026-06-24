const MarginReportVsReality = () => {
  const price = 300; // £/mo
  const trueMonthlyCost = 18; // arbitrary opex-only assumption used for the "report" view
  const installCostMid = 2000;
  const cpe = 400;
  const coordinator = 350;

  // amortise install over 24 months for the realistic view
  const months = 24;
  const amortisedInstall = (installCostMid + cpe + coordinator) / months;
  const realMargin = ((price - amortisedInstall - trueMonthlyCost) / price) * 100;
  const reportMargin = ((price - trueMonthlyCost) / price) * 100;

  const Bar = ({
    label,
    value,
    color,
  }: {
    label: string;
    value: number;
    color: string;
  }) => (
    <div className="flex-1">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 text-center">
        {label}
      </div>
      <div className="relative h-56 bg-muted rounded-md overflow-hidden flex items-end">
        <div
          className="w-full transition-all"
          style={{
            height: `${Math.max(2, value)}%`,
            background: color,
          }}
        />
        <div className="absolute inset-x-0 top-2 text-center">
          <div className="text-3xl md:text-4xl font-semibold text-foreground">
            {Math.round(value)}%
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            margin
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <figure className="not-prose my-12">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6">
          What the margin report says vs the real cost stack
        </p>

        <div className="flex gap-4 md:gap-8">
          <Bar label="Report" value={reportMargin} color="hsl(var(--primary))" />
          <Bar label="Reality" value={Math.max(0, realMargin)} color="hsl(0 75% 50%)" />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg bg-muted/40 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Report assumes
            </div>
            <ul className="space-y-1 text-foreground/80">
              <li>£{price}/mo revenue</li>
              <li>Engineering labour → capex</li>
              <li>CPE → capex</li>
              <li>Coordinator hours → overhead</li>
            </ul>
          </div>
          <div className="rounded-lg p-4 border" style={{ borderColor: "hsl(0 75% 55% / 0.4)", background: "hsl(0 75% 55% / 0.06)" }}>
            <div className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "hsl(0 75% 45%)" }}>
              Reality, per circuit
            </div>
            <ul className="space-y-1 text-foreground/80">
              <li>£1,500–£2,500 engineering install</li>
              <li>+ CPE (~£{cpe})</li>
              <li>+ Coordinator hours (~£{coordinator})</li>
              <li>Amortised over {months} months against £{price}/mo</li>
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
        Re-code the install cost honestly and the 90% margin collapses.
      </figcaption>
    </figure>
  );
};

export default MarginReportVsReality;