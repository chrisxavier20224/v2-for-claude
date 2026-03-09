import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ClipboardCheck, ArrowRight, Phone, Mail, Clock, MapPin, ShieldCheck, PoundSterling } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const CheckingOutYourProperty = () => {
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
        title="Get a Connectivity Proposal — Integra Networks"
        description="Share your property details and we'll prepare a detailed connectivity proposal tailored to your needs, including achievable speeds, installation costs, and alternative solutions."
        keywords="connectivity proposal, broadband survey, property broadband check, SD-WAN proposal, Integra Networks"
        url="/checking-out-your-property"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/20" />
        <div className="relative z-10 mx-auto max-w-4xl w-full px-4 sm:px-6 pt-40 pb-20 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6"
            >
              <ClipboardCheck className="h-8 w-8 text-primary" />
            </motion.div>
            <h1 className="text-heading-1 md:text-display-sm text-white font-medium mb-6">
              Let's Check Out Your Property
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Share a few details about your property and we'll prepare a detailed connectivity proposal tailored to your needs — including achievable speeds, installation costs, and alternative solutions if we're not the best fit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">What You'll Receive</p>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground text-center mb-12 max-w-2xl mx-auto">
              Your personalised connectivity proposal will include:
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <MapPin className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="text-base font-medium text-surface-dark-foreground mb-2">Coverage Analysis</h3>
              <p className="text-sm text-surface-dark-muted leading-relaxed">A detailed breakdown of mobile network coverage at your exact location across all major carriers.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <ShieldCheck className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="text-base font-medium text-surface-dark-foreground mb-2">Speed Estimate</h3>
              <p className="text-sm text-surface-dark-muted leading-relaxed">Realistic speed estimates for your property based on our network analysis and real-world installation data.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <PoundSterling className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="text-base font-medium text-surface-dark-foreground mb-2">Installation Cost</h3>
              <p className="text-sm text-surface-dark-muted leading-relaxed">A clear, fixed-price installation quote with no hidden charges or excess construction fees.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <Clock className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="text-base font-medium text-surface-dark-foreground mb-2">Timeline</h3>
              <p className="text-sm text-surface-dark-muted leading-relaxed">Expected installation timeline — typically 14 days from survey to going live with your new connection.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* Typeform Embed */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4">
              Tell Us About Your Property
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10">
              Complete the form below and our survey team will get back to you with a detailed proposal.
            </p>
          </AnimatedSection>
          <div
            data-tf-live="fMzp0OEu"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* How It Works */}
      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground text-center mb-12">
              How It Works
            </h2>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { step: "1", title: "Share Your Details", desc: "Complete the form above with your property details and connectivity requirements." },
              { step: "2", title: "We Analyse Your Location", desc: "Our survey team runs a comprehensive coverage analysis and prepares your personalised proposal." },
              { step: "3", title: "Receive Your Proposal", desc: "We'll send you a detailed proposal with speeds, costs, and a recommended solution — usually within 48 hours." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary font-medium text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-surface-dark-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-surface-dark py-16 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center">
              <h2 className="text-xl font-medium text-surface-dark-foreground mb-3">Prefer to speak to someone?</h2>
              <p className="text-surface-dark-muted leading-relaxed mb-6">
                Our survey team is ready to help. Give us a call or drop us an email and we'll walk you through everything.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <a href="tel:02033887111" className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" /> 0203 388 7111
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <a href="mailto:surveyteam@integra-networks.co.uk" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email Survey Team
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <Link to="/customers" className="inline-flex items-center gap-2 text-sm font-medium text-surface-dark-foreground hover:text-primary transition-colors">
                Read Customer Stories <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-medium text-surface-dark-foreground hover:text-primary transition-colors">
                View Pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default CheckingOutYourProperty;
