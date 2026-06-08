import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Audit & Tier",
    body: "Map every site. Classify standard vs outlier.",
  },
  {
    n: "02",
    title: "Standardise the Majority",
    body: "One spec, one SLA, one renewal rhythm.",
  },
  {
    n: "03",
    title: "Plan for the Outliers",
    body: "Pre-decided answers for rural, new-build, short-timeline sites.",
  },
  {
    n: "04",
    title: "Single-Pane Management",
    body: "One provider. One view. All data in one place. One number to call.",
  },
];

const EstatePlaybook = () => (
  <figure className="not-prose my-12">
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mb-5"
    >
      The Estate Playbook
    </motion.p>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-3 items-stretch"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
    >
      {steps.map((s, i) => (
        <motion.div
          key={s.n}
          className="relative flex"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
          }}
        >
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-primary to-primary/85 shadow-lg shadow-primary/20 p-5 md:p-6 text-white transition-transform duration-300 hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-semibold text-white tabular-nums leading-none mb-3">
              {s.n}
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white leading-snug mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-white/85 leading-relaxed">{s.body}</p>
          </div>
          {i < steps.length - 1 && (
            <>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, delay: 0.2 } },
                }}
                className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-white text-primary shadow ring-2 ring-primary/20"
              >
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </motion.div>
              <div className="md:hidden flex justify-center w-full mt-2 mb-0 text-primary">
                <ArrowDown className="h-4 w-4" />
              </div>
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  </figure>
);

export default EstatePlaybook;