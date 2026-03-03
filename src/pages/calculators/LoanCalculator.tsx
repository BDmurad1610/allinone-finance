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

export default function LoanCalculator() {
  const seo = seoData.loan;
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    principal: number;
    monthlyRate: number;
    numberOfPayments: number;
    rate: number;
  } | null>(null);

  const calculate = () => {
    const principal = parseFloat(loanAmount);
    const years = parseFloat(loanTerm);
    const rate = parseFloat(interestRate);
    
    if (!principal || !years || !rate || principal <= 0 || years <= 0 || rate <= 0) return;
    
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      principal,
      monthlyRate,
      numberOfPayments,
      rate,
    });
  };

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Finance Calculators", url: "/#finance" },
    { name: "Loan Calculator", url: "/loan-calculator" }
  ];

  const introContent = {
    description: "Our Loan Calculator uses the standard amortization formula trusted by banks and financial institutions worldwide. Simply enter your loan amount, term, and interest rate to instantly see your monthly payment, total interest cost, and total amount you'll pay over the life of the loan. Whether you're financing a car, consolidating debt, or planning any major purchase, this calculator helps you make informed borrowing decisions.",
    benefits: [
      "Standard amortization formula",
      "Instant monthly payment calculation",
      "Step-by-step calculation breakdown",
      "Compare different loan scenarios"
    ],
    lastUpdated: "2026-03-01"
  };

  return (
    <CalculatorLayout 
      title="Loan Calculator" 
      description="Calculate loan payments and total interest over time"
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
          { name: "Loan Calculator", url: "/loan-calculator" }
        ]}
        faqItems={calculatorContent.loan.faq}
      />
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <Label>Loan Amount ($)</Label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="e.g., 25000"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Loan Term (years)</Label>
                <Input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="e.g., 5"
                />
              </div>
              <div>
                <Label>Interest Rate (% per year)</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="e.g., 7.5"
                />
              </div>
            </div>

            <Button onClick={calculate} className="w-full">
              Calculate Loan
            </Button>

            {result && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="text-center pb-4 border-b">
                      <p className="text-sm text-muted-foreground mb-2">Monthly Payment</p>
                      <p className="text-4xl font-bold text-primary">${result.monthlyPayment.toLocaleString()}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                        <p className="text-xl font-bold">${result.totalInterest.toLocaleString()}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-background">
                        <p className="text-xs text-muted-foreground mb-1">Total Payment</p>
                        <p className="text-xl font-bold">${result.totalPayment.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Step-by-step calculation breakdown */}
                    <div className="mt-6 p-4 bg-background rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">📐 How This Was Calculated (Step-by-Step)</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>1. Loan Principal (P)</span>
                          <span className="font-medium text-foreground">${result.principal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>2. Annual Interest Rate</span>
                          <span className="font-medium text-foreground">{result.rate}%</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>3. Monthly Interest Rate (r = {result.rate}% ÷ 12)</span>
                          <span className="font-medium text-foreground">{(result.monthlyRate * 100).toFixed(4)}%</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>4. Total Payments (n = {result.numberOfPayments / 12} years × 12)</span>
                          <span className="font-medium text-foreground">{result.numberOfPayments} months</span>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg mt-2">
                          <p className="text-xs font-medium text-foreground mb-1">5. Formula Applied:</p>
                          <p className="text-xs font-mono">EMI = P × r × (1+r)^n ÷ ((1+r)^n - 1)</p>
                          <p className="text-xs font-mono mt-1">
                            = {result.principal.toLocaleString()} × {(result.monthlyRate).toFixed(6)} × (1+{(result.monthlyRate).toFixed(6)})^{result.numberOfPayments} ÷ ((1+{(result.monthlyRate).toFixed(6)})^{result.numberOfPayments} - 1)
                          </p>
                          <p className="text-xs font-mono mt-1 text-primary font-semibold">
                            = ${result.monthlyPayment.toLocaleString()} per month
                          </p>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span>6. Total Payment = ${result.monthlyPayment.toLocaleString()} × {result.numberOfPayments}</span>
                          <span className="font-medium text-foreground">${result.totalPayment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>7. Total Interest = ${result.totalPayment.toLocaleString()} − ${result.principal.toLocaleString()}</span>
                          <span className="font-medium text-foreground">${result.totalInterest.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Result interpretation */}
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">💡 What This Means</h4>
                      <p className="text-sm text-muted-foreground">
                        For a <strong className="text-foreground">${result.principal.toLocaleString()}</strong> loan at <strong className="text-foreground">{result.rate}% annual interest</strong> over <strong className="text-foreground">{result.numberOfPayments / 12} years</strong>, 
                        you'll pay <strong className="text-foreground">${result.monthlyPayment.toLocaleString()}</strong> every month. 
                        Over the life of the loan, you'll pay <strong className="text-foreground">${result.totalInterest.toLocaleString()}</strong> in interest, 
                        which is <strong className="text-foreground">{((result.totalInterest / result.principal) * 100).toFixed(1)}%</strong> of the original loan amount.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
      
      <CalculatorContent content={calculatorContent.loan} />
    </CalculatorLayout>
  );
}
