import { Download, Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePWAInstall } from "@/hooks/usePWAInstall";

interface PWAInstallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showLabel?: boolean;
  className?: string;
}

export const PWAInstallButton = ({ 
  variant = "default", 
  size = "default",
  showLabel = true,
  className = ""
}: PWAInstallButtonProps) => {
  const { isInstallable, isInstalled, installApp } = usePWAInstall();

  if (isInstalled) {
    return (
      <Button variant="outline" size={size} disabled className={className}>
        <Check className="h-4 w-4" />
        {showLabel && <span className="ml-2">Installed</span>}
      </Button>
    );
  }

  if (!isInstallable) {
    return null;
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={installApp}
      className={className}
    >
      <Download className="h-4 w-4" />
      {showLabel && <span className="ml-2">Install App</span>}
    </Button>
  );
};

export const PWAInstallBanner = () => {
  const { isInstallable, isInstalled, installApp } = usePWAInstall();

  if (isInstalled || !isInstallable) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-4">
      <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Smartphone className="h-5 w-5" />
          <p className="text-sm font-medium">
            Install Calculator app for quick access anytime!
          </p>
        </div>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={installApp}
          className="whitespace-nowrap"
        >
          <Download className="h-4 w-4 mr-2" />
          Install Now
        </Button>
      </div>
    </div>
  );
};
