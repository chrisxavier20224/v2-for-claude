import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";

const CheckAvailability = () => {
  return (
    <PageLayout>
      <SEO
        title="Check Your Availability — Integra Networks"
        description="Check if Integra Networks can bring fast broadband to your property. Drop a pin on your building and we'll run an automated coverage check."
        keywords="availability checker, broadband coverage, rural broadband, Integra Networks"
        url="/check"
      />
      <AvailabilityCheckerInline sourceTag="check-page" />
    </PageLayout>
  );
};

export default CheckAvailability;
