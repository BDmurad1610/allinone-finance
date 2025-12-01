import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function StatisticsCalculator() {
  const seo = seoData.statistics;
  const [numbers, setNumbers] = useState<string>("");
  const [results, setResults] = useState<{
    count: number;
    sum: number;
    mean: number;
    median: number;
    mode: number[];
    range: number;
    variance: number;
    stdDev: number;
    min: number;
    max: number;
  } | null>(null);

  const calculateStatistics = () => {
    const numArray = numbers
      .split(/[\s,]+/)
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (numArray.length === 0) return;

    numArray.sort((a, b) => a - b);

    const count = numArray.length;
    const sum = numArray.reduce((acc, val) => acc + val, 0);
    const mean = sum / count;

    // Median
    const median =
      count % 2 === 0
        ? (numArray[count / 2 - 1] + numArray[count / 2]) / 2
        : numArray[Math.floor(count / 2)];

    // Mode
    const frequency: Record<number, number> = {};
    numArray.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(frequency));
    const mode = Object.keys(frequency)
      .filter((key) => frequency[parseFloat(key)] === maxFreq)
      .map(parseFloat);

    // Range
    const min = numArray[0];
    const max = numArray[count - 1];
    const range = max - min;

    // Variance and Standard Deviation
    const variance = numArray.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / count;
    const stdDev = Math.sqrt(variance);

    setResults({
      count,
      sum,
      mean,
      median,
      mode,
      range,
      variance,
      stdDev,
      min,
      max,
    });
  };

  return (
    <CalculatorLayout
      title="Statistics Calculator"
      description="Calculate mean, median, mode, and more"
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
            <Label htmlFor="numbers">Enter Numbers</Label>
            <Textarea
              id="numbers"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              placeholder="Enter numbers separated by spaces or commas (e.g., 1, 2, 3, 4, 5)"
              rows={4}
            />
            <p className="text-xs text-muted-foreground">
              Separate numbers with spaces, commas, or new lines
            </p>
          </div>

          <Button onClick={calculateStatistics} className="w-full">
            Calculate Statistics
          </Button>

          {results && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-muted">
                  <p className="text-xs text-muted-foreground mb-1">Count</p>
                  <p className="text-xl font-bold">{results.count}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <p className="text-xs text-muted-foreground mb-1">Sum</p>
                  <p className="text-xl font-bold">{results.sum.toFixed(2)}</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Central Tendency</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mean (Average)</span>
                    <span className="font-medium">{results.mean.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Median</span>
                    <span className="font-medium">{results.median.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mode</span>
                    <span className="font-medium">
                      {results.mode.length === results.count
                        ? "No mode"
                        : results.mode.map((m) => m.toFixed(2)).join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Dispersion</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Range</span>
                    <span className="font-medium">{results.range.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Variance</span>
                    <span className="font-medium">{results.variance.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Standard Deviation</span>
                    <span className="font-medium">{results.stdDev.toFixed(4)}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Minimum</span>
                    <span className="font-medium">{results.min.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Maximum</span>
                    <span className="font-medium">{results.max.toFixed(4)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.statistics} />
    </CalculatorLayout>
  );
}
