/**
 * BondedTopologyDiagram — parameterized bonded SD-WAN topology diagram
 *
 * Renders a dark "engineering drawing" style SVG showing the full data path:
 *   Customer FW → SD-WAN Router → N SIMs → N Antennas → RF link → N Cell Towers
 *   → N Encrypted Tunnels → Cloud DC (Bonding Server + Fixed IP) → Internet
 *
 * Parameterized by `carriers` (2 | 3 | 4) so Pro, Ultrafast, and Enterprise can
 * share a single source of truth. Inspired by the original
 * integra-l2-topology.jsx generator (3-carrier Ultrafast reference).
 */

import React from 'react';
import integraLogoWhite from '@/assets/topology/integra-logo-white.png';

export type CarrierCount = 2 | 3 | 4;

interface BondedTopologyDiagramProps {
  carriers: CarrierCount;
  productName: string;          // e.g. "Integra Pro"
  throughputLabel: string;      // e.g. "Up to 300 Mbps bonded"
  throughputSubLabel?: string;  // e.g. "aggregate throughput"
  className?: string;
}

// Palette — dark "engineering drawing" style. Canvas bg matches the
// enclosing section (hsl(222,47%,11%) ≈ #0f172a / slate-900) so the
// diagram blends seamlessly into the Network Architecture section
// instead of sitting inside a visibly darker rectangle.
const C = {
  bg: '#0f172a',
  border: '#cccccc',
  text: '#eeeeee',
  textSm: '#dddddd',
  blue: '#60a5fa',
  green: '#34d399',
  orange: '#fbbf24',
  red: '#f87171',
  line: '#cccccc',
  dash: '#777777',
} as const;

const FONT = "'Courier New', monospace";

// Carrier colours in order — SIM 1 blue, SIM 2 green, SIM 3 orange, SIM 4 red
const CARRIER_COLORS = [C.blue, C.green, C.orange, C.red] as const;
const CARRIER_LABELS = ['Carrier A', 'Carrier B', 'Carrier C', 'Carrier D'] as const;

// ── Helper sub-components ───────────────────────────────────────

const Node: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  lines: { t: string; s?: number; c?: string; b?: boolean }[];
  stroke?: string;
}> = ({ x, y, w, h, lines, stroke = C.border }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill="none" stroke={stroke} strokeWidth={1.5} />
    {lines.map((l, i) => (
      <text
        key={i}
        x={x + w / 2}
        y={y + 18 + i * 16}
        textAnchor="middle"
        fontSize={l.s || 11}
        fontFamily={FONT}
        fill={l.c || C.text}
        fontWeight={l.b ? 'bold' : 'normal'}
      >
        {l.t}
      </text>
    ))}
  </g>
);

const Sim: React.FC<{ x: number; y: number; label: string; carrier: string }> = ({
  x, y, label, carrier,
}) => (
  <g>
    <rect x={x} y={y} width={58} height={58} fill="none" stroke={C.border} strokeWidth={1} />
    <text x={x + 29} y={y + 20} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.text} fontWeight="bold">{label}</text>
    <text x={x + 29} y={y + 34} textAnchor="middle" fontSize={8} fontFamily={FONT} fill={C.textSm}>4G/5G</text>
    <text x={x + 29} y={y + 48} textAnchor="middle" fontSize={7} fontFamily={FONT} fill={C.textSm}>{carrier}</text>
  </g>
);

const Antenna: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <line x1={x} y1={y + 8} x2={x} y2={y - 12} stroke={C.border} strokeWidth={1.5} />
    <line x1={x - 8} y1={y - 12} x2={x + 8} y2={y - 12} stroke={C.border} strokeWidth={1.5} />
    <circle cx={x} cy={y - 12} r={2} fill={C.border} />
    <path d={`M${x + 10},${y - 18} Q${x + 16},${y - 12} ${x + 10},${y - 6}`} fill="none" stroke={C.blue} strokeWidth={1} opacity={0.7} />
    <path d={`M${x + 14},${y - 22} Q${x + 22},${y - 12} ${x + 14},${y - 2}`} fill="none" stroke={C.blue} strokeWidth={1} opacity={0.4} />
    <text x={x} y={y + 20} textAnchor="middle" fontSize={7} fontFamily={FONT} fill={C.border}>4×4 MIMO</text>
  </g>
);

