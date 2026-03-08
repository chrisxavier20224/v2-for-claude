import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Four-stage animation:
 *  0 — Contained: few assets, clean lines, single region
 *  1 — Growing: more assets, multiple regions, denser lines
 *  2 — Fragmented: lines break, icons drift, disorder
 *  3 — Structured: hierarchy snaps into place (Client → Site → Asset)
 */

interface Node {
  id: string;
  x: number;
  y: number;
  label?: string;
  level?: number; // 0 = client, 1 = site, 2 = asset
}

interface Edge {
  from: string;
  to: string;
}

// ─── Stage Data ──────────────────────────────────────────────────────────────

const stage0: { nodes: Node[]; edges: Edge[] } = {
  nodes: [
    { id: "a1", x: 50, y: 30, label: "GEN", level: 2 },
    { id: "a2", x: 35, y: 55, label: "GEN", level: 2 },
    { id: "a3", x: 65, y: 55, label: "GEN", level: 2 },
    { id: "hub", x: 50, y: 75, label: "HQ", level: 0 },
  ],
  edges: [
    { from: "hub", to: "a1" },
    { from: "hub", to: "a2" },
    { from: "hub", to: "a3" },
  ],
};

const stage1: { nodes: Node[]; edges: Edge[] } = {
  nodes: [
    { id: "a1", x: 25, y: 20, label: "GEN", level: 2 },
    { id: "a2", x: 50, y: 18, label: "GEN", level: 2 },
    { id: "a3", x: 75, y: 22, label: "GEN", level: 2 },
    { id: "a4", x: 20, y: 45, label: "GEN", level: 2 },
    { id: "a5", x: 45, y: 48, label: "GEN", level: 2 },
    { id: "a6", x: 70, y: 42, label: "GEN", level: 2 },
    { id: "a7", x: 35, y: 70, label: "GEN", level: 2 },
    { id: "a8", x: 60, y: 72, label: "GEN", level: 2 },
    { id: "hub", x: 50, y: 88, label: "HQ", level: 0 },
  ],
  edges: [
    { from: "hub", to: "a1" },
    { from: "hub", to: "a2" },
    { from: "hub", to: "a3" },
    { from: "hub", to: "a4" },
    { from: "hub", to: "a5" },
    { from: "hub", to: "a6" },
    { from: "hub", to: "a7" },
    { from: "hub", to: "a8" },
    { from: "a1", to: "a4" },
    { from: "a2", to: "a5" },
    { from: "a3", to: "a6" },
    { from: "a5", to: "a7" },
    { from: "a6", to: "a8" },
  ],
};

const stage2: { nodes: Node[]; edges: Edge[] } = {
  nodes: [
    { id: "a1", x: 18, y: 15, label: "GEN", level: 2 },
    { id: "a2", x: 55, y: 12, label: "GEN", level: 2 },
    { id: "a3", x: 82, y: 25, label: "GEN", level: 2 },
    { id: "a4", x: 12, y: 50, label: "GEN", level: 2 },
    { id: "a5", x: 42, y: 38, label: "GEN", level: 2 },
    { id: "a6", x: 78, y: 52, label: "GEN", level: 2 },
    { id: "a7", x: 28, y: 78, label: "GEN", level: 2 },
    { id: "a8", x: 68, y: 75, label: "GEN", level: 2 },
    { id: "hub", x: 48, y: 62, label: "?", level: 0 },
  ],
  edges: [
    { from: "hub", to: "a2" },
    { from: "hub", to: "a5" },
    { from: "a1", to: "a4" },
    { from: "a3", to: "a6" },
    { from: "a7", to: "a8" },
  ],
};

const stage3: { nodes: Node[]; edges: Edge[] } = {
  nodes: [
    // Client level
    { id: "hub", x: 50, y: 10, label: "Client", level: 0 },
    // Site level
    { id: "s1", x: 25, y: 38, label: "Site A", level: 1 },
    { id: "s2", x: 75, y: 38, label: "Site B", level: 1 },
    // Asset level
    { id: "a1", x: 12, y: 65, label: "GEN", level: 2 },
    { id: "a2", x: 25, y: 65, label: "GEN", level: 2 },
    { id: "a3", x: 38, y: 65, label: "GEN", level: 2 },
    { id: "a5", x: 62, y: 65, label: "GEN", level: 2 },
    { id: "a6", x: 75, y: 65, label: "GEN", level: 2 },
    { id: "a7", x: 88, y: 65, label: "GEN", level: 2 },
  ],
  edges: [
    { from: "hub", to: "s1" },
    { from: "hub", to: "s2" },
    { from: "s1", to: "a1" },
    { from: "s1", to: "a2" },
    { from: "s1", to: "a3" },
    { from: "s2", to: "a5" },
    { from: "s2", to: "a6" },
    { from: "s2", to: "a7" },
  ],
};

const stages = [stage0, stage1, stage2, stage3];
const STAGE_DURATION = [3000, 3000, 3500, 4500]; // ms per stage

// ─── Helpers ────────────────────────────────────────────────────────────────

const getNodeColor = (level: number, stageIdx: number) => {
  if (stageIdx === 2) return "rgba(255,255,255,0.25)"; // fragmented — dimmed
  if (stageIdx === 3) {
    if (level === 0) return "hsl(220, 100%, 55%)";
    if (level === 1) return "hsl(210, 80%, 50%)";
    return "hsl(210, 60%, 45%)";
  }
  if (level === 0) return "hsl(220, 70%, 50%)";
  return "rgba(255,255,255,0.55)";
};

const getNodeSize = (level: number, stageIdx: number) => {
  if (stageIdx === 3) {
    if (level === 0) return 40;
    if (level === 1) return 32;
    return 24;
  }
  if (level === 0) return 36;
  return 22;
};

