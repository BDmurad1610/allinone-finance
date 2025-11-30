import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function SalaryCalculator() {
  const seo = seoData.salary;
  const [amount, setAmount] = useState("");
  const [fromPeriod, setFromPeriod] = useState<"hourly" | "daily" | "weekly" | "monthly" | "yearly">("yearly");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");

  const calculateSalary = () => {
    const value = parseFloat(amount);
    const hours = parseFloat(hoursPerWeek);
    
    if (!value || !hours || value <= 0 || hours <= 0) {
      return {
        hourly: 0,
        daily: 0,
        weekly: 0,
        monthly: 0,
        yearly: 0,
      };
    }

    const weeksPerYear = 52;
    const monthsPerYear = 12;
    
    let hourlyRate = 0;
    
    switch (fromPeriod) {
      case "hourly":
        hourlyRate = value;
        break;
      case "daily":
        hourlyRate = value / (hours / 5);
        break;
      case "weekly":
        hourlyRate = value / hours;
        break;
      case "monthly":
        hourlyRate = (value * monthsPerYear) / (hours * weeksPerYear);
        break;
      case "yearly":
        hourlyRate = value / (hours * weeksPerYear);
        break;
    }

    return {
      hourly: hourlyRate,
      daily: hourlyRate * (hours / 5),
      weekly: hourlyRate * hours,
      monthly: (hourlyRate * hours * weeksPerYear) / monthsPerYear,
      yearly: hourlyRate * hours * weeksPerYear,
    };
  };

  const results = calculateSalary();
  const showResults = parseFloat(amount) > 0;

  return (
    <CalculatorLayout 
      title="Salary Calculator" 
      description="Convert between different salary periods"
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
      />
      <Card>
        <CardHeader>
          <CardTitle>Convert Your Salary</CardTitle>
          <CardDescription>Enter your salary and convert between hourly, daily, weekly, monthly, and yearly rates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Salary Amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="period">Pay Period</Label>
              <Select value={fromPeriod} onValueChange={(v: any) => setFromPeriod(v)}>
                <SelectTrigger id="period">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Per Hour</SelectItem>
                  <SelectItem value="daily">Per Day</SelectItem>
                  <SelectItem value="weekly">Per Week</SelectItem>
                  <SelectItem value="monthly">Per Month</SelectItem>
                  <SelectItem value="yearly">Per Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Hours Per Week</Label>
            <Input
              id="hours"
              type="number"
              min="1"
              max="168"
              placeholder="40"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
            />
          </div>

          {showResults && (
            <div className="space-y-4 pt-6 border-t">
              <h3 className="font-semibold text-lg mb-4">Salary Breakdown</h3>
              
              <div className="grid gap-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-muted-foreground">Hourly</span>
                  <span className="font-bold text-lg">${results.hourly.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-muted-foreground">Daily</span>
                  <span className="font-bold text-lg">${results.daily.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-muted-foreground">Weekly</span>
                  <span className="font-bold text-lg">${results.weekly.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-muted-foreground">Monthly</span>
                  <span className="font-bold text-lg">${results.monthly.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border-2 border-primary/20">
                  <span className="text-foreground font-semibold">Yearly</span>
                  <span className="font-bold text-xl text-primary">${results.yearly.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}