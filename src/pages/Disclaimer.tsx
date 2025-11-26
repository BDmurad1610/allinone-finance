import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <AlertTriangle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Disclaimer
            </h1>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-6 text-foreground">
              <div>
                <p className="text-muted-foreground text-lg">
                  All the information and tools on this website are published in good faith and for general informational purposes only.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  MultiCalculator does not make any warranties about the completeness, reliability, and accuracy of this information.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Any action you take using the tools on this website is strictly at your own risk.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground font-semibold">
                  MultiCalculator will not be liable for any losses or damages in connection with the use of this website.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}