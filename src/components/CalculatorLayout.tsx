import { ReactNode } from "react";
import Header from "./Header";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

interface CalculatorLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbItems?: { name: string; url: string }[];
}

export default function CalculatorLayout({ children, title, description, breadcrumbItems }: CalculatorLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Calculators
          </Button>
        </Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <div className="mb-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <p className="text-sm md:text-base text-foreground/80">
                👋 Welcome! Use this free online tool to get instant, accurate results. No signup required.
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </header>
          
          {children}
        </article>
      </main>
    </div>
  );
}
