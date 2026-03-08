import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Zap, Shield, Upload, Globe, Wifi, Star, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

import heroImg from "@/assets/connectivity/sdwan-hero.jpg";
import speedsImg from "@/assets/connectivity/sdwan-speeds.jpg";
import installImg from "@/assets/connectivity/sdwan-install.jpg";
import stableImg from "@/assets/connectivity/sdwan-stable.jpg";
import aerialImg from "@/assets/connectivity/sdwan-aerial.png";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const painPoints = [
  {
    question: "Tired of waiting for the Fibre rollout?",
    answer: "Fibre rollouts are often delayed by years. We install in under 14 days — and you can cancel if fibre becomes available.",
  },
  {
    question: "Paying thousands for Openreach construction?",
    answer: "We offer flat-rate installation from £1,700 with no hidden costs. No excess construction charges, no wayleave delays.",
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
    description: "Our engineer arrives, tests 4G signal from nearby towers, mounts radios, installs our commercial-grade router, and connects to your network. You're online same day.",
    img: installImg,
    imgAlt: "Quick SD-WAN installation",
    reverse: true,
  },
  {
    icon: Shield,
    eyebrow: "Always-On Connectivity",
    title: "Dual-Network Redundancy",
    description: "Two 4G connections from different operators (O2, Vodafone, EE, Three). If one drops, the other takes over instantly. 99.5% uptime SLA — not 'best effort'.",
    img: stableImg,
    imgAlt: "Stable internet connectivity",
    reverse: false,
  },
  {
    icon: Upload,
    eyebrow: "Lightning Fast Uploads",
    title: "100Mbps+ Upload Speeds",
    description: "Upload large CAD files, construction plans, and designs in minutes — not hours. 100Mbps+ upload is significantly faster than Starlink's 10-20Mbps.",
    img: null,
    reverse: true,
  },
  {
    icon: Globe,
    eyebrow: "Seamless IP Integration",
    title: "Static IP for CCTV, VPN & More",
    description: "Static IPs available on all packages — included free on Business tier and above, or just £5/month on Lite and Homeworker tiers. Perfect for CCTV, VPN, and remote access.",
    img: null,
    reverse: false,
  },
];

const testimonials = [
  { name: "Jason Jones", date: "4th April 2023", text: "Finally, a solution that works. We live in a rural area without viable fibre options, and too far from the cabinet for useful speeds over copper. After living with Starlink for a year we switched to a bonded 4G solution from Integra. Their installation engineer took great care to identify the best networks and optimise our speeds. We finally have a very stable, reliable and fast connection." },
  { name: "Lex Butler", date: "14th July 2022", text: "Having lived in the rural country for 12 years, I have always struggled to get any decent internet. Finding Integra was life-changing. They were quick to respond, professional and seamlessly got me up and running in no time. On the day of installation, the team was polite, discreet and hard working. I finally have great internet!" },
  { name: "Andrew Briggs", date: "2nd March 2022", text: "We have been so impressed by Integra Networks... from initial enquiry, to installation and a year on, backup service, all absolutely faultless. They have enabled us to set up business in a very remote area where the best BT could offer was 0.1mps. Thanks to Integra, we enjoy up to 100mps, and have never once lost signal or service." },
  { name: "Sonja Wilmink", date: "26th Feb 2023", text: "From having had only 11mbps of internet speed to over 100mbps most days has made a huge difference to our use of the internet. We did not have to wait long for the installation (about 2 weeks) and the work was carried out fast and efficiently. It has been a pleasure dealing with Integra." },
  { name: "Jonathan Brown", date: "18th Nov 2022", text: "Integra and their solution allowed me to continue working from home in a rural area with no other internet solution. The team were fast to deliver and super responsive whenever I needed help or had a question. Once installed the technology just worked and that's exactly what I needed!" },
  { name: "Goldwing Farm", date: "8th Jan 2022", text: "Excellent service very fast download/upload speeds. Very reliable internet and always on hand to speak to for troubleshooting. Always had issues with normal wired broadband but since having this installed we've never looked back!" },
];

const pricingTiers = [
  { name: "Lite", speed: "Up to 70Mbps", price: "99", staticIp: "Static IP £5pm", install: "Install Cost from £1,700", features: [] },
  { name: "Homeworker", speed: "Up to 250Mbps", price: "110", staticIp: "Static IP £5pm", install: "Install Cost from £2,200", features: [], popular: true },
  { name: "Business", speed: "Up to 300Mbps", price: "120", staticIp: "Includes Static IP", install: "Install Cost from £2,450", features: ["Diversity Mode for card payments"] },
  { name: "Ultrafast", speed: "Up to 400Mbps", price: "160", staticIp: "Includes Static IP", install: "Install Cost from £2,900", features: ["Diversity Mode for card payments"] },
  { name: "Enterprise", speed: "Up to 500Mbps", price: "400", staticIp: "Includes Static IP", install: "Install Cost from £3,300", features: ["Diversity Mode for card payments"] },
];

