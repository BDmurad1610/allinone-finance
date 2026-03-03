import { Calculator, Heart, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const calculatorHighlights = [
  {
    icon: Heart,
    category: "Health & Fitness",
    description: "Calculate BMI using WHO standards, estimate daily calories with the Mifflin-St Jeor equation, measure body fat with the U.S. Navy method, and find your ideal weight range using four established formulas.",
    tools: [
      { name: "BMI Calculator", path: "/bmi-calculator" },
      { name: "Calorie Calculator", path: "/calorie-calculator" },
      { name: "Body Fat Calculator", path: "/body-fat-calculator" },
      { name: "BMR Calculator", path: "/bmr-calculator" },
    ]
  },
  {
    icon: TrendingUp,
    category: "Finance & Planning",
    description: "Estimate mortgage payments, calculate loan EMIs, see how compound interest grows your savings, and plan for retirement — all using standard amortization and financial formulas.",
    tools: [
      { name: "Mortgage Calculator", path: "/mortgage-calculator" },
      { name: "Loan Calculator", path: "/loan-calculator" },
      { name: "Compound Interest", path: "/compound-interest-calculator" },
      { name: "Retirement Planner", path: "/retirement-calculator" },
    ]
  },
  {
    icon: Calculator,
    category: "Math & Conversions",
    description: "From scientific calculations and percentages to unit conversions and statistics — handle everyday math problems quickly and accurately.",
    tools: [
      { name: "Scientific Calculator", path: "/scientific-calculator" },
      { name: "Percentage Calculator", path: "/percentage-calculator" },
      { name: "Unit Converter", path: "/unit-converter" },
      { name: "Statistics Calculator", path: "/statistics-calculator" },
    ]
  },
  {
    icon: Calendar,
    category: "Date & Time",
    description: "Calculate your exact age, find the number of days between two dates, or perform time arithmetic for scheduling and planning.",
    tools: [
      { name: "Age Calculator", path: "/age-calculator" },
      { name: "Date Difference", path: "/date-difference-calculator" },
      { name: "Time Calculator", path: "/time-calculator" },
    ]
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30" aria-label="Calculator Categories Overview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Explore Our Calculator Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            20+ free calculators organized by category, each with detailed guides and formula explanations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {calculatorHighlights.map((item, index) => (
            <Card key={item.category} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{item.category}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map(tool => (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
