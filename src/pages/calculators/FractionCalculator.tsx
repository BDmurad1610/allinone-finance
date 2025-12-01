import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Minus, X, Divide } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function FractionCalculator() {
  const seo = seoData.fraction;
  const [num1, setNum1] = useState("");
  const [den1, setDen1] = useState("");
  const [num2, setNum2] = useState("");
  const [den2, setDen2] = useState("");
  const [operation, setOperation] = useState<"add" | "subtract" | "multiply" | "divide">("add");
  const [result, setResult] = useState<{ numerator: number; denominator: number; decimal: number } | null>(null);

  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const simplifyFraction = (numerator: number, denominator: number) => {
    const divisor = gcd(numerator, denominator);
    return {
      numerator: numerator / divisor,
      denominator: denominator / divisor,
    };
  };

  const calculate = () => {
    const n1 = parseInt(num1);
    const d1 = parseInt(den1);
    const n2 = parseInt(num2);
    const d2 = parseInt(den2);

    if (!n1 || !d1 || !n2 || !d2 || d1 === 0 || d2 === 0) return;

    let resultNum = 0;
    let resultDen = 0;

    switch (operation) {
      case "add":
        resultNum = n1 * d2 + n2 * d1;
        resultDen = d1 * d2;
        break;
      case "subtract":
        resultNum = n1 * d2 - n2 * d1;
        resultDen = d1 * d2;
        break;
      case "multiply":
        resultNum = n1 * n2;
        resultDen = d1 * d2;
        break;
      case "divide":
        if (n2 === 0) return;
        resultNum = n1 * d2;
        resultDen = d1 * n2;
        break;
    }

    // Handle negative denominators
    if (resultDen < 0) {
      resultNum = -resultNum;
      resultDen = -resultDen;
    }

    const simplified = simplifyFraction(resultNum, resultDen);
    const decimal = simplified.numerator / simplified.denominator;

    setResult({
      numerator: simplified.numerator,
      denominator: simplified.denominator,
      decimal: decimal,
    });
  };

  const operationIcons = {
    add: <Plus className="w-4 h-4" />,
    subtract: <Minus className="w-4 h-4" />,
    multiply: <X className="w-4 h-4" />,
    divide: <Divide className="w-4 h-4" />,
  };

  const operationLabels = {
    add: "Add (+)",
    subtract: "Subtract (−)",
    multiply: "Multiply (×)",
    divide: "Divide (÷)",
  };

  return (
    <CalculatorLayout 
      title="Fraction Calculator" 
      description="Perform operations with fractions"
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
          { name: "Fraction Calculator", url: "/fraction-calculator" }
        ]}
        faqItems={calculatorContent.fraction.faq}
      />
      <Card>
        <CardHeader>
          <CardTitle>Calculate with Fractions</CardTitle>
          <CardDescription>Add, subtract, multiply, or divide fractions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* First Fraction */}
          <div>
            <Label className="mb-2 block">First Fraction</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Numerator"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="text-center"
              />
              <span className="text-2xl text-muted-foreground">/</span>
              <Input
                type="number"
                placeholder="Denominator"
                value={den1}
                onChange={(e) => setDen1(e.target.value)}
                className="text-center"
              />
            </div>
          </div>

          {/* Operation */}
          <div>
            <Label>Operation</Label>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {(["add", "subtract", "multiply", "divide"] as const).map((op) => (
                <Button
                  key={op}
                  variant={operation === op ? "default" : "outline"}
                  onClick={() => setOperation(op)}
                  className="w-full"
                >
                  {operationIcons[op]}
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {operationLabels[operation]}
            </p>
          </div>

          {/* Second Fraction */}
          <div>
            <Label className="mb-2 block">Second Fraction</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Numerator"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="text-center"
              />
              <span className="text-2xl text-muted-foreground">/</span>
              <Input
                type="number"
                placeholder="Denominator"
                value={den2}
                onChange={(e) => setDen2(e.target.value)}
                className="text-center"
              />
            </div>
          </div>

          <Button onClick={calculate} className="w-full">
            Calculate
          </Button>

          {result && (
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Result (Simplified)</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold">{result.numerator}</span>
                      <span className="text-3xl text-muted-foreground">/</span>
                      <span className="text-4xl font-bold">{result.denominator}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Decimal Form</p>
                    <p className="text-2xl font-semibold">{result.decimal.toFixed(6)}</p>
                  </div>

                  {result.numerator > result.denominator && result.denominator !== 1 && (
                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-2">Mixed Number</p>
                      <p className="text-xl font-semibold">
                        {Math.floor(result.numerator / result.denominator)}{" "}
                        <span className="text-base">
                          {result.numerator % result.denominator}/{result.denominator}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
      <CalculatorContent content={calculatorContent.fraction} />
    </CalculatorLayout>
  );
}
