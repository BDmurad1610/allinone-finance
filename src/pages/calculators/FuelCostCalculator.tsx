import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CalculatorLayout from "@/components/CalculatorLayout";
import SEOHead from "@/components/SEOHead";
import CalculatorContent from "@/components/CalculatorContent";
import { seoData } from "@/lib/seoData";
import { calculatorContent } from "@/data/calculatorContent";
import { Fuel, Car, DollarSign, MapPin } from "lucide-react";

const FuelCostCalculator = () => {
  const [distance, setDistance] = useState<string>("");
  const [fuelEfficiency, setFuelEfficiency] = useState<string>("");
  const [fuelPrice, setFuelPrice] = useState<string>("");
  const [result, setResult] = useState<{
    fuelNeeded: number;
    totalCost: number;
    costPerMile: number;
  } | null>(null);

  const seo = seoData["fuel-cost"];
  const content = calculatorContent["fuel-cost"];

  const calculateFuelCost = () => {
    const dist = parseFloat(distance);
    const efficiency = parseFloat(fuelEfficiency);
    const price = parseFloat(fuelPrice);

    if (dist > 0 && efficiency > 0 && price > 0) {
      const fuelNeeded = dist / efficiency;
      const totalCost = fuelNeeded * price;
      const costPerMile = totalCost / dist;

      setResult({
        fuelNeeded: Math.round(fuelNeeded * 100) / 100,
        totalCost: Math.round(totalCost * 100) / 100,
        costPerMile: Math.round(costPerMile * 100) / 100
      });
    }
  };

  const clearInputs = () => {
    setDistance("");
    setFuelEfficiency("");
    setFuelPrice("");
    setResult(null);
  };

  return (
    <>
      <SEOHead {...seo} />
      <CalculatorLayout
        title="Fuel Cost Calculator"
        description="Calculate your trip fuel costs based on distance, fuel efficiency, and gas prices"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-primary" aria-hidden="true" />
                Trip Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="distance" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Distance (miles)
                </Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="Enter distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  min="0"
                  step="0.1"
                  aria-label="Distance in miles"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuelEfficiency" className="flex items-center gap-2">
                  <Car className="h-4 w-4" aria-hidden="true" />
                  Fuel Efficiency (MPG)
                </Label>
                <Input
                  id="fuelEfficiency"
                  type="number"
                  placeholder="Enter miles per gallon"
                  value={fuelEfficiency}
                  onChange={(e) => setFuelEfficiency(e.target.value)}
                  min="0"
                  step="0.1"
                  aria-label="Fuel efficiency in miles per gallon"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuelPrice" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" aria-hidden="true" />
                  Fuel Price ($/gallon)
                </Label>
                <Input
                  id="fuelPrice"
                  type="number"
                  placeholder="Enter price per gallon"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                  min="0"
                  step="0.01"
                  aria-label="Fuel price per gallon"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={calculateFuelCost} className="flex-1">
                  Calculate Cost
                </Button>
                <Button onClick={clearInputs} variant="outline">
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" aria-hidden="true" />
                Fuel Cost Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">Total Fuel Cost</p>
                    <p className="text-3xl font-bold text-primary">${result.totalCost.toFixed(2)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Fuel Needed</p>
                      <p className="text-xl font-semibold">{result.fuelNeeded} gal</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Cost Per Mile</p>
                      <p className="text-xl font-semibold">${result.costPerMile.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Fuel className="h-12 w-12 mx-auto mb-3 opacity-50" aria-hidden="true" />
                  <p>Enter trip details to calculate fuel costs</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {content && <CalculatorContent content={content} />}
      </CalculatorLayout>
    </>
  );
};

export default FuelCostCalculator;
