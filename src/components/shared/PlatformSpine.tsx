import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Database, Eye, TrendingUp, FileText, ArrowRight } from "lucide-react";
import EyebrowLabel from "./EyebrowLabel";

type StageName = "fleet" | "command" | "predict" | "insight";

interface PlatformSpineProps {
  activePage: StageName;
}

const stages: {
  id: StageName;
  label: string;
  description: string;
  product: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "fleet", label: "Structure", description: "Organise and unify your estate.", product: "Fleet", href: "/fleet", icon: Database },
  { id: "command", label: "Monitor", description: "See what's happening now.", product: "Command", href: "/command", icon: Eye },
  { id: "predict", label: "Anticipate", description: "Spot issues before they escalate.", product: "Predict", href: "/predict", icon: TrendingUp },
  { id: "insight", label: "Assure", description: "Demonstrate performance over time.", product: "Insight", href: "/insight", icon: FileText },
];

const PlatformSpine = ({ activePage }: PlatformSpineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Pulse animation: cycles through 0-3 highlighting each stage briefly
  const [pulseIndex, setPulseIndex] = useState(-1);

  useEffect(() => {
    if (!isInView) return;
    // Start pulse after entrance animations finish (~1s)
    const startTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setPulseIndex(i);
        i++;
        if (i >= stages.length) {
          clearInterval(interval);
          setTimeout(() => setPulseIndex(-1), 400);
        }
      }, 350);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(startTimer);
  }, [isInView]);

  return (
    <div ref={ref} className="text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <EyebrowLabel>One Platform</EyebrowLabel>
        <h2 className="mb-4 text-heading-1 md:text-display-sm">
          One connected system.
        </h2>
        <div className="max-w-2xl mx-auto space-y-5 mb-16">
          <p className="text-xl text-muted-foreground">
            Your operations don't run in silos.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The same structure that organises your estate powers live monitoring,
            predictive insight, and long-term reporting.
          </p>
          <p className="text-lg text-foreground/80 font-medium">
            You organise once.<br />
            Everything else builds on it.
          </p>
        </div>
      </motion.div>

      {/* Spine — vertical on mobile, horizontal on desktop */}
      <div className="pt-8">
        {/* Desktop: horizontal layout */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-center gap-0">
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-7 left-[15%] right-[15%] h-px bg-border origin-left"
            />

            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = stage.id === activePage;
              const isPulsing = pulseIndex === i;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex-1"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      to={stage.href}
                      className="group flex flex-col items-center gap-3 px-6 relative z-10"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive || isPulsing
                            ? "bg-primary/10 border-primary/40 text-primary"
                            : "bg-card/50 border-border/50 text-muted-foreground/50 group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/5"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`text-2xl font-medium whitespace-nowrap transition-colors duration-300 ${isActive || isPulsing ? "text-foreground" : "text-muted-foreground/50 group-hover:text-foreground/70"}`}>
                        {stage.label}
                      </span>
                      <span className={`text-lg leading-relaxed transition-colors duration-300 ${isActive || isPulsing ? "text-muted-foreground" : "text-muted-foreground/40 group-hover:text-muted-foreground/70"}`}>
                        {stage.description}
                      </span>
                      <span className={`flex items-center text-base font-medium uppercase tracking-[0.15em] mt-2 transition-colors duration-300 ${isActive || isPulsing ? "text-primary" : "text-muted-foreground/30 group-hover:text-primary/60"}`}>
                        {stage.product}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical stacked layout */}
        <div className="md:hidden flex flex-col gap-8">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = stage.id === activePage;
            const isPulsing = pulseIndex === i;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              >
                <Link
                  to={stage.href}
                  className="group flex items-center gap-5 px-2 text-left"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive || isPulsing
                        ? "bg-primary/10 border-primary/40 text-primary"
                        : "bg-card/50 border-border text-muted-foreground/70"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={`text-lg font-medium transition-colors duration-300 ${isActive || isPulsing ? "text-foreground" : "text-foreground/70"}`}>
                      {stage.label}
                    </span>
                    <span className={`text-sm leading-relaxed transition-colors duration-300 ${isActive || isPulsing ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
                      {stage.description}
                    </span>
                    <span className={`flex items-center text-sm font-medium uppercase tracking-[0.15em] mt-1 transition-colors duration-300 ${isActive || isPulsing ? "text-primary" : "text-primary/50"}`}>
                      {stage.product}
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformSpine;
