import { Phone, Wifi } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const StickyCallBar = () => {
  const location = useLocation();
  const isCheckPage = location.pathname === "/check";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden shadow-lg">
      <a
        href="tel:02033887111"
        className="flex flex-1 items-center justify-center gap-2 bg-surface-dark text-white h-12 font-medium text-sm border-r border-white/10"
        aria-label="Call 0203 388 7111"
      >
        <Phone className="h-4 w-4" />
        <span>Call Us</span>
      </a>
      {!isCheckPage && (
        <Link
          to="/check"
          className="flex flex-1 items-center justify-center gap-2 bg-primary text-primary-foreground h-12 font-semibold text-sm"
        >
          <Wifi className="h-4 w-4" />
          <span>Check Availability</span>
        </Link>
      )}
    </div>
  );
};

export default StickyCallBar;
