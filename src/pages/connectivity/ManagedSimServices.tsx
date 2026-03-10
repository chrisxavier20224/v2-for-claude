import { Link } from "react-router-dom";
import { ScanLine, Eye, Radio, PiggyBank, Building2, Shield, Thermometer, CreditCard, DoorOpen, Camera, Truck, Gauge, Lightbulb, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/managed-sim-hero.jpg";
import visibilityImg from "@/assets/connectivity/managed-sim-visibility.jpg";
import voiceImg from "@/assets/connectivity/managed-sim-voice.jpg";

const useCases = [
  { icon: Building2, title: "Lift Auto-Diallers", description: "Lift emergency lines connected across all four UK mobile networks — no landline required." },
  { icon: Shield, title: "Fire & Intruder Alarms", description: "Security panels, fire alarms, and monitoring systems connected via cellular with proactive alerting." },
  { icon: CreditCard, title: "EPOS & Payment Terminals", description: "Card machines and point-of-sale devices that stay online regardless of your primary broadband." },
  { icon: DoorOpen, title: "Door Entry & Access Control", description: "Gate systems, intercoms, barriers, and access panels connected without fixed-line dependencies." },
  { icon: Camera, title: "CCTV & Remote Monitoring", description: "IP cameras and NVRs at remote or temporary sites where wired connectivity isn't available." },
  { icon: Thermometer, title: "Environmental Sensors", description: "Temperature, humidity, air quality, and water leak sensors reporting data from anywhere on your estate." },
  { icon: Gauge, title: "Smart Meters & Utilities", description: "Energy meters, water meters, and utility monitoring devices feeding back real-time consumption data." },
  { icon: MonitorSmartphone, title: "Digital Signage & Kiosks", description: "Advertising displays, wayfinding screens, and self-service kiosks connected independently of local WiFi." },
  { icon: Truck, title: "Fleet & Asset Tracking", description: "GPS trackers on vehicles, trailers, plant equipment, and high-value assets reporting location in real time." },
  { icon: Lightbulb, title: "Smart Building Controls", description: "HVAC systems, lighting controls, BMS panels, and occupancy sensors connected for building automation." },
  { icon: Radio, title: "Vending & Dispensing", description: "Vending machines, EV chargers, and unattended retail devices reporting stock levels and transactions." },
  { icon: ScanLine, title: "Telecare & Health Devices", description: "Personal alarms, fall detectors, and remote health monitors for care homes and assisted living." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const ManagedSimServices = () => {
  return (
    <PageLayout hideCTA>
      <SEO
        title="Managed SIM Services — IoT & M2M Connectivity"
        description="Managed IoT SIMs for lifts, alarms, EPOS, CCTV, sensors, smart meters, fleet tracking, and more. Multinet SIM across all four UK operators. Estate-wide visibility, no upfront costs."
        keywords="managed SIM, IoT SIM, M2M SIM, lift line SIM, alarm SIM, EPOS SIM, CCTV SIM, smart meter SIM, fleet tracking, environmental sensor, Multinet SIM"
        url="/connectivity/managed-sim-services"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Managed SIM services for IoT devices" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <span className="mx-1">›</span> Managed SIM
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">IoT SIMs for every device on your estate</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Lifts, alarms, payment terminals, door entry — one managed SIM platform with visibility across your entire estate. No upfront costs, no fixed-line dependencies.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT IT CONNECTS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What It Connects</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              One SIM. Four networks. Every device.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Our Multinet SIM connects to all four UK mobile operators — O2, Vodafone, EE, and Three — so your devices stay online even if one network drops. Managed from a single platform with real-time monitoring.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {useCases.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-surface-dark-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-surface-dark-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ESTATE VISIBILITY */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Eye className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Estate Visibility</p>
            </div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">See every SIM, every device, in real time</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Consolidate your entire estate onto one platform. Every SIM, every device, every connection — visible in real time. Proactive monitoring means we spot issues before they become outages, so you're never guessing which lines are active and which have gone dark.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you manage a handful of devices or hundreds across multiple sites, the dashboard gives you a single view of your whole estate with alerts, usage data, and connection status.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={visibilityImg} alt="SIM estate visibility dashboard" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* HOW IT WORKS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={voiceImg} alt="Managed SIM deployment" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <PiggyBank className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">How It Works</p>
              </div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">No upfront costs. No fixed-line dependency.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-4">
                Delivered on a 3-year Device-as-a-Service model with no upfront hardware costs. Line rental and call rates are rolled into a single bill — no separate management, no hidden charges. Advanced replacement and in-term upgrades are included as standard.
              </p>
              <p className="text-surface-dark-muted leading-relaxed mb-6">
                IoT SIMs with pooled data options. Rapid deployment that's completely independent of the UK fibre network — we can get devices live in days, not weeks.
              </p>
              <div className="space-y-3">
                {["Multinet SIM across O2, Vodafone, EE & Three", "3-day line test monitoring on deployment", "Constant GSM connectivity monitoring", "Technical and on-site support included", "Pooled data options across your estate"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ScanLine className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-surface-dark-muted">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* RELATED CONTENT */}
      <RelatedContent
        stories={["wb-power-services"]}
        sectors={["construction-sites"]}
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
                  Got devices that need connecting?
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Tell us what you've got on your estate and we'll put together a managed SIM solution — custom priced, no obligation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90 shadow-lg">
                    <Link to="/contact">Get in Touch</Link>
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

export default ManagedSimServices;
