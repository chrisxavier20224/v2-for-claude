import { cn } from "@/lib/utils";

interface IconPlaceholderProps {
  className?: string;
}

const IconPlaceholder = ({ className }: IconPlaceholderProps) => {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5",
        className
      )}
    >
      <div className="h-5 w-5 rounded bg-primary/30" />
    </div>
  );
};

export default IconPlaceholder;
