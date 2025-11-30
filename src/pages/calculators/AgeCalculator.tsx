import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function AgeCalculator() {
  const seo = seoData.age;
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalMonths: number;
  } | null>(null);

  const calculate = () => {
    if (!birthDate) return;
    
    const birth = new Date(birthDate);
    const today = new Date();
    
    if (birth > today) return;
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + months;
    
    setResult({ years, months, days, totalDays, totalMonths });
  };

  return (
    <CalculatorLayout 
      title="Age Calculator" 
      description="Calculate your exact age in years, months, and days"
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
      />
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <Label>Date of Birth</Label>
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            <Button onClick={calculate} className="w-full">
              Calculate Age
            </Button>

            {result && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="text-center pb-4 border-b">
                      <p className="text-sm text-muted-foreground mb-2">Your Age</p>
                      <div className="flex items-center justify-center gap-4">
                        <div>
                          <p className="text-4xl font-bold text-primary">{result.years}</p>
                          <p className="text-xs text-muted-foreground">years</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold">{result.months}</p>
                          <p className="text-xs text-muted-foreground">months</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold">{result.days}</p>
                          <p className="text-xs text-muted-foreground">days</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Months</p>
                        <p className="text-2xl font-bold">{result.totalMonths.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Days</p>
                        <p className="text-2xl font-bold">{result.totalDays.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}
