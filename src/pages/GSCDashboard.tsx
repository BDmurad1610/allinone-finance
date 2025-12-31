import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Upload, TrendingUp, TrendingDown, MousePointer, Eye, Target, ArrowUpDown, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface GSCDataRow {
  date: string;
  page?: string;
  query?: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface ParsedData {
  dates: GSCDataRow[];
  pages: GSCDataRow[];
  queries: GSCDataRow[];
}

const chartConfig = {
  clicks: { label: "Clicks", color: "hsl(var(--primary))" },
  impressions: { label: "Impressions", color: "hsl(var(--secondary))" },
  ctr: { label: "CTR (%)", color: "hsl(var(--accent))" },
  position: { label: "Position", color: "hsl(var(--muted))" },
};

export default function GSCDashboard() {
  const [data, setData] = useState<ParsedData>({ dates: [], pages: [], queries: [] });
  const [activeTab, setActiveTab] = useState("overview");

  const parseCSV = (text: string, type: "dates" | "pages" | "queries"): GSCDataRow[] => {
    const lines = text.trim().split("\n");
    if (lines.length < 2) return [];

    const headers = lines[0].toLowerCase().split(",").map(h => h.trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(",").map(v => v.trim().replace(/"/g, ""));
      const row: any = {};
      
      headers.forEach((header, i) => {
        const value = values[i] || "";
        if (header.includes("date")) row.date = value;
        else if (header.includes("page") || header.includes("url")) row.page = value;
        else if (header.includes("query") || header.includes("keyword")) row.query = value;
        else if (header.includes("click")) row.clicks = parseInt(value) || 0;
        else if (header.includes("impression")) row.impressions = parseInt(value) || 0;
        else if (header.includes("ctr")) row.ctr = parseFloat(value.replace("%", "")) || 0;
        else if (header.includes("position")) row.position = parseFloat(value) || 0;
      });

      return row as GSCDataRow;
    }).filter(row => row.clicks !== undefined || row.impressions !== undefined);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "dates" | "pages" | "queries") => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const parsed = parseCSV(text, type);
      
      if (parsed.length === 0) {
        toast.error("Could not parse CSV. Check format.");
        return;
      }

      setData(prev => ({ ...prev, [type]: parsed }));
      toast.success(`Imported ${parsed.length} rows for ${type}`);
    };
    reader.readAsText(file);
  };

  const clearData = (type: "dates" | "pages" | "queries") => {
    setData(prev => ({ ...prev, [type]: [] }));
    toast.success(`Cleared ${type} data`);
  };

  const stats = useMemo(() => {
    if (data.dates.length === 0) return null;

    const totalClicks = data.dates.reduce((sum, d) => sum + d.clicks, 0);
    const totalImpressions = data.dates.reduce((sum, d) => sum + d.impressions, 0);
    const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const avgPosition = data.dates.reduce((sum, d) => sum + d.position, 0) / data.dates.length;

    // Calculate trends (compare first half vs second half)
    const mid = Math.floor(data.dates.length / 2);
    const firstHalf = data.dates.slice(0, mid);
    const secondHalf = data.dates.slice(mid);

    const firstClicks = firstHalf.reduce((sum, d) => sum + d.clicks, 0);
    const secondClicks = secondHalf.reduce((sum, d) => sum + d.clicks, 0);
    const clicksTrend = firstClicks > 0 ? ((secondClicks - firstClicks) / firstClicks) * 100 : 0;

    const firstCTR = firstHalf.reduce((sum, d) => sum + d.ctr, 0) / firstHalf.length || 0;
    const secondCTR = secondHalf.reduce((sum, d) => sum + d.ctr, 0) / secondHalf.length || 0;
    const ctrTrend = firstCTR > 0 ? ((secondCTR - firstCTR) / firstCTR) * 100 : 0;

    return { totalClicks, totalImpressions, avgCTR, avgPosition, clicksTrend, ctrTrend };
  }, [data.dates]);

  const topPages = useMemo(() => {
    return [...data.pages]
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);
  }, [data.pages]);

  const topQueries = useMemo(() => {
    return [...data.queries]
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);
  }, [data.queries]);

  return (
    <>
      <Helmet>
        <title>GSC Performance Dashboard | MultiCalculator</title>
        <meta name="description" content="Track your Google Search Console performance metrics, CTR improvements, and search rankings over time." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-foreground">GSC Performance Dashboard</h1>
              <p className="text-muted-foreground">Import your Google Search Console CSV exports to track CTR improvements</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pages">Pages</TabsTrigger>
                <TabsTrigger value="queries">Queries</TabsTrigger>
                <TabsTrigger value="import">Import Data</TabsTrigger>
              </TabsList>

              <TabsContent value="import" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Import CSV Files
                    </CardTitle>
                    <CardDescription>
                      Export data from Google Search Console → Performance → Export → Download CSV
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="dates-csv">Date Performance (Dates.csv)</Label>
                        <div className="flex gap-2">
                          <Input
                            id="dates-csv"
                            type="file"
                            accept=".csv"
                            onChange={(e) => handleFileUpload(e, "dates")}
                            className="flex-1"
                          />
                          {data.dates.length > 0 && (
                            <Button variant="outline" size="icon" onClick={() => clearData("dates")}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {data.dates.length > 0 ? `${data.dates.length} rows loaded` : "No data"}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pages-csv">Pages Performance (Pages.csv)</Label>
                        <div className="flex gap-2">
                          <Input
                            id="pages-csv"
                            type="file"
                            accept=".csv"
                            onChange={(e) => handleFileUpload(e, "pages")}
                            className="flex-1"
                          />
                          {data.pages.length > 0 && (
                            <Button variant="outline" size="icon" onClick={() => clearData("pages")}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {data.pages.length > 0 ? `${data.pages.length} rows loaded` : "No data"}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="queries-csv">Queries Performance (Queries.csv)</Label>
                        <div className="flex gap-2">
                          <Input
                            id="queries-csv"
                            type="file"
                            accept=".csv"
                            onChange={(e) => handleFileUpload(e, "queries")}
                            className="flex-1"
                          />
                          {data.queries.length > 0 && (
                            <Button variant="outline" size="icon" onClick={() => clearData("queries")}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {data.queries.length > 0 ? `${data.queries.length} rows loaded` : "No data"}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">How to export from GSC:</h4>
                      <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                        <li>Go to Google Search Console → Performance</li>
                        <li>Set your date range (e.g., Last 3 months)</li>
                        <li>Click "Export" → "Download CSV"</li>
                        <li>You'll get a ZIP with Dates.csv, Pages.csv, Queries.csv</li>
                        <li>Upload each file above</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overview" className="space-y-6">
                {stats ? (
                  <>
                    <div className="grid gap-4 md:grid-cols-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription className="flex items-center gap-2">
                            <MousePointer className="h-4 w-4" /> Total Clicks
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{stats.totalClicks.toLocaleString()}</div>
                          <div className={`text-xs flex items-center gap-1 ${stats.clicksTrend >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {stats.clicksTrend >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {stats.clicksTrend.toFixed(1)}% vs first half
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription className="flex items-center gap-2">
                            <Eye className="h-4 w-4" /> Total Impressions
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{stats.totalImpressions.toLocaleString()}</div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription className="flex items-center gap-2">
                            <Target className="h-4 w-4" /> Average CTR
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{stats.avgCTR.toFixed(2)}%</div>
                          <div className={`text-xs flex items-center gap-1 ${stats.ctrTrend >= 0 ? "text-green-600" : "text-red-600"}`}>
                            {stats.ctrTrend >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                            {stats.ctrTrend.toFixed(1)}% improvement
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardDescription className="flex items-center gap-2">
                            <ArrowUpDown className="h-4 w-4" /> Avg Position
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{stats.avgPosition.toFixed(1)}</div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Performance Over Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data.dates}>
                              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                              <XAxis dataKey="date" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                              <YAxis yAxisId="left" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                              <YAxis yAxisId="right" orientation="right" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Legend />
                              <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} name="Clicks" />
                              <Line yAxisId="right" type="monotone" dataKey="ctr" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} name="CTR (%)" />
                            </LineChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Data Yet</h3>
                      <p className="text-muted-foreground mb-4">Import your GSC CSV files to see performance metrics</p>
                      <Button onClick={() => setActiveTab("import")}>Go to Import</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="pages" className="space-y-6">
                {topPages.length > 0 ? (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle>Top Pages by Clicks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topPages.slice(0, 5)} layout="vertical">
                              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                              <XAxis type="number" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                              <YAxis 
                                type="category" 
                                dataKey="page" 
                                width={200} 
                                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                                tickFormatter={(value) => value.replace(/^https?:\/\/[^/]+/, "").slice(0, 30)}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={4} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>All Pages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Page</TableHead>
                              <TableHead className="text-right">Clicks</TableHead>
                              <TableHead className="text-right">Impressions</TableHead>
                              <TableHead className="text-right">CTR</TableHead>
                              <TableHead className="text-right">Position</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {topPages.map((page, i) => (
                              <TableRow key={i}>
                                <TableCell className="font-mono text-xs max-w-[300px] truncate" title={page.page}>
                                  {page.page?.replace(/^https?:\/\/[^/]+/, "")}
                                </TableCell>
                                <TableCell className="text-right">{page.clicks.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{page.impressions.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{page.ctr.toFixed(2)}%</TableCell>
                                <TableCell className="text-right">{page.position.toFixed(1)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Pages Data</h3>
                      <p className="text-muted-foreground mb-4">Import your Pages.csv file to see page-level metrics</p>
                      <Button onClick={() => setActiveTab("import")}>Go to Import</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="queries" className="space-y-6">
                {topQueries.length > 0 ? (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle>Top Queries by Clicks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer config={chartConfig} className="h-[300px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topQueries.slice(0, 5)} layout="vertical">
                              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                              <XAxis type="number" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                              <YAxis 
                                type="category" 
                                dataKey="query" 
                                width={200} 
                                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                                tickFormatter={(value) => value.slice(0, 30)}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={4} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>All Queries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Query</TableHead>
                              <TableHead className="text-right">Clicks</TableHead>
                              <TableHead className="text-right">Impressions</TableHead>
                              <TableHead className="text-right">CTR</TableHead>
                              <TableHead className="text-right">Position</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {topQueries.map((query, i) => (
                              <TableRow key={i}>
                                <TableCell className="font-medium max-w-[300px] truncate" title={query.query}>
                                  {query.query}
                                </TableCell>
                                <TableCell className="text-right">{query.clicks.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{query.impressions.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{query.ctr.toFixed(2)}%</TableCell>
                                <TableCell className="text-right">{query.position.toFixed(1)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Queries Data</h3>
                      <p className="text-muted-foreground mb-4">Import your Queries.csv file to see keyword metrics</p>
                      <Button onClick={() => setActiveTab("import")}>Go to Import</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