const Tower: React.FC<{ x: number; y: number; color: string }> = ({ x, y, color }) => (
  <g>
    <line x1={x} y1={y} x2={x} y2={y + 42} stroke={C.border} strokeWidth={2.5} />
    <line x1={x - 12} y1={y + 42} x2={x + 12} y2={y + 42} stroke={C.border} strokeWidth={2.5} />
    <line x1={x - 9} y1={y + 34} x2={x + 9} y2={y + 34} stroke={C.border} strokeWidth={1.5} />
    <line x1={x - 5} y1={y + 26} x2={x + 5} y2={y + 26} stroke={C.border} strokeWidth={1} />
    <circle cx={x} cy={y - 4} r={5} fill={color} />
    <path d={`M${x - 12},${y - 8} Q${x - 22},${y - 16} ${x - 17},${y - 26}`} fill="none" stroke={color} strokeWidth={1} opacity={0.5} />
    <path d={`M${x - 17},${y - 5} Q${x - 28},${y - 14} ${x - 24},${y - 28}`} fill="none" stroke={color} strokeWidth={1} opacity={0.3} />
  </g>
);

const HArrow: React.FC<{ x1: number; x2: number; y: number; label?: string; dashed?: boolean; color?: string }> = ({
  x1, x2, y, label, dashed, color = C.line,
}) => (
  <g>
    <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth={1.5} strokeDasharray={dashed ? '5,3' : 'none'} />
    <polygon points={`${x2},${y} ${x2 - 8},${y - 4} ${x2 - 8},${y + 4}`} fill={color} />
    {label && (
      <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.textSm}>
        {label}
      </text>
    )}
  </g>
);

const VArrow: React.FC<{ x: number; y1: number; y2: number }> = ({ x, y1, y2 }) => (
  <g>
    <line x1={x} y1={y1} x2={x} y2={y2} stroke={C.line} strokeWidth={1.5} />
    <polygon points={`${x},${y2} ${x - 4},${y2 - 8} ${x + 4},${y2 - 8}`} fill={C.line} />
  </g>
);

// ── Tower cluster layouts (manually tuned to feel organic) ─────

const TOWER_LAYOUTS: Record<CarrierCount, { dx: number; dy: number }[]> = {
  2: [
    { dx: 15, dy: -40 },
    { dx: 55, dy: -10 },
  ],
  3: [
    { dx: 0,  dy: -50 },
    { dx: 45, dy: -20 },
    { dx: 20, dy: 18 },
  ],
  4: [
    { dx: 0,  dy: -55 },
    { dx: 45, dy: -25 },
    { dx: 25, dy: 15 },
    { dx: 60, dy: 40 },
  ],
};

// ── Tunnel vertical offsets (spread around midY) ───────────────

const TUNNEL_OFFSETS: Record<CarrierCount, number[]> = {
  2: [-18, 18],
  3: [-30, 0, 30],
  4: [-42, -14, 14, 42],
};

// ── Main component ──────────────────────────────────────────────

