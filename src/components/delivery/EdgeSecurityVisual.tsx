import { motion } from "framer-motion";
const nexrOneLogo = "/assets/logos/nexr-one-logo.svg";

const LINE_COUNT = 7;
const CYCLE_DURATION = 4;

// Which lines are "aligned" and pass through the boundary
const alignedIndices = new Set([1, 3, 5]);

const EdgeSecurityVisual = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[340px] rounded-xl border border-border/30 bg-[hsl(var(--background))] overflow-hidden select-none">
      {/* Integra Logo — stable at top */}
      <div className="relative z-10 mb-6">
        <img src={nexrOneLogo} alt="Integra Logo" className="h-8 opacity-80" />
      </div>

      {/* Boundary line */}
      <div className="relative z-10 w-48 flex items-center justify-center mb-16">
        <div className="absolute inset-0 h-px bg-primary/30 blur-sm" />
        <div className="w-full h-px bg-border/60" />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40" />
        <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40" />
      </div>

      {/* Traffic lines container */}
      <div className="relative z-0 flex items-end justify-center gap-5 h-32 w-56">
        {Array.from({ length: LINE_COUNT }).map((_, i) => {
          const isAligned = alignedIndices.has(i);
          const delay = (i * CYCLE_DURATION) / LINE_COUNT;

          return (
            <div key={i} className="relative flex flex-col items-center h-full">
              {/* Rising line */}
              <motion.div
                className="w-px origin-bottom"
                style={{
                  willChange: "transform, opacity",
                  background: isAligned
                    ? "linear-gradient(to top, transparent, hsl(var(--primary) / 0.7))"
                    : "linear-gradient(to top, transparent, hsl(var(--muted-foreground) / 0.25))",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{
                  scaleY: [0, 1, 1, 0],
                  opacity: isAligned ? [0, 0.9, 0.9, 0] : [0, 0.4, 0, 0],
                  height: isAligned ? ["0%", "100%", "100%", "0%"] : ["0%", "65%", "65%", "0%"],
                }}
                transition={{
                  duration: CYCLE_DURATION,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.35, 0.7, 1],
                }}
              />

              {/* Subtle glow dot at tip for aligned lines */}
              {isAligned && (
                <motion.div
                  className="absolute top-0 w-1 h-1 rounded-full bg-primary/50"
                  style={{ willChange: "opacity" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0.8, 0] }}
                  transition={{
                    duration: CYCLE_DURATION,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.35, 0.7, 1],
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Label */}
      <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-medium">
        Managed Security Boundary
      </p>
    </div>
  );
};

export default EdgeSecurityVisual;
