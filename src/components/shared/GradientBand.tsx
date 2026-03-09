import { cn } from "@/lib/utils";

interface GradientBandProps {
  fromColor?: string;
  toColor?: string;
  className?: string;
}

const GradientBand = ({
  fromColor = "hsl(0 0% 100%)",
  toColor = "hsl(0 0% 100%)",
  className,
}: GradientBandProps) => {
  return (
    <div
      className={cn("relative w-full -mt-px -mb-px", className)}
      aria-hidden="true"
    >
      {/* Clean colour transition — no garish stripe */}
      <div className="h-px w-full" style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }} />
    </div>
  );
};

export default GradientBand;
