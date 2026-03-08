import { cn } from "@/lib/utils";

type DividerVariant = "wave" | "curve" | "angle" | "tilt";

interface SectionDividerProps {
  variant?: DividerVariant;
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({
  variant = "wave",
  fromColor = "hsl(var(--background))",
  toColor = "hsl(var(--background))",
  flip = false,
  className,
}: SectionDividerProps) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden leading-[0] -mt-px -mb-px",
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
      style={{ backgroundColor: toColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[90px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === "wave" && (
          <path
            d="M0,0 L0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 Z"
            fill={fromColor}
          />
        )}
        {variant === "curve" && (
          <path
            d="M0,0 L0,40 Q720,140 1440,40 L1440,0 Z"
            fill={fromColor}
          />
        )}
        {variant === "angle" && (
          <path
            d="M0,0 L0,120 L1440,0 Z"
            fill={fromColor}
          />
        )}
        {variant === "tilt" && (
          <path
            d="M0,0 L0,80 L1440,20 L1440,0 Z"
            fill={fromColor}
          />
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;
