import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function TipCalculator() {
  const seo = seoData.tip;
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("15");
  const [customTip, setCustomTip] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("1");
  
  const tipPresets = [10, 15, 18, 20, 25];
  
  const bill = parseFloat(billAmount) || 0;
  const tip = parseFloat(customTip || tipPercentage) || 0;
  const people = parseInt(numberOfPeople) || 1;
  
  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  const perPersonTotal = totalAmount / people;
  const perPersonTip = tipAmount / people;

  const handlePresetClick = (preset: number) => {
    setTipPercentage(preset.toString());
    setCustomTip("");
  };

  const handleCustomTipChange = (value: string) => {
    setCustomTip(value);
    if (value) {
      setTipPercentage("");
    }
  };

  return (
    <CalculatorLayout 
      title="Tip Calculator" 
      description="Calculate tips and split bills easily"
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
          { name: "Tip Calculator", url: "/tip-calculator" }
        ]}
        faqItems={calculatorContent.tip.faq}
      />
      <Card>
        <CardHeader>
          <CardTitle>Calculate Your Tip</CardTitle>
          <CardDescription>Enter bill amount and select tip percentage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Bill Amount */}
          <div className="space-y-2">
            <Label htmlFor="billAmount">Bill Amount ($)</Label>
            <Input
              id="billAmount"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
            />
          </div>

          {/* Tip Presets */}
          <div className="space-y-2">
            <Label>Tip Percentage</Label>
            <div className="grid grid-cols-5 gap-2">
              {tipPresets.map((preset) => (
                <Button
                  key={preset}
                  variant={tipPercentage === preset.toString() && !customTip ? "default" : "outline"}
                  onClick={() => handlePresetClick(preset)}
                  className="w-full"
                >
                  {preset}%
                </Button>
              ))}
            </div>
          </div>

          {/* Custom Tip */}
          <div className="space-y-2">
            <Label htmlFor="customTip">Custom Tip (%)</Label>
            <Input
              id="customTip"
              type="number"
              step="0.1"
              min="0"
              max="100"
              placeholder="Enter custom percentage"
              value={customTip}
              onChange={(e) => handleCustomTipChange(e.target.value)}
            />
          </div>

          {/* Number of People */}
          <div className="space-y-2">
            <Label htmlFor="numberOfPeople">Number of People</Label>
            <Input
              id="numberOfPeople"
              type="number"
              min="1"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
            />
          </div>

          {/* Results */}
          {bill > 0 && (
            <div className="space-y-4 pt-6 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Tip Amount</p>
                  <p className="text-2xl font-bold text-primary">${tipAmount.toFixed(2)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="text-2xl font-bold text-primary">${totalAmount.toFixed(2)}</p>
                </div>
              </div>

              {people > 1 && (
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tip per Person</p>
                    <p className="text-xl font-semibold">${perPersonTip.toFixed(2)}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total per Person</p>
                    <p className="text-xl font-semibold">${perPersonTotal.toFixed(2)}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.tip} />
    </CalculatorLayout>
  );
}
