import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";

const AvailabilityChecker = () => {
  // Load Typeform embed script
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="//embed.typeform.com/next/embed.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Check Availability — Integra Networks"
        description="Use our availability checker to see if Integra are installing in your area and if our service is right for you."
        keywords="availability checker, coverage, Integra Networks, SD-WAN, connectivity"
        url="/availability-checker"
      />

      <section className="bg-surface-dark min-h-[80vh] flex items-center -mt-20 pt-20">
        <div className="mx-auto max-w-3xl w-full px-4 sm:px-6 py-16 md:py-24">
          <div
            data-tf-live="fMzp0OEu"
            style={{ width: "100%", height: "600px" }}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default AvailabilityChecker;
