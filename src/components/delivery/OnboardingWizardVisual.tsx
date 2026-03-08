import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import nexrOneLogo from "@/assets/nexr-one-logo.png";

// ─── Typing hook ─────────────────────────────────────────────────────────────

const useTypingEffect = (text: string, startDelay: number, charSpeed = 80) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setStarted(false);
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [text, startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, charSpeed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, charSpeed]);

  return { displayed, done: displayed.length >= text.length, cursor: started && displayed.length < text.length };
};

// ─── Shared sub-components ───────────────────────────────────────────────────

const StepBadge = ({ step }: { step: number }) => (
  <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
    Step {step} of 5
  </span>
);

const StepTitle = () => (
  <h3 className="text-lg font-normal text-foreground mt-1">Device Onboarding</h3>
);

const ButtonClick = ({
  label,
  highlighted = true,
  clickAt,
  frameTime,
}: {
  label: string;
  highlighted?: boolean;
  clickAt?: number;
  frameTime: number;
}) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (clickAt === undefined) return;
    if (frameTime < clickAt) { setPressed(false); return; }
    setPressed(true);
    const t = setTimeout(() => setPressed(false), 200);
    return () => clearTimeout(t);
  }, [clickAt, frameTime]);

  return (
    <div
      className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all duration-150 ${
        highlighted
          ? pressed
            ? "bg-primary/70 text-primary-foreground scale-95"
            : "bg-primary text-primary-foreground"
          : pressed
            ? "bg-muted/60 text-muted-foreground scale-95"
            : "bg-muted/40 text-muted-foreground"
      }`}
      style={{ transform: pressed ? "scale(0.94)" : "scale(1)" }}
    >
      {label}
    </div>
  );
};

const BackButton = () => (
  <div className="px-3 py-1.5 rounded-md text-xs font-medium bg-muted/40 text-muted-foreground">
    Back
  </div>
);

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-medium text-foreground">{children}</span>
);

const FieldInput = ({
  value,
  active = false,
  cursor = false,
}: {
  value: string;
  active?: boolean;
  cursor?: boolean;
}) => (
  <div
    className={`mt-1 px-3 py-2 rounded-md border text-sm text-foreground/90 ${
      active ? "border-primary/60 bg-primary/5" : "border-border/40 bg-muted/20"
    }`}
  >
    {value}
    {cursor && (
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-px h-4 bg-primary ml-0.5 align-middle"
      />
    )}
  </div>
);

const AnimatedSelect = ({
  label,
  value,
  open,
  options,
  selected,
  onPhase,
}: {
  label: string;
  value: string;
  open: boolean;
  options: string[];
  selected?: string;
  onPhase: "closed" | "opening" | "selected";
}) => (
  <div>
    <FieldLabel>{label}</FieldLabel>
    <div className="relative">
      <div
        className={`mt-1 px-3 py-2 rounded-md border text-sm flex items-center justify-between transition-colors ${
          open ? "border-primary/60 bg-primary/5 text-foreground/90" : "border-border/40 bg-muted/20 text-foreground/90"
        }`}
      >
        {onPhase === "selected" || !open ? value : "Select..."}
        <ChevronDown
          className={`w-3 h-3 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 mt-1 rounded-md border border-border/40 bg-card z-10 overflow-hidden shadow-lg shadow-black/30"
          >
            {options.map((opt) => (
              <div
                key={opt}
                className={`px-3 py-1.5 text-xs transition-colors ${
                  opt === selected
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70"
                }`}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

// ─── Frame 1: Checklist ──────────────────────────────────────────────────────

const CHECKLIST = [
  "Unboxed the NEXR Gateway Device",
  "Install cable connecting controller to gateway",
  "Power up both devices",
];

const Frame1 = ({ elapsed }: { elapsed: number }) => {
  // Checkmarks appear at 1.5s, 2.5s, 3.5s
  const checked = CHECKLIST.map((_, i) => elapsed > 1500 + i * 1000);
  const allChecked = checked.every(Boolean);
  const buttonClickTime = allChecked ? 5000 : undefined;

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-4">
        <StepBadge step={1} />
        <StepTitle />
      </div>
      <p className="text-xs font-medium text-foreground text-center mb-1">
        Welcome to the NEXR Onboarding Wizard
      </p>
      <p className="text-[11px] text-muted-foreground text-center mb-4">
        Before we get started, please go through the steps below:
      </p>
      <div className="space-y-2.5 flex-1">
        {CHECKLIST.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-md border border-border/30 bg-muted/10"
          >
            {checked[i] ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.25, ease: "backOut" }}
                className="w-4 h-4 rounded bg-primary flex items-center justify-center flex-shrink-0"
              >
                <Check className="w-2.5 h-2.5 text-primary-foreground" strokeWidth={3} />
              </motion.div>
            ) : (
              <div className="w-4 h-4 rounded border border-border/50 flex-shrink-0" />
            )}
            <span className="text-xs text-foreground/80">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-auto pt-4">
        <ButtonClick
          label="Next Step"
          highlighted={allChecked}
          clickAt={buttonClickTime}
          frameTime={elapsed}
        />
      </div>
    </div>
  );
};

// ─── Frame 2: Company & Group ────────────────────────────────────────────────

const Frame2 = ({ elapsed }: { elapsed: number }) => {
  const typing = useTypingEffect("GEN234", 400, 100);

  // Phases: 0-1.5s type name, 1.5-2.5s show group, 2.5-4s open engine dropdown, 4-5s select, 5+ close
  const showGroup = elapsed > 2000;
  const showEngine = elapsed > 3000;
  const engineOpen = elapsed > 3500 && elapsed < 5500;
  const engineSelected = elapsed > 4800;
  const buttonClick = elapsed > 6000 ? 6000 : undefined;

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-4">
        <StepBadge step={2} />
        <StepTitle />
      </div>
      <p className="text-xs font-medium text-foreground text-center mb-1">
        Company & Group Assignment
      </p>
      <p className="text-[11px] text-muted-foreground text-center mb-4">
        Assign the device to a company and group, and provide its details.
      </p>
      <div className="space-y-3 flex-1">
        <div>
          <FieldLabel>Device Name</FieldLabel>
          <FieldInput value={typing.displayed} active={!typing.done} cursor={typing.cursor} />
        </div>

        {showGroup && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <AnimatedSelect
              label="Group (optional)"
              value="Unallocated"
              open={false}
              options={[]}
              onPhase="selected"
            />
          </motion.div>
        )}

        {showEngine && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <AnimatedSelect
              label="Engine Size"
              value={engineSelected ? "160.00 KVA" : "Select an engine size"}
              open={engineOpen}
              options={["50.00 KVA", "66.00 KVA", "100.00 KVA", "110.00 KVA", "160.00 KVA", "165.00 KVA"]}
              selected={engineSelected ? "160.00 KVA" : undefined}
              onPhase={engineSelected ? "selected" : engineOpen ? "opening" : "closed"}
            />
          </motion.div>
        )}
      </div>
      <div className="flex items-center justify-between mt-auto pt-4">
        <BackButton />
        <ButtonClick label="Next Step" highlighted={engineSelected} clickAt={buttonClick} frameTime={elapsed} />
      </div>
    </div>
  );
};

