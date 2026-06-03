import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GlobalCTABanner = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-14 shadow-xl shadow-primary/20"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-3">
                Get Connected
              </p>
              <h2 className="text-heading-1 md:text-display-sm text-white mb-3 font-medium">
                Let's see what we can do for you
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                Join the businesses and homeworkers switching to Integra. It feels good when your connectivity just works.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild size="lg" className="bg-white text-primary font-semibold hover:bg-white/90">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Let's talk <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <a href="https://meetings.hubspot.com/chris-clapham" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTABanner;
