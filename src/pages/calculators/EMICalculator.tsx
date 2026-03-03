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
    principalVal: number;
    rateVal: number;
    monthlyRate: number;
    months: number;
  } | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const months = parseFloat(tenure);

    if (P > 0 && annualRate > 0 && months > 0) {
      const r = annualRate / 12 / 100;
      const emi = (P * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
      const totalAmount = emi * months;
      const totalInterest = totalAmount - P;

      setResult({
        emi: Math.round(emi * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalAmount: Math.round(totalAmount * 100) / 100,
        principalVal: P,
        rateVal: annualRate,
        monthlyRate: r,
        months,
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
          description: "Equated Monthly Installment (EMI) is the fixed payment amount you make to a lender each month until your loan is paid off. Our EMI calculator uses the standard amortization formula to give you precise monthly payment estimates for personal loans, car loans, home loans, and education loans. See the full step-by-step breakdown of how your EMI is calculated.",
          benefits: [
            "Standard EMI formula",
            "Step-by-step calculation shown",
            "Total interest breakdown",
            "100% free & private"
          ],
          lastUpdated: "2026-03-01"
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
                <Input id="principal" type="number" placeholder="Enter loan amount" value={principal} onChange={(e) => setPrincipal(e.target.value)} aria-label="Loan amount in dollars" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                <Input id="rate" type="number" step="0.1" placeholder="Enter annual interest rate" value={rate} onChange={(e) => setRate(e.target.value)} aria-label="Annual interest rate percentage" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tenure">Loan Tenure (Months)</Label>
                <Input id="tenure" type="number" placeholder="Enter tenure in months" value={tenure} onChange={(e) => setTenure(e.target.value)} aria-label="Loan tenure in months" />
              </div>
              <div className="flex gap-2">
                <Button onClick={calculateEMI} className="flex-1">Calculate EMI</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
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
                    <p className="text-3xl font-bold text-primary">${result.emi.toLocaleString()}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <p className="text-xs text-muted-foreground">Principal Amount</p>
                      <p className="text-lg font-semibold">${result.principalVal.toLocaleString()}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <p className="text-xs text-muted-foreground">Total Interest</p>
                      <p className="text-lg font-semibold">${result.totalInterest.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-muted rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">Total Amount Payable</p>
                    <p className="text-xl font-bold">${result.totalAmount.toLocaleString()}</p>
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

        {/* Step-by-step calculation breakdown - shown below calculator */}
        {result && (
          <Card className="mt-6 bg-muted/50">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-3 text-sm">📐 How This Was Calculated (Step-by-Step)</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between py-1 border-b border-border">
                  <span>1. Loan Principal (P)</span>
                  <span className="font-medium text-foreground">${result.principalVal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border">
                  <span>2. Annual Interest Rate</span>
                  <span className="font-medium text-foreground">{result.rateVal}%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border">
                  <span>3. Monthly Interest Rate (r = {result.rateVal}% ÷ 12 ÷ 100)</span>
                  <span className="font-medium text-foreground">{(result.monthlyRate).toFixed(6)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border">
                  <span>4. Loan Tenure (n)</span>
                  <span className="font-medium text-foreground">{result.months} months</span>
                </div>
                <div className="p-3 bg-background rounded-lg mt-2">
                  <p className="text-xs font-medium text-foreground mb-1">5. EMI Formula:</p>
                  <p className="text-xs font-mono">EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1)</p>
                  <p className="text-xs font-mono mt-1">
                    = {result.principalVal.toLocaleString()} × {result.monthlyRate.toFixed(6)} × (1+{result.monthlyRate.toFixed(6)})^{result.months} ÷ ((1+{result.monthlyRate.toFixed(6)})^{result.months} − 1)
                  </p>
                  <p className="text-xs font-mono mt-1 text-primary font-semibold">
                    = ${result.emi.toLocaleString()} per month
                  </p>
                </div>
                <div className="flex justify-between py-1 border-b border-border">
                  <span>6. Total Payment = ${result.emi.toLocaleString()} × {result.months}</span>
                  <span className="font-medium text-foreground">${result.totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>7. Total Interest = ${result.totalAmount.toLocaleString()} − ${result.principalVal.toLocaleString()}</span>
                  <span className="font-medium text-foreground">${result.totalInterest.toLocaleString()}</span>
                </div>
              </div>

              {/* Result interpretation */}
              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2 text-sm">💡 What This Means</h4>
                <p className="text-sm text-muted-foreground">
                  For a <strong className="text-foreground">${result.principalVal.toLocaleString()}</strong> loan at <strong className="text-foreground">{result.rateVal}% annual interest</strong> over <strong className="text-foreground">{result.months} months</strong>, 
                  your fixed monthly payment (EMI) is <strong className="text-foreground">${result.emi.toLocaleString()}</strong>. 
                  You'll pay <strong className="text-foreground">${result.totalInterest.toLocaleString()}</strong> in total interest, 
                  which is <strong className="text-foreground">{((result.totalInterest / result.principalVal) * 100).toFixed(1)}%</strong> of the loan amount.
                </p>
              </div>

              <p className="text-xs text-muted-foreground italic mt-3">
                ⚠️ This is an estimate based on a fixed interest rate. Actual EMI may vary based on your lender's terms. Consult a financial advisor for personalized guidance.
              </p>
            </CardContent>
          </Card>
        )}

        {content && <CalculatorContent content={content} />}
      </CalculatorLayout>
    </>
  );
};

export default EMICalculator;
