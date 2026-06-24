const STAGES = [
  { label: "Signed", cost: false, revenue: false },
  { label: "Survey", cost: true, revenue: false },
  { label: "Engineer visited", cost: true, revenue: false },
  { label: "Provisioning", cost: true, revenue: false },
  { label: "Live", cost: true, revenue: true },
];

const OrderJourneyBar = () => (
  <figure className="not-prose my-12">
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6">
        The order journey — where the cash gets trapped
      </p>

      <div className="relative">
        <div className="grid grid-cols-5 gap-1">
          {STAGES.map((s, i) => {
            const isTrapped = s.cost && !s.revenue;
            const isLive = s.revenue;
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  className={`w-full h-12 rounded-md flex items-center justify-center text-[10px] font-semibold ${
                    isLive
                      ? "bg-[hsl(140_60%_40%)] text-white"
                      : isTrapped
                      ? "bg-[hsl(0_75%_55%/0.18)] border border-[hsl(0_75%_55%/0.4)] text-foreground"
                      : "bg-muted text-foreground/70"
                  }`}
                >
                  {isLive ? "REVENUE" : isTrapped ? "COST INCURRED" : "—"}
                </div>
                <div className="mt-3 text-xs font-medium text-foreground">{s.label}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {i + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* trapped span overlay label */}
        <div className="mt-6 grid grid-cols-5 gap-1">
          <div />
          <div className="col-span-3 border-t-2 border-dashed pt-2 text-center text-xs font-semibold" style={{ borderColor: "hsl(0 75% 55%)", color: "hsl(0 75% 50%)" }}>
            Cash trapped in WIP
          </div>
          <div />
        </div>
      </div>
    </div>
  </figure>
);

export default OrderJourneyBar;