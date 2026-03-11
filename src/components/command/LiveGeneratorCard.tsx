import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Thermometer, Droplets, Clock, AlertTriangle } from "lucide-react";

const LiveGeneratorCard = () => {
  const [rpm, setRpm] = useState(1500);
  const [load, setLoad] = useState(72);
  const [coolant, setCoolant] = useState(185);
  const [oil, setOil] = useState(58);
  const [voltage, setVoltage] = useState(415);
  const [frequency, setFrequency] = useState(50.0);
  const [runHours, setRunHours] = useState(4217);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => {
      setRpm(Math.round(1500 + (Math.random() - 0.5) * 4));
      setLoad(Math.round(72 + (Math.random() - 0.5) * 2));
      setCoolant(Math.round(185 + (Math.random() - 0.5) * 2));
      setOil(Math.round(58 + (Math.random() - 0.5) * 1));
      setVoltage(Math.round(415 + (Math.random() - 0.5) * 2));
      setFrequency(+(50.0 + (Math.random() - 0.5) * 0.1).toFixed(1));
      const next = 2500 + Math.random() * 2000;
      intervalRef.current = setTimeout(update, next);
    };
    intervalRef.current = setTimeout(update, 3000);
    return () => { if (intervalRef.current) clearTimeout(intervalRef.current); };
  }, []);

  return (
    <div className="glass-card p-6 rounded-xl relative overflow-hidden">
      {/* Live indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-xs text-green-500 font-medium">LIVE</span>
      </div>

      {/* Generator header */}
      <div className="pb-4 border-b border-border/30">
        <p className="text-xs text-muted-foreground mb-1">Generator</p>
        <p className="text-lg font-medium text-foreground">GEN-1042</p>
        <motion.p
          className="text-sm text-status-ok font-medium"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Running • Normal
        </motion.p>
      </div>

      {/* Telemetry grid */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <TelemetryCell label="Engine Speed" value={rpm} unit="RPM" />
        <TelemetryCell label="Load" value={load} unit="%" />
        <TelemetryCell label="Coolant Temp" value={coolant} unit="°F" />
        <TelemetryCell label="Oil Pressure" value={oil} unit="PSI" />
        <TelemetryCell label="Voltage" value={voltage} unit="V" icon={<Zap className="h-3 w-3 text-primary" />} />
        <TelemetryCell label="Frequency" value={frequency} unit="Hz" />
      </div>

      {/* Run hours */}
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="h-3 w-3" />
        <span>Run Hours: <span className="text-foreground font-mono">{runHours.toLocaleString()}</span></span>
      </div>

      {/* Active alarm */}
      <div className="mt-4 pt-3 border-t border-border/30">
        <p className="text-xs text-muted-foreground mb-2">Active Conditions</p>
        <motion.div
          className="flex items-center justify-between p-2 rounded-lg bg-red-500/10 border border-red-500/20"
          animate={{ borderColor: ["rgba(239,68,68,0.2)", "rgba(239,68,68,0.5)", "rgba(239,68,68,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 text-red-500" />
            <span className="text-sm text-red-400">Engine Overspeed</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">17:42:08</span>
        </motion.div>
      </div>
    </div>
  );
};

const TelemetryCell = ({ label, value, unit, icon }: { label: string; value: number; unit: string; icon?: React.ReactNode }) => (
  <div className="p-3 rounded-lg bg-card/50 border border-border/30">
    <div className="flex items-center gap-1.5">
      {icon}
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
    <AnimatePresence mode="wait">
      <motion.p
        key={value}
        className="text-xl font-mono text-foreground mt-1"
        initial={{ scale: 1.05, color: "hsl(var(--primary))" }}
        animate={{ scale: 1, color: "hsl(var(--foreground))" }}
        transition={{ duration: 0.3 }}
      >
        {value} <span className="text-xs text-muted-foreground">{unit}</span>
      </motion.p>
    </AnimatePresence>
  </div>
);

export default LiveGeneratorCard;
