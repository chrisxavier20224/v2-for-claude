import Navbar from "@/components/layout/Navbar";
import CookieConsentBanner from "@/components/shared/CookieConsentBanner";
import SEO from "@/components/shared/SEO";
import AvailabilityCheckerForm from "@/components/availability-checker/AvailabilityCheckerForm";

const AvailabilityChecker = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <SEO
        title="Check Availability — Integra Networks"
        description="Use our availability checker to see if Integra are installing in your area and if our service is right for you."
        keywords="availability checker, coverage, Integra Networks, SD-WAN, connectivity"
        url="/availability-checker"
      />

      <main className="flex-1">
        <AvailabilityCheckerForm />
      </main>
      <CookieConsentBanner />
    </div>
  );
};

export default AvailabilityChecker;
