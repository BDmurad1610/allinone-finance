import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function BasicCalculator() {
  const seo = seoData.calculator;
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (nextOp: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = performOperation(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperation(nextOp);
  };

  const performOperation = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "×":
        return prev * current;
      case "÷":
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = performOperation(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handleBackspace = () => {
    if (!waitingForOperand) {
      setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    }
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    
    if (previousValue !== null && operation) {
      // Calculate percentage of previous value
      const percentValue = (previousValue * currentValue) / 100;
      setDisplay(String(percentValue));
    } else {
      // Convert current value to percentage (divide by 100)
      setDisplay(String(currentValue / 100));
    }
  };

  const btnClass = "h-16 text-lg font-semibold transition-all hover:scale-105";
  const operatorClass = "h-16 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105";

  return (
    <CalculatorLayout 
      title="Basic Calculator" 
      description="Simple calculator for everyday calculations"
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
          <div className="space-y-4">
            {/* Display */}
            <div className="bg-muted p-6 rounded-lg text-right">
              <p className="text-4xl font-mono break-all">{display}</p>
              {operation && previousValue !== null && (
                <p className="text-sm text-muted-foreground mt-2">
                  {previousValue} {operation}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-4 gap-3">
              <Button variant="outline" className={btnClass} onClick={handleClear}>C</Button>
              <Button variant="outline" className={btnClass} onClick={handleBackspace}>⌫</Button>
              <Button variant="outline" className={btnClass} onClick={handlePercentage}>%</Button>
              <Button className={operatorClass} onClick={() => handleOperator("÷")}>÷</Button>

              <Button variant="outline" className={btnClass} onClick={() => handleNumber('7')}>7</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('8')}>8</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('9')}>9</Button>
              <Button className={operatorClass} onClick={() => handleOperator('×')}>×</Button>

              <Button variant="outline" className={btnClass} onClick={() => handleNumber('4')}>4</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('5')}>5</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('6')}>6</Button>
              <Button className={operatorClass} onClick={() => handleOperator('-')}>-</Button>

              <Button variant="outline" className={btnClass} onClick={() => handleNumber('1')}>1</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('2')}>2</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('3')}>3</Button>
              <Button className={operatorClass} onClick={() => handleOperator('+')}>+</Button>

              <Button variant="outline" className={`${btnClass} col-span-2`} onClick={() => handleNumber('0')}>0</Button>
              <Button variant="outline" className={btnClass} onClick={handleDecimal}>.</Button>
              <Button className={operatorClass} onClick={handleEquals}>=</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}
