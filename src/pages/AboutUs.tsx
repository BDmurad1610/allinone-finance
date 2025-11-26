import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Info, CheckCircle2, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <Info className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Us
            </h1>
          </div>
          
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Welcome to MultiCalculator!</h2>
                <p className="text-muted-foreground">
                  MultiCalculator is a free online platform that provides fast, simple, and accurate calculator tools for daily use.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Our mission is to make complex calculations easy for everyone using modern web technology.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">What We Offer</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Financial Calculators
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Health Calculators
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Math Calculators
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Utility & Conversion Tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    100% Free
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Easy to Use
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Mobile-Friendly
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Instant Results
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                We are continuously improving our tools to deliver a better user experience.
              </p>
              <p className="text-muted-foreground mt-4 font-semibold">
                Thank you for visiting MultiCalculator!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}