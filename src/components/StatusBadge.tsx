import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "working" | "student" | "fresher" | "other";
  className?: string;
}

const statusConfig = {
  working: { label: "Working Professional", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  student: { label: "Student", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  fresher: { label: "Fresher", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  other: { label: "Other", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        config.color,
        className
      )}
    >
      {config.label}
    </span>
  );
};
