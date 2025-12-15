import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import { Tag, Percent, DollarSign, ShoppingCart } from "lucide-react";

export default function DiscountCalculator() {
  const seo = seoData.discount;
  
  // Calculate discount amount and final price
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [discountResult, setDiscountResult] = useState<{
    discountAmount: number;
    finalPrice: number;
  } | null>(null);

  // Calculate what percentage off
  const [originalPrice2, setOriginalPrice2] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [percentOffResult, setPercentOffResult] = useState<number | null>(null);

  // Calculate original price from sale price
  const [salePrice2, setSalePrice2] = useState("");
  const [discountPercent2, setDiscountPercent2] = useState("");
  const [originalPriceResult, setOriginalPriceResult] = useState<number | null>(null);

  // Double discount calculator
  const [originalPrice3, setOriginalPrice3] = useState("");
  const [firstDiscount, setFirstDiscount] = useState("");
  const [secondDiscount, setSecondDiscount] = useState("");
  const [doubleDiscountResult, setDoubleDiscountResult] = useState<{
    afterFirst: number;
    afterSecond: number;
    totalSaved: number;
    effectiveDiscount: number;
  } | null>(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);
    
    if (price > 0 && discount >= 0 && discount <= 100) {
      const discountAmount = (price * discount) / 100;
      const finalPrice = price - discountAmount;
      setDiscountResult({
        discountAmount: Math.round(discountAmount * 100) / 100,
        finalPrice: Math.round(finalPrice * 100) / 100,
      });
    }
  };

  const calculatePercentOff = () => {
    const original = parseFloat(originalPrice2);
    const sale = parseFloat(salePrice);
    
    if (original > 0 && sale >= 0 && sale <= original) {
      const percentOff = ((original - sale) / original) * 100;
      setPercentOffResult(Math.round(percentOff * 100) / 100);
    }
  };

  const calculateOriginalPrice = () => {
    const sale = parseFloat(salePrice2);
    const discount = parseFloat(discountPercent2);
    
    if (sale > 0 && discount >= 0 && discount < 100) {
      const original = sale / (1 - discount / 100);
      setOriginalPriceResult(Math.round(original * 100) / 100);
    }
  };

  const calculateDoubleDiscount = () => {
    const price = parseFloat(originalPrice3);
    const first = parseFloat(firstDiscount);
    const second = parseFloat(secondDiscount);
    
    if (price > 0 && first >= 0 && first <= 100 && second >= 0 && second <= 100) {
      const afterFirst = price * (1 - first / 100);
      const afterSecond = afterFirst * (1 - second / 100);
      const totalSaved = price - afterSecond;
      const effectiveDiscount = (totalSaved / price) * 100;
      
      setDoubleDiscountResult({
        afterFirst: Math.round(afterFirst * 100) / 100,
        afterSecond: Math.round(afterSecond * 100) / 100,
        totalSaved: Math.round(totalSaved * 100) / 100,
        effectiveDiscount: Math.round(effectiveDiscount * 100) / 100,
      });
    }
  };

  return (
    <CalculatorLayout 
      title="Discount Calculator" 
      description="Calculate discounts, sale prices, and savings instantly"
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Finance Calculators", url: "/#finance" },
          { name: "Discount Calculator", url: "/discount-calculator" }
        ]}
        faqItems={calculatorContent.discount?.faq || []}
      />
      
      <div className="space-y-6">
        {/* Calculate Discount Amount */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Tag className="h-5 w-5" />
              Calculate Discount & Final Price
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Original Price ($)</Label>
                  <Input
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="e.g., 100"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <Label>Discount (%)</Label>
                  <Input
                    type="number"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    placeholder="e.g., 25"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <Button onClick={calculateDiscount} className="w-full">Calculate</Button>
              
              {discountResult && (
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-destructive/10 text-center">
                    <p className="text-sm text-muted-foreground mb-1">You Save</p>
                    <p className="text-3xl font-bold text-destructive">
                      ${discountResult.discountAmount.toFixed(2)}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/10 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Final Price</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                      ${discountResult.finalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Calculate Percent Off */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Percent className="h-5 w-5" />
              What Percent Off?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Original Price ($)</Label>
                  <Input
                    type="number"
                    value={originalPrice2}
                    onChange={(e) => setOriginalPrice2(e.target.value)}
                    placeholder="e.g., 80"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <Label>Sale Price ($)</Label>
                  <Input
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    placeholder="e.g., 60"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
              <Button onClick={calculatePercentOff} className="w-full">Calculate</Button>
              
              {percentOffResult !== null && (
                <div className="p-4 rounded-lg bg-primary/10 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Discount Percentage</p>
                  <p className="text-4xl font-bold text-primary">
                    {percentOffResult}% OFF
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Calculate Original Price */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <DollarSign className="h-5 w-5" />
              Find Original Price
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Sale Price ($)</Label>
                  <Input
                    type="number"
                    value={salePrice2}
                    onChange={(e) => setSalePrice2(e.target.value)}
                    placeholder="e.g., 75"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <Label>Discount Applied (%)</Label>
                  <Input
                    type="number"
                    value={discountPercent2}
                    onChange={(e) => setDiscountPercent2(e.target.value)}
                    placeholder="e.g., 25"
                    min="0"
                    max="99.99"
                  />
                </div>
              </div>
              <Button onClick={calculateOriginalPrice} className="w-full">Calculate</Button>
              
              {originalPriceResult !== null && (
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-sm text-muted-foreground mb-1">Original Price Was</p>
                  <p className="text-4xl font-bold text-primary">
                    ${originalPriceResult.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Double Discount Calculator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShoppingCart className="h-5 w-5" />
              Double Discount (Stacking Discounts)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label>Original Price ($)</Label>
                  <Input
                    type="number"
                    value={originalPrice3}
                    onChange={(e) => setOriginalPrice3(e.target.value)}
                    placeholder="e.g., 200"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <Label>First Discount (%)</Label>
                  <Input
                    type="number"
                    value={firstDiscount}
                    onChange={(e) => setFirstDiscount(e.target.value)}
                    placeholder="e.g., 20"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <Label>Second Discount (%)</Label>
                  <Input
                    type="number"
                    value={secondDiscount}
                    onChange={(e) => setSecondDiscount(e.target.value)}
                    placeholder="e.g., 10"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <Button onClick={calculateDoubleDiscount} className="w-full">Calculate</Button>
              
              {doubleDiscountResult && (
                <div className="space-y-4 mt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted text-center">
                      <p className="text-sm text-muted-foreground mb-1">After First Discount</p>
                      <p className="text-2xl font-bold">${doubleDiscountResult.afterFirst.toFixed(2)}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/10 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Final Price</p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        ${doubleDiscountResult.afterSecond.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-destructive/10 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Total Savings</p>
                      <p className="text-2xl font-bold text-destructive">
                        ${doubleDiscountResult.totalSaved.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 text-center">
                      <p className="text-sm text-muted-foreground mb-1">Effective Discount</p>
                      <p className="text-2xl font-bold text-primary">
                        {doubleDiscountResult.effectiveDiscount}%
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Note: {firstDiscount}% + {secondDiscount}% ≠ {parseFloat(firstDiscount) + parseFloat(secondDiscount)}% because the second discount is applied to the already discounted price.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <CalculatorContent content={calculatorContent.discount} />
    </CalculatorLayout>
  );
}
