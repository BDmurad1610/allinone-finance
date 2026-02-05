 import { Printer, Download, History, Share2, Bookmark, RefreshCw } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { toast } from "sonner";
 
 interface CalculatorFeaturesProps {
   title: string;
   onPrint?: () => void;
   onSaveResult?: () => void;
   showHistory?: boolean;
   calculationHistory?: { input: string; result: string; date: string }[];
 }
 
 export default function CalculatorFeatures({ 
   title,
   onPrint,
   onSaveResult,
   showHistory = false,
   calculationHistory = []
 }: CalculatorFeaturesProps) {
   
   const handlePrint = () => {
     if (onPrint) {
       onPrint();
     } else {
       window.print();
       toast.success("Print dialog opened");
     }
   };
 
   const handleShare = async () => {
     try {
       if (navigator.share) {
         await navigator.share({
           title: title,
           text: `Check out this free ${title} tool!`,
           url: window.location.href
         });
       } else {
         await navigator.clipboard.writeText(window.location.href);
         toast.success("Link copied to clipboard!");
       }
     } catch (error) {
       toast.error("Failed to share");
     }
   };
 
   const handleBookmark = () => {
     toast.info("Press Ctrl+D (or Cmd+D on Mac) to bookmark this page");
   };
 
   const handleRefresh = () => {
     window.location.reload();
     toast.success("Calculator refreshed");
   };
 
   return (
     <Card className="mt-6 bg-muted/30">
       <CardHeader className="pb-3">
         <CardTitle className="text-lg flex items-center gap-2">
           <History className="w-5 h-5 text-primary" />
           Quick Actions
         </CardTitle>
       </CardHeader>
       <CardContent>
         <div className="flex flex-wrap gap-2">
           <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
             <Printer className="w-4 h-4" />
             Print Results
           </Button>
           <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
             <Share2 className="w-4 h-4" />
             Share
           </Button>
           <Button variant="outline" size="sm" onClick={handleBookmark} className="gap-2">
             <Bookmark className="w-4 h-4" />
             Bookmark
           </Button>
           <Button variant="outline" size="sm" onClick={handleRefresh} className="gap-2">
             <RefreshCw className="w-4 h-4" />
             Reset
           </Button>
         </div>
 
         {showHistory && calculationHistory.length > 0 && (
           <div className="mt-4 pt-4 border-t border-border">
             <h4 className="font-medium text-sm mb-2 text-foreground">Recent Calculations</h4>
             <div className="space-y-2">
               {calculationHistory.slice(0, 3).map((item, idx) => (
                 <div key={idx} className="text-xs bg-background p-2 rounded border">
                   <span className="text-muted-foreground">{item.input}</span>
                   <span className="mx-2">→</span>
                   <span className="font-medium text-primary">{item.result}</span>
                 </div>
               ))}
             </div>
           </div>
         )}
       </CardContent>
     </Card>
   );
 }