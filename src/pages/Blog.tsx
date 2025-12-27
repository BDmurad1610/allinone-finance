import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function Blog() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calculator <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free educational articles about health, finance, math, and how to use our calculators effectively.
          </p>
        </section>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Link to={`/blog/${blogPosts[0].slug}`}>
              <Card className="hover:shadow-lg transition-shadow border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(blogPosts[0].publishedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
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
        </section>

        {/* SEO Content Section */}
        <section className="mt-16 prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">About Our Calculator Blog</h2>
          <p className="text-muted-foreground">
            Welcome to the Calculator Tools Blog, your free resource for educational content about health calculations, 
            financial planning, mathematics, and practical tips for using online calculators effectively. Our expert 
            team creates in-depth guides to help you understand complex calculations like BMI, mortgage payments, 
            compound interest, and more.
          </p>
          <p className="text-muted-foreground">
            Whether you're planning for retirement, trying to lose weight, calculating loan payments, or solving 
            percentage problems, our articles provide clear explanations with real-world examples. All content is 
            thoroughly researched and designed to help you make better decisions using our free online calculators.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
