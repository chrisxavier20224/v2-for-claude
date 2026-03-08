import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/**
 * Animated data flow lines for architecture/how-it-works sections.
 * Pauses when off-screen.
 */
const DataFlowArchitecture = () => {
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
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          style={{ width: "40%", top: `${20 + i * 15}%`, left: "-40%", willChange: "transform" }}
          animate={{ x: ["0%", "350%"] }}
          transition={{ duration: 8 + i, delay: i * 1.2, repeat: Infinity, ease: "linear" }}
        />
      ))}
      
      <div className="absolute top-[30%] left-[5%] right-[5%] h-px bg-primary/10" />
      <div className="absolute top-[50%] left-[10%] right-[10%] h-px bg-primary/8" />
      <div className="absolute top-[70%] left-[5%] right-[5%] h-px bg-primary/10" />
      
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/50"
          style={{ left: "-2%", top: `${30 + i * 20}%`, willChange: "transform" }}
          animate={{ x: ["0vw", "105vw"] }}
          transition={{ duration: 10, delay: i * 3, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default DataFlowArchitecture;
