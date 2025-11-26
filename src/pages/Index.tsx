import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorCard from "@/components/CalculatorCard";
import { calculators, categories } from "@/data/calculators";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredCalculators = activeCategory === "all" 
    ? calculators 
    : calculators.filter(calc => calc.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-b border-border">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1YTY3ZDgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 py-16 text-center relative">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              All Your Calculators in One Place
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              From health metrics to financial planning, we've got you covered with professional-grade calculators
            </p>
            
            {/* Reviews Section */}
            <Card className="max-w-lg mx-auto bg-card/95 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-300 border-border rounded-2xl animate-slide-up">
              <CardContent className="py-6 px-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          className="w-7 h-7 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <div className="relative w-7 h-7">
                        <Star className="w-7 h-7 fill-gray-300 text-gray-300" />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                          <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <div className="h-8 w-px bg-border"></div>
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4.8</span>
                  </div>
                  <p className="text-base text-muted-foreground text-center">
                    Rated by <span className="font-semibold text-foreground">9,875</span> happy users
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full md:w-auto mb-10 grid grid-cols-3 md:flex md:inline-flex rounded-xl shadow-md p-1 bg-muted/50">
            <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground">All</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCalculators.map((calculator, index) => (
                <div 
                  key={calculator.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CalculatorCard calculator={calculator} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </div>
  );
}
