import { useEffect, useRef } from "react";

const ProvisioningSilence = () => {
  const chipRef = useRef<SVGTextElement | null>(null);
  const lineRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const N = 12;
    const CAP = 3;
    const lines = lineRefs.current;
    const dots = dotRefs.current;
    const chip = chipRef.current;
    if (!chip) return;

    const setChip = (out: number) => {
      chip.textContent = `1 CIRCUIT · 12 PARTIES · ${out} OUTSTANDING`;
    };
    const setCleared = (i: number, on: boolean) => {
      lines[i]?.classList.toggle("cleared", on);
      dots[i]?.classList.toggle("cleared", on);
    };

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setCleared(1, true);
      setChip(11);
      return;
    }

    for (let k = 0; k < N; k++) {
      if (lines[k]) {
        lines[k]!.style.animationDuration =
          (2.1 + Math.random() * 1.6).toFixed(2) + "s";
      }
    }

    const green: Record<number, boolean> = {};
    const greenCount = () => Object.keys(green).length;
    const pickRed = () => {
      const reds: number[] = [];
      for (let i = 0; i < N; i++) if (!green[i]) reds.push(i);
      return reds.length ? reds[(Math.random() * reds.length) | 0] : -1;
    };

    const timeouts: number[] = [];
    const tick = () => {
      if (greenCount() < CAP && Math.random() < 0.72) {
        const i = pickRed();
        if (i !== -1) {
          green[i] = true;
          setCleared(i, true);
          setChip(N - greenCount());
          const t = window.setTimeout(() => {
            delete green[i];
            setCleared(i, false);
            setChip(N - greenCount());
          }, 1300 + Math.random() * 900);
          timeouts.push(t);
        }
      }
      setChip(N - greenCount());
    };
    setChip(N);
    const interval = window.setInterval(tick, 900);

    return () => {
      window.clearInterval(interval);
      timeouts.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const leftLabels = [
    ["Reseller account manager", "holds your contract"],
    ["Planner", "holds the survey date"],
    ["Survey team", "holds the line plan"],
    ["Openreach liaison", "holds the install slot"],
    ["Civils crew", "holds the dig date"],
    ["Landlord", "holds site access"],
  ];
  const rightLabels = [
    ["Solicitor", "holds the wayleave legals"],
    ["Wayleave officer", "holds the signature"],
    ["External engineer", "holds the appointment"],
    ["Internal engineer", "holds the build"],
    ["Router / firewall support", "holds the config"],
    ["IT / desktop support", "holds the handover"],
  ];

  const linePaths = [
    "M524 348 L372 166",
    "M524 348 L372 230",
    "M524 348 L372 294",
    "M524 348 L372 358",
    "M524 348 L372 422",
    "M524 348 L372 486",
    "M676 348 L828 166",
    "M676 348 L828 230",
    "M676 348 L828 294",
    "M676 348 L828 358",
    "M676 348 L828 422",
    "M676 348 L828 486",
  ];
  const dotPositions = [
    [92, 166], [92, 230], [92, 294], [92, 358], [92, 422], [92, 486],
    [848, 166], [848, 230], [848, 294], [848, 358], [848, 422], [848, 486],
  ];

  return (
    <>
      <style>{`
        .ps-band { display:block; width:100vw; margin:2.5rem 0 2.5rem calc(50% - 50vw); background:#0a1628; }
        .ps-band svg { width:100%; height:auto; display:block; font-family:inherit; }
        .ps-link { stroke:#e15a4e; stroke-width:2; stroke-dasharray:3 9; stroke-linecap:round; fill:none; opacity:.62; animation: ps-flow linear infinite; transition: stroke .45s ease, opacity .45s ease; }
        .ps-link.cleared { stroke:#34c77b; opacity:.85; }
        .ps-dot { fill:#e15a4e; transition: fill .45s ease; }
        .ps-dot.cleared { fill:#34c77b; }
        @keyframes ps-flow { from { stroke-dashoffset:0; } to { stroke-dashoffset:-48; } }
        @media (prefers-reduced-motion: reduce) { .ps-link { animation: none; } }
      `}</style>
      <div className="ps-band">
        <svg
          viewBox="0 0 1200 675"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="One circuit, more than a dozen parties. A provisioning PM chases each for a piece of information; most are delayed (red) and the board never fully clears, so the customer is still waiting on a go-live date."
        >
          <defs>
            <radialGradient id="ps-bg" cx="50%" cy="50%" r="72%">
              <stop offset="0%" stopColor="#11223d" />
              <stop offset="55%" stopColor="#0a1628" />
              <stop offset="100%" stopColor="#070f1d" />
            </radialGradient>
            <radialGradient id="ps-pmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2f7dff" />
              <stop offset="70%" stopColor="#1a5fe0" />
              <stop offset="100%" stopColor="#1550c4" />
            </radialGradient>
            <radialGradient id="ps-dark" cx="50%" cy="50%" r="44%">
              <stop offset="0%" stopColor="#000" stopOpacity="0" />
              <stop offset="74%" stopColor="#000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
            </radialGradient>
            <filter id="ps-soft" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="13" />
            </filter>
            <filter id="ps-cardshadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="3" stdDeviation="7" floodColor="#000" floodOpacity="0.45" />
            </filter>
          </defs>

          <rect width="1200" height="675" fill="url(#ps-bg)" />
          <rect width="1200" height="675" fill="url(#ps-dark)" />

          <text x="64" y="50" fill="#2f7dff" fontSize="13" letterSpacing="3" fontWeight="700">THE PROBLEM</text>
          <text x="64" y="84" fill="#ffffff" fontSize="26" fontWeight="700">One circuit. More than a dozen owners.</text>
          <text ref={chipRef} x="1136" y="50" fill="#6f86a1" fontSize="13" letterSpacing="1.5" fontWeight="600" textAnchor="end">
            1 CIRCUIT · 12 PARTIES · 11 OUTSTANDING
          </text>

          {linePaths.map((d, i) => (
            <path
              key={i}
              ref={(el) => (lineRefs.current[i] = el)}
              className="ps-link"
              d={d}
            />
          ))}

          <g filter="url(#ps-cardshadow)">
            {[140, 204, 268, 332, 396, 460].map((y) => (
              <rect key={`l${y}`} x="72" y={y} width="300" height="52" rx="11" fill="#0e2236" stroke="#22405f" />
            ))}
            {[140, 204, 268, 332, 396, 460].map((y) => (
              <rect key={`r${y}`} x="828" y={y} width="300" height="52" rx="11" fill="#0e2236" stroke="#22405f" />
            ))}
          </g>

          {dotPositions.map(([cx, cy], i) => (
            <circle
              key={i}
              ref={(el) => (dotRefs.current[i] = el)}
              className="ps-dot"
              cx={cx}
              cy={cy}
              r="5"
            />
          ))}

          <g fill="#ffffff" fontSize="15" fontWeight="700">
            {leftLabels.map(([t], i) => (
              <text key={i} x="108" y={163 + i * 64}>{t}</text>
            ))}
          </g>
          <g fill="#7e94ad" fontSize="12">
            {leftLabels.map(([, s], i) => (
              <text key={i} x="108" y={181 + i * 64}>{s}</text>
            ))}
          </g>
          <g fill="#ffffff" fontSize="15" fontWeight="700">
            {rightLabels.map(([t], i) => (
              <text key={i} x="864" y={163 + i * 64}>{t}</text>
            ))}
          </g>
          <g fill="#7e94ad" fontSize="12">
            {rightLabels.map(([, s], i) => (
              <text key={i} x="864" y={181 + i * 64}>{s}</text>
            ))}
          </g>

          <circle cx="600" cy="348" r="112" fill="#2f7dff" opacity="0.2" filter="url(#ps-soft)" />
          <circle cx="600" cy="348" r="80" fill="url(#ps-pmGlow)" />
          <circle cx="600" cy="348" r="80" fill="none" stroke="#5b97ff" strokeWidth="1.5" opacity="0.6" />
          <text x="600" y="336" fill="#ffffff" fontSize="17" fontWeight="700" textAnchor="middle">Provisioning PM</text>
          <text x="600" y="360" fill="#cfe0ff" fontSize="12" textAnchor="middle">owes the customer a date</text>
          <text x="600" y="386" fill="#ffffff" fontSize="22" fontWeight="800" textAnchor="middle">?</text>

          <text x="600" y="616" fill="#9fb2c8" fontSize="16" textAnchor="middle">
            Clear one, two more go red. The board never settles — and the customer is still waiting on a date.
          </text>
        </svg>
      </div>
    </>
  );
};

export default ProvisioningSilence;