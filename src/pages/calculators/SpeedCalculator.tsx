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
import { Gauge, MapPin, Clock, Zap } from "lucide-react";

const distanceUnits: Record<string, { name: string; toMeters: number }> = {
  km: { name: "Kilometers (km)", toMeters: 1000 },
  miles: { name: "Miles (mi)", toMeters: 1609.344 },
  meters: { name: "Meters (m)", toMeters: 1 },
  feet: { name: "Feet (ft)", toMeters: 0.3048 },
  yards: { name: "Yards (yd)", toMeters: 0.9144 },
};

const speedUnits: Record<string, { name: string; toMps: number }> = {
  kmh: { name: "km/h", toMps: 1 / 3.6 },
  mph: { name: "mph", toMps: 0.44704 },
  mps: { name: "m/s", toMps: 1 },
  fps: { name: "ft/s", toMps: 0.3048 },
  knots: { name: "knots", toMps: 0.514444 },
};

const timeUnits: Record<string, { name: string; toSeconds: number }> = {
  hours: { name: "Hours", toSeconds: 3600 },
  minutes: { name: "Minutes", toSeconds: 60 },
  seconds: { name: "Seconds", toSeconds: 1 },
};

export default function SpeedCalculator() {
  const seo = seoData.speed;
  
  // Calculate Speed
  const [distance1, setDistance1] = useState("");
  const [distanceUnit1, setDistanceUnit1] = useState("km");
  const [time1, setTime1] = useState("");
  const [timeUnit1, setTimeUnit1] = useState("hours");
  const [speedUnit1, setSpeedUnit1] = useState("kmh");
  const [speedResult, setSpeedResult] = useState<number | null>(null);

  // Calculate Distance
  const [speed2, setSpeed2] = useState("");
  const [speedUnit2, setSpeedUnit2] = useState("kmh");
  const [time2, setTime2] = useState("");
  const [timeUnit2, setTimeUnit2] = useState("hours");
  const [distanceUnit2, setDistanceUnit2] = useState("km");
  const [distanceResult, setDistanceResult] = useState<number | null>(null);

  // Calculate Time
  const [distance3, setDistance3] = useState("");
  const [distanceUnit3, setDistanceUnit3] = useState("km");
  const [speed3, setSpeed3] = useState("");
  const [speedUnit3, setSpeedUnit3] = useState("kmh");
  const [timeResult, setTimeResult] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  const calculateSpeed = () => {
    const dist = parseFloat(distance1);
    const time = parseFloat(time1);
    
    if (dist > 0 && time > 0) {
      // Convert to meters and seconds
      const distInMeters = dist * distanceUnits[distanceUnit1].toMeters;
      const timeInSeconds = time * timeUnits[timeUnit1].toSeconds;
      
      // Calculate speed in m/s
      const speedInMps = distInMeters / timeInSeconds;
      
      // Convert to desired unit
      const result = speedInMps / speedUnits[speedUnit1].toMps;
      setSpeedResult(Math.round(result * 100) / 100);
    }
  };

  const calculateDistance = () => {
    const spd = parseFloat(speed2);
    const time = parseFloat(time2);
    
    if (spd > 0 && time > 0) {
      // Convert to m/s and seconds
      const speedInMps = spd * speedUnits[speedUnit2].toMps;
      const timeInSeconds = time * timeUnits[timeUnit2].toSeconds;
      
      // Calculate distance in meters
      const distInMeters = speedInMps * timeInSeconds;
      
      // Convert to desired unit
      const result = distInMeters / distanceUnits[distanceUnit2].toMeters;
      setDistanceResult(Math.round(result * 100) / 100);
    }
  };

  const calculateTime = () => {
    const dist = parseFloat(distance3);
    const spd = parseFloat(speed3);
    
    if (dist > 0 && spd > 0) {
      // Convert to meters and m/s
      const distInMeters = dist * distanceUnits[distanceUnit3].toMeters;
      const speedInMps = spd * speedUnits[speedUnit3].toMps;
      
      // Calculate time in seconds
      const timeInSeconds = distInMeters / speedInMps;
      
      // Convert to hours, minutes, seconds
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = Math.round(timeInSeconds % 60);
      
      setTimeResult({ hours, minutes, seconds });
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <CalculatorLayout 
      title="Speed Calculator" 
      description="Calculate speed, distance, and time instantly"
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
          { name: "Speed Calculator", url: "/speed-calculator" }
        ]}
        faqItems={calculatorContent.speed?.faq || []}
      />
      
      <Tabs defaultValue="speed" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="speed" className="flex items-center gap-2">
            <Gauge className="h-4 w-4" />
            <span className="hidden sm:inline">Speed</span>
          </TabsTrigger>
          <TabsTrigger value="distance" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Distance</span>
          </TabsTrigger>
          <TabsTrigger value="time" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Time</span>
          </TabsTrigger>
        </TabsList>

        {/* Calculate Speed */}
        <TabsContent value="speed">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5" />
                Calculate Speed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Speed = Distance ÷ Time
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Distance</Label>
                    <Input
                      type="number"
                      value={distance1}
                      onChange={(e) => setDistance1(e.target.value)}
                      placeholder="Enter distance"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Distance Unit</Label>
                    <Select value={distanceUnit1} onValueChange={setDistanceUnit1}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(distanceUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Time</Label>
                    <Input
                      type="number"
                      value={time1}
                      onChange={(e) => setTime1(e.target.value)}
                      placeholder="Enter time"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Time Unit</Label>
                    <Select value={timeUnit1} onValueChange={setTimeUnit1}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(timeUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Result Unit</Label>
                  <Select value={speedUnit1} onValueChange={setSpeedUnit1}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(speedUnits).map(([key, unit]) => (
                        <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateSpeed} className="w-full">Calculate Speed</Button>

                {speedResult !== null && (
                  <div className="p-6 rounded-lg bg-primary/10 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Speed</p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(speedResult)} {speedUnits[speedUnit1].name}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Calculate Distance */}
        <TabsContent value="distance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Calculate Distance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Distance = Speed × Time
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Speed</Label>
                    <Input
                      type="number"
                      value={speed2}
                      onChange={(e) => setSpeed2(e.target.value)}
                      placeholder="Enter speed"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Speed Unit</Label>
                    <Select value={speedUnit2} onValueChange={setSpeedUnit2}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(speedUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Time</Label>
                    <Input
                      type="number"
                      value={time2}
                      onChange={(e) => setTime2(e.target.value)}
                      placeholder="Enter time"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Time Unit</Label>
                    <Select value={timeUnit2} onValueChange={setTimeUnit2}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(timeUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Result Unit</Label>
                  <Select value={distanceUnit2} onValueChange={setDistanceUnit2}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(distanceUnits).map(([key, unit]) => (
                        <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateDistance} className="w-full">Calculate Distance</Button>

                {distanceResult !== null && (
                  <div className="p-6 rounded-lg bg-primary/10 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Distance</p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(distanceResult)} {distanceUnits[distanceUnit2].name}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Calculate Time */}
        <TabsContent value="time">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Calculate Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Time = Distance ÷ Speed
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Distance</Label>
                    <Input
                      type="number"
                      value={distance3}
                      onChange={(e) => setDistance3(e.target.value)}
                      placeholder="Enter distance"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Distance Unit</Label>
                    <Select value={distanceUnit3} onValueChange={setDistanceUnit3}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(distanceUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Speed</Label>
                    <Input
                      type="number"
                      value={speed3}
                      onChange={(e) => setSpeed3(e.target.value)}
                      placeholder="Enter speed"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Speed Unit</Label>
                    <Select value={speedUnit3} onValueChange={setSpeedUnit3}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(speedUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={calculateTime} className="w-full">Calculate Time</Button>

                {timeResult !== null && (
                  <div className="p-6 rounded-lg bg-primary/10 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Time Required</p>
                    <p className="text-4xl font-bold text-primary">
                      {timeResult.hours > 0 && `${timeResult.hours}h `}
                      {timeResult.minutes > 0 && `${timeResult.minutes}m `}
                      {timeResult.seconds}s
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      ({timeResult.hours} hours, {timeResult.minutes} minutes, {timeResult.seconds} seconds)
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Reference */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Speed Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Common Speeds</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Walking</span><span>5 km/h (3 mph)</span></div>
                <div className="flex justify-between"><span>Running</span><span>10-15 km/h (6-9 mph)</span></div>
                <div className="flex justify-between"><span>Cycling</span><span>20-25 km/h (12-15 mph)</span></div>
                <div className="flex justify-between"><span>City Driving</span><span>50 km/h (31 mph)</span></div>
                <div className="flex justify-between"><span>Highway Driving</span><span>100-120 km/h (62-75 mph)</span></div>
                <div className="flex justify-between"><span>Commercial Airplane</span><span>900 km/h (560 mph)</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Speed Conversions</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>1 km/h</span><span>= 0.621 mph</span></div>
                <div className="flex justify-between"><span>1 mph</span><span>= 1.609 km/h</span></div>
                <div className="flex justify-between"><span>1 m/s</span><span>= 3.6 km/h</span></div>
                <div className="flex justify-between"><span>1 knot</span><span>= 1.852 km/h</span></div>
                <div className="flex justify-between"><span>Speed of Sound</span><span>≈ 1,235 km/h</span></div>
                <div className="flex justify-between"><span>Speed of Light</span><span>≈ 1.08B km/h</span></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <CalculatorContent content={calculatorContent.speed} />
    </CalculatorLayout>
  );
}
