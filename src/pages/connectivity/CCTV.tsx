import { Link } from "react-router-dom";
import { Camera, Eye, Wifi, CircleCheckBig, ArrowLeft, Lock, Zap, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import RelatedServices from "@/components/shared/RelatedServices";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/sectors/business-parks-hero.jpg";
import surveyImg from "@/assets/sectors/business-parks-outdoor.jpg";
import networkImg from "@/assets/sectors/construction-sdwan.jpg";
import monitoringImg from "@/assets/sectors/business-parks-tenants.jpg";

const painPoints = [
  {
    icon: Camera,
    title: "Blind Spots Across Your Site?",
    description: "A single camera won't cover your warehouse, port, or business park. We survey your entire site to identify coverage gaps and position cameras for maximum visibility.",
  },
  {
    icon: Eye,
    title: "Can't Access Footage When You Need It?",
    description: "CCTV locked in a DVR you can't reach defeats the purpose. We integrate recording with cloud access so you can view live feeds and playback from anywhere, instantly.",
  },
  {
    icon: Lock,
    title: "Worried About Liability and Security?",
    description: "Professional CCTV with high-resolution recording, night vision, and secure storage protects your business and provides evidence when it matters.",
  },
];

const benefitItems = [
  "Professional Site Survey — Cameras Positioned for Complete Coverage",
  "Commercial-Grade Hardware — Varifocal & IR Night Vision Cameras",
  "PoE Network Infrastructure Built In — No Separate Power Cables",
  "NVR Recording with Cloud Access — View Live & Recorded Footage Remotely",
  "Remote Access via Integra Cloud — View Live & Recorded Footage Anywhere",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const checklistItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const cctvServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CCTV as a Service",
  provider: {
    "@type": "Organization",
    name: "Integra Networks",
    url: "https://integra-networks.co.uk",
  },
  description: "Managed CCTV surveillance service for warehouses, ports, construction sites and business parks. Commercial-grade cameras with night vision, PoE network infrastructure, cloud recording and remote access.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Security Camera Installation",
  url: "https://integra-networks.co.uk/connectivity/cctv",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "1500",
  },
};

const cctvBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://integra-networks.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Connectivity",
      item: "https://integra-networks.co.uk/connectivity",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CCTV as a Service",
      item: "https://integra-networks.co.uk/connectivity/cctv",
    },
  ],
};

const relatedServices = [
  {
    icon: Wifi,
    title: "Business WiFi",
    description: "Professional mesh networks for commercial properties.",
    href: "/connectivity/business-wifi",
  },
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Secure, intelligent networking for enterprises.",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Building2,
    title: "Construction Sites",
    description: "Temporary connectivity solutions for active projects.",
    href: "/sectors/construction-sites",
  },
];

const CCTV = () => {
  return (
    <PageLayout>
      <SEO
        title="CCTV as a Service — Professional Surveillance for Warehouses & Business Sites"
        description="Managed CCTV for warehouses, ports, construction sites, and business parks. Commercial-grade cameras, PoE network, remote cloud access, and UK-based support included."
        keywords="CCTV service, managed CCTV, warehouse security cameras, business CCTV, port security, commercial CCTV, night vision cameras, cloud CCTV monitoring"
        url="/connectivity/cctv"
      />
      <SchemaMarkup data={cctvServiceSchema} />
      <SchemaMarkup data={cctvBreadcrumbSchema} />

      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional CCTV coverage for business sites" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Services <ArrowLeft className="h-3 w-3 rotate-180" /> CCTV
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Complete CCTV as a Managed Service.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Professional surveillance for warehouses, ports, construction sites, and business parks. We handle the survey, installation, and maintenance — you get security and peace of mind.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className="text-center">
                <motion.div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                  <point.icon className="h-10 w-10" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-heading-3 text-surface-dark-foreground mb-3">{point.title}</h3>
                <p className="text-surface-dark-muted">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Camera className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">We survey. We install. We support. You own the security.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't rented CCTV that you hand back when your contract ends. We conduct a professional site survey to identify camera positions that cover entry points, aisles, external perimeters, and blind spots. Then we install commercial-grade cameras with varifocal lenses, integral IR for night vision, and weatherproof housings — all networked via PoE so you never need to run separate power cables across your site.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={surveyImg} alt="Professional CCTV site survey and planning" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* NETWORK — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={networkImg} alt="PoE network infrastructure for CCTV" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Network infrastructure that scales with you.</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                All cameras run over PoE — no separate power supplies, no spaghetti of cabling. We deploy commercial-grade PoE switches with multimode fibre links and proper cable management. Your CCTV network integrates seamlessly with your existing Integra infrastructure: SD-WAN, WiFi, and connectivity all managed from one place.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Eye className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">See everything, from anywhere.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your CCTV feeds record to an NVR in your comms cabinet or office — with full remote access via Integra Cloud. View live feeds from any device, any location. Retrieve recorded footage instantly. Set motion alerts and notifications. All managed through our secure cloud platform with UK-based support when you need it.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={monitoringImg} alt="Remote CCTV monitoring and cloud access" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <img src={networkImg} alt="24/7 CCTV monitoring and support" className="w-full h-auto object-cover aspect-video" loading="lazy" />
              </motion.div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Service Model</p>
                <h2 className="text-heading-1 text-surface-dark-foreground mb-4">Managed CCTV-as-a-Service or Ownership?</h2>
                <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                  Choose your model. Buy the system outright and own it permanently — we install and support on a per-incident basis. Or go with Managed CCTV-as-a-Service: fixed monthly fee, everything included. We handle maintenance, firmware updates, and ongoing support. No surprises, no upfront capital spend. Whichever you choose, support is via phone and WhatsApp, with 2-4 hour response times from our UK-based team.
                </p>
                <motion.ul className="space-y-4 mb-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
                  {benefitItems.map((item) => (
                    <motion.li key={item} variants={checklistItem} className="flex items-start gap-3">
                      <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-surface-dark-foreground font-medium">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      <Section size="large">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
              <Wifi className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">Integration with Your Integra Network.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CCTV doesn't exist in isolation. If you're already using Integra for SD-WAN connectivity or WiFi, we integrate your CCTV system into the same managed infrastructure. One dashboard for all your network services. One support number. Consolidated billing. Your CCTV feeds travel over the same secure, monitored network that handles your business traffic.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <CustomerLogoBar />

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices services={relatedServices} heading="Related Services" subheading="Explore our full range of connectivity solutions." />

      {/* RELATED CONTENT */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedContent
        stories={["seacon-group"]}
        sectors={["business-parks", "construction-sites"]}
        dark
      />

      {/* CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Professional CCTV that actually works.
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">
              Complete site survey, commercial-grade hardware, remote cloud access, and UK-based support — all included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link to="/contact">Request a Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
                <Link to="/availability-checker">Check Coverage</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default CCTV;
