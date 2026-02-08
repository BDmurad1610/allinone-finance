import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import { Ruler, Scale, Thermometer, ArrowRightLeft } from "lucide-react";

// Conversion factors to base unit
const lengthUnits: Record<string, { name: string; toBase: number }> = {
  meter: { name: "Meters (m)", toBase: 1 },
  kilometer: { name: "Kilometers (km)", toBase: 1000 },
  centimeter: { name: "Centimeters (cm)", toBase: 0.01 },
  millimeter: { name: "Millimeters (mm)", toBase: 0.001 },
  mile: { name: "Miles (mi)", toBase: 1609.344 },
  yard: { name: "Yards (yd)", toBase: 0.9144 },
  foot: { name: "Feet (ft)", toBase: 0.3048 },
  inch: { name: "Inches (in)", toBase: 0.0254 },
};

const weightUnits: Record<string, { name: string; toBase: number }> = {
  kilogram: { name: "Kilograms (kg)", toBase: 1 },
  gram: { name: "Grams (g)", toBase: 0.001 },
  milligram: { name: "Milligrams (mg)", toBase: 0.000001 },
  pound: { name: "Pounds (lb)", toBase: 0.453592 },
  ounce: { name: "Ounces (oz)", toBase: 0.0283495 },
  ton: { name: "Metric Tons (t)", toBase: 1000 },
  stone: { name: "Stones (st)", toBase: 6.35029 },
};

const temperatureUnits = ["celsius", "fahrenheit", "kelvin"];