export const BondedTopologyDiagram: React.FC<BondedTopologyDiagramProps> = ({
  carriers,
  productName,
  throughputLabel,
  throughputSubLabel = 'aggregate throughput',
  className = '',
}) => {
  // Layout constants (match the original generator for N=3)
  const midY = 280;
  const simStartX = 400;
  const simPitch = 62;
  const simY = midY + 94;

  // When N > 3, shift all "right of SIMs" elements rightward by dx
  // (RF link, towers, tunnels, cloud DC) so the SIM cluster doesn't collide
  const dx = Math.max(0, (carriers - 3) * simPitch);

  const W = 1000 + dx;
  const H = 707;

  // RF link + towers + tunnels + cloud DC anchor points (shifted by dx)
  const rfLinkStart = 560 + dx;
  const rfLinkEnd = 630 + dx;
  const towerAnchorX = 675 + dx;
  const towerAnchorY = midY; // reference — individual dy applied per tower
  const tunnelStartX = 720 + dx;
  const tunnelEndX = 785 + dx;
  const cloudX = 785 + dx;
  const cloudW = 190;

  // SIM positions
  const sims = Array.from({ length: carriers }, (_, i) => ({
    x: simStartX + i * simPitch,
    label: `SIM ${i + 1}`,
    carrier: CARRIER_LABELS[i],
    color: CARRIER_COLORS[i],
  }));

  // Antennas — placed above each SIM, following original clustering pattern
  // (each antenna slightly offset so they "lean" toward the RF link)
  const antennaOffsets = [40, 28, 16, 8];
  const antennas = sims.map((s, i) => ({
    x: s.x + (antennaOffsets[Math.min(i, antennaOffsets.length - 1)] ?? 29),
  }));

  // Towers — cluster near (towerAnchorX, towerAnchorY)
  const towers = TOWER_LAYOUTS[carriers].map((t, i) => ({
    x: towerAnchorX + t.dx - 20, // cluster centred slightly left of anchor
    y: towerAnchorY + t.dy,
    color: CARRIER_COLORS[i],
  }));

  // Tunnels — N parallel dashed lines into the bonding server
  const tunnels = TUNNEL_OFFSETS[carriers].map((off, i) => ({
    y: midY + off,
    color: CARRIER_COLORS[i],
  }));

  return (
    <div className={className} style={{ background: C.bg, padding: '16px' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ maxWidth: `${W}px`, margin: '0 auto', display: 'block' }}
      >
        <rect width={W} height={H} fill={C.bg} />

        {/* Drawing border */}
        <rect x={3} y={3} width={W - 6} height={H - 6} fill="none" stroke={C.border} strokeWidth={1.5} />

        {/* ── INTEGRA LOGO (top-left, on-screen only) ──────── */}
        {/* Rendered only on the React component — the downloadable PDF is
            generated separately by the reportlab script and stays
            unbranded so Elevate partners can share it with their clients. */}
        <image
          href={integraLogoWhite}
          x={22}
          y={14}
          width={150}
          height={34}
          preserveAspectRatio="xMinYMid meet"
        />

        {/* ── CUSTOMER FIREWALL ───────────────────────────── */}
        <Node
          x={42}
          y={midY - 30}
          w={110}
          h={60}
          stroke={C.orange}
          lines={[
            { t: 'CUSTOMER', b: true, s: 11 },
            { t: 'FIREWALL', b: true, s: 11 },
            { t: 'LAN gateway', s: 8, c: C.textSm },
          ]}
        />

        {/* LAN inbound arrow */}
        <line x1={10} y1={midY} x2={42} y2={midY} stroke={C.line} strokeWidth={1.5} />
        <polygon points={`42,${midY} 34,${midY - 4} 34,${midY + 4}`} fill={C.line} />
        <text x={18} y={midY - 10} fontSize={9} fontFamily={FONT} fill={C.textSm}>LAN</text>

        {/* Primary fibre (optional) — arrow going up */}
        <line x1={97} y1={midY - 30} x2={97} y2={60} stroke={C.dash} strokeWidth={1.5} strokeDasharray="5,3" />
        <polygon points="97,60 93,68 101,68" fill={C.dash} />
        <text x={112} y={72} fontSize={9} fontFamily={FONT} fill={C.dash}>Primary fibre</text>
        <text x={185} y={50} fontSize={9} fontFamily={FONT} fill={C.dash}>(when available)</text>
        <HArrow x1={125} x2={180} y={60} dashed color={C.dash} />

        {/* ── 5G MAIN ROUTER ──────────────────────────────── */}
        <HArrow x1={152} x2={230} y={midY} label="eth0" />
        <Node
          x={230}
          y={midY - 40}
          w={150}
          h={80}
          stroke={C.blue}
          lines={[
            { t: '5G MAIN ROUTER', b: true, s: 12, c: C.blue },
            { t: `${carriers === 2 ? 'Dual' : carriers === 3 ? 'Triple' : 'Quad'}-SIM SD-WAN`, s: 9, c: C.textSm },
            { t: 'Managed gateway', s: 9, c: C.textSm },
          ]}
        />

        {/* Throughput label below router */}
        <text x={340} y={midY + 64} textAnchor="middle" fontSize={10} fontFamily={FONT} fill={C.text} fontWeight="bold">
          {throughputLabel}
        </text>
        <text x={340} y={midY + 80} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.textSm}>
          {throughputSubLabel}
        </text>

        {/* ── SIM CARDS ───────────────────────────────────── */}
        {/* Connector: router bottom → first SIM */}
        <line x1={275} y1={midY + 40} x2={275} y2={midY + 120} stroke={C.line} strokeWidth={1} />
        <line x1={275} y1={midY + 120} x2={sims[0].x} y2={midY + 120} stroke={C.line} strokeWidth={1} />

        {sims.map((s) => (
          <Sim key={s.label} x={s.x} y={simY} label={s.label} carrier={s.carrier} />
        ))}

        {/* ── ANTENNAS ────────────────────────────────────── */}
        {antennas.map((a, i) => (
          <Antenna key={i} x={a.x} y={midY + 14} />
        ))}

        {/* SIM → Antenna connectors */}
        {sims.map((s, i) => (
          <line
            key={`conn-${i}`}
            x1={s.x + 26}
            y1={simY}
            x2={antennas[i].x}
            y2={midY + 34}
            stroke={C.line}
            strokeWidth={0.8}
          />
        ))}

        {/* ── RF LINK ─────────────────────────────────────── */}
        <line x1={rfLinkStart} y1={midY - 30} x2={rfLinkEnd} y2={midY - 30} stroke={C.blue} strokeWidth={1.5} strokeDasharray="6,4" />
        <line x1={rfLinkStart} y1={midY} x2={rfLinkEnd} y2={midY} stroke={C.blue} strokeWidth={1.5} strokeDasharray="6,4" />
        <line x1={rfLinkStart} y1={midY + 30} x2={rfLinkEnd} y2={midY + 30} stroke={C.blue} strokeWidth={1.5} strokeDasharray="6,4" />
        <text x={(rfLinkStart + rfLinkEnd) / 2} y={midY - 45} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.blue}>
          RF 4G/5G
        </text>

        {/* ── CELL TOWERS ─────────────────────────────────── */}
        {towers.map((t, i) => (
          <Tower key={`tower-${i}`} x={t.x} y={t.y} color={t.color} />
        ))}

        <text x={towerAnchorX + 3} y={midY + 78} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.textSm}>
          {carriers === 2 ? 'Dual' : carriers === 3 ? 'Triple' : 'Quad'}
        </text>
        <text x={towerAnchorX + 3} y={midY + 92} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.textSm}>Bonded</text>
        <text x={towerAnchorX + 3} y={midY + 106} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.textSm}>Carriers</text>

        {/* ── ENCRYPTED TUNNELS ───────────────────────────── */}
        <text x={(tunnelStartX + tunnelEndX) / 2} y={midY - 55} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.blue}>Encrypted</text>
        <text x={(tunnelStartX + tunnelEndX) / 2} y={midY - 43} textAnchor="middle" fontSize={9} fontFamily={FONT} fill={C.blue}>Tunnels</text>

        {tunnels.map((t, i) => (
          <g key={`tunnel-${i}`}>
            <line
              x1={tunnelStartX}
              y1={t.y}
              x2={tunnelEndX}
              y2={t.y}
              stroke={t.color}
              strokeWidth={1.5}
              strokeDasharray="5,3"
            />
            <polygon
              points={`${tunnelEndX},${t.y} ${tunnelEndX - 8},${t.y - 4} ${tunnelEndX - 8},${t.y + 4}`}
              fill={t.color}
            />
          </g>
        ))}

        {/* ── CLOUD DATA CENTRE ───────────────────────────── */}
        <rect
          x={cloudX}
          y={midY - 100}
          width={cloudW}
          height={280}
          fill="none"
          stroke={C.border}
          strokeWidth={1}
          strokeDasharray="8,4"
          rx={4}
        />
        <text x={cloudX + 15} y={midY - 82} fontSize={10} fontFamily={FONT} fill={C.textSm} fontWeight="bold">
          CLOUD DATA CENTRE
        </text>

        {/* Bonding Server */}
        <Node
          x={cloudX + 20}
          y={midY - 45}
          w={150}
          h={65}
          stroke={C.blue}
          lines={[
            { t: 'INTEGRA', b: true, s: 12, c: C.blue },
            { t: 'SERVER', b: true, s: 12, c: C.blue },
            { t: 'Traffic aggregation', s: 9, c: C.textSm },
          ]}
        />

        {/* Bonding → Fixed IP arrow */}
        <VArrow x={cloudX + 95} y1={midY + 20} y2={midY + 55} />

        {/* Fixed IP */}
        <Node
          x={cloudX + 35}
          y={midY + 55}
          w={120}
          h={45}
          stroke={C.green}
          lines={[
            { t: 'FIXED IP', b: true, s: 11, c: C.green },
            { t: 'Static public', s: 9, c: C.textSm },
          ]}
        />

        {/* Fixed IP → Internet arrow */}
        <VArrow x={cloudX + 95} y1={midY + 100} y2={midY + 130} />

        <text x={cloudX + 95} y={midY + 155} textAnchor="middle" fontSize={12} fontFamily={FONT} fill={C.text} fontWeight="bold">
          INTERNET
        </text>

        {/* ── TECHNICAL NOTES ─────────────────────────────── */}
        <line x1={25} y1={H - 200} x2={W - 25} y2={H - 200} stroke={C.border} strokeWidth={0.5} />

        <text x={40} y={H - 176} fontSize={14} fontFamily={FONT} fill={C.text} fontWeight="bold">Key characteristics:</text>
        <text x={40} y={H - 152} fontSize={12} fontFamily={FONT} fill={C.textSm}>• Traffic continuously optimised</text>
        <text x={40} y={H - 132} fontSize={12} fontFamily={FONT} fill={C.textSm}>• Latency smoothed across carriers</text>
        <text x={380} y={H - 152} fontSize={12} fontFamily={FONT} fill={C.textSm}>• VPN transparent</text>
        <text x={380} y={H - 132} fontSize={12} fontFamily={FONT} fill={C.textSm}>• Certificate-based auth</text>
        <text x={660} y={H - 152} fontSize={12} fontFamily={FONT} fill={C.textSm}>• Carriers: Three / O2 / Voda / EE</text>
        <text x={660} y={H - 132} fontSize={12} fontFamily={FONT} fill={C.textSm}>
          • {carriers}-carrier configuration ({productName})
        </text>

        {/* ── LEGEND ─────────────────────────────────────── */}
        <line x1={25} y1={H - 108} x2={W - 25} y2={H - 108} stroke={C.border} strokeWidth={0.5} />

        <text x={40} y={H - 82} fontSize={11} fontFamily={FONT} fill={C.text} fontWeight="bold">LEGEND:</text>

        {/* Row 1 */}
        <line x1={130} y1={H - 86} x2={170} y2={H - 86} stroke={C.line} strokeWidth={1.5} />
        <text x={178} y={H - 82} fontSize={11} fontFamily={FONT} fill={C.textSm}>Data path</text>

        <line x1={340} y1={H - 86} x2={380} y2={H - 86} stroke={C.dash} strokeWidth={1.5} strokeDasharray="5,3" />
        <text x={388} y={H - 82} fontSize={11} fontFamily={FONT} fill={C.textSm}>Optional / future</text>

        <line x1={590} y1={H - 86} x2={630} y2={H - 86} stroke={C.blue} strokeWidth={1.5} strokeDasharray="5,3" />
        <text x={638} y={H - 82} fontSize={11} fontFamily={FONT} fill={C.textSm}>RF link (4G/5G)</text>

        {/* Row 2 */}
        <rect x={130} y={H - 62} width={14} height={14} fill="none" stroke={C.blue} strokeWidth={1.5} />
        <text x={152} y={H - 50} fontSize={11} fontFamily={FONT} fill={C.textSm}>Managed equipment</text>

        <line x1={340} y1={H - 55} x2={380} y2={H - 55} stroke={C.green} strokeWidth={1.5} strokeDasharray="5,3" />
        <text x={388} y={H - 50} fontSize={11} fontFamily={FONT} fill={C.textSm}>Encrypted tunnel</text>

        <rect x={590} y={H - 62} width={14} height={14} fill="none" stroke={C.orange} strokeWidth={1.5} />
        <text x={612} y={H - 50} fontSize={11} fontFamily={FONT} fill={C.textSm}>Customer equipment</text>

      </svg>
    </div>
  );
};
