import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Install = lazy(() => import("./pages/Install"));

// Health & Fitness Calculators - Lazy loaded
const BMICalculator = lazy(() => import("./pages/calculators/BMICalculator"));
const CalorieCalculator = lazy(() => import("./pages/calculators/CalorieCalculator"));
const BodyFatCalculator = lazy(() => import("./pages/calculators/BodyFatCalculator"));
const BMRCalculator = lazy(() => import("./pages/calculators/BMRCalculator"));
const IdealWeightCalculator = lazy(() => import("./pages/calculators/IdealWeightCalculator"));

// Finance Calculators - Lazy loaded
const MortgageCalculator = lazy(() => import("./pages/calculators/MortgageCalculator"));
const LoanCalculator = lazy(() => import("./pages/calculators/LoanCalculator"));
const CompoundInterestCalculator = lazy(() => import("./pages/calculators/CompoundInterestCalculator"));
const InvestmentCalculator = lazy(() => import("./pages/calculators/InvestmentCalculator"));
const RetirementCalculator = lazy(() => import("./pages/calculators/RetirementCalculator"));
const ROICalculator = lazy(() => import("./pages/calculators/ROICalculator"));
const SalaryCalculator = lazy(() => import("./pages/calculators/SalaryCalculator"));
const TipCalculator = lazy(() => import("./pages/calculators/TipCalculator"));
const CurrencyConverter = lazy(() => import("./pages/calculators/CurrencyConverter"));
const DiscountCalculator = lazy(() => import("./pages/calculators/DiscountCalculator"));
const EMICalculator = lazy(() => import("./pages/calculators/EMICalculator"));
const ElectricityBillCalculator = lazy(() => import("./pages/calculators/ElectricityBillCalculator"));
const FuelCostCalculator = lazy(() => import("./pages/calculators/FuelCostCalculator"));
const SavingsGoalCalculator = lazy(() => import("./pages/calculators/SavingsGoalCalculator"));

// Math & Science Calculators - Lazy loaded
const BasicCalculator = lazy(() => import("./pages/calculators/BasicCalculator"));
const PercentageCalculator = lazy(() => import("./pages/calculators/PercentageCalculator"));
const ScientificCalculator = lazy(() => import("./pages/calculators/ScientificCalculator"));
const FractionCalculator = lazy(() => import("./pages/calculators/FractionCalculator"));
const StatisticsCalculator = lazy(() => import("./pages/calculators/StatisticsCalculator"));
const GPACalculator = lazy(() => import("./pages/calculators/GPACalculator"));
const UnitConverter = lazy(() => import("./pages/calculators/UnitConverter"));
const AreaCalculator = lazy(() => import("./pages/calculators/AreaCalculator"));
const SpeedCalculator = lazy(() => import("./pages/calculators/SpeedCalculator"));

