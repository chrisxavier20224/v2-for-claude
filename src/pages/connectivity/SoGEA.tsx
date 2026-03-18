import { Link } from "react-router-dom";
import { PiggyBank, Clock, ArrowLeft, ArrowRight, Phone, Wifi, Zap, Shield, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/shared/Section";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";
import SchemaMarkup from "@/components/shared/SchemaMarkup";

import heroImg from "@/assets/connectivity/sdwan-install.webp";
import deployImg from "@/assets/connectivity/managed-sim-voice.jpg";
import switchImg from "@/assets/connectivity/unified-comms-deploy.jpg";

const painPoints = [
  {
    icon: PiggyBank,
    title: "No More Line Rental",
    description: "SoGEA removes the traditional phone line entirely. Save £10–15/month on line rental — that's up to £540 over a 36-month contract. Broadband-only, no legacy copper voice circuit required.",
  },
  {
    icon: Clock,
    title: "PSTN-Ready Before January 2027",
    description: "The UK PSTN network switches off January 2027. SoGEA moves your broadband off the legacy phone network now — so you're not scrambling at the deadline.",
  },
  {
    icon: Shield,
    title: "Same Speeds, Simpler Setup",
    description: "SoGEA delivers the same FTTC speeds you're used to (up to 80Mbps down, 20Mbps up) — but ordered as a single broadband-only product. No separate phone line to provision or maintain.",
  },
];

const benefits = [
  { title: "Lower Monthly Cost", description: "Eliminate phone line rental charges. One bill, one product, lower cost." },
  { title: "VoIP-Ready", description: "Pair with hosted VoIP for business calls. Keep your existing phone numbers." },
  { title: "90%+ UK Coverage", description: "Available anywhere FTTC is available — that's over 90% of UK premises via Openreach." },
  { title: "Fast Provisioning", description: "Simpler order process than FTTC + phone line. Single-order delivery." },
  { title: "Future-Proof", description: "Fully compliant with the PSTN switch-off. No last-minute migration needed." },
  { title: "Business Continuity", description: "Pair with 4G/5G Backup for failover — if your SoGEA line drops, cellular keeps you working." },
];

const faqs = [
  { q: "What is SoGEA?", a: "SoGEA stands for Single Order Generic Ethernet Access. It's a broadband-only product that delivers FTTC speeds without requiring a traditional PSTN phone line. Think of it as FTTC broadband without the phone line rental." },
  { q: "What speeds does SoGEA deliver?", a: "SoGEA delivers the same speeds as standard FTTC — up to 80Mbps download and 20Mbps upload. Actual speeds depend on your distance from the nearest street cabinet." },
  { q: "What happens to my phone calls?", a: "SoGEA removes the traditional phone line. You'll need a VoIP solution for voice calls. We offer hosted VoIP from £10/handset/month with full number porting — your customers won't notice any change." },
  { q: "How does SoGEA relate to the PSTN switch-off?", a: "BT Openreach is switching off the traditional phone network (PSTN) by January 2027. SoGEA proactively moves your broadband off the legacy network now, so you're not forced into a rushed migration at the deadline." },
  { q: "Can I keep my existing phone number?", a: "Yes. When you move to VoIP, we port your existing geographic and non-geographic numbers. The process typically takes 5–15 working days." },
  { q: "What about alarm systems and payment terminals?", a: "Any equipment currently using a PSTN line (fire alarms, security systems, lift lines, card terminals) will need separate migration. We can assess your full estate and recommend the right solution for each device." },
  { q: "Is SoGEA available at my address?", a: "SoGEA is available wherever FTTC broadband is available — over 90% of UK premises. Use our availability checker or contact us and we'll confirm availability at your postcode." },
  { q: "What if I need faster speeds?", a: "If SoGEA speeds (up to 80Mbps) aren't enough, consider our SD-WAN packages starting from £80/month +VAT for up to 350Mbps+ via bonded cellular, or a leased line for symmetric gigabit speeds." },
];

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    icon: Phone,
    title: "Unified Communications",
    description: "Hosted VoIP to replace your PSTN phone lines.",
    href: "/connectivity/unified-communications",
  },
  {
    icon: Wifi,
    title: "Integra SD-WAN",
    description: "Bonded 4G/5G for faster speeds and failover.",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Zap,
    title: "4G/5G Backup",
    description: "Cellular failover if your SoGEA line drops.",
    href: "/connectivity/4g-5g-backup",
  },
];

const sogeaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SoGEA Business Broadband",
  "description": "Single Order Generic Ethernet Access — broadband without a phone line. PSTN switch-off ready.",
  "provider": {
    "@type": "Organization",
    "name": "Integra Networks",
    "url": "https://integra-networks.co.uk"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "serviceType": "Business Broadband"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const SoGEA = () => {
  return (
    <PageLayout>
      <SEO
        title="SoGEA & FTTP Broadband"
        description="SoGEA and FTTP without line rental. SoGEA 80Mbps, FTTP 1Gbps. 90%+ UK coverage. PSTN-ready."
        keywords="SoGEA, SOGEA broadband, FTTP, fibre to the premises, business broadband no phone line, PSTN switch off, broadband only, FTTC no line rental, full fibre"
        url="/connectivity/sogea"
      />
      <SchemaMarkup data={sogeaSchema} />
      <SchemaMarkup data={faqSchema} />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="SoGEA business broadband installation" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-white">
                  Connectivity <ArrowLeft className="h-3 w-3 rotate-180" /> SoGEA
                </span>
              </Link>
            </motion.div>
            <h1 className="mb-6 text-heading-1 md:text-display-sm text-white max-w-2xl">Broadband without the phone line.</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              SoGEA delivers FTTC broadband without legacy line rental. The PSTN switches off January 2027 — move now, save money, and future-proof your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-lg font-medium h-12 px-8 text-base">
                  <Link to="/check">Check Availability</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">SoGEA Broadband</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              The phone line is going away. Your broadband doesn't have to.
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-2xl mx-auto mb-16">
              SoGEA (Single Order Generic Ethernet Access) delivers the same FTTC speeds you rely on — without the legacy PSTN phone line underneath. Simpler, cheaper, future-proof.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp} className="text-center">
                <motion.div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1, rotate: 3 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
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

      {/* PSTN SWITCH-OFF CONTEXT */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 mb-6">
              <AlertTriangle className="h-9 w-9" strokeWidth={1.5} />
            </div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">January 2027. The clock is ticking.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BT Openreach is switching off the traditional PSTN telephone network by January 2027. If your broadband currently relies on a phone line (most FTTC connections do), you'll need to migrate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SoGEA moves your broadband off the legacy network now — on your terms, not in a last-minute rush. Pair it with hosted VoIP and your business is fully future-proofed.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Already using FTTP (full fibre)? You're not affected. SoGEA is specifically for businesses still on FTTC/copper infrastructure.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <motion.div className="rounded-2xl overflow-hidden bg-background-alt" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={switchImg} alt="PSTN switch-off migration" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* BENEFITS GRID */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-16">Why SoGEA?</h2>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-heading-3 text-surface-dark-foreground mb-2">{benefit.title}</h3>
                <p className="text-surface-dark-muted">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* VOIP PAIRING */}
      <Section size="large">
        <div className="grid gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <AnimatedSection direction="left" delay={0.2} className="order-2 lg:order-1">
            <motion.div className="rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <img src={deployImg} alt="VoIP phone system" className="w-full h-auto object-cover aspect-video" loading="lazy" />
            </motion.div>
          </AnimatedSection>
          <AnimatedSection className="order-1 lg:order-2">
            <motion.div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6" whileHover={{ scale: 1.1 }}>
              <Phone className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
            <h2 className="mb-4 text-heading-1 md:text-display-sm text-foreground">SoGEA + VoIP. The complete package.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SoGEA handles your broadband. Hosted VoIP handles your phone calls. Together, they replace everything your old phone line did — for less money, with more features.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              From £10/handset/month — Teams integration, call routing, voicemail-to-email, call recording, and full number porting. Your customers dial the same number they always have.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" variant="outline">
                <Link to="/connectivity/unified-communications">Learn About VoIP <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </Section>

      {/* FTTP UPGRADE PATH */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Full Fibre Available?</p>
              <h2 className="text-heading-1 md:text-display-sm text-foreground mb-6">FTTP — Fibre to the Premises</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                If FTTP is available at your address, it replaces copper entirely with fibre all the way to your door. Speeds from 40Mbps to 1Gbps, lower latency than SoGEA, and no distance degradation. It's the best standard broadband option available.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Not sure which you need? We check availability at your address and recommend the best option — SoGEA if you're on copper, FTTP if full fibre has reached you, or one of our SD-WAN solutions if neither delivers enough.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg">
                  <Link to="/check">Check What's Available at Your Address <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* FAQ */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-12">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="border border-white/10 rounded-xl p-6">
                  <h3 className="text-heading-3 text-surface-dark-foreground mb-2">{faq.q}</h3>
                  <p className="text-surface-dark-muted">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(222 47% 11%)" />

      <RelatedServices services={relatedServices} heading="Related Services" subheading="Complete your connectivity and communications stack." />

      {/* CTA */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-6">Ready to drop the phone line?</h2>
            <p className="text-lg text-surface-dark-muted mb-8 max-w-2xl mx-auto">Check if SoGEA is available at your address. The PSTN switches off January 2027 — act now and migrate on your own terms.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg"><Link to="/check">Check Availability <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-surface-dark-foreground hover:bg-white/10">
                  <Link to="/contact">Speak to Our Team</Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default SoGEA;
