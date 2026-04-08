import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Zap, Shield, Upload, Globe, Wifi, ChevronDown, Home, Landmark, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import RelatedServices from "@/components/shared/RelatedServices";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/sdwan-hero.jpg";
import speedsImg from "@/assets/connectivity/sdwan-speeds.jpg";
import installImg from "@/assets/connectivity/sdwan-install.webp";
import stableImg from "@/assets/connectivity/sdwan-stable.jpg";
import aerialImg from "@/assets/connectivity/sdwan-aerial.webp";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const painPoints = [
  {
    question: "Tired of waiting for the Fibre rollout?",
    answer: "Fibre rollouts are often delayed by years. We install in under 14 days — and you can cancel if fibre becomes available.",
  },
  {
    question: "Paying thousands for Openreach construction?",
    answer: "We offer flat-rate installation from £2,200 with no hidden costs. No excess construction charges, no wayleave delays.",
  },
  {
    question: "Can't afford internet outages?",
    answer: "We use multiple networks for built-in redundancy. If one drops, the other takes over automatically. 99.5% uptime SLA backed by compensation.",
  },
];

const features = [
  {
    icon: Zap,
    eyebrow: "SD-WAN Technology",
    title: "Fibre-Like Speeds, No Fibre Required",
    description: "We bond multiple 4G/5G connections through our datacentre, delivering combined speeds up to 350Mbps. Rain doesn't affect cellular — unlike satellite alternatives.",
    img: speedsImg,
    imgAlt: "SD-WAN fibre-like speeds",
    reverse: false,
  },
  {
    icon: Wifi,
    eyebrow: "Quick Installation",
    title: "Installed in Under 14 Days",
    description: "Our engineer arrives, tests 4G/5G signal from nearby towers, mounts radios, installs our commercial-grade router, and connects to your network. You're online same day.",
    img: installImg,
    imgAlt: "Quick SD-WAN installation",
    reverse: true,
  },
  {
    icon: Shield,
    eyebrow: "Always-On Connectivity",
    title: "Dual-Network Redundancy",
    description: "Two 4G/5G connections from different operators (O2, Vodafone, EE, Three). If one drops, the other takes over instantly. 99.5% uptime SLA — not 'best effort'.",
    img: stableImg,
    imgAlt: "Stable internet connectivity",
    reverse: false,
  },
  {
    icon: Upload,
    eyebrow: "Lightning Fast Uploads",
    title: "100Mbps+ Upload Speeds",
    description: "Upload large CAD files, construction plans, and designs in minutes — not hours. 100Mbps+ upload is significantly faster than Starlink's 10-15Mbps.",
    img: aerialImg,
    imgAlt: "SD-WAN aerial connectivity infrastructure",
    reverse: true,
  },
  {
    icon: Globe,
    eyebrow: "Seamless IP Integration",
    title: "Static IP for CCTV, VPN & More",
    description: "Static IPs available from £10/month on any tier. Perfect for CCTV, VPN, firewalls, and remote access.",
    img: stableImg,
    imgAlt: "Stable connectivity for CCTV and VPN",
    reverse: false,
  },
];


const pricingTiers = [
  { name: "Integra Home", speed: "Speeds vary by location", price: "55", staticIp: "Static IP £10/month", install: "£1,250", features: ["Single-network 4G/5G", "Professional installation"], link: "/connectivity/integra-home" },
  { name: "Starlink SD-WAN", speed: "Variable (Starlink + 4G/5G)", price: "80", staticIp: "Static IP £10/month", install: "£2,200", features: ["Starlink + 4G/5G failover", "You pay Starlink direct for dish"] },
  { name: "Integra Pro", speed: "Up to 350Mbps", price: "135", staticIp: "Static IP £10/month", install: "£1,500", originalInstall: "£2,200", features: ["Multi-network bonding", "Priority support"], popular: true },
  { name: "Integra Ultrafast", speed: "Up to 450Mbps", price: "195", staticIp: "Static IP £10/month", install: "£2,800", features: ["Three-network bonding", "Maximum redundancy"] },
  { name: "Enterprise", speed: "Up to 500Mbps", price: "400", staticIp: "Static IP £10/month", install: "£3,300", features: ["99.99% uptime SLA", "Dedicated account manager"] },
];

