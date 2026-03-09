import { Link } from "react-router-dom";
import { GitBranch, BarChart3, CheckCircle, XCircle, Cpu, ArrowRight, HelpCircle, Quote, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/connectivity/sdwan-hero.jpg";

const faqs = [
  {
    q: "Is SD-WAN the same as a VPN?",
    a: "No. SD-WAN is about intelligently routing traffic between multiple internet connections at your location. VPN is about encrypting traffic to a remote server. They're complementary (you can use VPN over SD-WAN) but separate.",
  },
  {
    q: "Do I need to hire an IT person to manage SD-WAN?",
    a: "No. Professional install handles setup. We monitor it remotely. You'll call us if something breaks, not an IT staff member.",
  },
  {
    q: "Will SD-WAN slow my internet (overhead)?",
    a: "No. Modern SD-WAN routers process traffic at line speed. Overhead is <5% (imperceptible). You gain reliability, not lose speed.",
  },
  {
    q: "Can I mix Starlink, 4G, and fibre in one SD-WAN setup?",
    a: "Yes. If you have all three available, they all bond/load-balance together. More pipes = more resilience.",
  },
  {
    q: "If I have Starlink + cellular, will I see double speed?",
    a: "Approximately. Starlink 100Mbps + 4G 100Mbps = ~180-190Mbps combined (slight overhead). For most uses, yes, you see the sum.",
  },
];

const scenarios = [
  {
    title: "Rural Farm",
    subtitle: "Starlink + 4G Cellular",
    description: "Farm has Starlink (customer buys it). We layer 4G cellular via SD-WAN. Load balancing. Both connections active.",
    result: "Starlink gives speed, cellular gives reliability. EPOS works even during rain. CCTV backups complete successfully.",
    cost: "£180/month",
  },
  {
    title: "Construction Site",
    subtitle: "Pure Cellular",
    description: "Temporary site, 6 months only. No Starlink (overkill). Just dual 4G bonded from different carriers.",
    result: "200Mbps download, works everywhere the site operates. Equipment redeploys to next site at no extra cost.",
    cost: "£135/month",
  },
  {
    title: "Small Office",
    subtitle: "Pure Cellular, Premium",
    description: "Multiple staff, heavy cloud use, VPN users doing design work. Needs guaranteed VPN speed. Bonding required.",
    result: "2 × 4G bonded (250Mbps), 5 staff VPN users all feel full speed. Latency consistent.",
    cost: "£400/month",
  },
];

const SDWanForSmallBusiness = () => {
  return (
    <PageLayout>
      <SEO
        title="SD-WAN for Small Business: Plain English Explanation (No Jargon)"
        description="SD-WAN decoded: what it is, why bonding beats load balancing, cellular vs enterprise, and when your small business actually needs it. Real examples."
        keywords="SD-WAN for small business, what is SD-WAN, cellular SD-WAN, load balancing vs bonding, SD-WAN explained, small business broadband"
        url="/sd-wan-for-small-business"
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="SD-WAN for small business" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-20 pt-40">
          <AnimatedSection>
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Resources
            </Link>
            <span className="block mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                Resources <ArrowRight className="h-3 w-3" /> Pillar Guide
              </span>
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl font-normal leading-tight">
              SD-WAN for Small Business: Plain English, No Jargon
            </h1>
            <p className="max-w-xl text-lg text-white/80 mb-10 font-normal leading-relaxed">
              SD-WAN stands for "Software-Defined Wide Area Network." Skip the jargon. This guide explains what it actually does, when you need it, and why your business might benefit.
            </p>
            <Button size="lg" asChild>
              <Link to="/availability-checker">Check Your Options</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Definition — 2-column image + text */}
      <Section size="large" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Definition</p>
                <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
                  SD-WAN is just smart internet
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">Standard network:</span> You have one internet connection. If the pipe is slow or broken, everything waits or fails.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">SD-WAN network:</span> You have multiple internet connections (4G, Starlink, fibre, whatever). Software in a router chooses the best pipe for each type of data. Video calls use the low-latency pipe. File uploads use the high-bandwidth pipe. If one pipe breaks, data switches automatically.
                  </p>
                  <p>
                    That's SD-WAN. Software decides which connection to use — not human config, not trial and error.
                  </p>
                </div>
              </div>
              <motion.div
                className="rounded-2xl overflow-hidden aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80"
                  alt="Network router and connectivity equipment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Farm example — full-bleed image section */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595429035839-c99c298ffdde?w=1920&q=80"
            alt="British rural landscape with farmland"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Example</p>
            <h2 className="text-2xl md:text-3xl text-white font-normal mb-10 leading-snug max-w-2xl">
              Real example: the farm with two networks
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-6">
                <h3 className="text-base font-medium text-white mb-3">The Setup</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-2">Starlink: 100Mbps down, 20Mbps up, 40ms latency — sometimes drops in rain</p>
                <p className="text-sm text-white/70 leading-relaxed">4G/5G cellular: 80Mbps down, 50Mbps up, 25ms latency — never drops</p>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-6">
                <h3 className="text-base font-medium text-red-400 mb-3">Without SD-WAN</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-2">Use Starlink: Fast downloads, but EPOS tills fail during rain</p>
                <p className="text-sm text-white/70 leading-relaxed">Use 4G/5G: More reliable, but slower uploads for CCTV backup</p>
                <p className="text-sm text-white/50 mt-2">You choose one. You compromise.</p>
              </div>
              <div className="rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 p-6">
                <h3 className="text-base font-medium text-primary mb-3">With SD-WAN Bonding</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-2">EPOS → 4G/5G (low latency, no rain issues)</p>
                <p className="text-sm text-white/70 leading-relaxed mb-2">CCTV → Starlink (higher upload) with 4G failover</p>
                <p className="text-sm text-white/70 leading-relaxed">If Starlink drops: everything routes through 4G. Zero downtime.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Load balancing vs bonding — 2-column with image */}
      <Section size="large" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Comparison</p>
              <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
                The two types of SD-WAN: Load Balancing vs Bonding
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" /> Load Balancing (Standard)
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Split traffic between connections. Connection 1 handles some traffic, Connection 2 handles other traffic. Like two lanes on a highway.</p>
                <p className="text-muted-foreground mb-4 leading-relaxed"><span className="text-foreground font-medium">Example:</span> Video call on Connection 1, file upload on Connection 2. Both happen simultaneously.</p>
                <p className="text-muted-foreground mb-4 leading-relaxed"><span className="text-foreground font-medium">Bottleneck:</span> A single large file uses one connection only. Even though Connection 2 is free, the file doesn't use it.</p>
                <p className="text-sm text-primary font-medium">Perfect for: Small business with varied workloads.</p>
              </div>

              <div className="rounded-2xl border-2 border-primary/30 bg-card p-8">
                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" /> Bonding (Premium)
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Fuse all connections into one logical pipe. A single file upload uses all available bandwidth from both connections simultaneously.</p>
                <p className="text-muted-foreground mb-4 leading-relaxed"><span className="text-foreground font-medium">Example:</span> Video call + file upload on bonded bandwidth (100+50Mbps = 150Mbps total).</p>
                <p className="text-muted-foreground mb-4 leading-relaxed"><span className="text-foreground font-medium">Advantage:</span> Single-stream performance is fully aggregated. One person uploading gets full bonded bandwidth.</p>
                <p className="text-sm text-primary font-medium">Perfect for: Heavy cloud use, VPN users, concentrated bandwidth needs.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Inline image break */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <AnimatedSection>
          <motion.div
            className="rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
              alt="Modern British office workspace"
              className="w-full h-auto object-cover aspect-[21/9]"
              loading="lazy"
            />
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Cellular vs Enterprise — reversed 2-col */}
      <Section size="large" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                className="rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80"
                  alt="Small business team in a British office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Context</p>
                <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
                  Cellular SD-WAN vs Enterprise SD-WAN
                </h2>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">Cellular SD-WAN (what we offer):</span> Bonding multiple 4G/5G connections. £135-400/month. 50-350Mbps. Installed in 14 days. For rural SMEs, small shops, temporary sites, offices without fibre.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Enterprise SD-WAN:</span> Bonding MPLS, broadband, cellular, fibre across multiple sites with enterprise routers. £1,000s/month. Weeks of planning and configuration. For multi-site enterprises, hospitals, retail chains.
                  </p>
                  <p>
                    They're philosophically similar but operationally different. When a salesperson says "SD-WAN," clarify: Cellular SD-WAN is for you. Enterprise SD-WAN is overkill.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Expert quote */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-24 md:py-36">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Quote className="h-10 w-10 text-primary mb-6" strokeWidth={1.5} />
            <blockquote className="text-2xl md:text-3xl font-medium text-surface-dark-foreground leading-snug mb-6">
              "Most small businesses don't need enterprise SD-WAN. They need two reliable connections that automatically fail over. That's cellular SD-WAN — simpler, cheaper, and installed in days."
            </blockquote>
            <p className="text-lg font-medium text-surface-dark-foreground">Integra Networks — Connectivity Team</p>
          </div>
        </AnimatedSection>
      </section>
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Do you need it */}
      <Section size="large" className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Assessment</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Do you actually need SD-WAN?
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-medium text-red-600 mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5" /> Don't Need It If
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>You have fibre and it works reliably</p>
                <p>You have one stable 4G connection</p>
                <p>Your property has leased line availability</p>
                <p>Downtime doesn't cost you money</p>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-green-500/30 bg-card p-6">
              <h3 className="text-base font-medium text-green-600 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Do Need It If
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Your connection is unreliable (Starlink alone, weak 4G)</p>
                <p>You need automatic failover (EPOS, CCTV, VoIP)</p>
                <p>You need better upload speeds than any single connection</p>
                <p>You want all connections active simultaneously</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-medium text-blue-600 mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5" /> Nice-to-Have If
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>You want maximum performance from your connectivity</p>
                <p>You're planning to scale and want future-proof architecture</p>
                <p>Remote staff need multiple simultaneous video calls</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Scenarios — full-bleed image */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="UK construction site with cranes"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Examples</p>
            <h2 className="text-2xl md:text-3xl text-white font-normal mb-10 leading-snug max-w-2xl">
              SD-WAN in practice: three real scenarios
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid md:grid-cols-3 gap-4">
              {scenarios.map((scenario, i) => (
                <div key={i} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{scenario.subtitle}</p>
                  <h3 className="text-lg font-medium text-white mb-3">{scenario.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">{scenario.description}</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm text-white/80 leading-relaxed mb-2">{scenario.result}</p>
                    <p className="text-primary font-medium text-sm">{scenario.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical explanation */}
      <Section size="large" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Technical</p>
                <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
                  Why bonding works (the technical bit, still plain English)
                </h2>
                <div className="space-y-5">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-sm font-medium text-foreground mb-2">How a Standard Router Works</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Router has two SIM cards. Software creates a routing table: one destination uses one connection. Speeds max at whichever is slower.</p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-sm font-medium text-foreground mb-2">How Bonding Works</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Router creates a virtual tunnel using both connections. Data is split into chunks: Chunk 1 → Connection A, Chunk 2 → Connection B. Reassembled at destination. Speeds approach sum of both.</p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-sm font-medium text-foreground mb-2">Transparent Failover</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">If Connection A drops, remaining chunks route through Connection B. Application never knew one connection failed. Critical for EPOS, VoIP, VPN.</p>
                  </div>
                </div>
              </div>
              <motion.div
                className="rounded-2xl overflow-hidden aspect-[3/4] lg:sticky lg:top-24"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
                  alt="Server room and network infrastructure"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FAQs */}
      <Section className="bg-surface-dark">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQs</p>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground font-normal">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-surface-dark-foreground font-medium hover:no-underline py-5">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-surface-dark-muted leading-relaxed pb-5 pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* CTA */}
      <Section size="large" className="bg-background">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Ready to assess your connectivity needs?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team can evaluate your current situation and recommend whether SD-WAN makes sense for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/availability-checker">Assess Your Needs</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Related case studies */}
      <RelatedCaseStudies currentPath="/sd-wan-for-small-business" />
    </PageLayout>
  );
};

export default SDWanForSmallBusiness;
