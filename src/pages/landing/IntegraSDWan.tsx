import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, PoundSterling, ShieldCheck, Wifi, Zap, MapPin, Star, Check, Award, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import HubSpotMeeting from "@/components/shared/HubSpotMeeting";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/connectivity/sdwan-hero.jpg";
import sdwanSpeedsImg from "@/assets/connectivity/sdwan-speeds.jpg";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const pricingTiers = [
  {
    name: "Starlink SD-WAN",
    speed: "Starlink + 4G/5G bonded",
    price: "80",
    installation: "2,200",
    description: "Starlink satellite + cellular failover, professionally installed and managed",
    features: [
      "Starlink + 4G/5G bonded connectivity",
      "Enterprise-grade SD-WAN router",
      "You pay Starlink direct for dish & sub",
      "Engineer support included",
    ],
    popular: false,
    tier: "starter",
  },
  {
    name: "Integra Pro",
    speed: "Up to 350Mbps",
    price: "135",
    installation: "2,200",
    description: "Multi-network bonding — our most popular business solution",
    features: [
      "Up to 350Mbps multi-network bonding",
      "Advanced load balancing + failover",
      "Priority support",
      "Static IP available (£10/mo)",
    ],
    popular: true,
    tier: "popular",
  },
  {
    name: "Integra Ultrafast",
    speed: "Up to 450Mbps",
    price: "195",
    installation: "2,800",
    description: "Three-network bonding for maximum speed and resilience",
    features: [
      "Up to 450Mbps across 3 networks",
      "Triple-network redundancy",
      "Priority support + SLA",
      "Static IP available (£10/mo)",
    ],
    popular: false,
    tier: "mid",
  },
  {
    name: "Starlink B2B",
    speed: "Managed Starlink + SLA",
    price: "300",
    pricePrefix: "From ",
    installation: "1,300",
    description: "Managed Starlink with Integra SLA — subject to data usage requirements",
    features: [
      "Professional Starlink installation",
      "4G/5G cellular failover included",
      "Integra SLA-backed service",
      "Dedicated account management",
    ],
    popular: false,
    tier: "premium",
  },
  {
    name: "Enterprise",
    speed: "Up to 500Mbps",
    price: "400",
    installation: "3,300",
    description: "Up to 500Mbps bonded — for businesses that demand the best",
    features: [
      "Up to 500Mbps bonded connectivity",
      "99.99% uptime SLA",
      "Dedicated account manager",
      "Custom configuration & support",
    ],
    popular: false,
    tier: "enterprise",
  },
];

const faqItems = [
  {
    question: "Who can benefit from Integra SD-WAN?",
    answer: "Anyone in a rural or underserved area struggling with slow broadband can benefit. This includes farmers, homeworkers, small businesses, holiday lets, construction sites, and estates. If fibre isn't available or excess construction charges are too high, SD-WAN is the answer.",
  },
  {
    question: "How can I determine the speed you can offer at my property?",
    answer: "Use our Availability Checker to enter your postcode. We run a coverage analysis across all major UK mobile networks to estimate the speeds achievable at your location. For a more precise estimate, we can arrange a free desktop survey.",
  },
  {
    question: "Is a property visit necessary for service assessment?",
    answer: "For most installations, yes — we conduct a free desktop survey to assess signal strength and coverage at your location. This is done remotely using our network analysis tools.",
  },
  {
    question: "How does Integra's service function as a temporary connection before fibre?",
    answer: "Many customers use our SD-WAN as a bridge while waiting for fibre. Our service can be live in 14 days, giving you fast connectivity immediately. When your fibre arrives, we can either remove our equipment or keep it as a backup failover connection.",
  },
  {
    question: "What if I don't get the estimated speeds during installation?",
    answer: "We test speeds during installation and optimise antenna placement for the best possible performance. If we can't achieve the speeds we quoted, we'll discuss alternative solutions or adjust your plan accordingly. We never leave a customer with a subpar connection.",
  },
  {
    question: "What is the installation process for Integra SD-WAN?",
    answer: "Our engineer visits your property, installs external antennas (usually on a mast or wall bracket), sets up the SD-WAN router, configures your network, and tests everything. The whole process typically takes half a day. We handle all the technical setup — you just need to provide a power socket.",
  },
];