// ─── Frame 3: Device & Router ────────────────────────────────────────────────

const Frame3 = ({ elapsed }: { elapsed: number }) => {
  const controllerOpen = elapsed > 800 && elapsed < 2200;
  const controllerSelected = elapsed > 2000;
  const serialTyping = useTypingEffect("234567", controllerSelected ? 2500 : 99999, 90);
  const firmwareChecked = elapsed > 4500;
  const buttonClick = elapsed > 5500 ? 5500 : undefined;

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-4">
        <StepBadge step={3} />
        <StepTitle />
      </div>
      <p className="text-xs font-medium text-foreground text-center mb-1">
        Device & Router Information
      </p>
      <p className="text-[11px] text-muted-foreground text-center mb-4">
        Please enter the details for the device you are onboarding.
      </p>
      <div className="space-y-3 flex-1">
        <AnimatedSelect
          label="Genset Controller"
          value={controllerSelected ? "APM403" : "Select controller"}
          open={controllerOpen}
          options={["APM303", "APM403", "APM802", "DSE8610"]}
          selected={controllerSelected ? "APM403" : undefined}
          onPhase={controllerSelected ? "selected" : controllerOpen ? "opening" : "closed"}
        />

        {controllerSelected && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <FieldLabel>Router Serial Number</FieldLabel>
            <FieldInput
              value={serialTyping.displayed}
              active={!serialTyping.done}
              cursor={serialTyping.cursor}
            />
          </motion.div>
        )}

        {firmwareChecked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 mt-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.25, ease: "backOut" }}
              className="w-3.5 h-3.5 rounded-sm bg-primary flex items-center justify-center flex-shrink-0"
            >
              <Check className="w-2.5 h-2.5 text-primary-foreground" strokeWidth={3} />
            </motion.div>
            <span className="text-[11px] text-foreground/80">Install NEXR Configuration Firmware</span>
          </motion.div>
        )}
      </div>
      <div className="flex items-center justify-between mt-auto pt-4">
        <BackButton />
        <ButtonClick label="Next Step" highlighted={firmwareChecked} clickAt={buttonClick} frameTime={elapsed} />
      </div>
    </div>
  );
};

