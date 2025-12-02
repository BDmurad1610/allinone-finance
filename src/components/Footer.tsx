import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="border-t border-border bg-card/50 backdrop-blur mt-16"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg w-fit"
              aria-label="Calculator - Go to homepage"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent" aria-hidden="true">
                <Calculator className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Calculator
                </span>
              </div>
            </Link>
            <p className="text-sm text-foreground/70">
              Free Online Tools
            </p>
          </div>

          <nav aria-label="Company links">
            <h2 className="font-semibold mb-4 text-foreground">Company</h2>
            <ul className="space-y-2" role="list">
              <li>
                <Link 
                  to="/about-us" 
                  className="text-sm text-foreground/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us" 
                  className="text-sm text-foreground/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <h2 className="font-semibold mb-4 text-foreground">Legal</h2>
            <ul className="space-y-2" role="list">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-sm text-foreground/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-and-conditions" 
                  className="text-sm text-foreground/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-sm text-foreground/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-semibold mb-4 text-foreground">Resources</h2>
            <p className="text-sm text-foreground/70">
              Free online calculators for your daily needs
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}