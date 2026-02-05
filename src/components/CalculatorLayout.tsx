import { ReactNode, useState, useEffect, useMemo } from "react";
import Header from "./Header";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ShareButton from "./ShareButton";
import CalculatorIntro from "./CalculatorIntro";
import CalculatorFeatures from "./CalculatorFeatures";
import Footer from "./Footer";

interface CalculatorLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbItems?: { name: string; url: string }[];
  introContent?: {
    description: string;
    benefits?: string[];
    lastUpdated?: string;
  };
  showFeatures?: boolean;
}

export default function CalculatorLayout({ 
  children, 
  title, 
  description, 
  breadcrumbItems,
  introContent,
  showFeatures = true
}: CalculatorLayoutProps) {
  const fullText = `👋 Welcome to ${title}! Use this free online tool to get instant, accurate results. No signup required.`;
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setShowCursor(true);
    let index = 0;
    
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [title]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
        <div className="flex items-center justify-between mb-6">
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Calculators
            </Button>
          </Link>
          <ShareButton title={title} description={description} />
        </div>
        
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <div className="mb-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <p className="text-sm md:text-base text-foreground/80">
                {displayedText}
                {showCursor && <span className="inline-block w-0.5 h-4 ml-1 bg-primary animate-pulse align-middle" />}
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </header>
          
          {/* Educational Intro Section - Visible for SEO */}
          {introContent && (
            <CalculatorIntro
              title={title}
              description={introContent.description}
              benefits={introContent.benefits}
              lastUpdated={introContent.lastUpdated}
            />
          )}
          
          {children}
          
          {/* Engagement Features */}
          {showFeatures && <CalculatorFeatures title={title} />}
        </article>
      </main>
      <Footer />
    </div>
  );
}