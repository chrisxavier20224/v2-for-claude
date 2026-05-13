import { Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowRight, HelpCircle, Zap, Hammer, Code, Tag } from "lucide-react";
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

const londonLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Integra Networks - London",
  description: "Business connectivity solutions for construction sites, offices and temporary locations across London. Fast deployment, 4G/5G bonding, site cabins.",
  areaServed: {
    "@type": "City",
    name: "London",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, 86-90 Paul Street",
    addressLocality: "London",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
  telephone: "+44-330-043-4904",
  email: "sales@integra-networks.co.uk",
  url: "https://www.integra-networks.co.uk",
};

const relatedServices = [
  {
    title: "Leased Lines",
    description: "Dedicated fibre connectivity for businesses requiring maximum reliability.",
    icon: Zap,
    href: "/connectivity/leased-lines",
  },
  {
    title: "Construction Sites",
    description: "Fast-deployment broadband for temporary sites and project locations.",
    icon: Hammer,
    href: "/sectors/construction-sites",
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

const London = () => {
  const faqs = [
    {
      q: "Can you provide broadband for temporary construction sites across London?",
      a: "Yes. We specialize in fast deployment for temporary sites—City construction, Canary Wharf projects, Stratford developments, Croydon office builds. We can have equipment installed within 48-72 hours for urgent sites. Bonded 4G/5G delivers reliable speeds (150-280Mbps) without needing fixed infrastructure.",
    },
    {
      q: "What about site cabins and temporary office locations?",
      a: "Perfect use case for Integra Pro. Construction site cabins often lack mains broadband. We install external antenna, run cable to your cabin, and you have professional-grade WiFi. No need to wait for BT. Fast deployment, competitive pricing, flexible terms.",
    },
    {
      q: "Do you support multiple buildings on a construction site?",
      a: "Yes. Large sites across London often have multiple cabins, storage areas, and compound buildings. We can design mesh WiFi networks that cover your entire site, or multiple independent Integra Pro connections if you need isolated networks for security.",
    },
    {
      q: "What about data security on construction sites?",
      a: "Critical concern on London projects. We offer bonded cellular which is inherently more secure than fixed broadband. We can also configure separate WiFi networks for different areas of your site, set bandwidth limits, and provide admin-level control.",
    },
    {
      q: "How much flexibility do you have for emergency deployment?",
      a: "High. For urgent London projects, we can prioritize installation within 48 hours. Simply call with your site coordinates and requirements. We understand construction timelines are tight. Flexible terms available for construction projects.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Construction Broadband London"
        description="Broadband for London construction. City, Canary Wharf, Stratford, Croydon. 48-hour install."
        keywords="construction broadband London, temporary internet, site broadband, Canary Wharf, City broadband, Croydon, Stratford"
        url="/locations/construction-site-broadband-london"
      />
      <SchemaMarkup
        data={[
          londonLocalBusinessSchema,
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
              Construction Site Broadband London
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Fast deployment for temporary sites across London. Canary Wharf, City, Stratford, Croydon. 48-hour installation. No fixed infrastructure needed.
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
              Construction Sites Need Fast Broadband Deployment
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              London construction projects—City office towers, Canary Wharf developments, Stratford regeneration, Croydon expansion—all need broadband. Fast.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Traditional fixed broadband takes weeks or months. BT infrastructure requests are low-priority for temporary sites. Meanwhile, your site cabins are offline, your teams are unproductive, and project coordination suffers.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We've deployed to London construction sites across the City, Canary Wharf, Stratford, and Croydon. We understand site requirements—fast deployment, flexible duration, reliable performance, security. We specialize in getting broadband to temporary locations where traditional providers can't.
            </p>

            <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
              <h3 className="font-medium text-foreground mb-3">
                Why Construction Sites Need Different Solutions
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Temporary nature means fixed infrastructure is wasteful. Sites move, change, or close.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    BT and fibre providers deprioritize temporary locations. Weeks or months of waiting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Site cabins, storage containers, and mobile offices lack broadband connections.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Security and data isolation matter on large projects. WiFi needs proper access controls.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-normal mb-6">Solutions for London Construction Sites</h2>

            <div className="space-y-6 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Integra Pro (Fast Deployment)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bonded 4G/5G cellular connectivity. Excellent coverage across London's urban and semi-urban areas, including major construction zones.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Deploy in 48-72 hours. 150-280Mbps speeds. No fixed infrastructure needed. Flexible terms available.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Multi-Building Mesh Networks
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Large construction sites often have multiple cabins, canteens, storage areas, and security huts. We design mesh WiFi that covers your entire site compound.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Seamless roaming across your site. All buildings on one primary Integra Pro connection.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="font-medium text-foreground mb-2">
                  Secure Network Segmentation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Large London projects need separate networks for general staff, management, and sensitive operations. We configure multiple WiFi networks with different access controls.
                </p>
                <p className="text-sm text-muted-foreground font-medium text-foreground">
                  Bandwidth management and usage limits available. Full admin control.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-normal mb-6">Emergency Deployment for London Projects</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Some projects are urgent. Construction schedules slip, site timelines compress, and you need broadband now, not in two weeks.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              For emergency London projects, contact us directly. We can prioritize installation within 48 hours for most areas. We understand construction means tight deadlines.
            </p>

            <ol className="space-y-4 text-muted-foreground text-sm mb-8">
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">1.</span>
                <span>
                  <strong>Call with site coordinates</strong> and deployment urgency. We assess availability immediately.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">2.</span>
                <span>
                  <strong>We confirm 48-72 hour deployment</strong> and pricing. No long negotiations.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">3.</span>
                <span>
                  <strong>Engineer installs on your timeline.</strong> We coordinate around your site schedule.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold text-foreground min-w-8">4.</span>
                <span>
                  <strong>Your site is online.</strong> Standard 12-month agreement, shorter terms available.
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
                  <span>Mesh WiFi extension (per node)</span>
                  <span className="font-semibold text-foreground">+£50/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Installation (standard site)</span>
                  <span className="font-semibold text-foreground">£2,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency deployment (48hr)</span>
                  <span className="font-semibold text-foreground">+£500</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Standard 12-month agreement. Shorter terms available for construction projects.
              </p>
            </div>

            <h2 className="text-2xl font-normal mb-6">Real Installation: Major Canary Wharf Development</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A large mixed-use development at Canary Wharf had site offices, multiple storage containers, and a construction compound that needed broadband. BT estimated 8-10 weeks for fibre availability.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Site manager called us on Monday. We confirmed 48-hour emergency deployment. By Wednesday morning, our engineer had installed Integra Pro (bonded EE and Vodafone) with mesh WiFi covering all compound buildings.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Result: 260Mbps combined speed, full site coverage, three separate WiFi networks (staff, management, security). Cost: £110/month plus £50 per mesh node. The site saved weeks of waiting and got fully productive immediately. When the project moved six months later, they cancelled without penalty.
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

export default London;
