import { useState } from "react";
import Header from "@/components/Header";
import CalculatorCard from "@/components/CalculatorCard";
import { calculators, categories } from "@/data/calculators";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredCalculators = activeCategory === "all" 
    ? calculators 
    : calculators.filter(calc => calc.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            All Your Calculators in One Place
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            From health metrics to financial planning, we've got you covered with professional-grade calculators
          </p>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="container mx-auto px-4 pb-16">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="w-full md:w-auto mb-8 grid grid-cols-3 md:flex md:inline-flex">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCalculators.map(calculator => (
                <CalculatorCard key={calculator.id} calculator={calculator} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
