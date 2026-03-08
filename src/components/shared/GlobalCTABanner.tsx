import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const GlobalCTABanner = () => {
  return (
    <section className="bg-surface-dark py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14"
        >
          {/* Decorative shape */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-white/5" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Let's see what we can do for you
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                Join the businesses switching to Integra. It feels good when your connectivity just works.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-surface-dark font-semibold h-12 px-8 text-base rounded-full hover:bg-white/90 transition-colors shadow-lg"
              >
                Let's talk <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTABanner;
