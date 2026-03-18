import { Link } from "react-router-dom";
import { WifiOff, MonitorPlay, CloudUpload, Satellite, House, CircleCheckBig, ArrowLeft, Star, ExternalLink, Network, Wifi, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import CustomerLogoBar from "@/components/shared/CustomerLogoBar";

import heroImg from "@/assets/sectors/homeworker-remote-work.avif";
import familyImg from "@/assets/sectors/homeworker-family-connectivity.avif";
import cottageImg from "@/assets/sectors/homeworker-cottage-broadband.avif";
import ruralImg from "@/assets/sectors/homeworker-rural-property.avif";
import wifiImg from "@/assets/sectors/homeworker-wifi-setup.avif";

// ─── Pain-point cards ─────────────────────────────────────────────────────────

const relatedServices = [
  {
    title: "Integra Connect",
    description: "Reliable 4G/5G broadband from £55/mo — perfect for everyday home use.",
    href: "/connectivity/integra-connect",
    icon: Wifi,
    badge: "From £55/mo",
  },
  {
    title: "Integra SD-WAN",
    description: "Need more speed? Bonded 4G/5G with up to 350Mbps and 99.5% uptime SLA.",
    href: "/connectivity/integra-sd-wan",
    icon: Network,
  },
  {
    title: "Home WiFi",
    description: "Professional WiFi throughout your property — house, outbuildings, garden office.",
    href: "/connectivity/home-wifi",
    icon: Monitor,
  },
];

const painPoints = [
  {
    icon: WifiOff,
    title: "No Fibre at Your New Property?",
    description: "You've moved somewhere beautiful — but Openreach says fibre is years away. We bypass them entirely with cellular broadband.",
  },
  {
    icon: MonitorPlay,
    title: "Video Calls Freezing Mid-Sentence?",
    description: "Two 4G/5G connections load-balanced means your Teams call stays stable even when the kids are streaming Netflix. Dual-network redundancy, not single-line hope.",
  },
  {
    icon: CloudUpload,
    title: "Uploads Taking Hours?",
    description: "Our SD-WAN delivers 100Mbps+ upload speeds. Send large files, back up to the cloud, and share screen without the spinning wheel.",
  },
];

// ─── Solution checklist ───────────────────────────────────────────────────────

const solutionItems = [
  "Installed in Under 14 Days — Single Visit",
  "Full WiFi Design — House, Office, Outbuildings",
  "UK-Based Support via Phone & WhatsApp",
];

// ─── Review excerpts ───────────────────────────────────────────────────────────

const reviews = [
  {
    author: "Verified Customer",
    role: "via Reviews.io",
    content: "I have had a great experience with Integra. The people I have spoken to have been understanding and very human throughout the entire process and the internet speeds I am now getting mean a huge increase in my career opportunity.",
    rating: 5,
  },
  {
    author: "Duncan Hall",
    role: "via Reviews.io",
    content: "Working with Integra Networks has been a rare pleasure: they could not have been more patient, helpful, friendly and professional. They found the exact solution for our needs, and our internet provision is just excellent, despite our remote and rural location.",
    rating: 5,
  },
  {
    author: "Dane",
    role: "via Reviews.io",
    content: "Provided a fast and friendly service for getting our Internet online. So far the service has been reliable and fast, greatly outperforming the limited connectivity we had through normal domestic Internet.",
    rating: 5,
  },
  {
    author: "Sally Wiltshire",
    role: "via Reviews.io",
    content: "Excellent service, both from the network design and installation team, and now the ongoing support. We have reliable, fast broadband for the first time ever in our rural location.",
    rating: 5,
  },
];

// ─── Animation variants ──────────────────────────────────────────────────────

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

// ─── Page Component ───────────────────────────────────────────────────────────

const Homeworkers = () => {
  return (
    <PageLayout>
      <SEO
        title="Homeworkers"
        description="Up to 350Mbps via cellular SD-WAN. No fibre. 14-day install."
        keywords="homeworker broadband, rural internet, SD-WAN, remote work connectivity, fibre alternative, work from home internet, rural broadband"
        url="/sectors/homeworkers"
      />

      {/* ── FULL-BLEED HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Remote worker using Integra SD-WAN at home"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                    Sectors <ArrowLeft className="h-3 w-3 rotate-180" /> Homeworkers
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
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">
              Your job depends on your internet. We fix that.
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              Up to 350Mbps via cellular SD-WAN. No fibre required. No Openreach delays. Installed by our engineers in under 14 days — so you can stop apologising for frozen video calls.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base"
              >
                <Link to="/contact">Get Connected</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {painPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className="text-center">
                <motion.div
                  className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
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

      {/* ── BYPASS OPENREACH ─────────────────────────────────────────────── */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Network className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">
              No fibre? No problem.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use two 4G/5G networks bonded together via Integra hardware — delivering fibre-like speeds without any physical cable to your property. Installed by our engineers in a single visit, typically within 14 days.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden bg-background-alt"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={familyImg}
                alt="Family using reliable home broadband powered by Integra"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(222 47% 11%) 100%)' }} className="h-1" />

      {/* TOO FAR FROM EXCHANGE — full-bleed image overlay */}
      <section className="relative flex items-center" style={{ backgroundColor: 'hsl(222 47% 11%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={cottageImg} alt="Rural cottage with reliable Integra broadband connectivity" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface-dark via-surface-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-12 md:py-16 flex justify-end">
          <AnimatedSection>
            <div className="text-right">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-white max-w-lg ml-auto">Miles from the exchange? That's our speciality.</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-md ml-auto">
                Copper degrades over distance — that's why your ADSL crawls at 2Mbps. We don't use copper or fibre. Our cellular SD-WAN works anywhere with 4G/5G coverage, which is 99% of the UK.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom, hsl(222 47% 11%) 0%, hsl(0 0% 100%) 100%)' }} className="h-1" />

      {/* ── FULL WIFI COVERAGE ───────────────────────────────────────────── */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <House className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">
              WiFi that reaches the garden office.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We design your WiFi network for your exact property — main house, garden office, outbuildings. Commercial-grade access points, properly placed, with seamless roaming between rooms.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <motion.div
              className="rounded-2xl overflow-hidden bg-background-alt"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={ruralImg}
                alt="Rural property with full WiFi coverage from Integra"
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── COMPLETE NETWORK SOLUTION ────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
              <motion.div
                className="rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={wifiImg}
                  alt="Professional network installation by Integra engineers"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2">
              <h2 className="mb-4 text-heading-1 md:text-display-sm text-surface-dark-foreground">
                Internet, WiFi, and support. All included.
              </h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-8">
                We don't just deliver a connection and leave. Our engineers install the broadband, set up your WiFi network, and monitor everything 24/7 via Integra Cloud. If something drops, we know before you do.
              </p>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {solutionItems.map((item) => (
                  <motion.li key={item} variants={checklistItem} className="flex items-center gap-3">
                    <CircleCheckBig className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-surface-dark-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CustomerLogoBar />

      {/* RELATED SERVICES */}
      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />
      <RelatedServices
        services={relatedServices}
        heading="Complementary Services"
        subheading="Explore connectivity solutions and check coverage at your location."
      />

      {/* ── REVIEWS SECTION ──────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground mb-2">
              Trusted by Homeworkers Across the UK
            </h2>
            <p className="text-lg text-surface-dark-muted max-w-2xl mx-auto mb-8">
              Hundreds of remote workers now rely on Integra for fast, reliable internet wherever they are.
            </p>
            <a
              href="https://www.reviews.io/company-reviews/store/www.integra-networks.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Read all reviews on Reviews.io
              <ExternalLink className="h-4 w-4" />
            </a>
          </AnimatedSection>

          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={`${review.author}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
                }}
                className="bg-surface-dark-alt rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-surface-dark-foreground leading-relaxed mb-6">
                  "{review.content}"
                </p>
                <div>
                  <p className="font-medium text-surface-dark-foreground">{review.author}</p>
                  <p className="text-sm text-surface-dark-muted">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <p className="text-surface-dark-muted mb-6">
              Don't just take our word for it — see what others say on Reviews.io
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-medium h-12 px-8 text-base"
              >
                <a
                  href="https://www.reviews.io/company-reviews/store/www.integra-networks.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Reviews on Reviews.io
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="text-heading-1 md:text-display-sm text-white mb-6">
              Stop apologising for your internet.
            </h2>
            <p className="text-lg text-surface-dark-muted mb-10 leading-relaxed">
              Up to 350Mbps. Installed in 14 days. No fibre required. No Openreach wait.
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

export default Homeworkers;
