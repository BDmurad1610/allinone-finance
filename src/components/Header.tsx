import { Calculator, Users, Download, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { PWAInstallButton } from "./PWAInstallButton";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60"
      role="banner"
    >
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label="Calculator - Free Online Tools - Go to homepage"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg" aria-hidden="true">
              <Calculator className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Calculator
              </span>
              <span className="text-xs text-muted-foreground">Free Online Tools</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-3 text-sm" aria-label="Site navigation and statistics">
            <Link 
              to="/blog" 
              className="hidden sm:flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-muted"
              aria-label="Read our blog"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">Blog</span>
            </Link>
            <div className="hidden md:flex items-center gap-1.5 text-foreground/70 transition-colors" aria-label="42.1 thousand users">
              <Users className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="font-semibold">42.1K</span>
              <span className="hidden lg:inline">users</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-foreground/70 transition-colors" aria-label="15.3 thousand downloads">
              <Download className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="font-semibold">15.3K</span>
              <span className="hidden lg:inline">downloads</span>
            </div>
            <ThemeToggle />
            <PWAInstallButton variant="outline" size="sm" showLabel={false} className="hidden sm:flex" />
            <PWAInstallButton variant="default" size="sm" showLabel={true} className="sm:hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
}
