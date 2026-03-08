import { motion } from "framer-motion";

const CYCLE = 8;

const azNodes = [
  { label: "AZ-A", x: "20%" },
  { label: "AZ-B", x: "50%" },
  { label: "AZ-C", x: "80%" },
];

const ResilientCloudVisual = () => {
  return (
    <div
      className="relative w-full flex flex-col items-center select-none overflow-hidden rounded-lg"
      style={{ aspectRatio: "16/10", background: "hsl(222, 47%, 7%)" }}
    >
      {/* Title */}
      <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-medium">
        Resilient Cloud Architecture
      </p>

      {/* Region boundary */}
      <div className="relative mt-5 w-[75%] flex-1 mb-24">
        <div className="absolute inset-0 border border-border/20 rounded-md" />
        <span className="absolute -top-2.5 left-4 px-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground/40 font-medium bg-[hsl(222,47%,7%)]">
          Region
        </span>

        {/* AZ Nodes */}
        {azNodes.map((az, i) => (
          <motion.div
            key={az.label}
            className="absolute flex flex-col items-center gap-2"
            style={{ left: az.x, top: "50%", transform: "translate(-50%, -50%)" }}
            animate={
              i === 1
                ? { opacity: [1, 1, 0.2, 0.2, 1, 1] }
                : { opacity: 1 }
            }
            transition={
              i === 1
                ? { duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: [0, 0.35, 0.42, 0.65, 0.72, 1] }
                : undefined
            }
          >
            <div className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center bg-transparent">
              <span className="text-[11px] font-medium text-muted-foreground/70 tracking-wide">
                {az.label.split("-")[1]}
              </span>
            </div>
            <span className="text-[9px] tracking-[0.15em] text-muted-foreground/40 font-medium">
              {az.label}
            </span>
          </motion.div>
        ))}

        {/* Horizontal connection lines between nodes */}
        {/* A—B */}
        <motion.div
          className="absolute h-px bg-border/25"
          style={{ top: "50%", left: "26%", width: "18%" }}
          animate={{ opacity: [0.5, 0.5, 0.08, 0.08, 0.5, 0.5] }}
          transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: [0, 0.35, 0.42, 0.65, 0.72, 1] }}
        />
        {/* B—C */}
        <motion.div
          className="absolute h-px bg-border/25"
          style={{ top: "50%", left: "56%", width: "18%" }}
          animate={{ opacity: [0.5, 0.5, 0.08, 0.08, 0.5, 0.5] }}
          transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: [0, 0.35, 0.42, 0.65, 0.72, 1] }}
        />

        {/* Travelling pulse — normal: A → B → C */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
          style={{ top: "calc(50% - 3px)" }}
          animate={{
            left: ["19%", "49%", "79%"],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: CYCLE * 0.34,
            repeat: Infinity,
            repeatDelay: CYCLE * 0.66,
            ease: "easeInOut",
          }}
        />

        {/* A—C arc (appears during disruption) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M 20 50 Q 50 25 80 50"
            stroke="hsl(var(--primary))"
            strokeWidth="0.3"
            strokeLinecap="round"
            fill="none"
            animate={{ opacity: [0, 0, 0.5, 0.5, 0, 0] }}
            transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: [0, 0.35, 0.42, 0.65, 0.72, 1] }}
          />
        </svg>

        {/* Travelling pulse on arc during disruption */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          animate={{
            left: ["19%", "49%", "79%"],
            top: ["50%", "30%", "50%"],
            opacity: [0, 0, 0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: CYCLE,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.35, 0.42, 0.55, 0.65, 0.72],
          }}
        />
      </div>

      {/* Vertical connector line down to NEXR */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-8 bg-border/20" />
        <div className="mt-2 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
          <div className="w-2 h-2 rounded-full bg-primary/60" />
        </div>
        <span className="mt-2 text-[9px] uppercase tracking-[0.15em] text-primary/50 font-medium">
          NEXR Platform
        </span>
      </div>
    </div>
  );
};

export default ResilientCloudVisual;
