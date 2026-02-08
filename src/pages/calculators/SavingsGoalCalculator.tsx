import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CalculatorLayout from "@/components/CalculatorLayout";
import SEOHead from "@/components/SEOHead";
import CalculatorContent from "@/components/CalculatorContent";
import { seoData } from "@/lib/seoData";
import { calculatorContent } from "@/data/calculatorContent";
import { Target, Calendar, DollarSign, PiggyBank } from "lucide-react";

const SavingsGoalCalculator = () => {
  const [goalAmount, setGoalAmount] = useState<string>("");
  const [currentSavings, setCurrentSavings] = useState<string>("");
  const [timeMonths, setTimeMonths] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [result, setResult] = useState<{
    monthlyContribution: number;
    totalContributions: number;
    interestEarned: number;
    finalAmount: number;
  } | null>(null);

  const seo = seoData["savings-goal"];
  const content = calculatorContent["savings-goal"];

  const calculateSavingsGoal = () => {
    const goal = parseFloat(goalAmount);
    const current = parseFloat(currentSavings) || 0;
    const months = parseFloat(timeMonths);
    const annualRate = parseFloat(interestRate) || 0;

    if (goal > 0 && months > 0) {
      const monthlyRate = annualRate / 100 / 12;
      const amountNeeded = goal - current;

      let monthlyContribution: number;
      
      if (monthlyRate > 0) {
        // PMT formula for regular contributions with interest
        const futureValueCurrent = current * Math.pow(1 + monthlyRate, months);
        const remainingGoal = goal - futureValueCurrent;
        monthlyContribution = remainingGoal * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
      } else {
        monthlyContribution = amountNeeded / months;
      }

      const totalContributions = monthlyContribution * months;
      const finalAmount = goal;
      const interestEarned = finalAmount - current - totalContributions;

      setResult({
        monthlyContribution: Math.max(0, Math.round(monthlyContribution * 100) / 100),
        totalContributions: Math.round(totalContributions * 100) / 100,
        interestEarned: Math.max(0, Math.round(interestEarned * 100) / 100),
        finalAmount: Math.round(finalAmount * 100) / 100
      });
    }
  };

  const clearInputs = () => {
    setGoalAmount("");
    setCurrentSavings("");
    setTimeMonths("");
    setInterestRate("");
    setResult(null);
  };

  return (
    <>
      <SEOHead {...seo} />
      <CalculatorLayout
        title="Savings Goal Calculator"
        description="Calculate how much you need to save monthly to reach your financial goals"
        introContent={{
          description: "Whether saving for a vacation, emergency fund, down payment, or any financial milestone, our savings goal calculator tells you exactly how much to set aside each month. The tool factors in your current savings, target amount, timeline, and potential interest earnings to create a personalized savings plan. Trusted by financial coaches and budgeting experts for accurate, actionable results.",
          benefits: [
            "Personalized savings plan",
            "Interest earnings included",
            "Adjustable timelines",
            "Goal tracking support"
          ],
          lastUpdated: "2026-02-05"
        }}
        breadcrumbItems={[
          { name: "Home", url: "/" },
          { name: "Finance Calculators", url: "/#finance" },
          { name: "Savings Goal Calculator", url: "/savings-goal-calculator" }
        ]}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" aria-hidden="true" />
                Savings Goal Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goalAmount" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" aria-hidden="true" />
                  Savings Goal ($)
                </Label>
                <Input
                  id="goalAmount"
                  type="number"
                  placeholder="Enter target amount"
                  value={goalAmount}
                  onChange={(e) => setGoalAmount(e.target.value)}
                  min="0"
                  step="100"
                  aria-label="Savings goal amount"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentSavings" className="flex items-center gap-2">
                  <PiggyBank className="h-4 w-4" aria-hidden="true" />
                  Current Savings ($)
                </Label>
                <Input
                  id="currentSavings"
                  type="number"
                  placeholder="Enter current savings (optional)"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(e.target.value)}
                  min="0"
                  step="100"
                  aria-label="Current savings amount"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeMonths" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Time to Reach Goal (months)
                </Label>
                <Input
                  id="timeMonths"
                  type="number"
                  placeholder="Enter number of months"
                  value={timeMonths}
                  onChange={(e) => setTimeMonths(e.target.value)}
                  min="1"
                  step="1"
                  aria-label="Time period in months"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" aria-hidden="true" />
                  Annual Interest Rate (%)
                </Label>
                <Input
                  id="interestRate"
                  type="number"
                  placeholder="Enter interest rate (optional)"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  min="0"
                  max="100"
                  step="0.1"
                  aria-label="Annual interest rate percentage"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={calculateSavingsGoal} className="flex-1">
                  Calculate
                </Button>
                <Button onClick={clearInputs} variant="outline">
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="h-5 w-5 text-primary" aria-hidden="true" />
                Savings Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">Monthly Contribution Needed</p>
                    <p className="text-3xl font-bold text-primary">${result.monthlyContribution.toFixed(2)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Contributions</p>
                      <p className="text-xl font-semibold">${result.totalContributions.toFixed(2)}</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Interest Earned</p>
                      <p className="text-xl font-semibold text-green-600">${result.interestEarned.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Final Amount</p>
                    <p className="text-xl font-semibold">${result.finalAmount.toFixed(2)}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Target className="h-12 w-12 mx-auto mb-3 opacity-50" aria-hidden="true" />
                  <p>Enter your savings goal details to get started</p>
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

export default SavingsGoalCalculator;
