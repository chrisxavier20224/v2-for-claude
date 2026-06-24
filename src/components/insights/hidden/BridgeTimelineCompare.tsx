const BridgeTimelineCompare = () => {
  // 10 weeks total scale
  const totalWeeks = 12;
  const expectedLive = 2;
  const actualLive = 10;
  const bridgeLive = 2; // ~10 working days ≈ 2 weeks

  const pct = (w: number) => `${(w / totalWeeks) * 100}%`;

  return (
    <figure className="not-prose my-12">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-6">
          Expected go-live vs actual — and what Bridge changes
        </p>

        {/* Row: Expected */}
        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-2 text-sm text-foreground/70">
              <span>Expected</span>
              <span>Live ~2 weeks</span>
            </div>
            <div className="relative h-6 rounded-full bg-muted overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-primary/70"
                style={{ width: pct(expectedLive) }}
              />
            </div>
          </div>

          {/* Row: Actual */}
          <div>
            <div className="flex items-center justify-between mb-2 text-sm text-foreground/70">
              <span>Actual</span>
              <span>Live ~10 weeks</span>
            </div>
            <div className="relative h-6 rounded-full bg-muted overflow-hidden">
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: pct(actualLive),
                  background:
                    "repeating-linear-gradient(45deg, hsl(0 75% 55% / 0.25) 0 8px, hsl(0 75% 55% / 0.4) 8px 16px)",
                }}
                aria-label="WIP gap — customer not live, revenue not recognised"
              />
              <div
                className="absolute inset-y-0 left-0 bg-primary/70"
                style={{ width: pct(expectedLive) }}
              />
              <div
                className="absolute inset-y-0 bg-[hsl(140_60%_40%)]"
                style={{ left: pct(actualLive), width: "6px" }}
              />
            </div>
            <p className="mt-2 text-xs" style={{ color: "hsl(0 75% 55%)" }}>
              ↑ WIP gap — customer offline, revenue not recognised
            </p>
          </div>

          {/* Row: With Bridge */}
          <div>
            <div className="flex items-center justify-between mb-2 text-sm text-foreground/70">
              <span>With Integra Bridge</span>
              <span>Live ~10 working days · circuit catches up</span>
            </div>
            <div className="relative h-6 rounded-full bg-muted overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-[hsl(140_60%_40%)]"
                style={{ width: pct(bridgeLive) }}
              />
              <div
                className="absolute inset-y-0 bg-[hsl(140_60%_40%/0.25)]"
                style={{ left: pct(bridgeLive), width: pct(actualLive - bridgeLive) }}
              />
              <div
                className="absolute inset-y-0 bg-primary/70"
                style={{ left: pct(actualLive), width: "6px" }}
              />
            </div>
            <p className="mt-2 text-xs text-[hsl(140_60%_30%)]">
              ↑ Customer trading from day one. Bridge stays on as failover when the circuit lands.
            </p>
          </div>
        </div>

        {/* week axis */}
        <div className="mt-6 grid grid-cols-12 text-[10px] text-muted-foreground">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-center">{i + 1}</span>
          ))}
        </div>
        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
          Weeks from order
        </p>
      </div>
    </figure>
  );
};

export default BridgeTimelineCompare;