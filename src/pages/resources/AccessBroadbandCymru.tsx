import { Link } from "react-router-dom";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
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

// ─── Hero background (reuse a scenic Welsh-looking image) ─────────────────────
import heroImg from "@/assets/sectors/homeworker-rural-property.avif";

// ─── Related Services ─────────────────────────────────────────────────────────
const relatedServices = [
  {
    name: "Starlink Installation",
    description: "Fast satellite connectivity available almost anywhere in Wales.",
    url: "/starlink-installation",
  },
  {
    name: "Integra SD-WAN",
    description: "Business-grade bonded cellular with automatic failover.",
    url: "/integra-sd-wan",
  },
  {
    name: "Rural SMEs",
    description: "Tailored connectivity solutions for rural small businesses.",
    url: "/rural-business-broadband",
  },
  {
    name: "Pricing",
    description: "Transparent pricing for all our connectivity solutions.",
    url: "/pricing",
  },
];

// ─── Benefits ─────────────────────────────────────────────────────────────────
const benefits = [
  {
    title: "Broad Eligibility",
    description: "The scheme welcomes applications from individuals and businesses across Wales.",
  },
  {
    title: "Easy Application Process",
    description: "It's really easy to apply — Integra will help you every step of the way.",
  },
  {
    title: "Generous Grants",
    description: "Secure up to £800 for superfast broadband packages (30 Mbps and above).",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is the Access Broadband Cymru Scheme?",
    a: "The Access Broadband Cymru Scheme is a Welsh Government initiative that provides grants to help individuals and businesses in Wales access faster broadband services.",
  },
  {
    q: "How much can I receive from the scheme?",
    a: "The scheme offers grants of up to £800 for new broadband installations that deliver speeds of 30 Mbps and above.",
  },
  {
    q: "Who is eligible?",
    a: "The scheme is open to individuals, businesses, and third-sector premises in Wales that currently have limited broadband service.",
  },
  {
    q: "What speeds can I expect with Integra Networks?",
    a: "Integra Networks delivers speeds of around 100 Mbps, making it ideal for rural businesses.",
  },
  {
    q: "Can I apply if I've received a grant in the past?",
    a: "The scheme does not accept applications from premises that have received grant support within the last 24 months.",
  },
  {
    q: "I have already received an offer letter – What next?",
    a: "Send us a copy of your letter and we can get the ball rolling. We will need to conduct a desktop survey to determine exactly what is required, but the whole process will take just a matter of days.",
  },
  {
    q: "How do I apply with Integra Networks?",
    a: "You can contact Integra Networks directly, and our team will guide you through the application process.",
  },
  {
    q: "Can the grant cover the full cost of installation?",
    a: "It will cover a proportion, depending on which of our services you choose. Once we have prepared a proposal, you will have all the details you need to make a decision.",
  },
  {
    q: "How long does installation take?",
    a: "The installation timeline can vary, but Integra Networks aims to get you connected as quickly as possible.",
  },
];

// ─── Animation variants ──────────────────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

const AccessBroadbandCymru = () => {
  return (
    <PageLayout>
      <SEO
        title="Access Broadband Cymru"
        description="Up to £800 towards broadband installation in Wales via Access Broadband Cymru Scheme."
      />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Rural Welsh property"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur px-3 py-1 text-xs font-medium text-white mb-6">
              Resources <ArrowRight className="h-3 w-3" /> Access Broadband Cymru
            </span>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl font-normal">
              Want faster broadband? Get £800 towards your install in Wales.
            </h1>
            <p className="max-w-2xl text-lg text-white/80 mb-8 font-normal">
              Integra Networks, in partnership with the Access Broadband Cymru Scheme, offers up to £800 towards your broadband installation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/check">Check Availability</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── Benefits ───────────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Discover the Scheme</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal max-w-3xl mx-auto">
              Empowering Wales with superior broadband connectivity
            </h2>
          </div>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(210 40% 96%)" />

      {/* ── Why Integra ───────────────────────────────────────────────────── */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">Your Approved Supplier</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal mb-6">
              Integra Networks: Your Gateway to Faster Broadband
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As an approved supplier of the Access Broadband Cymru Scheme, Integra Networks ensures you fully utilise the available £800 grant. We deliver speeds of around 100 Mbps, ideal for rural businesses, maximising the value you get from the scheme.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Choose Integra Networks for high-quality broadband services that fully leverage the grant for your benefit.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-8 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Financial Support: Broadband for All</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're passionate about connectivity. That's why we're proud to be part of the Access Broadband Cymru Scheme, helping to bring superfast broadband to more homes and businesses in Wales.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Our Promise: Reliable Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integra Networks is dedicated to delivering reliable, high-speed broadband services. Our commitment extends beyond installation, providing comprehensive customer support for a seamless experience.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(210 40% 96%)" toColor="hsl(0 0% 100%)" />

      {/* ── FAQs ───────────────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-3">FAQs</p>
            <h2 className="text-heading-2 md:text-heading-1 text-foreground font-normal">
              Access Broadband Cymru — Frequently Asked Questions
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
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <Section className="bg-surface-dark text-white">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-heading-2 md:text-heading-1 text-white font-normal mb-6">
              Ready to Get Connected?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Check your eligibility and start the process today with Integra Networks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section className="bg-background">
        <RelatedServices services={relatedServices} heading="Related Solutions" subheading="Find the right connectivity for your business." />
      </Section>
    </PageLayout>
  );
};

export default AccessBroadbandCymru;
