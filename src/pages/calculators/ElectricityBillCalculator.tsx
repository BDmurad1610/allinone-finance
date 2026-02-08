import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";

const ElectricityBillCalculator = () => {
  const [units, setUnits] = useState("");
  const [ratePerUnit, setRatePerUnit] = useState("0.12");
  const [fixedCharges, setFixedCharges] = useState("10");
  const [taxRate, setTaxRate] = useState("8");
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [result, setResult] = useState<{
    energyCharge: number;
    fixedCharge: number;
    taxAmount: number;
    totalBill: number;
  } | null>(null);

  const calculateBill = () => {
    const unitsConsumed = parseFloat(units);
    const rate = parseFloat(ratePerUnit);
    const fixed = parseFloat(fixedCharges);
    const tax = parseFloat(taxRate);

    if (unitsConsumed >= 0 && rate > 0) {
      const energyCharge = unitsConsumed * rate;
      const subtotal = energyCharge + fixed;
      const taxAmount = (subtotal * tax) / 100;
      const totalBill = subtotal + taxAmount;

      setResult({
        energyCharge: Math.round(energyCharge * 100) / 100,
        fixedCharge: fixed,
        taxAmount: Math.round(taxAmount * 100) / 100,
        totalBill: Math.round(totalBill * 100) / 100,
      });
    }
  };

  const reset = () => {
    setUnits("");
    setRatePerUnit("0.12");
    setFixedCharges("10");
    setTaxRate("8");
    setBillingPeriod("monthly");
    setResult(null);
  };

  const seo = seoData["electricity-bill"];
  const content = calculatorContent["electricity-bill"];

  const seoBreadcrumbs = [
    { name: "Home", url: "https://multicalculator.online/" },
    { name: "Finance", url: "https://multicalculator.online/#finance" },
    { name: "Electricity Bill Calculator", url: "https://multicalculator.online/electricity-bill-calculator" },
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
        title="Electricity Bill Calculator"
        description="Calculate your electricity bill based on units consumed"
        breadcrumbItems={seoBreadcrumbs}
        introContent={{
          description: "Understanding your electricity bill can be confusing with energy charges, fixed fees, and taxes all adding up. Our electricity bill calculator breaks down every component so you know exactly what you're paying for. Enter your kWh consumption, rate per unit, and local tax rate to see a complete bill breakdown - perfect for budgeting, comparing utility rates, or estimating costs before moving.",
          benefits: [
            "Complete bill breakdown",
            "Tax calculation included",
            "Multiple billing periods",
            "Energy cost tracking"
          ],
          lastUpdated: "2026-02-05"
        }}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Consumption Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="units">Units Consumed (kWh)</Label>
                <Input
                  id="units"
                  type="number"
                  placeholder="Enter units consumed"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  aria-label="Electricity units consumed in kWh"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rate">Rate per Unit ($)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.01"
                  placeholder="Enter rate per unit"
                  value={ratePerUnit}
                  onChange={(e) => setRatePerUnit(e.target.value)}
                  aria-label="Rate per electricity unit in dollars"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fixed">Fixed/Service Charges ($)</Label>
                <Input
                  id="fixed"
                  type="number"
                  step="0.01"
                  placeholder="Enter fixed charges"
                  value={fixedCharges}
                  onChange={(e) => setFixedCharges(e.target.value)}
                  aria-label="Fixed service charges in dollars"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax">Tax Rate (%)</Label>
                <Input
                  id="tax"
                  type="number"
                  step="0.1"
                  placeholder="Enter tax rate"
                  value={taxRate}
                  onChange={(e) => setTaxRate(e.target.value)}
                  aria-label="Tax rate percentage"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="period">Billing Period</Label>
                <Select value={billingPeriod} onValueChange={setBillingPeriod}>
                  <SelectTrigger aria-label="Select billing period">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="bimonthly">Bi-Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button onClick={calculateBill} className="flex-1">
                  Calculate Bill
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bill Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Total Bill</p>
                    <p className="text-3xl font-bold text-primary">
                      ${result.totalBill.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {billingPeriod === "monthly" ? "Per Month" : 
                       billingPeriod === "bimonthly" ? "Per 2 Months" : "Per Quarter"}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Energy Charges</span>
                      <span className="font-semibold">${result.energyCharge.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Fixed Charges</span>
                      <span className="font-semibold">${result.fixedCharge.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="text-muted-foreground">Tax ({taxRate}%)</span>
                      <span className="font-semibold text-orange-500">${result.taxAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-3 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-medium">Units Consumed</span>
                      <span>{units} kWh</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  Enter consumption details to calculate your bill
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

export default ElectricityBillCalculator;
