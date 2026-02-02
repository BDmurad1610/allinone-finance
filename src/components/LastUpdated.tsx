import { Calendar, RefreshCw } from "lucide-react";

interface LastUpdatedProps {
  date: string; // ISO date format: "2025-01-15"
  showIcon?: boolean;
  variant?: "inline" | "badge";
}

export default function LastUpdated({ date, showIcon = true, variant = "inline" }: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (variant === "badge") {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
        {showIcon && <RefreshCw className="w-3 h-3" />}
        <span>Updated: {formattedDate}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {showIcon && <Calendar className="w-4 h-4" />}
      <span>Last updated: {formattedDate}</span>
    </div>
  );
}
