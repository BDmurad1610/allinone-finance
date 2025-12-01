import { 
  Activity, 
  Apple, 
  Building2, 
  Calculator, 
  Calendar,
  CircleDollarSign,
  DollarSign,
  Flame,
  Heart,
  Percent,
  PiggyBank,
  Ruler,
  Scale,
  TrendingUp,
  Wallet,
  Zap
} from "lucide-react";

export interface CalculatorItem {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: any;
  category: string;
  isActive: boolean;
}

export const categories = [
  { id: "health", name: "Health & Fitness", color: "from-green-500 to-emerald-600" },
  { id: "finance", name: "Finance", color: "from-blue-500 to-indigo-600" },
  { id: "math", name: "Math & Science", color: "from-purple-500 to-pink-600" },
  { id: "date", name: "Date & Time", color: "from-orange-500 to-red-600" },
];

export const calculators: CalculatorItem[] = [
  // Health & Fitness
  {
    id: "bmi",
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    path: "/bmi-calculator",
    icon: Scale,
    category: "health",
    isActive: true,
  },
  {
    id: "calorie",
    title: "Calorie Calculator",
    description: "Calculate daily calorie needs",
    path: "/calorie-calculator",
    icon: Apple,
    category: "health",
    isActive: true,
  },
  {
    id: "body-fat",
    title: "Body Fat Calculator",
    description: "Estimate body fat percentage",
    path: "/body-fat-calculator",
    icon: Activity,
    category: "health",
    isActive: true,
  },
  {
    id: "bmr",
    title: "BMR Calculator",
    description: "Basal Metabolic Rate calculator",
    path: "/bmr-calculator",
    icon: Flame,
    category: "health",
    isActive: true,
  },
  {
    id: "ideal-weight",
    title: "Ideal Weight Calculator",
    description: "Find your ideal body weight",
    path: "/ideal-weight-calculator",
    icon: Heart,
    category: "health",
    isActive: true,
  },
  
  // Finance
  {
    id: "mortgage",
    title: "Mortgage Calculator",
    description: "Calculate mortgage payments",
    path: "/mortgage-calculator",
    icon: Building2,
    category: "finance",
    isActive: true,
  },
  {
    id: "loan",
    title: "Loan Calculator",
    description: "Calculate loan payments & interest",
    path: "/loan-calculator",
    icon: Wallet,
    category: "finance",
    isActive: true,
  },
  {
    id: "compound-interest",
    title: "Compound Interest",
    description: "Calculate compound interest",
    path: "/compound-interest-calculator",
    icon: TrendingUp,
    category: "finance",
    isActive: true,
  },
  {
    id: "investment",
    title: "Investment Calculator",
    description: "Calculate investment returns",
    path: "/investment-calculator",
    icon: CircleDollarSign,
    category: "finance",
    isActive: true,
  },
  {
    id: "retirement",
    title: "Retirement Calculator",
    description: "Plan your retirement savings",
    path: "/retirement-calculator",
    icon: PiggyBank,
    category: "finance",
    isActive: true,
  },
  {
    id: "roi",
    title: "ROI Calculator",
    description: "Calculate return on investment",
    path: "/roi-calculator",
    icon: TrendingUp,
    category: "finance",
    isActive: true,
  },
  {
    id: "currency",
    title: "Currency Converter",
    description: "Convert between currencies",
    path: "/currency-converter",
    icon: DollarSign,
    category: "finance",
    isActive: true,
  },
  {
    id: "salary",
    title: "Salary Calculator",
    description: "Convert between salary types",
    path: "/salary-calculator",
    icon: CircleDollarSign,
    category: "finance",
    isActive: true,
  },
  {
    id: "tip",
    title: "Tip Calculator",
    description: "Calculate tips and split bills",
    path: "/tip-calculator",
    icon: DollarSign,
    category: "finance",
    isActive: true,
  },
  
  // Math & Science
  {
    id: "calculator",
    title: "Online Calculator",
    description: "Basic calculator for everyday math",
    path: "/online-calculator",
    icon: Calculator,
    category: "math",
    isActive: true,
  },
  {
    id: "percentage",
    title: "Percentage Calculator",
    description: "Calculate percentages easily",
    path: "/percentage-calculator",
    icon: Percent,
    category: "math",
    isActive: true,
  },
  {
    id: "scientific",
    title: "Scientific Calculator",
    description: "Advanced scientific calculations",
    path: "/scientific-calculator",
    icon: Zap,
    category: "math",
    isActive: true,
  },
  {
    id: "fraction",
    title: "Fraction Calculator",
    description: "Calculate with fractions",
    path: "/fraction-calculator",
    icon: Calculator,
    category: "math",
    isActive: true,
  },
  {
    id: "statistics",
    title: "Statistics Calculator",
    description: "Mean, median, standard deviation",
    path: "/statistics-calculator",
    icon: TrendingUp,
    category: "math",
    isActive: true,
  },
  
  // Date & Time
  {
    id: "age",
    title: "Age Calculator",
    description: "Calculate your exact age",
    path: "/age-calculator",
    icon: Calendar,
    category: "date",
    isActive: true,
  },
  {
    id: "date-difference",
    title: "Date Difference",
    description: "Calculate days between dates",
    path: "/date-difference-calculator",
    icon: Calendar,
    category: "date",
    isActive: true,
  },
  {
    id: "time-calculator",
    title: "Time Calculator",
    description: "Add and subtract time",
    path: "/time-calculator",
    icon: Calendar,
    category: "date",
    isActive: true,
  },
];