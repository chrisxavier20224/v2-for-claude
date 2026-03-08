import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
  category?: "dashboard" | "analytics" | "architecture" | "map" | "office" | "server" | "network" | "team" | "support";
}

const categoryImages: Record<string, string> = {
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  architecture: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  server: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  network: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  support: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
};

const Placeholder = ({ label, className, aspectRatio = "video", category }: PlaceholderProps) => {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[3/1]",
  };

  const imageUrl = category ? categoryImages[category] : null;

  // Check if className contains explicit height - if so, don't use aspect ratio
  const hasExplicitHeight = className?.includes('h-');

  if (imageUrl) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-lg w-full",
          !hasExplicitHeight && aspectClasses[aspectRatio],
          className
        )}
      >
        <img
          src={imageUrl}
          alt={label || "Placeholder"}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {label && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-sm font-medium text-white/90">{label}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
    </div>
  );
};

export default Placeholder;
