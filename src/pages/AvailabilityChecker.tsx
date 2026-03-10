import { useEffect, useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";

const TYPEFORM_SCRIPT = "//embed.typeform.com/next/embed.js";

const AvailabilityChecker = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAndScan = () => {
      // Force Typeform to re-scan the DOM for data-tf-live elements
      if ((window as any).tf?.load) {
        (window as any).tf.load();
      }
    };

    const existing = document.querySelector(`script[src="${TYPEFORM_SCRIPT}"]`);
    if (existing) {
      // Script already loaded from a previous page — just re-scan
      loadAndScan();
    } else {
      const script = document.createElement("script");
      script.src = TYPEFORM_SCRIPT;
      script.async = true;
      script.onload = loadAndScan;
      document.body.appendChild(script);
    }

    return () => {
      // Clean up the Typeform widget when unmounting so it re-initialises on next mount
      if (containerRef.current) {
        const iframes = containerRef.current.querySelectorAll("iframe");
        iframes.forEach((iframe) => iframe.remove());
      }
    };
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
            ref={containerRef}
            data-tf-live="fMzp0OEu"
            style={{ width: "100%", height: "650px" }}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default AvailabilityChecker;