export default function UnitConverter() {
  const seo = seoData.unitConverter;
  
  // Length converter
  const [lengthValue, setLengthValue] = useState("");
  const [lengthFrom, setLengthFrom] = useState("meter");
  const [lengthTo, setLengthTo] = useState("foot");
  const [lengthResult, setLengthResult] = useState<number | null>(null);

  // Weight converter
  const [weightValue, setWeightValue] = useState("");
  const [weightFrom, setWeightFrom] = useState("kilogram");
  const [weightTo, setWeightTo] = useState("pound");
  const [weightResult, setWeightResult] = useState<number | null>(null);

  // Temperature converter
  const [tempValue, setTempValue] = useState("");
  const [tempFrom, setTempFrom] = useState("celsius");
  const [tempTo, setTempTo] = useState("fahrenheit");
  const [tempResult, setTempResult] = useState<number | null>(null);

  const convertLength = () => {
    const value = parseFloat(lengthValue);
    if (!isNaN(value)) {
      const baseValue = value * lengthUnits[lengthFrom].toBase;
      const result = baseValue / lengthUnits[lengthTo].toBase;
      setLengthResult(Math.round(result * 1000000) / 1000000);
    }
  };

  const convertWeight = () => {
    const value = parseFloat(weightValue);
    if (!isNaN(value)) {
      const baseValue = value * weightUnits[weightFrom].toBase;
      const result = baseValue / weightUnits[weightTo].toBase;
      setWeightResult(Math.round(result * 1000000) / 1000000);
    }
  };

  const convertTemperature = () => {
    const value = parseFloat(tempValue);
    if (!isNaN(value)) {
      let celsius: number;
      
      // Convert to Celsius first
      if (tempFrom === "celsius") {
        celsius = value;
      } else if (tempFrom === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
      } else {
        celsius = value - 273.15;
      }
      
      // Convert from Celsius to target
      let result: number;
      if (tempTo === "celsius") {
        result = celsius;
      } else if (tempTo === "fahrenheit") {
        result = (celsius * 9 / 5) + 32;
      } else {
        result = celsius + 273.15;
      }
      
      setTempResult(Math.round(result * 100) / 100);
    }
  };

  const swapLength = () => {
    setLengthFrom(lengthTo);
    setLengthTo(lengthFrom);
    setLengthResult(null);
  };

  const swapWeight = () => {
    setWeightFrom(weightTo);
    setWeightTo(weightFrom);
    setWeightResult(null);
  };

  const swapTemp = () => {
    setTempFrom(tempTo);
    setTempTo(tempFrom);
    setTempResult(null);
  };

  const formatNumber = (num: number) => {
    if (Math.abs(num) >= 1000000 || (Math.abs(num) < 0.0001 && num !== 0)) {
      return num.toExponential(4);
    }
    return num.toLocaleString(undefined, { maximumFractionDigits: 6 });
  };

  return (
    <CalculatorLayout 
      title="Unit Converter" 
      description="Convert length, weight, and temperature units instantly"
      introContent={{
        description: "Whether you're cooking with international recipes, planning travel abroad, or working on scientific projects, unit conversions are essential. Our comprehensive converter handles length (meters, feet, miles), weight (kilograms, pounds, ounces), and temperature (Celsius, Fahrenheit, Kelvin) with precise conversion factors. Includes quick-reference tables and conversion formulas for educational use.",
        benefits: [
          "Length, weight, temperature",
          "Precise conversion factors",
          "Quick reference tables",
          "Swap units easily"
        ],
        lastUpdated: "2026-02-05"
      }}
      breadcrumbItems={[
        { name: "Home", url: "/" },
        { name: "Math Calculators", url: "/#math" },
        { name: "Unit Converter", url: "/unit-converter" }
      ]}
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Math Calculators", url: "/#math" },
          { name: "Unit Converter", url: "/unit-converter" }
        ]}
        faqItems={calculatorContent.unitConverter?.faq || []}
      />
      
      <Tabs defaultValue="length" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="length" className="flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            <span className="hidden sm:inline">Length</span>
          </TabsTrigger>
          <TabsTrigger value="weight" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            <span className="hidden sm:inline">Weight</span>
          </TabsTrigger>
          <TabsTrigger value="temperature" className="flex items-center gap-2">
            <Thermometer className="h-4 w-4" />
            <span className="hidden sm:inline">Temperature</span>
          </TabsTrigger>
        </TabsList>

        {/* Length Converter */}
        <TabsContent value="length">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ruler className="h-5 w-5" />
                Length Converter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label>Value</Label>
                    <Input
                      type="number"
                      value={lengthValue}
                      onChange={(e) => setLengthValue(e.target.value)}
                      placeholder="Enter value"
                    />
                  </div>
                  
                  <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
                    <div>
                      <Label>From</Label>
                      <Select value={lengthFrom} onValueChange={setLengthFrom}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(lengthUnits).map(([key, unit]) => (
                            <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button variant="ghost" size="icon" onClick={swapLength} className="mb-0.5">
                      <ArrowRightLeft className="h-4 w-4" />
                    </Button>
                    
                    <div>
                      <Label>To</Label>
                      <Select value={lengthTo} onValueChange={setLengthTo}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(lengthUnits).map(([key, unit]) => (
                            <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Button onClick={convertLength} className="w-full">Convert</Button>
                
                {lengthResult !== null && (
                  <div className="p-6 rounded-lg bg-muted text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {lengthValue} {lengthUnits[lengthFrom].name} =
                    </p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(lengthResult)}
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {lengthUnits[lengthTo].name}
                    </p>
                  </div>
                )}

                {/* Quick Reference */}
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-medium mb-3">Quick Reference</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>1 inch = 2.54 cm</div>
                    <div>1 foot = 30.48 cm</div>
                    <div>1 meter = 3.281 feet</div>
                    <div>1 mile = 1.609 km</div>
                    <div>1 yard = 0.914 meters</div>
                    <div>1 km = 0.621 miles</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Weight Converter */}
        <TabsContent value="weight">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Weight Converter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label>Value</Label>
                    <Input
                      type="number"
                      value={weightValue}
                      onChange={(e) => setWeightValue(e.target.value)}
                      placeholder="Enter value"
                    />
                  </div>
                  
                  <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
                    <div>
                      <Label>From</Label>
                      <Select value={weightFrom} onValueChange={setWeightFrom}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(weightUnits).map(([key, unit]) => (
                            <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button variant="ghost" size="icon" onClick={swapWeight} className="mb-0.5">
                      <ArrowRightLeft className="h-4 w-4" />
                    </Button>
                    
                    <div>
                      <Label>To</Label>
                      <Select value={weightTo} onValueChange={setWeightTo}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(weightUnits).map(([key, unit]) => (
                            <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Button onClick={convertWeight} className="w-full">Convert</Button>
                
                {weightResult !== null && (
                  <div className="p-6 rounded-lg bg-muted text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {weightValue} {weightUnits[weightFrom].name} =
                    </p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(weightResult)}
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {weightUnits[weightTo].name}
                    </p>
                  </div>
                )}

                {/* Quick Reference */}
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-medium mb-3">Quick Reference</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>1 kg = 2.205 lbs</div>
                    <div>1 lb = 453.6 grams</div>
                    <div>1 oz = 28.35 grams</div>
                    <div>1 stone = 14 lbs</div>
                    <div>1 ton = 1000 kg</div>
                    <div>1 lb = 16 oz</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Temperature Converter */}
        <TabsContent value="temperature">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                Temperature Converter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label>Value</Label>
                    <Input
                      type="number"
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      placeholder="Enter temperature"
                    />
                  </div>
                  
                  <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
                    <div>
                      <Label>From</Label>
                      <Select value={tempFrom} onValueChange={setTempFrom}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="celsius">Celsius (°C)</SelectItem>
                          <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                          <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button variant="ghost" size="icon" onClick={swapTemp} className="mb-0.5">
                      <ArrowRightLeft className="h-4 w-4" />
                    </Button>
                    
                    <div>
                      <Label>To</Label>
                      <Select value={tempTo} onValueChange={setTempTo}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="celsius">Celsius (°C)</SelectItem>
                          <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                          <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Button onClick={convertTemperature} className="w-full">Convert</Button>
                
                {tempResult !== null && (
                  <div className="p-6 rounded-lg bg-muted text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      {tempValue}° {tempFrom.charAt(0).toUpperCase() + tempFrom.slice(1)} =
                    </p>
                    <p className="text-4xl font-bold text-primary">
                      {tempResult}°
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {tempTo.charAt(0).toUpperCase() + tempTo.slice(1)}
                    </p>
                  </div>
                )}

                {/* Quick Reference */}
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-medium mb-3">Quick Reference</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="font-medium">Water Freezing</p>
                      <p>0°C = 32°F = 273.15K</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Water Boiling</p>
                      <p>100°C = 212°F = 373.15K</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Body Temperature</p>
                      <p>37°C = 98.6°F = 310.15K</p>
                    </div>
                  </div>
                </div>

                {/* Conversion Formulas */}
                <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-medium mb-3">Conversion Formulas</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <p>°F = (°C × 9/5) + 32</p>
                    <p>°C = (°F - 32) × 5/9</p>
                    <p>K = °C + 273.15</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <CalculatorContent content={calculatorContent.unitConverter} />
    </CalculatorLayout>
  );
}
