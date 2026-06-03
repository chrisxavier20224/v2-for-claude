import { Link } from "react-router-dom";
import { AlertTriangle, Phone, Wifi, Shield, HelpCircle, ArrowRight } from "lucide-react";
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

import heroImg from "@/assets/connectivity/managed-sim-hero.webp";

const challenges = [
  {
    icon: Wifi,
    title: "Addressing Connectivity Challenges",
    description:
      "If you're using a copper ADSL line for services like voice, internet, lift services, or CCTV, you'll need to transition. We offer SD-WAN, Managed SIM, and GPON solutions tailored to your current and future needs.",
    cta: { label: "Integra SD-WAN", path: "/" },
  },
  {
    icon: AlertTriangle,
    title: "Lift Line Solutions",
    description:
      "The digital shift affects all fixed-line technologies, including lift auto-diallers. With the PSTN network ending, it's time to upgrade to VoIP lines and GSM units.",
    cta: { label: "Managed SIM Services", path: "/managed-sim-services" },
  },
  {
    icon: Shield,
    title: "Door Entry & CCTV Considerations",
    description:
      "For critical applications like door entry and CCTV, it's crucial to plan ahead to avoid service disruptions during the migration.",
  },
  {
    icon: Phone,
    title: "Transitioning from PSTN / ISDN2",
    description:
      "If your voice services are running on PSTN ISDN2, it's time to consider alternatives. We can help you transition smoothly to modern, reliable, and efficient communication solutions.",
    cta: { label: "Unified Communications", path: "/unified-communications" },
  },
];

const whyIntegra = [
  { title: "Connectivity Versatility", description: "From Fibre Leased Lines to 4G, 5G, FTTP, Microwave, and Satellite Connectivity, we offer a range of solutions." },
  { title: "Network Migration Specialists", description: "We're experts in upgrading network infrastructure, ensuring a seamless transition for our customers." },
  { title: "Fast Deployment", description: "We control all aspects of the process, enabling us to deliver solutions quickly, even in emergencies." },
];

const faqs = [
  { q: "What is the PSTN switch-off?", a: "The Public Switched Telephone Network (PSTN) switch-off is a planned discontinuation of the traditional, copper-based telephone network by BT Openreach. This means everyone, including businesses, currently using PSTN-based services will need to move to another service." },
  { q: "What are the key dates for the PSTN switch-off?", a: "BT Openreach announced its intention to switch off the PSTN by January 2027. From December 2023, you can't purchase any new ISDN or PSTN-based services, with many locations affected by a stop-sell much sooner." },
  { q: "What is VoIP?", a: "VoIP uses a company's existing internet connection to transmit voice calls. It requires less hardware than legacy systems and can be used on a variety of devices — from desk phones to mobiles, tablets, and computers." },
  { q: "What about special services like security alarms and payment terminals?", a: "The migration also impacts services like security and fire alarms, telecare devices, retail payment terminals, and equipment for monitoring and controlling networks. These rely on PSTN features not fully replicated in VoIP platforms." },
  { q: "What do businesses need to do now?", a: "Businesses should make sure they are fully informed on what is happening and when. They need to be aware of 'End of Sale' and 'End of Life' notifications and prepare to migrate to all-IP-ready products." },
  { q: "What are the main technologies available?", a: "The main technologies available are Fibre to the Premises (FTTP) and Single Order Generic Ethernet Access (SoGEA). For businesses in truly rural locations, Integra SD-WAN is a viable alternative for more bandwidth-hungry operators." },
  { q: "What are the benefits of VoIP from a continuity standpoint?", a: "VoIP solutions use a company's existing internet connection to transmit voice calls, removing the need for legacy copper lines. The pandemic proved to be a good testing ground for VoIP services, demonstrating their reliability for remote working." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } } };

const relatedServices = [
  {
    name: "Unified Communications",
    description: "Modern VoIP solutions to replace traditional phone lines.",
    url: "/unified-communications",
  },
  {
    name: "Leased Lines",
    description: "Dedicated Fibre connectivity with business-grade SLA.",
    url: "/leased-lines",
  },
  {
    name: "Integra SD-WAN",
    description: "Alternative broadband for areas without Fibre availability.",
    url: "/integra-sd-wan",
  },
  {
    name: "Pricing",
    description: "Transparent pricing for all our PSTN replacement solutions.",
    url: "/pricing",
  },
];

const PSTNSwitchOff = () => {
  return (
    <PageLayout>
      <SEO
        title="PSTN Switch Off — Prepare Your Business"
        description="The PSTN switch-off is here. Future-proof your business by transitioning to VoIP and modern connectivity. Integra Networks guides you through every step."
        keywords="PSTN switch off, ISDN replacement, VoIP migration, PSTN 2027, BT Openreach, managed SIM, SD-WAN"
        url="/pstn-switch-off"
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="PSTN switch off preparation" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white mb-6">
              Resources <ArrowRight className="h-3 w-3" /> PSTN Switch Off
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-normal">
              Prepare for the PSTN Switch-Off: Embrace VoIP Today
            </h1>
            <p className="max-w-2xl text-lg text-white/80 mb-8 font-normal">
              The largest communication shift in decades is here as BT Openreach decommissions the Public Switched Telephone Network. This impacts traditional landlines, ISDN, ADSL, and all copper-dependent services.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get Your Assessment</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Challenges */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Should I Be Concerned?</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal max-w-3xl mx-auto">
              Implications of the PSTN Switch-Off
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The switch-off will impact your network infrastructure and may require significant changes. We're here to guide you through every step.
            </p>
          </div>
        </AnimatedSection>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-8 md:grid-cols-2">
          {challenges.map((c) => (
            <motion.div key={c.title} variants={staggerItem} className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{c.description}</p>
              {c.cta && (
                <Link to={c.cta.path} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  {c.cta.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* Why Integra */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Why Integra?</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Your Partner in PSTN Switch-Off Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We manage all aspects of your transition. Our experience delivering managed connectivity to businesses, especially in rural locations, makes us uniquely qualified to handle your network migration.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-6">
              {whyIntegra.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* Solutions overview */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Our Solutions</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal max-w-3xl mx-auto">
              Modern alternatives for every PSTN use case
            </h2>
          </div>
        </AnimatedSection>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Integra SD-WAN", desc: "When traditional connectivity options aren't available, our SD-WAN solution revolutionises connectivity for businesses, especially in rural locations, without the need for Fibre.", path: "/" },
            { title: "VoIP Solutions", desc: "Our PSTN/ISDN2 replacement solution allows businesses to upgrade their existing system without overhauling their entire cabling network. Quick to deploy and easy to configure.", path: "/unified-communications" },
            { title: "Managed SIM Services", desc: "Our Managed SIM service provides superior connectivity, compliance, and reporting, offering significant cost savings compared to traditional analogue landlines.", path: "/managed-sim-services" },
          ].map((s) => (
            <motion.div key={s.title} variants={staggerItem} className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="text-lg font-medium text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-4">{s.desc}</p>
              <Link to={s.path} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FAQs */}
      <Section className="bg-surface-dark">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">FAQs</p>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground font-normal">
              ISDN Switch Off — Frequently Asked Questions
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
              Ready to transition from PSTN?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us for an assessment and we'll guide you through the necessary steps to ensure a smooth transition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get Your Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/managed-sim-services">Managed SIM Services</Link>
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

export default PSTNSwitchOff;
