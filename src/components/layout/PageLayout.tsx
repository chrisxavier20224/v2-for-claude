import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsentBanner from "@/components/shared/CookieConsentBanner";
import StickyCallBar from "@/components/shared/StickyCallBar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 overflow-x-hidden pb-12 md:pb-0">{children}</main>
      <Footer />
      <CookieConsentBanner />
      <StickyCallBar />
    </div>
  );
};

export default PageLayout;
