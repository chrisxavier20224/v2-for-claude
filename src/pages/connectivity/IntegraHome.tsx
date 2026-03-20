import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wifi, Shield, Wrench, Clock, Home, ChevronDown, Zap, Phone, Star, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import RelatedServices from "@/components/shared/RelatedServices";

import heroImg from "@/assets/connectivity/integra-home-hero.jpg";
import remoteImg from "@/assets/connectivity/home-wifi-remote.jpg";
import outbuildingsImg from "@/assets/connectivity/home-wifi-outbuildings.jpg";
import installImg from "@/assets/connectivity/sdwan-aerial.webp";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const painPoints = [
  {
    question: "Tired of buffering and dropouts?",
    answer: "We install a proper broadband connection at your home in under 14 days. Stream, video call, and browse without the constant frustration of slow or unreliable internet.",
  },
  {
    question: "Been told fibre isn't coming?",
    answer: "You don't need to wait for Openreach. We bring fast internet to your home using 4G/5G — no digging, no roadworks, no years of empty promises.",
  },
  {
    question: "Fed up with a hotspot on the windowsill?",
    answer: "We install a proper external antenna on your property for the strongest possible signal — not a MiFi balanced on a shelf. It's the difference between hoping for a signal and actually having broadband.",
  },
];

const features = [
  {
    icon: Wifi,
    eyebrow: "Proper Home Broadband",
    title: "Stream, Call, Browse — Without the Frustration.",
    description: "We find the strongest 4G/5G signal at your property and install an external antenna to pull it in properly. The result? Broadband that actually handles Netflix, Zoom calls, and the kids gaming — all at the same time. No more fighting over bandwidth.",
    img: remoteImg,
    imgAlt: "Rural home with reliable broadband",
    reverse: false,
  },
  {
    icon: Wrench,
    eyebrow: "We Come to You",
    title: "Installed by Our Engineers. You're Online the Same Day.",
    description: "No waiting months for Openreach. Our engineer visits your property, tests the signal, installs the antenna and router, and makes sure everything is working before they leave. The whole thing takes a few hours — you're online that afternoon.",
    img: installImg,
    imgAlt: "Professional broadband installation",
    reverse: true,
  },
  {
    icon: Shield,
    eyebrow: "Actual Support When You Need It",
    title: "Call Us. Message Us. We'll Fix It.",
    description: "No chatbots, no call centres in the Philippines, no 48-hour email waits. Call us or send a WhatsApp and speak to someone who actually knows your setup. We monitor your connection too — so we often spot problems before you do.",
    img: outbuildingsImg,
    imgAlt: "Rural property with broadband coverage",
    reverse: false,
  },
];

const whoItsFor = [
  { icon: Home, title: "Rural Homes", description: "Can't get fibre? We bring fast broadband to you — no digging, no delays, no Openreach." },
  { icon: Wifi, title: "Holiday Lets & Airbnbs", description: "Your guests expect WiFi that works. Give them reliable broadband without a massive outlay." },
  { icon: Zap, title: "New Builds & Conversions", description: "Moved in and there's no broadband? We'll have you online in under 14 days." },
  { icon: Clock, title: "Homeworkers", description: "Video calls, cloud apps, uploading documents — Connect keeps you working without the buffering." },
];

const faqs = [
  { q: "What speeds will I get?", a: "Speeds range from 100Mbps to 300Mbps, subject to local network infrastructure. We check your coverage before you commit and give you a realistic expectation — no surprises." },
  { q: "How is this different from a Three MiFi or mobile hotspot?", a: "We install a proper external antenna on your property for the best possible signal, connected to a commercial-grade router. We configure everything, monitor your connection 24/7, and provide full UK-based support. A MiFi sits on your windowsill — this is a proper installation." },
  { q: "Can I upgrade later?", a: "Absolutely. We can add a second network to bond with your existing connection, upgrading you to Integra Pro for faster speeds and redundancy. Most of the hardware stays — we just add to it." },
  { q: "What if it doesn't work?", a: "That's why we do a coverage survey before we install. We check the signal at your property and give you a realistic speed expectation upfront. If the numbers don't stack up, we'll tell you — we don't want to waste your time, and sending an engineer for an install that won't work costs us too. If we go ahead and you're still not happy, there's a 14-day money-back guarantee." },
  { q: "Is there a data limit?", a: "There's a fair usage policy, but in practice the vast majority of customers never come close to hitting it. We'll discuss expected usage during your consultation." },
  { q: "What's included in the installation?", a: "External antenna mounted on your property, commercial-grade router, all cabling, configuration, and testing. Our engineer makes sure everything is working before they leave." },
  { q: "How long is the contract?", a: "12-month minimum term with a 14-day cooling-off period. After 12 months, 30 days' notice to cancel." },
];

