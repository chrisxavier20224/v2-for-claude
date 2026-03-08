import { cn } from "@/lib/utils";
import { useId } from "react";

interface GradientBandProps {
  /** Top section background color */
  fromColor?: string;
  /** Bottom section background color */
  toColor?: string;
  className?: string;
}

/**
 * A bold diagonal gradient band that separates two sections.
 * Renders a flowing stripe with the brand gradient running through it.
 */
const GradientBand = ({
  fromColor = "hsl(0 0% 100%)",
  toColor = "hsl(0 0% 100%)",
  className,
}: GradientBandProps) => {
  const id = useId();
  const gradientId = `band-grad-${id}`;

  return (
    <div
      className={cn("relative w-full overflow-hidden -mt-px -mb-px", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="relative block w-full h-[50px] md:h-[70px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(216 100% 45%)" />
            <stop offset="35%" stopColor="hsl(216 100% 50%)" />
            <stop offset="65%" stopColor="hsl(210 100% 58%)" />
            <stop offset="100%" stopColor="hsl(200 100% 65%)" />
          </linearGradient>
        </defs>

        {/* Top background */}
        <path d="M0,0 L1440,0 L1440,40 Q1080,28 720,45 Q360,62 0,45 Z" fill={fromColor} />
        {/* Bottom background */}
        <path d="M0,90 Q360,107 720,90 Q1080,73 1440,95 L1440,140 L0,140 Z" fill={toColor} />

        {/* The gradient band stripe — thicker */}
        <path
          d="M0,45 Q360,62 720,45 Q1080,28 1440,40 L1440,95 Q1080,73 720,90 Q360,107 0,90 Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
};

export default GradientBand;
