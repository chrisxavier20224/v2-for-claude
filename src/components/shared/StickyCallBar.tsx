import { Phone } from "lucide-react";

const StickyCallBar = () => {
  return (
    <a
      href="tel:02033887111"
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 bg-primary text-primary-foreground h-12 md:hidden font-medium text-sm shadow-lg"
      aria-label="Call 0203 388 7111"
    >
      <Phone className="h-4 w-4" />
      <span>Call 0203 388 7111</span>
    </a>
  );
};

export default StickyCallBar;
