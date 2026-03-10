import { Widget } from "@typeform/embed-react";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";

const AvailabilityChecker = () => {
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
          <Widget
            id="01J1SF1YN6E4Z30C38N3GZ8G0B"
            style={{ width: "100%", height: "650px" }}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default AvailabilityChecker;
