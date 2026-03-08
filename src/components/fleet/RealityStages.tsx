import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const stages = [
  {
    title: "Informal control",
    description:
      "Context lives in conversations. Visibility depends on familiarity.",
  },
  {
    title: "Growing complexity",
    description:
      "Regions expand. Teams multiply. Information spreads across systems.",
  },
  {
    title: "Fragmented oversight",
    description:
      "Accountability becomes harder to prove. Control becomes reactive instead of deliberate.",
  },
];

const STAGE_DURATION = 4000;

const RealityStages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [active, setActive] = useState(0);

  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isInView) {
      setActive(0);
      setPaused(false);
      return;
    }
    if (paused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stages.length);
    }, STAGE_DURATION);
    return () => clearInterval(interval);
  }, [isInView, paused]);

  const handleClick = (i: number) => {
    setActive(i);
    setPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPaused(false), STAGE_DURATION);
  };

  return (
    <div ref={ref} className="flex flex-col rounded-xl border border-border/30 overflow-hidden">
      {stages.map((stage, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`relative px-6 py-6 border-b last:border-b-0 border-border/20 transition-colors duration-500 cursor-pointer ${
              isActive ? "bg-primary/[0.06]" : "bg-transparent hover:bg-primary/[0.03]"
            }`}
          >
            <div className="flex items-center gap-3">
              <motion.span
                className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                animate={{
                  backgroundColor: isActive
                    ? "hsl(var(--primary))"
                    : "hsl(var(--muted-foreground) / 0.25)",
                }}
                transition={{ duration: 0.4 }}
              />
              <span
                className={`text-lg font-medium transition-colors duration-400 ${
                  isActive ? "text-foreground" : "text-muted-foreground/60"
                }`}
              >
                {stage.title}
              </span>
            </div>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3 ml-[22px]">
                    {stage.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar */}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-primary/40"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: STAGE_DURATION / 1000, ease: "linear" }}
                key={`progress-${i}-${active}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RealityStages;
