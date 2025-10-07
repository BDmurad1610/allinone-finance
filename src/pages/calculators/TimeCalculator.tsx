import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Minus } from "lucide-react";

export default function TimeCalculator() {
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  
  // First time
  const [hours1, setHours1] = useState<string>("0");
  const [minutes1, setMinutes1] = useState<string>("0");
  const [seconds1, setSeconds1] = useState<string>("0");
  
  // Second time
  const [hours2, setHours2] = useState<string>("0");
  const [minutes2, setMinutes2] = useState<string>("0");
  const [seconds2, setSeconds2] = useState<string>("0");

  const [result, setResult] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
  } | null>(null);

  const calculateTime = () => {
    const h1 = parseInt(hours1) || 0;
    const m1 = parseInt(minutes1) || 0;
    const s1 = parseInt(seconds1) || 0;
    
    const h2 = parseInt(hours2) || 0;
    const m2 = parseInt(minutes2) || 0;
    const s2 = parseInt(seconds2) || 0;

    // Convert to total seconds
    const totalSeconds1 = h1 * 3600 + m1 * 60 + s1;
    const totalSeconds2 = h2 * 3600 + m2 * 60 + s2;

    // Perform operation
    let totalSeconds = operation === "add" 
      ? totalSeconds1 + totalSeconds2 
      : totalSeconds1 - totalSeconds2;

    // Handle negative results
    const isNegative = totalSeconds < 0;
    totalSeconds = Math.abs(totalSeconds);

    // Convert back to hours, minutes, seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setResult({
      hours: isNegative ? -hours : hours,
      minutes,
      seconds,
      totalSeconds: isNegative ? -totalSeconds : totalSeconds,
    });
  };

  return (
    <CalculatorLayout
      title="Time Calculator"
      description="Add and subtract time durations"
    >
      <Card>
        <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Operation</Label>
            <RadioGroup value={operation} onValueChange={(v) => setOperation(v as "add" | "subtract")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="add" id="add" />
                <Label htmlFor="add" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" /> Add Time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="subtract" id="subtract" />
                <Label htmlFor="subtract" className="flex items-center gap-2">
                  <Minus className="h-4 w-4" /> Subtract Time
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">First Time</Label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Input
                    type="number"
                    value={hours1}
                    onChange={(e) => setHours1(e.target.value)}
                    placeholder="Hours"
                    min="0"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-center">Hours</p>
                </div>
                <div>
                  <Input
                    type="number"
                    value={minutes1}
                    onChange={(e) => setMinutes1(e.target.value)}
                    placeholder="Minutes"
                    min="0"
                    max="59"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-center">Minutes</p>
                </div>
                <div>
                  <Input
                    type="number"
                    value={seconds1}
                    onChange={(e) => setSeconds1(e.target.value)}
                    placeholder="Seconds"
                    min="0"
                    max="59"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-center">Seconds</p>
                </div>
              </div>
            </div>

            <div className="text-center text-2xl font-bold">
              {operation === "add" ? "+" : "-"}
            </div>

            <div>
              <Label className="mb-2 block">Second Time</Label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Input
                    type="number"
                    value={hours2}
                    onChange={(e) => setHours2(e.target.value)}
                    placeholder="Hours"
                    min="0"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-center">Hours</p>
                </div>
                <div>
                  <Input
                    type="number"
                    value={minutes2}
                    onChange={(e) => setMinutes2(e.target.value)}
                    placeholder="Minutes"
                    min="0"
                    max="59"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-center">Minutes</p>
                </div>
                <div>
                  <Input
                    type="number"
                    value={seconds2}
                    onChange={(e) => setSeconds2(e.target.value)}
                    placeholder="Seconds"
                    min="0"
                    max="59"
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-center">Seconds</p>
                </div>
              </div>
            </div>
          </div>

          <Button onClick={calculateTime} className="w-full">
            Calculate
          </Button>

          {result && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3 text-center">Result</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-3xl font-bold">{Math.abs(result.hours)}</p>
                    <p className="text-xs text-muted-foreground">Hours</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{result.minutes}</p>
                    <p className="text-xs text-muted-foreground">Minutes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{result.seconds}</p>
                    <p className="text-xs text-muted-foreground">Seconds</p>
                  </div>
                </div>
                {result.totalSeconds < 0 && (
                  <p className="text-sm text-center mt-2 text-red-600">
                    (Negative result)
                  </p>
                )}
              </div>

              <div className="p-3 rounded bg-muted/50">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Seconds</span>
                  <span className="font-medium">{result.totalSeconds.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
        </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
}
