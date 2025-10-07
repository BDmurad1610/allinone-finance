import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [neck, setNeck] = useState<string>("");
  const [waist, setWaist] = useState<string>("");
  const [hip, setHip] = useState<string>("");
  const [unit, setUnit] = useState<"metric" | "imperial">("imperial");
  const [result, setResult] = useState<number | null>(null);

  const calculateBodyFat = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const neckNum = parseFloat(neck);
    const waistNum = parseFloat(waist);
    const hipNum = parseFloat(hip);

    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(neckNum) || isNaN(waistNum)) return;
    if (gender === "female" && isNaN(hipNum)) return;

    let heightCm = unit === "metric" ? heightNum : heightNum * 2.54;
    let neckCm = unit === "metric" ? neckNum : neckNum * 2.54;
    let waistCm = unit === "metric" ? waistNum : waistNum * 2.54;
    let hipCm = unit === "metric" ? hipNum : hipNum * 2.54;

    // US Navy method
    let bodyFat: number;
    if (gender === "male") {
      bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450;
    } else {
      bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450;
    }

    setResult(Math.max(0, Math.min(100, bodyFat)));
  };

  const getCategory = (bf: number) => {
    if (gender === "male") {
      if (bf < 6) return "Essential Fat";
      if (bf < 14) return "Athletes";
      if (bf < 18) return "Fitness";
      if (bf < 25) return "Average";
      return "Obese";
    } else {
      if (bf < 14) return "Essential Fat";
      if (bf < 21) return "Athletes";
      if (bf < 25) return "Fitness";
      if (bf < 32) return "Average";
      return "Obese";
    }
  };

  return (
    <CalculatorLayout
      title="Body Fat Calculator"
      description="Estimate your body fat percentage using US Navy method"
    >
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Years"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === "metric" ? "kg" : "lbs"}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === "metric" ? "cm" : "inches"}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="neck">Neck</Label>
              <Input
                id="neck"
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                placeholder={unit === "metric" ? "cm" : "inches"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="waist">Waist</Label>
              <Input
                id="waist"
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                placeholder={unit === "metric" ? "cm" : "inches"}
              />
            </div>
          </div>

          {gender === "female" && (
            <div className="space-y-2">
              <Label htmlFor="hip">Hip</Label>
              <Input
                id="hip"
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                placeholder={unit === "metric" ? "cm" : "inches"}
              />
            </div>
          )}

          <Button onClick={calculateBodyFat} className="w-full">
            Calculate Body Fat
          </Button>

          {result !== null && (
            <div className="p-4 rounded-lg bg-muted space-y-2">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Body Fat Percentage</p>
                <p className="text-4xl font-bold">{result.toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Category: <span className="font-semibold">{getCategory(result)}</span>
                </p>
              </div>
            </div>
          )}
        </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}
