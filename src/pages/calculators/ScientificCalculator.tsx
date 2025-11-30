import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function ScientificCalculator() {
  const seo = seoData.scientific;
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

  const handleFunction = (func: string) => {
    try {
      const value = parseFloat(display);
      let result: number;
      
      switch(func) {
        case 'sin':
          result = Math.sin(value * Math.PI / 180);
          break;
        case 'cos':
          result = Math.cos(value * Math.PI / 180);
          break;
        case 'tan':
          result = Math.tan(value * Math.PI / 180);
          break;
        case 'log':
          result = Math.log10(value);
          break;
        case 'ln':
          result = Math.log(value);
          break;
        case 'sqrt':
          result = Math.sqrt(value);
          break;
        case 'square':
          result = value * value;
          break;
        case 'inv':
          result = 1 / value;
          break;
        case 'pi':
          result = Math.PI;
          break;
        case 'e':
          result = Math.E;
          break;
        default:
          return;
      }
      
      setDisplay(String(result));
      setWaitingForOperand(true);
    } catch {
      setDisplay("Error");
    }
  };

  const btnClass = "h-14 text-lg font-medium transition-all hover:scale-105";
  const operatorClass = "h-14 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105";
  const functionClass = "h-14 text-sm font-medium bg-secondary hover:bg-secondary/80 transition-all hover:scale-105";

  return (
    <CalculatorLayout 
      title="Scientific Calculator" 
      description="Advanced calculator with scientific functions"
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
              <p className="text-3xl font-mono break-all">{display}</p>
              {operation && previousValue !== null && (
                <p className="text-sm text-muted-foreground mt-2">
                  {previousValue} {operation}
                </p>
              )}
            </div>

            {/* Scientific Functions */}
            <div className="grid grid-cols-4 gap-2">
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('sin')}>sin</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('cos')}>cos</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('tan')}>tan</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('sqrt')}>√</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('log')}>log</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('ln')}>ln</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('square')}>x²</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('inv')}>1/x</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('pi')}>π</Button>
              <Button variant="secondary" className={functionClass} onClick={() => handleFunction('e')}>e</Button>
              <Button variant="outline" className={btnClass} onClick={handleBackspace}>⌫</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleDecimal()}>.</Button>
            </div>

            {/* Main Buttons */}
            <div className="grid grid-cols-4 gap-2">
              <Button variant="outline" className={btnClass} onClick={handleClear}>C</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('(')}>(</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber(')')}>)</Button>
              <Button className={operatorClass} onClick={() => handleOperator('÷')}>÷</Button>

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

              <Button variant="outline" className={`${btnClass} col-span-3`} onClick={() => handleNumber('0')}>0</Button>
              <Button className={operatorClass} onClick={handleEquals}>=</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}
