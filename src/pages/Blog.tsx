import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Search, Heart, DollarSign, Calculator, Lightbulb, BookOpen, TrendingUp } from "lucide-react";

const categories = [
  { name: "All", icon: BookOpen, count: 0 },
  { name: "Health & Fitness", icon: Heart, count: 0 },
  { name: "Finance", icon: DollarSign, count: 0 },
  { name: "Math & Science", icon: Calculator, count: 0 },
  { name: "Productivity", icon: Lightbulb, count: 0 },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate category counts
  const categoriesWithCounts = useMemo(() => {
    return categories.map(cat => ({
      ...cat,
      count: cat.name === "All" 
        ? blogPosts.length 
        : blogPosts.filter(post => post.category === cat.name).length
    }));
  }, []);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Get featured posts (first 3)
  const featuredPosts = blogPosts.slice(0, 3);

  // Get recent posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Calculator Blog | Tips, Guides & How-To Articles"
        description="Free educational articles about health calculations, financial planning, math tips, and how to use online calculators effectively. Learn BMI, mortgage, compound interest, and more."
        keywords="calculator blog, financial tips, health guides, math tutorials, BMI guide, mortgage tips, compound interest"
        canonicalUrl="https://calculator.tools/blog"
      />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="w-3 h-3 mr-1" />
            {blogPosts.length}+ Educational Articles
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculator <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Free educational articles about health, finance, math, and how to use our calculators effectively.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categoriesWithCounts.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:bg-muted border-border"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <Badge variant={selectedCategory === category.name ? "secondary" : "outline"} className="ml-1">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Posts - Only show when no filter */}
        {selectedCategory === "All" && searchQuery === "" && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className={`h-full hover:shadow-lg transition-all hover:-translate-y-1 ${index === 0 ? "md:col-span-1 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent" : ""}`}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant={index === 0 ? "default" : "outline"}>{post.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - All Posts */}
          <div className="lg:col-span-3">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedCategory === "All" ? "All Articles" : selectedCategory}
                </h2>
                <Badge variant="secondary">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                </Badge>
              </div>

              {filteredPosts.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground text-lg mb-4">No articles found matching your criteria.</p>
                  <button 
                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                    className="text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <Link key={post.slug} to={`/blog/${post.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                        <CardHeader>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <User className="w-3 h-3" />
                              {post.author}
                            </span>
                            <span className="text-muted-foreground">
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
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Recent Articles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post) => (
                  <Link 
                    key={post.slug} 
                    to={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Category Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categoriesWithCounts.filter(c => c.name !== "All" && c.count > 0).map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-muted transition-colors text-left"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <category.icon className="w-4 h-4 text-primary" />
                      {category.name}
                    </span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Popular Calculators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/bmi-calculator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  → BMI Calculator
                </Link>
                <Link to="/mortgage-calculator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  → Mortgage Calculator
                </Link>
                <Link to="/compound-interest-calculator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  → Compound Interest
                </Link>
                <Link to="/calorie-calculator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  → Calorie Calculator
                </Link>
                <Link to="/percentage-calculator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  → Percentage Calculator
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* SEO Content Section */}
        <section className="mt-16 prose prose-gray dark:prose-invert max-w-none">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Our Calculator Blog</h2>
              <p className="text-muted-foreground">
                Welcome to the Calculator Tools Blog, your free resource for educational content about health calculations, 
                financial planning, mathematics, and practical tips for using online calculators effectively. Our expert 
                team creates in-depth guides to help you understand complex calculations like BMI, mortgage payments, 
                compound interest, and more.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Read Our Articles?</h2>
              <p className="text-muted-foreground">
                Whether you're planning for retirement, trying to lose weight, calculating loan payments, or solving 
                percentage problems, our articles provide clear explanations with real-world examples. All content is 
                thoroughly researched and designed to help you make better decisions using our free online calculators.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <CardContent className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Subscribe to our newsletter and get notified when we publish new educational articles and calculator guides.
              </p>
              <Link to="/#newsletter" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Subscribe Now <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
