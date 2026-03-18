import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Wifi, Shield, Wrench, Clock, Home, ChevronDown, Zap, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import RelatedServices from "@/components/shared/RelatedServices";

import heroImg from "@/assets/connectivity/sdwan-install.webp";
import remoteImg from "@/assets/connectivity/home-wifi-remote.jpg";
import outbuildingsImg from "@/assets/connectivity/home-wifi-outbuildings.jpg";
import installImg from "@/assets/connectivity/sdwan-aerial.webp";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const painPoints = [
  {
    question: "Can't get fibre and tired of waiting?",
    answer: "We install 4G/5G broadband at your property in under 14 days. No Openreach, no wayleave delays, no years of waiting.",
  },
  {
    question: "Spending too much on a solution you don't need?",
    answer: "Not everyone needs bonded multi-network. Integra Connect gives you reliable broadband on the strongest network at your location — from just £59/mo.",
  },
  {
    question: "Stuck with a consumer router in a window?",
    answer: "We install an external antenna on your property for the best possible signal, connected to a commercial-grade router. It's a proper installation — not a MiFi.",
  },
];

const features = [
  {
    icon: Wifi,
    eyebrow: "Simple, Reliable Broadband",
    title: "One Network. Professionally Installed.",
    description: "We test the 4G/5G signal at your property, identify the strongest carrier and tower, and install an external antenna with a commercial-grade router. You get the best possible connection your location can deliver — without the complexity or cost of multi-network bonding.",
    img: remoteImg,
    imgAlt: "Rural property with reliable broadband",
    reverse: false,
  },
  {
    icon: Wrench,
    eyebrow: "Professional Installation",
    title: "Installed in Under 14 Days",
    description: "Our engineer arrives, tests signal from nearby towers, mounts the antenna for optimal reception, installs and configures your router, and makes sure everything is working before they leave. You're online the same day.",
    img: installImg,
    imgAlt: "Professional antenna installation",
    reverse: true,
  },
  {
    icon: Shield,
    eyebrow: "Real Support, Real People",
    title: "UK-Based Support When You Need It",
    description: "Something not right? Call us or message on WhatsApp and speak to a real person who knows your setup. We monitor your connection and can often fix issues before you even notice them.",
    img: outbuildingsImg,
    imgAlt: "Rural broadband for outbuildings and homes",
    reverse: false,
  },
];

const whoItsFor = [
  { icon: Home, title: "Rural Homes", description: "No fibre? No problem. Get reliable broadband without waiting years for Openreach." },
  { icon: Wifi, title: "Holiday Lets & Airbnbs", description: "Guests expect WiFi. Give them a reliable connection without a £2,000+ install." },
  { icon: Zap, title: "Small Businesses", description: "Email, video calls, cloud apps, card payments — Connect handles everyday business use." },
  { icon: Clock, title: "First Step Customers", description: "Start with Connect. Upgrade to Integra Pro when you're ready for more speed or redundancy." },
];

const faqs = [
  { q: "What speeds will I get?", a: "Speeds depend on your location, the distance to the nearest mast, and the carrier available. We check your coverage before you commit and give you a realistic expectation — no surprises. Typical speeds range from 20Mbps to 100Mbps+, depending on your location." },
  { q: "How is this different from a Three MiFi or mobile hotspot?", a: "We install a proper external antenna on your property for the best possible signal, connected to a commercial-grade router. We configure everything, monitor your connection 24/7, and provide full UK-based support. A MiFi sits on your windowsill — this is a proper installation." },
  { q: "Can I upgrade later?", a: "Absolutely. We can add a second network to bond with your existing connection, upgrading you to Integra Pro for faster speeds and redundancy. Most of the hardware stays — we just add to it." },
  { q: "What if it doesn't work?", a: "14-day money-back guarantee. If you're not happy with the service, we'll remove the equipment and refund you. We also check your coverage before installation so there are no surprises." },
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

const connectServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integra Connect",
  provider: {
    "@type": "Organization",
    name: "Integra Networks",
    url: "https://integra-networks.co.uk",
  },
  description: "Reliable 4G/5G broadband, professionally installed with an external antenna and commercial-grade router. From £59/month.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Broadband Internet Service",
  url: "https://integra-networks.co.uk/connectivity/integra-connect",
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: "59",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "59",
      priceCurrency: "GBP",
      billingDuration: "P1M",
    },
  },
};

const connectBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://integra-networks.co.uk" },
    { "@type": "ListItem", position: 2, name: "Connectivity", item: "https://integra-networks.co.uk/connectivity" },
    { "@type": "ListItem", position: 3, name: "Integra Connect", item: "https://integra-networks.co.uk/connectivity/integra-connect" },
  ],
};

const IntegraConnect = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      <SEO
        title="Integra Connect"
        description="Reliable 4G/5G broadband from £59/mo. Professionally installed with an external antenna and commercial-grade router. No fibre required."
        keywords="rural broadband, 4G broadband, 5G broadband, no fibre broadband, cheap rural internet, broadband installation, affordable broadband"
        url="/connectivity/integra-connect"
      />
      <SchemaMarkup data={connectServiceSchema} />
      <SchemaMarkup data={connectBreadcrumbSchema} />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Integra Connect professional installation" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Integra Connect
              </span>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Broadband That <span className="text-primary">Just Works.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-4">
              Reliable 4G/5G broadband, professionally installed at your property. No fibre required. No long waits. No fuss.
            </p>
            <p className="text-2xl text-white font-medium mb-8">
              From <span className="text-primary">£59</span>/month +VAT
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

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">No Fibre? No Problem.</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Reliable broadband, without the wait.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              Stop waiting for fibre that may never come. Integra Connect delivers 4G/5G broadband to your property in under 14 days — professionally installed and fully supported.
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
                  <h3 className="text-heading-2 text-foreground mb-2">Integra Connect</h3>
                  <p className="text-muted-foreground">4G/5G broadband, professionally installed</p>
                </div>
                <div className="text-left md:text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-medium text-foreground">£59</span>
                    <span className="text-muted-foreground">/month +VAT</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Installation: £1,250 +VAT</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "External antenna, professionally mounted",
                  "Commercial-grade router configured for you",
                  "Best available 4G/5G network at your location",
                  "24/7 connection monitoring",
                  "UK-based phone and WhatsApp support",
                  "12-month term, 14-day money-back guarantee",
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
                  <Link to="/check">Check Availability <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Who It's For</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Built for people who just need it to work.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              You don't need the fastest internet in the world. You need internet that's reliable, properly installed, and actually supported.
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

      {/* CTA */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground mb-4">
              Ready for broadband that just works?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Check your availability in 30 seconds. We'll confirm coverage at your location and give you a realistic speed expectation — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                  <Link to="/check">Check Availability <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default IntegraConnect;
