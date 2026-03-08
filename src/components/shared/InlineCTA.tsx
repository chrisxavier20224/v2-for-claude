import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface InlineCTAProps {
  variant?: "default" | "light";
}

const InlineCTA = ({ variant = "default" }: InlineCTAProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Link to="/contact">
        <Button size="lg">
          Book a Demo
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
      <Link to="/platform">
        <Button 
          size="lg" 
          variant="outline"
        >
          Explore Platform
        </Button>
      </Link>
    </div>
  );
};

export default InlineCTA;