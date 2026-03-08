import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
}

const EyebrowLabel = ({ children, className }: EyebrowLabelProps) => {
  return (
    <span className={cn(
      "mb-4 inline-block text-eyebrow uppercase tracking-widest text-primary font-semibold",
      className
    )}>
      {children}
    </span>
  );
};

export default EyebrowLabel;
