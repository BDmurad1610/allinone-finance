import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function CalorieCalculator() {
  const seo = seoData.calorie;
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("sedentary");
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);

  const activityLevels = {
    sedentary: { label: "Sedentary (little or no exercise)", multiplier: 1.2 },
    light: { label: "Light (exercise 1-3 days/week)", multiplier: 1.375 },
    moderate: { label: "Moderate (exercise 3-5 days/week)", multiplier: 1.55 },
    active: { label: "Active (exercise 6-7 days/week)", multiplier: 1.725 },
    veryActive: { label: "Very Active (intense exercise daily)", multiplier: 1.9 },
  };

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) return;
    
    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }
    
    const multiplier = activityLevels[activity as keyof typeof activityLevels].multiplier;
    const tdee = bmr * multiplier;
    
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee) });
  };

  return (
    <CalculatorLayout 
      title="Calorie Calculator" 
      description="Calculate your daily calorie needs based on your goals"
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
              <Label className="mb-3 block">Gender</Label>
              <RadioGroup value={gender} onValueChange={setGender}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="font-normal">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="font-normal">Female</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label>Age (years)</Label>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                />
              </div>
              <div>
                <Label>Weight (kg)</Label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                />
              </div>
              <div>
                <Label>Height (cm)</Label>
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
              <Select value={activity} onValueChange={setActivity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(activityLevels).map(([key, { label }]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={calculate} className="w-full">
              Calculate Calories
            </Button>

            {result && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Basal Metabolic Rate (BMR)</p>
                      <p className="text-3xl font-bold">{result.bmr} <span className="text-lg">cal/day</span></p>
                      <p className="text-xs text-muted-foreground mt-1">Calories burned at rest</p>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">Daily Calorie Needs (TDEE)</p>
                      <p className="text-3xl font-bold text-primary">{result.tdee} <span className="text-lg">cal/day</span></p>
                      <p className="text-xs text-muted-foreground mt-1">Total daily energy expenditure</p>
                    </div>

                    <div className="pt-4 border-t space-y-2 text-sm">
                      <p className="font-semibold">Goals:</p>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-3 rounded-lg bg-background">
                          <p className="text-xs text-muted-foreground">Weight Loss</p>
                          <p className="font-bold">{result.tdee - 500}</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-background">
                          <p className="text-xs text-muted-foreground">Maintain</p>
                          <p className="font-bold">{result.tdee}</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-background">
                          <p className="text-xs text-muted-foreground">Weight Gain</p>
                          <p className="font-bold">{result.tdee + 500}</p>
                        </div>
                      </div>
                    </div>
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