const relatedServices = [
  {
    title: "Integra SD-WAN",
    description: "Need more speed? Bond multiple networks for up to 350Mbps with built-in redundancy.",
    href: "/connectivity/integra-sd-wan",
    icon: Zap,
    badge: "Upgrade",
  },
  {
    title: "Home WiFi",
    description: "Extend your broadband throughout your property — house, outbuildings, and garden office.",
    href: "/connectivity/home-wifi",
    icon: Wifi,
  },
  {
    title: "Homeworkers",
    description: "Working from home? See how we keep remote workers connected.",
    href: "/sectors/homeworkers",
    icon: Home,
  },
];

const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integra Home",
  provider: {
    "@type": "Organization",
    name: "Integra Networks",
    url: "https://integra-networks.co.uk",
  },
  description: "Reliable 4G/5G broadband, professionally installed with an external antenna and commercial-grade router. From £55/month.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Broadband Internet Service",
  url: "https://integra-networks.co.uk/connectivity/integra-home",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "55",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "55",
      priceCurrency: "GBP",
      billingDuration: "P1M",
    },
  },
};

const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://integra-networks.co.uk" },
    { "@type": "ListItem", position: 2, name: "Connectivity", item: "https://integra-networks.co.uk/connectivity" },
    { "@type": "ListItem", position: 3, name: "Integra Home", item: "https://integra-networks.co.uk/connectivity/integra-home" },
  ],
};

