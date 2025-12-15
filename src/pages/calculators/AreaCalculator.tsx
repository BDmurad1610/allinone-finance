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
import { Square, Circle, Triangle, Home, Plus, Trash2 } from "lucide-react";

interface Room {
  id: number;
  name: string;
  length: string;
  width: string;
}

const areaUnits: Record<string, { name: string; toSqMeter: number }> = {
  sqft: { name: "Square Feet (sq ft)", toSqMeter: 0.092903 },
  sqm: { name: "Square Meters (m²)", toSqMeter: 1 },
  sqyd: { name: "Square Yards (sq yd)", toSqMeter: 0.836127 },
  sqin: { name: "Square Inches (sq in)", toSqMeter: 0.00064516 },
  acre: { name: "Acres", toSqMeter: 4046.86 },
  hectare: { name: "Hectares (ha)", toSqMeter: 10000 },
};

export default function AreaCalculator() {
  const seo = seoData.area;
  
  // Rectangle/Square
  const [rectLength, setRectLength] = useState("");
  const [rectWidth, setRectWidth] = useState("");
  const [rectUnit, setRectUnit] = useState("sqft");
  const [rectResult, setRectResult] = useState<number | null>(null);

  // Circle
  const [circleRadius, setCircleRadius] = useState("");
  const [circleUnit, setCircleUnit] = useState("sqft");
  const [circleResult, setCircleResult] = useState<number | null>(null);

  // Triangle
  const [triBase, setTriBase] = useState("");
  const [triHeight, setTriHeight] = useState("");
  const [triUnit, setTriUnit] = useState("sqft");
  const [triResult, setTriResult] = useState<number | null>(null);

  // Trapezoid
  const [trapA, setTrapA] = useState("");
  const [trapB, setTrapB] = useState("");
  const [trapHeight, setTrapHeight] = useState("");
  const [trapUnit, setTrapUnit] = useState("sqft");
  const [trapResult, setTrapResult] = useState<number | null>(null);

  // Room Calculator
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: "Living Room", length: "", width: "" },
    { id: 2, name: "Bedroom", length: "", width: "" },
  ]);
  const [roomUnit, setRoomUnit] = useState("sqft");
  const [roomResults, setRoomResults] = useState<{ rooms: { name: string; area: number }[]; total: number } | null>(null);

  const calculateRectangle = () => {
    const l = parseFloat(rectLength);
    const w = parseFloat(rectWidth);
    if (l > 0 && w > 0) {
      setRectResult(Math.round(l * w * 100) / 100);
    }
  };

  const calculateCircle = () => {
    const r = parseFloat(circleRadius);
    if (r > 0) {
      setCircleResult(Math.round(Math.PI * r * r * 100) / 100);
    }
  };

  const calculateTriangle = () => {
    const b = parseFloat(triBase);
    const h = parseFloat(triHeight);
    if (b > 0 && h > 0) {
      setTriResult(Math.round((b * h / 2) * 100) / 100);
    }
  };

  const calculateTrapezoid = () => {
    const a = parseFloat(trapA);
    const b = parseFloat(trapB);
    const h = parseFloat(trapHeight);
    if (a > 0 && b > 0 && h > 0) {
      setTrapResult(Math.round(((a + b) / 2 * h) * 100) / 100);
    }
  };

  const addRoom = () => {
    const newId = Math.max(...rooms.map(r => r.id), 0) + 1;
    setRooms([...rooms, { id: newId, name: `Room ${newId}`, length: "", width: "" }]);
  };

  const removeRoom = (id: number) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter(r => r.id !== id));
    }
  };

  const updateRoom = (id: number, field: keyof Room, value: string) => {
    setRooms(rooms.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const calculateRooms = () => {
    const results: { name: string; area: number }[] = [];
    let total = 0;

    rooms.forEach(room => {
      const l = parseFloat(room.length);
      const w = parseFloat(room.width);
      if (l > 0 && w > 0) {
        const area = Math.round(l * w * 100) / 100;
        results.push({ name: room.name || "Unnamed Room", area });
        total += area;
      }
    });

    if (results.length > 0) {
      setRoomResults({ rooms: results, total: Math.round(total * 100) / 100 });
    }
  };

  const convertArea = (value: number, fromUnit: string, toUnit: string) => {
    const inSqMeters = value * areaUnits[fromUnit].toSqMeter;
    return inSqMeters / areaUnits[toUnit].toSqMeter;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <CalculatorLayout 
      title="Area Calculator" 
      description="Calculate area of rooms, land, and shapes"
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
          { name: "Area Calculator", url: "/area-calculator" }
        ]}
        faqItems={calculatorContent.area?.faq || []}
      />
      
      <Tabs defaultValue="room" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="room" className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Room</span>
          </TabsTrigger>
          <TabsTrigger value="rectangle" className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span className="hidden sm:inline">Rectangle</span>
          </TabsTrigger>
          <TabsTrigger value="circle" className="flex items-center gap-1">
            <Circle className="h-4 w-4" />
            <span className="hidden sm:inline">Circle</span>
          </TabsTrigger>
          <TabsTrigger value="triangle" className="flex items-center gap-1">
            <Triangle className="h-4 w-4" />
            <span className="hidden sm:inline">Triangle</span>
          </TabsTrigger>
          <TabsTrigger value="trapezoid" className="text-xs">
            Trapezoid
          </TabsTrigger>
        </TabsList>

        {/* Room Calculator */}
        <TabsContent value="room">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Room / Land Area Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Unit</Label>
                  <Select value={roomUnit} onValueChange={setRoomUnit}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(areaUnits).map(([key, unit]) => (
                        <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Room Headers */}
                <div className="hidden md:grid md:grid-cols-12 gap-3 text-sm font-medium text-muted-foreground">
                  <div className="col-span-4">Room Name</div>
                  <div className="col-span-3">Length</div>
                  <div className="col-span-3">Width</div>
                  <div className="col-span-2"></div>
                </div>

                {/* Room Rows */}
                {rooms.map((room) => (
                  <div key={room.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                    <div className="md:col-span-4">
                      <Label className="md:hidden">Room Name</Label>
                      <Input
                        value={room.name}
                        onChange={(e) => updateRoom(room.id, "name", e.target.value)}
                        placeholder="Room name"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <Label className="md:hidden">Length</Label>
                      <Input
                        type="number"
                        value={room.length}
                        onChange={(e) => updateRoom(room.id, "length", e.target.value)}
                        placeholder="Length"
                        min="0"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <Label className="md:hidden">Width</Label>
                      <Input
                        type="number"
                        value={room.width}
                        onChange={(e) => updateRoom(room.id, "width", e.target.value)}
                        placeholder="Width"
                        min="0"
                      />
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeRoom(room.id)}
                        disabled={rooms.length <= 1}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={addRoom} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Room
                </Button>

                <Button onClick={calculateRooms} className="w-full">Calculate Total Area</Button>

                {roomResults && (
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      {roomResults.rooms.map((room, index) => (
                        <div key={index} className="flex justify-between p-3 rounded-lg bg-muted">
                          <span>{room.name}</span>
                          <span className="font-medium">{formatNumber(room.area)} {areaUnits[roomUnit].name.split(" ")[0]}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 rounded-lg bg-primary/10 text-center">
                      <p className="text-sm text-muted-foreground mb-2">Total Area</p>
                      <p className="text-4xl font-bold text-primary">
                        {formatNumber(roomResults.total)}
                      </p>
                      <p className="text-lg text-muted-foreground mt-1">
                        {areaUnits[roomUnit].name}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rectangle Calculator */}
        <TabsContent value="rectangle">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Square className="h-5 w-5" />
                Rectangle / Square Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>Length</Label>
                    <Input
                      type="number"
                      value={rectLength}
                      onChange={(e) => setRectLength(e.target.value)}
                      placeholder="Enter length"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Width</Label>
                    <Input
                      type="number"
                      value={rectWidth}
                      onChange={(e) => setRectWidth(e.target.value)}
                      placeholder="Enter width"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Unit</Label>
                    <Select value={rectUnit} onValueChange={setRectUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(areaUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button onClick={calculateRectangle} className="w-full">Calculate Area</Button>
                
                {rectResult !== null && (
                  <div className="p-6 rounded-lg bg-muted text-center">
                    <p className="text-sm text-muted-foreground mb-2">Area = Length × Width</p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(rectResult)}
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {areaUnits[rectUnit].name}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-lg border bg-card">
                  <p className="font-medium mb-2">Formula</p>
                  <p className="font-mono text-sm">Area = Length × Width</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Circle Calculator */}
        <TabsContent value="circle">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Circle className="h-5 w-5" />
                Circle Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Radius</Label>
                    <Input
                      type="number"
                      value={circleRadius}
                      onChange={(e) => setCircleRadius(e.target.value)}
                      placeholder="Enter radius"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Unit</Label>
                    <Select value={circleUnit} onValueChange={setCircleUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(areaUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button onClick={calculateCircle} className="w-full">Calculate Area</Button>
                
                {circleResult !== null && (
                  <div className="p-6 rounded-lg bg-muted text-center">
                    <p className="text-sm text-muted-foreground mb-2">Area = π × r²</p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(circleResult)}
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {areaUnits[circleUnit].name}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-lg border bg-card">
                  <p className="font-medium mb-2">Formula</p>
                  <p className="font-mono text-sm">Area = π × radius² (π ≈ 3.14159)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Triangle Calculator */}
        <TabsContent value="triangle">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Triangle className="h-5 w-5" />
                Triangle Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>Base</Label>
                    <Input
                      type="number"
                      value={triBase}
                      onChange={(e) => setTriBase(e.target.value)}
                      placeholder="Enter base"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Height</Label>
                    <Input
                      type="number"
                      value={triHeight}
                      onChange={(e) => setTriHeight(e.target.value)}
                      placeholder="Enter height"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Unit</Label>
                    <Select value={triUnit} onValueChange={setTriUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(areaUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button onClick={calculateTriangle} className="w-full">Calculate Area</Button>
                
                {triResult !== null && (
                  <div className="p-6 rounded-lg bg-muted text-center">
                    <p className="text-sm text-muted-foreground mb-2">Area = ½ × Base × Height</p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(triResult)}
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {areaUnits[triUnit].name}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-lg border bg-card">
                  <p className="font-medium mb-2">Formula</p>
                  <p className="font-mono text-sm">Area = ½ × Base × Height</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trapezoid Calculator */}
        <TabsContent value="trapezoid">
          <Card>
            <CardHeader>
              <CardTitle>Trapezoid Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Parallel Side A (Top)</Label>
                    <Input
                      type="number"
                      value={trapA}
                      onChange={(e) => setTrapA(e.target.value)}
                      placeholder="Enter side A"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Parallel Side B (Bottom)</Label>
                    <Input
                      type="number"
                      value={trapB}
                      onChange={(e) => setTrapB(e.target.value)}
                      placeholder="Enter side B"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Height</Label>
                    <Input
                      type="number"
                      value={trapHeight}
                      onChange={(e) => setTrapHeight(e.target.value)}
                      placeholder="Enter height"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label>Unit</Label>
                    <Select value={trapUnit} onValueChange={setTrapUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(areaUnits).map(([key, unit]) => (
                          <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button onClick={calculateTrapezoid} className="w-full">Calculate Area</Button>
                
                {trapResult !== null && (
                  <div className="p-6 rounded-lg bg-muted text-center">
                    <p className="text-sm text-muted-foreground mb-2">Area = ½ × (A + B) × Height</p>
                    <p className="text-4xl font-bold text-primary">
                      {formatNumber(trapResult)}
                    </p>
                    <p className="text-lg text-muted-foreground mt-1">
                      {areaUnits[trapUnit].name}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-lg border bg-card">
                  <p className="font-medium mb-2">Formula</p>
                  <p className="font-mono text-sm">Area = ½ × (Side A + Side B) × Height</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <CalculatorContent content={calculatorContent.area} />
    </CalculatorLayout>
  );
}
