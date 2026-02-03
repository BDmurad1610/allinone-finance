import { Calculator, Users, Download, BookOpen, Menu, X, ChevronDown, Heart, TrendingUp, Ruler, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { PWAInstallButton } from "./PWAInstallButton";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const calculatorCategories = [
    {
      name: "Health & Fitness",
      icon: Heart,
      items: [
        { name: "BMI Calculator", path: "/bmi-calculator" },
        { name: "Calorie Calculator", path: "/calorie-calculator" },
        { name: "BMR Calculator", path: "/bmr-calculator" },
        { name: "Body Fat Calculator", path: "/body-fat-calculator" },
        { name: "Ideal Weight", path: "/ideal-weight-calculator" }
      ]
    },
    {
      name: "Finance",
      icon: TrendingUp,
      items: [
        { name: "Mortgage Calculator", path: "/mortgage-calculator" },
        { name: "Loan Calculator", path: "/loan-calculator" },
        { name: "Compound Interest", path: "/compound-interest-calculator" },
        { name: "Investment Calculator", path: "/investment-calculator" },
        { name: "Retirement Calculator", path: "/retirement-calculator" }
      ]
    },
    {
      name: "Math & Science",
      icon: Ruler,
      items: [
        { name: "Scientific Calculator", path: "/scientific-calculator" },
        { name: "Percentage Calculator", path: "/percentage-calculator" },
        { name: "Fraction Calculator", path: "/fraction-calculator" },
        { name: "Unit Converter", path: "/unit-converter" }
      ]
    },
    {
      name: "Date & Time",
      icon: Clock,
      items: [
        { name: "Age Calculator", path: "/age-calculator" },
        { name: "Date Difference", path: "/date-difference-calculator" },
        { name: "Time Calculator", path: "/time-calculator" }
      ]
    }
  ];

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60"
      role="banner"
    >
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label="MultiCalculator - Free Online Tools - Go to homepage"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg" aria-hidden="true">
              <Calculator className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                MultiCalculator
              </span>
              <span className="text-xs text-muted-foreground">Free Online Tools</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" aria-label="Site navigation">
            {/* Calculators Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-3">
                  <Calculator className="w-4 h-4" />
                  Calculators
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {calculatorCategories.map((category, idx) => (
                  <div key={category.name}>
                    {idx > 0 && <DropdownMenuSeparator />}
                    <DropdownMenuLabel className="flex items-center gap-2">
                      <category.icon className="w-4 h-4 text-primary" />
                      {category.name}
                    </DropdownMenuLabel>
                    {category.items.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link to={item.path} className="cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/#calculators" className="cursor-pointer font-medium text-primary">
                    View All Calculators →
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/blog" 
              className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted"
            >
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">Blog</span>
            </Link>

            <Link 
              to="/about-us" 
              className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted"
            >
              <span className="font-medium">About</span>
            </Link>

            <Link 
              to="/contact-us" 
              className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-muted"
            >
              <span className="font-medium">Contact</span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 text-sm">
            <div className="hidden md:flex items-center gap-1.5 text-foreground/70 transition-colors" aria-label="42.1 thousand users">
              <Users className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="font-semibold">42.1K</span>
              <span className="hidden xl:inline">users</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-foreground/70 transition-colors" aria-label="15.3 thousand downloads">
              <Download className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="font-semibold">15.3K</span>
              <span className="hidden xl:inline">downloads</span>
            </div>
            <ThemeToggle />
            <PWAInstallButton variant="outline" size="sm" showLabel={false} className="hidden sm:flex" />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="space-y-4">
              {calculatorCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <category.icon className="w-4 h-4 text-primary" />
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 pl-6">
                    {category.items.map((item) => (
                      <Link 
                        key={item.path}
                        to={item.path}
                        className="text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                <Link 
                  to="/blog" 
                  className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/about-us" 
                  className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact-us" 
                  className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