const IntegraHome = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEO
        title="Integra Home"
        description="Fast home broadband from £66/month — no fibre needed. Professionally installed at your property with a 14-day money-back guarantee."
        keywords="rural broadband, home broadband no fibre, 4G broadband, 5G broadband, rural internet, broadband for countryside, broadband where fibre not available"
        url="/connectivity/integra-home"
      />
      <SchemaMarkup data={homeServiceSchema} />
      <SchemaMarkup data={homeBreadcrumbSchema} />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mum working from home with reliable broadband" className="w-full h-full object-cover object-[70%_center] md:object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Integra Home
                </span>
              </Link>
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Fast Broadband for Your Home. <span className="text-primary">No Fibre Needed.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-4">
              Can't get fibre? With 99% UK coverage, we can install fast, reliable 4G/5G broadband at your property in under 14 days. No Openreach. No roadworks. No waiting.
            </p>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-status-ok/20 border border-status-ok/30 rounded-full px-4 py-1.5 mb-3">
                <span className="text-xs font-semibold text-status-ok uppercase tracking-wider">Launch Offer — Ends 31 March</span>
              </div>
              <p className="text-2xl text-white font-medium">
                Installation: <span className="line-through text-white/40">£1,500</span> <span className="text-primary">£1,080</span> <span className="text-sm text-white/60">inc VAT</span>
              </p>
              <p className="text-lg text-white/70 mt-1">
                Just <span className="text-primary font-medium">£65</span>/month
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                  <Link to="/check">Check If You Qualify <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">No Fibre? No Problem.</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              The broadband your home deserves.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Not every property qualifies — we survey your location first and only proceed if the coverage is there. But if it is, we'll have you online in under 14 days.
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

      {/* FEATURES */}
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

      {/* PRICING */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Pricing</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4">
              Simple, transparent pricing.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center mb-12">
              No hidden fees. No surprises. Just reliable broadband.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-primary/30 bg-card p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-status-ok/20 border border-status-ok/30 rounded-full px-3 py-1 mb-3">
                    <span className="text-xs font-semibold text-status-ok uppercase tracking-wider">Launch Offer — Ends 31 March</span>
                  </div>
                  <h3 className="text-heading-2 text-foreground mb-2">Integra Home</h3>
                  <p className="text-muted-foreground">Fast home broadband — no fibre required</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-medium text-foreground">£65</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Installation: <span className="line-through text-muted-foreground/40">£1,500</span> <span className="text-primary font-medium">£1,080</span> inc VAT</p>
                  <p className="text-xs text-status-ok mt-1">Save £420 — offer ends 31 March</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "External antenna installed for the best signal",
                  "Router set up and configured — ready to go",
                  "Connected to the strongest network at your property",
                  "We monitor your connection 24/7",
                  "Call or WhatsApp us anytime — real UK support",
                  "14-day money-back guarantee if you're not happy",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-medium flex-1">
                  <Link to="/check">Check If You Qualify <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Upgrade nudge */}
          <AnimatedSection delay={0.3}>
            <div className="mt-8 rounded-xl border border-border bg-card/50 p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Need faster speeds or multi-network redundancy?
              </p>
              <Link to="/connectivity/integra-sd-wan" className="text-primary font-medium hover:underline text-sm">
                See Integra Pro from £135/mo — up to 350Mbps bonded <ArrowRight className="inline h-3 w-3 ml-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Is It Right for You?</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              If any of this sounds familiar, we can help.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              You don't need the fastest internet in the world. You need broadband that actually works — reliably, every day, without excuses.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {whoItsFor.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">FAQ</p>
            <h2 className="text-heading-2 text-surface-dark-foreground text-center mb-12">Common questions</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} className="border border-white/10 rounded-xl overflow-hidden" initial={false}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-surface-dark-foreground font-medium">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-5 w-5 text-surface-dark-muted shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-surface-dark-muted leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-heading-2 text-surface-dark-foreground mb-3">
              Don't just take our word for it.
            </h2>
            <p className="text-surface-dark-muted max-w-xl mx-auto">
              Hundreds of customers now rely on Integra for fast, reliable broadband.
            </p>
            <a
              href="https://www.reviews.io/company-reviews/store/www.integra-networks.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mt-4"
            >
              Read all reviews on Reviews.io
              <ExternalLink className="h-4 w-4" />
            </a>
          </AnimatedSection>

          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {[
              { author: "Verified Customer", content: "I have had a great experience with Integra. The people I have spoken to have been understanding and very human throughout the entire process and the internet speeds I am now getting mean a huge increase in my career opportunity." },
              { author: "Duncan Hall", content: "Working with Integra Networks has been a rare pleasure: they could not have been more patient, helpful, friendly and professional. They found the exact solution for our needs, and our internet provision is just excellent, despite our remote and rural location." },
              { author: "Dane", content: "Provided a fast and friendly service for getting our Internet online. So far the service has been reliable and fast, greatly outperforming the limited connectivity we had through normal domestic Internet." },
              { author: "Sally Wiltshire", content: "Excellent service, both from the network design and installation team, and now the ongoing support. We have reliable, fast broadband for the first time ever in our rural location." },
            ].map((review, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-surface-dark-muted leading-relaxed mb-4">"{review.content}"</p>
                <div>
                  <p className="text-sm font-medium text-surface-dark-foreground">{review.author}</p>
                  <p className="text-xs text-surface-dark-muted">via Reviews.io</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://www.reviews.io/company-reviews/store/www.integra-networks.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 font-medium h-12 px-8 text-base rounded-md"
              >
                View All Reviews on Reviews.io
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-4">
              Does your property qualify?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Not every location qualifies for Integra Home. Enter your details and we'll run a coverage survey on your property — takes 30 seconds, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                  <Link to="/check">Check If You Qualify <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="outline" size="lg" className="font-medium h-12 px-8 text-base">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices services={relatedServices} />
    </PageLayout>
  );
};

export default IntegraHome;
