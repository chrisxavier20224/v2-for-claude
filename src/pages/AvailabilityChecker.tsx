import Navbar from "@/components/layout/Navbar";
import CookieConsentBanner from "@/components/shared/CookieConsentBanner";
import SEO from "@/components/shared/SEO";

const TYPEFORM_URL =
  "https://form.typeform.com/to/SsDVkXh6?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx#channel=xxxxx&channeldrilldown1=xxxxx&channeldrilldown2=xxxxx&channeldrilldown3=xxxxx&landingpage=xxxxx&landingpagegroup=xxxxx";

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

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-3xl">
          <iframe
            src={TYPEFORM_URL}
            title="Availability Checker"
            className="w-full rounded-2xl border border-border"
            style={{ height: "650px" }}
            allow="camera; microphone; autoplay; encrypted-media;"
            loading="lazy"
          />
        </div>
      </main>
      <CookieConsentBanner />
    </div>
  );
};

export default AvailabilityChecker;
