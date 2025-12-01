import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function BMRCalculator() {
  const seo = seoData.bmr;
  const [system, setSystem] = useState<"metric" | "imperial">("metric");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const activity = parseFloat(activityLevel);
    
    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) return;
    
    let weightKg = w;
    let heightCm = h;
    
    if (system === "imperial") {
      weightKg = w * 0.453592;
      heightCm = h * 2.54;
    }
    
    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a - 161;
    }
    
    const tdee = bmr * activity;
    
    setResult({ 
      bmr: Math.round(bmr), 
      tdee: Math.round(tdee)
    });
  };

  const activityLevels = [
    { value: "1.2", label: "Sedentary", desc: "Little or no exercise" },
    { value: "1.375", label: "Lightly Active", desc: "Exercise 1-3 days/week" },
    { value: "1.55", label: "Moderately Active", desc: "Exercise 3-5 days/week" },
    { value: "1.725", label: "Very Active", desc: "Exercise 6-7 days/week" },
    { value: "1.9", label: "Extra Active", desc: "Very intense exercise daily" },
  ];

  return (
    <CalculatorLayout 
      title="BMR Calculator" 
      description="Calculate your Basal Metabolic Rate and daily calorie needs"
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
          <CardTitle>Calculate Your BMR</CardTitle>
          <CardDescription>Your BMR is the number of calories your body burns at rest</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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

          <div>
            <Label>Gender</Label>
            <RadioGroup value={gender} onValueChange={(v: "male" | "female") => setGender(v)} className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label>Age (years)</Label>
              <Input
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
              />
            </div>
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

          <div>
            <Label>Activity Level</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {activityLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label} - {level.desc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateBMR} className="w-full">
            Calculate BMR
          </Button>

          {result && (
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center pb-4 border-b">
                    <p className="text-sm text-muted-foreground mb-2">Basal Metabolic Rate (BMR)</p>
                    <p className="text-4xl font-bold text-primary">{result.bmr}</p>
                    <p className="text-sm text-muted-foreground mt-1">calories/day</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Total Daily Energy Expenditure (TDEE)</p>
                    <p className="text-3xl font-bold">{result.tdee}</p>
                    <p className="text-sm text-muted-foreground mt-1">calories/day</p>
                  </div>

                  <div className="mt-6 pt-4 border-t text-sm space-y-2">
                    <p className="font-semibold mb-2">What does this mean?</p>
                    <p className="text-muted-foreground">
                      <strong>BMR</strong> is the minimum calories your body needs at rest.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>TDEE</strong> is your total daily calorie needs including activity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.bmr} />
    </CalculatorLayout>
  );
}
