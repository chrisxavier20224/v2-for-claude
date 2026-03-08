import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * Subtle flowing line divider between major sections.
 * Pauses when off-screen to reduce animation overhead.
 */
const DataFlowDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[2px] overflow-hidden bg-border/20">
      {isVisible && (
        <>
          <motion.div
            className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            style={{ willChange: "transform" }}
            initial={{ x: "-100%" }}
            animate={{ x: "500%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-y-0 w-1/5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ willChange: "transform" }}
            initial={{ x: "-100%" }}
            animate={{ x: "600%" }}
            transition={{ duration: 8, delay: 3, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}
    </div>
  );
};

export default DataFlowDivider;
