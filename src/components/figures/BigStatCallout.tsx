import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

interface BigStatCalloutProps {
  numerator?: number;
  denominator?: number;
  label?: string;
  annotation?: string;
  showDotGrid?: boolean;
}

// Scatter the highlighted dots organically across a 10x5 grid (50 dots)
const HIGHLIGHTED_INDEXES = [7, 19, 33, 46];

const BigStatCallout = ({
  numerator = 4,
  denominator = 50,
  label = "of every 50 sites in a customer estate is 'the tail'",
  annotation = "= the deals you risk losing",
  showDotGrid = true,
}: BigStatCalloutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [displayNum, setDisplayNum] = useState(prefersReducedMotion ? numerator : 0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplayNum(numerator);
      return;
    }
    const duration = 600;
    const start = performance.now() + 300; // start after banner fade
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayNum(Math.round(eased * numerator));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numerator, prefersReducedMotion]);

  const highlightSet = new Set(
    HIGHLIGHTED_INDEXES.slice(0, numerator),
  );

  const ariaLabel = `${numerator} out of every ${denominator} sites is the tail where fibre cannot reach and where deals are lost`;

  return (
    <motion.figure
      ref={ref}
      role="figure"
      aria-label={ariaLabel}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: prefersReducedMotion ? 0.2 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="not-prose my-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 sm:p-8 md:p-12 shadow-xl shadow-primary/20"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-10">
        {/* LEFT: stat */}
        <div className="w-full lg:w-[55%] text-center lg:text-left">
          <div
            className="flex items-end justify-center lg:justify-start gap-2 text-white font-bold tracking-tight leading-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span
              aria-hidden="true"
              className="tabular-nums"
              style={{ fontSize: "clamp(64px, 8vw, 120px)", lineHeight: 1 }}
            >
              {displayNum}
            </span>
            <span
              aria-hidden="true"
              className="text-white/70 font-light"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1, transform: "translateY(-8%)" }}
            >
              /
            </span>
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : undefined}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.2, delay: prefersReducedMotion ? 0 : 0.3 }}
              className="text-white/80"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1 }}
            >
              {denominator}
            </motion.span>
            <span className="sr-only">{numerator} out of {denominator}</span>
          </div>
          <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
            {label}
          </p>
        </div>

        {/* RIGHT: dot grid */}
        {showDotGrid && (
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start">
            <div
              aria-hidden="true"
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
            >
              {Array.from({ length: denominator }).map((_, i) => {
                const highlighted = highlightSet.has(i);
                const popIndex = HIGHLIGHTED_INDEXES.indexOf(i);
                return (
                  <motion.span
                    key={i}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : highlighted
                          ? { scale: 0, opacity: 0 }
                          : { opacity: 0 }
                    }
                    animate={
                      inView
                        ? prefersReducedMotion
                          ? { opacity: 1 }
                          : highlighted
                            ? { scale: 1, opacity: 1 }
                            : { opacity: 1 }
                        : undefined
                    }
                    transition={
                      prefersReducedMotion
                        ? { duration: 0.2 }
                        : highlighted
                          ? {
                              delay: 0.9 + popIndex * 0.1,
                              type: "spring",
                              stiffness: 500,
                              damping: 14,
                            }
                          : { delay: 0.3, duration: 0.2 }
                    }
                    className={
                      "block h-2.5 w-2.5 md:h-3 md:w-3 rounded-full " +
                      (highlighted
                        ? "bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.18)]"
                        : "bg-white/[0.18]")
                    }
                  />
                );
              })}
            </div>
            <p className="mt-4 text-white/70 text-sm flex items-center gap-2">
              <span className="inline-block h-px w-4 bg-white/40" aria-hidden="true" />
              {annotation}
            </p>
          </div>
        )}
      </div>
    </motion.figure>
  );
};

export default BigStatCallout;