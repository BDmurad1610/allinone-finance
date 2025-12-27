import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Facebook, Twitter, Instagram, Youtube, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (email.length > 255) {
      toast.error("Email must be less than 255 characters");
      return;
    }

    setIsLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  const quickLinks = [
    { name: "BMI Calculator", path: "/bmi-calculator" },
    { name: "Mortgage Calculator", path: "/mortgage-calculator" },
    { name: "Calorie Calculator", path: "/calorie-calculator" },
    { name: "Age Calculator", path: "/age-calculator" },
    { name: "Percentage Calculator", path: "/percentage-calculator" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-500" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-600" },
  ];

  return (
    <footer 
      className="border-t border-border bg-gradient-to-b from-card/50 to-card backdrop-blur mt-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg w-fit"
              aria-label="Calculator - Go to homepage"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent" aria-hidden="true">
                <Calculator className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Calculator
                </span>
                <span className="text-xs text-muted-foreground">Free Online Tools</span>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Your trusted source for free online calculators. Accurate, fast, and easy to use tools for health, finance, math, and more.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3 id="newsletter-heading" className="font-semibold text-foreground">Subscribe to Newsletter</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Get tips, updates & new calculator alerts</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2" aria-labelledby="newsletter-heading">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background border-border text-sm"
                  maxLength={255}
                  aria-label="Email address for newsletter"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  disabled={isLoading}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  aria-label="Subscribe to newsletter"
                >
                  {isLoading ? (
                    <span className="animate-spin" aria-hidden="true">⏳</span>
                  ) : (
                    <Send className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span className="sr-only">{isLoading ? "Subscribing..." : "Subscribe"}</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Popular calculators">
            <h2 className="font-semibold mb-4 text-foreground">Popular Tools</h2>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-label="Company links">
            <h2 className="font-semibold mb-4 text-foreground">Company</h2>
            <ul className="space-y-2.5" role="list">
              <li>
                <Link 
                  to="/about-us" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/install" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Install App
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Legal links">
            <h2 className="font-semibold mb-4 text-foreground">Legal</h2>
            <ul className="space-y-2.5" role="list">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-and-conditions" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Calculator. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg text-muted-foreground ${social.color} transition-all hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
