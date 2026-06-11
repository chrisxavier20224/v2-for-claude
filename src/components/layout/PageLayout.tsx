import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCallBar from "@/components/shared/StickyCallBar";

interface PageLayoutProps {
  children: React.ReactNode;
  hideCTA?: boolean;
  mainClassName?: string;
}

const PageLayout = ({ children, hideCTA, mainClassName = "" }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 overflow-x-hidden pb-12 md:pb-0 ${mainClassName}`}>{children}</main>
      <Footer hideCTA={hideCTA} />
      <StickyCallBar />
    </div>
  );
};

export default PageLayout;
