import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Camera, Hammer, Wifi } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Bonded multi-SIM connectivity engineered for active sites",
    href: "/integra-sd-wan",
  },
  {
    icon: Camera,
    title: "Site CCTV",
    description: "Static-IP CCTV that works on the same connection as your office",
    href: "/cctv",
  },
  {
    icon: Hammer,
    title: "Construction Sites",
    description: "Sector-specific solutions for construction PMs and contractors",
    href: "/construction-site-broadband",
  },
  {
    icon: Wifi,
    title: "Business Wi-Fi",
    description: "Enterprise-grade wireless for the welfare cabin and beyond",
    href: "/business-wifi",
  },
];

const ConstructionSiteInternet = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      title: "No Utilities, No Service",
      description: "Openreach won't come to a site without power and a permanent address. So you wait. We don't need either.",
    },
    {
      title: "Welfare Wi-Fi Can't Carry It",
      description: "BIM uploads, video calls, drone footage, CCTV — a £30 hotspot chokes the moment everyone logs on.",
    },
    {
      title: "12-Month Contracts on a 6-Month Site",
      description: "Most ISPs lock you in for the duration of someone else's contract — not yours. We don't.",
    },
    {
      title: "Kit That Goes In The Skip",
      description: "Site finishes, the router gets binned. Ours redeploys to your next project — at no extra cost.",
    },
  ];

  const faqItems = [
    {
      question: "How fast can you actually have us live?",
      answer:
        "From a confirmed survey, we ship and install within 10 working days as standard. Many sites go live faster — McGee's London sites have been turned around in a week. We pre-configure everything in our workshop so the on-site install is typically 30–60 minutes.",
    },
    {
      question: "What if the site has zero infrastructure — no power, no address?",
      answer:
        "That's our specialty. Our cellular SD-WAN units run from a 12V supply — they'll run off a generator, a solar setup, or even a vehicle battery while you wait for grid power. No fixed line, no wayleaves, no trenching, no Openreach.",
    },
    {
      question: "Do you handle CCTV and welfare Wi-Fi off the same connection?",
      answer:
        "Yes — the same bonded 4G/5G connection backs your CCTV (with a static IP for remote viewing), the welfare cabin Wi-Fi, the site office, and any IoT devices. One connection, multiple SSIDs and VLANs, all monitored from our UK NOC.",
    },
    {
      question: "What happens to the kit when the site finishes?",
      answer:
        "We redeploy it to your next site. The contract follows the project, not the postcode. If you've got two sites running at once, we'll quote you a multi-site bundle that's typically 15–20% cheaper than two standalone connections.",
    },
    {
      question: "What speeds will I actually get?",
      answer:
        "Up to 350Mbps download and 100Mbps upload on bonded 4G/5G in well-served areas — verified during our survey, not guessed from a coverage checker. Even on more remote sites we'll commit to a minimum performance figure in writing before you sign.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Construction Site Internet | Live in 10 working days | Integra Networks"
        description="Portable 4G/5G site connectivity. Up to 350Mbps down, 100Mbps up. Live in 10 working days. Monthly terms. Kit redeploys when you move. CCTV-ready static IPs included."
        keywords="construction site internet, construction site wifi, temporary site connectivity, internet for construction site, mobile internet for building sites, site office wifi solution"
        url="/lp/construction-site-internet"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Construction Site Internet. Live in 10 working days.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Portable 4G/5G connectivity for active sites. Up to 350Mbps download, 100Mbps upload. Monthly contracts. Kit redeploys when you move on.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=construction-site-internet">Get a Site Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=construction-site-internet&type=survey">Book a Survey Call</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Why Sites Stay Disconnected</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              The connectivity gap costs you days
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Active sites have an immediate problem. Standard ISPs aren't built for it.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">{point.title}</h3>
                <p className="text-surface-dark-muted leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* KEY METRICS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Built for how sites actually run
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Not a residential router with a hi-vis sticker. Engineered for construction.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">14d</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Live in 10 working days</h3>
              <p className="text-muted-foreground">
                Survey, ship, install, online. No waiting on Openreach, no wayleaves, no trenching.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">350<span className="text-2xl">Mbps</span></div>
              <h3 className="text-xl font-medium text-foreground mb-3">Real Download Speeds</h3>
              <p className="text-muted-foreground">
                Bonded 4G/5G via cellular SD-WAN. Big enough for BIM, video calls, and drone footage simultaneously.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">100<span className="text-2xl">Mbps</span></div>
              <h3 className="text-xl font-medium text-foreground mb-3">Upload That Doesn't Choke</h3>
              <p className="text-muted-foreground">
                Where most cellular fails. We bond multiple SIMs to give you upload performance that handles CCTV and progress photos without breaking a sweat.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* PROOF POINTS / SOLUTIONS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Three reasons construction PMs choose us
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Most ISPs sell broadband. We solve site connectivity.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-medium text-surface-dark-foreground mb-3">No utilities? No problem.</h3>
              <p className="text-surface-dark-muted leading-relaxed">
                Openreach won't come to a site without power and a permanent address. We will. Bonded 4G/5G via cellular SD-WAN — no trenching, no wayleaves, runs from a 12V supply.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-medium text-surface-dark-foreground mb-3">Built for how sites actually work.</h3>
              <p className="text-surface-dark-muted leading-relaxed">
                Monthly agreements that flex with your programme. Kit redeploys to your next site. CCTV-ready static IPs included as standard.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-medium text-surface-dark-foreground mb-3">350Mbps / 100Mbps upload.</h3>
              <p className="text-surface-dark-muted leading-relaxed">
                Big enough for BIM file transfers, video calls, drone footage, and remote CCTV — without choking the welfare Wi-Fi.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* HOW IT WORKS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">
              From enquiry to live in 10 working days
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Survey</h3>
              <p className="text-muted-foreground">Drone or desktop survey of the site. We map signal, identify the right cells, and design the kit list.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Build & Ship</h3>
              <p className="text-muted-foreground">Pre-configured in our UK workshop. Tested end-to-end before it leaves us. Couriered to site or hand-delivered.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <span className="text-3xl font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">Live & Monitored</h3>
              <p className="text-muted-foreground">30–60 minute install. UK NOC monitors it 24/7. You get a single number when something goes wrong.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* CASE STUDY HIGHLIGHT — McGee */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Featured Customer</p>
                  <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground mb-4">McGee Construction</h2>
                  <p className="text-surface-dark-muted mb-6">
                    350Mbps connectivity rolled out across some of London's largest active demolition and construction sites. CCTV, welfare cabins, site offices, and BIM uploads — all on a single bonded 4G/5G connection that redeploys when the site moves.
                  </p>
                  <div className="flex gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-medium text-primary mb-1">350Mbps</div>
                      <p className="text-sm text-surface-dark-muted">Verified throughput on site</p>
                    </div>
                    <div>
                      <div className="text-3xl font-medium text-primary mb-1">14d</div>
                      <p className="text-sm text-surface-dark-muted">From survey to live</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/customers/mcgee-construction">Read the McGee Story</Link>
                  </Button>
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <p className="text-surface-dark-muted text-center px-6">London's biggest sites · CCTV-ready · BIM uploads · No fibre needed</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Secondary Case Study — WRSA */}
          <AnimatedSection>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Also Worth Reading</p>
                  <h3 className="text-heading-2 text-surface-dark-foreground mb-3">WRSA Steam Rally — 500Mbps in a field for 8,000 visitors</h3>
                  <p className="text-surface-dark-muted">
                    If we can put half a gigabit into a field for a weekend event, we can put it on your site for a year. Same kit, same engineers, same approach.
                  </p>
                </div>
                <div>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">
                    <Link to="/customers/steaming-ahead-with-enhanced-festival-connectivity">Read the Story</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* TRUST BAR */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Trusted on active sites by</p>
          <p className="text-lg text-foreground font-medium">McGee · Seacon Group · WB Power · and 100+ UK businesses</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
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
                  <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FINAL CTA */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-blue-600 p-10 md:p-14 text-center" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}>
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Get your site connected in 10 working days
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Tell us where you're building. We'll come back within one working day with a kit list, a price, and a go-live date.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-surface-dark font-semibold hover:bg-white/90">
                    <Link to="/contact?source=construction-site-internet">Get a Site Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    <Link to="/contact?source=construction-site-internet&type=survey">Book a Survey Call</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <RelatedServices services={relatedServices} />
    </PageLayout>
  );
};

export default ConstructionSiteInternet;