const faqs = [
  { q: "Who can benefit from Integra SD-WAN?", a: "Anyone in a location where fibre broadband isn't available or where existing speeds are insufficient. This includes homeworkers, rural businesses, construction sites, holiday lets, and more." },
  { q: "How can I determine the speed you can offer at my property?", a: "Use our free Availability Checker tool or get in touch with our team. We'll assess your location and provide an estimated speed range." },
  { q: "Is a property visit necessary for service assessment?", a: "Not always. We can often assess your property remotely, but for complex installations our engineers may conduct a desktop survey." },
  { q: "How much data do I get?", a: "With multi-network connections, you're looking at around 1.8TB of data per month — more than enough for a busy household with kids streaming and gaming, or a business running video calls and cloud apps all day. There's a fair usage policy, but in practice the vast majority of customers never come close to hitting it." },
  { q: "How can Integra ensure consistent card payment terminal performance in rural locations?", a: "Our Integra Pro and Ultrafast tiers include automatic failover, which provides dedicated redundancy specifically for point-of-sale systems and card payment terminals." },
  { q: "I need a static IP for my CCTV requirements.", a: "Static IPs are available on all tiers for £10/month. Essential for CCTV, VPNs, firewalls, and remote access." },
  { q: "Will Integra's service cover my entire property, even if the walls are thick?", a: "In most properties, our mesh network provides full coverage. If your walls are particularly thick (old stone, solid brick), hardwired cabling may be needed — this is out of scope of the standard install but can be priced on a site visit, or identified beforehand if you share a quick video walkthrough of your property. Either way, we'll find a solution." },
  { q: "Do you provide CCTV services?", a: "We install and support CCTV systems — we don't monitor them. Our CCTV service includes professional installation, cloud remote access via Integra Cloud, and full technical support." },
];

const relatedServices = [
  {
    title: "Leased Lines",
    description: "Dedicated fibre connectivity for businesses needing guaranteed speeds and uptime SLAs.",
    href: "/connectivity/leased-lines",
    icon: Landmark,
    badge: "Enterprise",
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi networks surveyed, installed, and monitored for complete coverage.",
    href: "/connectivity/business-wifi",
    icon: Wifi,
  },
  {
    title: "Unified Communications",
    description: "Integrated voice, video, and messaging over your SD-WAN connectivity.",
    href: "/connectivity/unified-communications",
    icon: Phone,
  },
];

const sdwanServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integra SD-WAN",
  provider: {
    "@type": "Organization",
    name: "Integra Networks",
    url: "https://integra-networks.co.uk",
  },
  description: "Bonded 4G/5G connectivity delivering fibre-like speeds up to 500Mbps without requiring fixed fibre infrastructure. Installed in under 14 days with 99.5% uptime SLA.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Managed Network Connectivity",
  url: "https://integra-networks.co.uk/connectivity/integra-sdwan",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    offerCount: "5",
    lowPrice: "80",
    highPrice: "400",
  },
};

const sdwanBreadcrumbSchema = {
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
      name: "Integra SD-WAN",
      item: "https://integra-networks.co.uk/connectivity/integra-sdwan",
    },
  ],
};

