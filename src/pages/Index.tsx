import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorCard from "@/components/CalculatorCard";
import { calculators, categories } from "@/data/calculators";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const seo = seoData.home;
  
  const filteredCalculators = activeCategory === "all" 
    ? calculators 
    : calculators.filter(calc => calc.category === activeCategory);

  // ItemList Schema for calculator grid
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free Online Calculators",
    "description": "Collection of free online calculators for health, finance, math, and date/time calculations",
    "numberOfItems": calculators.length,
    "itemListElement": calculators.map((calc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": calc.title,
      "url": `https://multicalculator.online${calc.path}`
    }))
  };

  // CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free Online Calculators | MultiCalculator",
    "description": seo.description,
    "url": "https://multicalculator.online/",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": calculators.length
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={itemListSchema}
      />
      {/* Additional Collection Page Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      
      <Header />
      
      {/* Hero Section */}
      <main id="main-content">
        <section 
          className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-b border-border"
          aria-label="Welcome to MultiCalculator"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1YTY3ZDgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          <div className="container mx-auto px-4 py-16 text-center relative">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Free Online Calculators for Every Need
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From <strong>BMI calculators</strong> to <strong>mortgage calculators</strong>, we provide 20+ professional-grade tools trusted by thousands of Americans daily.
              </p>
              
              {/* Reviews Section with AggregateRating */}
              <Card className="max-w-lg mx-auto bg-card/95 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-300 border-border rounded-2xl animate-slide-up">
                <CardContent className="py-6 px-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1" role="img" aria-label="4.8 out of 5 stars rating">
                        {[1, 2, 3, 4].map((star) => (
                          <Star
                            key={star}
                            className="w-7 h-7 fill-yellow-400 text-yellow-400"
                            aria-hidden="true"
                          />
                        ))}
                        <div className="relative w-7 h-7">
                          <Star className="w-7 h-7 fill-gray-300 text-gray-300" aria-hidden="true" />
                          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                            <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div className="h-8 w-px bg-border" aria-hidden="true"></div>
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
        <section 
          className="container mx-auto px-4 py-16"
          aria-label="Calculator Categories"
          id="calculators"
        >
          <h2 className="sr-only">Browse Our Free Online Calculators</h2>
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full md:w-auto mb-10 grid grid-cols-3 md:flex md:inline-flex rounded-xl shadow-md p-1 bg-muted/50" aria-label="Calculator categories">
              <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground">All</TabsTrigger>
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground"
                  id={category.id}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0 animate-fade-in">
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                role="list"
                aria-label={`${activeCategory === 'all' ? 'All' : categories.find(c => c.id === activeCategory)?.name} calculators`}
              >
                {filteredCalculators.map((calculator, index) => (
                  <article 
                    key={calculator.id} 
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    role="listitem"
                  >
                    <CalculatorCard calculator={calculator} />
                  </article>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* SEO Content Section */}
        <section className="container mx-auto px-4 py-12 border-t border-border" aria-label="About MultiCalculator">
          <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Why Use MultiCalculator?</h2>
            <p className="text-foreground/80 mb-6">
              MultiCalculator provides <strong>free online calculators</strong> for health, finance, math, and everyday needs. 
              Whether you need to calculate your <Link to="/bmi-calculator" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">BMI</Link>, 
              estimate <Link to="/mortgage-calculator" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">mortgage payments</Link>, 
              or figure out <Link to="/compound-interest-calculator" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">compound interest</Link>, 
              our tools deliver accurate results instantly.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Popular Calculator Categories</h3>
            <ul className="grid md:grid-cols-2 gap-2 list-none pl-0" role="list">
              <li>
                <a href="#health" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"><span aria-hidden="true">🏥</span> Health & Fitness Calculators</a> - BMI, Calorie, Body Fat, BMR
              </li>
              <li>
                <a href="#finance" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"><span aria-hidden="true">💰</span> Finance Calculators</a> - Mortgage, Loan, Investment, Retirement
              </li>
              <li>
                <a href="#math" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"><span aria-hidden="true">🔢</span> Math Calculators</a> - Scientific, Percentage, Fraction, Statistics
              </li>
              <li>
                <a href="#datetime" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"><span aria-hidden="true">📅</span> Date & Time Calculators</a> - Age, Date Difference, Time Calculator
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
