import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Mail, Globe } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact Us
            </h1>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground text-lg">
                  If you have any questions, feedback, or suggestions regarding our website or tools, you may contact us through our website.
                </p>
              </div>

              <div className="flex justify-center pt-6">
                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Website</p>
                        <a 
                          href="https://www.multicalculator.online" 
                          className="text-xl font-semibold text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          www.multicalculator.online
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-6">
                <p className="text-muted-foreground">
                  We appreciate your support and thank you for using MultiCalculator.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}