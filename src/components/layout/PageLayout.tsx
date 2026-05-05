import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsentBanner from "@/components/shared/CookieConsentBanner";
import StickyCallBar from "@/components/shared/StickyCallBar";

interface PageLayoutProps {
  children: React.ReactNode;
  hideCTA?: boolean;
}

const PageLayout = ({ children, hideCTA }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Site-wide May promo ribbon */}
      <div className="bg-primary text-white text-center text-xs sm:text-sm py-2 px-4">
        <Link to="/pricing" className="inline-flex items-center gap-2 hover:underline">
          <span className="font-bold">May Offer:</span> Integra Pro now £110/mo + £1,500 install — save £700 + £25/mo off.
          <span className="hidden sm:inline font-semibold underline decoration-1 underline-offset-2">View pricing</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <Navbar />
      <main className="flex-1 overflow-x-hidden pb-12 md:pb-0">{children}</main>
      <Footer hideCTA={hideCTA} />
      <CookieConsentBanner />
      <StickyCallBar />
    </div>
  );
};

export default PageLayout;
