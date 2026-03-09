import { Link } from "react-router-dom";
import { Shield, Lock, Eye, AlertTriangle, Fingerprint, Globe, Server, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/leased-lines-sla.jpg";
import monitorImg from "@/assets/connectivity/managed-sim-visibility.jpg";

const features = [
  { icon: Shield, title: "Next-Gen Firewall", description: "Enterprise-grade threat protection with deep packet inspection, intrusion prevention, and application-level filtering — managed entirely by us." },
  { icon: Lock, title: "Content & Web Filtering", description: "Control what your team can access. Block malicious domains, restrict categories, and enforce acceptable use policies across every site." },
  { icon: Eye, title: "Real-Time Threat Monitoring", description: "24/7 visibility into your network traffic. We monitor for anomalies, flag suspicious activity, and act before threats become breaches." },
  { icon: AlertTriangle, title: "Ransomware & Malware Defence", description: "Automated blocking of known threats, zero-day protection, and sandboxing of suspicious files before they reach your network." },
  { icon: Fingerprint, title: "VPN & Secure Remote Access", description: "Site-to-site and remote worker VPN tunnels with enterprise encryption. Your team connects securely from anywhere without exposing your network." },
  { icon: Globe, title: "DNS Security", description: "Block command-and-control callbacks, phishing domains, and data exfiltration at the DNS layer — before connections are even established." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const ManagedFirewall = () => {
  return (
    <PageLayout>
      <SEO
        title="Managed Firewall & Cyber Security — Business Network Protection"
        description="Managed firewall and cyber security for UK businesses. Next-gen threat protection, content filtering, VPN, real-time monitoring. Bundled with your connectivity or standalone."
        keywords="managed firewall, cyber security, business firewall, network security, content filtering, VPN, threat protection, ransomware defence"
        url="/connectivity/managed-firewall"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Managed firewall and network security" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Infrastructure <span className="mx-1">›</span> Managed Firewall
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Your network is only as strong as the wall around it.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Enterprise-grade firewall protection, fully managed. We handle the security so you can focus on running your business — not patching vulnerabilities.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What's Included</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Security that works while you sleep.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Every managed firewall comes with next-generation threat protection, real-time monitoring, and a dedicated security team behind it. No bolt-on extras — everything below is included as standard.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {features.map((item) => (
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

      {/* BUNDLED OR STANDALONE */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Server className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Flexible Deployment</p>
            </div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Bundle it with your connection, or bolt it on.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Adding a managed firewall to your Integra SD-WAN, leased line, or Bridge connection is the smartest move — one provider, one bill, one throat to choke when something goes wrong. But if you already have connectivity sorted and just need the security layer, we'll deploy it standalone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hardware is included on a managed service basis with no upfront costs. We handle firmware updates, rule changes, and security patches remotely. If you need a change, it's a phone call — not a ticket queue.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={monitorImg} alt="Managed firewall monitoring dashboard" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* WHY IT MATTERS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "43%", label: "of cyber attacks target SMEs" },
                  { value: "£4.5k", label: "average cost of a breach for small businesses" },
                  { value: "60%", label: "of small firms close within 6 months of an attack" },
                  { value: "24/7", label: "monitoring included as standard" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm">
                    <div className="text-2xl font-semibold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-surface-dark-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why It Matters</p>
              </div>
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">Most businesses don't think about security until it's too late.</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-4">
                Cyber attacks aren't just a big-business problem. SMEs are the primary target because they're often the least protected. A managed firewall is the single most effective step you can take to protect your network, your data, and your reputation.
              </p>
              <p className="text-surface-dark-muted leading-relaxed">
                We don't do fear-mongering. We do practical, effective security that sits between your network and the internet, filtering everything that comes in and goes out. It's not optional any more — it's infrastructure.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* RELATED CONTENT */}
      <RelatedContent
        stories={["wb-power-services"]}
        sectors={["business-parks"]}
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
                  Secure your network today.
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Tell us about your setup and we'll recommend the right level of protection — no obligation, no scare tactics.
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

export default ManagedFirewall;
