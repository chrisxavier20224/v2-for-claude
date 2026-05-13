import { Link } from "react-router-dom";
import { Satellite, TrendingDown, Shield, Zap, CheckCircle, XCircle, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/connectivity/starlink-hero.webp";

const useCases = [
  {
    icon: CheckCircle,
    title: "Where Starlink Works",
    items: [
      "Home office (one person, light video calls, email, browsing, streaming)",
      "Light commercial (small shop, salon, office with minimal video conferencing, no EPOS)",
      "Content creators (uploading large files occasionally, up to 250Mbps download is great)",
      "Remote family homes (holiday rentals, multi-property owners, retreats)",
      "Backup connection (have a primary leased line? Starlink as emergency failover is smart)",
    ],
  },
  {
    icon: XCircle,
    title: "Where Starlink Fails",
    items: [
      "Business-critical EPOS (latency spikes during rain cause transaction timeouts)",
      "Live video conferencing at scale (three simultaneous calls is laggy, freezes visible)",
      "Remote CCTV with live monitoring (1-2 second lag is uncomfortable for security)",
      "Automated cloud backups (weather-induced disconnects interrupt uploads, forcing resumes)",
      "VoIP (30-60ms latency makes calls sound hollow, 200ms round-trip fatigues users)",
      "Multi-site synchronisation (variable latency makes network management unreliable)",
    ],
  },
];

const weaknesses = [
  {
    title: "Latency Variance",
    description: "Starlink advertises 25-60ms latency. In practice, during rain or orbital changes, latency spikes to 100ms+. Cellular keeps latency consistent: 20-30ms always. No variance.",
  },
  {
    title: "No SLA",
    description: "Starlink is consumer product. If it goes down, no support line, no technician, no compensation. Business broadband includes SLA: '99.5% uptime or we credit your bill.' Starlink: 'should work, can't promise.'",
  },
  {
    title: "Weather Dependency",
    description: "Heavy rain, snow on dish, or ice reduces Starlink signal. 15-minute UK rainstorm might reduce speeds by 50% or cause brief disconnects. Fine for browsing. For EPOS, it's a failed transaction.",
  },
  {
    title: "Dish Placement Constraints",
    description: "Starlink needs clear sky 120 degrees wide. No trees blocking, no roof overhangs, south-facing (in UK). Some properties have architectural constraints that make Starlink impossible.",
  },
  {
    title: "Data Caps Creeping In",
    description: "Cheaper plans (£49/month) have soft data caps. Use over 1TB/month and you're deprioritised during peak hours. Business use easily exceeds 1TB/month. You'll end up on higher tier (£99/month) or hit prioritisation limits.",
  },
  {
    title: "No Failover",
    description: "If Starlink has outage, you're offline. No backup. No secondary connection. For a shop, that's lost sales for hours. For a farm with CCTV-monitored assets, that's vulnerability.",
  },
];

const faqs = [
  {
    q: "Is Starlink good enough for my small shop (EPOS, video calls, no cloud)?",
    a: "For good weather months, yes. For rainy months, maybe not. If you're okay with 1-2 failed transactions per week during bad weather, Starlink alone works. If not, add cellular.",
  },
  {
    q: "What if I add Starlink but upgrade to cellular only later?",
    a: "You can. Keep Starlink as failover, primary traffic on cellular. Or disable Starlink entirely once cellular is rock-solid. No penalty.",
  },
  {
    q: "Is Starlink more affordable than fibre if fibre were available?",
    a: "Starlink (£99/month) vs fibre (£40-80/month) — fibre is cheaper monthly. But fibre install takes 8-12 weeks; Starlink takes 1 day. If you need connectivity now, Starlink is the affordable bridge.",
  },
  {
    q: "Can I use Starlink in a moving vehicle (caravan, boat)?",
    a: "Yes. Starlink offers mobile (RV) service. Stationary Starlink on a boat works. Just need clear sky.",
  },
  {
    q: "Will Starlink improve its latency?",
    a: "Yes, slightly. Newer Starlink satellites are lower-orbit (reduced latency from 25-60ms to 20-50ms potentially). But satellite physics means latency variance will always exist. Cellular's consistency will remain superior.",
  },
  {
    q: "Can I cancel Starlink anytime?",
    a: "Yes. No contract, no penalty. Monthly billing.",
  },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } } };

