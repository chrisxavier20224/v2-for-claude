import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MetricCard {
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  floatDelay: number;
}

const metrics: MetricCard[] = [
  { label: "Generators Monitored", value: 2400, suffix: "+", floatDelay: 0 },
  { label: "Fleet Uptime", value: 99.7, suffix: "%", decimals: 1, floatDelay: 0.5 },
  { label: "Data Points / Day", value: 18, suffix: "M+", floatDelay: 1 },
  { label: "Active Sites", value: 340, suffix: "+", floatDelay: 1.5 },
];

function useAnimatedCounter(target: number, inView: boolean, decimals = 0, duration = 1.5) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (elapsed < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, decimals, duration]);
  return value;
}

const MetricCardItem = ({ metric, index }: { metric: MetricCard; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useAnimatedCounter(metric.value, isInView, metric.decimals);

  const formatValue = (v: number) => {
    if (metric.decimals) return v.toFixed(metric.decimals);
    return v.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: metric.floatDelay,
        }}
        className="rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] px-5 py-4 min-w-[180px]"
      >
        <p className="text-xs text-foreground/60 mb-1 tracking-widest uppercase font-semibold">
          {metric.label}
        </p>
        <p className="text-3xl font-semibold text-white tabular-nums">
          {metric.prefix}{formatValue(count)}{metric.suffix}
        </p>
      </motion.div>
    </motion.div>
  );
};

const HeroMetricCards = () => {
  return (
    <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10 flex-col gap-4 items-end">
      {metrics.map((metric, i) => (
        <div key={metric.label}>
          <MetricCardItem metric={metric} index={i} />
        </div>
      ))}
    </div>
  );
};

export default HeroMetricCards;
