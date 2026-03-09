import { Link } from "react-router-dom";
import { Network, Cpu, BarChart3, GitBranch, CheckCircle, XCircle, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
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
    title: "Scenario 1: Rural Farm (Starlink + 4G Cellular)",
    description: "Farm has Starlink (customer buys it). We layer 4G cellular via SD-WAN. Load balancing. Both connections active.",
    result: "Starlink gives speed, cellular gives reliability. EPOS works even during rain. CCTV backups complete successfully. Cost £180/month (Starlink £99 + cellular £80).",
  },
  {
    title: "Scenario 2: Construction Site (Pure Cellular)",
    description: "Temporary site, 6 months only. No Starlink (overkill). Just dual 4G bonded from different carriers. Load balancing.",
    result: "200Mbps download, works everywhere the site operates. We redeploy equipment to your next site at no extra cost. Cost £135/month.",
  },
  {
    title: "Scenario 3: Small Office (Pure Cellular, Premium)",
    description: "Multiple staff, heavy cloud use, VPN users doing design work. Needs guaranteed VPN speed. Bonding required (single-stream performance).",
    result: "2 × 4G bonded (250Mbps), 5 staff VPN users all feel full speed. Latency consistent. Cost £400/month (premium for bonding).",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } } };

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
      <section className="relative min-h-[75vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="SD-WAN for small business" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white mb-6">
              Resources <ArrowRight className="h-3 w-3" /> Pillar Guide
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-normal">
              SD-WAN for Small Business: Plain English Explanation (No Jargon)
            </h1>
            <p className="max-w-2xl text-lg text-white/80 mb-8 font-normal">
              SD-WAN stands for "Software-Defined Wide Area Network." Skip the jargon. This guide explains what it actually does, when you need it, and why your business might benefit.
            </p>
            <Button size="lg" asChild>
              <Link to="/availability-checker">Check Your Options</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* SD-WAN is just smart internet */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Definition</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              SD-WAN is just smart internet
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                <strong>Standard network:</strong> You have one internet connection. A computer wants to send data. It goes through that one pipe. If the pipe is slow or broken, everything waits or fails.
              </p>
              <p>
                <strong>SD-WAN network:</strong> You have multiple internet connections (one from 4G, one from Starlink, one from fibre, whatever). A computer wants to send data. Software in a router chooses the best pipe for that specific data. Video calls use low-latency pipe. File uploads use high-bandwidth pipe. If one pipe breaks, data automatically switches to another.
              </p>
              <p>
                That's SD-WAN. Software decides which connection to use, not human config, not trial and error.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Farm example */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Example</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              Real example: the farm with two networks
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-4">The Setup</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Starlink connection: 100Mbps download, 20Mbps upload, 40ms latency, sometimes drops during rain</li>
                  <li>4G/5G cellular connection: 80Mbps download, 50Mbps upload, 25ms latency, never drops</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-4">Without SD-WAN</h3>
                <p className="text-muted-foreground mb-3">You choose one:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Use Starlink: Fast for downloads, but EPOS tills fail during rain</li>
                  <li>Use 4G/5G: More reliable, but slower uploads for your CCTV backup</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-4">With SD-WAN Bonding</h3>
                <p className="text-muted-foreground mb-3">Both work together:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Real-time traffic (EPOS, video calls): prefer 4G/5G (lower latency, no rain issues)</li>
                  <li>Upload-heavy traffic (CCTV, backups): prefer Starlink (higher upload speed) unless Starlink is raining, then switch to 4G/5G</li>
                  <li>Regular browsing: split between both (uses full bandwidth of both pipes simultaneously)</li>
                  <li>If Starlink drops: EPOS transactions automatically route through 4G/5G. Zero downtime.</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Load balancing vs bonding */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Comparison</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              The two types of SD-WAN: Load Balancing vs Bonding
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" /> Load Balancing (Standard)
              </h3>
              <p className="text-muted-foreground mb-4">Split traffic between connections. Connection 1 handles some traffic, Connection 2 handles other traffic. Like two lanes on a highway — one lane for each connection.</p>
              <p className="text-muted-foreground mb-4"><strong>Example:</strong> Video call on Connection 1, file upload on Connection 2. Both happen simultaneously.</p>
              <p className="text-muted-foreground mb-4"><strong>Bottleneck:</strong> A single large file upload would use one connection only. So you'd max out that connection's speed (50Mbps). Even though Connection 1 has 100Mbps available, the file doesn't use it because it's a single "stream."</p>
              <p className="text-sm text-primary font-medium">Perfect for: Small business with varied workloads (person A does email, person B does video, person C uploads).</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" /> Bonding (Premium)
              </h3>
              <p className="text-muted-foreground mb-4">Fuse all connections into one logical pipe. A single file upload uses all available bandwidth from both connections simultaneously.</p>
              <p className="text-muted-foreground mb-4"><strong>Example:</strong> Video call + file upload on the same connection. Both use bonded bandwidth (100+50Mbps = 150Mbps total).</p>
              <p className="text-muted-foreground mb-4"><strong>Advantage:</strong> Single-stream performance is fully aggregated. One person uploading a file gets full bonded bandwidth (150Mbps). VPN users get full speed.</p>
              <p className="text-sm text-primary font-medium">Perfect for: Heavy cloud use, VPN users, concentrated bandwidth needs.</p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Cellular vs Enterprise */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Context</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              Cellular SD-WAN vs Enterprise SD-WAN (They're Different Things)
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-4">Cellular SD-WAN (What We Offer Small Business)</h3>
                <p className="text-muted-foreground mb-3">Bonding multiple 4G/5G cellular connections from different carriers or different towers.</p>
                <ul className="space-y-2 text-muted-foreground mb-4 text-sm">
                  <li><strong>Cost:</strong> £135-400/month for service + equipment</li>
                  <li><strong>Speed:</strong> 50-350Mbps depending on how many SIMs bonded</li>
                  <li><strong>Setup:</strong> 14 days (desktop survey + install)</li>
                  <li><strong>Support:</strong> Professional team, SLA available</li>
                  <li><strong>Use case:</strong> Rural SMEs, small shops, temporary sites, offices without fibre</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-4">Enterprise SD-WAN (What Large Corporations Use)</h3>
                <p className="text-muted-foreground mb-3">Bonding multiple types of connections (MPLS, broadband, cellular, fibre) across multiple sites using enterprise routers and centralised management.</p>
                <ul className="space-y-2 text-muted-foreground mb-4 text-sm">
                  <li><strong>Cost:</strong> £1,000s/month for service + equipment + management</li>
                  <li><strong>Speed:</strong> Can aggregate gigabit connections</li>
                  <li><strong>Setup:</strong> Weeks of planning, configuration, training</li>
                  <li><strong>Support:</strong> 24/7 network NOC, dedicated support team</li>
                  <li><strong>Use case:</strong> Multi-site enterprises, financial institutions, hospitals, retail chains</li>
                </ul>
              </div>

              <p className="text-muted-foreground text-center mt-6">
                <strong>They're philosophically similar</strong> (software-defined, intelligent routing) but operationally completely different. When a salesperson mentions "SD-WAN," clarify: Cellular SD-WAN is for you. Enterprise SD-WAN is overkill and expensive.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Do you need it */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Assessment</p>
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
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>You have fibre and it works (single, reliable connection, good enough)</li>
                <li>You have one 4G connection that's stable</li>
                <li>Your property has leased line availability</li>
                <li>Downtime doesn't cost you money</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-medium text-green-600 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Do Need It If
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Your property only has one connection and it's unreliable (Starlink alone, weak 4G)</li>
                <li>You need automatic failover (EPOS, CCTV, VoIP can't tolerate outages)</li>
                <li>You need better upload speeds than any single connection offers</li>
                <li>You want all connections active simultaneously (maximum bandwidth usage)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-medium text-blue-600 mb-4 flex items-center gap-2">
                <Cpu className="h-5 w-5" /> Nice-to-Have If
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>You want to squeeze every bit of performance from your connectivity</li>
                <li>You're planning to scale and want future-proof architecture</li>
                <li>Your staff are remote (multiple simultaneous video calls) and current connection lags</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Scenarios */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Examples</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              SD-WAN in practice: three real scenarios
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-6 max-w-5xl mx-auto">
            {scenarios.map((scenario, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-3">{scenario.title}</h3>
                <p className="text-muted-foreground mb-4">{scenario.description}</p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground"><strong>Result:</strong> {scenario.result}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Technical explanation */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Technical</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              Why bonding works (the technical bit, still plain English)
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-3">How a Standard Router Works</h3>
                <p className="text-muted-foreground">Router has two SIM cards (or connections). Software creates a routing table: "If destination is 192.168.1.100, use Connection A. If destination is external, use Connection B."</p>
                <p className="text-muted-foreground mt-3">Result: One destination uses one connection. No overlap. Speeds max at whichever connection is slower.</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-3">How Bonding Works</h3>
                <p className="text-muted-foreground">Router creates a virtual tunnel using both connections. Data is split at the application layer. Large files are chopped into chunks: Chunk 1→Connection A, Chunk 2→Connection B, Chunk 3→Connection A, etc. Chunks arrive out of order, get reassembled at the destination.</p>
                <p className="text-muted-foreground mt-3">Result: Single data stream uses both connections simultaneously. Speeds approach sum of both (some overhead).</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-3">Transparent Failover</h3>
                <p className="text-muted-foreground">If Connection A drops, remaining chunks go through Connection B. Destination reassembles successfully. Application never knew one connection failed.</p>
                <p className="text-muted-foreground mt-3">This is why bonding is powerful for critical applications (EPOS, VoIP, VPN). One connection failing doesn't break the transaction.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FAQs */}
      <Section className="bg-surface-dark">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">FAQs</p>
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
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Ready to assess your connectivity needs?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
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
    </PageLayout>
  );
};

export default SDWanForSmallBusiness;