const IntegraSDWAN = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEO
        title="Integra SD-WAN"
        description="Fast internet without fibre. Bonded 4G/5G, 14-day install, 99.5% SLA, from £80/month."
        keywords="SD-WAN, bonded 4G 5G, rural internet, alternative to fibre, business connectivity, fast broadband"
        url="/connectivity/integra-sdwan"
      />
      <SchemaMarkup data={sdwanServiceSchema} />
      <SchemaMarkup data={sdwanBreadcrumbSchema} />

      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Integra SD-WAN high-speed internet" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Integra SD-WAN
              </span>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Fast Internet. <span className="text-primary">No Fibre Required.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Bonded 4G/5G cellular delivering up to 500Mbps, installed in under 14 days — with 99.5% uptime and UK-based support.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                  <Link to="/check">Check Availability <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="link" size="lg" className="text-white hover:text-white/80 font-medium">
                  <Link to="/contact">Or get in touch</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* April Promo Banner */}
      <section className="bg-primary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 md:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="inline-flex items-center gap-2 bg-white text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg">
              Limited Time
            </span>
            <p className="text-white text-sm md:text-base font-medium">
              <span className="font-bold">Save £700</span> on Integra Pro installation this April — <span className="font-bold underline decoration-2">now just £1,500 + VAT</span> (was £2,200).
              Limited installation slots available.
            </p>
            <Button asChild size="sm" className="bg-white text-primary hover:bg-white/90 whitespace-nowrap shadow-lg font-bold">
              <Link to="/check" className="inline-flex items-center gap-1.5 text-xs font-semibold">
                Check Availability <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Fibre-Free Internet</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              We solve the rural internet problem.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Forget waiting years for Fibre. We use bonded 4G/5G cellular networks to deliver high-speed, reliable internet in 14 days — with backup and failover built in.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <h3 className="text-heading-3 text-surface-dark-foreground mb-3">{point.question}</h3>
                <p className="text-surface-dark-muted">{point.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {features.map((feature, i) => (
        <div key={i}>
          <GradientBand fromColor={i % 2 === 0 ? "hsl(222 47% 11%)" : "hsl(0 0% 100%)"} toColor={i % 2 === 0 ? "hsl(0 0% 100%)" : "hsl(222 47% 11%)"} />
          <section className={i % 2 === 0 ? "bg-background py-16 md:py-24" : "bg-surface-dark py-16 md:py-24"}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
                <AnimatedSection direction={feature.reverse ? "right" : "left"} delay={0.1} className={feature.reverse ? "order-2 lg:order-2" : ""}>
                  <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                    <feature.icon className="h-9 w-9" strokeWidth={1.5} />
                  </motion.div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{feature.eyebrow}</p>
                  <h2 className={`mb-4 text-heading-1 md:text-display-sm ${i % 2 === 0 ? "text-foreground" : "text-surface-dark-foreground"}`}>{feature.title}</h2>
                  <p className={`text-lg leading-relaxed ${i % 2 === 0 ? "text-muted-foreground" : "text-surface-dark-muted"}`}>{feature.description}</p>
                </AnimatedSection>
                {feature.img && (
                  <AnimatedSection direction={feature.reverse ? "left" : "right"} delay={0.2} className={feature.reverse ? "order-1 lg:order-1" : ""}>
                    <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                      <img src={feature.img} alt={feature.imgAlt} className="w-full h-auto object-cover aspect-video" loading="lazy" />
                    </motion.div>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </section>
        </div>
      ))}

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(0 0% 100%)" />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Pricing</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Plans for every scenario.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Choose the speed and redundancy that fits your budget. All plans include UK-based support and 99.5% SLA.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`rounded-xl p-6 border transition-all ${
                  tier.popular
                    ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <h3 className="text-lg font-medium text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.speed}</p>
                <div className="mb-1">
                  <span className="text-3xl font-medium text-foreground">
                    {'pricePrefix' in tier && (tier as any).pricePrefix && <span className="text-lg">{(tier as any).pricePrefix}</span>}
                    £{tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">+VAT</p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs text-muted-foreground font-medium">{tier.staticIp}</p>
                  <p className="text-xs text-muted-foreground font-medium">
                    Installation: {tier.originalInstall ? (
                      <><span className="line-through opacity-50">{tier.originalInstall}</span> <span className="text-status-ok font-bold">{tier.install}</span></>
                    ) : tier.install} +VAT
                  </p>
                  {tier.originalInstall && (
                    <div className="inline-flex items-center gap-1 bg-status-ok/15 border border-status-ok/30 text-status-ok px-2 py-0.5 rounded-md mt-1">
                      <span className="text-[10px] font-bold">SAVE £700</span>
                    </div>
                  )}
                  {tier.features.map((feature, i) => (
                    <p key={i} className="text-xs text-muted-foreground font-medium">
                      {feature}
                    </p>
                  ))}
                </div>
                <Button asChild size="sm" variant={tier.popular ? "default" : "outline"} className={tier.popular ? "" : "border-border text-foreground hover:bg-white/5"}>
                  <Link to="/check">Check Availability</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm mb-4">Unsure what option is right for you?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/contact">Speak to our team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/pricing">See All Pricing</Link>
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 text-center mt-6">
            All prices exclude VAT. Installation costs can vary subject to the property's size and WiFi network requirements.
          </p>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">FAQ's</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES COMPONENT */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Enhance your SD-WAN with professional WiFi, backup connectivity, and unified communications."
      />

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedContent
        stories={["seacon-group", "wb-power-services"]}
        sectors={["rural-smes", "construction-sites", "homeworkers"]}
        dark
      />
    </PageLayout>
  );
};

export default IntegraSDWAN;
