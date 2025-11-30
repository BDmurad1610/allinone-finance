import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function PercentageCalculator() {
  const seo = seoData.percentage;
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [percent, setPercent] = useState("");
  
  const [results, setResults] = useState({
    whatIs: 0,
    isWhatPercent: 0,
    percentChange: 0,
  });

  const calculateAll = () => {
    const v1 = parseFloat(value1);
    const v2 = parseFloat(value2);
    const p = parseFloat(percent);
    
    const whatIs = (p && v1) ? (p / 100) * v1 : 0;
    const isWhatPercent = (v1 && v2) ? (v1 / v2) * 100 : 0;
    const percentChange = (v1 && v2) ? ((v2 - v1) / v1) * 100 : 0;
    
    setResults({
      whatIs: Math.round(whatIs * 100) / 100,
      isWhatPercent: Math.round(isWhatPercent * 100) / 100,
      percentChange: Math.round(percentChange * 100) / 100,
    });
  };

  return (
    <CalculatorLayout 
      title="Percentage Calculator" 
      description="Calculate percentages, percentage changes, and more"
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
      />
      <div className="space-y-6">
        {/* What is X% of Y */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What is X% of Y?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Percentage (%)</Label>
                  <Input
                    type="number"
                    value={percent}
                    onChange={(e) => setPercent(e.target.value)}
                    placeholder="e.g., 20"
                  />
                </div>
                <div>
                  <Label>Value</Label>
                  <Input
                    type="number"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    placeholder="e.g., 500"
                  />
                </div>
              </div>
              <Button onClick={calculateAll} className="w-full">Calculate</Button>
              {results.whatIs > 0 && (
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-sm text-muted-foreground mb-1">{percent}% of {value1} is</p>
                  <p className="text-3xl font-bold text-primary">{results.whatIs}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* X is what % of Y */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">X is what % of Y?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Value 1 (X)</Label>
                  <Input
                    type="number"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    placeholder="e.g., 75"
                  />
                </div>
                <div>
                  <Label>Value 2 (Y)</Label>
                  <Input
                    type="number"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    placeholder="e.g., 500"
                  />
                </div>
              </div>
              <Button onClick={calculateAll} className="w-full">Calculate</Button>
              {results.isWhatPercent > 0 && (
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-sm text-muted-foreground mb-1">{value1} is</p>
                  <p className="text-3xl font-bold text-primary">{results.isWhatPercent}%</p>
                  <p className="text-sm text-muted-foreground mt-1">of {value2}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Percentage Change */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Percentage Change from X to Y</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Original Value</Label>
                  <Input
                    type="number"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    placeholder="e.g., 100"
                  />
                </div>
                <div>
                  <Label>New Value</Label>
                  <Input
                    type="number"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    placeholder="e.g., 150"
                  />
                </div>
              </div>
              <Button onClick={calculateAll} className="w-full">Calculate</Button>
              {value1 && value2 && (
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-sm text-muted-foreground mb-1">Percentage Change</p>
                  <p className={`text-3xl font-bold ${results.percentChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.percentChange >= 0 ? '+' : ''}{results.percentChange}%
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {results.percentChange >= 0 ? 'Increase' : 'Decrease'}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </CalculatorLayout>
  );
}
