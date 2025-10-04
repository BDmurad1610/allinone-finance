import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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

// Math & Science Calculators
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
          
          {/* Health & Fitness */}
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/calorie" element={<CalorieCalculator />} />
          <Route path="/body-fat" element={<BodyFatCalculator />} />
          <Route path="/bmr" element={<BMRCalculator />} />
          <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
          
          {/* Finance */}
          <Route path="/mortgage" element={<MortgageCalculator />} />
          <Route path="/loan" element={<LoanCalculator />} />
          <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
          <Route path="/investment" element={<InvestmentCalculator />} />
          <Route path="/retirement" element={<RetirementCalculator />} />
          <Route path="/roi" element={<ROICalculator />} />
          <Route path="/salary" element={<SalaryCalculator />} />
          <Route path="/tip" element={<TipCalculator />} />
          
          {/* Math & Science */}
          <Route path="/percentage" element={<PercentageCalculator />} />
          <Route path="/scientific" element={<ScientificCalculator />} />
          <Route path="/fraction" element={<FractionCalculator />} />
          <Route path="/statistics" element={<StatisticsCalculator />} />
          
          {/* Date & Time */}
          <Route path="/age" element={<AgeCalculator />} />
          <Route path="/date-difference" element={<DateDifferenceCalculator />} />
          <Route path="/time-calculator" element={<TimeCalculator />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
