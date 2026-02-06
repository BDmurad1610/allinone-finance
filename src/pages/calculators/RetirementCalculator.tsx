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

export default function RetirementCalculator() {
  const seo = seoData.retirement;
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [result, setResult] = useState<{
    finalAmount: number;
    totalContributions: number;
    totalReturns: number;
    yearsToRetirement: number;
  } | null>(null);

  const calculate = () => {
    const current = parseFloat(currentAge);
    const retirement = parseFloat(retirementAge);
    const savings = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const r = parseFloat(returnRate);
    
    if (!current || !retirement || !r || current >= retirement || current < 0 || retirement <= 0 || r < 0) return;
    
    const years = retirement - current;
    const monthlyRate = r / 100 / 12;
    const months = years * 12;
    
    // Future value of current savings
    const futureSavings = savings * Math.pow(1 + monthlyRate, months);
    
    // Future value of monthly contributions
    let futureContributions = 0;
    if (monthly > 0) {
      futureContributions = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    }
    
    const finalAmount = futureSavings + futureContributions;
    const totalContributions = savings + (monthly * months);
    const totalReturns = finalAmount - totalContributions;
    
    setResult({
      finalAmount: Math.round(finalAmount),
      totalContributions: Math.round(totalContributions),
      totalReturns: Math.round(totalReturns),
      yearsToRetirement: years,
    });
  };

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Finance Calculators", url: "/#finance" },
    { name: "Retirement Calculator", url: "/retirement-calculator" }
  ];

  const introContent = {
    description: "Plan your financial future with our Retirement Calculator. Using compound interest formulas, this tool projects how your current savings and monthly contributions will grow by your retirement age. Factor in expected investment returns to see your projected nest egg, total contributions vs. investment returns, and years until retirement. Essential for 401(k), IRA, and personal retirement planning.",
    benefits: [
      "Compound growth projection",
      "Contributions vs returns breakdown",
      "Customizable retirement age",
      "Based on standard financial formulas"
    ],
    lastUpdated: "2026-02-01"
  };

  return (
    <CalculatorLayout 
      title="Retirement Calculator" 
      description="Plan your retirement savings and see your projected nest egg"
      breadcrumbItems={breadcrumbItems}
      introContent={introContent}
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
          { name: "Retirement Calculator", url: "/retirement-calculator" }
        ]}
        faqItems={calculatorContent.retirement.faq}
      />
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Current Age</Label>
                <Input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  placeholder="e.g., 30"
                />
              </div>
              <div>
                <Label>Retirement Age</Label>
                <Input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(e.target.value)}
                  placeholder="e.g., 65"
                />
              </div>
            </div>

            <div>
              <Label>Current Retirement Savings ($)</Label>
              <Input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(e.target.value)}
                placeholder="e.g., 50000"
              />
            </div>

            <div>
              <Label>Monthly Contribution ($)</Label>
              <Input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                placeholder="e.g., 1000"
              />
            </div>

            <div>
              <Label>Expected Annual Return (%)</Label>
              <Input
                type="number"
                step="0.1"
                value={returnRate}
                onChange={(e) => setReturnRate(e.target.value)}
                placeholder="e.g., 7"
              />
            </div>

            <Button onClick={calculate} className="w-full">
              Calculate Retirement
            </Button>

            {result && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-center pb-4 border-b">
                      <p className="text-sm text-muted-foreground mb-1">Retirement Savings at Age {retirementAge}</p>
                      <p className="text-4xl font-bold text-primary">${result.finalAmount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-2">In {result.yearsToRetirement} years</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Contributions</p>
                        <p className="text-xl font-bold">${result.totalContributions.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Investment Returns</p>
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
      <CalculatorContent content={calculatorContent.retirement} />
    </CalculatorLayout>
  );
}