// Date & Time Calculators - Lazy loaded
const AgeCalculator = lazy(() => import("./pages/calculators/AgeCalculator"));
const DateDifferenceCalculator = lazy(() => import("./pages/calculators/DateDifferenceCalculator"));
const TimeCalculator = lazy(() => import("./pages/calculators/TimeCalculator"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Health & Fitness - SEO Optimized URLs */}
              <Route path="/bmi-calculator" element={<BMICalculator />} />
              <Route path="/calorie-calculator" element={<CalorieCalculator />} />
              <Route path="/body-fat-calculator" element={<BodyFatCalculator />} />
              <Route path="/bmr-calculator" element={<BMRCalculator />} />
              <Route path="/ideal-weight-calculator" element={<IdealWeightCalculator />} />
              
              {/* Finance - SEO Optimized URLs */}
              <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
              <Route path="/loan-calculator" element={<LoanCalculator />} />
              <Route path="/compound-interest-calculator" element={<CompoundInterestCalculator />} />
              <Route path="/investment-calculator" element={<InvestmentCalculator />} />
              <Route path="/retirement-calculator" element={<RetirementCalculator />} />
              <Route path="/roi-calculator" element={<ROICalculator />} />
              <Route path="/salary-calculator" element={<SalaryCalculator />} />
              <Route path="/tip-calculator" element={<TipCalculator />} />
              <Route path="/currency-converter" element={<CurrencyConverter />} />
              <Route path="/discount-calculator" element={<DiscountCalculator />} />
              <Route path="/emi-calculator" element={<EMICalculator />} />
              <Route path="/electricity-bill-calculator" element={<ElectricityBillCalculator />} />
              <Route path="/fuel-cost-calculator" element={<FuelCostCalculator />} />
              <Route path="/savings-goal-calculator" element={<SavingsGoalCalculator />} />
              
              {/* Math & Science - SEO Optimized URLs */}
              <Route path="/online-calculator" element={<BasicCalculator />} />
              <Route path="/percentage-calculator" element={<PercentageCalculator />} />
              <Route path="/scientific-calculator" element={<ScientificCalculator />} />
              <Route path="/fraction-calculator" element={<FractionCalculator />} />
              <Route path="/statistics-calculator" element={<StatisticsCalculator />} />
              <Route path="/gpa-calculator" element={<GPACalculator />} />
              <Route path="/unit-converter" element={<UnitConverter />} />
              <Route path="/area-calculator" element={<AreaCalculator />} />
              <Route path="/speed-calculator" element={<SpeedCalculator />} />
              
              {/* Date & Time - SEO Optimized URLs */}
              <Route path="/age-calculator" element={<AgeCalculator />} />
              <Route path="/date-difference-calculator" element={<DateDifferenceCalculator />} />
              <Route path="/time-calculator" element={<TimeCalculator />} />
              
              {/* Legacy URL Redirects for SEO */}
              <Route path="/bmi" element={<Navigate to="/bmi-calculator" replace />} />
              <Route path="/calorie" element={<Navigate to="/calorie-calculator" replace />} />
              <Route path="/body-fat" element={<Navigate to="/body-fat-calculator" replace />} />
              <Route path="/bmr" element={<Navigate to="/bmr-calculator" replace />} />
              <Route path="/ideal-weight" element={<Navigate to="/ideal-weight-calculator" replace />} />
              <Route path="/mortgage" element={<Navigate to="/mortgage-calculator" replace />} />
              <Route path="/loan" element={<Navigate to="/loan-calculator" replace />} />
              <Route path="/compound-interest" element={<Navigate to="/compound-interest-calculator" replace />} />
              <Route path="/investment" element={<Navigate to="/investment-calculator" replace />} />
              <Route path="/retirement" element={<Navigate to="/retirement-calculator" replace />} />
              <Route path="/roi" element={<Navigate to="/roi-calculator" replace />} />
              <Route path="/salary" element={<Navigate to="/salary-calculator" replace />} />
              <Route path="/tip" element={<Navigate to="/tip-calculator" replace />} />
              <Route path="/currency" element={<Navigate to="/currency-converter" replace />} />
              <Route path="/calculator" element={<Navigate to="/online-calculator" replace />} />
              <Route path="/percentage" element={<Navigate to="/percentage-calculator" replace />} />
              <Route path="/scientific" element={<Navigate to="/scientific-calculator" replace />} />
              <Route path="/fraction" element={<Navigate to="/fraction-calculator" replace />} />
              <Route path="/statistics" element={<Navigate to="/statistics-calculator" replace />} />
              <Route path="/age" element={<Navigate to="/age-calculator" replace />} />
              <Route path="/date-difference" element={<Navigate to="/date-difference-calculator" replace />} />
              
              {/* Legal & Info Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/install" element={<Install />} />
              
              {/* Legacy Info Page Redirects */}
              <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
              <Route path="/about" element={<Navigate to="/about-us" replace />} />
              <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
