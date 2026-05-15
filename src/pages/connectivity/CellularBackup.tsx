import { Link } from "react-router-dom";
import { Signal, ShieldCheck, Zap, Timer, Wifi, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/sdwan-hero.jpg";
import failoverImg from "@/assets/connectivity/sdwan-stable.jpg";

const benefits = [
  { icon: Timer, title: "Sub-Second Failover", description: "When your primary connection drops, traffic switches to 4G/5G in under a second. No manual intervention, no downtime — your team won't even notice." },
  { icon: Signal, title: "Bonded 4G & 5G", description: "Not just one backup SIM — we bond multiple 4G and 5G connections for genuine throughput. Enough bandwidth to keep your business running, not just limping along." },
  { icon: ShieldCheck, title: "Always-On Monitoring", description: "We monitor your backup connection 24/7, not just when it activates. If a SIM loses signal or a mast goes down, we know before you do and route around it." },
  { icon: RefreshCw, title: "Automatic Recovery", description: "When your primary connection comes back, traffic returns seamlessly. No reboots, no reconfiguration — the system handles it end to end." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const CellularBackup = () => {
  return (
    <PageLayout>
      <SEO
        title="4G/5G Backup & Failover"
        description="Automatic cellular failover for broadband and leased lines. Sub-second switchover, bonded connectivity, always-on monitoring."
        keywords="4G backup, 5G failover, business broadband backup, cellular failover, automatic failover, connectivity insurance, broadband resilience"
        url="/connectivity/cellular-backup"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="4G 5G cellular backup for business" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <span className="mx-1">›</span> 4G/5G Backup
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Your broadband goes down. Your business doesn't.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Automatic 4G/5G failover that kicks in the moment your primary connection drops. No downtime, no lost sales, no panicked phone calls to your provider.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">How It Works</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Connectivity insurance for businesses that can't afford to go offline.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Whether you're on a leased line, SoGEA, or FTTP — adding a managed cellular backup means you're covered when the unexpected happens. Roadworks, exchange faults, cable strikes — none of it takes you down.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {benefits.map((item) => (
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

      {/* WHO IT'S FOR */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Who It's For</p>
            </div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Already got Fibre? Good. Now protect it.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This isn't a replacement for your primary connection — it's the safety net underneath it. If you're running EPOS systems, VoIP phones, cloud applications, or anything that stops working when the internet goes down, cellular backup pays for itself the first time it activates.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We deploy a managed router alongside your existing infrastructure. It monitors your primary WAN link continuously and bonds multiple 4G/5G connections ready to take over instantly. No changes to your LAN, no disruption to deploy.
            </p>
            <div className="space-y-3">
              {["Retail & hospitality with card payment dependency", "Offices running cloud-first with VoIP and SaaS", "Warehouses and logistics with real-time inventory systems", "Multi-site businesses where one outage ripples everywhere"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Wifi className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={failoverImg} alt="Cellular failover hardware" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* RELATED CONTENT */}
      <RelatedContent
        stories={["wb-power-services"]}
        sectors={["rural-smes"]}
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
                  How much does downtime cost your business?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Tell us about your setup and we'll spec a cellular backup solution. Typically deployed within days — no disruption to your existing connection.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90 shadow-lg">
                    <Link to="/contact">Talk to Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/pricing">View Pricing</Link>
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

export default CellularBackup;
