import { Check, X, Minus } from "lucide-react";

type Cell = { kind: "text"; value: string } | { kind: "yes" | "no" | "neutral"; value: string };

const rows: { label: string; cells: [Cell, Cell, Cell] }[] = [
  {
    label: "Upfront capex",
    cells: [
      { kind: "no", value: "High" },
      { kind: "yes", value: "None" },
      { kind: "yes", value: "None" },
    ],
  },
  {
    label: "Time to first revenue",
    cells: [
      { kind: "no", value: "Months" },
      { kind: "yes", value: "Days" },
      { kind: "no", value: "Never" },
    ],
  },
  {
    label: "Customer stays with you",
    cells: [
      { kind: "yes", value: "Yes" },
      { kind: "yes", value: "Yes — fully white-labelled" },
      { kind: "no", value: "No" },
    ],
  },
  {
    label: "Account churn risk",
    cells: [
      { kind: "neutral", value: "Low once live" },
      { kind: "yes", value: "Low — full coverage" },
      { kind: "no", value: "High" },
    ],
  },
];

const iconFor = (kind: Cell["kind"]) => {
  if (kind === "yes") return <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />;
  if (kind === "no") return <X className="h-4 w-4 text-rose-500 shrink-0" strokeWidth={2.5} />;
  if (kind === "neutral") return <Minus className="h-4 w-4 text-muted-foreground shrink-0" strokeWidth={2.5} />;
  return null;
};

const headers = ["Build it", "Partner with Integra", "Say no"];

const BuildPartnerSayNoTable = () => (
  <figure className="not-prose my-12">
    <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-surface-dark text-white">
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 w-1/4">
                &nbsp;
              </th>
              {headers.map((h, i) => (
                <th
                  key={h}
                  className={
                    "px-5 py-4 text-sm font-semibold " +
                    (i === 1 ? "bg-primary/90 text-white" : "")
                  }
                >
                  {h}
                  {i === 1 && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                      Recommended
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={row.label}
                className={ri % 2 === 0 ? "bg-card" : "bg-muted/30"}
              >
                <td className="px-5 py-4 text-sm font-medium text-foreground/80 border-t border-border">
                  {row.label}
                </td>
                {row.cells.map((c, ci) => (
                  <td
                    key={ci}
                    className={
                      "px-5 py-4 text-sm text-foreground/85 border-t border-border " +
                      (ci === 1 ? "bg-primary/[0.06]" : "")
                    }
                  >
                    <span className="inline-flex items-center gap-2">
                      {iconFor(c.kind)}
                      {c.value}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden divide-y divide-border">
        {headers.map((h, ci) => (
          <div
            key={h}
            className={ci === 1 ? "bg-primary/[0.06]" : "bg-card"}
          >
            <div
              className={
                "px-5 py-3 text-sm font-semibold flex items-center gap-2 " +
                (ci === 1 ? "bg-primary text-white" : "bg-surface-dark text-white")
              }
            >
              {h}
              {ci === 1 && (
                <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider">
                  Recommended
                </span>
              )}
            </div>
            <dl className="px-5 py-3 space-y-2">
              {rows.map((row) => {
                const cell = row.cells[ci];
                return (
                  <div key={row.label} className="flex justify-between gap-4 text-sm">
                    <dt className="text-foreground/60">{row.label}</dt>
                    <dd className="inline-flex items-center gap-1.5 font-medium text-foreground/90 text-right">
                      {iconFor(cell.kind)}
                      {cell.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        ))}
      </div>
    </div>
  </figure>
);

export default BuildPartnerSayNoTable;