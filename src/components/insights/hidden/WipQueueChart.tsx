const WipQueueChart = () => {
  // months 1..12 — orders arriving > orders clearing => compounding WIP
  const arriving = [40, 45, 50, 55, 62, 68, 75, 82, 90, 98, 106, 115];
  const clearing = [30, 32, 34, 36, 39, 42, 44, 47, 50, 53, 56, 60];
  let wip = 0;
  const wipSeries = arriving.map((a, i) => (wip += a - clearing[i]));
  const maxWip = Math.max(...wipSeries);

  const W = 600;
  const H = 260;
  const padL = 50;
  const padR = 20;
  const padT = 20;
  const padB = 36;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const x = (i: number) => padL + (i / (wipSeries.length - 1)) * plotW;
  const y = (v: number) => padT + plotH - (v / maxWip) * plotH;

  const linePath = wipSeries
    .map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`)
    .join(" ");
  const areaPath = `${linePath} L ${x(wipSeries.length - 1)} ${padT + plotH} L ${x(0)} ${padT + plotH} Z`;

  return (
    <figure className="not-prose my-12">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-2">
          WIP queue, £MRR
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Orders arriving faster than they clear — the queue compounds every month.
        </p>

        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="WIP queue compounding month over month">
          <defs>
            <linearGradient id="wip-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(0 75% 55% / 0.35)" />
              <stop offset="100%" stopColor="hsl(0 75% 55% / 0)" />
            </linearGradient>
          </defs>

          {/* y gridlines */}
          {[0, 0.25, 0.5, 0.75, 1].map((g, i) => (
            <line
              key={i}
              x1={padL}
              x2={W - padR}
              y1={padT + plotH * (1 - g)}
              y2={padT + plotH * (1 - g)}
              stroke="hsl(var(--border))"
              strokeWidth={1}
              strokeDasharray="2 4"
            />
          ))}

          {/* area + line */}
          <path d={areaPath} fill="url(#wip-area)" />
          <path d={linePath} fill="none" stroke="hsl(0 75% 50%)" strokeWidth={2.5} />

          {/* end-of-year marker */}
          <circle cx={x(11)} cy={y(wipSeries[11])} r={5} fill="hsl(0 75% 50%)" />
          <text x={x(11) - 6} y={y(wipSeries[11]) - 12} textAnchor="end" fontSize="12" fontWeight={600} className="fill-foreground">
            6-figure £MRR
          </text>

          {/* axes */}
          <line x1={padL} x2={W - padR} y1={padT + plotH} y2={padT + plotH} stroke="hsl(var(--border))" />
          {wipSeries.map((_, i) => (
            <text key={i} x={x(i)} y={H - 14} textAnchor="middle" fontSize="10" className="fill-muted-foreground">
              M{i + 1}
            </text>
          ))}
        </svg>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
        Cumulative WIP — signed customers not yet live, revenue not yet recognised.
      </figcaption>
    </figure>
  );
};

export default WipQueueChart;