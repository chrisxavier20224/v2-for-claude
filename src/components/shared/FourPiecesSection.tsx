import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import nexrOneLogo from "@/assets/nexr-one-logo.png";

/**
 * Four Pieces Section - A unified control architecture for critical power.
 * 
 * The four components represent distinct operational disciplines:
 * - Predict = BEFORE (anticipate operational risk)
 * - Command = NOW (maintain live operational authority)
 * - Fleet = WHERE (govern distributed assets)
 * - Insight = AFTER (turn history into intelligence)
 */

const FourPiecesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });
  const [hasPulsed, setHasPulsed] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Trigger pulse animation once after initial load animation completes
  useEffect(() => {
    if (isInView && !hasPulsed) {
      const timer = setTimeout(() => {
        setHasPulsed(true);
      }, 1200); // Wait for entrance animations to complete
      return () => clearTimeout(timer);
    }
  }, [isInView, hasPulsed]);

  return (
    <div ref={containerRef} className="relative py-12 md:py-20">
      
      {/* Desktop: Decision Framework Layout */}
      <div className="hidden lg:block">
        {/* Time axis label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-16 px-8"
        >
          <span className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${hoveredSection === 'before' ? 'text-primary' : 'text-primary/80'}`}>
            Before
          </span>
          <div className="flex-1 mx-8 h-px bg-gradient-to-r from-muted-foreground/20 via-primary/30 to-muted-foreground/20" />
          <span className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${hoveredSection === 'now' || hoveredSection === 'platform' ? 'text-primary' : 'text-primary/80'}`}>
            Now
          </span>
          <div className="flex-1 mx-8 h-px bg-gradient-to-r from-muted-foreground/20 via-primary/30 to-muted-foreground/20" />
          <span className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${hoveredSection === 'after' ? 'text-primary' : 'text-primary/80'}`}>
            After
          </span>
        </motion.div>

        {/* Main framework grid */}
        <div className="relative">
          {/* BEFORE - Predict (left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute left-0 top-0 w-[280px]"
          >
            <Link to="/connectivity/integra-sd-wan" className="group block border-t-2 border-border hover:border-primary pt-4 transition-colors" onMouseEnter={() => setHoveredSection('before')} onMouseLeave={() => setHoveredSection(null)}>
              <motion.div 
                className="relative"
                animate={hasPulsed ? { 
                  scale: [1, 1.02, 1],
                  opacity: [1, 0.9, 1]
                } : {}}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary mb-3 transition-colors">
                  Before
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Predict
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-1 font-medium">
                  Anticipate operational risk before it escalates.
                </p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">
                  Surface early degradation patterns across fuel, runtime, and performance — before alarms dictate action.
                </p>
                <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Predict</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
                
                {/* Connection line to center */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-1/2 left-full w-[calc(50vw-380px)] max-w-[200px] h-px bg-gradient-to-r from-border to-primary/40 origin-left"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Central NEXR Platform - Pulses and lights up on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto w-[320px] relative z-10"
          >
            <div className="block" onMouseEnter={() => setHoveredSection('platform')} onMouseLeave={() => setHoveredSection(null)}>
              <motion.div 
                className="relative"
                animate={hasPulsed ? { 
                  scale: [1, 1.03, 1],
                  opacity: [1, 0.9, 1]
                } : {}}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 8
                }}
              >
                {/* Outer frame with pulse glow */}
                <motion.div
                  className="absolute -inset-2 rounded-xl bg-primary/20 blur-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={hasPulsed ? { 
                    opacity: [0, 0.5, 0]
                  } : { opacity: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 8
                  }}
                />
                <div className="border border-primary/30 rounded-lg p-8 bg-card/50 backdrop-blur-sm">
                  {/* Inner content */}
                  <div className="text-center">
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 mb-4">
                      Platform
                    </div>
                    <div className="h-16 overflow-hidden mx-auto mb-3">
                      <img src={nexrOneLogo} alt="NEXR One" width="160" height="160" className="h-40 w-auto mx-auto -mt-12" />
                    </div>
                    <div className="w-12 h-px bg-primary/40 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A single operational framework.<br />
                      A unified data layer.<br />
                      No silos. No duplication. No blind spots.
                    </p>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50" />
                </div>
              </motion.div>
            </div>
              
            {/* NOW - Command (below center, NOT pulsing) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <Link to="/connectivity/integra-sd-wan" className="block group/command" onMouseEnter={() => setHoveredSection('now')} onMouseLeave={() => setHoveredSection(null)}>
                <div className="border-l-2 border-border hover:border-primary pl-6 py-2 transition-colors">
                  <div className="flex items-baseline gap-3 mb-2">
                     <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover/command:text-primary transition-colors">
                       Now
                     </div>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover/command:text-primary transition-colors">
                    Command
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1 font-medium">
                    Maintain live operational authority.
                  </p>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">
                    Immediate visibility, structured escalation, and decisive response across every generator in service.
                  </p>
                  <div className="flex items-center text-sm text-primary opacity-0 group-hover/command:opacity-100 transition-opacity">
                    <span>Explore Command</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* AFTER - Insight (right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute right-0 top-0 w-[280px] text-right"
          >
            <Link to="/resources" className="group block border-t-2 border-border hover:border-primary pt-4 transition-colors" onMouseEnter={() => setHoveredSection('after')} onMouseLeave={() => setHoveredSection(null)}>
              <motion.div 
                className="relative"
                animate={hasPulsed ? { 
                  scale: [1, 1.02, 1],
                  opacity: [1, 0.9, 1]
                } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              >
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary mb-3 transition-colors">
                  After
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Insight
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-1 font-medium">
                  Turn operational history into structured intelligence.
                </p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">
                  Analyse usage, performance, and event data across fleets — and refine strategy with evidence.
                </p>
                <div className="flex items-center justify-end text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Insight</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
                
                {/* Connection line to center */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-1/2 right-full w-[calc(50vw-380px)] max-w-[200px] h-px bg-gradient-to-l from-border to-primary/40 origin-right"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* WHERE - Fleet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-32 max-w-xl mx-auto"
          >
            <Link to="/connectivity/managed-sim-services" className="group block border-t-2 border-border hover:border-primary pt-8 transition-colors">
              <motion.div 
                className="relative"
                animate={hasPulsed ? { 
                  scale: [1, 1.02, 1],
                  opacity: [1, 0.9, 1]
                } : {}}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeInOut" }}
              >
                {/* Vertical connection to center */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-full h-8 w-px bg-gradient-to-t from-border to-primary/30 origin-bottom"
                />
                
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg border border-border/50 bg-card/30 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                      <MapPin className="w-7 h-7 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                     <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary transition-colors">
                        Where
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Fleet
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1 font-medium">
                      Govern distributed assets with precision.
                    </p>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">
                      Structure deployments across sites, clients, and regions — without losing control as you scale.
                    </p>
                    <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore Fleet</span>
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Stacked decision framework */}
      <div className="lg:hidden space-y-8">
        {/* Time flow indicator */}
        <div className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-widest mb-8">
          <span className={`font-bold transition-colors duration-300 ${hoveredSection === 'before' ? 'text-primary' : 'text-primary/80'}`}>Before</span>
          <div className="w-8 h-px bg-border" />
          <span className={`font-bold transition-colors duration-300 ${hoveredSection === 'now' || hoveredSection === 'platform' ? 'text-primary' : 'text-primary/80'}`}>Now</span>
          <div className="w-8 h-px bg-border" />
          <span className={`font-bold transition-colors duration-300 ${hoveredSection === 'after' ? 'text-primary' : 'text-primary/80'}`}>After</span>
        </div>

        {/* BEFORE - Predict */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Link to="/connectivity/integra-sd-wan" className="group block border-l-2 border-border hover:border-primary pl-6 py-4 transition-colors" onMouseEnter={() => setHoveredSection('before')} onMouseLeave={() => setHoveredSection(null)}>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary mb-2 transition-colors">Before</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Predict</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-1">Anticipate operational risk before it escalates.</p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">Surface early degradation patterns across fuel, runtime, and performance — before alarms dictate action.</p>
          </Link>
        </motion.div>

        {/* Central Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="block" onMouseEnter={() => setHoveredSection('platform')} onMouseLeave={() => setHoveredSection(null)}>
            <motion.div 
              className="relative border border-border rounded-lg p-6 bg-card/30"
              animate={hasPulsed ? { 
                scale: [1, 1.02, 1]
              } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Pulse glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-xl bg-primary/20 blur-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={hasPulsed ? { 
                  opacity: [0, 0.4, 0]
                } : { opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 8
                }}
              />
              
              <div className="relative text-center">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 mb-3">Platform</div>
                <div className="h-12 overflow-hidden mx-auto mb-2">
                  <img src={nexrOneLogo} alt="NEXR One" className="h-28 w-auto mx-auto -mt-8" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">A single operational framework.<br />A unified data layer.<br />No silos. No duplication. No blind spots.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* NOW - Command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Link to="/connectivity/integra-sd-wan" className="group block border-l-2 border-border hover:border-primary pl-6 py-4 transition-colors" onMouseEnter={() => setHoveredSection('now')} onMouseLeave={() => setHoveredSection(null)}>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary mb-2 transition-colors">Now</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Command</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-1">Maintain live operational authority.</p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">Immediate visibility, structured escalation, and decisive response across every generator in service.</p>
          </Link>
        </motion.div>

        {/* AFTER - Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/resources" className="group block border-l-2 border-border hover:border-primary pl-6 py-4 transition-colors" onMouseEnter={() => setHoveredSection('after')} onMouseLeave={() => setHoveredSection(null)}>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary mb-2 transition-colors">After</div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Insight</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-1">Turn operational history into structured intelligence.</p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">Analyse usage, performance, and event data across fleets — and refine strategy with evidence.</p>
          </Link>
        </motion.div>

        {/* WHERE - Fleet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 mt-4"
        >
          <Link to="/connectivity/managed-sim-services" className="group block border-l-2 border-border hover:border-primary pl-6 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg border border-border/50 bg-card/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                <MapPin className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80 group-hover:text-primary mb-1 transition-colors">Where</div>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Fleet</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-1">Govern distributed assets with precision.</p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">Structure deployments across sites, clients, and regions — without losing control as you scale.</p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FourPiecesSection;
