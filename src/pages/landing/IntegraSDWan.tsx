import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Clock, PoundSterling, ShieldCheck, Wifi, Zap, MapPin, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import HubSpotMeeting from "@/components/shared/HubSpotMeeting";
import SEO from "@/components/shared/SEO";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const reviews = [
  {
    name: "Jason Jones",
    date: "4th April 2023",
    text: "Finally, a solution that works. We live in a rural area without viable fibre options, and too far from the cabinet for useful speeds over copper. After living with Starlink for a year (incredible speeds, but latency is still no good for video calls — and customer service is non-existent when it goes wrong) we switched to a bonded 4G solution from Integra. We finally have a very stable, reliable and fast connection.",
  },
  {
    name: "Lex Butler",
    date: "14th July 2022",
    text: "Having lived in the rural country for 12 years, I have always struggled to get any decent internet. Which has impacted my working from home and my enjoyment of entertainment. Finding Integra was life-changing. They were quick to respond, professional and seamlessly got me up and running in no time.",
  },
  {
    name: "Andrew Briggs",
    date: "2nd March 2022",
    text: "We have been so impressed by Integra Networks... from initial enquiry, to installation and a year on, backup service, all absolutely faultless. They have enabled us to set up business in a very remote area where the best BT could offer was 0.1mps. Thanks to Integra, we enjoy up to 100mps, and have never once lost signal or service.",
  },
  {
    name: "Sonja Wilmink",
    date: "26th Feb 2023",
    text: "From having had only 11mbps of internet speed to over 100mbps most days has made a huge difference to our use of the internet. We did not have to wait long for the installation (about 2 weeks) and the work was carried out fast and efficiently.",
  },
  {
    name: "Jonathan Brown",
    date: "18th Nov 2022",
    text: "Integra and their solution allowed me to continue working from home in a rural area with no other internet solution. The team were fast to deliver and super responsive whenever I needed help or had a question. Once installed the technology just worked and that's exactly what I needed!",
  },
  {
    name: "Goldwing Farm",
    date: "8th Jan 2022",
    text: "Excellent service very fast download/upload speeds. Very reliable internet and always on hand to speak to for troubleshooting. Always had issues with normal wired broadband but since having this installed we've never looked back!",
  },
];

const pricingTiers = [
  { name: "Lite", speed: "Up to 70Mbps", price: "99", install: "£1,700", features: ["Static IP £5pm"] },
  { name: "Homeworker", speed: "Up to 250Mbps", price: "110", install: "£2,200", features: ["Static IP £5pm"] },
  { name: "Business", speed: "Up to 300Mbps", price: "120", install: "£2,450", features: ["Includes Static IP", "Diversity Mode for card payments"], highlighted: false },
  { name: "Ultrafast", speed: "Up to 400Mbps", price: "160", install: "£2,900", features: ["Includes Static IP", "Diversity Mode for card payments"], highlighted: true },
  { name: "Enterprise", speed: "Up to 500Mbps", price: "400", install: "£3,300", features: ["Includes Static IP", "Diversity Mode for card payments"] },
];

const faqItems = [
  {
    question: "Who can benefit from Integra SD-WAN?",
    answer: "Anyone in a rural or underserved area struggling with slow broadband can benefit. This includes farmers, homeworkers, small businesses, holiday lets, construction sites, and estates. If fibre isn't available or excess construction charges are too high, SD-WAN is the answer.",
  },
  {
    question: "How can I determine the speed you can offer at my property?",
    answer: "Use our Availability Checker to enter your postcode. We run a coverage analysis across all major UK mobile networks to estimate the speeds achievable at your location. For a more precise estimate, we can arrange a free site survey.",
  },
  {
    question: "Is a property visit necessary for service assessment?",
    answer: "For most installations, yes — we conduct a free site survey to test signal strength, plan equipment placement, and ensure optimal performance. This typically takes 30-60 minutes and there's no obligation.",
  },
  {
    question: "How does Integra's service function as a temporary connection before a dedicated fibre leased line is installed?",
    answer: "Many customers use our SD-WAN as a bridge while waiting for fibre. Our service can be live in 14 days, giving you fast connectivity immediately. When your fibre arrives, we can either remove our equipment or keep it as a backup failover connection.",
  },
  {
    question: "What if I don't get the estimated speeds during the installation process?",
    answer: "We test speeds during installation and optimise antenna placement for the best possible performance. If we can't achieve the speeds we quoted, we'll discuss alternative solutions or adjust your plan accordingly. We never leave a customer with a subpar connection.",
  },
  {
    question: "What is the installation process for Integra SD-WAN?",
    answer: "Our engineer visits your property, installs external antennas (usually on a mast or wall bracket), sets up the SD-WAN router, configures your network, and tests everything. The whole process typically takes half a day. We handle all the technical setup — you just need to provide a power socket.",
  },
];

