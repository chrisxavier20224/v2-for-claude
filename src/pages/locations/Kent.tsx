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

const Kent = () => {
  const faqs = [
    {
      q: "I run a farm business in Kent. Do you support agricultural operations?",
      a: "Absolutely. Kent farms, orchards, and rural businesses are a core part of our customer base. Many farms use broadband for crop management systems, livestock monitoring, ordering supplies, and managing sales channels. We design systems with uptime guarantees that farming operations depend on. Enterprise service with 99.5% SLA is available.",
    },
    {
      q: "What speeds are typical for rural Kent properties?",
      a: "Integra Pro (bonded 4G/5G) typically delivers 150-280Mbps depending on proximity to EE and Vodafone towers. Kent has good network coverage across most rural areas. Starlink adds 100-150Mbps for properties with southern sky visibility. We test actual speeds at your property before you commit.",
    },
    {
      q: "My property is near Ashford or Folkestone. How quickly can you reach me?",
      a: "14 days from survey to installation. We cover all of Kent, including Ashford, Maidstone, Canterbury, Tonbridge, Sevenoaks, and Folkestone. We've completed installations across the county and understand Kent's terrain, network availability, and the specific needs of farming and small business customers.",
    },
    {
      q: "Do I need a backup system if I'm running a business?",
      a: "For business-critical operations (farm management systems, online sales, video communication), redundancy is essential. Integra Pro includes built-in backup through bonded networks. For mission-critical needs, Enterprise service offers 99.5% SLA with automatic failover and priority support. Free engineer callouts if anything fails.",
    },
    {
      q: "Is Starlink suitable for farm operations?",
      a: "Starlink alone can work for basic needs, but it has limitations for farming businesses: higher latency (affects real-time monitoring systems), weather sensitivity (rain impact), and moderate upload speeds. We recommend Integra Pro (bonded 4G/5G) or Starlink SD-WAN (Starlink plus 4G/5G backup) for Kent farm operations needing reliability.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Rural Broadband Kent | Farm & Agriculture Connectivity | Integra Networks"
        description="Broadband for Kent farms, agricultural businesses, and rural properties. Ashford, Maidstone, Canterbury, Sevenoaks. Integra Pro and Starlink solutions with uptime guarantees."
        keywords="rural broadband Kent, farm broadband, agricultural internet, Kent connectivity, Ashford internet, Canterbury, Maidstone"
        url="/locations/rural-broadband-kent"
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
              Rural Broadband Kent
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Reliable connectivity for Kent farms, agricultural businesses, and rural properties. 14-day installation with business-grade uptime.
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
              The Garden of England's Connectivity Gap
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Kent's farmland, orchards, and rural properties are picturesque but poorly served by broadband. BT's fibre rollout skips over the countryside, focusing on towns like Maidstone, Ashford, and Canterbury.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The result: rural farmers, agricultural businesses, and small rural enterprises are offline or on unreliable 4G. Meanwhile, modern farming relies on broadband—crop management systems, livestock monitoring, online sales, vet consultations, supplier ordering.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We've installed at over 40 Kent farm and rural business properties. We understand Kent's agricultural economy, the terrain challenges of the Weald, and the specific connectivity needs of farming operations that depend on reliable uptime.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">
                Why Farming Needs Reliable Broadband
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Crop management systems require constant connectivity. Downtime equals lost data.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Livestock monitoring and veterinary consultations need low-latency, stable connections.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Online sales, direct-to-consumer marketing, and supplier communication are critical to survival.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-normal mb-6">Solutions Built for Kent Farming</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Integra Pro (Bonded 4G/5G for Farmers)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We bond EE and Vodafone across Kent's rural areas. This provides redundancy: if one network drops, the other handles traffic automatically.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Typical result: 180-280Mbps combined, weather-proof, zero latency for monitoring systems.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Enterprise SLA (Business-Critical Farming)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For farms where downtime is unacceptable, we offer 99.5% uptime guarantee with priority support and automatic failover.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Free engineer callouts. We replace any failed equipment immediately at no charge.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Starlink SD-WAN (Best of Both)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For properties with southern sky visibility, combine Starlink (speed) with our 4G/5G backup (reliability). Automatic failover if Starlink drops in rain.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Ideal for exposed hilltop farms with excellent Starlink sightlines.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">Our Installation Process</h2>
            <ol className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>You send coordinates</strong> from Google Maps of your Kent farm or rural property.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We survey the site</strong> and discuss your specific needs—crop systems, monitoring equipment, business operations that depend on connectivity.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>We recommend the right solution.</strong> Integra Pro, Starlink SD-WAN, or Enterprise SLA based on your needs.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>Installation within 14 days.</strong> Professional engineer visit, equipment mounted, tested, configured.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">5.</span>
                <span>
                  <strong>Ongoing farm support.</strong> Your connectivity is mission-critical. We support it that way.
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

            <h2 className="text-2xl font-normal mb-6">Real Installation: Tonbridge Area Hop Farm</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A traditional hop farm near Tonbridge needed reliable connectivity for crop management and direct-to-brewery sales. BT fibre was 5+ years away. Starlink alone was unreliable during the rainy English seasons.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The property had strong EE signal but weak Vodafone. We recommended Integra Pro (bonded EE + O2 as backup). Installation: one day. Result: 220Mbps combined speed, zero weather impact, automatic failover redundancy.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cost: £135/month. The farm now manages crop systems reliably, coordinates with buyers online, and handles invoicing without drops. Problem solved, productivity up.
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

export default Kent;
