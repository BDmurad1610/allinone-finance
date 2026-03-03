import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";

export default function MortgageCalculator() {
  const seo = seoData.mortgage;
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("30");
  const [interestRate, setInterestRate] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    loanAmount: number;
    price: number;
    down: number;
    rate: number;
    monthlyRate: number;
    numberOfPayments: number;
  } | null>(null);

  const calculate = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const years = parseFloat(loanTerm);
    const rate = parseFloat(interestRate);
    
    if (!price || !down || !years || !rate || price <= 0 || down < 0 || years <= 0 || rate <= 0) return;
    
    const loanAmount = price - down;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
    
    setResult({
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      loanAmount: Math.round(loanAmount),
      price,
      down,
      rate,
      monthlyRate,
      numberOfPayments,
    });
  };

  return (
    <CalculatorLayout 
      title="Mortgage Calculator" 
      description="Calculate your monthly mortgage payments and total interest"
      introContent={{
        description: "Planning to buy a home? Our mortgage calculator uses the standard amortization formula to give you accurate monthly payment estimates. Enter your home price, down payment, loan term, and interest rate to see a complete breakdown of costs including step-by-step calculation details.",
        benefits: [
          "Standard amortization formula",
          "Step-by-step calculation shown",
          "Total cost breakdown",
          "Compare loan scenarios"
        ],
        lastUpdated: "2026-03-01"
      }}
      breadcrumbItems={[
        { name: "Home", url: "/" },
        { name: "Finance Calculators", url: "/#finance" },
        { name: "Mortgage Calculator", url: "/mortgage-calculator" }
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
          { name: "Mortgage Calculator", url: "/mortgage-calculator" }
        ]}
        faqItems={calculatorContent.mortgage.faq}
      />
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <Label>Home Price ($)</Label>
              <Input type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="e.g., 350000" />
            </div>
            <div>
              <Label>Down Payment ($)</Label>
              <Input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} placeholder="e.g., 70000" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Loan Term (years)</Label>
                <Input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} placeholder="e.g., 30" />
              </div>
              <div>
                <Label>Interest Rate (%)</Label>
                <Input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="e.g., 6.5" />
              </div>
            </div>

            <Button onClick={calculate} className="w-full">Calculate Mortgage</Button>

            {result && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-center pb-4 border-b">
                      <p className="text-sm text-muted-foreground mb-2">Monthly Payment</p>
                      <p className="text-4xl font-bold text-primary">${result.monthlyPayment.toLocaleString()}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Loan Amount</p>
                        <p className="text-lg font-bold">${result.loanAmount.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                        <p className="text-lg font-bold">${result.totalInterest.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Payment</p>
                        <p className="text-lg font-bold">${result.totalPayment.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Step-by-step calculation breakdown */}
                    <div className="mt-6 p-4 bg-background rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">📐 How This Was Calculated (Step-by-Step)</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>1. Home Price</span>
                          <span className="font-medium text-foreground">${result.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>2. Down Payment ({((result.down / result.price) * 100).toFixed(1)}%)</span>
                          <span className="font-medium text-foreground">− ${result.down.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>3. Loan Amount (P = Price − Down Payment)</span>
                          <span className="font-medium text-foreground">${result.loanAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>4. Monthly Rate (r = {result.rate}% ÷ 12)</span>
                          <span className="font-medium text-foreground">{(result.monthlyRate * 100).toFixed(4)}%</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>5. Total Payments (n = {result.numberOfPayments / 12} years × 12)</span>
                          <span className="font-medium text-foreground">{result.numberOfPayments} months</span>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg mt-2">
                          <p className="text-xs font-medium text-foreground mb-1">6. Formula Applied:</p>
                          <p className="text-xs font-mono">Monthly Payment = P × r × (1+r)^n ÷ ((1+r)^n − 1)</p>
                          <p className="text-xs font-mono mt-1 text-primary font-semibold">
                            = ${result.monthlyPayment.toLocaleString()} per month
                          </p>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>7. Total Payment = ${result.monthlyPayment.toLocaleString()} × {result.numberOfPayments}</span>
                          <span className="font-medium text-foreground">${result.totalPayment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>8. Total Interest = ${result.totalPayment.toLocaleString()} − ${result.loanAmount.toLocaleString()}</span>
                          <span className="font-medium text-foreground">${result.totalInterest.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Result interpretation */}
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">💡 What This Means</h4>
                      <p className="text-sm text-muted-foreground">
                        For a <strong className="text-foreground">${result.price.toLocaleString()}</strong> home with <strong className="text-foreground">${result.down.toLocaleString()}</strong> down ({((result.down / result.price) * 100).toFixed(0)}%), 
                        your monthly payment would be <strong className="text-foreground">${result.monthlyPayment.toLocaleString()}</strong>. 
                        Over {result.numberOfPayments / 12} years, you'll pay <strong className="text-foreground">${result.totalInterest.toLocaleString()}</strong> in interest — 
                        that's <strong className="text-foreground">{((result.totalInterest / result.loanAmount) * 100).toFixed(1)}%</strong> of the loan amount.
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground italic">
                      ⚠️ This estimate does not include property taxes, homeowners insurance, PMI, or HOA fees. Consult a mortgage professional for a complete assessment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
      
      <CalculatorContent content={calculatorContent.mortgage} />
    </CalculatorLayout>
  );
}