const IntegraSDWan = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Load Typeform embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Integra SD-WAN | Fast Internet Without Fibre | Integra Networks"
        description="Tired of waiting for fibre? Enjoy fast internet in under 14 days. With 99% UK Coverage, Integra can transform your connectivity. Stop waiting for Fibre and go live with Integra."
        keywords="SD-WAN, rural broadband, fast internet, no fibre, Integra Networks, 4G broadband, 5G broadband"
        url="/integra-sd-wan"
      />

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/20" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Integra SD-WAN</p>
              <h1 className="text-heading-1 md:text-display-sm text-white max-w-xl font-medium leading-tight">
                Tired of waiting for Fibre?
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg mt-6">
                Enjoy fast internet in under 14 days. With 99% UK Coverage, Integra can transform your internet connectivity. Stop waiting for Fibre and go live with Integra.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                  <a href="#availability-checker">Check Availability</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                  <a href="tel:02033887111">Call 0203 388 7111</a>
                </Button>
              </div>
            </AnimatedSection>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">The Perfect Solution for Rural Connectivity</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-6 max-w-3xl mx-auto">
              Say goodbye to slow internet with Integra SD-WAN
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Integra provides fast and reliable connectivity solutions for businesses and consumers without access to fibre internet.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Tired of waiting for the Fibre rollout in your area?</h3>
              <p className="text-surface-dark-muted leading-relaxed">Say goodbye to slow internet speeds with Integra. We can enhance your connectivity in just a few weeks.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <PoundSterling className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Frustrated with excessive construction charges?</h3>
              <p className="text-surface-dark-muted leading-relaxed">Don't pay thousands to Openreach. Integra offers a flat rate installation fee with no hidden costs.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">Worried about losing critical services during an internet outage?</h3>
              <p className="text-surface-dark-muted leading-relaxed">Integra's resilient service ensures that your essential services remain active, giving you peace of mind.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* 99% COVERAGE + FEATURES */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Near-Total Connectivity: 99% of the UK Covered</p>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-6 max-w-3xl mx-auto">
              Integra SD-WAN: Enhancing Your Connectivity
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Integra's SD-WAN service merges multiple network connections, providing faster 4G/5G speeds than a single network operator. Experience superior connectivity with Integra.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: Wifi, title: "Broadband Speeds", subtitle: "Rapid, reliable internet", desc: "Experience broadband speeds via 4G/5G networks. Stream, work, and connect without interruption." },
              { icon: Zap, title: "Lightning Fast Uploads", subtitle: "Secure and speedy file transfers", desc: "Effortlessly upload large files, like construction/CAD files and graphic designs. With Integra, secure and speedy data transfers keep your projects moving." },
              { icon: ShieldCheck, title: "Seamless IP Integration", subtitle: "Connectivity for your security needs", desc: "Connect your CCTV, VPN, and firewall systems with ease. Our dedicated team is ready to assist with your IP address needs." },
              { icon: MapPin, title: "99% UK Coverage", subtitle: "Reaching the unreachable", desc: "Our bonded cellular SD-WAN reaches 99% of UK postcodes. If we can cover you, we'll tell you upfront." },
              { icon: Clock, title: "14-Day Install", subtitle: "Live in weeks, not months", desc: "From survey to live in just 14 days. No digging, no planning permission, no excess construction charges." },
              { icon: PoundSterling, title: "Fixed Pricing", subtitle: "No hidden costs", desc: "Flat-rate installation with transparent monthly pricing. No surprises, no excess charges, no hidden fees." },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-xl border border-border bg-card p-6">
                <feature.icon className="h-6 w-6 text-primary mb-3" />
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{feature.subtitle}</p>
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* HOMEWORKERS SECTION + STATS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">Empowered Homeworkers</h2>
              <p className="text-lg text-surface-dark-muted leading-relaxed mb-6">
                Explore the power of Integra SD-WAN — propelling remote workforces with unrivaled speed where Fibre cannot. Experience continuity for all your online engagements.
              </p>
              <p className="text-surface-dark-muted leading-relaxed mb-8">Take a look at our selected client feedback below.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-4xl font-medium text-white">848<span className="text-primary">%</span></p>
                  <p className="text-sm text-surface-dark-muted mt-2">Integra SD-WAN performance compared to ADSL</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-4xl font-medium text-white">210<span className="text-primary">Mbps</span></p>
                  <p className="text-sm text-surface-dark-muted mt-2">Average speed delivered over our Integra homeworker services</p>
                </div>
              </div>
              <p className="text-xs text-surface-dark-muted mt-4">Based on average UK speeds of 9.7Mbps for ADSL connections — Ofcom Home Broadband Report 2022</p>
            </AnimatedSection>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-16">What Our Customers Say</h2>
          </AnimatedSection>
          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {reviews.map((review, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-xl border border-border bg-card p-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-3">{review.date}</p>
                <h3 className="text-base font-medium text-foreground mb-3">{review.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* PRICING */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Pricing</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Integra SD-WAN: Revolutionising remote connectivity.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Enjoy unlimited data, reduced latency, and dependable support with Integra.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-medium text-white">4.9/5</p>
                <p className="text-sm text-surface-dark-muted mt-1">Verified on Reviews.io</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-medium text-white">14 Days</p>
                <p className="text-sm text-surface-dark-muted mt-1">Experience fast setup with Integra</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-3xl font-medium text-white">99%</p>
                <p className="text-sm text-surface-dark-muted mt-1">UK coverage via cellular SD-WAN</p>
              </div>
            </div>
          </AnimatedSection>

          <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-xl p-6 text-center ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary/50"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-1">{tier.name}</h3>
                <p className="text-sm text-surface-dark-muted mb-4">{tier.speed}</p>
                <p className="text-4xl font-medium text-white mb-1">
                  {tier.price}<span className="text-lg text-surface-dark-muted">pm</span>
                </p>
                <Button asChild size="sm" className="w-full mt-4 mb-4" variant={tier.highlighted ? "default" : "outline"}>
                  <a href="#availability-checker">Check Availability</a>
                </Button>
                {tier.features.map((f, j) => (
                  <p key={j} className="text-xs text-surface-dark-muted mb-1">{f}</p>
                ))}
                <p className="text-xs text-surface-dark-muted mt-3">Install Cost from {tier.install}</p>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-surface-dark-muted">Unsure what option is right for you? Speak to our team</p>
              <Button asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            <p className="text-xs text-surface-dark-muted mt-4 text-center">Installation Costs can vary subject to the properties size and the WiFi Network requirements.</p>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* TYPEFORM AVAILABILITY CHECKER */}
      <section id="availability-checker" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4">Check Your Availability</h2>
            <p className="text-lg text-muted-foreground text-center mb-10">Enter your details below and we'll check what speeds we can deliver to your property.</p>
          </AnimatedSection>
          <div
            data-tf-live="fMzp0OEu"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* BOOK A CALL */}
      <HubSpotMeeting
        heading="Prefer to Speak to Someone?"
        subtitle="Book a quick call with our team. We'll review your location, talk through options, and give you an honest recommendation."
        variant="dark"
      />

      {/* FAQ */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16">FAQ's</h2>
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
                  className="flex items-center justify-between w-full px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-surface-dark-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-surface-dark-muted flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-4 text-sm text-surface-dark-muted leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <motion.div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-blue-600 p-10 md:p-14 text-center" whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}>
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground mb-3">
                  Free WiFi Mesh Installation (worth £350)
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
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

      {/* CONTACT BAR */}
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
