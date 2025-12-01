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

export default function ROICalculator() {
  const seo = seoData.roi;
  const [investmentCost, setInvestmentCost] = useState<string>("");
  const [returnAmount, setReturnAmount] = useState<string>("");
  const [investmentGain, setInvestmentGain] = useState<string>("");
  const [result, setResult] = useState<{
    roi: number;
    netProfit: number;
    totalReturn: number;
  } | null>(null);

  const calculateROI = () => {
    const cost = parseFloat(investmentCost);
    const returnAmt = parseFloat(returnAmount);
    const gain = parseFloat(investmentGain);

    if (isNaN(cost) || cost <= 0) return;

    let netProfit: number;
    let totalReturn: number;

    if (returnAmt && !isNaN(returnAmt)) {
      netProfit = returnAmt - cost;
      totalReturn = returnAmt;
    } else if (gain && !isNaN(gain)) {
      netProfit = gain;
      totalReturn = cost + gain;
    } else {
      return;
    }

    const roi = (netProfit / cost) * 100;

    setResult({
      roi,
      netProfit,
      totalReturn,
    });
  };

  const getROICategory = (roi: number) => {
    if (roi < 0) return { text: "Loss", color: "text-red-600" };
    if (roi < 5) return { text: "Low Return", color: "text-orange-600" };
    if (roi < 15) return { text: "Moderate Return", color: "text-yellow-600" };
    if (roi < 30) return { text: "Good Return", color: "text-green-600" };
    return { text: "Excellent Return", color: "text-emerald-600" };
  };

  return (
    <CalculatorLayout
      title="ROI Calculator"
      description="Calculate return on investment percentage and profit"
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
          <div className="space-y-2">
            <Label htmlFor="cost">Investment Cost ($)</Label>
            <Input
              id="cost"
              type="number"
              value={investmentCost}
              onChange={(e) => setInvestmentCost(e.target.value)}
              placeholder="Initial investment amount"
              min="0"
              step="0.01"
            />
          </div>

          <div className="p-4 rounded-lg bg-muted/50 text-center text-sm text-muted-foreground">
            Enter either Return Amount OR Investment Gain (not both)
          </div>

          <div className="space-y-2">
            <Label htmlFor="return">Return Amount ($)</Label>
            <Input
              id="return"
              type="number"
              value={returnAmount}
              onChange={(e) => {
                setReturnAmount(e.target.value);
                if (e.target.value) setInvestmentGain("");
              }}
              placeholder="Final amount received"
              min="0"
              step="0.01"
            />
          </div>

          <div className="text-center text-sm text-muted-foreground">OR</div>

          <div className="space-y-2">
            <Label htmlFor="gain">Investment Gain ($)</Label>
            <Input
              id="gain"
              type="number"
              value={investmentGain}
              onChange={(e) => {
                setInvestmentGain(e.target.value);
                if (e.target.value) setReturnAmount("");
              }}
              placeholder="Profit/loss amount"
              step="0.01"
            />
          </div>

          <Button onClick={calculateROI} className="w-full">
            Calculate ROI
          </Button>

          {result && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted text-center">
                <p className="text-sm text-muted-foreground mb-2">Return on Investment</p>
                <p className={`text-4xl font-bold ${getROICategory(result.roi).color}`}>
                  {result.roi.toFixed(2)}%
                </p>
                <p className={`text-sm mt-2 ${getROICategory(result.roi).color}`}>
                  {getROICategory(result.roi).text}
                </p>
              </div>

              <div className="grid gap-3">
                <div className="flex justify-between p-3 rounded bg-muted/50">
                  <span className="text-sm text-muted-foreground">Investment Cost</span>
                  <span className="font-medium">${parseFloat(investmentCost).toFixed(2)}</span>
                </div>
                <div className="flex justify-between p-3 rounded bg-muted/50">
                  <span className="text-sm text-muted-foreground">Net Profit</span>
                  <span className={`font-medium ${result.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${result.netProfit.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded bg-muted/50">
                  <span className="text-sm text-muted-foreground">Total Return</span>
                  <span className="font-medium">${result.totalReturn.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.roi} />
    </CalculatorLayout>
  );
}
