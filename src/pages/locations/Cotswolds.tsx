import { Link } from "react-router-dom";
import { MapPin, Satellite, Zap, Users, Signal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
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
    href: "/starlink-installation",
  },
  {
    title: "Integra SD-WAN",
    description: "Bonded 4G/5G with automatic failover for enterprise-grade reliability.",
    icon: Zap,
    href: "/integra-sd-wan",
  },
  {
    title: "Rural SMEs",
    description: "Tailored broadband solutions designed for rural small businesses.",
    icon: Users,
    href: "/rural-business-broadband",
  },
  {
    title: "4G/5G Backup",
    description: "Redundant cellular backup ensures uninterrupted connectivity.",
    icon: Signal,
    href: "/cellular-backup",
  },
];

const Cotswolds = () => {
  const faqs = [
    {
      q: "My Cotswolds property is listed. Can you install broadband without violating planning?",
      a: "Yes. Listed building constraints are common in Cotswolds villages. We design discreet installations—roof-mounted antennas hidden from public view, cabling routed discretely, minimal visual impact. We've completed multiple listed property installations across Cheltenham, Cirencester, and Stow-on-the-Wold. Discuss your specific constraints during the survey.",
    },
    {
      q: "What speeds are typical for Cotswolds properties?",
      a: "Integra Pro (bonded 4G/5G) typically delivers 150-280Mbps depending on proximity to cell towers. The Cotswolds have solid network coverage across most areas. Starlink adds up to 250Mbps for properties with southern sky visibility. We test actual speeds at your property before you commit.",
    },
    {
      q: "Are there any conservation area constraints I should know about?",
      a: "Yes, many Cotswolds properties sit in conservation areas. We're experienced working within these constraints. We'll discuss installation options that comply with local planning—roof mounting, concealed cabling, and minimal external infrastructure. Your property's character is protected.",
    },
    {
      q: "How quickly can you install at my Cotswolds home?",
      a: "10 working days from survey to installation. We've completed installations across the region and understand Cotswolds specific requirements. One engineer visit—mount equipment, run cabling, test speeds. Professional installation that respects your property.",
    },
    {
      q: "Do affluent Cotswolds properties need failover systems?",
      a: "Integra Pro includes built-in redundancy (bonded networks). If one network drops, the other automatically handles traffic. For properties where broadband is business-critical or where you want guaranteed uptime, we offer Enterprise service with 99.5% SLA and priority support.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Broadband Cotswolds"
        description="Premium broadband for Cotswolds. Cheltenham, Cirencester, Stow. Listed building compatible."
        keywords="Cotswolds broadband, rural broadband, Cheltenham internet, Cirencester, Stow-on-the-Wold, listed building broadband, premium rural connectivity"
        url="/locations/rural-broadband-cotswolds"
      />
      <SchemaMarkup
        data={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Integra Networks — Cotswolds",
            description: "Premium broadband for affluent Cotswolds properties. Cheltenham, Cirencester, Stow-on-the-Wold. Listed building compatible. Integra Pro and Starlink solutions.",
            url: "https://integra-networks.co.uk/locations/rural-broadband-cotswolds",
            areaServed: {
              "@type": "Place",
              name: "Cotswolds",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "Integra Networks",
              url: "https://integra-networks.co.uk",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="relative -mt-[73px] pt-[73px] bg-surface-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-32">
          <AnimatedSection>
            <Link
              to="/check"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5"
            >
              <MapPin className="h-3.5 w-3.5" /> Coverage Areas
            </Link>
            <h1 className="text-heading-1 md:text-display-sm text-white max-w-3xl mb-6">
              Premium Broadband Cotswolds
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Beautiful properties deserve beautiful solutions. Business-grade connectivity for affluent Cotswolds homes and properties in conservation areas.
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
              Cotswolds Broadband: Beauty and Connectivity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The Cotswolds are among England's most beautiful and desirable areas. Yet this beauty comes with challenges: protected landscapes, listed buildings, conservation constraints, and sparse broadband infrastructure.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              BT's fibre rollout is slow here. Many properties are promised fibre years ahead, if at all. Meanwhile, satellite is unreliable and doesn't meet professional needs.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We serve affluent Cotswolds properties—country homes, estates, heritage properties, and successful businesses where broadband is essential but aesthetic impact matters. Our team understands listed building constraints, conservation requirements, and the specific needs of clients who refuse to compromise on either connectivity or appearance.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-medium text-foreground mb-3">
                Why Cotswolds Properties Face Unique Challenges
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Many villages sit in conservation areas. Standard broadband pole installation may be restricted.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Historic listed buildings have planning constraints on external infrastructure.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Affluent property owners expect aesthetic solutions, not industrial-looking equipment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    BT prioritises urban density. Rural Cotswolds investment is minimal.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-normal mb-6">Solutions That Blend Beauty and Performance</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Integra Pro (Discreet Bonded 4G/5G)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We bond EE and Vodafone across the Cotswolds. Signal is strong in most areas around Cheltenham, Cirencester, and Stow-on-the-Wold.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Roof-mounted antenna hidden from street view, cabling concealed, minimal visual footprint. 180-280Mbps combined speeds.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Starlink with 4G/5G Backup
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Properties with southern sky visibility can run Starlink (premium speed) with our 4G/5G backup for reliability. Excellent for listed buildings where pole installation is problematic.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  up to 250Mbps downloads plus automatic failover to 4G/5G. No visible poles or infrastructure.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Enterprise SLA (Premium Service)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For serious broadband users and business properties, we offer Service Level Agreement with 99.5% uptime and priority support.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Our engineers are on call. Your connectivity is premium. So is our support.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">Installation That Respects Your Property</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Unlike generic ISPs, we work within your specific constraints. Listed buildings? We'll design solutions that pass planning review. Conservation area? We'll roof-mount equipment away from public view and conceal cabling. Aesthetic concerns? We'll work with you to find an elegant solution.
            </p>
            <ol className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>You send coordinates</strong> from Google Maps and mention any constraints (listed building, conservation area, aesthetic preferences).
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We survey on-site</strong> and discuss installation options that suit your property and meet planning requirements.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>We recommend a solution</strong> that delivers the connectivity you need while respecting your property.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>Installation within 10 working days.</strong> Professional, tested, guaranteed.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">5.</span>
                <span>
                  <strong>Ongoing support.</strong> Engineer support included if anything needs attention.
                </span>
              </li>
            </ol>

            <div className="bg-muted/30 border border-border rounded-lg p-6 my-8">
              <h3 className="font-medium text-foreground mb-4">Pricing</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Integra Pro (bonded 4G/5G)</span>
                  <span className="font-semibold text-foreground">£110/month</span>
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
                12-month agreement. Shorter terms available on request.
              </p>
            </div>

            <h2 className="text-2xl font-normal mb-6">Real Installation: Listed House in Stow-on-the-Wold</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              An historic property in Stow-on-the-Wold had strict constraints: listed building status, conservation area designation, and strong local planning requirements.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The owners needed professional broadband for a home-based business. BT fibre was vaguely promised years ahead. Starlink alone had latency issues for their work. Visible infrastructure was not acceptable.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We installed Integra Pro (bonded EE and Vodafone) with roof-mounted antenna completely hidden from street view and cabling routed through the roof space. Result: 240Mbps combined speed, zero visible infrastructure changes, full compliance with conservation guidelines. Cost: £110/month. The property maintains its character while delivering world-class connectivity.
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

      <GradientBand fromColor="hsl(0 0% 98%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices services={relatedServices} heading="Our Solutions" subheading="Enterprise-grade connectivity tailored to your region." />

      {/* Other Locations */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold mb-3 text-center">Coverage in Other Regions</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">Find rural broadband solutions across the UK.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <Link to="/locations/rural-broadband-north-west" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">North West</span>
            </Link>
            <Link to="/locations/rural-broadband-essex-hertfordshire" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Essex & Herts</span>
            </Link>
            <Link to="/locations/rural-broadband-kent" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Kent</span>
            </Link>
            <Link to="/locations/rural-broadband-sussex-surrey" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Sussex & Surrey</span>
            </Link>
            <Link to="/locations/rural-broadband-somerset-devon" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Somerset & Devon</span>
            </Link>
            <Link to="/locations/rural-broadband-yorkshire" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Yorkshire</span>
            </Link>
            <Link to="/locations/construction-site-broadband-london" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">London Construction</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Check What's Available at Your Location
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">
              Send us your coordinates from Google Maps. We'll survey your site and send a detailed report within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/check">Check Availability</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cotswolds;
