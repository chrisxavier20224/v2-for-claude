import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Headphones, Phone, Mail, Clock, ArrowRight, MessageSquare, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";

const HUBSPOT_PORTAL_ID = "20314482";
const HUBSPOT_SUPPORT_FORM_ID = "b82f1e4b-5892-42c8-b222-53a942076e1e";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const Support = () => {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="//js.hsforms.net/forms/embed/v2.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region: "eu1",
            portalId: HUBSPOT_PORTAL_ID,
            formId: HUBSPOT_SUPPORT_FORM_ID,
            target: "#hubspot-support-form",
          });
        }
      };
    } else {
      setTimeout(() => {
        if ((window as any).hbspt) {
          (window as any).hbspt.forms.create({
            region: "eu1",
            portalId: HUBSPOT_PORTAL_ID,
            formId: HUBSPOT_SUPPORT_FORM_ID,
            target: "#hubspot-support-form",
          });
        }
      }, 500);
    }
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Support — Integra Networks"
        description="Get help with your Integra Networks service. Submit a support ticket, report an issue, or speak to our UK-based support team."
        keywords="support, help desk, technical support, Integra Networks, connectivity support, broadband support"
        url="/support"
      />

      {/* ── Hero ─── */}
      <section className="relative bg-surface-dark overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-surface-dark to-primary/10" />
          <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-40 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Customer Support</p>
              <h1 className="text-heading-1 md:text-display-sm text-white font-medium mb-6">
                We're here to help
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Whether you've got a technical issue, a billing question, or just need some guidance — our UK-based support team is ready to assist.
              </p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">Mon–Fri</p>
                  <p className="text-xs text-white/50">9am – 5:30pm</p>
                </motion.div>
                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Shield className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">SLA Backed</p>
                  <p className="text-xs text-white/50">Response guaranteed</p>
                </motion.div>
                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Headphones className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-white">UK Based</p>
                  <p className="text-xs text-white/50">Real people, real help</p>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Contact cards */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-4">
                <a
                  href="tel:02033887111"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:border-primary/30 hover:bg-white/[0.07] transition-all group"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Call our support team</p>
                    <p className="text-lg font-semibold text-primary">0203 388 7111</p>
                  </div>
                </a>

                <a
                  href="mailto:support@integra-networks.co.uk"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:border-primary/30 hover:bg-white/[0.07] transition-all group"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email support</p>
                    <p className="text-base font-medium text-white">support@integra-networks.co.uk</p>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* ── Support Form ─── */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-heading-2 md:text-heading-1 text-foreground mb-3">
                Submit a Support Ticket
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Fill in the form below and our support team will get back to you as quickly as possible.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm"
          >
            <div id="hubspot-support-form" style={{ minHeight: "400px" }} />
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* ── Quick Links ─── */}
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Quick Links</p>
            <h2 className="text-heading-2 md:text-heading-1 text-surface-dark-foreground text-center mb-10">
              Looking for something else?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/checking-out-your-property"
                className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-primary/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-surface-dark-foreground mb-1 group-hover:text-primary transition-colors">
                      Property Survey
                    </h3>
                    <p className="text-sm text-surface-dark-muted leading-relaxed">
                      Starting your journey? Upload your property details for a connectivity assessment.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-3">
                      Get Started <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                to="/contact"
                className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-primary/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-surface-dark-foreground mb-1 group-hover:text-primary transition-colors">
                      General Enquiries
                    </h3>
                    <p className="text-sm text-surface-dark-muted leading-relaxed">
                      Got a question about our services? Our team would love to hear from you.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-3">
                      Contact Us <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Support;
