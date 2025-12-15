// SEO data for all calculator pages - USA targeted keywords and descriptions

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  structuredData?: object;
}

export const seoData: Record<string, SEOData> = {
  // Homepage
  home: {
    title: "Free Online Calculators | BMI, Mortgage, Loan & More",
    description: "Free online calculators for health, finance, math & more. Calculate BMI, mortgage payments, loan interest, retirement savings, body fat percentage. Trusted by 10,000+ Americans daily.",
    keywords: "online calculator, free calculator, BMI calculator, mortgage calculator, loan calculator, retirement calculator, USA calculator tools",
    canonicalUrl: "/",
  },

  // Health & Fitness
  bmi: {
    title: "BMI Calculator - Free Body Mass Index Calculator",
    description: "Calculate your Body Mass Index (BMI) instantly with our free BMI calculator. Understand if you're underweight, normal, overweight, or obese. Used by healthcare professionals across America.",
    keywords: "BMI calculator, body mass index calculator, BMI chart, healthy weight calculator, weight calculator, BMI for adults, BMI USA",
    canonicalUrl: "/bmi-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "BMI Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "description": "Free BMI Calculator to calculate your Body Mass Index based on height and weight."
    }
  },

  calorie: {
    title: "Calorie Calculator - Daily Calorie Needs Calculator",
    description: "Calculate your daily calorie needs with our free calorie calculator. Find out how many calories you need to lose, maintain, or gain weight. Based on scientifically proven formulas.",
    keywords: "calorie calculator, daily calorie calculator, calorie needs calculator, weight loss calculator, TDEE calculator, calorie counter USA",
    canonicalUrl: "/calorie-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Calorie Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  bodyFat: {
    title: "Body Fat Calculator - Free Body Fat Percentage Calculator",
    description: "Calculate your body fat percentage with our free body fat calculator. Uses US Navy and other proven methods. Track your fitness progress accurately.",
    keywords: "body fat calculator, body fat percentage calculator, body composition calculator, fat percentage calculator, fitness calculator USA",
    canonicalUrl: "/body-fat-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Body Fat Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  bmr: {
    title: "BMR Calculator - Basal Metabolic Rate Calculator",
    description: "Calculate your Basal Metabolic Rate (BMR) with our free calculator. Find out how many calories your body burns at rest. Essential for weight management.",
    keywords: "BMR calculator, basal metabolic rate calculator, metabolism calculator, resting calories calculator, weight loss planning USA",
    canonicalUrl: "/bmr-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "BMR Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  idealWeight: {
    title: "Ideal Weight Calculator - Find Your Healthy Weight",
    description: "Calculate your ideal body weight with our free calculator. Uses multiple scientific formulas including Devine, Robinson, Miller, and Hamwi. Perfect for health goals.",
    keywords: "ideal weight calculator, healthy weight calculator, target weight calculator, ideal body weight, weight goal calculator USA",
    canonicalUrl: "/ideal-weight-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Ideal Weight Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  // Finance Calculators
  mortgage: {
    title: "Mortgage Calculator - Free Home Loan Payment Calculator",
    description: "Calculate your monthly mortgage payments with our free mortgage calculator. Includes principal, interest, taxes, and insurance. Perfect for home buyers in America.",
    keywords: "mortgage calculator, home loan calculator, mortgage payment calculator, house payment calculator, home mortgage calculator USA, PITI calculator",
    canonicalUrl: "/mortgage-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Mortgage Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  loan: {
    title: "Loan Calculator - Free Loan Payment Calculator",
    description: "Calculate loan payments, interest, and amortization with our free loan calculator. Works for personal loans, auto loans, and more. See your total cost breakdown.",
    keywords: "loan calculator, loan payment calculator, personal loan calculator, auto loan calculator, car loan calculator USA, loan interest calculator",
    canonicalUrl: "/loan-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Loan Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  compoundInterest: {
    title: "Compound Interest Calculator - Free Investment Growth Calculator",
    description: "Calculate compound interest and investment growth with our free calculator. See how your money grows over time with daily, monthly, or annual compounding.",
    keywords: "compound interest calculator, investment calculator, interest calculator, savings calculator, compound growth calculator USA, money growth calculator",
    canonicalUrl: "/compound-interest-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Compound Interest Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  investment: {
    title: "Investment Calculator - Free Investment Return Calculator",
    description: "Calculate investment returns and growth with our free investment calculator. Plan your financial future with accurate projections for stocks, bonds, and more.",
    keywords: "investment calculator, investment return calculator, stock calculator, portfolio calculator, investment growth calculator USA, ROI calculator",
    canonicalUrl: "/investment-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Investment Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  retirement: {
    title: "Retirement Calculator - Free Retirement Savings Calculator",
    description: "Plan your retirement with our free retirement calculator. Calculate how much you need to save for a comfortable retirement. Perfect for 401k and IRA planning.",
    keywords: "retirement calculator, retirement savings calculator, 401k calculator, IRA calculator, retirement planning calculator USA, pension calculator",
    canonicalUrl: "/retirement-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Retirement Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  roi: {
    title: "ROI Calculator - Free Return on Investment Calculator",
    description: "Calculate Return on Investment (ROI) with our free calculator. Measure the profitability of your investments and business decisions accurately.",
    keywords: "ROI calculator, return on investment calculator, investment ROI calculator, business ROI calculator, profit calculator USA",
    canonicalUrl: "/roi-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "ROI Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  salary: {
    title: "Salary Calculator - Hourly to Annual Salary Converter",
    description: "Convert between hourly, weekly, monthly, and annual salary with our free salary calculator. Perfect for job offers and paycheck calculations in the USA.",
    keywords: "salary calculator, hourly to salary calculator, annual salary calculator, paycheck calculator USA, wage calculator, income calculator",
    canonicalUrl: "/salary-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Salary Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  tip: {
    title: "Tip Calculator - Free Tip & Bill Split Calculator",
    description: "Calculate tips and split bills easily with our free tip calculator. Perfect for restaurants, bars, and services. Supports custom tip percentages and party sizes.",
    keywords: "tip calculator, gratuity calculator, bill split calculator, restaurant tip calculator USA, service tip calculator, split bill calculator",
    canonicalUrl: "/tip-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Tip Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  currency: {
    title: "Currency Converter - Free Real-Time Exchange Rate Calculator",
    description: "Convert currencies with real-time exchange rates. Our free currency converter supports USD, EUR, GBP, and 150+ world currencies. Updated daily.",
    keywords: "currency converter, exchange rate calculator, USD converter, money converter, forex calculator USA, currency exchange calculator",
    canonicalUrl: "/currency-converter",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Currency Converter",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  discount: {
    title: "Discount Calculator - Free Sale Price & Savings Calculator",
    description: "Calculate discounts, sale prices, and savings instantly with our free discount calculator. Perfect for shopping deals, coupons, and Black Friday sales.",
    keywords: "discount calculator, sale price calculator, percent off calculator, savings calculator USA, coupon calculator, Black Friday calculator, shopping discount calculator",
    canonicalUrl: "/discount-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Discount Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  // Math & Science
  calculator: {
    title: "Free Online Calculator - Basic Math Calculator",
    description: "Free online calculator for basic math operations. Add, subtract, multiply, and divide with our easy-to-use calculator. Works on desktop and mobile.",
    keywords: "online calculator, basic calculator, math calculator, free calculator, simple calculator USA, addition calculator, free online calculator",
    canonicalUrl: "/online-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Online Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  percentage: {
    title: "Percentage Calculator - Free Percent Calculator",
    description: "Calculate percentages easily with our free percentage calculator. Find percentage of a number, percentage increase/decrease, and more. Perfect for discounts and tips.",
    keywords: "percentage calculator, percent calculator, discount calculator, percentage increase calculator USA, percentage decrease calculator",
    canonicalUrl: "/percentage-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Percentage Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  scientific: {
    title: "Scientific Calculator - Free Advanced Math Calculator",
    description: "Advanced scientific calculator with trigonometry, logarithms, exponents, and more. Free online calculator for students, engineers, and scientists.",
    keywords: "scientific calculator, advanced calculator, trigonometry calculator, logarithm calculator USA, engineering calculator, math calculator",
    canonicalUrl: "/scientific-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Scientific Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  fraction: {
    title: "Fraction Calculator - Free Fraction Math Calculator",
    description: "Add, subtract, multiply, and divide fractions with our free fraction calculator. Simplify fractions and convert to decimals. Perfect for students.",
    keywords: "fraction calculator, fraction math calculator, add fractions calculator, simplify fractions calculator USA, mixed number calculator",
    canonicalUrl: "/fraction-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Fraction Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  statistics: {
    title: "Statistics Calculator - Mean, Median, Mode Calculator",
    description: "Calculate mean, median, mode, standard deviation, and variance with our free statistics calculator. Perfect for data analysis and statistics homework.",
    keywords: "statistics calculator, mean calculator, median calculator, mode calculator USA, standard deviation calculator, variance calculator",
    canonicalUrl: "/statistics-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Statistics Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  gpa: {
    title: "GPA Calculator - Free Grade Point Average Calculator",
    description: "Calculate your GPA (Grade Point Average) with our free GPA calculator. Perfect for high school and college students. Supports 4.0 scale with letter grades.",
    keywords: "GPA calculator, grade point average calculator, college GPA calculator, high school GPA calculator USA, cumulative GPA calculator, semester GPA calculator",
    canonicalUrl: "/gpa-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "GPA Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  // Date & Time
  age: {
    title: "Age Calculator - Calculate Your Exact Age",
    description: "Calculate your exact age in years, months, and days with our free age calculator. Find out how old you are down to the day. Perfect for birthdays.",
    keywords: "age calculator, birthday calculator, how old am I calculator USA, exact age calculator, age in days calculator",
    canonicalUrl: "/age-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Age Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  dateDifference: {
    title: "Date Calculator - Days Between Dates Calculator",
    description: "Calculate the number of days, weeks, months, and years between two dates with our free date calculator. Perfect for planning events and deadlines.",
    keywords: "date calculator, days between dates calculator, date difference calculator USA, countdown calculator, date duration calculator",
    canonicalUrl: "/date-difference-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Date Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  timeCalculator: {
    title: "Time Calculator - Add & Subtract Time Calculator",
    description: "Add and subtract hours, minutes, and seconds with our free time calculator. Calculate time duration and differences easily. Perfect for timesheets.",
    keywords: "time calculator, hours calculator, time duration calculator USA, add time calculator, subtract time calculator, timesheet calculator",
    canonicalUrl: "/time-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Time Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  // Info Pages
  about: {
    title: "About Us - MultiCalculator",
    description: "Learn about MultiCalculator - your trusted source for free online calculators. We provide accurate, easy-to-use tools for health, finance, and math calculations.",
    keywords: "about MultiCalculator, calculator website, free online calculators USA",
    canonicalUrl: "/about-us",
  },

  contact: {
    title: "Contact Us - MultiCalculator",
    description: "Contact MultiCalculator for questions, feedback, or support. We're here to help you with our free online calculators.",
    keywords: "contact MultiCalculator, calculator support, calculator help USA",
    canonicalUrl: "/contact-us",
  },

  privacy: {
    title: "Privacy Policy - MultiCalculator",
    description: "Read our privacy policy to understand how MultiCalculator protects your data and privacy while using our free online calculators.",
    keywords: "privacy policy, data protection, calculator privacy USA",
    canonicalUrl: "/privacy-policy",
  },

  terms: {
    title: "Terms and Conditions - MultiCalculator",
    description: "Read the terms and conditions for using MultiCalculator's free online calculators and tools.",
    keywords: "terms and conditions, terms of service, calculator terms USA",
    canonicalUrl: "/terms-and-conditions",
  },

  disclaimer: {
    title: "Disclaimer - MultiCalculator",
    description: "Important disclaimer about the use of MultiCalculator's free online calculators. Understand the limitations of our calculator tools.",
    keywords: "calculator disclaimer, accuracy disclaimer, calculator limitations USA",
    canonicalUrl: "/disclaimer",
  },
};