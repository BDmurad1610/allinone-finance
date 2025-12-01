import { Calculator, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
              <Calculator className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Calculator
              </h1>
              <p className="text-xs text-muted-foreground">Free Online Tools</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-semibold">42.1K</span>
              <span className="hidden md:inline">users</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Download className="w-4 h-4 text-accent" />
              <span className="font-semibold">15.3K</span>
              <span className="hidden md:inline">downloads</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
