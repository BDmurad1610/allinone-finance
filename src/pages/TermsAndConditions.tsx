import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { FileText } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-6 text-foreground">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Welcome to MultiCalculator!</h2>
                <p className="text-muted-foreground">
                  By accessing this website at <a href="https://www.multicalculator.online" className="text-primary hover:underline">https://www.multicalculator.online</a>, you agree to be bound by these Terms and Conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
                <p className="text-muted-foreground">
                  We employ the use of cookies. By accessing MultiCalculator, you agreed to use cookies in agreement with our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">License</h2>
                <p className="text-muted-foreground mb-4">
                  Unless otherwise stated, MultiCalculator and/or its licensors own the intellectual property rights for all material on this website.
                </p>
                <p className="text-muted-foreground font-semibold mb-2">You must not:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Republish material</li>
                  <li>Sell, rent or sub-license content</li>
                  <li>Copy or duplicate content</li>
                  <li>Redistribute content</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">User Responsibility</h2>
                <p className="text-muted-foreground">
                  All calculators and tools provided on this website are for informational purposes only. We do not guarantee 100% accuracy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
                <p className="text-muted-foreground">
                  MultiCalculator shall not be held liable for any losses or damages arising from the use of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed and interpreted in accordance with applicable laws.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}