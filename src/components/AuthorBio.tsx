import { User, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AuthorBioProps {
  variant?: "compact" | "full";
  showCredentials?: boolean;
}

export default function AuthorBio({ variant = "compact" }: AuthorBioProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3 py-3 border-t border-b border-border my-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <User className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">MultiCalculator Team</p>
          <p className="text-xs text-muted-foreground">Using standard, publicly documented formulas</p>
        </div>
      </div>
    );
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground mb-1">About MultiCalculator</h3>
            <p className="font-semibold text-primary mb-2">MultiCalculator Team</p>
            <p className="text-sm text-muted-foreground mb-4">
              MultiCalculator provides free online calculator tools using standard, publicly documented formulas 
              from sources like the World Health Organization, standard amortization tables, and established 
              mathematical equations. All calculations run entirely in your browser for maximum privacy.
            </p>
            <p className="text-xs text-muted-foreground italic">
              <strong>Disclaimer:</strong> These tools are for informational and educational purposes only. 
              Always consult qualified professionals for medical, financial, or legal decisions.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
