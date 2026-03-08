import { motion, useInView } from "framer-motion";
import { Check, Server } from "lucide-react";
import { useRef } from "react";

const steps = [
  { label: "Client", delay: 1.6, lineDelay: 1.2 },
  { label: "Group", delay: 2.6, lineDelay: 2.2 },
  { label: "Location", delay: 3.6, lineDelay: 3.2 },
  { label: "Assigned", delay: 4.6, lineDelay: 4.2 },
];

const AnimatedLine = ({ delay, isInView }: { delay: number; isInView: boolean }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={isInView ? { scaleY: 1 } : {}}
    transition={{ duration: 0.35, delay, ease: "easeOut" }}
    className="w-px h-8 bg-white/30 origin-top"
  />
);

const FleetAssignmentVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-6 px-4">
      {/* Title */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-sm font-medium uppercase tracking-[0.12em] text-foreground mb-8"
      >
        Structured Fleet Assignment
      </motion.span>

      {/* Generator icon + label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center gap-2 relative"
      >
        <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center">
          <Server className="w-7 h-7 text-foreground" strokeWidth={1.5} />
        </div>
        {/* Blue pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={isInView ? { opacity: [0, 0.4, 0], scale: [1, 1.5] } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border border-primary pointer-events-none"
          style={{ top: 0, width: 64, height: 64 }}
        />
        <span className="text-sm text-foreground/80">New Device Connected</span>
      </motion.div>

      {/* Steps */}
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center">
          <AnimatedLine delay={step.lineDelay} isInView={isInView} />
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: step.delay, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className={`w-10 h-10 rounded-full border ${
              i === steps.length - 1 ? "border-status-ok/60" : "border-white/40"
            } flex items-center justify-center`}>
              <span className={`text-sm font-medium ${
                i === steps.length - 1 ? "text-status-ok" : "text-foreground"
              }`}>
                {i === steps.length - 1 ? <Check className="w-4 h-4" strokeWidth={2.5} /> : step.label.charAt(0)}
              </span>
            </div>
            <span className={`text-sm ${
              i === steps.length - 1 ? "text-status-ok font-medium" : "text-foreground/80"
            }`}>
              {step.label}
            </span>
          </motion.div>
        </div>
      ))}

      {/* Final confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: 5.0, ease: "easeOut" }}
        className="flex items-center gap-1.5 mt-4"
      >
        <span className="text-sm font-medium text-status-ok">Assigned Automatically</span>
        <Check className="w-4 h-4 text-status-ok" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
};

export default FleetAssignmentVisual;
