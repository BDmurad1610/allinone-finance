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
    description: "🔢 40+ free calculators for health, finance & math. Calculate BMI, mortgage, loans, retirement in seconds. No signup. 100% accurate. Try now!",
    keywords: "online calculator, free calculator, BMI calculator, mortgage calculator, loan calculator, retirement calculator, USA calculator tools",
    canonicalUrl: "/",
  },

  // Health & Fitness
  bmi: {
    title: "BMI Calculator - Free Body Mass Index Calculator",
    description: "Calculate your BMI in 10 seconds! Free Body Mass Index tool with instant results. See if you're healthy, underweight, or overweight. No signup required.",
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
    description: "How many calories do YOU need? Find out in seconds! Free TDEE & BMR calculator for weight loss, maintenance, or muscle gain. Science-backed formulas.",
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
    description: "What's your REAL body fat %? Find out now with the US Navy method. Free, accurate body fat calculator. Takes 30 seconds. Track your fitness progress!",
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
    description: "How many calories do you burn at rest? Calculate your BMR instantly! Free metabolism calculator using Mifflin-St Jeor formula. Start losing weight smarter.",
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
    description: "What should YOU weigh? Get your ideal weight using 4 scientific formulas (Devine, Robinson, Miller, Hamwi). Free calculator. Set realistic health goals today!",
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
    description: "Can you afford that house? Calculate your monthly mortgage payment in seconds. See principal, interest, taxes & insurance breakdown. Free. No signup.",
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
    description: "How much will your loan REALLY cost? Calculate monthly payments + total interest instantly. Works for auto, personal & student loans. 100% free tool.",
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
    description: "See your money GROW! Calculate compound interest with daily/monthly/yearly compounding. Free investment calculator. Watch $1,000 become $10,000+ over time.",
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
    description: "How much will your investments be worth? Project future returns for stocks, bonds, 401k. Free calculator with monthly contributions. Plan your wealth today!",
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
    description: "When can YOU retire? Calculate exactly how much you need to save. Free 401k & IRA planner. See if you're on track for a comfortable retirement. Start now!",
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
    description: "Is your investment worth it? Calculate ROI instantly! Free tool to measure profitability of any investment or business decision. Get your % return now.",
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
    description: "$25/hour = how much per year? Convert hourly ↔ weekly ↔ monthly ↔ annual salary instantly. Free calculator for job offers & negotiations. Know your worth!",
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
    description: "How much should you tip? Calculate 15%, 18%, 20% or custom tips instantly. Split bills evenly between friends. Free restaurant tip calculator. No math needed!",
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
    description: "Convert USD to EUR, GBP, JPY & 150+ currencies instantly! Free currency converter with live exchange rates. Updated daily. Perfect for travel & business.",
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
    description: "30% off = how much? Calculate sale prices & savings in 1 click! Perfect for Black Friday, coupons & clearance sales. See exactly what you'll pay. Shop smart!",
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

  emi: {
    title: "EMI Calculator - Free Loan EMI Payment Calculator",
    description: "What's your monthly EMI? Calculate loan payments for home, car, or personal loans. See total interest & payment breakdown. Free EMI calculator. Plan smarter!",
    keywords: "EMI calculator, loan EMI calculator, monthly installment calculator, home loan EMI, car loan EMI calculator USA, EMI payment calculator",
    canonicalUrl: "/emi-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "EMI Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  "electricity-bill": {
    title: "Electricity Bill Calculator - Free Electric Cost Calculator",
    description: "Why is your electric bill so high? Calculate exact costs by kWh usage. See energy charges, taxes & breakdown. Free tool to budget & reduce electricity costs!",
    keywords: "electricity bill calculator, electric bill calculator, power bill calculator, energy cost calculator USA, utility bill calculator, kWh calculator",
    canonicalUrl: "/electricity-bill-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Electricity Bill Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  "fuel-cost": {
    title: "Fuel Cost Calculator - Free Gas Trip Cost Calculator",
    description: "How much gas for your road trip? Calculate fuel costs by distance, MPG & gas price. Plan trips & budget travel expenses. Free gas cost calculator. Try now!",
    keywords: "fuel cost calculator, gas calculator, trip fuel calculator, gas mileage calculator USA, road trip cost calculator, fuel expense calculator",
    canonicalUrl: "/fuel-cost-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Fuel Cost Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  "savings-goal": {
    title: "Savings Goal Calculator - Free Monthly Savings Planner",
    description: "Saving for a house, car, or vacation? Calculate exactly how much to save monthly to hit your goal. Free savings planner with timeline. Start saving smarter!",
    keywords: "savings goal calculator, savings planner, monthly savings calculator USA, financial goal calculator, savings target calculator",
    canonicalUrl: "/savings-goal-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Savings Goal Calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  // Math & Science
  calculator: {
    title: "Free Online Calculator - Basic Math Calculator",
    description: "Need a quick calculation? Free online calculator for +, -, ×, ÷ and more. Works on mobile & desktop. No app download. Fast, simple & always accurate!",
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
    description: "What is 15% of 200? Calculate percentages, increases & decreases instantly! Free tool for discounts, tips, grades & more. Get answers in 1 second!",
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
    description: "Sin, cos, tan, log, exponents & more! Free scientific calculator for students & engineers. Works like TI-84. No download required. Solve complex math now!",
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
    description: "Struggling with fractions? Add, subtract, multiply, divide & simplify fractions instantly! Free calculator with step-by-step answers. Perfect for homework!",
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
    description: "Calculate mean, median, mode, standard deviation & variance in seconds! Free statistics calculator for data analysis & homework. Just enter your numbers!",
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
    description: "What's your GPA? Calculate your grade point average on 4.0 scale. Works for high school & college. Add courses, credits & grades. Free GPA calculator!",
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

  unitConverter: {
    title: "Unit Converter - Free Length, Weight & Temperature Converter",
    description: "Miles to km? Pounds to kg? °F to °C? Convert any unit instantly! Free converter for length, weight, temperature & more. Metric ↔ Imperial made easy!",
    keywords: "unit converter, length converter, weight converter, temperature converter, metric converter USA, imperial to metric, km to miles, lbs to kg, Fahrenheit to Celsius",
    canonicalUrl: "/unit-converter",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Unit Converter",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  area: {
    title: "Area Calculator - Free Room & Land Area Calculator",
    description: "How many square feet is your room? Calculate area for any shape: rectangle, circle, triangle, trapezoid. Free tool for flooring, painting & land measurement!",
    keywords: "area calculator, room area calculator, land area calculator, square footage calculator USA, floor area calculator, acreage calculator, sq ft calculator",
    canonicalUrl: "/area-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Area Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  speed: {
    title: "Speed Calculator - Free Speed, Distance & Time Calculator",
    description: "How long will your trip take? Calculate speed, distance or time instantly. Supports mph, km/h, m/s. Perfect for road trips, running pace & physics homework!",
    keywords: "speed calculator, distance calculator, time calculator, mph to kmh, travel time calculator USA, running pace calculator, velocity calculator",
    canonicalUrl: "/speed-calculator",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Speed Calculator",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  },

  // Date & Time
  age: {
    title: "Age Calculator - Calculate Your Exact Age",
    description: "How old are you EXACTLY? Calculate your age in years, months, days, hours & minutes! Free birthday calculator. Perfect for birthdays & legal documents!",
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
    description: "How many days until your deadline? Calculate days, weeks, months & years between any two dates. Free date calculator for events, projects & countdowns!",
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
    description: "Add or subtract hours, minutes & seconds easily! Free time calculator for timesheets, project tracking & scheduling. Calculate total work hours instantly!",
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