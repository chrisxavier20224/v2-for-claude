import { useEffect, useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";

const AvailabilityChecker = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the data-tf-live div
    const tfDiv = document.createElement("div");
    tfDiv.setAttribute("data-tf-live", "01KJF9YCNX5CXVWF335WZJ8QDR");
    containerRef.current.appendChild(tfDiv);

    // Load the Typeform embed script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Check Availability — Integra Networks"
        description="Use our availability checker to see if Integra are installing in your area and if our service is right for you."
        keywords="availability checker, coverage, Integra Networks, SD-WAN, connectivity"
        url="/check"
      />

      <section className="bg-surface-dark min-h-[80vh] flex items-center -mt-20 pt-20">
        <div
          ref={containerRef}
          className="mx-auto max-w-3xl w-full px-4 sm:px-6 py-16 md:py-24"
          style={{ minHeight: "650px" }}
        />
      </section>
    </PageLayout>
  );
};

export default AvailabilityChecker;