const faqs = [
  { q: "Who can benefit from Integra SD-WAN?", a: "Anyone in a location where fibre broadband isn't available or where existing speeds are insufficient. This includes homeworkers, rural businesses, construction sites, holiday lets, and more." },
  { q: "How can I determine the speed you can offer at my property?", a: "Use our free Availability Checker tool or get in touch with our team. We'll assess your location and provide an estimated speed range." },
  { q: "Is a property visit necessary for service assessment?", a: "Not always. We can often assess your property remotely, but for complex installations our engineers may conduct a site survey." },
  { q: "Does Integra offer unlimited data?", a: "Yes, all Integra SD-WAN packages include unlimited data with no usage caps or throttling." },
  { q: "How can Integra help ensure consistent card payment terminal performance in rural locations?", a: "Our Business tier and above include Diversity Mode, which provides a dedicated failover connection specifically for card payment terminals." },
  { q: "I need a static IP for my CCTV requirements.", a: "Static IPs are available on all packages — included free on Business tier and above, or just £5/month on Lite and Homeworker tiers." },
  { q: "Will Integra's service cover my entire property, even if the walls are thick?", a: "Yes. We include WiFi mesh systems and can design custom wireless networks to ensure full coverage across your property." },
  { q: "Can I extend Integra's service to an annex building?", a: "Absolutely. We can extend coverage to outbuildings, annexes, and garden offices using point-to-point wireless bridges." },
  { q: "Can I use the Access Broadband Cymru Scheme with Integra's service?", a: "Yes! If you're in Wales, you may be eligible for up to £800 towards your installation through the Access Broadband Cymru scheme." },
  { q: "Should I wait for BT's fibre service or go with Integra now?", a: "Don't wait. Fibre rollouts are often delayed. Integra can get you connected in under 14 days, and you can cancel if fibre becomes available." },
];

