import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wifi, ChevronDown, Landmark, Phone, Network, Layers, CheckCircle2, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import RelatedServices from "@/components/shared/RelatedServices";
import RelatedContent from "@/components/shared/RelatedContent";

import heroImg from "@/assets/connectivity/sdwan-hero.jpg";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const painPoints = [
  {
    question: "Tired of waiting for the Fibre rollout?",
    answer: "Fibre rollouts are often delayed by years. We install in 10 working days — and you can cancel if Fibre becomes available.",
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

const tiers = [
  { name: "Integra Backup", carriers: "Single 4G/5G network", speed: "Automatic failover", users: "For resilient backup on an existing line, or a fast standalone circuit while you wait for Fibre." },
  { name: "Integra Lite", carriers: "Two carriers — load balanced or bonded", speed: "Up to 100 Mbps", users: "Up to 5 users. Entry-level SD-WAN for sites that need resilience more than raw performance." },
  { name: "Integra Pro", carriers: "Two carriers — load balanced or bonded", speed: "Up to 300 Mbps", users: "5–20 users. The default for most sites — serious performance with built-in resilience." },
  { name: "Integra Ultrafast", carriers: "Three carriers — load balanced or bonded", speed: "Up to 400 Mbps", users: "20–40 users. More users, more data, more headroom — for busy sites that have outgrown Pro." },
  { name: "Integra Enterprise", carriers: "Four carriers — load balanced or bonded", speed: "Up to 500 Mbps", users: "40+ users. Maximum speed and resilience, for the sites that cannot go down." },
];

const included = [
  "Multi-carrier 4G/5G connection — load balanced or bonded",
  "Site survey and carrier signal testing before installation",
  "Carrier-specific external antennas, selected and positioned for your site",
  "A high-performance SD-WAN router — not a budget device",
  "Automatic failover across all carriers",
  "24/7 network monitoring via Integra Cloud",
  "UK-based support via phone and email",
  "Static IP included as standard on bonded configurations",
];

const faqs = [
  { q: "What's the difference between load balanced and bonded?", a: "Both use the same hardware and carriers — the difference is how traffic is handled. Load balanced distributes traffic across carriers independently; each session uses one carrier at a time, routed to the least-congested path. It works well for multi-user sites running browsing, email, and cloud apps. Bonded combines every carrier into encrypted tunnels through our cloud bonding server, creating a single unified pipe — a single download uses the combined bandwidth of every carrier at once, and a static public IP is included as standard." },
  { q: "What is CGNAT, and why does it matter?", a: "Most 4G/5G connections put you behind carrier-grade NAT — hundreds of customers share one upstream public address, so nothing from outside can reach your site. Outbound traffic is fine, but inbound VPNs, port forwarding, and remote CCTV access all break. Our bonded configuration solves this structurally by routing traffic through our cloud bonding server, which hands your site a real static public IP on the way out." },
  { q: "Can I get a static IP?", a: "Yes. A static, routable, public IPv4 address is included as standard on every bonded configuration — so VPN tunnels terminate on your firewall, remote access works like a Fibre leased line, and CCTV and remote support reach the site normally. On load-balanced configurations the static IP is available as an add-on." },
  { q: "How does SD-WAN compare to Starlink?", a: "Starlink can deliver decent download speeds, but for a business site working all day the limitations show: inconsistent upload, latency spikes under load, and a single connection with no redundancy — if it drops, the site goes dark. Integra SD-WAN runs on multiple independent mobile carriers, all active, with automatic failover and 24/7 monitoring." },
  { q: "Can SD-WAN replace a leased line?", a: "They solve different problems. A leased line is dedicated symmetric bandwidth — ideal where it's available and the install timeline works. Integra SD-WAN is for sites where Fibre can't reach, takes too long to install, or carries a prohibitive excess construction charge. It's also commonly deployed alongside a leased line as a genuinely resilient, monitored failover." },
  { q: "What happens if a carrier goes down?", a: "Traffic is automatically redistributed across the remaining carriers. No manual switching, no IT callout. Because all carriers are active all the time, the failover is seamless — the site keeps performing, not just surviving." },
  { q: "Is there a data limit?", a: "Each configuration carries a fair usage allowance that scales with the number of carriers. These aren't hard caps — a site that exceeds the allowance isn't suspended or throttled immediately. We confirm the right allowance for your use case before installation." },
  { q: "How is the connection monitored?", a: "Every carrier is monitored 24/7 via Integra Cloud. If a carrier degrades or drops, we know immediately — we're not waiting for you to report a problem. On a multi-carrier setup that matters: if one carrier quietly fails, the site still works but loses throughput and redundancy, and we catch that before it becomes an issue." },
  { q: "What's the installation process?", a: "One engineer visit — site survey, carrier testing, antenna selection and mounting, router installation, and field testing across all networks. Typically live within 10 working days of order." },
];

const relatedServices = [
  {
    title: "Leased Lines",
    description: "Dedicated Fibre connectivity for businesses needing guaranteed speeds and uptime SLAs.",
    href: "/leased-lines",
    icon: Landmark,
    badge: "Enterprise",
  },
  {
    title: "Business WiFi",
    description: "Professional WiFi networks surveyed, installed, and monitored for complete coverage.",
    href: "/business-wifi",
    icon: Wifi,
  },
  {
    title: "Unified Communications",
    description: "Integrated voice, video, and messaging over your SD-WAN connectivity.",
    href: "/unified-communications",
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
  description: "Bonded 4G/5G connectivity delivering fibre-like speeds up to 500Mbps without requiring fixed Fibre infrastructure. Installed in 10 working days with 99.5% uptime SLA.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Managed Network Connectivity",
  url: "https://integra-networks.co.uk/integra-sd-wan",
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
      item: "https://integra-networks.co.uk/integra-sd-wan",
    },
  ],
};

const IntegraSDWAN = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEO
        title="Integra SD-WAN"
        description="Fast internet without Fibre. Bonded 4G/5G, 10-working-day install, 99.5% SLA. Bespoke pricing per site."
        keywords="SD-WAN, bonded 4G 5G, rural internet, alternative to Fibre, business connectivity, fast broadband"
        url="/integra-sd-wan"
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
              Bonded 4G/5G cellular delivering up to 500Mbps, installed in 10 working days — with 99.5% uptime and UK-based support.
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

      <AvailabilityCheckerInline compact sourceTag="integra-sd-wan" />

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Fibre-Free Internet</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Fibre-free business connectivity.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              No waiting years for Fibre. We bond multiple 4G/5G cellular networks to deliver high-speed, resilient business internet in 10 working days — with automatic failover built in.
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

      {/* HOW IT WORKS */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">How it works</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              One connection. Multiple carriers. No single point of failure.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Integra SD-WAN combines multiple 4G/5G connections from different carriers into one resilient link — load balanced or bonded, depending on what your site needs.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl p-8 border border-border bg-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <Network className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-heading-3 text-foreground mb-3">Load Balanced</h3>
              <p className="text-muted-foreground leading-relaxed">
                Traffic is distributed across carriers independently — each session uses one carrier at a time, and the SD-WAN router routes new sessions to the least-congested path. The right fit for multi-user sites running browsing, email, and cloud applications.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl p-8 border border-border bg-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                <Layers className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-heading-3 text-foreground mb-3">Bonded</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every carrier is combined into encrypted tunnels through our cloud bonding server, creating a single unified pipe — one download uses the combined bandwidth of every carrier at once. Bonded sites also get a static, routable public IP included as standard.
              </p>
            </motion.div>
          </motion.div>
          <AnimatedSection delay={0.2}>
            <p className="text-base text-muted-foreground text-center max-w-3xl mx-auto mt-12 leading-relaxed">
              Traffic flows from your firewall, through the SD-WAN router, across the carriers, into our bonding server, and out to the internet through a fixed IP — certificate-authenticated, VPN-transparent, and monitored 24/7.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* THE SD-WAN RANGE */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The SD-WAN range</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              A tier for every site.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              From single-network failover to four-carrier bonded connectivity — the right configuration depends on your site's size, workload, and resilience needs. We'll recommend the fit after a survey.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className="rounded-xl p-6 border border-white/10 bg-white/5 hover:border-primary/50 transition-all flex flex-col"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/80 mb-2">Tier {i + 1}</p>
                <h3 className="text-base font-medium text-surface-dark-foreground mb-4">{tier.name}</h3>
                <div className="space-y-3 text-sm flex-grow">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface-dark-muted/70 mb-1">Carriers</p>
                    <p className="text-surface-dark-foreground">{tier.carriers}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface-dark-muted/70 mb-1">Speed</p>
                    <p className="text-surface-dark-foreground">{tier.speed}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-surface-dark-muted/70 mb-1">Suited to</p>
                    <p className="text-surface-dark-foreground">{tier.users}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection delay={0.2}>
            <p className="text-sm text-surface-dark-muted max-w-3xl mx-auto mt-12 leading-relaxed text-center">
              A note on sizing: these user counts are a general guide. Cloud-first businesses with constant file syncs, remote teams with heavy HQ access and video calls, and creative, media, and design teams pushing large uploads or remote rendering should step up a category — those workloads consume more capacity per user than the headline numbers assume.
            </p>
          </AnimatedSection>
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-primary text-white hover:bg-primary/90">
                <Link to="/contact" className="inline-flex items-center gap-2">Request a quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent text-surface-dark-foreground border-white/20 hover:bg-white/10 hover:text-surface-dark-foreground">
                <Link to="/check">Check availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-start">
            <AnimatedSection direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">What's included</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground mb-4">Everything you need, included.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No hidden add-ons, no surprise line items. One service covers the hardware, the install, the carriers, the monitoring, and the support.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL INSTALLATION */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-6">
              <Wrench className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Professional installation</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">
              Live in 10 working days. Engineered for your site.
            </h2>
            <p className="text-lg text-surface-dark-muted leading-relaxed">
              We handle the full process — no involvement needed from your team beyond site access. Our engineer surveys the site, tests every available mobile network, identifies the strongest carriers, and selects carrier-specific external antennas for each. The router is installed in the comms cabinet or an external weatherproof enclosure, depending on the site layout. Every installation is engineered for that specific location — the antennas, mounting positions, and cable routing are chosen from what the survey reveals, not shipped as a standard kit. No Openreach, no wayleaves, no months of waiting. One engineer visit, and your site is live.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">Frequently asked questions.</h2>
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
