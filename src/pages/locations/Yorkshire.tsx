import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight, HelpCircle, Satellite, Code, Users, Signal } from "lucide-react";
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
    title: "Starlink Installation",
    description: "Fast satellite connectivity for rural properties with clear southern sky.",
    icon: Satellite,
    href: "/connectivity/starlink-installation",
  },
  {
    title: "Integra SD-WAN",
    description: "Bonded 4G/5G with automatic failover for enterprise-grade reliability.",
    icon: Code,
    href: "/connectivity/integra-sd-wan",
  },
  {
    title: "Rural SMEs",
    description: "Tailored broadband solutions designed for rural small businesses.",
    icon: Users,
    href: "/sectors/rural-smes",
  },
  {
    title: "4G/5G Backup",
    description: "Redundant cellular backup ensures uninterrupted connectivity.",
    icon: Signal,
    href: "/connectivity/4g-5g-backup",
  },
];

const Yorkshire = () => {
  const faqs = [
    {
      q: "I run a manufacturing business in rural Yorkshire. Do you support commercial operations?",
      a: "Absolutely. Yorkshire's manufacturing and industrial base depends on reliable connectivity. We've installed at farms, small factories, engineering businesses, and logistics operations across the region. Integra Pro and Enterprise SLA options deliver the uptime serious businesses need. Free engineer callouts if anything fails.",
    },
    {
      q: "What about areas around Sheffield, Leeds, and Harrogate?",
      a: "We cover all of Yorkshire, including Sheffield, Leeds, Harrogate, Skipton, Rotherham, Doncaster, and Hull. We've completed installations across the county in both rural properties and industrial areas. If you have any mobile signal on your property, we can almost certainly deliver broadband within 14 days.",
    },
    {
      q: "Is bonded 4G/5G reliable for manufacturing operations?",
      a: "Yes. Bonded 4G/5G (Integra Pro) provides built-in redundancy: if one network drops, the other carries traffic automatically. For manufacturing and industrial operations needing guaranteed uptime, we offer Enterprise service with 99.5% SLA, priority support, and free equipment replacement.",
    },
    {
      q: "What speeds can I expect in rural Yorkshire?",
      a: "Integra Pro (bonded 4G/5G) typically delivers 150-280Mbps depending on proximity to cell towers. Yorkshire has good network coverage across most rural areas and industrial sites. Starlink adds 100-150Mbps for properties with southern sky visibility. We test actual speeds at your location.",
    },
    {
      q: "Do you support mesh WiFi and site-wide coverage?",
      a: "Yes. For farms, manufacturing sites, and large properties, we install mesh WiFi systems that cover outbuildings, warehouses, and multiple structures. One primary connection (Integra Pro or Starlink) feeds into mesh nodes across your site. Full coverage from the main house to the far end of your property.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Rural Broadband Yorkshire | Manufacturing & Farming | Integra Networks"
        description="Broadband for Yorkshire farms, manufacturing, and rural businesses. Sheffield, Leeds, Harrogate, Skipton. Integra Pro with uptime guarantees. 14-day installation."
        keywords="rural broadband Yorkshire, manufacturing broadband, farm internet, Sheffield, Leeds, Harrogate, rural connectivity"
        url="/locations/rural-broadband-yorkshire"
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
              Rural Broadband Yorkshire
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Fast, reliable connectivity for Yorkshire farms, manufacturing, and rural businesses. Built for operations that demand uptime.
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
              Yorkshire's Manufacturing and Farming Broadband Problem
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Yorkshire's economy runs on farming and manufacturing. Yet rural properties across the region lack the broadband infrastructure these operations depend on.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              BT's rollout prioritizes urban density—Sheffield, Leeds, Bradford. Rural farms, industrial properties, and moorland business locations are deprioritized. Promised dates slip. Farmers and manufacturers are offline or on unreliable 4G.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We've installed at Yorkshire properties where reliable connectivity is mission-critical: working farms managing livestock and crops online, manufacturing facilities running supply chains, engineering businesses coordinating with clients. We understand Yorkshire's industrial economy and the specific connectivity needs of these operations.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">
                Why Yorkshire Farming and Manufacturing Needs Reliability
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Farms use online systems for crop management, livestock tracking, and veterinary coordination. Downtime equals lost data and missed operations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Manufacturing depends on supply chain management, order processing, and communication with clients. Downtime stops production.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Rural Yorkshire terrain—moorland, valleys, elevated industrial sites—creates coverage complexity.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-normal mb-6">Solutions Built for Yorkshire Operations</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Integra Pro (Bonded 4G/5G for Business)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We bond EE and Vodafone across Yorkshire's rural areas, creating redundancy. If one network drops, the other handles traffic automatically.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Typical result: 180-280Mbps combined speed, low latency, weather-independent, zero downtime from single-network failures.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Enterprise SLA (99.5% Uptime Guarantee)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For farms and manufacturing sites where downtime is unacceptable, we offer Service Level Agreement with priority support and guaranteed response times.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Free engineer callouts and equipment replacement if anything fails. Your business is our priority.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Mesh WiFi for Multi-Building Sites
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Large farms, manufacturing facilities, and industrial sites often have multiple buildings. We install mesh WiFi that covers your entire property—main house, barns, workshops, outbuildings.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Seamless roaming across your site. All buildings connected to the same primary link.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">How We Install in Yorkshire</h2>
            <ol className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>You send coordinates</strong> from Google Maps of your Yorkshire farm, manufacturing site, or rural property.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We survey the site</strong> and discuss your specific operational needs—production schedules, livestock systems, supply chain management—that depend on uptime.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>We design the right solution.</strong> Integra Pro, Starlink, or Enterprise SLA with mesh coverage if needed.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>Installation within 14 days.</strong> Professional engineer installs, mounts equipment, runs cabling, tests everything.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">5.</span>
                <span>
                  <strong>Your operations are online.</strong> Ongoing support included. We understand Yorkshire business depends on uptime.
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

            <h2 className="text-2xl font-normal mb-6">Real Installation: Manufacturing Business Near Rotherham</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A precision engineering business near Rotherham depended on fast, reliable broadband for CAD file transfers and client video calls. Their industrial site was remote, and BT fibre was 3+ years away. Starlink latency was unsuitable for video conferencing.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The property had good EE coverage and adequate Vodafone. We recommended Integra Pro (bonded EE and Vodafone) with Enterprise SLA. Installation: one day.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Result: 240Mbps combined speed, 20ms latency perfect for video calls, zero weather impact, 99.5% uptime guarantee. Cost: £400/month Enterprise. The business now transfers massive CAD files, runs client presentations, and coordinates with suppliers without connectivity headaches.
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
                className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base"
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

export default Yorkshire;
