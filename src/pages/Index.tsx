import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorCard from "@/components/CalculatorCard";
import { calculators, categories } from "@/data/calculators";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Sparkles, Calculator, TrendingUp, Heart, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import { Button } from "@/components/ui/button";

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
          className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-b border-border"
          aria-label="Welcome to MultiCalculator"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span>20+ Free Professional Calculators</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                Free Online Calculators for Every Need
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                From <strong className="text-foreground">BMI calculators</strong> to <strong className="text-foreground">mortgage calculators</strong>, trusted by thousands of Americans daily.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button asChild size="lg" className="group px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
                  <a href="#calculators">
                    Explore All Calculators
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-primary/5">
                  <Link to="/bmi-calculator">
                    Try BMI Calculator
                  </Link>
                </Button>
              </div>
              
              {/* Reviews Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5" role="img" aria-label="4.8 out of 5 stars rating">
                    {[1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                    <div className="relative w-6 h-6">
                      <Star className="w-6 h-6 fill-muted text-muted" aria-hidden="true" />
                      <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-foreground">4.8</span>
                </div>
                <div className="h-6 w-px bg-border hidden sm:block" aria-hidden="true"></div>
                <p className="text-muted-foreground">
                  Trusted by <span className="font-semibold text-foreground">9,875+</span> happy users
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Calculators Section */}
        <section className="container mx-auto px-4 py-12 -mt-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Heart, title: "Health", desc: "BMI, Calories, Body Fat", path: "/bmi-calculator", color: "from-green-500 to-emerald-600" },
              { icon: TrendingUp, title: "Finance", desc: "Mortgage, Loans, ROI", path: "/mortgage-calculator", color: "from-blue-500 to-indigo-600" },
              { icon: Calculator, title: "Math", desc: "Scientific, Percentage", path: "/online-calculator", color: "from-purple-500 to-pink-600" },
              { icon: Calendar, title: "Date & Time", desc: "Age, Date Difference", path: "/age-calculator", color: "from-orange-500 to-red-600" },
            ].map((item, index) => (
              <Link
                key={item.title}
                to={item.path}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
