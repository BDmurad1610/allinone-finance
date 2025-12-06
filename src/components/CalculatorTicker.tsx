import { Link } from "react-router-dom";
import { calculators } from "@/data/calculators";

export default function CalculatorTicker() {
  // Duplicate the list for seamless infinite scroll
  const tickerItems = [...calculators, ...calculators];

  return (
    <div className="bg-gradient-to-r from-primary to-accent py-2 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {tickerItems.map((calc, index) => (
            <Link
              key={`${calc.id}-${index}`}
              to={calc.path}
              className="inline-flex items-center gap-2 px-4 text-primary-foreground hover:text-white/80 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              <span className="text-sm font-medium">{calc.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
