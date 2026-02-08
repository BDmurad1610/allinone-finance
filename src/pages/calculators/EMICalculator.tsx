import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalAmount: number;
  } | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const months = parseFloat(tenure);

    if (P > 0 && annualRate > 0 && months > 0) {
      const r = annualRate / 12 / 100; // Monthly interest rate
      const emi = (P * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
      const totalAmount = emi * months;
      const totalInterest = totalAmount - P;

      setResult({
        emi: Math.round(emi * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalAmount: Math.round(totalAmount * 100) / 100,
      });
    }
  };

  const reset = () => {
    setPrincipal("");
    setRate("");
    setTenure("");
    setResult(null);
  };

  const seo = seoData["emi"];
  const content = calculatorContent["emi"];

  const seoBreadcrumbs = [
    { name: "Home", url: "https://multicalculator.online/" },
    { name: "Finance", url: "https://multicalculator.online/#finance" },
    { name: "EMI Calculator", url: "https://multicalculator.online/emi-calculator" },
  ];

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        breadcrumbs={seoBreadcrumbs}
      />
      <CalculatorLayout
        title="EMI Calculator"
        description="Calculate your Equated Monthly Installment for loans"
        breadcrumbItems={seoBreadcrumbs}
        introContent={{
          description: "Equated Monthly Installment (EMI) is the fixed payment amount you make to a lender each month until your loan is paid off. Our EMI calculator uses the standard amortization formula trusted by banks and financial institutions worldwide to give you precise monthly payment estimates for personal loans, car loans, home loans, and education loans. Plan your budget confidently with instant, accurate results.",
          benefits: [
            "Bank-standard EMI formula",
            "Total interest breakdown",
            "Compare loan scenarios",
            "100% free & private"
          ],
          lastUpdated: "2026-02-05"
        }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="principal">Loan Amount ($)</Label>
                <Input
                  id="principal"
                  type="number"
                  placeholder="Enter loan amount"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  aria-label="Loan amount in dollars"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.1"
                  placeholder="Enter annual interest rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  aria-label="Annual interest rate percentage"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenure">Loan Tenure (Months)</Label>
                <Input
                  id="tenure"
                  type="number"
                  placeholder="Enter tenure in months"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  aria-label="Loan tenure in months"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={calculateEMI} className="flex-1">
                  Calculate EMI
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>EMI Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Monthly EMI</p>
                    <p className="text-3xl font-bold text-primary">
                      ${result.emi.toLocaleString()}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <p className="text-xs text-muted-foreground">Principal Amount</p>
                      <p className="text-lg font-semibold">
                        ${parseFloat(principal).toLocaleString()}
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <p className="text-xs text-muted-foreground">Total Interest</p>
                      <p className="text-lg font-semibold text-orange-500">
                        ${result.totalInterest.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-muted rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">Total Amount Payable</p>
                    <p className="text-xl font-bold">
                      ${result.totalAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  Enter loan details to calculate your EMI
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {content && <CalculatorContent content={content} />}
      </CalculatorLayout>
    </>
  );
};

export default EMICalculator;
