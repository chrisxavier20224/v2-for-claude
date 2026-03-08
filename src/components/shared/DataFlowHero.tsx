import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * Subtle animated data flow lines for hero backgrounds.
 * Pauses animations when not visible to reduce CPU/GPU usage.
 */
const DataFlowHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated flowing lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{
            width: "60%",
            top: `${25 + i * 12}%`,
            left: "-60%",
            willChange: "transform",
          }}
          animate={{
            x: ["0%", "260%"],
          }}
          transition={{
            duration: 10 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Curved arc lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Static faint arc guides */}
        <path
          d="M 0 80% Q 30% 40%, 60% 50% T 100% 30%"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.08"
        />
        <path
          d="M 0 60% Q 40% 30%, 70% 40% T 100% 20%"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.05"
        />
      </svg>
      
      {/* Floating data dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          style={{
            left: "-5%",
            top: `${30 + i * 15}%`,
            willChange: "transform",
          }}
          animate={{
            x: ["0vw", "110vw"],
            y: [0, -50, -20, -80],
          }}
          transition={{
            duration: 12 + i * 3,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default DataFlowHero;
