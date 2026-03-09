import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import HubSpotMeeting from "@/components/shared/HubSpotMeeting";
import SEO from "@/components/shared/SEO";

const ThankYou = () => {
  return (
    <PageLayout>
      <SEO
        title="Thank You — Integra Networks"
        description="Thank you for completing our availability checker. We'll be in touch shortly."
        url="/thankyou"
      />

      <section className="relative min-h-[70vh] flex items-center overflow-hidden -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-surface-dark to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-3xl w-full px-4 sm:px-6 pt-40 pb-20 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 mb-8"
            >
              <CheckCircle className="h-10 w-10 text-primary" />
            </motion.div>

            <h1 className="text-heading-1 md:text-display-sm text-white font-medium mb-6">
              Thank You
            </h1>

            <div className="text-lg text-white/80 leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
              <p>
                Thank you for completing our availability checker online. We appreciate your interest in Integra Networks.
              </p>
              <p>
                We understand that dealing with slow internet speeds can be quite challenging, whether it's at your current residence, a business premise, a property you're considering, or one you've recently bought. Rest assured, we're here to assist you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="space-y-10">
              {/* Learn from Our Customers */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-xl font-medium text-surface-dark-foreground mb-3">Learn from Our Customers</h2>
                <p className="text-surface-dark-muted leading-relaxed mb-6">
                  If you're still exploring options and would like more information, we recommend checking out some of our Customer Stories. These stories showcase how we've improved connectivity for both homeworkers and businesses.
                </p>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/customers" className="inline-flex items-center gap-2">
                    Read Customer Stories <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Ready for More Details */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <h2 className="text-xl font-medium text-surface-dark-foreground mb-3">Ready for More Details?</h2>
                <p className="text-surface-dark-muted leading-relaxed mb-4">
                  If you're ready to delve deeper, we invite you to visit our Connectivity Proposal Page. By sharing a bit more about your property, we can prepare a detailed connectivity proposal tailored to your needs.
                </p>
                <p className="text-surface-dark-muted leading-relaxed mb-6">
                  This proposal will provide you with a clear understanding of the speeds you could achieve with Integra SD-WAN, the specific cost of installation, and alternative solutions if we believe our service isn't the best fit for you.
                </p>
                <Button asChild>
                  <Link to="/checking-out-your-property" className="inline-flex items-center gap-2">
                    Get a Connectivity Proposal <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* We're Here to Help */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-xl font-medium text-surface-dark-foreground mb-3">We're Here to Help</h2>
                <p className="text-surface-dark-muted leading-relaxed mb-4">
                  At Integra, we believe in finding the right solution for you. We're committed to providing honest and helpful advice.
                </p>
                <p className="text-surface-dark-muted leading-relaxed">
                  If you have any questions or need further assistance, feel free to reach out to us at{" "}
                  <a href="mailto:surveyteam@integra-networks.co.uk" className="text-primary hover:underline">
                    surveyteam@integra-networks.co.uk
                  </a>{" "}
                  or call us on{" "}
                  <a href="tel:02033887111" className="text-primary hover:underline">
                    0203 388 7111
                  </a>.
                </p>
              </div>
            </div>

            <p className="text-surface-dark-muted text-center mt-12">
              Best Regards,<br />
              <span className="text-surface-dark-foreground font-medium">The Integra Team</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <HubSpotMeeting
        heading="Want to Speed Things Up? Book a Call"
        subtitle="Skip the wait — pick a time and we'll discuss your property and connectivity options live."
        variant="dark"
      />
    </PageLayout>
  );
};

export default ThankYou;
