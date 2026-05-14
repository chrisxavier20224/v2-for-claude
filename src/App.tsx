import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/layout/ScrollToTop";
import Analytics from "./components/shared/Analytics";

// Eager load critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load other pages
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyAndCookies = lazy(() => import("./pages/PrivacyAndCookies"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const TermsOfWebsiteUse = lazy(() => import("./pages/TermsOfWebsiteUse"));
const SLA = lazy(() => import("./pages/SLA"));
const BrandGuidelines = lazy(() => import("./pages/BrandGuidelines"));
const FailurePreventionArticle = lazy(() => import("./pages/insights/FailurePreventionArticle"));
const SustainabilityEfficiencyArticle = lazy(() => import("./pages/insights/SustainabilityEfficiencyArticle"));
const ConstructionSites = lazy(() => import("./pages/sectors/ConstructionSites"));
const RuralSMEs = lazy(() => import("./pages/sectors/RuralSMEs"));
const BusinessParks = lazy(() => import("./pages/sectors/BusinessParks"));
const WBPowerServices = lazy(() => import("./pages/customers/WBPowerServices"));
const RoyleFarm = lazy(() => import("./pages/customers/RoyleFarm"));
const SteamRally = lazy(() => import("./pages/customers/SteamRally"));
const LittleQuarry = lazy(() => import("./pages/customers/LittleQuarry"));
const Carbee = lazy(() => import("./pages/customers/Carbee"));
const RoyalHarwichYachtClub = lazy(() => import("./pages/customers/RoyalHarwichYachtClub"));
const UKHarvest = lazy(() => import("./pages/customers/UKHarvest"));
const ThinkingAnglers = lazy(() => import("./pages/customers/ThinkingAnglers"));
const AturaProteins = lazy(() => import("./pages/customers/AturaProteins"));
const APJEuropean = lazy(() => import("./pages/customers/APJEuropean"));
const McGeeConstruction = lazy(() => import("./pages/customers/McGeeConstruction"));
const SeaconGroup = lazy(() => import("./pages/customers/SeaconGroup"));
const AvailabilityChecker = lazy(() => import("./pages/AvailabilityChecker"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Customers = lazy(() => import("./pages/Customers"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightArticle = lazy(() => import("./pages/insights/InsightArticle"));
const ExtendingWifiOutbuildings = lazy(() => import("./pages/blog/ExtendingWifiOutbuildings"));
const ChurchesListedBuildings = lazy(() => import("./pages/blog/ChurchesListedBuildings"));
const RuralBusinessesSdwan = lazy(() => import("./pages/blog/RuralBusinessesSdwan"));
const StarlinkSdwan = lazy(() => import("./pages/blog/StarlinkSdwan"));
const StarlinkInstallers = lazy(() => import("./pages/blog/StarlinkInstallers"));
const StarlinkRightSolution = lazy(() => import("./pages/blog/StarlinkRightSolution"));
const SingleMobileNetwork = lazy(() => import("./pages/blog/SingleMobileNetwork"));
const FourGVsFiveG = lazy(() => import("./pages/blog/FourGVsFiveG"));
const SatelliteVsFixedWireless = lazy(() => import("./pages/blog/SatelliteVsFixedWireless"));
const CheckBroadbandAvailability = lazy(() => import("./pages/blog/CheckBroadbandAvailability"));
const BroadbandGrantsUK = lazy(() => import("./pages/blog/BroadbandGrantsUK"));
const StarlinkUploadSpeed = lazy(() => import("./pages/blog/StarlinkUploadSpeed"));
const StarlinkVsFourGBonding = lazy(() => import("./pages/blog/StarlinkVsFourGBonding"));
const WhatIsCellularBonding = lazy(() => import("./pages/blog/WhatIsCellularBonding"));
const LoadBalancingVsBonding = lazy(() => import("./pages/blog/LoadBalancingVsBonding"));
const TemporaryBroadbandEvents = lazy(() => import("./pages/blog/TemporaryBroadbandEvents"));
const PortableWifiConstruction = lazy(() => import("./pages/blog/PortableWifiConstruction"));
const IoTConnectivityAgriculture = lazy(() => import("./pages/blog/IoTConnectivityAgriculture"));
const MultiBuildingWifi = lazy(() => import("./pages/blog/MultiBuildingWifi"));
const BtOpenreachFibreChecker = lazy(() => import("./pages/blog/BtOpenreachFibreChecker"));
const SatelliteVsIntegraSDWAN = lazy(() => import("./pages/blog/SatelliteVsIntegraSDWAN"));
const RevolutionisingConnectivityConstruction = lazy(() => import("./pages/blog/RevolutionisingConnectivityConstruction"));
const BeyondBroadbandBottleneck = lazy(() => import("./pages/blog/BeyondBroadbandBottleneck"));
const UnlockHighSpeedRural = lazy(() => import("./pages/blog/UnlockHighSpeedRural"));
const PreparingHouseForSale = lazy(() => import("./pages/blog/PreparingHouseForSale"));
const DIYInternetSpeedTests = lazy(() => import("./pages/blog/DIYInternetSpeedTests"));
const WhyIsBTInternetSlow = lazy(() => import("./pages/blog/WhyIsBTInternetSlow"));
const LocationNorthWest = lazy(() => import("./pages/locations/NorthWest"));
const LocationEssexHerts = lazy(() => import("./pages/locations/EssexHerts"));
const LocationSussexSurrey = lazy(() => import("./pages/locations/SussexSurrey"));
const LocationKent = lazy(() => import("./pages/locations/Kent"));
const LocationSomersetDevon = lazy(() => import("./pages/locations/SomersetDevon"));
const LocationYorkshire = lazy(() => import("./pages/locations/Yorkshire"));
const LocationLondon = lazy(() => import("./pages/locations/London"));
const LocationCotswolds = lazy(() => import("./pages/locations/Cotswolds"));
const About = lazy(() => import("./pages/About"));
const AccessBroadbandCymru = lazy(() => import("./pages/resources/AccessBroadbandCymru"));
const PSTNSwitchOff = lazy(() => import("./pages/resources/PSTNSwitchOff"));
const AlternativesToFibre = lazy(() => import("./pages/resources/AlternativesToFibre"));
const StarlinkForBusiness = lazy(() => import("./pages/resources/StarlinkForBusiness"));
const LeasedLines = lazy(() => import("./pages/connectivity/LeasedLines"));
const UnifiedCommunications = lazy(() => import("./pages/connectivity/UnifiedCommunications"));
const ManagedSimServices = lazy(() => import("./pages/connectivity/ManagedSimServices"));
const BusinessWifi = lazy(() => import("./pages/connectivity/BusinessWifi"));
const StarlinkInstallation = lazy(() => import("./pages/connectivity/StarlinkInstallation"));
const IntegraSDWAN = lazy(() => import("./pages/connectivity/IntegraSDWAN"));
const IntegraBridge = lazy(() => import("./pages/connectivity/IntegraBridge"));
const SoGEA = lazy(() => import("./pages/connectivity/SoGEA"));
const CCTV = lazy(() => import("./pages/connectivity/CCTV"));
const WirelessDistribution = lazy(() => import("./pages/connectivity/WirelessDistribution"));
const NetworkInfrastructure = lazy(() => import("./pages/connectivity/NetworkInfrastructure"));
const ManagedFirewall = lazy(() => import("./pages/connectivity/ManagedFirewall"));
const CellularBackup = lazy(() => import("./pages/connectivity/CellularBackup"));
const ManagedInternet = lazy(() => import("./pages/connectivity/ManagedInternet"));
const BusinessContinuity = lazy(() => import("./pages/connectivity/BusinessContinuity"));

const BusinessMobiles = lazy(() => import("./pages/connectivity/BusinessMobiles"));
const ProposalDetail = lazy(() => import("./pages/proposal/ProposalDetail"));

// PPC Landing Pages
const BusinessBroadbandLanding = lazy(() => import("./pages/landing/BusinessBroadband"));
const ConstructionWifiLanding = lazy(() => import("./pages/landing/ConstructionWifi"));
const RuralBroadbandLanding = lazy(() => import("./pages/landing/RuralBroadband"));
const StarlinkSdwanLanding = lazy(() => import("./pages/landing/StarlinkSdwan"));
const ConstructionSiteInternetLanding = lazy(() => import("./pages/landing/ConstructionSiteInternet"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const CheckAvailability = lazy(() => import("./pages/CheckAvailability"));
const CheckingOutYourProperty = lazy(() => import("./pages/CheckingOutYourProperty"));
const Support = lazy(() => import("./pages/Support"));
const Wholesale = lazy(() => import("./pages/Wholesale"));

const queryClient = new QueryClient();

/* ---- Capture UTM params on first page load (any route) into sessionStorage ---- */
(() => {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
  const captured: Record<string, string> = {};
  utmKeys.forEach((key) => {
    const val = params.get(key);
    if (val) captured[key] = val;
  });
  if (Object.keys(captured).length > 0) {
    window.sessionStorage.setItem("integra_utm_params", JSON.stringify(captured));
  }
})();

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Analytics />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* PPC Landing Pages */}
              <Route path="/lp/business-broadband" element={<BusinessBroadbandLanding />} />
              <Route path="/lp/construction-wifi" element={<ConstructionWifiLanding />} />
              <Route path="/lp/construction-site-internet" element={<ConstructionSiteInternetLanding />} />
              <Route path="/lp/homeworker-broadband" element={<Navigate to="/" replace />} />
              <Route path="/lp/rural-broadband" element={<RuralBroadbandLanding />} />
              <Route path="/lp/starlink-sdwan" element={<StarlinkSdwanLanding />} />

              <Route path="/sectors/homeworkers" element={<Navigate to="/" replace />} />
              <Route path="/sectors/fibre-enabled-buildings" element={<Navigate to="/sectors/business-parks" replace />} />
              <Route path="/sectors/construction-sites" element={<ConstructionSites />} />
              <Route path="/sectors/rural-smes" element={<RuralSMEs />} />
              <Route path="/sectors/business-parks" element={<BusinessParks />} />
              <Route path="/sectors/airbnbs" element={<Navigate to="/" replace />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/wb-power-services" element={<WBPowerServices />} />
              <Route path="/customers/royle-farm" element={<RoyleFarm />} />
              <Route path="/customers/steaming-ahead-with-enhanced-festival-connectivity" element={<SteamRally />} />
              <Route path="/customers/little-quarry-glamping" element={<LittleQuarry />} />
              <Route path="/customers/revving-up-connectivity-carbees-journey-to-high-speed-internet" element={<Carbee />} />
              <Route path="/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey" element={<RoyalHarwichYachtClub />} />
              <Route path="/customers/fast-track-connectivity-ukharvests-digital-transformation" element={<UKHarvest />} />
              <Route path="/customers/casting-the-net-wide-a-connectivity-transformation" element={<ThinkingAnglers />} />
              <Route path="/customers/revolutionising-connectivity-for-plant-protein-pioneers" element={<AturaProteins />} />
              <Route path="/customers/revitalising-global-distribution-apj-europeans-digital-transformation" element={<APJEuropean />} />
              <Route path="/customers/mcgee-construction" element={<McGeeConstruction />} />
              <Route path="/customers/seacon-group" element={<SeaconGroup />} />
              
              
              <Route path="/blog" element={<Navigate to="/insights" replace />} />
              <Route path="/blog/index" element={<Navigate to="/insights" replace />} />
              <Route path="/blog/extending-wi-fi-and-internet-to-outbuildings" element={<ExtendingWifiOutbuildings />} />
              <Route path="/blog/internet-and-wi-fi-solutions-for-churches-and-listed-buildings" element={<ChurchesListedBuildings />} />
              <Route path="/blog/managing-multiple-broadband-connections-sd-wan-solutions-for-rural-businesses" element={<RuralBusinessesSdwan />} />
              <Route path="/blog/starlink-sd-wan-a-reliable-solution-for-business-connectivity" element={<StarlinkSdwan />} />
              <Route path="/blog/starlink-installers-near-me-finding-the-best-solution-for-high-speed-satellite-internet" element={<StarlinkInstallers />} />
              <Route path="/blog/starlink-is-it-the-right-solution-for-me" element={<StarlinkRightSolution />} />
              <Route path="/blog/single-mobile-network-connectivity-solutions-a-reliable-option" element={<SingleMobileNetwork />} />
              <Route path="/blog/4g-vs-5g-broadband-which-is-better-for-business" element={<FourGVsFiveG />} />
              <Route path="/blog/satellite-internet-vs-fixed-wireless-pros-and-cons" element={<SatelliteVsFixedWireless />} />
              <Route path="/blog/how-to-check-broadband-availability-rural-areas" element={<CheckBroadbandAvailability />} />
              <Route path="/blog/business-broadband-grants-uk-2026" element={<BroadbandGrantsUK />} />
              <Route path="/blog/starlink-upload-speed-why-it-matters-for-business" element={<StarlinkUploadSpeed />} />
              <Route path="/blog/starlink-vs-4g-bonding-honest-comparison" element={<StarlinkVsFourGBonding />} />
              <Route path="/blog/what-is-cellular-bonding-simple-explanation" element={<WhatIsCellularBonding />} />
              <Route path="/blog/load-balancing-vs-bonding-whats-the-difference" element={<LoadBalancingVsBonding />} />
              <Route path="/blog/temporary-broadband-for-events-uk" element={<TemporaryBroadbandEvents />} />
              <Route path="/blog/portable-wifi-solutions-construction-sites" element={<PortableWifiConstruction />} />
              <Route path="/blog/iot-connectivity-agriculture-uk" element={<IoTConnectivityAgriculture />} />
              <Route path="/blog/multi-building-wifi-rural-properties" element={<MultiBuildingWifi />} />
              <Route path="/blog/bt-openreach-fibre-checker" element={<BtOpenreachFibreChecker />} />
              <Route path="/blog/satellite-internet-vs-integra-4g-5g-sdwan" element={<SatelliteVsIntegraSDWAN />} />
              <Route path="/blog/revolutionising-connectivity-in-construction" element={<RevolutionisingConnectivityConstruction />} />
              <Route path="/blog/beyond-the-broadband-bottleneck" element={<BeyondBroadbandBottleneck />} />
              <Route path="/blog/unlock-high-speed-internet-rural-areas" element={<UnlockHighSpeedRural />} />
              <Route path="/blog/preparing-house-for-sale-internet-speed" element={<PreparingHouseForSale />} />
              <Route path="/blog/diy-guide-internet-speed-tests" element={<DIYInternetSpeedTests />} />
              <Route path="/blog/why-is-my-bt-internet-so-slow" element={<WhyIsBTInternetSlow />} />

              <Route path="/locations/rural-broadband-north-west" element={<LocationNorthWest />} />
              <Route path="/locations/rural-broadband-essex-hertfordshire" element={<LocationEssexHerts />} />
              <Route path="/locations/rural-broadband-sussex-surrey" element={<LocationSussexSurrey />} />
              <Route path="/locations/rural-broadband-kent" element={<LocationKent />} />
              <Route path="/locations/rural-broadband-somerset-devon" element={<LocationSomersetDevon />} />
              <Route path="/locations/rural-broadband-yorkshire" element={<LocationYorkshire />} />
              <Route path="/locations/construction-site-broadband-london" element={<LocationLondon />} />
              <Route path="/locations/rural-broadband-cotswolds" element={<LocationCotswolds />} />

              <Route path="/connectivity/leased-lines" element={<LeasedLines />} />
              <Route path="/connectivity/unified-communications" element={<UnifiedCommunications />} />
              <Route path="/connectivity/managed-sim-services" element={<ManagedSimServices />} />
              <Route path="/connectivity/sogea" element={<SoGEA />} />
              <Route path="/connectivity/business-wifi" element={<BusinessWifi />} />
              <Route path="/connectivity/home-wifi" element={<Navigate to="/connectivity/business-wifi" replace />} />
              <Route path="/connectivity/starlink-installation" element={<StarlinkInstallation />} />
              <Route path="/connectivity/starlink-b2b" element={<Navigate to="/connectivity/integra-bridge" replace />} />
              <Route path="/connectivity/cctv" element={<CCTV />} />
              <Route path="/connectivity/wireless-distribution" element={<WirelessDistribution />} />
              <Route path="/connectivity/network-infrastructure" element={<NetworkInfrastructure />} />
              <Route path="/connectivity/integra-sd-wan" element={<IntegraSDWAN />} />
              <Route path="/connectivity/integra-home" element={<Navigate to="/" replace />} />
              <Route path="/connectivity/integra-bridge" element={<IntegraBridge />} />
              <Route path="/connectivity/managed-firewall" element={<ManagedFirewall />} />
              <Route path="/connectivity/cellular-backup" element={<CellularBackup />} />
              <Route path="/connectivity/managed-internet" element={<ManagedInternet />} />
              <Route path="/connectivity/business-continuity" element={<BusinessContinuity />} />

              <Route path="/connectivity/business-mobiles" element={<BusinessMobiles />} />

              {/* Proposal Pages */}
              <Route path="/proposal/:id" element={<ProposalDetail />} />

              {/* Landing pages matching old Framer URLs */}
              <Route path="/integra-sd-wan" element={<Navigate to="/connectivity/integra-sd-wan" replace />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/check" element={<CheckAvailability />} />
              <Route path="/checking-out-your-property" element={<CheckingOutYourProperty />} />
              <Route path="/support" element={<Support />} />
              <Route path="/integra-bridge" element={<Navigate to="/connectivity/integra-bridge" replace />} />
              <Route path="/wholesale" element={<Wholesale />} />

              <Route path="/resources" element={<Navigate to="/insights" replace />} />

              {/* Insights hub */}
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/cost-of-the-connectivity-gap" element={<InsightArticle slug="cost-of-the-connectivity-gap" />} />
              <Route path="/insights/decision-framework" element={<InsightArticle slug="decision-framework" />} />
              <Route path="/insights/multi-site-estate" element={<InsightArticle slug="multi-site-estate" />} />
              <Route path="/insights/multi-bearer-connectivity" element={<InsightArticle slug="multi-bearer-connectivity" />} />
              <Route path="/insights/wholesale-connectivity-model" element={<InsightArticle slug="wholesale-connectivity-model" />} />
              <Route path="/access-broadband-cymru" element={<AccessBroadbandCymru />} />
              <Route path="/pstn-switch-off" element={<PSTNSwitchOff />} />
              <Route path="/alternatives-to-fibre-broadband" element={<AlternativesToFibre />} />
              <Route path="/rural-business-broadband" element={<Navigate to="/sectors/rural-smes" replace />} />
              <Route path="/starlink-for-business" element={<StarlinkForBusiness />} />
              <Route path="/sd-wan-for-small-business" element={<Navigate to="/lp/business-broadband" replace />} />
              <Route path="/construction-site-broadband" element={<Navigate to="/sectors/construction-sites" replace />} />
              <Route path="/farm-broadband" element={<Navigate to="/sectors/rural-smes" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/availability-checker" element={<Navigate to="/check" replace />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-cookies" element={<PrivacyAndCookies />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/sla" element={<SLA />} />
              <Route path="/terms-of-use" element={<TermsOfWebsiteUse />} />
              <Route path="/brand-guidelines" element={<BrandGuidelines />} />
              <Route path="/insights/failure-prevention-starts-long-before-alarms" element={<FailurePreventionArticle />} />
              <Route path="/insights/sustainability-efficiency-critical-infrastructure" element={<SustainabilityEfficiencyArticle />} />
              {/* Redirects from old Framer site URLs */}
              <Route path="/privacy" element={<Navigate to="/privacy-cookies" replace />} />
              <Route path="/cookies" element={<Navigate to="/privacy-cookies" replace />} />
              <Route path="/privacy-policy" element={<Navigate to="/privacy-cookies" replace />} />
              <Route path="/get-in-touch" element={<Navigate to="/contact" replace />} />
              <Route path="/pricing-and-plans" element={<Navigate to="/pricing" replace />} />
              <Route path="/integra-business" element={<Navigate to="/integra-sd-wan" replace />} />
              <Route path="/next-steps" element={<Navigate to="/checking-out-your-property" replace />} />
              {/* Short URLs render the actual page so canonicals self-reference. */}
              <Route path="/home-wifi" element={<Navigate to="/connectivity/business-wifi" replace />} />
              <Route path="/managed-sim-services" element={<ManagedSimServices />} />
              <Route path="/business-wifi" element={<BusinessWifi />} />
              <Route path="/leased-lines" element={<LeasedLines />} />
              <Route path="/business-mobile-phones" element={<Navigate to="/connectivity/business-mobiles" replace />} />
              <Route path="/starlink-installation" element={<StarlinkInstallation />} />
              <Route path="/unified-communications" element={<UnifiedCommunications />} />
              <Route path="/fibre-enabled-buildings" element={<Navigate to="/sectors/business-parks" replace />} />
              <Route path="/construction-sites" element={<Navigate to="/sectors/construction-sites" replace />} />
              <Route path="/business-parks" element={<Navigate to="/sectors/business-parks" replace />} />
              <Route path="/homeworkers" element={<Navigate to="/" replace />} />
              <Route path="/airbnbs" element={<Navigate to="/" replace />} />
              <Route path="/rural-sme's" element={<Navigate to="/sectors/rural-smes" replace />} />
              <Route path="/rural-smes" element={<Navigate to="/sectors/rural-smes" replace />} />

              {/* Google Ads landing page redirects - old Framer URLs that no longer exist */}
              <Route path="/rural_internet" element={<Navigate to="/check" replace />} />
              <Route path="/rural_broadband" element={<Navigate to="/check" replace />} />
              <Route path="/rural-internet" element={<Navigate to="/check" replace />} />
              <Route path="/rural-broadband" element={<Navigate to="/check" replace />} />
              <Route path="/satellite_internet" element={<Navigate to="/check" replace />} />
              <Route path="/satellite-internet" element={<Navigate to="/check" replace />} />
              <Route path="/construction_wifi" element={<Navigate to="/check" replace />} />
              <Route path="/construction-wifi" element={<Navigate to="/check" replace />} />
              <Route path="/4g_internet" element={<Navigate to="/check" replace />} />
              <Route path="/4g-internet" element={<Navigate to="/check" replace />} />

              {/* Blog redirects from old Framer slugs */}
              <Route path="/blog/bt-openreach-fibre-checker-and-other-handy-online-tools-to-help-you-find-out-what-s-available-at-your-property" element={<Navigate to="/blog/bt-openreach-fibre-checker" replace />} />
              <Route path="/blog/unraveling-internet-connectivity-satellite-internet-vs-integra-4g-5g-sdwan" element={<Navigate to="/blog/satellite-internet-vs-integra-4g-5g-sdwan" replace />} />
              <Route path="/blog/revolutionising-connectivity-in-construction-integra-s-swift-and-reliable-sd-wan-solutions" element={<Navigate to="/blog/revolutionising-connectivity-in-construction" replace />} />
              <Route path="/blog/beyond-the-broadband-bottleneck-unveiling-a-practical-alternative-for-rural-smes" element={<Navigate to="/blog/beyond-the-broadband-bottleneck" replace />} />
              <Route path="/blog/unlock-the-power-of-high-speed-reliable-internet-in-rural-areas-with-integra-sd-wan" element={<Navigate to="/blog/unlock-high-speed-internet-rural-areas" replace />} />
              <Route path="/blog/preparing-your-house-for-sale-why-your-property-s-internet-speed-has-never-been-more-important" element={<Navigate to="/blog/preparing-house-for-sale-internet-speed" replace />} />
              <Route path="/blog/diy-guide-performing-internet-speed-tests-at-your-property" element={<Navigate to="/blog/diy-guide-internet-speed-tests" replace />} />
              <Route path="/blog/why-is-my-bt-internet-so-slow" element={<Navigate to="/blog/why-is-my-bt-internet-so-slow" replace />} />

              {/* Search Console 404/Soft 404 fix redirects - old Framer URLs found Mar 2026 */}
              <Route path="/careers" element={<Navigate to="/contact" replace />} />
              <Route path="/reviews" element={<Navigate to="/customers" replace />} />
              <Route path="/test" element={<Navigate to="/check" replace />} />
              <Route path="/ultrafast" element={<Navigate to="/pricing" replace />} />
              <Route path="/royal-farm-signup" element={<Navigate to="/customers/royle-farm" replace />} />
              <Route path="/customers/powering-up-a-connectivity-triumph-in-the-face-of-adversity" element={<Navigate to="/customers" replace />} />
              <Route path="/customers/from-farm-to-fibre-royle-farm-business-parks-digital-renaissance" element={<Navigate to="/customers/royle-farm" replace />} />
              <Route path="/internet-connectivity/eofttc-affordable-business-connectivity-benefits-speeds-and-providers" element={<Navigate to="/insights" replace />} />
              <Route path="/internet-connectivity/eofttc-affordable-business-connectivity" element={<Navigate to="/insights" replace />} />
              <Route path="/internet-connectivity/*" element={<Navigate to="/insights" replace />} />

              {/* Slug fix redirects for legacy/incorrect internal links */}
              <Route path="/connectivity/integra-sdwan" element={<Navigate to="/connectivity/integra-sd-wan" replace />} />
              <Route path="/connectivity/4g-5g-backup" element={<Navigate to="/connectivity/cellular-backup" replace />} />
              <Route path="/customers/royal-harwich-yacht-club" element={<Navigate to="/customers/sailing-through-connectivity-challenges-the-royal-harwich-yacht-clubs-journey" replace />} />
              <Route path="/customers/thinking-anglers" element={<Navigate to="/customers/casting-the-net-wide-a-connectivity-transformation" replace />} />
              <Route path="/customers/uk-harvest" element={<Navigate to="/customers/fast-track-connectivity-ukharvests-digital-transformation" replace />} />
              <Route path="/customers/wsra-steam-rally" element={<Navigate to="/customers/steaming-ahead-with-enhanced-festival-connectivity" replace />} />
              <Route path="/locations" element={<Navigate to="/" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