// ─── Component ──────────────────────────────────────────────────────────────

const FragmentationAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });
  const [stageIdx, setStageIdx] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setStageIdx(0);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let current = 0;

    const advance = () => {
      timer = setTimeout(() => {
        current = (current + 1) % stages.length;
        setStageIdx(current);
        advance();
      }, STAGE_DURATION[current]);
    };

    advance();
    return () => clearTimeout(timer);
  }, [isInView]);

  const stage = stages[stageIdx];
  const nodeMap = new Map(stage.nodes.map((n) => [n.id, n]));

  const stageLabels = ["Contained", "Growing", "Fragmented", "Structured"];
  const isFragmented = stageIdx === 2;
  const isStructured = stageIdx === 3;

  return (
    <div
      ref={ref}
      className="relative w-full rounded-xl overflow-hidden"
      style={{
        aspectRatio: "1/1",
        maxHeight: 440,
        background: "rgba(10,15,23,0.80)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* SVG edges */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220,100%,55%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(210,80%,50%)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="edge-frag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>
        {stage.edges.map((edge, i) => {
          const fromNode = nodeMap.get(edge.from);
          const toNode = nodeMap.get(edge.to);
          if (!fromNode || !toNode) return null;
          return (
            <motion.line
              key={`${edge.from}-${edge.to}-${stageIdx}`}
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: isFragmented ? 0.2 : 0.6,
                pathLength: 1,
                x1: fromNode.x,
                y1: fromNode.y,
                x2: toNode.x,
                y2: toNode.y,
              }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
              stroke={isFragmented ? "url(#edge-frag)" : isStructured ? "url(#edge-grad)" : "rgba(255,255,255,0.18)"}
              strokeWidth={isStructured ? 0.6 : 0.4}
              strokeDasharray={isFragmented ? "1.5 2" : "none"}
            />
          );
        })}

        {/* Region boundaries for stages 1+ */}
        {stageIdx >= 1 && stageIdx < 3 && (
          <>
            <motion.rect
              x="8" y="8" width="42" height="48" rx="4"
              fill="none"
              stroke={isFragmented ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.08)"}
              strokeWidth="0.4"
              strokeDasharray="2 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.rect
              x="52" y="12" width="42" height="55" rx="4"
              fill="none"
              stroke={isFragmented ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.08)"}
              strokeWidth="0.4"
              strokeDasharray="2 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </>
        )}

        {/* Structured hierarchy groups */}
        {isStructured && (
          <>
            <motion.rect
              x="5" y="55" width="42" height="20" rx="3"
              fill="rgba(0,97,255,0.06)"
              stroke="rgba(0,97,255,0.20)"
              strokeWidth="0.4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.rect
              x="53" y="55" width="42" height="20" rx="3"
              fill="rgba(0,97,255,0.06)"
              stroke="rgba(0,97,255,0.20)"
              strokeWidth="0.4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </>
        )}
      </svg>

      {/* Nodes */}
      {stage.nodes.map((node, i) => {
        const size = getNodeSize(node.level ?? 2, stageIdx);
        const color = getNodeColor(node.level ?? 2, stageIdx);
        const showLabel = isStructured && (node.level === 0 || node.level === 1);

        return (
          <motion.div
            key={`${node.id}-${stageIdx}`}
            className="absolute flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
            transition={{
              duration: 0.7,
              delay: i * 0.04,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            {/* Glow for structured hub */}
            {isStructured && node.level === 0 && (
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: size + 16,
                  height: size + 16,
                  background: "radial-gradient(circle, rgba(0,97,255,0.20) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: size,
                height: size,
                background: `radial-gradient(circle at 35% 35%, ${color}, rgba(10,15,23,0.90))`,
                border: `1.5px solid ${isStructured ? "rgba(0,97,255,0.40)" : isFragmented ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.15)"}`,
                boxShadow: isStructured
                  ? `0 0 12px rgba(0,97,255,0.15)`
                  : "0 2px 8px rgba(0,0,0,0.30)",
                transition: "border-color 0.6s ease, box-shadow 0.6s ease",
              }}
            >
              {/* Icon inside */}
              {node.level === 0 && (
                <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              )}
              {node.level === 1 && (
                <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.80)" strokeWidth="2" strokeLinecap="round">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              )}
              {node.level === 2 && (
                <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              )}
            </div>

            {showLabel && (
              <motion.span
                className="mt-1 text-center whitespace-nowrap"
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.04em",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {node.label}
              </motion.span>
            )}
          </motion.div>
        );
      })}

      {/* Stage indicator */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-20">
        {stageLabels.map((label, i) => (
          <div key={label} className="flex items-center gap-2 flex-1">
            <div
              className="h-1 flex-1 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: i === stageIdx
                    ? i === 2
                      ? "rgba(239,68,68,0.50)"
                      : i === 3
                        ? "hsl(220,100%,55%)"
                        : "rgba(255,255,255,0.30)"
                    : "transparent",
                }}
                animate={{ width: i === stageIdx ? "100%" : i < stageIdx ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stage label */}
      <motion.div
        key={stageIdx}
        className="absolute top-4 left-4 z-20 flex items-center gap-2"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: stageIdx === 2
              ? "rgba(239,68,68,0.60)"
              : stageIdx === 3
                ? "hsl(220,100%,55%)"
                : "rgba(255,255,255,0.40)",
          }}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: stageIdx === 2
              ? "rgba(239,68,68,0.70)"
              : stageIdx === 3
                ? "hsl(210,80%,65%)"
                : "rgba(255,255,255,0.45)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {stageLabels[stageIdx]}
        </span>
      </motion.div>
    </div>
  );
};

export default FragmentationAnimation;
