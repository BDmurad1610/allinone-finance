import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function IdealWeightCalculator() {
  const seo = seoData.idealWeight;
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState<string>("");
  const [unit, setUnit] = useState<"metric" | "imperial">("imperial");
  const [results, setResults] = useState<Record<string, number> | null>(null);

  const calculateIdealWeight = () => {
    const heightNum = parseFloat(height);
    if (isNaN(heightNum) || heightNum <= 0) return;

    const heightCm = unit === "metric" ? heightNum : heightNum * 2.54;
    const heightM = heightCm / 100;

    // Different formulas
    const robinson = gender === "male" 
      ? 52 + 1.9 * ((heightCm - 152.4) / 2.54)
      : 49 + 1.7 * ((heightCm - 152.4) / 2.54);

    const miller = gender === "male"
      ? 56.2 + 1.41 * ((heightCm - 152.4) / 2.54)
      : 53.1 + 1.36 * ((heightCm - 152.4) / 2.54);

    const hamwi = gender === "male"
      ? 48 + 2.7 * ((heightCm - 152.4) / 2.54)
      : 45.5 + 2.2 * ((heightCm - 152.4) / 2.54);

    const devine = gender === "male"
      ? 50 + 2.3 * ((heightCm - 152.4) / 2.54)
      : 45.5 + 2.3 * ((heightCm - 152.4) / 2.54);

    // Healthy BMI range (18.5 - 24.9)
    const minHealthy = 18.5 * heightM * heightM;
    const maxHealthy = 24.9 * heightM * heightM;

    setResults({
      robinson: unit === "metric" ? robinson : robinson * 2.205,
      miller: unit === "metric" ? miller : miller * 2.205,
      hamwi: unit === "metric" ? hamwi : hamwi * 2.205,
      devine: unit === "metric" ? devine : devine * 2.205,
      minHealthy: unit === "metric" ? minHealthy : minHealthy * 2.205,
      maxHealthy: unit === "metric" ? maxHealthy : maxHealthy * 2.205,
    });
  };

  return (
    <CalculatorLayout
      title="Ideal Weight Calculator"
      description="Calculate your ideal body weight using multiple formulas"
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
          <Tabs value={unit} onValueChange={(v) => setUnit(v as "metric" | "imperial")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="imperial">Imperial</TabsTrigger>
              <TabsTrigger value="metric">Metric</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup value={gender} onValueChange={(v) => setGender(v as "male" | "female")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === "metric" ? "cm" : "inches"}
              step="0.1"
            />
          </div>

          <Button onClick={calculateIdealWeight} className="w-full">
            Calculate Ideal Weight
          </Button>

          {results && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Healthy BMI Range</h3>
                <p className="text-sm text-muted-foreground">
                  {results.minHealthy.toFixed(1)} - {results.maxHealthy.toFixed(1)} {unit === "metric" ? "kg" : "lbs"}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Based on Different Formulas</h3>
                <div className="grid gap-2">
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm">Robinson Formula</span>
                    <span className="font-medium">{results.robinson.toFixed(1)} {unit === "metric" ? "kg" : "lbs"}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm">Miller Formula</span>
                    <span className="font-medium">{results.miller.toFixed(1)} {unit === "metric" ? "kg" : "lbs"}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm">Hamwi Formula</span>
                    <span className="font-medium">{results.hamwi.toFixed(1)} {unit === "metric" ? "kg" : "lbs"}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-muted/50">
                    <span className="text-sm">Devine Formula</span>
                    <span className="font-medium">{results.devine.toFixed(1)} {unit === "metric" ? "kg" : "lbs"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.idealWeight} />
    </CalculatorLayout>
  );
}
