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
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="text-display-sm md:text-display text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
