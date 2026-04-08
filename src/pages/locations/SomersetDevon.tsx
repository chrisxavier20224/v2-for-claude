import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight, HelpCircle, Satellite, Code, Users, Signal } from "lucide-react";
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

const SomersetDevon = () => {
  const faqs = [
    {
      q: "I'm in Devon or Somerset with a holiday cottage business. How can Integra help?",
      a: "Holiday cottage guests expect WiFi. Integra Pro delivers fast, reliable connectivity that keeps guests happy and enables you to run bookings, take payments, and manage your business online. We've installed at multiple holiday rental properties across Devon and Somerset. Typical cost: £110/month for professional-grade WiFi that guests rave about.",
    },
    {
      q: "What speeds should I expect in rural Devon or Somerset?",
      a: "Integra Pro (bonded 4G/5G) typically delivers 150-280Mbps depending on proximity to cell towers. Devon and Somerset have good network coverage in most rural areas. Starlink adds up to 250Mbps for properties with southern sky visibility. We test actual speeds at your location before confirming—no guesses.",
    },
    {
      q: "Is Starlink SD-WAN worth it for Devon or Somerset properties?",
      a: "Yes, especially if you have southern sky visibility and weather reliability concerns. Starlink SD-WAN combines Starlink's speed (up to 250Mbps) with our 4G/5G backup. If Starlink drops in rain, traffic automatically switches to bonded 4G/5G. Ideal for rural hospitality businesses, farms, and remote workers.",
    },
    {
      q: "How long from survey to installation?",
      a: "14 days. We typically survey within 24-48 hours of your coordinates, send a quote, and schedule installation. One engineer visit to mount equipment, run cabling, and test everything. You're online within two weeks.",
    },
    {
      q: "Do you cover Dartmoor, Exmoor, and coastal areas?",
      a: "Yes. We cover all of Devon and Somerset, including Dartmoor, Exmoor, and coastal regions from Minehead to Dartmouth. We've completed over 100 installations across both counties. If you have any mobile signal, we can likely reach you.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Broadband Devon & Somerset"
        description="Broadband for Devon and Somerset. Taunton, Exeter, Barnstaple, Torrington. 100+ sites."
        keywords="rural broadband Devon, Somerset broadband, Exeter internet, Taunton, Barnstaple, holiday cottage WiFi, rural connectivity"
        url="/locations/rural-broadband-somerset-devon"
      />
      <SchemaMarkup
        data={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Integra Networks — Devon & Somerset",
            description: "Broadband for Devon and Somerset rural properties, farms, holiday cottages. Taunton, Exeter, Barnstaple, Torrington. 100+ installations. Integra Pro and Starlink solutions.",
            url: "https://www.integra-networks.co.uk/locations/rural-broadband-somerset-devon",
            areaServed: {
              "@type": "Place",
              name: "Devon & Somerset",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "Integra Networks",
              url: "https://www.integra-networks.co.uk",
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
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5"
            >
              <MapPin className="h-3.5 w-3.5" /> Coverage Areas
            </Link>
            <h1 className="text-heading-1 md:text-display-sm text-white max-w-3xl mb-6">
              Rural Broadband Devon & Somerset
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Our largest customer region. Over 100 successful installations across Devon and Somerset. Fast, reliable broadband for rural properties.
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
              Why Devon and Somerset Are Our Core Region
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Devon and Somerset are our biggest customer concentration for good reason: the broadband gap here is real, and our solutions work.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              BT's fibre rollout focuses on cities (Exeter, Taunton, Plymouth). Rural Devon and Somerset—Dartmoor villages, Exmoor farms, coastal properties, moorland homesteads—are deprioritized. Promised dates slip. You're stuck waiting or relying on satellite that fails in winter.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We've installed at over 100 Devon and Somerset properties. We understand Dartmoor terrain, coastal challenges, valley signal shadows, and which solutions actually work in each area. We know your region better than any other ISP.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-medium text-foreground mb-3">
                What Makes Devon and Somerset Challenging
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Moorland terrain (Dartmoor, Exmoor) creates coverage gaps between cell towers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Coastal properties face salt spray, difficult terrain, and remote locations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Fibre infrastructure investment is low-margin. BT skips rural properties entirely.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Winter weather impacts satellite reliability. Rain, sleet, and cloud cause dropouts.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-normal mb-6">Solutions That Work Here</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Integra Pro (Bonded 4G/5G)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We bond EE and Vodafone (or O2 and Three, depending on location). Devon and Somerset have solid multi-network coverage in most areas.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Typical result: 180-280Mbps combined speed, weather-independent, zero winter failures.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Starlink SD-WAN (Speed Plus Backup)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Your Starlink dish plus our 4G/5G bonding backup. Starlink gives you speed (up to 250Mbps). Our 4G/5G backup ensures reliability if weather impacts the satellite link.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Perfect for properties with southern sky but weather concerns.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Enterprise SLA (Business Critical)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For holiday rental businesses, farms, and operations needing uptime guarantees, we offer 99.5% SLA with priority support.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Engineer support and equipment replacement included if anything needs attention.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">How We Work in Devon and Somerset</h2>
            <ol className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>You send coordinates</strong> from Google Maps of your Devon or Somerset property.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We survey your site</strong> within 24-48 hours. Map nearby towers, test signal, identify which networks reach you.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>We recommend the best solution</strong> based on your location and needs. Integra Pro, Starlink SD-WAN, or Enterprise.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>Installation within 14 days.</strong> Professional engineer installs, tests, and confirms speeds.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">5.</span>
                <span>
                  <strong>You're online.</strong> Ongoing support included. We're your local ISP.
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

            <h2 className="text-2xl font-normal mb-6">Real Installation: Holiday Cottage Near Dartmouth</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A successful holiday rental operator near Dartmouth with multiple cottages on the property needed WiFi that guests would rave about. BT fibre was 4+ years away.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The property had excellent EE signal and decent Vodafone. We recommended Integra Pro (bonded EE and Vodafone). Installation: one day.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Result: 250Mbps combined speed, mesh WiFi across all cottages, guests happy, booking conversion improved. Cost: £110/month. This customer now runs their entire business—bookings, payments, guest communication—without a single connectivity issue.
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
            <Link to="/locations/rural-broadband-yorkshire" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Yorkshire</span>
            </Link>
            <Link to="/locations/construction-site-broadband-london" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">London Construction</span>
            </Link>
            <Link to="/locations/rural-broadband-cotswolds" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Cotswolds</span>
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
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default SomersetDevon;
