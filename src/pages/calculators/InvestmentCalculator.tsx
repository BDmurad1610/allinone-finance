import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function InvestmentCalculator() {
  const seo = seoData.investment;
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [years, setYears] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [result, setResult] = useState<{
    finalAmount: number;
    totalContributions: number;
    totalReturns: number;
  } | null>(null);

  const calculate = () => {
    const initial = parseFloat(initialInvestment);
    const monthly = parseFloat(monthlyContribution) || 0;
    const y = parseFloat(years);
    const r = parseFloat(returnRate);
    
    if (!initial || !y || !r || initial < 0 || y <= 0 || r < 0) return;
    
    const monthlyRate = r / 100 / 12;
    const months = y * 12;
    
    // Future value of initial investment
    const futureInitial = initial * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions
    let futureContributions = 0;
    if (monthly > 0) {
      futureContributions = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    }
    
    const finalAmount = futureInitial + futureContributions;
    const totalContributions = initial + (monthly * months);
    const totalReturns = finalAmount - totalContributions;
    
    setResult({
      finalAmount: Math.round(finalAmount),
      totalContributions: Math.round(totalContributions),
      totalReturns: Math.round(totalReturns),
    });
  };

  return (
    <CalculatorLayout 
      title="Investment Calculator" 
      description="Calculate your investment returns with regular contributions"
      introContent={{
        description: "Building wealth through investing requires understanding how your money grows over time. Our investment calculator projects future portfolio values using compound interest mathematics, accounting for both initial investments and regular monthly contributions. See exactly how much your investments could be worth in 10, 20, or 30 years - a powerful tool for retirement planning and long-term financial goals.",
        benefits: [
          "Compound growth modeling",
          "Monthly contributions",
          "Long-term projections",
          "Return breakdown"
        ],
        lastUpdated: "2026-02-05"
      }}
      breadcrumbItems={[
        { name: "Home", url: "/" },
        { name: "Finance Calculators", url: "/#finance" },
        { name: "Investment Calculator", url: "/investment-calculator" }
      ]}
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Finance Calculators", url: "/#finance" },
          { name: "Investment Calculator", url: "/investment-calculator" }
        ]}
        faqItems={calculatorContent.investment.faq}
      />
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <Label>Initial Investment ($)</Label>
              <Input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(e.target.value)}
                placeholder="e.g., 5000"
              />
            </div>

            <div>
              <Label>Monthly Contribution ($)</Label>
              <Input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                placeholder="e.g., 500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Investment Period (years)</Label>
                <Input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="e.g., 20"
                />
              </div>
              <div>
                <Label>Expected Annual Return (%)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  placeholder="e.g., 8"
                />
              </div>
            </div>

            <Button onClick={calculate} className="w-full">
              Calculate Investment
            </Button>

            {result && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-center pb-4 border-b">
                      <p className="text-sm text-muted-foreground mb-2">Final Investment Value</p>
                      <p className="text-4xl font-bold text-primary">${result.finalAmount.toLocaleString()}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Contributions</p>
                        <p className="text-xl font-bold">${result.totalContributions.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Returns</p>
                        <p className="text-xl font-bold text-green-600">${result.totalReturns.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.investment} />
    </CalculatorLayout>
  );
}
