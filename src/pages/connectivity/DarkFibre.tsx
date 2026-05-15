import { Link } from "react-router-dom";
import { Cable, Building2, Zap, Lock, Infinity } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/leased-lines-hero.webp";
import fibreImg from "@/assets/connectivity/leased-lines-sdwan.jpg";

const useCases = [
  { icon: Building2, title: "Multi-Site Campus Connectivity", description: "Connect buildings across a business park, campus, or estate on your own Fibre. No recurring per-circuit charges — just the raw capacity you need." },
  { icon: Zap, title: "High-Bandwidth Operations", description: "Data centres, media production, and bandwidth-intensive operations where 10Gbps+ is the baseline. Dark Fibre gives you unlimited scalable capacity." },
  { icon: Lock, title: "Ultra-Secure Private Networks", description: "When regulatory or security requirements mean your data can't touch shared infrastructure. Financial services, defence, healthcare — dark Fibre is the gold standard." },
  { icon: Infinity, title: "Future-Proofing", description: "The Fibre itself doesn't go obsolete. As your bandwidth needs grow, upgrade the equipment on each end — the physical infrastructure stays the same for decades." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const DarkFibre = () => {
  return (
    <PageLayout>
      <SEO
        title="Dark Fibre"
        description="Unlit Fibre solutions for UK businesses. Dedicated Fibre pairs for campus connectivity, high-bandwidth operations, and secure networks."
        keywords="dark Fibre, dark fiber, unlit Fibre, dedicated Fibre, campus connectivity, private Fibre, enterprise Fibre, Fibre optic"
        url="/connectivity/dark-fibre"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Dark Fibre infrastructure" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <span className="mx-1">›</span> Dark Fibre
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Your Fibre. Your rules. No limits.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Dedicated, unlit Fibre pairs between your sites. You control the capacity, the protocol, and the equipment — we provide the physical infrastructure and keep it running.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Use Cases</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              When a leased line isn't enough.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Dark Fibre is the most capable connectivity option available. No contention, no bandwidth caps, no protocol restrictions. It's raw optical infrastructure — ready for whatever you put on it.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {useCases.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-base font-medium text-surface-dark-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-surface-dark-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* HOW IT WORKS */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cable className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">How It Works</p>
            </div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">We lay it. You light it.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Dark Fibre is the physical Fibre optic cable between two points — without any active electronics or bandwidth limitations imposed by us. You choose the transmission equipment, the protocol, and the speed. We handle the civil works, the Fibre installation, and the ongoing maintenance of the physical plant.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every dark Fibre deployment starts with a detailed desktop survey and route design. We'll assess duct availability, wayleave requirements, and any civils work needed. Pricing is bespoke — based on distance, route complexity, and Fibre count.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you're not sure whether dark Fibre is the right option for your requirements, talk to us. We'll give you an honest comparison against leased lines and managed internet so you can make an informed decision.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={fibreImg} alt="Dark Fibre installation" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* RELATED CONTENT */}
      <RelatedContent
        stories={["royle-farm"]}
        sectors={["fibre-enabled-buildings", "business-parks"]}
      />

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* CTA */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Need dedicated Fibre between your sites?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Dark Fibre is bespoke by nature. Tell us where your sites are and what you need to connect — we'll come back with a route design and pricing.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90 shadow-lg">
                    <Link to="/contact">Talk to Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/connectivity/leased-lines">Compare Leased Lines</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default DarkFibre;
