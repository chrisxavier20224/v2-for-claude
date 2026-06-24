const PARTIES = [
  { label: "Planner", broken: false },
  { label: "Openreach", broken: true },
  { label: "Landlord", broken: true },
  { label: "Solicitor", broken: true },
  { label: "Wayleave", broken: true },
  { label: "Civils crew", broken: false },
  { label: "External engineer", broken: false },
  { label: "Internal engineer", broken: false },
  { label: "Router support", broken: false },
  { label: "Firewall support", broken: false },
  { label: "Reseller AM", broken: true },
  { label: "End customer", broken: true },
];

const ProvisioningNodeMap = () => {
  const cx = 300;
  const cy = 300;
  const r = 220;
  const n = PARTIES.length;

  return (
    <figure className="not-prose my-12">
      <div className="rounded-2xl border border-border bg-card p-4 md:p-8">
        <svg viewBox="0 0 600 600" className="w-full h-auto" role="img" aria-label="A leased-line install — twelve+ parties around one circuit, with broken lines where information flow fails">
          {/* radial backdrop */}
          <defs>
            <radialGradient id="prov-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.10)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
            </radialGradient>
          </defs>
          <circle cx={cx} cy={cy} r={r + 30} fill="url(#prov-bg)" />

          {/* connections */}
          {PARTIES.map((p, i) => {
            const a = (i / n) * Math.PI * 2 - Math.PI / 2;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;
            return (
              <line
                key={`l-${i}`}
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke={p.broken ? "hsl(0 75% 55%)" : "hsl(var(--primary))"}
                strokeWidth={p.broken ? 1.5 : 2}
                strokeDasharray={p.broken ? "5 6" : undefined}
                opacity={p.broken ? 0.85 : 0.55}
              />
            );
          })}

          {/* central node */}
          <circle cx={cx} cy={cy} r={56} fill="hsl(var(--primary))" />
          <text x={cx} y={cy - 4} textAnchor="middle" className="fill-white" fontSize="13" fontWeight={600}>
            ONE
          </text>
          <text x={cx} y={cy + 14} textAnchor="middle" className="fill-white" fontSize="13" fontWeight={600}>
            CIRCUIT
          </text>

          {/* outer nodes */}
          {PARTIES.map((p, i) => {
            const a = (i / n) * Math.PI * 2 - Math.PI / 2;
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;
            const labelOffset = 28;
            const lx = cx + Math.cos(a) * (r + labelOffset);
            const ly = cy + Math.sin(a) * (r + labelOffset);
            const anchor =
              Math.abs(Math.cos(a)) < 0.2
                ? "middle"
                : Math.cos(a) > 0
                ? "start"
                : "end";
            return (
              <g key={`n-${i}`}>
                <circle
                  cx={x}
                  cy={y}
                  r={14}
                  fill="hsl(var(--background))"
                  stroke={p.broken ? "hsl(0 75% 55%)" : "hsl(var(--primary))"}
                  strokeWidth={2}
                />
                {p.broken && (
                  <text x={x} y={y + 4} textAnchor="middle" className="fill-[hsl(0_75%_55%)]" fontSize="14" fontWeight={700}>
                    !
                  </text>
                )}
                <text
                  x={lx}
                  y={ly + 4}
                  textAnchor={anchor}
                  className="fill-foreground"
                  fontSize="12"
                  fontWeight={500}
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-6 h-[2px] bg-primary/60" />
            Information flows
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block w-6 h-0 border-t-2 border-dashed"
              style={{ borderColor: "hsl(0 75% 55%)" }}
            />
            Information gap
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
        One circuit, 12+ parties. The red lines are where the provisioning
        team has to chase information they don't control.
      </figcaption>
    </figure>
  );
};

export default ProvisioningNodeMap;