import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Disclaimer from "./pages/Disclaimer";
import Install from "./pages/Install";

// Health & Fitness Calculators
import BMICalculator from "./pages/calculators/BMICalculator";
import CalorieCalculator from "./pages/calculators/CalorieCalculator";
import BodyFatCalculator from "./pages/calculators/BodyFatCalculator";
import BMRCalculator from "./pages/calculators/BMRCalculator";
import IdealWeightCalculator from "./pages/calculators/IdealWeightCalculator";

// Finance Calculators
import MortgageCalculator from "./pages/calculators/MortgageCalculator";
import LoanCalculator from "./pages/calculators/LoanCalculator";
import CompoundInterestCalculator from "./pages/calculators/CompoundInterestCalculator";
import InvestmentCalculator from "./pages/calculators/InvestmentCalculator";
import RetirementCalculator from "./pages/calculators/RetirementCalculator";
import ROICalculator from "./pages/calculators/ROICalculator";
import SalaryCalculator from "./pages/calculators/SalaryCalculator";
import TipCalculator from "./pages/calculators/TipCalculator";
import CurrencyConverter from "./pages/calculators/CurrencyConverter";

// Math & Science Calculators
import BasicCalculator from "./pages/calculators/BasicCalculator";
import PercentageCalculator from "./pages/calculators/PercentageCalculator";
import ScientificCalculator from "./pages/calculators/ScientificCalculator";
import FractionCalculator from "./pages/calculators/FractionCalculator";
import StatisticsCalculator from "./pages/calculators/StatisticsCalculator";

// Date & Time Calculators
import AgeCalculator from "./pages/calculators/AgeCalculator";
import DateDifferenceCalculator from "./pages/calculators/DateDifferenceCalculator";
import TimeCalculator from "./pages/calculators/TimeCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          
          {/* Math & Science - SEO Optimized URLs */}
          <Route path="/online-calculator" element={<BasicCalculator />} />
          <Route path="/percentage-calculator" element={<PercentageCalculator />} />
          <Route path="/scientific-calculator" element={<ScientificCalculator />} />
          <Route path="/fraction-calculator" element={<FractionCalculator />} />
          <Route path="/statistics-calculator" element={<StatisticsCalculator />} />
          
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;