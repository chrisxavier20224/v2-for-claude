import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alt" | "gradient" | "dark" | "primary";
  size?: "default" | "large" | "xlarge" | "compact";
}

const Section = ({ children, className, id, variant = "default", size = "default" }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        // Size variants - generous spacing
        size === "xlarge" && "py-32 md:py-48",
        size === "large" && "py-24 md:py-40",
        size === "default" && "py-20 md:py-32",
        size === "compact" && "py-16 md:py-24",
        // Style variants
        variant === "default" && "bg-background",
        variant === "alt" && "bg-background-alt",
        variant === "gradient" && "bg-background",
        variant === "dark" && "relative overflow-hidden bg-dark-enhanced",
        variant === "primary" && "relative overflow-hidden bg-primary-enhanced text-primary-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 overflow-hidden">{children}</div>
    </section>
  );
};

export default Section;
