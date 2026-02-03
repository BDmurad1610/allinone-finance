import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";

interface TrustBadgesProps {
  variant?: "compact" | "full";
  className?: string;
}

export default function TrustBadges({ variant = "compact", className = "" }: TrustBadgesProps) {
  const badges = [
    { 
      icon: Shield, 
      title: "Verified Formulas", 
      description: "Industry-standard calculations",
      color: "text-green-600 dark:text-green-400"
    },
    { 
      icon: Award, 
      title: "Expert Reviewed", 
      description: "Checked by professionals",
      color: "text-blue-600 dark:text-blue-400"
    },
    { 
      icon: Users, 
      title: "50,000+ Users", 
      description: "Trusted monthly",
      color: "text-purple-600 dark:text-purple-400"
    },
    { 
      icon: Clock, 
      title: "Updated 2025", 
      description: "Latest formulas",
      color: "text-orange-600 dark:text-orange-400"
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
          <div className={`p-2 rounded-lg bg-background mb-2`}>
            <badge.icon className={`w-5 h-5 ${badge.color}`} aria-hidden="true" />
          </div>
          <p className="font-semibold text-sm text-foreground">{badge.title}</p>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
