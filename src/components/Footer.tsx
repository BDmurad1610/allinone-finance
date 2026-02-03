import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Send,
  Heart,
  DollarSign,
  Ruler,
  Clock,
  Shield,
  Zap,
  Globe,
  Smartphone
} from "lucide-react";
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

  const healthCalculators = [
    { name: "BMI Calculator", path: "/bmi-calculator" },
    { name: "BMR Calculator", path: "/bmr-calculator" },
    { name: "Calorie Calculator", path: "/calorie-calculator" },
    { name: "Body Fat Calculator", path: "/body-fat-calculator" },
    { name: "Ideal Weight Calculator", path: "/ideal-weight-calculator" },
  ];

  const financeCalculators = [
    { name: "Mortgage Calculator", path: "/mortgage-calculator" },
    { name: "EMI Calculator", path: "/emi-calculator" },
    { name: "Compound Interest", path: "/compound-interest-calculator" },
    { name: "Investment Calculator", path: "/investment-calculator" },
    { name: "Loan Calculator", path: "/loan-calculator" },
  ];

  const mathCalculators = [
    { name: "Percentage Calculator", path: "/percentage-calculator" },
    { name: "Scientific Calculator", path: "/scientific-calculator" },
    { name: "Fraction Calculator", path: "/fraction-calculator" },
    { name: "Statistics Calculator", path: "/statistics-calculator" },
    { name: "Unit Converter", path: "/unit-converter" },
  ];

  const utilityCalculators = [
    { name: "Age Calculator", path: "/age-calculator" },
    { name: "Date Difference", path: "/date-difference-calculator" },
    { name: "Time Calculator", path: "/time-calculator" },
    { name: "Tip Calculator", path: "/tip-calculator" },
    { name: "Discount Calculator", path: "/discount-calculator" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Install App", path: "/install" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Disclaimer", path: "/disclaimer" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-500" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-600" },
  ];

  const features = [
    { icon: Shield, title: "100% Free", description: "All calculators are completely free to use" },
    { icon: Zap, title: "Instant Results", description: "Get accurate calculations in milliseconds" },
    { icon: Globe, title: "Works Offline", description: "Access calculators even without internet" },
    { icon: Smartphone, title: "Mobile Friendly", description: "Optimized for all devices and screens" },
  ];

  return (
    <footer 
      className="border-t border-border bg-gradient-to-b from-card/50 to-card backdrop-blur mt-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Features Section */}
      <div className="container mx-auto px-4 py-8 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <feature.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg w-fit"
              aria-label="MultiCalculator - Go to homepage"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent" aria-hidden="true">
                <Calculator className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  MultiCalculator
                </span>
                <span className="text-xs text-muted-foreground">Free Online Tools</span>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Your trusted source for free online calculators. Accurate, fast, and easy to use tools for health, finance, math, and more. No registration required. Expert-reviewed and scientifically validated.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="text-center p-2 bg-muted/50 rounded-lg">
                <div className="font-bold text-lg text-primary">30+</div>
                <div className="text-xs text-muted-foreground">Calculators</div>
              </div>
              <div className="text-center p-2 bg-muted/50 rounded-lg">
                <div className="font-bold text-lg text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Free</div>
              </div>
              <div className="text-center p-2 bg-muted/50 rounded-lg">
                <div className="font-bold text-lg text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Available</div>
              </div>
            </div>

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

          {/* Health & Fitness */}
          <nav aria-label="Health & Fitness calculators">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4 text-primary" aria-hidden="true" />
              <h2 className="font-semibold text-foreground">Health & Fitness</h2>
            </div>
            <ul className="space-y-2" role="list">
              {healthCalculators.map((link) => (
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

          {/* Finance */}
          <nav aria-label="Finance calculators">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-4 h-4 text-primary" aria-hidden="true" />
              <h2 className="font-semibold text-foreground">Finance</h2>
            </div>
            <ul className="space-y-2" role="list">
              {financeCalculators.map((link) => (
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

          {/* Math & Utility - Combined Column */}
          <div className="space-y-6">
            <nav aria-label="Math calculators">
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-4 h-4 text-primary" aria-hidden="true" />
                <h2 className="font-semibold text-foreground">Math & Science</h2>
              </div>
              <ul className="space-y-2" role="list">
                {mathCalculators.slice(0, 3).map((link) => (
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

            <nav aria-label="Utility calculators">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                <h2 className="font-semibold text-foreground">Date & Time</h2>
              </div>
              <ul className="space-y-2" role="list">
                {utilityCalculators.slice(0, 3).map((link) => (
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
          </div>

          {/* Company & Legal - Combined Column */}
          <div className="space-y-6">
            <nav aria-label="Company links">
              <h2 className="font-semibold mb-4 text-foreground">Company</h2>
              <ul className="space-y-2" role="list">
                {companyLinks.map((link) => (
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

            <nav aria-label="Legal links">
              <h2 className="font-semibold mb-4 text-foreground">Legal</h2>
              <ul className="space-y-2" role="list">
                {legalLinks.map((link) => (
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
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="border-t border-border mt-10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">🎯 Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To provide free, accurate, and easy-to-use online calculators that help people make better decisions in their daily lives.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">🔒 Your Privacy</h3>
              <p className="text-sm text-muted-foreground">
                We respect your privacy. No personal data is collected, and all calculations are performed locally in your browser.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">📱 PWA Support</h3>
              <p className="text-sm text-muted-foreground">
                Install our app on your device for offline access. Works on Android, iOS, Windows, and Mac devices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MultiCalculator. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Made with ❤️ for everyone who loves quick, accurate calculations
            </p>
          </div>
          
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
