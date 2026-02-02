import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AuthorBio from "@/components/AuthorBio";
import LastUpdated from "@/components/LastUpdated";
import { getBlogPostBySlug, getRelatedPosts, getBlogPostsWithImages } from "@/data/blogPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Calculator, Share2, CheckCircle, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  // Get post with image
  const postsWithImages = getBlogPostsWithImages();
  const post = slug ? postsWithImages.find(p => p.slug === slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3).map(p => {
    const withImage = postsWithImages.find(pi => pi.slug === p.slug);
    return withImage || p;
  }) : [];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copied!",
          description: "Article link copied to clipboard",
        });
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  // Convert markdown-style content to HTML-like JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const dataRows = tableRows.slice(1).filter(row => !row[0].startsWith('---'));
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  {headers.map((cell, idx) => (
                    <th key={idx} className="border border-border px-4 py-2 text-left font-semibold">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, ridx) => (
                  <tr key={ridx} className="hover:bg-muted/50">
                    {row.map((cell, cidx) => (
                      <td key={cidx} className="border border-border px-4 py-2">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Table detection
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        flushList();
        inTable = true;
        const cells = trimmedLine.split('|').filter(cell => cell.trim() !== '');
        tableRows.push(cells);
        return;
      } else if (inTable && !trimmedLine.startsWith('|')) {
        flushTable();
      }

      // List items
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        flushTable();
        inList = true;
        listItems.push(trimmedLine.substring(2));
        return;
      } else if (inList && trimmedLine === '') {
        flushList();
        return;
      } else if (inList && !trimmedLine.startsWith('- ') && !trimmedLine.startsWith('* ') && trimmedLine !== '') {
        flushList();
      }

      // Skip empty lines
      if (trimmedLine === '') {
        return;
      }

      // Headings
      if (trimmedLine.startsWith('## ')) {
        flushList();
        flushTable();
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl font-bold mt-8 mb-4">
            {trimmedLine.substring(3)}
          </h2>
        );
        return;
      }
      if (trimmedLine.startsWith('### ')) {
        flushList();
        flushTable();
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl font-semibold mt-6 mb-3">
            {trimmedLine.substring(4)}
          </h3>
        );
        return;
      }

      // Bold text formatting
      let formattedLine = trimmedLine;
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;
      
      while ((match = boldRegex.exec(trimmedLine)) !== null) {
        if (match.index > lastIndex) {
          parts.push(trimmedLine.substring(lastIndex, match.index));
        }
        parts.push(<strong key={`bold-${index}-${match.index}`}>{match[1]}</strong>);
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < trimmedLine.length) {
        parts.push(trimmedLine.substring(lastIndex));
      }

      // Regular paragraph
      if (!inTable && !inList) {
        elements.push(
          <p key={`p-${index}`} className="text-muted-foreground leading-relaxed mb-4">
            {parts.length > 0 ? parts : trimmedLine}
          </p>
        );
      }
    });

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title={`${post.title} | Calculator Blog`}
        description={post.metaDescription}
        keywords={post.keywords.join(", ")}
        canonicalUrl={`https://calculator.tools/blog/${post.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.metaDescription,
          "author": {
            "@type": "Organization",
            "name": post.author
          },
          "datePublished": post.publishedDate,
          "publisher": {
            "@type": "Organization",
            "name": "Calculator Tools"
          }
        }}
      />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.image && (
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <Badge className="absolute top-4 left-4" variant="secondary">
                {post.category}
              </Badge>
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {!post.image && <Badge variant="secondary">{post.category}</Badge>}
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              {/* E-E-A-T signals */}
              <span className="flex items-center gap-1 text-xs bg-green-500/10 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                <CheckCircle className="w-3 h-3" />
                <span>Fact Checked</span>
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-b py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground">Verified Expert</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Related Calculators */}
          {post.relatedCalculators.length > 0 && (
            <section className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Try Our Free Calculators
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.relatedCalculators.map((calc, idx) => (
                  <Link
                    key={idx}
                    to={calc.path}
                    className="px-4 py-2 bg-background hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors border"
                  >
                    {calc.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Author Bio Section - E-E-A-T */}
          <section className="mt-12">
            <AuthorBio variant="full" showCredentials={true} />
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                      {relatedPost.image && (
                        <div className="h-32 overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader className={relatedPost.image ? "pt-3" : ""}>
                        <Badge variant="outline" className="w-fit mb-2">{relatedPost.category}</Badge>
                        <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
