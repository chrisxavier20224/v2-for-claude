import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight, HelpCircle, Zap, Wifi, Code, Tag } from "lucide-react";
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

const relatedServices = [
  {
    title: "Leased Lines",
    description: "Dedicated fibre connectivity for businesses requiring maximum reliability.",
    icon: Zap,
    href: "/connectivity/leased-lines",
  },
  {
    title: "Business WiFi",
    description: "Enterprise-grade wireless networks for your office and operations.",
    icon: Wifi,
    href: "/connectivity/business-wifi",
  },
  {
    title: "Integra SD-WAN",
    description: "Intelligent network optimisation for multi-site connectivity.",
    icon: Code,
    href: "/connectivity/integra-sd-wan",
  },
  {
    title: "Pricing",
    description: "Transparent, competitive pricing for all our connectivity services.",
    icon: Tag,
    href: "/pricing",
  },
];

const EssexHerts = () => {
  const faqs = [
    {
      q: "I'm near Stansted Airport area. Can you reach me?",
      a: "Yes. The Stansted corridor has excellent EE and Vodafone coverage. We've completed multiple installations in villages around the airport—Saffron Walden, Takeley, Great Dunmow. Bonded 4G/5G typically delivers 200-250Mbps. Send us your coordinates and we'll confirm coverage within 24 hours.",
    },
    {
      q: "How much does a typical Essex or Herts installation cost?",
      a: "Installation is £2,200. Monthly service is £135/month for Integra Pro (bonded 4G/5G) or £80/month for Starlink SD-WAN add-on. No long-term contract. These are all-inclusive prices—no hidden setup fees or engineer callout charges.",
    },
    {
      q: "What if my property has weak mobile signal?",
      a: "We work with you to find the best solution. If one network is weak, we can test neighbouring networks or recommend Starlink instead. We've completed over 50 installations across Essex and Hertfordshire—we know which networks work in which areas. We don't recommend a solution until we've actually surveyed your property.",
    },
    {
      q: "Do you service Chelmsford and Braintree?",
      a: "Yes, we cover all of Essex and Hertfordshire. This includes Chelmsford, Braintree, Saffron Walden, Bishop's Stortford, and west Suffolk villages. We have a strong customer base across this corridor and understand local terrain, network coverage, and the specific challenges of commuter villages and rural properties.",
    },
    {
      q: "What happens if I'm temporarily without broadband?",
      a: "We offer a failover service. If your primary connection drops, traffic automatically reroutes to a backup network. For Enterprise customers, this is included in your £400/month SLA service. For others, it's available as an add-on. Most rural properties on Integra Pro experience 99.5%+ uptime because bonded 4G/5G provides built-in redundancy.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Rural Broadband Essex & Hertfordshire | Integra Networks"
        description="Reliable broadband for Essex, Hertfordshire, and west Suffolk. Integra Pro bonded 4G/5G, Starlink solutions. Strong local customer base. Fast 14-day installation."
        keywords="rural broadband Essex, Hertfordshire internet, broadband Bishop's Stortford, Saffron Walden, Stansted broadband, rural connectivity"
        url="/locations/rural-broadband-essex-hertfordshire"
      />

      {/* Hero */}
      <section className="relative -mt-[73px] pt-[73px] bg-surface-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-32">
          <AnimatedSection>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5"
            >
              <MapPin className="h-3.5 w-3.5" /> Coverage Areas
            </Link>
            <h1 className="text-heading-1 md:text-display-sm text-white max-w-3xl mb-6">
              Rural Broadband Essex & Hertfordshire
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Strong broadband across Essex, Hertfordshire, and west Suffolk. Over 50 successful installations in this corridor.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Main content */}
      <Section>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-normal mb-6">
              The Essex and Hertfordshire Broadband Gap
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Rural properties across Essex and Hertfordshire—Saffron Walden, Bishop's Stortford, Braintree, Chelmsford, and villages around Stansted—are caught in BT's rollout delays.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The issue: BT's infrastructure priorities don't match commuter properties. Many villages are listed for "future rollout" with no firm date. Meanwhile, you're offline or on unreliable 4G.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We've installed at over 50 properties across this corridor. We understand the Stansted Airport area, the commuter belt around Bishops Stortford, and rural farmland around Saffron Walden. We know which networks reach which locations and how to bond them for reliable speeds.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">
                Why BT Delays Matter Here
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Scattered rural properties make fibre rollout expensive. BT prioritizes urban density.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Many villages are promised for 2027 or later. Dates slip regularly.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Commuter properties need reliable, fast connectivity. BT timelines can't wait.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-normal mb-6">Solutions Available Now</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Integra Pro (Bonded 4G/5G)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Essex and Hertfordshire have excellent EE and Vodafone coverage. We bond both networks, delivering redundancy and speed.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Typical result: 200-300Mbps combined, low latency, weather-proof.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Starlink SD-WAN
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Properties with southern sky visibility can run Starlink + 4G/5G backup. This gives you Starlink's speed plus cellular's reliability.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  100-150Mbps downloads plus automatic failover to 4G/5G.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Enterprise Redundancy
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Businesses in this corridor need guaranteed uptime. We offer bonded cellular with 99.5% SLA and priority support.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Includes free engineer callouts and equipment replacement.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">Our Installation Process</h2>
            <ol className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>You send coordinates</strong> from Google Maps (Saffron Walden, Bishop's Stortford, Braintree, anywhere in Essex or Herts).
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We survey the site</strong> within 24-48 hours. Map cellular towers, test actual signal, identify the best solution.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>We send a detailed quote.</strong> No obligation, no surprise charges.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>Installation within 14 days.</strong> One engineer visit. Mount antenna, cable run, router config, speed test.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">5.</span>
                <span>
                  <strong>You're online.</strong> Full support and maintenance included.
                </span>
              </li>
            </ol>

            <div className="bg-muted/30 border border-border rounded-lg p-6 my-8">
              <h3 className="font-semibold text-foreground mb-4">Pricing</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Integra Pro (bonded 4G/5G)</span>
                  <span className="font-semibold text-foreground">£135/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Starlink SD-WAN add-on</span>
                  <span className="font-semibold text-foreground">£80/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Installation</span>
                  <span className="font-semibold text-foreground">£2,200</span>
                </div>
                <div className="border-t border-border pt-3 mt-3 flex justify-between">
                  <span>Enterprise (SLA + priority support)</span>
                  <span className="font-semibold text-foreground">£400/month</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No long-term contract. Cancel anytime.
              </p>
            </div>

            <h2 className="text-2xl font-normal mb-6">Real Installation: Bishop's Stortford Property</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A family-run business near Bishop's Stortford needed reliable internet for online sales and video calls. BT said fibre was 3 years away. Starlink alone was unreliable in rain.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We recommended Integra Pro (bonded EE and Vodafone). The property had excellent multi-network coverage. Installation: one day.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Result: 280Mbps combined speed, crystal-clear video calls, zero weather impact. Cost: £135/month. The business now runs smoothly without connectivity headaches.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/30">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-normal mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left text-base font-medium py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </Section>

      <RelatedServices services={relatedServices} heading="Our Solutions" subheading="Enterprise-grade connectivity tailored to your region." />

      {/* CTA */}
      <GradientBand
        fromColor="hsl(0 0% 100%)"
        toColor="hsl(216 100% 50%)"
      />
      <section className="relative overflow-hidden bg-primary-enhanced py-28 md:py-36">
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-white">
              Check What's Available at Your Location
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Send us your coordinates from Google Maps. We'll survey your site and send a detailed report within 24 hours.
            </p>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-medium h-12 px-8 text-base"
              >
                <Link to="/availability-checker">Check Availability</Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
};

export default EssexHerts;