const IntegraSDWan = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEO
        title="Integra SD-WAN | Fast Internet Without Fibre | Integra Networks"
        description="Tired of waiting for fibre? Enjoy fast internet in under 14 days. With 99% UK Coverage, Integra can transform your connectivity. Stop waiting for Fibre and go live with Integra."
        keywords="SD-WAN, rural broadband, fast internet, no fibre, Integra Networks, 4G broadband, 5G broadband"
        url="/integra-sd-wan"
      />

      {/* ── HERO WITH IMAGE ──────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Integra SD-WAN connectivity solution"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Integra SD-WAN
                </span>
                <a
                  href="https://www.reviews.io/company-reviews/store/www.integra-networks.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/15 transition-all group"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>5.0/5 on Reviews.io</span>
                </a>
              </div>
            </motion.div>

            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl font-medium leading-tight">
              Tired of waiting for Fibre?
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Enjoy fast internet in under 14 days. With 99% UK Coverage, Integra can transform your connectivity. Stop waiting for Fibre and go live with Integra.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                <a href="#availability-checker">Check Availability</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <a href="tel:02033887111">Call 0203 388 7111</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CLIENT LOGO CAROUSEL ──────────────────────────────────────── */}
      <CustomerLogoBar />

      {/* ── PAIN POINTS ──────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Perfect Solution for Rural Connectivity</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-6 max-w-3xl mx-auto">
              Say goodbye to slow internet
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Integra provides fast and reliable connectivity solutions for businesses and consumers without access to fibre internet.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Tired of waiting for the Fibre rollout?</h3>
              <p className="text-surface-dark-muted leading-relaxed">Say goodbye to slow internet speeds with Integra. We can enhance your connectivity in just a few weeks.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <PoundSterling className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Frustrated with excessive construction charges?</h3>
              <p className="text-surface-dark-muted leading-relaxed">Don't pay thousands to Openreach. Integra offers a flat rate installation fee with no hidden costs.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Worried about losing critical services?</h3>
              <p className="text-surface-dark-muted leading-relaxed">Integra's resilient service ensures that your essential services remain active, giving you peace of mind.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── 99% COVERAGE + FEATURES ──────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Near-Total Connectivity: 99% of the UK Covered</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-6 max-w-3xl mx-auto">
              Integra SD-WAN: Enhancing Your Connectivity
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Integra's SD-WAN service merges multiple network connections, providing faster 4G/5G speeds than a single network operator.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: Wifi, title: "Broadband Speeds", subtitle: "Rapid, reliable internet", desc: "Experience broadband speeds via 4G/5G networks. Stream, work, and connect without interruption." },
              { icon: Zap, title: "Lightning Fast Uploads", subtitle: "Secure and speedy file transfers", desc: "Effortlessly upload large files, like construction/CAD files and graphic designs. Speedy data transfers keep your projects moving." },
              { icon: ShieldCheck, title: "Seamless IP Integration", subtitle: "Connectivity for your security needs", desc: "Connect your CCTV, VPN, and firewall systems with ease. Our dedicated team is ready to assist with your IP address needs." },
              { icon: MapPin, title: "99% UK Coverage", subtitle: "Reaching the unreachable", desc: "Our bonded cellular SD-WAN reaches 99% of UK postcodes. If we can cover you, we'll tell you upfront." },
              { icon: Clock, title: "14-Day Install", subtitle: "Live in weeks, not months", desc: "From survey to live in just 14 days. No digging, no planning permission, no excess construction charges." },
              { icon: PoundSterling, title: "Fixed Pricing", subtitle: "No hidden costs", desc: "Flat-rate installation with transparent monthly pricing. No surprises, no excess charges, no hidden fees." },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{feature.subtitle}</p>
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── HOMEWORKERS SECTION WITH IMAGE ────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">Empowered Homeworkers</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                Explore the power of Integra SD-WAN — propelling remote workforces with unrivaled speed where Fibre cannot. Experience continuity for all your online engagements.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-4xl font-medium text-white">848<span className="text-primary">%</span></p>
                  <p className="text-sm text-surface-dark-muted mt-2">Performance vs ADSL</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-4xl font-medium text-white">210<span className="text-primary">Mbps</span></p>
                  <p className="text-sm text-surface-dark-muted mt-2">Avg homeworker speed</p>
                </div>
              </div>
              <p className="text-xs text-surface-dark-muted">Based on average UK speeds of 9.7Mbps for ADSL connections — Ofcom Home Broadband Report 2022</p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <motion.div
                className="rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={sdwanSpeedsImg}
                  alt="SD-WAN speed performance dashboard"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Pricing</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto font-medium">
              Choose your connection
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Start flexible, scale as you grow. Every package includes hardware, monitoring, and dedicated support.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`relative rounded-2xl border backdrop-blur-sm p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${
                  tier.popular
                    ? "bg-gradient-to-b from-primary/15 to-primary/5 border-primary/50 ring-1 ring-primary/20"
                    : "bg-card border-border hover:border-primary/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-lg shadow-primary/30">
                      <Award className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-medium text-foreground mb-2 mt-1">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{tier.description}</p>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    {tier.pricePrefix && <span className="text-sm text-muted-foreground">{tier.pricePrefix}</span>}
                    <span className="text-4xl font-medium text-foreground tracking-tight">£{tier.price}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">+VAT · Installation from £{tier.installation} +VAT</p>
                </div>

                <div className={`h-px mb-5 ${tier.popular ? "bg-primary/30" : "bg-border"}`} />

                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.popular ? "bg-primary/20" : "bg-primary/10"}`}>
                        <Check className={`h-3 w-3 ${tier.popular ? "text-primary" : "text-primary/80"}`} />
                      </div>
                      <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="sm"
                  className={`w-full mt-auto ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "bg-primary/10 text-foreground hover:bg-primary/20 border border-border"
                  }`}
                >
                  <a href="#availability-checker" className="inline-flex items-center gap-2">
                    Check Availability <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection>
            <div className="mt-10 rounded-xl border border-border bg-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">Unsure what option is right for you? Speak to our team</p>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get In Touch <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">Installation Costs can vary subject to the property's size and WiFi network requirements. All prices exclude VAT.</p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── STATS ROW ────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-3xl font-medium text-white">4.9/5</p>
                <p className="text-sm text-surface-dark-muted mt-1">Verified on Reviews.io</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-medium text-white">14 Days</p>
                <p className="text-sm text-surface-dark-muted mt-1">From survey to live connection</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-medium text-white">99%</p>
                <p className="text-sm text-surface-dark-muted mt-1">UK coverage via cellular SD-WAN</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── AVAILABILITY CHECKER CTA ─────────────────────────────── */}
      <section id="availability-checker" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-4">Check Your Availability</h2>
            <p className="text-lg text-muted-foreground mb-10">Enter your details and we'll check what speeds we can deliver to your property.</p>
            <Link to="/check" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              Check My Coverage <ArrowRight className="h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── BOOK A CALL ──────────────────────────────────────────────── */}
      <HubSpotMeeting
        heading="Prefer to Speak to Someone?"
        subtitle="Book a quick call with our team. We'll review your location, talk through options, and give you an honest recommendation."
        variant="dark"
      />

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Got Questions?</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-sm font-medium text-surface-dark-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-surface-dark-muted flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm text-surface-dark-muted leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-blue-600 p-10 md:p-14 text-center" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}>
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Free WiFi Mesh Installation (worth £350)
                </h2>
                <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
                  Sign up to any Integra SD-WAN package and receive a free WiFi mesh system to cover your entire property.
                </p>
                <p className="text-white/60 text-sm mb-8">
                  Offer ends 31st March 2026
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <a href="#availability-checker">Check Availability</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/contact">Or get in touch</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT BAR ──────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-12 md:py-16 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-surface-dark-muted mb-4">
            <span className="font-medium text-surface-dark-foreground">Ready to upgrade?</span> Call our broadband specialists:
            <a href="tel:02033887111" className="text-primary hover:underline ml-2 font-medium">
              0203 388 7111
            </a>
          </p>
          <p className="text-xs text-surface-dark-muted">
            Available Monday-Friday, 9am-5:30pm GMT.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default IntegraSDWan;
