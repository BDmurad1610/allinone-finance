import { Clock, Smartphone, Lock, Zap } from "lucide-react";

interface TrustBadgesProps {
  variant?: "compact" | "full";
  className?: string;
}

export default function TrustBadges({ variant = "compact", className = "" }: TrustBadgesProps) {
  const badges = [
    { 
      icon: Zap, 
      title: "Instant Results", 
      description: "No waiting or loading",
      color: "text-primary"
    },
    { 
      icon: Lock, 
      title: "Privacy First", 
      description: "No data collected",
      color: "text-primary"
    },
    { 
      icon: Smartphone, 
      title: "Works on All Devices", 
      description: "Mobile, tablet & desktop",
      color: "text-primary"
    },
    { 
      icon: Clock, 
      title: "Updated 2026", 
      description: "Current formulas",
      color: "text-primary"
    }
  ];

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
        {badges.slice(0, 3).map((badge, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-xs font-medium"
          >
            <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} aria-hidden="true" />
            <span className="text-foreground">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {badges.map((badge, idx) => (
        <div 
          key={idx} 
          className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-xl border border-border"
        >
          <div className="p-2 rounded-lg bg-background mb-2">
            <badge.icon className={`w-5 h-5 ${badge.color}`} aria-hidden="true" />
          </div>
          <p className="font-semibold text-sm text-foreground">{badge.title}</p>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