const IntegraSDWAN = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  return (
    <PageLayout>
      <SEO
        title="Integra SD-WAN — Up to 350Mbps Cellular Broadband in 14 Days"
        description="Pure cellular. Pure reliability. Two 4G connections bonded into one. Up to 350Mbps. 100Mbps+ upload. 20-30ms latency. Better than Starlink for serious work. £99-400/month."
        keywords="SD-WAN, rural broadband, bonded 4G, 5G internet, no fibre, fast internet, rural connectivity, cellular broadband, Integra Networks"
        url="/integra-sd-wan"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Integra SD-WAN connectivity" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> Integra SD-WAN
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Pure cellular. Pure reliability.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              No dish. No waiting. Two 4G connections bonded into one. Up to 350Mbps download, 100Mbps+ upload, 20-30ms latency. Installed in under 14 days with 99% UK coverage.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/availability-checker">Availability Checker</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Perfect Solution for Rural Connectivity</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Fast, reliable broadband without fibre.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              We have agreements with all four UK mobile operators. At your location, we find 2-3 towers and connect to two simultaneously — combined speed up to 350Mbps with automatic failover.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point) => (
              <motion.div key={point.question} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-semibold text-surface-dark-foreground mb-3">{point.question}</h3>
                <p className="text-surface-dark-muted leading-relaxed">{point.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* SD-WAN EXPLANATION */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Near-Total Connectivity: 99% of the UK Covered</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              How load balancing works.
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Each connection handles separate traffic streams — your overall speeds stack. For 95% of homeworkers and SMEs, load balancing is plenty. Need single-stream aggregate speed? Our Enterprise tier uses Integra Bonding Technology at £400/month.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FEATURES */}
      {features.map((feature, i) => {
        const isEven = i % 2 === 0;
        const bgClass = isEven ? "bg-surface-dark" : "bg-background";
        const textClass = isEven ? "text-surface-dark-foreground" : "text-foreground";
        const mutedClass = isEven ? "text-surface-dark-muted" : "text-muted-foreground";

        return (
          <div key={feature.title}>
            <section className={`${bgClass} py-16 md:py-24`}>
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className={`grid gap-12 lg:gap-16 grid-cols-1 ${feature.img ? 'lg:grid-cols-2 lg:items-center' : ''}`}>
                  <AnimatedSection className={feature.reverse && feature.img ? 'order-2' : ''}>
                    <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
                      <feature.icon className="h-9 w-9" strokeWidth={1.5} />
                    </motion.div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{feature.eyebrow}</p>
                    <h2 className={`mb-4 text-heading-1 md:text-display-sm ${textClass}`}>{feature.title}</h2>
                    <p className={`text-lg ${mutedClass} leading-relaxed`}>{feature.description}</p>
                  </AnimatedSection>
                  {feature.img && (
                    <AnimatedSection direction={feature.reverse ? "left" : "right"} delay={0.2} className={feature.reverse ? 'order-1' : ''}>
                      <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                        <img src={feature.img} alt={feature.imgAlt || feature.title} className="w-full h-auto object-cover aspect-video" loading="lazy" />
                      </motion.div>
                    </AnimatedSection>
                  )}
                </div>
              </div>
            </section>
            {i < features.length - 1 && (
              <GradientBand fromColor={isEven ? "hsl(222 47% 11%)" : "hsl(0 0% 100%)"} toColor={isEven ? "hsl(0 0% 100%)" : "hsl(222 47% 11%)"} />
            )}
          </div>
        );
      })}

      {/* STATS + EMPOWERED HOMEWORKERS */}
      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Real-world performance.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Not theoretical speeds — actual results from our installations. Homeworkers consistently achieve 210Mbps average, with crystal-clear VoIP calls and reliable video conferencing.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center mb-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">848<span className="text-3xl">%</span></p>
              <p className="text-surface-dark-muted text-sm">Integra SD-WAN performance compared to ADSL</p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-center p-8 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">210<span className="text-xl ml-1">Mbps</span></p>
              <p className="text-surface-dark-muted text-sm">Average speed delivered over our Integra homeworker services</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex justify-center sm:col-span-2 lg:col-span-1">
              <img src={aerialImg} alt="4G aerial installation" className="h-64 w-auto object-contain" loading="lazy" />
            </motion.div>
          </motion.div>
          <p className="text-xs text-surface-dark-muted/60 text-center">Based on average UK speeds of 9.7Mbps for ADSL connections — Ofcom Home Broadband Report 2022</p>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Customer Reviews</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16 max-w-3xl mx-auto">
              What our customers say
            </h2>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {testimonials.slice(0, visibleTestimonials).map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {visibleTestimonials < testimonials.length && (
            <div className="text-center mt-8">
              <Button variant="outline" onClick={() => setVisibleTestimonials(testimonials.length)}>
                Show More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* PRICING */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Pricing</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Simple pricing. Unlimited data. No surprises.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-4">
              All packages include unlimited data, 24/7 monitoring, and WhatsApp/phone support. No usage caps or throttling.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <a href="https://www.reviews.io/company-reviews/store/www.integra-networks.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                4.9/5 Verified on Reviews.io
              </a>
            </div>
            <p className="text-surface-dark-foreground text-center font-semibold mb-16">
              <span className="text-primary">14 Days</span> — Experience fast setup with Integra. Want it quicker? Tell us.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`rounded-2xl p-6 flex flex-col ${
                  tier.popular
                    ? 'border-2 border-primary bg-primary/10 ring-1 ring-primary/30'
                    : 'border border-white/10 bg-white/5'
                }`}
              >
                {tier.popular && (
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Most Popular</span>
                )}
                <h3 className="text-lg font-bold text-surface-dark-foreground mb-1">{tier.name}</h3>
                <p className="text-sm text-surface-dark-muted mb-4">{tier.speed}</p>
                <p className="text-3xl font-bold text-surface-dark-foreground mb-1">
                  £{tier.price}<span className="text-base font-normal text-surface-dark-muted">pm</span>
                </p>
                <div className="mt-4 mb-4 flex-1">
                  <p className="text-xs text-surface-dark-muted">{tier.staticIp}</p>
                  {tier.features.map((f) => (
                    <p key={f} className="text-xs text-surface-dark-muted mt-1">{f}</p>
                  ))}
                </div>
                <p className="text-xs font-semibold text-surface-dark-foreground mb-4">{tier.install}</p>
                <Button asChild size="sm" variant={tier.popular ? "default" : "outline"} className={tier.popular ? '' : 'border-white/20 text-surface-dark-foreground hover:bg-white/10'}>
                  <Link to="/availability-checker">Check Availability</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-surface-dark-muted text-sm mb-4">Unsure what option is right for you?</p>
            <Button asChild variant="outline" className="border-white/20 text-surface-dark-foreground hover:bg-white/10">
              <Link to="/contact">Speak to our team</Link>
            </Button>
          </div>
          <p className="text-xs text-surface-dark-muted/60 text-center mt-6">
            Installation costs can vary subject to the property's size and the WiFi network requirements.
          </p>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* FREE WIFI MESH PROMO */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-[hsl(200,100%,45%)] p-10 md:p-14 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  Free WiFi Mesh Installation <span className="text-white/70">(worth £350)</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/availability-checker">Check Availability</Link>
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

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FAQ */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16">FAQ's</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
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
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-surface-dark-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-surface-dark-muted flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-4 text-sm text-surface-dark-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Find Out More</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">Related Content</h2>
          </AnimatedSection>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            <Link to="/sectors/homeworkers" className="group block">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <div className="aspect-video overflow-hidden">
                  <img src={heroImg} alt="Homeworkers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
              </motion.div>
              <h3 className="text-heading-3 text-foreground mt-5 mb-2 group-hover:text-primary transition-colors">Homeworkers</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">Work from home worry-free with Integra's robust internet solutions.</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                Homeworkers <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link to="/connectivity/home-wifi" className="group block">
              <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <div className="aspect-video overflow-hidden">
                  <img src={stableImg} alt="Home WiFi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
              </motion.div>
              <h3 className="text-heading-3 text-foreground mt-5 mb-2 group-hover:text-primary transition-colors">Home WiFi</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">Experience seamless, high-speed home WiFi solutions.</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold uppercase tracking-wide group-hover:gap-2 transition-all">
                Home WiFi <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IntegraSDWAN;