const relatedServices = [
  {
    name: "Starlink Installation",
    description: "Professional setup and optimisation of satellite broadband.",
    url: "/connectivity/starlink-installation",
  },
  {
    name: "Integra SD-WAN",
    description: "Add cellular bonding for improved reliability and failover.",
    url: "/connectivity/integra-sd-wan",
  },
  {
    name: "4G/5G Backup",
    description: "Secondary connectivity for business continuity.",
    url: "/connectivity/cellular-backup",
  },
  {
    name: "Pricing",
    description: "See all our pricing options for satellite and hybrid solutions.",
    url: "/pricing",
  },
];

const StarlinkForBusiness = () => {
  return (
    <PageLayout>
      <SEO
        title="Starlink for Business"
        description="Starlink assessment. Latency, weather, uploads, SLA, failover. When satellite works for you."
        keywords="Starlink for business, satellite broadband business, Starlink latency, Starlink reliability, Starlink vs cellular, Starlink EPOS, Starlink VoIP"
        url="/starlink-for-business"
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Starlink for business evaluation" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white mb-6">
              Resources <ArrowRight className="h-3 w-3" /> Pillar Guide
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-normal">
              Starlink for Business: Honest Assessment of Satellite Broadband Limitations
            </h1>
            <p className="max-w-2xl text-lg text-white/80 mb-8 font-normal">
              Starlink is fast and available. But business-grade connectivity and fast connectivity are different things. This guide is honest about both.
            </p>
            <Button size="lg" asChild>
              <Link to="/check">Check Your Options</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Intro */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Context</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Starlink changed the game (but not completely)
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                Two years ago, rural businesses had three choices: wait for fibre, use unreliable mobile hotspot, or pay £1,000+ per month for a leased line. Starlink changed that. For £99/month, you get up to 250Mbps from space, installed yourself, available almost everywhere.
              </p>
              <p>
                That's genuinely transformative. Starlink is real, it works, and it's legitimate for many use cases. But business-grade connectivity and fast connectivity are different things. This article is honest about both.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Use cases */}
      {useCases.map((useCase, index) => (
        <div key={useCase.title}>
          <Section className={index % 2 === 0 ? "bg-secondary" : "bg-background"}>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <useCase.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
                    {useCase.title}
                  </h2>
                </div>
                <ul className="space-y-4 ml-0">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className={`h-2 w-2 rounded-full mt-2 flex-shrink-0 ${index === 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </Section>
          {index < useCases.length - 1 && (
            <GradientBand
              fromColor={index % 2 === 0 ? "hsl(210 40% 96%)" : "hsl(0 0% 100%)"}
              toColor={index % 2 === 0 ? "hsl(0 0% 100%)" : "hsl(210 40% 96%)"}
            />
          )}
        </div>
      ))}

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Weaknesses */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">The Reality</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              The Starlink weaknesses (all real, all fixable with alternatives)
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {weaknesses.map((weakness, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground mb-3">{weakness.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{weakness.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Latency explanation */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Technical</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              The latency problem explained (why 30ms vs 60ms matters)
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "EPOS Transaction",
                  steps: [
                    "Customer card inserted (0ms)",
                    "Terminal sends authorisation request to payment processor (30ms on Starlink)",
                    "Processor responds (60ms total round-trip)",
                    "Terminal shows 'Approved' or 'Declined'",
                  ],
                  detail: "If latency spikes to 100ms, round-trip is 200ms. Some processors timeout after 150ms. Card declined. Customer frustrated. On cellular (20-30ms latency), round-trip is 40-60ms. Always within timeout windows. Always approved. Zero friction.",
                },
                {
                  title: "Video Call",
                  steps: [
                    "You ask a question (0ms)",
                    "Other person hears it after 30ms (Starlink) or 20ms (cellular)",
                    "They respond immediately",
                    "You hear response after 60ms (Starlink) or 40ms (cellular)",
                  ],
                  detail: "Total time before you hear an answer: 60-80ms (cellular) vs 120-150ms (Starlink). In back-to-back Q&A, that 60ms difference compounds. By 10 minutes, Starlink feels noticeably slower even though both are technically acceptable.",
                },
                {
                  title: "File Uploads",
                  steps: [
                    "Start uploading 1GB file at 15Mbps upload (Starlink). Expected time: 9 minutes",
                    "Rain hits mid-upload. Starlink disconnects. Upload stalls. Resume.",
                    "Now at 5 minutes elapsed, 500MB uploaded, disconnected. Resume again",
                    "Total time: 20-30 minutes vs 9 minutes",
                  ],
                  detail: "Cellular's redundancy (bonded multiple networks) means if one cell tower gets congested, traffic switches to another. No disconnects. 9 minutes. Done.",
                },
              ].map((example, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-medium text-foreground mb-4">{example.title}</h3>
                  <ol className="space-y-2 mb-4">
                    {example.steps.map((step, j) => (
                      <li key={j} className="text-muted-foreground text-sm">
                        <span className="font-semibold">{j + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                  <p className="text-muted-foreground text-sm italic border-t border-border pt-4">{example.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Hybrid approach */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Strategy</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              When Starlink + Cellular (SD-WAN) becomes the right answer
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                You're not choosing between "Starlink or cellular." You're asking: "Can I use Starlink as the primary and add cellular as failover?"
              </p>
              <p>
                Starlink gives you base speed (up to 250Mbps). Cellular adds: Lower latency (preferred for EPOS, VoIP, conferencing), Failover (if Starlink drops, stay online), Upload boost (Starlink 10-15Mbps up + cellular 40-80Mbps up = smarter routing), Weather resilience (cellular unaffected by rain at tower level).
              </p>
              <p>
                <strong>Cost:</strong> Starlink £99/month + cellular layer £80/month = £179/month for Starlink SD-WAN.
              </p>
              <p>
                That's more expensive than Starlink alone (£80 extra per month = £960/year). But if Starlink alone costs you one EPOS outage per month (£200-500 in lost sales + reputation damage), the failover pays for itself.
              </p>
              <p>
                <strong>The business case:</strong> If your business loses &gt;£100 per hour of downtime, add the cellular layer. The insurance is worth it.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Upgrade path */}
      <Section className="bg-secondary">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Roadmap</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-8">
              The upgrade path: Starlink → Starlink + Cellular → Fibre
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Rung 1 — Starlink (Month 1-6)",
                  description: "Immediate relief. You're online. Business runs. Cost £99/month.",
                },
                {
                  title: "Rung 2 — Starlink + Cellular (Month 6-24)",
                  description: "You've realised EPOS fails during rain. You add cellular. Cost rises to £179/month, but reliability jumps to 99.9%.",
                },
                {
                  title: "Rung 3 — Fibre arrives (Month 24+)",
                  description: "Fibre is now available in your area. You evaluate: Fibre cost vs Starlink+cellular reliability. You might keep Starlink+cellular as backup, or upgrade to fibre primary + cellular backup.",
                },
              ].map((rung, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-medium text-foreground mb-2">{rung.title}</h3>
                  <p className="text-muted-foreground">{rung.description}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8">Each step makes sense for its time. You're not locked in. All hardware is included and fully maintained, so if anything breaks, we send an engineer — at no cost to you.</p>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Temporary sites */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Special Case</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Starlink for temporary sites (construction)
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
              <p>
                One exception where Starlink shines: temporary sites that move every few weeks.
              </p>
              <p>
                A construction site needs connectivity for 2-3 months. Installing a proper cellular SD-WAN takes 14 days setup (fine) but adds recurring cost for 3 months (£405 total) and then decommission. Starlink: Set up in a day, £99/month, pack it up and move.
              </p>
              <p>
                For temporary sites under 6 months, Starlink makes sense. For permanent premises, cellular or hybrid is better.
              </p>
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
              Ready to find the right connectivity solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team can assess your property, identify what's available, and recommend the best option for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/check">Check Your Options</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      <Section className="bg-secondary">
        <RelatedServices services={relatedServices} heading="Related Solutions" subheading="Find the right connectivity for your business." />
      </Section>
    </PageLayout>
  );
};

export default StarlinkForBusiness;
