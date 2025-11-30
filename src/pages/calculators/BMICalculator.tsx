import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function BMICalculator() {
  const seo = seoData.bmi;
  const [system, setSystem] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    
    if (!w || !h || w <= 0 || h <= 0) return;
    
    let bmi: number;
    if (system === "metric") {
      bmi = w / ((h / 100) ** 2);
    } else {
      bmi = (w / (h ** 2)) * 703;
    }
    
    let category = "";
    let color = "";
    
    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-green-600";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-600";
    } else {
      category = "Obese";
      color = "text-red-600";
    }
    
    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, color });
  };

  return (
    <CalculatorLayout 
      title="BMI Calculator" 
      description="Calculate your Body Mass Index to assess if your weight is healthy"
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
            <div>
              <Label>Unit System</Label>
              <Select value={system} onValueChange={(v: "metric" | "imperial") => setSystem(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Imperial (lbs, inches)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Weight {system === "metric" ? "(kg)" : "(lbs)"}</Label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                />
              </div>
              <div>
                <Label>Height {system === "metric" ? "(cm)" : "(inches)"}</Label>
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height"
                />
              </div>
            </div>

            <Button onClick={calculateBMI} className="w-full">
              Calculate BMI
            </Button>

            {result && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your BMI is</p>
                  <p className="text-4xl font-bold mb-2">{result.bmi}</p>
                  <p className={`text-lg font-semibold ${result.color}`}>{result.category}</p>
                  
                  <div className="mt-6 pt-6 border-t text-left space-y-2 text-sm">
                    <p className="font-semibold mb-3">BMI Categories:</p>
                    <p><span className="text-blue-600">●</span> Underweight: BMI &lt; 18.5</p>
                    <p><span className="text-green-600">●</span> Normal: BMI 18.5 - 24.9</p>
                    <p><span className="text-yellow-600">●</span> Overweight: BMI 25 - 29.9</p>
                    <p><span className="text-red-600">●</span> Obese: BMI ≥ 30</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}
