 import { Shield, Clock, Sparkles, CheckCircle } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 import TrustBadges from "./TrustBadges";
 
 interface CalculatorIntroProps {
   title: string;
   description: string;
   benefits?: string[];
   lastUpdated?: string;
 }
 
 export default function CalculatorIntro({ 
   title, 
   description, 
   benefits = [
     "Instant, accurate results",
     "100% free, no signup required",
     "Works on all devices",
     "Your data stays private"
   ],
   lastUpdated = "2026-02-01"
 }: CalculatorIntroProps) {
   const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
     year: 'numeric',
     month: 'long',
     day: 'numeric'
   });
 
   return (
     <Card className="mb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
       <CardContent className="p-6">
         {/* Trust Indicators */}
         <div className="flex flex-wrap items-center gap-3 mb-4">
           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
             <Shield className="w-3 h-3" />
             Expert Verified
           </span>
           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">
             <Clock className="w-3 h-3" />
             Updated: {formattedDate}
           </span>
           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium">
             <Sparkles className="w-3 h-3" />
             Free Tool
           </span>
         </div>
 
         {/* Main Content */}
         <h2 className="text-xl font-bold text-foreground mb-3">
           About This {title}
         </h2>
         <p className="text-muted-foreground leading-relaxed mb-4">
           {description}
         </p>
 
         {/* Benefits Grid */}
         <div className="grid grid-cols-2 gap-2 mb-4">
           {benefits.map((benefit, idx) => (
             <div key={idx} className="flex items-center gap-2 text-sm">
               <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
               <span className="text-foreground">{benefit}</span>
             </div>
           ))}
         </div>
 
         {/* Compact Trust Badges */}
         <div className="pt-4 border-t border-border">
           <TrustBadges variant="compact" />
         </div>
       </CardContent>
     </Card>
   );
 }