// ─── Frame 4: Confirmation Modal ─────────────────────────────────────────────

const Frame4 = ({ elapsed }: { elapsed: number }) => {
  const proceedClick = elapsed > 3000 ? 3000 : undefined;

  return (
    <div className="flex flex-col h-full relative">
      {/* Dimmed background */}
      <div className="opacity-15 pointer-events-none blur-[1px]">
        <div className="text-center mb-4">
          <StepBadge step={3} />
          <StepTitle />
        </div>
        <div className="space-y-3">
          <div><FieldLabel>Genset Controller</FieldLabel><FieldInput value="APM403" /></div>
          <div><FieldLabel>Router Serial Number</FieldLabel><FieldInput value="234567" /></div>
        </div>
      </div>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-card border border-border/40 rounded-lg p-5 mx-4 max-w-[280px] shadow-2xl shadow-black/50">
          <h4 className="text-sm font-medium text-foreground mb-2">Confirmation Required</h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
            I confirm that the details entered here are accurate and correct and that the devices are connected and powered on.
          </p>
          <div className="flex items-center gap-2 justify-end">
            <div className="px-3 py-1.5 rounded-md text-[11px] font-medium bg-muted/40 text-muted-foreground">
              Go Back
            </div>
            <ButtonClick label="Proceed" highlighted clickAt={proceedClick} frameTime={elapsed} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── Frame 5: Success ────────────────────────────────────────────────────────

const Frame5 = () => (
  <div className="flex flex-col items-center h-full relative pt-16">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="w-12 h-12 rounded-full bg-status-ok/20 border border-status-ok/40 flex items-center justify-center mb-4"
    >
      <Check className="w-6 h-6 text-status-ok" strokeWidth={2} />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="text-center"
    >
      <p className="text-sm font-medium text-status-ok mb-3">Device Successfully Onboarded</p>
      <img src={nexrOneLogo} alt="NEXR One" className="w-64 mx-auto opacity-70" />
    </motion.div>
    {/* Glow */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.12, 0] }}
      transition={{ duration: 2, delay: 0.5 }}
      className="absolute inset-0 rounded-lg pointer-events-none"
      style={{ background: "radial-gradient(circle at center, hsl(var(--primary) / 0.15), transparent 70%)" }}
    />
  </div>
);

// ─── Frame config ────────────────────────────────────────────────────────────

const FRAME_DURATIONS = [6000, 7500, 6500, 4000, 4000];

// ─── Main Component ──────────────────────────────────────────────────────────

const OnboardingWizardVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });
  const [frameIdx, setFrameIdx] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const frameStartRef = useRef(Date.now());

  // Track elapsed time within current frame
  useEffect(() => {
    if (!isInView) return;
    frameStartRef.current = Date.now();
    setElapsed(0);

    const interval = setInterval(() => {
      setElapsed(Date.now() - frameStartRef.current);
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, frameIdx]);

  // Advance frame after duration
  const advanceFrame = useCallback(() => {
    setFrameIdx((prev) => (prev + 1) % FRAME_DURATIONS.length);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(advanceFrame, FRAME_DURATIONS[frameIdx]);
    return () => clearTimeout(timer);
  }, [isInView, frameIdx, advanceFrame]);

  // Reset when leaving view
  useEffect(() => {
    if (!isInView) {
      setFrameIdx(0);
      setElapsed(0);
    }
  }, [isInView]);

  const frameComponents = [
    <Frame1 elapsed={elapsed} />,
    <Frame2 elapsed={elapsed} />,
    <Frame3 elapsed={elapsed} />,
    <Frame4 elapsed={elapsed} />,
    <Frame5 />,
  ];

  return (
    <div ref={ref} className="p-4">
      <div
        className="relative rounded-lg border border-border/30 bg-card/50 p-5 overflow-hidden"
        style={{ minHeight: 360 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={frameIdx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-full"
            style={{ minHeight: 320 }}
          >
            {frameComponents[frameIdx]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingWizardVisual;
