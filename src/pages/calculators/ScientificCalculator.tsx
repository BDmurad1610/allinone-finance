import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === "0" ? num : prev + num);
  };

  const handleOperator = (op: string) => {
    setDisplay(prev => prev + " " + op + " ");
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleEquals = () => {
    try {
      const result = eval(display.replace('×', '*').replace('÷', '/'));
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
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
        default:
          return;
      }
      
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const btnClass = "h-14 text-lg font-medium";
  const operatorClass = "h-14 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90";
  const functionClass = "h-14 text-sm font-medium bg-secondary hover:bg-secondary/80";

  return (
    <CalculatorLayout 
      title="Scientific Calculator" 
      description="Advanced calculator with scientific functions"
    >
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {/* Display */}
            <div className="bg-muted p-4 rounded-lg text-right">
              <p className="text-3xl font-mono break-all">{display}</p>
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
            </div>

            {/* Main Buttons */}
            <div className="grid grid-cols-4 gap-2">
              <Button variant="outline" className={btnClass} onClick={handleClear}>C</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleOperator('(')}>(</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleOperator(')')}>)</Button>
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

              <Button variant="outline" className={`${btnClass} col-span-2`} onClick={() => handleNumber('0')}>0</Button>
              <Button variant="outline" className={btnClass} onClick={() => handleNumber('.')}>.</Button>
              <Button className={`${operatorClass} bg-accent hover:bg-accent/90`} onClick={handleEquals}>=</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}
