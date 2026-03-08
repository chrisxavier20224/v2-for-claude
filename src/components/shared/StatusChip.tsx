import { cn } from "@/lib/utils";

interface StatusChipProps {
  status: "ok" | "warning" | "critical";
  label?: string;
  className?: string;
}

const StatusChip = ({ status, label, className }: StatusChipProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-xs font-medium",
        status === "ok" && "bg-status-ok/10 text-status-ok",
        status === "warning" && "bg-status-warning/10 text-status-warning",
        status === "critical" && "bg-status-critical/10 text-status-critical",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "ok" && "bg-status-ok",
          status === "warning" && "bg-status-warning",
          status === "critical" && "bg-status-critical"
        )}
      />
      {label && <span>{label}</span>}
    </div>
  );
};

export default StatusChip;