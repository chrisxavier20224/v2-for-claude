import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/shared/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noIndex />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-6 max-w-2xl">
          <h1 className="text-display-sm md:text-display text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Page not found — but here's where most people are heading.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/sectors/construction-sites" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-11 px-6 text-sm font-semibold hover:bg-primary/90 transition-colors">
              Construction sites
            </a>
            <a href="/connectivity/integra-bridge" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-11 px-6 text-sm font-semibold hover:bg-primary/90 transition-colors">
              Integra Bridge
            </a>
            <a href="/" className="inline-flex items-center justify-center rounded-md border border-border h-11 px-6 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
