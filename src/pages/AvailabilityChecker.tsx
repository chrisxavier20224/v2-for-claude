import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";

const TYPEFORM_URL = "https://form.typeform.com/to/fMzp0OEu";

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
          <iframe
            src={TYPEFORM_URL}
            title="Integra Networks Availability Checker"
            className="w-full border-0 rounded-xl"
            style={{ height: "650px" }}
            allow="camera; microphone; autoplay; encrypted-media;"
            loading="lazy"
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default AvailabilityChecker;
