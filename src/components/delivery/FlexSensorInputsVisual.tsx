import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import nexrLogo from "@/assets/nexr-one-logo.png";

const sensors = [
  { id: "A", label: "External Tank" },
  { id: "B", label: "Oil Sensor" },
  { id: "C", label: "Fuel" },
];

const FlexSensorInputsVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-6 px-4"
    >
      {/* Title */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-sm font-medium uppercase tracking-[0.12em] text-foreground mb-8"
      >
        Flex Sensor Inputs
      </motion.span>

      {/* Sensor circles row */}
      <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-14 mb-10">
        {sensors.map((sensor, i) => (
          <div key={sensor.id} className="flex flex-col items-center gap-3">
            {/* Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.2, ease: "easeOut" }}
              className="relative group"
            >
              <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center transition-all duration-200 ease-out group-hover:scale-[1.02] group-hover:border-primary cursor-default">
                <span className="text-2xl font-medium text-foreground">{sensor.id}</span>
              </div>
              {/* Blue pulse ring */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={isInView ? { opacity: [0, 0.4, 0], scale: [1, 1.5] } : {}}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.3, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-primary pointer-events-none"
              />
            </motion.div>

            {/* Sensor label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.9 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.2, ease: "easeOut" }}
              className="text-base text-foreground/90"
            >
              {sensor.label}
            </motion.span>

            {/* Mapped confirmation */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.3, ease: "easeOut" }}
              className="flex items-center gap-1.5"
            >
              <span className="text-sm font-medium text-status-ok">Mapped</span>
              <Check className="w-4 h-4 text-status-ok" strokeWidth={2.5} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Arrow feeding into NEXR logo */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 2.1, ease: "easeOut" }}
        className="flex flex-col items-center gap-1.5"
      >
        {/* Animated downward arrows */}
        <div className="flex items-center text-muted-foreground">
          <motion.div
            animate={isInView ? { y: [0, 4, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
          >
            <ArrowRight className="w-4 h-4 rotate-90" />
          </motion.div>
        </div>

        {/* NEXR logo */}
        <img src={nexrLogo} alt="NEXR ONE" style={{ height: 160, width: "auto" }} />
      </motion.div>
    </div>
  );
};

export default FlexSensorInputsVisual;
