import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorTicker from "@/components/CalculatorTicker";
import CalculatorCard from "@/components/CalculatorCard";
import Testimonials from "@/components/Testimonials";
import { calculators, categories } from "@/data/calculators";
import { blogPosts } from "@/data/blogPosts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Sparkles, Calculator, TrendingUp, Heart, Calendar, Clock, User, BookOpen } from "lucide-react";
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
      
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      <CalculatorTicker />
      
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

        {/* How It Works Section */}
        <section className="bg-muted/30 py-16" aria-label="How MultiCalculator Works">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">How Our Calculators Work</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our calculators use industry-standard formulas and algorithms trusted by professionals worldwide. Get accurate results in seconds.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enter Your Data</h3>
                <p className="text-muted-foreground">Simply input your values into the calculator. All fields are clearly labeled with helpful tooltips.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Calculation</h3>
                <p className="text-muted-foreground">Our algorithms process your data instantly using scientifically-proven formulas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Detailed Results</h3>
                <p className="text-muted-foreground">Receive comprehensive results with explanations, charts, and actionable recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 py-16" aria-label="Why Choose MultiCalculator">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why 10,000+ Users Trust MultiCalculator</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="pt-4">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-semibold mb-2">100% Free Forever</h3>
                <p className="text-sm text-muted-foreground">No hidden fees, no subscriptions, no credit card required. All calculators are completely free.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-4">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground">Your data never leaves your browser. We don't store or share any personal information.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-4">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-semibold mb-2">Works Everywhere</h3>
                <p className="text-sm text-muted-foreground">Use on any device - desktop, tablet, or mobile. No app download needed.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-4">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">Get instant results. No waiting, no loading screens, no delays.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-16 bg-muted/30" aria-label="Latest Articles">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <Badge variant="secondary">Blog</Badge>
                </div>
                <h2 className="text-3xl font-bold text-foreground">Latest Articles & Guides</h2>
                <p className="text-muted-foreground mt-2">Expert tips on health, finance, and productivity</p>
              </div>
              <Link to="/blog">
                <Button variant="outline" className="mt-4 md:mt-0 group">
                  View All Articles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 6).map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Explore {blogPosts.length}+ comprehensive guides on calculators, health metrics, and financial planning
              </p>
              <Link to="/blog">
                <Button size="lg" className="group">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Browse All Articles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Detailed Calculator Descriptions */}
        <section className="bg-muted/30 py-16" aria-label="Calculator Details">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Most Popular Calculators</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Health Calculators */}
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-green-500" />
                    Health & Fitness Calculators
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Monitor your health with our scientifically-accurate health calculators. Our <Link to="/bmi-calculator" className="text-primary hover:underline">BMI Calculator</Link> uses the World Health Organization formula to assess your weight status. The <Link to="/calorie-calculator" className="text-primary hover:underline">Calorie Calculator</Link> employs the Mifflin-St Jeor equation, considered the most accurate method for estimating daily calorie needs. Track your body composition with our <Link to="/body-fat-calculator" className="text-primary hover:underline">Body Fat Calculator</Link> using the U.S. Navy method.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/bmi-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">BMI Calculator</Link>
                    <Link to="/calorie-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Calorie Calculator</Link>
                    <Link to="/bmr-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">BMR Calculator</Link>
                    <Link to="/body-fat-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Body Fat Calculator</Link>
                  </div>
                </CardContent>
              </Card>

              {/* Finance Calculators */}
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                    Finance & Investment Calculators
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Make smarter financial decisions with our comprehensive finance calculators. Our <Link to="/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</Link> helps you estimate monthly payments, total interest, and amortization schedules. Use the <Link to="/compound-interest-calculator" className="text-primary hover:underline">Compound Interest Calculator</Link> to see how your investments can grow over time. Planning for retirement? Our <Link to="/retirement-calculator" className="text-primary hover:underline">Retirement Calculator</Link> helps you determine how much you need to save.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/mortgage-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Mortgage Calculator</Link>
                    <Link to="/compound-interest-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Compound Interest</Link>
                    <Link to="/loan-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Loan Calculator</Link>
                    <Link to="/retirement-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Retirement Calculator</Link>
                  </div>
                </CardContent>
              </Card>

              {/* Math Calculators */}
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-purple-500" />
                    Math & Scientific Calculators
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    From basic arithmetic to advanced scientific calculations, we have you covered. Our <Link to="/scientific-calculator" className="text-primary hover:underline">Scientific Calculator</Link> handles trigonometry, logarithms, and complex equations. The <Link to="/percentage-calculator" className="text-primary hover:underline">Percentage Calculator</Link> makes quick work of discounts, tips, and growth rates. Students love our <Link to="/fraction-calculator" className="text-primary hover:underline">Fraction Calculator</Link> for homework help.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/scientific-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Scientific Calculator</Link>
                    <Link to="/percentage-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Percentage Calculator</Link>
                    <Link to="/fraction-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Fraction Calculator</Link>
                    <Link to="/statistics-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Statistics Calculator</Link>
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time Calculators */}
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-orange-500" />
                    Date & Time Calculators
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Track time and dates with precision. Our <Link to="/age-calculator" className="text-primary hover:underline">Age Calculator</Link> tells you your exact age in years, months, days, and even seconds. The <Link to="/date-difference-calculator" className="text-primary hover:underline">Date Difference Calculator</Link> counts days between any two dates. Need to add or subtract time? Use our <Link to="/time-calculator" className="text-primary hover:underline">Time Calculator</Link> for accurate time arithmetic.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/age-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Age Calculator</Link>
                    <Link to="/date-difference-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Date Difference</Link>
                    <Link to="/time-calculator" className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20">Time Calculator</Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="container mx-auto px-4 py-16 border-t border-border" aria-label="About MultiCalculator">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About MultiCalculator - Your Trusted Calculation Partner</h2>
            
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
              <p className="text-lg text-muted-foreground">
                MultiCalculator is a comprehensive collection of <strong className="text-foreground">free online calculators</strong> designed to help you with everyday calculations. Whether you are a student, professional, or simply someone who needs quick, accurate answers, our tools are built for you.
              </p>

              <h3 className="text-xl font-semibold text-foreground">What Makes Our Calculators Different?</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Scientifically Accurate:</strong> We use industry-standard formulas approved by health organizations, financial institutions, and educational bodies.</li>
                <li><strong className="text-foreground">User-Friendly Design:</strong> Clear instructions, intuitive interfaces, and instant results make calculations effortless.</li>
                <li><strong className="text-foreground">Educational Content:</strong> Each calculator includes detailed explanations, formulas, examples, and FAQs to help you understand the concepts.</li>
                <li><strong className="text-foreground">Mobile Optimized:</strong> All calculators work perfectly on smartphones, tablets, and desktop computers.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground">Trusted by Thousands</h3>
              <p className="text-muted-foreground">
                Since our launch, over 10,000 users have relied on MultiCalculator for their daily calculation needs. From students completing homework to professionals making financial decisions, our calculators provide the accuracy and reliability you need.
              </p>

              <h3 className="text-xl font-semibold text-foreground">Our Calculator Categories</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Health & Fitness</h4>
                  <p className="text-sm text-muted-foreground">Calculate BMI, daily calories, body fat percentage, basal metabolic rate, and ideal weight using medically-approved formulas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Finance & Money</h4>
                  <p className="text-sm text-muted-foreground">Plan mortgages, loans, investments, retirement savings, and understand compound interest with our finance tools.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Math & Science</h4>
                  <p className="text-sm text-muted-foreground">Solve equations, convert units, calculate percentages, fractions, and statistics with precision.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Date & Time</h4>
                  <p className="text-sm text-muted-foreground">Calculate age, count days between dates, and perform time arithmetic for planning and scheduling.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Are these calculators really free?</h4>
                  <p className="text-sm text-muted-foreground">Yes! All our calculators are 100% free to use with no hidden fees, subscriptions, or registrations required.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">How accurate are the results?</h4>
                  <p className="text-sm text-muted-foreground">Our calculators use scientifically-validated formulas and are regularly tested for accuracy. However, for medical or financial decisions, always consult with a professional.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Is my data safe?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely. All calculations are performed in your browser. We never store, transmit, or share your personal data.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Can I use these on my phone?</h4>
                  <p className="text-sm text-muted-foreground">Yes! MultiCalculator is fully responsive and works perfectly on all devices including iPhones, Android phones, iPads, and tablets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
