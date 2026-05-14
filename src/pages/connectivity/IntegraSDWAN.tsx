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
    answer: "Skip the excess construction charges and wayleave delays entirely — we deliver enterprise connectivity without digging the road up.",
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
    description: "We bond multiple 4G/5G connections through our datacentre, delivering combined speeds up to 500Mbps. Rain doesn't affect cellular — unlike satellite alternatives.",
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
    description: "Static IPs available on any tier. Perfect for CCTV, VPN, firewalls, and remote access.",
    img: stableImg,
    imgAlt: "Stable connectivity for CCTV and VPN",
    reverse: false,
  },
];


const planLadder = [
  { name: "Integra Backup", carriers: "Single 4G/5G carrier", speed: "Up to 100Mbps", users: "Failover / small site" },
  { name: "Integra Lite", carriers: "Two carriers bonded", speed: "Up to 200Mbps", users: "Up to ~10 users" },
  { name: "Integra Pro", carriers: "Two carriers bonded", speed: "Up to 350Mbps", users: "10–25 users" },
  { name: "Integra Ultrafast", carriers: "Three carriers bonded", speed: "Up to 500Mbps", users: "25–50 users" },
  { name: "Integra Enterprise", carriers: "Three carriers + SLA", speed: "Up to 500Mbps", users: "50+ users, mission-critical" },
];

const faqs = [
  { q: "Who can benefit from Integra SD-WAN?", a: "Any business in a location where fibre isn't available or where existing speeds are insufficient. This includes construction sites, business parks, multi-site operations, and industrial premises." },
  { q: "How can I determine the speed you can offer at my property?", a: "Use our free Availability Checker tool or get in touch with our team. We'll assess your location and provide an estimated speed range." },
  { q: "Is a property visit necessary for service assessment?", a: "Not always. We can often assess your property remotely, but for complex installations our engineers may conduct a desktop survey." },
  { q: "How much data do I get?", a: "With multi-network connections, you're looking at around 1.8TB of data per month — more than enough for a business running video calls, cloud apps, and file sharing all day. There's a fair usage policy, but in practice the vast majority of customers never come close to hitting it." },
  { q: "Can SD-WAN bridge the gap while we wait for fibre?", a: "Yes. Many customers run Integra SD-WAN as interim connectivity during a fibre install, then keep it as permanent failover once fibre is live. See Integra Bridge for our dedicated bridging product." },
  { q: "I need a static IP for my CCTV requirements.", a: "Static IPs are available on all tiers. Essential for CCTV, VPNs, firewalls, and remote access — included in your bespoke quote." },
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
  url: "https://integra-networks.co.uk/connectivity/integra-sd-wan",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    offerCount: "3",
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
      item: "https://integra-networks.co.uk/connectivity/integra-sd-wan",
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
        url="/connectivity/integra-sd-wan"
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

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Fibre-Free Internet</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Fibre-free business connectivity.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              No waiting years for fibre. We bond multiple 4G/5G cellular networks to deliver high-speed, resilient business internet in under 14 days — with automatic failover built in.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Plans Scale With Your Site</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              The SD-WAN ladder: Backup to Enterprise.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Same product family, scaled to the bandwidth, redundancy and SLA your site needs. Pricing is bespoke per site — request a quote for what's deliverable at your address.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {planLadder.map((tier, i) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className="rounded-xl p-6 border border-border bg-card hover:border-primary/50 transition-all flex flex-col"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-2">Tier {i + 1}</p>
                <h3 className="text-base font-medium text-foreground mb-4">{tier.name}</h3>
                <div className="space-y-3 text-sm flex-grow">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">Carriers</p>
                    <p className="text-foreground">{tier.carriers}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">Speed</p>
                    <p className="text-foreground">{tier.speed}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1">Suited To</p>
                    <p className="text-foreground">{tier.users}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-primary text-white hover:bg-primary/90">
                <Link to="/contact" className="inline-flex items-center gap-2">Request a quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/check">Check availability</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-6">
              Pricing is bespoke per site — every quote follows a free survey.
            </p>
          </div>
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
        sectors={["rural-smes", "construction-sites", "business-parks"]}
        dark
      />
    </PageLayout>
  );
};

export default IntegraSDWAN;
