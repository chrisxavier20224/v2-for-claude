import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
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

const SussexSurrey = () => {
  const faqs = [
    {
      q: "I have a listed building in Horsham or Crawley area. Can you install here?",
      a: "Yes. Listed building constraints are common in affluent Sussex and Surrey properties. We design discreet installations—external antennas can be roof-mounted away from public view, or internal solutions where possible. We've completed multiple listed property installations across the region. Discuss your specific constraints during the survey.",
    },
    {
      q: "What speeds can I expect in Sussex or Surrey?",
      a: "Integra Pro (bonded 4G/5G) typically delivers 150-280Mbps depending on proximity to cell towers. Properties around Crawley and Guildford have excellent coverage. Starlink adds 100-150Mbps for areas with southern sky visibility. We test actual speeds at your property before you commit—not theoretical numbers.",
    },
    {
      q: "How quickly can you install at my Surrey property?",
      a: "14 days from survey to installation. Our engineer visits once, mounts equipment, runs cabling, tests everything. We handle all the technical work. You don't need to do anything beyond providing coordinates and approving the quote.",
    },
    {
      q: "Do I need a backup connection or failover system?",
      a: "It depends on your needs. Integra Pro includes built-in redundancy (bonded networks). If one link drops, the other handles traffic. For businesses needing guaranteed uptime, we offer Enterprise service with 99.5% SLA and automatic failover. For most residential and small business customers, Integra Pro is sufficient.",
    },
    {
      q: "What about future BT fibre rollout? Should I wait?",
      a: "BT's fibre is coming to Sussex and Surrey, but timelines are uncertain. If you're promised fibre within 12-18 months, waiting may make sense. If it's 3+ years away or indefinite, you're losing productivity now. Many of our customers were promised BT fibre 'soon' for years. Get online now with Integra; if BT arrives, you can always switch.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Premium Rural Broadband Sussex & Surrey | Integra Networks"
        description="Premium broadband for affluent rural Sussex and Surrey. Crawley, Horsham, Guildford, Chichester. Integra Pro and Starlink solutions. Listed building compatible."
        keywords="rural broadband Sussex, Surrey internet, Crawley broadband, Horsham, Guildford, premium broadband, rural connectivity"
        url="/locations/rural-broadband-sussex-surrey"
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
              Premium Broadband Sussex & Surrey
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Business-grade connectivity for affluent rural properties across Sussex and Surrey. Listed building compatible installations.
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
              The Sussex and Surrey Connectivity Challenge
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Affluent rural properties across Sussex and Surrey—Crawley, Horsham, Guildford, Chichester, and beyond—often face broadband constraints despite being relatively close to London.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The issue: geography. Many properties sit on the fringes of BT's infrastructure. BT fibre is promised "soon" or vaguely scheduled years ahead. Meanwhile, satellite is unreliable, and basic 4G doesn't meet business needs.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We serve premium properties across Sussex and Surrey—country houses, estates, successful small businesses, and remote workers who demand reliable, fast internet. Our team understands listed building constraints, aesthetic considerations, and the specific needs of affluent rural customers.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">
                Why Standard Fibre Timelines Don't Work
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    BT's rural rollout is slow. Many properties are promised delivery 2-3+ years ahead.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Affluent properties often require aesthetic installation. Visible infrastructure is unacceptable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Listed buildings have planning constraints. Standard pole installations may not be permitted.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-normal mb-6">Premium Solutions for Sussex and Surrey</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Integra Pro (Discrete Bonded 4G/5G)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We bond EE and Vodafone (or other networks depending on your location). Sussex and Surrey have excellent multi-network coverage.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Typical result: 180-280Mbps combined speed. Roof-mounted antenna, minimal visual impact. No cables running down walls.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Starlink with 4G/5G Backup
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Properties with southern sky visibility can run Starlink (premium speed) with our 4G/5G backup for reliability. Excellent for listed buildings where pole installation is problematic.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  100-150Mbps downloads plus automatic failover to 4G/5G if needed.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Enterprise with SLA Guarantee
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Serious connectivity for serious businesses. Bonded cellular with 99.5% uptime guarantee, priority support, and free equipment replacement.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Our engineers are on call. We understand that your broadband is business-critical.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">Installation That Respects Your Property</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Unlike generic ISPs, we work with your specific constraints. Listed buildings? We design solutions that work within planning guidelines. Aesthetic concerns? We'll roof-mount equipment away from public view or discuss internal options.
            </p>
            <ol className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>You send coordinates</strong> and mention any specific constraints (listed building, conservation area, aesthetic preferences).
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We survey on-site</strong> and discuss installation options that suit your property.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>We recommend a solution</strong> that meets your connectivity and aesthetic needs.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>Installation within 14 days.</strong> Professional installation, tested and guaranteed.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">5.</span>
                <span>
                  <strong>Ongoing support.</strong> Free engineer callouts if anything fails.
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

            <h2 className="text-2xl font-normal mb-6">Real Installation: Listed House in Guildford Area</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A historic property near Guildford had strong constraints: listed building status, conservation area, no visible external infrastructure allowed.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              BT fibre was vaguely promised years away. Starlink alone had high latency for the owner's remote work. The property needed professional-grade connectivity.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We installed Integra Pro (bonded EE and Vodafone) with roof-mounted antenna hidden from street view and cabling concealed. Result: 250Mbps combined speed, zero visible infrastructure changes, full compliance with conservation guidelines. Cost: £135/month. Problem solved.
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

export default SussexSurrey;
