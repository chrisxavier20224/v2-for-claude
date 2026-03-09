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
const Homeworkers = lazy(() => import("./pages/sectors/Homeworkers"));
const FibreEnabledBuildings = lazy(() => import("./pages/sectors/FibreEnabledBuildings"));
const ConstructionSites = lazy(() => import("./pages/sectors/ConstructionSites"));
const RuralSMEs = lazy(() => import("./pages/sectors/RuralSMEs"));
const BusinessParks = lazy(() => import("./pages/sectors/BusinessParks"));
const Airbnbs = lazy(() => import("./pages/sectors/Airbnbs"));
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
const Blog = lazy(() => import("./pages/Blog"));
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
const LocationNorthWest = lazy(() => import("./pages/locations/NorthWest"));
const LocationEssexHerts = lazy(() => import("./pages/locations/EssexHerts"));
const LocationSussexSurrey = lazy(() => import("./pages/locations/SussexSurrey"));
const LocationKent = lazy(() => import("./pages/locations/Kent"));
const LocationSomersetDevon = lazy(() => import("./pages/locations/SomersetDevon"));
const LocationYorkshire = lazy(() => import("./pages/locations/Yorkshire"));
const LocationLondon = lazy(() => import("./pages/locations/London"));
const LocationCotswolds = lazy(() => import("./pages/locations/Cotswolds"));
const Resources = lazy(() => import("./pages/resources/Resources"));
const AccessBroadbandCymru = lazy(() => import("./pages/resources/AccessBroadbandCymru"));
const PSTNSwitchOff = lazy(() => import("./pages/resources/PSTNSwitchOff"));
const AlternativesToFibre = lazy(() => import("./pages/resources/AlternativesToFibre"));
const RuralBusinessBroadband = lazy(() => import("./pages/resources/RuralBusinessBroadband"));
const StarlinkForBusiness = lazy(() => import("./pages/resources/StarlinkForBusiness"));
const SDWanForSmallBusiness = lazy(() => import("./pages/resources/SDWanForSmallBusiness"));
const ConstructionSiteBroadband = lazy(() => import("./pages/resources/ConstructionSiteBroadband"));
const FarmBroadband = lazy(() => import("./pages/resources/FarmBroadband"));
const LeasedLines = lazy(() => import("./pages/connectivity/LeasedLines"));
const UnifiedCommunications = lazy(() => import("./pages/connectivity/UnifiedCommunications"));
const ManagedSimServices = lazy(() => import("./pages/connectivity/ManagedSimServices"));
const BusinessWifi = lazy(() => import("./pages/connectivity/BusinessWifi"));
const HomeWifi = lazy(() => import("./pages/connectivity/HomeWifi"));
const StarlinkInstallation = lazy(() => import("./pages/connectivity/StarlinkInstallation"));
const StarlinkB2B = lazy(() => import("./pages/connectivity/StarlinkB2B"));
const IntegraSDWAN = lazy(() => import("./pages/connectivity/IntegraSDWAN"));
const IntegraBridge = lazy(() => import("./pages/connectivity/IntegraBridge"));
const SoGEA = lazy(() => import("./pages/connectivity/SoGEA"));
const CCTV = lazy(() => import("./pages/connectivity/CCTV"));
const WirelessDistribution = lazy(() => import("./pages/connectivity/WirelessDistribution"));
const ProposalDetail = lazy(() => import("./pages/proposal/ProposalDetail"));

// PPC Landing Pages
const BusinessBroadbandLanding = lazy(() => import("./pages/landing/BusinessBroadband"));
const ConstructionWifiLanding = lazy(() => import("./pages/landing/ConstructionWifi"));
const HomeworkerBroadbandLanding = lazy(() => import("./pages/landing/HomeworkerBroadband"));
const RuralBroadbandLanding = lazy(() => import("./pages/landing/RuralBroadband"));
const StarlinkSdwanLanding = lazy(() => import("./pages/landing/StarlinkSdwan"));

const queryClient = new QueryClient();

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
              <Route path="/lp/homeworker-broadband" element={<HomeworkerBroadbandLanding />} />
              <Route path="/lp/rural-broadband" element={<RuralBroadbandLanding />} />
              <Route path="/lp/starlink-sdwan" element={<StarlinkSdwanLanding />} />

              <Route path="/sectors/homeworkers" element={<Homeworkers />} />
              <Route path="/sectors/fibre-enabled-buildings" element={<FibreEnabledBuildings />} />
              <Route path="/sectors/construction-sites" element={<ConstructionSites />} />
              <Route path="/sectors/rural-smes" element={<RuralSMEs />} />
              <Route path="/sectors/business-parks" element={<BusinessParks />} />
              <Route path="/sectors/airbnbs" element={<Airbnbs />} />
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
              
              
              <Route path="/blog" element={<Blog />} />
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
              <Route path="/connectivity/home-wifi" element={<HomeWifi />} />
              <Route path="/connectivity/starlink-installation" element={<StarlinkInstallation />} />
              <Route path="/connectivity/starlink-b2b" element={<StarlinkB2B />} />
              <Route path="/connectivity/cctv" element={<CCTV />} />
              <Route path="/connectivity/wireless-distribution" element={<WirelessDistribution />} />
              <Route path="/connectivity/integra-sd-wan" element={<IntegraSDWAN />} />
              <Route path="/connectivity/integra-bridge" element={<IntegraBridge />} />

              {/* Proposal Pages */}
              <Route path="/proposal/:id" element={<ProposalDetail />} />

              {/* Redirect old routes to new paths */}
              <Route path="/integra-sd-wan" element={<Navigate to="/connectivity/integra-sd-wan" replace />} />
              <Route path="/integra-bridge" element={<Navigate to="/connectivity/integra-bridge" replace />} />

              <Route path="/resources" element={<Resources />} />
              <Route path="/access-broadband-cymru" element={<AccessBroadbandCymru />} />
              <Route path="/pstn-switch-off" element={<PSTNSwitchOff />} />
              <Route path="/alternatives-to-fibre-broadband" element={<AlternativesToFibre />} />
              <Route path="/rural-business-broadband" element={<RuralBusinessBroadband />} />
              <Route path="/starlink-for-business" element={<StarlinkForBusiness />} />
              <Route path="/sd-wan-for-small-business" element={<SDWanForSmallBusiness />} />
              <Route path="/construction-site-broadband" element={<ConstructionSiteBroadband />} />
              <Route path="/farm-broadband" element={<FarmBroadband />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/availability-checker" element={<AvailabilityChecker />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/privacy-cookies" element={<PrivacyAndCookies />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/sla" element={<SLA />} />
              <Route path="/terms-of-use" element={<TermsOfWebsiteUse />} />
              <Route path="/terms-of-use" element={<TermsOfWebsiteUse />} />
              <Route path="/brand-guidelines" element={<BrandGuidelines />} />
              <Route path="/insights/failure-prevention-starts-long-before-alarms" element={<FailurePreventionArticle />} />
              <Route path="/insights/sustainability-efficiency-critical-infrastructure" element={<SustainabilityEfficiencyArticle />} />
              <Route path="/privacy" element={<Navigate to="/privacy-cookies" replace />} />
              <Route path="/cookies" element={<Navigate to="/privacy-cookies" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
