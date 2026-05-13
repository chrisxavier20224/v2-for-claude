import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight, HelpCircle, Code, Zap, Wifi, Tag } from "lucide-react";
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
    title: "Integra SD-WAN",
    description: "Intelligent network optimisation for multi-site connectivity.",
    icon: Code,
    href: "/connectivity/integra-sd-wan",
  },
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
    title: "Pricing",
    description: "Transparent, competitive pricing for all our connectivity services.",
    icon: Tag,
    href: "/pricing",
  },
];

const NorthWest = () => {
  const faqs = [
    {
      q: "How long does installation take?",
      a: "We typically complete Integra Pro or Starlink SD-WAN installations within 14 days of your survey. Our engineer visits your site once to mount equipment, run cabling, and configure your router. If you're on our priority list, we can often achieve faster turnaround.",
    },
    {
      q: "Do you cover my specific town in Lancashire or Cheshire?",
      a: "We cover all of Greater Manchester, Lancashire, Cheshire, Merseyside, and Cumbria. This includes Wigan, Bolton, Preston, Lancaster, Manchester, Liverpool, Chester, and Kendal. If you have any mobile signal on your property—EE, Vodafone, O2, or Three—we can almost certainly deliver broadband. Send us your coordinates and we'll confirm coverage within 24 hours.",
    },
    {
      q: "What happens if equipment breaks?",
      a: "Engineer support is included. All hardware is fully maintained throughout your contract. If anything fails, we replace it at no cost. No charges for site visits, parts, or labour — it's all included in your monthly service.",
    },
    {
      q: "Can I get speeds over 200Mbps in rural Merseyside?",
      a: "Yes, in most areas. Bonded 4G/5G across EE and O2 typically delivers 150-300Mbps depending on proximity to cell towers. For properties with Starlink, you'll achieve up to 250Mbps downloads. We test actual speeds at your location before confirming—not theoretical speeds.",
    },
    {
      q: "Is there a long-term contract?",
      a: "Our standard agreement is 12 months. After that, you can cancel with 30 days' notice. Shorter initial terms are available on request.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Rural Broadband North West | Integra Networks"
        description="Broadband for North West. Lancashire, Greater Manchester, Cheshire, Merseyside. 14-day install."
        keywords="rural broadband North West, broadband Lancashire, Cheshire internet, Wigan broadband, Greater Manchester WiFi, rural connectivity"
        url="/locations/rural-broadband-north-west"
      />
      <SchemaMarkup
        data={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Integra Networks — North West",
            description: "Fast, reliable broadband for Lancashire, Greater Manchester, Cheshire, Merseyside, and Cumbria. Integra Pro bonded 4G/5G and Starlink solutions. 14-day installation.",
            url: "https://integra-networks.co.uk/locations/rural-broadband-north-west",
            areaServed: {
              "@type": "Place",
              name: "North West",
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
              Rural Broadband North West
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We're based in Wigan—your local ISP. Fast, reliable broadband across Lancashire, Greater Manchester, Cheshire, Merseyside, and Cumbria.
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
              The North West Broadband Problem
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Rural properties across Wigan, Bolton, Preston, Lancaster, and beyond face the same frustration: BT promised fibre years ago. You're stuck with 4G that drops in buildings, satellite that fails in rain, or nothing at all.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The North West has difficult terrain—moorland, valleys, densely wooded areas. Running fibre through this landscape costs BT thousands per mile. They focus on towns. Your country home waits.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We've installed at over 60 North West properties. We know Cumbrian fell country, Lancashire moorland, Cheshire farmland, and the valleys around Chester. We know which networks reach which locations. We know it works.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-medium text-foreground mb-3">
                Why Standard Fibre Isn't Coming Soon
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    BT's rollout prioritizes commercial viability. Rural North West areas are expensive and low-margin.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Moorland, fell country, and valley terrain make infrastructure prohibitively costly.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Promised dates for villages like Kendal keep slipping. Your timeline is 5+ years.
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
                  We bond EE and O2 (or O2 and Three, depending on your location). The North West has solid multi-network coverage in most rural areas.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Typical result: 180-300Mbps combined speed, low latency, weather-independent.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Starlink for Exposed Locations
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're on high ground with southern sky visibility, Starlink delivers up to 250Mbps. Perfect for Pennine hillside properties or Lake District cottages.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  We add our 4G/5G backup for reliability—Starlink SD-WAN.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Enterprise Solutions
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Farms, holiday parks, and rural businesses need uptime. We offer bonded cellular with 99.5% SLA and priority support.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Includes engineer support and equipment replacement.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">How We Work in the North West</h2>
            <ol className="space-y-4 text-muted-foreground text-sm">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>You send coordinates</strong> from Google Maps of your property (Wigan, Chester, Lancaster, wherever).
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We survey.</strong> Our team maps nearby cell towers, tests line-of-sight, identifies which networks actually reach you.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>We recommend.</strong> Integra Pro, Starlink, or Starlink SD-WAN based on your location and needs.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>We install in 14 days.</strong> One engineer visit. Mount antenna, run cabling, test and configure.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">5.</span>
                <span>
                  <strong>You're online.</strong> Business-grade internet, no waiting.
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
                No long-term contract. Cancel anytime.
              </p>
            </div>

            <h2 className="text-2xl font-normal mb-6">Real Installation: Lake District Area</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A holiday cottage business near Windermere relied on Starlink, but guests complained about latency and streaming issues. The property had strong EE signal but weak O2.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We recommended Integra Pro (bonded EE and O2). Installation: one day. Result: 250Mbps combined speed, rock-solid WiFi across the property, guests happy. Cost: £110/month.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The business now runs online bookings, handles payments, and streams 4K video to guests without drops.
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
            <Link to="/locations/rural-broadband-essex-hertfordshire" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Essex & Herts</span>
            </Link>
            <Link to="/locations/rural-broadband-sussex-surrey" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Sussex & Surrey</span>
            </Link>
            <Link to="/locations/rural-broadband-kent" className="px-4 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center">
              <span className="text-sm font-medium">Kent</span>
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

export default NorthWest;
