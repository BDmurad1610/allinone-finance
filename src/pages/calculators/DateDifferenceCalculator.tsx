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

export default function DateDifferenceCalculator() {
  const seo = seoData.dateDifference;
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
  } | null>(null);

  const calculateDifference = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      [start, end].reverse();
    }

    // Total difference in milliseconds
    const diffMs = end.getTime() - start.getTime();

    // Convert to different units
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    // Calculate years, months, and remaining days
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({
      years,
      months,
      days,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
  };

  return (
    <CalculatorLayout
      title="Date Difference Calculator"
      description="Calculate the difference between two dates"
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Date & Time Calculators", url: "/#datetime" },
          { name: "Date Difference Calculator", url: "/date-difference-calculator" }
        ]}
        faqItems={calculatorContent.dateDifference.faq}
      />
      <Card>
        <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <Button onClick={calculateDifference} className="w-full">
            Calculate Difference
          </Button>

          {result && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3 text-center">Time Difference</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-3xl font-bold">{result.years}</p>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{result.months}</p>
                    <p className="text-xs text-muted-foreground">Months</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{result.days}</p>
                    <p className="text-xs text-muted-foreground">Days</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Or Equivalently</h3>
                <div className="grid gap-2">
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm text-muted-foreground">Total Days</span>
                    <span className="font-medium">{result.totalDays.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm text-muted-foreground">Total Hours</span>
                    <span className="font-medium">{result.totalHours.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm text-muted-foreground">Total Minutes</span>
                    <span className="font-medium">{result.totalMinutes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm text-muted-foreground">Total Seconds</span>
                    <span className="font-medium">{result.totalSeconds.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.dateDifference} />
    </CalculatorLayout>
  );
}
