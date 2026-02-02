import { User, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AuthorBioProps {
  variant?: "compact" | "full";
  showCredentials?: boolean;
}

export default function AuthorBio({ variant = "compact", showCredentials = true }: AuthorBioProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3 py-3 border-t border-b border-border my-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <User className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">MultiCalculator Team</p>
          <p className="text-xs text-muted-foreground">Reviewed by certified professionals</p>
        </div>
      </div>
    );
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Author Avatar */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          {/* Author Info */}
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground mb-1">About the Author</h3>
            <p className="font-semibold text-primary mb-2">MultiCalculator Editorial Team</p>
            
            <p className="text-sm text-muted-foreground mb-4">
              Our team consists of finance experts, health professionals, and mathematicians 
              dedicated to providing accurate, reliable calculator tools. Every calculation 
              formula is reviewed and verified for accuracy.
            </p>
            
            {showCredentials && (
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1 text-xs bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                  <Award className="w-3 h-3" />
                  <span>Expert Reviewed</span>
                </div>
                <div className="flex items-center gap-1 text-xs bg-blue-500/10 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
                  <BookOpen className="w-3 h-3" />
                  <span>Fact Checked</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
