import { CalculatorContentData } from "@/components/CalculatorContent";

export const calculatorContent: Record<string, CalculatorContentData> = {
  // ==================== HEALTH & FITNESS ====================
  bmi: {
    intro: {
      title: "Understanding BMI Calculator",
      paragraphs: [
        "Body Mass Index (BMI) is a widely used measurement that helps you understand whether your weight is healthy relative to your height. Originally developed by Belgian mathematician Adolphe Quetelet in the 1800s, BMI remains one of the most accessible tools for assessing weight-related health risks.",
        "Our free BMI calculator instantly computes your BMI using either metric (kg/cm) or imperial (lbs/inches) units, then categorizes your result according to World Health Organization (WHO) standards. Whether you're starting a fitness journey, monitoring your health, or simply curious about where you stand, this tool provides valuable insights in seconds."
      ]
    },
    howToUse: {
      steps: [
        { title: "Select Unit System", description: "Choose between Metric (kg, cm) or Imperial (lbs, inches) based on your preference." },
        { title: "Enter Your Weight", description: "Input your current weight. For metric, use kilograms; for imperial, use pounds." },
        { title: "Enter Your Height", description: "Input your height. For metric, use centimeters; for imperial, use total inches." },
        { title: "Click Calculate", description: "Press the Calculate BMI button to see your BMI score and weight category." }
      ],
      example: {
        inputs: "Weight = 70 kg, Height = 175 cm (Metric)",
        output: "BMI = 22.9 (Normal weight)"
      }
    },
    formula: {
      title: "How BMI is Calculated",
      content: "BMI = Weight (kg) ÷ Height² (m²)  |  Imperial: BMI = (Weight (lbs) ÷ Height² (in²)) × 703",
      assumptions: [
        "BMI does not differentiate between muscle mass and fat mass",
        "Results may be less accurate for athletes, elderly, or pregnant women",
        "BMI is a screening tool, not a diagnostic measure"
      ]
    },
    useCases: {
      title: "Who Should Use This Calculator",
      cases: [
        "Adults wanting to assess if their weight falls within a healthy range",
        "Individuals planning weight loss or fitness programs",
        "Healthcare providers screening patients for weight-related conditions",
        "People tracking their health progress over time"
      ]
    },
    tips: {
      title: "Tips for Accurate Results",
      items: [
        "Weigh yourself in the morning before eating for the most consistent readings",
        "Use the same scale and unit system for tracking progress over time",
        "Remember that BMI is just one health indicator — consider waist circumference, body fat percentage, and overall fitness",
        "Consult a healthcare provider for a comprehensive health assessment"
      ]
    },
    faq: [
      { question: "What is a healthy BMI range?", answer: "A healthy BMI typically falls between 18.5 and 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30 or above indicates obesity according to WHO standards." },
      { question: "Is BMI accurate for everyone?", answer: "BMI has limitations. It may overestimate body fat in muscular individuals and underestimate it in older adults who have lost muscle mass. Athletes, pregnant women, and children should use alternative assessments." },
      { question: "How often should I check my BMI?", answer: "For general health monitoring, checking BMI monthly or quarterly is sufficient. If actively trying to lose or gain weight, weekly tracking can help monitor progress." },
      { question: "Can BMI predict health risks?", answer: "BMI can indicate potential health risks associated with being underweight, overweight, or obese, such as heart disease, diabetes, and joint problems. However, it should be considered alongside other health markers." }
    ],
    relatedCalculators: [
      { name: "Body Fat Calculator", path: "/body-fat" },
      { name: "BMR Calculator", path: "/bmr" },
      { name: "Calorie Calculator", path: "/calorie" },
      { name: "Ideal Weight Calculator", path: "/ideal-weight" }
    ],
    disclaimer: "BMI is a screening tool, not a medical diagnosis. It does not account for muscle mass, bone density, or fat distribution. For personalized health advice, please consult a healthcare professional."
  },

  calorie: {
    intro: {
      title: "Understanding Daily Calorie Needs",
      paragraphs: [
        "Understanding your daily calorie needs is fundamental to achieving your health and fitness goals. Whether you want to lose weight, maintain your current weight, or build muscle, knowing how many calories your body requires is the first step toward success.",
        "Our calorie calculator uses scientifically validated formulas to estimate your Total Daily Energy Expenditure (TDEE). This accounts for your Basal Metabolic Rate (BMR) — the calories you burn at rest — plus the energy expended through physical activity. With accurate calorie targets, you can make informed decisions about your nutrition."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Personal Details", description: "Input your age, gender, weight, and height for accurate calculations." },
        { title: "Select Activity Level", description: "Choose your typical weekly activity level, from sedentary to very active." },
        { title: "Choose Your Goal", description: "Select whether you want to lose weight, maintain, or gain weight." },
        { title: "Get Your Results", description: "Click calculate to see your daily calorie targets and macronutrient suggestions." }
      ],
      example: {
        inputs: "30-year-old male, 180 lbs, 5'10\", Moderately Active",
        output: "Maintenance: ~2,500 calories/day | Weight Loss: ~2,000 calories/day"
      }
    },
    formula: {
      title: "The Science Behind the Calculation",
      content: "Mifflin-St Jeor Equation: Men: BMR = 10×weight(kg) + 6.25×height(cm) - 5×age + 5 | Women: BMR = 10×weight(kg) + 6.25×height(cm) - 5×age - 161 | TDEE = BMR × Activity Multiplier",
      assumptions: [
        "Results are estimates based on population averages",
        "Individual metabolism can vary by 10-15%",
        "Activity level estimates are approximate"
      ]
    },
    useCases: {
      title: "Who Benefits from Calorie Tracking",
      cases: [
        "Individuals starting a weight loss journey who need a calorie deficit target",
        "Athletes and fitness enthusiasts optimizing performance nutrition",
        "People recovering from illness who need to meet nutritional requirements",
        "Anyone wanting to understand their body's energy needs"
      ]
    },
    tips: {
      title: "Nutrition Tips",
      items: [
        "A safe rate of weight loss is 1-2 pounds per week, requiring a 500-1000 calorie daily deficit",
        "Don't drop calories too drastically — extremely low-calorie diets can slow metabolism",
        "Quality matters: prioritize whole foods, lean proteins, and vegetables over processed foods",
        "Track your intake for a few weeks to understand your eating patterns"
      ]
    },
    faq: [
      { question: "How accurate is this calorie calculator?", answer: "Our calculator provides a solid estimate based on proven formulas. However, individual metabolism varies. Use the result as a starting point and adjust based on your actual progress over 2-4 weeks." },
      { question: "Should I eat back exercise calories?", answer: "It depends on your goals. For weight loss, eating back only 50-75% of exercise calories provides a buffer for estimation errors. For maintenance or muscle building, eating back most exercise calories is appropriate." },
      { question: "What's the minimum safe calorie intake?", answer: "Generally, women shouldn't go below 1,200 calories and men below 1,500 calories daily without medical supervision. Very low-calorie diets can lead to nutrient deficiencies and metabolic slowdown." },
      { question: "How do I choose my activity level?", answer: "Be honest about your typical week. Sedentary means desk job with no exercise. Light activity is 1-3 days of exercise. Moderate is 3-5 days. Very active is 6-7 days of intense exercise or a physically demanding job." }
    ],
    relatedCalculators: [
      { name: "BMR Calculator", path: "/bmr" },
      { name: "BMI Calculator", path: "/bmi" },
      { name: "Body Fat Calculator", path: "/body-fat" },
      { name: "Ideal Weight Calculator", path: "/ideal-weight" }
    ],
    disclaimer: "Calorie estimates are based on general formulas and may vary based on individual metabolism, health conditions, and activity levels. Consult a registered dietitian or healthcare provider before making significant dietary changes."
  },

  bodyFat: {
    intro: {
      title: "Understanding Body Fat Percentage",
      paragraphs: [
        "Body fat percentage is one of the most accurate indicators of fitness and health. Unlike BMI, which only considers weight and height, body fat percentage tells you exactly how much of your body weight comes from fat versus lean mass (muscle, bones, organs).",
        "Our body fat calculator uses the U.S. Navy circumference method, a reliable technique that requires just a few simple measurements. This method has been validated against more expensive methods like DEXA scans and underwater weighing, making it an excellent free alternative for tracking your body composition progress."
      ]
    },
    howToUse: {
      steps: [
        { title: "Select Your Gender", description: "Body fat calculation formulas differ between men and women due to natural fat distribution differences." },
        { title: "Enter Your Height", description: "Input your height in the selected unit system (cm or inches)." },
        { title: "Measure Your Waist", description: "Measure at the narrowest point (for women) or at navel level (for men). Keep tape snug but not tight." },
        { title: "Measure Your Neck", description: "Measure around the neck just below the larynx (Adam's apple), sloping slightly downward." },
        { title: "Women: Measure Hips", description: "Measure at the widest point of the hips/buttocks." }
      ],
      example: {
        inputs: "Male, Height: 70 in, Waist: 34 in, Neck: 15 in",
        output: "Body Fat: ~18% (Fitness category)"
      }
    },
    formula: {
      title: "U.S. Navy Body Fat Formula",
      content: "Men: %BF = 495 / (1.0324 - 0.19077×log₁₀(waist-neck) + 0.15456×log₁₀(height)) - 450 | Women: %BF = 495 / (1.29579 - 0.35004×log₁₀(waist+hip-neck) + 0.22100×log₁₀(height)) - 450",
      assumptions: [
        "Accuracy is typically within 3-4% of DEXA scan results",
        "Results may vary based on measurement consistency",
        "Formula assumes typical body fat distribution patterns"
      ]
    },
    useCases: {
      title: "When to Track Body Fat",
      cases: [
        "Fitness enthusiasts monitoring progress during cutting or bulking phases",
        "Athletes optimizing body composition for performance",
        "Individuals on weight loss programs wanting metrics beyond scale weight",
        "Health-conscious people assessing cardiovascular and metabolic risk factors"
      ]
    },
    tips: {
      title: "Measurement Tips",
      items: [
        "Take measurements at the same time of day, preferably in the morning before eating",
        "Use a flexible measuring tape and pull it snug without compressing the skin",
        "Take each measurement 2-3 times and use the average for best accuracy",
        "Track trends over weeks rather than obsessing over daily fluctuations"
      ]
    },
    faq: [
      { question: "What is a healthy body fat percentage?", answer: "For men: 10-20% is considered fit, 21-24% acceptable, 25%+ overweight. For women: 18-28% is fit, 29-31% acceptable, 32%+ overweight. Essential fat (minimum needed for health) is 2-5% for men and 10-13% for women." },
      { question: "Is body fat percentage better than BMI?", answer: "Body fat percentage provides more information about body composition. Someone with high muscle mass might have a high BMI but low body fat. For most people, tracking both metrics gives the best picture of health." },
      { question: "How quickly can body fat percentage change?", answer: "With proper nutrition and exercise, losing 0.5-1% body fat per week is realistic. This typically requires a calorie deficit of 500-1000 calories daily combined with strength training to preserve muscle." },
      { question: "Why do men and women have different standards?", answer: "Women naturally carry more essential body fat due to reproductive functions and hormonal differences. This is why healthy ranges are higher for women than men." }
    ],
    relatedCalculators: [
      { name: "BMI Calculator", path: "/bmi" },
      { name: "BMR Calculator", path: "/bmr" },
      { name: "Calorie Calculator", path: "/calorie" },
      { name: "Ideal Weight Calculator", path: "/ideal-weight" }
    ],
    disclaimer: "Body fat estimates are approximations. For precise analysis, consider professional assessments."
  },

  bmr: {
    intro: {
      title: "Understanding Basal Metabolic Rate",
      paragraphs: [
        "Your Basal Metabolic Rate (BMR) represents the number of calories your body burns at complete rest — just to keep you alive. This includes energy for breathing, circulating blood, cell production, and maintaining body temperature. BMR typically accounts for 60-75% of your total daily calorie expenditure.",
        "Knowing your BMR is essential for effective weight management. It serves as the foundation for calculating how many calories you need each day based on your activity level. Our BMR calculator uses the Mifflin-St Jeor equation, which research has shown to be the most accurate for most adults."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Your Age", description: "BMR decreases with age as muscle mass naturally declines." },
        { title: "Select Your Gender", description: "Men typically have higher BMR due to greater muscle mass." },
        { title: "Enter Weight and Height", description: "Provide accurate measurements for precise calculations." },
        { title: "View Results", description: "See your BMR and estimated daily calorie needs at different activity levels." }
      ],
      example: {
        inputs: "35-year-old female, 140 lbs, 5'5\"",
        output: "BMR ≈ 1,375 calories/day"
      }
    },
    formula: {
      title: "Mifflin-St Jeor Equation",
      content: "Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5 | Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161",
      assumptions: [
        "Assumes average body composition",
        "May overestimate for people with high body fat",
        "May underestimate for muscular individuals"
      ]
    },
    useCases: {
      title: "Why Calculate Your BMR",
      cases: [
        "Determining minimum calorie intake for safe weight loss",
        "Understanding baseline energy needs for meal planning",
        "Athletes calculating fuel requirements for training",
        "Healthcare professionals assessing patient nutritional needs"
      ]
    },
    tips: {
      title: "Metabolism Boosting Tips",
      items: [
        "Build muscle through strength training — muscle burns more calories at rest than fat",
        "Never eat below your BMR for extended periods, as this can slow metabolism",
        "Stay hydrated — even mild dehydration can slow metabolic processes",
        "Get adequate sleep — poor sleep can reduce BMR by 2-5%"
      ]
    },
    faq: [
      { question: "What's the difference between BMR and TDEE?", answer: "BMR is calories burned at complete rest. TDEE (Total Daily Energy Expenditure) is your BMR plus calories burned through activity, exercise, and digestion. TDEE is what you should use for calorie planning." },
      { question: "Can I increase my BMR?", answer: "Yes! Building muscle mass is the most effective way to increase BMR. Each pound of muscle burns about 6 calories per day at rest, compared to 2 calories for fat. Regular exercise and adequate protein intake support muscle maintenance." },
      { question: "Why does BMR decrease with age?", answer: "As we age, we naturally lose muscle mass (about 3-8% per decade after 30). Since muscle is metabolically active tissue, less muscle means lower BMR. Regular strength training can significantly slow this decline." },
      { question: "Should I eat exactly my BMR calories?", answer: "No. Your BMR is your minimum — eating only BMR calories would leave no energy for daily activities. Most people need at least 1.2-1.4 times their BMR for basic daily functioning, more if active." }
    ],
    relatedCalculators: [
      { name: "Calorie Calculator", path: "/calorie" },
      { name: "BMI Calculator", path: "/bmi" },
      { name: "Body Fat Calculator", path: "/body-fat" },
      { name: "Ideal Weight Calculator", path: "/ideal-weight" }
    ],
    disclaimer: "BMR calculations are estimates based on population averages. Individual metabolic rates vary. Consult a healthcare professional for personalized guidance."
  },

  idealWeight: {
    intro: {
      title: "Finding Your Ideal Body Weight",
      paragraphs: [
        "The concept of 'ideal weight' has evolved significantly in healthcare. Rather than a single magic number, your ideal weight is better understood as a healthy weight range based on your height, frame size, and individual factors. Multiple formulas exist, each developed from different population studies.",
        "Our ideal weight calculator uses four established formulas — Devine, Robinson, Miller, and Hamwi — to give you a range of recommendations. This approach acknowledges that healthy weight isn't one-size-fits-all. The range accounts for differences in body frame, muscle mass, and individual health factors."
      ]
    },
    howToUse: {
      steps: [
        { title: "Select Your Gender", description: "Men and women have different ideal weight ranges due to natural body composition differences." },
        { title: "Enter Your Height", description: "Your height is the primary factor in calculating ideal weight ranges." },
        { title: "View Multiple Results", description: "See ideal weight estimates from four different medical formulas." },
        { title: "Consider Your Frame", description: "Use the range that best fits your body frame (small, medium, or large)." }
      ],
      example: {
        inputs: "Female, 5'6\" (168 cm)",
        output: "Ideal Weight Range: 118-154 lbs depending on formula and frame size"
      }
    },
    formula: {
      title: "The Four Formulas Used",
      content: "Devine (1974): Men: 50 + 2.3 × (height in inches - 60) | Women: 45.5 + 2.3 × (height - 60) | Robinson (1983), Miller (1983), Hamwi (1964) use similar height-based calculations with different coefficients",
      assumptions: [
        "Formulas were developed primarily from Caucasian population data",
        "Results don't account for muscle mass or body fat percentage",
        "Frame size significantly affects where you fall within the range"
      ]
    },
    useCases: {
      title: "When Ideal Weight Matters",
      cases: [
        "Setting realistic weight loss or gain goals",
        "Medical dosing calculations that require ideal body weight",
        "Assessing healthy weight ranges for insurance or employment physicals",
        "Tracking progress toward a healthy weight range"
      ]
    },
    tips: {
      title: "Understanding Your Results",
      items: [
        "Focus on the range rather than a single number — healthy weight varies by frame and muscle mass",
        "Consider your body frame: wrap your fingers around your wrist. If they overlap, you have a small frame; if they touch, medium; if they don't touch, large frame",
        "Your ideal weight should be where you feel energetic, healthy, and can maintain without extreme measures",
        "Athletes may weigh more than formula suggestions due to muscle mass — that's perfectly healthy"
      ]
    },
    faq: [
      { question: "Which ideal weight formula is most accurate?", answer: "No single formula is universally 'best.' The Devine formula is commonly used in medicine for drug dosing. For personal health goals, consider the average of all formulas as a reasonable target range." },
      { question: "Can my ideal weight change over time?", answer: "Yes. As you age, lose muscle mass, or change activity levels, your healthy weight range may shift. What's important is maintaining a weight where you're healthy, energetic, and your vital signs are normal." },
      { question: "What if I'm heavier than ideal but healthy?", answer: "If your blood pressure, blood sugar, cholesterol, and other health markers are normal, you may be metabolically healthy regardless of scale weight. Body composition matters more than a number." },
      { question: "Should I aim for the lowest ideal weight?", answer: "Not necessarily. The lowest end of the range is for small-framed individuals. Aiming too low can lead to muscle loss and metabolic slowdown. A sustainable weight in the middle of your range is often healthiest." }
    ],
    relatedCalculators: [
      { name: "BMI Calculator", path: "/bmi" },
      { name: "Body Fat Calculator", path: "/body-fat" },
      { name: "Calorie Calculator", path: "/calorie" },
      { name: "BMR Calculator", path: "/bmr" }
    ],
    disclaimer: "Ideal weight ranges are based on historical formulas and don't account for individual body composition, muscle mass, or health factors. A healthy weight varies by person. Consult a healthcare provider for personalized recommendations."
  },

  // ==================== FINANCE ====================
  mortgage: {
    intro: {
      title: "Understanding Your Mortgage Payment",
      paragraphs: [
        "Buying a home is likely the biggest financial decision you'll ever make. Understanding exactly what your monthly mortgage payment will be helps you budget accurately and avoid financial stress. Our mortgage calculator breaks down your payment into principal, interest, and shows total costs over the life of the loan.",
        "Whether you're a first-time homebuyer exploring affordability, or a current homeowner considering refinancing, this calculator provides the insights you need. See how different down payments, interest rates, and loan terms affect your monthly budget and total interest paid."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Home Price", description: "The total purchase price of the home you're considering." },
        { title: "Enter Down Payment", description: "The amount you'll pay upfront. Higher down payments mean lower monthly payments and no PMI (typically at 20%+)." },
        { title: "Select Loan Term", description: "Common terms are 15 or 30 years. Shorter terms mean higher payments but less total interest." },
        { title: "Enter Interest Rate", description: "Your annual interest rate. Even small rate differences significantly impact total cost." }
      ],
      example: {
        inputs: "Home Price: $350,000, Down Payment: $70,000, 30-year term, 6.5% rate",
        output: "Monthly Payment: $1,769 | Total Interest: $356,880"
      }
    },
    formula: {
      title: "Mortgage Payment Formula",
      content: "M = P × [r(1+r)^n] / [(1+r)^n - 1] | Where: M = Monthly payment, P = Principal (loan amount), r = Monthly interest rate, n = Number of payments",
      assumptions: [
        "Calculation shows principal and interest only",
        "Does not include property taxes, homeowner's insurance, HOA fees, or PMI",
        "Assumes fixed interest rate throughout the loan term"
      ]
    },
    useCases: {
      title: "When to Use This Calculator",
      cases: [
        "First-time homebuyers determining how much house they can afford",
        "Homeowners exploring refinancing options to lower payments or shorten loan term",
        "Real estate investors analyzing potential rental property cash flow",
        "Anyone comparing mortgage offers from different lenders"
      ]
    },
    tips: {
      title: "Smart Mortgage Tips",
      items: [
        "Aim for a down payment of 20% or more to avoid Private Mortgage Insurance (PMI)",
        "Consider a 15-year mortgage if affordable — you'll pay significantly less interest overall",
        "Shop multiple lenders; even a 0.25% rate difference saves thousands over the loan life",
        "Factor in property taxes, insurance, and maintenance (typically 1-2% of home value annually)"
      ]
    },
    faq: [
      { question: "What's included in my actual mortgage payment?", answer: "Your real payment (PITI) includes Principal, Interest, property Taxes, and Insurance. Many lenders collect taxes and insurance in escrow. Our calculator shows principal and interest; add 1-2% of home value annually for taxes and insurance estimates." },
      { question: "How much house can I afford?", answer: "A common guideline is that your total housing costs shouldn't exceed 28% of your gross monthly income. Your total debt payments (housing + car + credit cards) shouldn't exceed 36% of income." },
      { question: "Should I get a 15-year or 30-year mortgage?", answer: "A 15-year mortgage has higher monthly payments but saves tens of thousands in interest. A 30-year provides lower payments and more flexibility. Choose based on your budget and financial goals." },
      { question: "How does interest rate affect my payment?", answer: "On a $300,000 loan, a 1% rate increase (e.g., 6% to 7%) adds about $200/month to your payment and over $70,000 in total interest over 30 years." }
    ],
    relatedCalculators: [
      { name: "Loan Calculator", path: "/loan" },
      { name: "Compound Interest Calculator", path: "/compound-interest" },
      { name: "Investment Calculator", path: "/investment" },
      { name: "ROI Calculator", path: "/roi" }
    ],
    disclaimer: "Mortgage calculations are estimates. Actual payments vary due to taxes, insurance, PMI, and lender terms. Consult a mortgage professional for accurate quotes."
  },

  loan: {
    intro: {
      title: "Understanding Loan Payments",
      paragraphs: [
        "Whether you're financing a car, consolidating debt, or covering unexpected expenses, understanding your loan payment is crucial for financial planning. Our loan calculator helps you see exactly what you'll pay each month and over the life of the loan, so there are no surprises.",
        "With rising interest rates, it's more important than ever to compare loan options and understand the true cost of borrowing. This calculator shows you how different interest rates and loan terms affect your monthly payment and total interest paid."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Loan Amount", description: "The total amount you want to borrow." },
        { title: "Enter Loan Term", description: "How long you'll take to repay the loan in years." },
        { title: "Enter Interest Rate", description: "The annual interest rate (APR) offered by the lender." },
        { title: "Calculate", description: "See your monthly payment, total payment, and total interest." }
      ],
      example: {
        inputs: "Loan Amount: $25,000, Term: 5 years, Interest Rate: 7.5%",
        output: "Monthly Payment: $500.57 | Total Interest: $5,034"
      }
    },
    formula: {
      title: "Loan Payment Formula",
      content: "Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1] | P = Principal, r = Monthly rate (annual rate ÷ 12), n = Total number of payments",
      assumptions: [
        "Assumes fixed interest rate",
        "Does not include fees or origination charges",
        "Based on standard amortization schedule"
      ]
    },
    useCases: {
      title: "Common Loan Scenarios",
      cases: [
        "Auto loans — comparing dealer financing vs. bank/credit union rates",
        "Personal loans for debt consolidation or major purchases",
        "Student loan repayment planning",
        "Small business loans for equipment or working capital"
      ]
    },
    tips: {
      title: "Borrowing Wisely",
      items: [
        "Compare APR (Annual Percentage Rate) not just interest rate — APR includes fees",
        "Shorter loan terms mean higher monthly payments but dramatically less total interest",
        "Check if there's a prepayment penalty before signing — you'll want flexibility to pay extra",
        "Your credit score significantly affects your rate; even improving by 50 points can save hundreds"
      ]
    },
    faq: [
      { question: "What's the difference between APR and interest rate?", answer: "Interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus fees and other charges, giving you the true cost of the loan. Always compare APRs when shopping for loans." },
      { question: "Should I choose a shorter or longer loan term?", answer: "Shorter terms have higher monthly payments but much lower total interest. A 3-year auto loan at 7% on $25,000 costs $2,735 in interest vs. $5,628 for a 5-year term. Choose based on what you can afford monthly." },
      { question: "How does making extra payments help?", answer: "Extra payments go directly to principal, reducing total interest and shortening your loan. Even an extra $50/month on a $25,000 loan can save hundreds in interest and pay it off months early." },
      { question: "What credit score do I need for the best rates?", answer: "Generally, scores above 740 qualify for the best rates. Scores 670-739 get good rates. Below 670, you'll pay significantly more. Check your credit and address any errors before applying." }
    ],
    relatedCalculators: [
      { name: "Mortgage Calculator", path: "/mortgage" },
      { name: "Compound Interest Calculator", path: "/compound-interest" },
      { name: "ROI Calculator", path: "/roi" },
      { name: "Salary Calculator", path: "/salary" }
    ],
    disclaimer: "Loan calculations are estimates. Actual payments may vary due to fees, variable rates, and lender terms. Compare offers from multiple lenders."
  },

  compoundInterest: {
    intro: {
      title: "The Power of Compound Interest",
      paragraphs: [
        "Albert Einstein reportedly called compound interest 'the eighth wonder of the world.' Whether he actually said it or not, the math backs up the sentiment. Compound interest is the process of earning interest on your interest, creating exponential growth over time.",
        "Our compound interest calculator shows you exactly how your money can grow through the power of compounding. See how different interest rates, compounding frequencies, and time periods affect your wealth building. Understanding this concept is fundamental to long-term financial success."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Principal Amount", description: "Your initial investment or savings amount." },
        { title: "Enter Interest Rate", description: "The annual interest rate or expected return." },
        { title: "Select Compounding Frequency", description: "How often interest is calculated (daily, monthly, quarterly, yearly)." },
        { title: "Enter Time Period", description: "How long you plan to let the money grow." },
        { title: "Add Monthly Contribution (Optional)", description: "Regular deposits you'll add over time." }
      ],
      example: {
        inputs: "$10,000 principal, 7% annual rate, monthly compounding, 20 years",
        output: "Final Balance: $40,387 | Total Interest Earned: $30,387"
      }
    },
    formula: {
      title: "Compound Interest Formula",
      content: "A = P(1 + r/n)^(nt) | A = Final amount, P = Principal, r = Annual rate (decimal), n = Compounds per year, t = Years",
      assumptions: [
        "Assumes consistent interest rate over the period",
        "Does not account for inflation or taxes",
        "Actual investment returns vary year to year"
      ]
    },
    useCases: {
      title: "Apply Compound Interest Knowledge",
      cases: [
        "Retirement planning — see how early investing grows exponentially",
        "Savings goals — calculate how long to reach specific amounts",
        "Comparing investment options with different compounding frequencies",
        "Understanding the true cost of debt when interest compounds against you"
      ]
    },
    tips: {
      title: "Maximize Compound Interest",
      items: [
        "Start investing as early as possible — time is the most powerful factor in compounding",
        "Reinvest dividends and interest rather than withdrawing them",
        "Look for accounts with daily or monthly compounding vs. annual",
        "Remember: compound interest works against you on debt. Pay off high-interest debt first"
      ]
    },
    faq: [
      { question: "Why does compounding frequency matter?", answer: "More frequent compounding means your interest earns interest sooner. $10,000 at 5% for 10 years: annual compounding = $16,289, monthly = $16,470, daily = $16,487. The difference grows larger with higher rates and longer periods." },
      { question: "How does compound interest differ from simple interest?", answer: "Simple interest only calculates on the principal. Compound interest calculates on principal PLUS accumulated interest. Over long periods, compound interest generates dramatically more growth." },
      { question: "What's the Rule of 72?", answer: "A quick way to estimate doubling time: divide 72 by your interest rate. At 7%, your money doubles in about 10.3 years (72÷7). At 10%, it doubles in 7.2 years. It's a useful mental math shortcut." },
      { question: "How does compound interest work with regular contributions?", answer: "Regular contributions turbocharge compound growth. Each contribution starts compounding immediately. Someone investing $500/month for 30 years at 7% ends up with about $567,000 — but only contributed $180,000!" }
    ],
    relatedCalculators: [
      { name: "Investment Calculator", path: "/investment" },
      { name: "Retirement Calculator", path: "/retirement" },
      { name: "ROI Calculator", path: "/roi" },
      { name: "Mortgage Calculator", path: "/mortgage" }
    ],
    disclaimer: "Investment projections assume consistent returns, which do not reflect real market volatility. Past performance does not guarantee future results."
  },

  investment: {
    intro: {
      title: "Plan Your Investment Growth",
      paragraphs: [
        "Whether you're saving for retirement, a down payment, or building generational wealth, understanding how your investments grow over time is essential. Our investment calculator projects your portfolio growth based on your initial investment, regular contributions, and expected return rate.",
        "Seeing the long-term potential of consistent investing can be incredibly motivating. This calculator demonstrates why starting early and staying consistent matters far more than timing the market perfectly."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Starting Amount", description: "How much you're investing initially." },
        { title: "Enter Monthly Contribution", description: "How much you'll add each month consistently." },
        { title: "Enter Expected Return", description: "Historical stock market average is 7-10% annually." },
        { title: "Enter Time Horizon", description: "How many years until you need the money." }
      ],
      example: {
        inputs: "$5,000 initial, $300/month, 8% return, 25 years",
        output: "Total Value: $287,000+ | Total Contributed: $95,000 | Investment Gains: $192,000+"
      }
    },
    formula: {
      title: "Investment Growth Formula",
      content: "FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r] | FV = Future Value, PV = Present Value, r = Periodic rate, n = Periods, PMT = Regular payment",
      assumptions: [
        "Assumes constant rate of return (actual returns vary significantly)",
        "Does not account for taxes, fees, or inflation",
        "Past performance doesn't guarantee future results"
      ]
    },
    useCases: {
      title: "Investment Planning Scenarios",
      cases: [
        "Retirement planning — projecting 401(k) or IRA growth",
        "College savings — planning 529 contributions for your children",
        "Wealth building — setting long-term financial independence goals",
        "Goal-based planning — saving for major purchases or experiences"
      ]
    },
    tips: {
      title: "Smart Investing Tips",
      items: [
        "A 1% difference in fees can cost you hundreds of thousands over a career — choose low-cost index funds",
        "Dollar-cost averaging (investing the same amount regularly) reduces timing risk",
        "Don't check your portfolio daily — long-term investors weather short-term volatility",
        "Increase contributions whenever you get a raise — you won't miss money you never saw"
      ]
    },
    faq: [
      { question: "What return rate should I assume?", answer: "The S&P 500 has historically returned about 10% annually before inflation, or about 7% after inflation. For conservative planning, use 6-7%. For optimistic scenarios, use 8-10%. Never assume more than 10% long-term." },
      { question: "How do fees affect investment growth?", answer: "Dramatically. A 1% annual fee on $100,000 over 30 years at 7% return costs you about $150,000 in growth. This is why low-cost index funds with 0.03-0.20% fees are so popular." },
      { question: "Should I invest a lump sum or gradually?", answer: "Statistically, lump sum investing beats dollar-cost averaging about 2/3 of the time because markets tend to go up. However, gradual investing reduces psychological stress and is fine for most people." },
      { question: "How does inflation affect my projections?", answer: "Inflation erodes purchasing power. To see 'real' returns, subtract 2-3% (historical average inflation) from your assumed return. $1 million in 30 years will have the purchasing power of roughly $400,000-$500,000 in today's dollars." }
    ],
    relatedCalculators: [
      { name: "Compound Interest Calculator", path: "/compound-interest" },
      { name: "Retirement Calculator", path: "/retirement" },
      { name: "ROI Calculator", path: "/roi" },
      { name: "Salary Calculator", path: "/salary" }
    ],
    disclaimer: "Investment projections assume consistent returns. Actual results vary due to market volatility. Consult a financial advisor for personalized advice."
  },

  retirement: {
    intro: {
      title: "Plan for a Comfortable Retirement",
      paragraphs: [
        "Retirement planning is one of the most important financial exercises you'll ever do. The earlier you start planning, the more time compound interest has to work in your favor. Our retirement calculator helps you understand how much you need to save to maintain your desired lifestyle after you stop working.",
        "Whether you're just starting your career or approaching retirement age, this calculator helps you set realistic savings targets. See how Social Security, pensions, current savings, and future contributions combine to fund your retirement years."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Current Age", description: "Your age today." },
        { title: "Enter Retirement Age", description: "When you plan to stop working (typically 62-70)." },
        { title: "Enter Current Savings", description: "What you've already saved in retirement accounts." },
        { title: "Enter Monthly Contribution", description: "How much you're saving for retirement each month." },
        { title: "Enter Expected Return & Retirement Income", description: "Investment return rate and your desired annual retirement income." }
      ],
      example: {
        inputs: "Age 30, retire at 65, $25k saved, $500/month contribution, 7% return, need $50k/year",
        output: "Projected Savings at 65: $850,000+ | Can support ~25 years of retirement"
      }
    },
    formula: {
      title: "Retirement Calculations",
      content: "Savings at Retirement = Current Savings × (1+r)^n + Monthly × [((1+r)^n - 1) / r] | Years in Retirement = Retirement Savings ÷ Annual Withdrawal (adjusted for continued growth)",
      assumptions: [
        "Assumes consistent contribution and return rates",
        "Does not fully account for inflation, healthcare costs, or taxes",
        "Social Security and pension income vary individually"
      ]
    },
    useCases: {
      title: "Retirement Planning Scenarios",
      cases: [
        "Young professionals starting their retirement savings journey",
        "Mid-career workers checking if they're on track",
        "Pre-retirees confirming they've saved enough",
        "Financial advisors helping clients with goal setting"
      ]
    },
    tips: {
      title: "Retirement Savings Tips",
      items: [
        "Maximize employer 401(k) match — it's free money. Not doing so is leaving compensation on the table",
        "Consider Roth IRA contributions if you're young — tax-free growth for decades is powerful",
        "Plan for healthcare costs — they're often the largest expense in retirement",
        "Don't forget Social Security — while not enough alone, it provides a significant income base for most Americans"
      ]
    },
    faq: [
      { question: "How much do I need for retirement?", answer: "A common guideline is 25 times your annual expenses (the 4% rule). If you need $50,000/year, target $1.25 million. However, this varies based on lifestyle, healthcare needs, and Social Security benefits." },
      { question: "What is the 4% rule?", answer: "The 4% rule suggests you can withdraw 4% of your retirement savings the first year, then adjust for inflation annually, with high confidence of not running out over 30 years. It's based on historical market data." },
      { question: "When should I start saving for retirement?", answer: "Now! Someone who invests $500/month starting at age 25 will have ~$1.1 million at 65 (at 7%). Starting at 35 yields only ~$520,000. Time is your greatest asset in retirement planning." },
      { question: "How does Social Security fit in?", answer: "Social Security replaces about 40% of pre-retirement income for average earners. Higher earners get a lower percentage replacement. Create a my Social Security account at ssa.gov to see your projected benefits." }
    ],
    relatedCalculators: [
      { name: "Investment Calculator", path: "/investment" },
      { name: "Compound Interest Calculator", path: "/compound-interest" },
      { name: "Salary Calculator", path: "/salary" },
      { name: "ROI Calculator", path: "/roi" }
    ],
    disclaimer: "Retirement projections are estimates. Actual results vary due to market conditions, inflation, taxes, and healthcare costs. Consult a certified financial planner."
  },

  roi: {
    intro: {
      title: "Understanding Return on Investment",
      paragraphs: [
        "Return on Investment (ROI) is the universal language of investment performance. Whether you're evaluating stocks, real estate, business ventures, or marketing campaigns, ROI tells you how efficiently your money is working. It's the essential metric for comparing different investment opportunities.",
        "Our ROI calculator makes it simple to determine your return as both a percentage and dollar amount. Understanding ROI helps you make smarter decisions about where to allocate your resources for maximum impact."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Initial Investment", description: "The amount you invested or spent initially." },
        { title: "Enter Final Value or Return", description: "The current value or total amount received back." },
        { title: "Calculate ROI", description: "See your return as both percentage and dollar amount." },
        { title: "Compare Options", description: "Run multiple calculations to compare different investments." }
      ],
      example: {
        inputs: "Initial Investment: $10,000, Final Value: $15,000",
        output: "ROI: 50% | Profit: $5,000"
      }
    },
    formula: {
      title: "ROI Formula",
      content: "ROI = [(Final Value - Initial Investment) / Initial Investment] × 100 | Or: ROI = (Gain from Investment / Cost of Investment) × 100",
      assumptions: [
        "Basic ROI doesn't account for time — a 50% return in 1 year is better than 50% in 5 years",
        "Doesn't include transaction costs, taxes, or fees",
        "For time-adjusted comparison, use annualized ROI"
      ]
    },
    useCases: {
      title: "When to Calculate ROI",
      cases: [
        "Evaluating stock or mutual fund performance",
        "Comparing real estate investment opportunities",
        "Measuring marketing campaign effectiveness",
        "Assessing business decisions and capital expenditures"
      ]
    },
    tips: {
      title: "Using ROI Effectively",
      items: [
        "Always compare ROI over the same time period — annualize returns for fair comparison",
        "Consider risk alongside ROI — higher returns often come with higher risk",
        "Include ALL costs in your calculation (fees, maintenance, taxes) for accurate ROI",
        "For ongoing investments, calculate both realized (actual) and unrealized (paper) gains"
      ]
    },
    faq: [
      { question: "What's a good ROI?", answer: "It depends on the investment type and risk. Stock market historically returns 7-10% annually. Real estate might target 8-12%. Low-risk savings accounts offer 4-5%. A 'good' ROI beats comparable alternatives at similar risk levels." },
      { question: "How do I annualize ROI?", answer: "Annualized ROI = [(1 + ROI)^(1/years) - 1] × 100. For example, 50% ROI over 3 years = [(1.5)^(1/3) - 1] × 100 = 14.5% annualized. This allows fair comparison across different time periods." },
      { question: "What's the difference between ROI and profit?", answer: "Profit is the absolute dollar amount gained. ROI is percentage return relative to investment. $5,000 profit on $10,000 is 50% ROI. $5,000 profit on $100,000 is only 5% ROI. ROI helps compare efficiency." },
      { question: "Can ROI be negative?", answer: "Yes. A negative ROI means you lost money on the investment. If you invested $10,000 and it's now worth $8,000, your ROI is -20%. Negative ROI helps quantify the extent of investment losses." }
    ],
    relatedCalculators: [
      { name: "Investment Calculator", path: "/investment" },
      { name: "Compound Interest Calculator", path: "/compound-interest" },
      { name: "Retirement Calculator", path: "/retirement" },
      { name: "Percentage Calculator", path: "/percentage" }
    ],
    disclaimer: "ROI calculations are simplified estimates. Actual returns vary due to taxes, fees, and market conditions. Consult a financial professional for investment decisions."
  },

  salary: {
    intro: {
      title: "Convert Your Salary Between Pay Periods",
      paragraphs: [
        "Understanding your true compensation is essential for budgeting, job comparisons, and financial planning. Our salary calculator converts between hourly, daily, weekly, bi-weekly, semi-monthly, monthly, and annual amounts — helping you see your earnings from every angle.",
        "Whether you're evaluating a new job offer, converting contractor rates to equivalent salaries, or just want to understand how your paycheck breaks down, this calculator provides instant, accurate conversions."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Your Salary Amount", description: "Input your current salary or wage rate." },
        { title: "Select Pay Period", description: "Choose how often you're paid (hourly, weekly, monthly, annually, etc.)." },
        { title: "Enter Hours Per Week", description: "Standard is 40 hours, but adjust if different." },
        { title: "View All Conversions", description: "See your salary broken down across all pay period types." }
      ],
      example: {
        inputs: "Annual Salary: $75,000, 40 hours/week",
        output: "Hourly: $36.06 | Monthly: $6,250 | Bi-weekly: $2,885"
      }
    },
    formula: {
      title: "Salary Conversion Formulas",
      content: "Hourly → Annual: Hourly × Hours/Week × 52 | Annual → Hourly: Annual ÷ (Hours/Week × 52) | Monthly: Annual ÷ 12 | Bi-weekly: Annual ÷ 26",
      assumptions: [
        "Assumes 52 weeks per year",
        "Does not account for paid time off, holidays, or unpaid leave",
        "Gross salary only — taxes and deductions reduce take-home pay"
      ]
    },
    useCases: {
      title: "When Salary Conversion Helps",
      cases: [
        "Comparing job offers with different pay structures (hourly vs. salary)",
        "Converting freelance/contract rates to understand equivalent full-time salary",
        "Budgeting based on your actual payment schedule",
        "Negotiating raises by understanding the impact across pay periods"
      ]
    },
    tips: {
      title: "Salary Negotiation Tips",
      items: [
        "Know your market value — use sites like Glassdoor, LinkedIn Salary, and BLS data",
        "Consider total compensation, not just base salary — benefits, 401(k) match, and bonuses add significant value",
        "When negotiating, speak in annual terms for bigger numbers ($5,000 sounds better than $2.40/hour raise)",
        "Factor in commute costs and time when comparing jobs — a 30-minute longer commute costs time and money"
      ]
    },
    faq: [
      { question: "How do I calculate take-home pay?", answer: "Take-home pay = Gross salary minus federal taxes, state taxes, Social Security (6.2%), Medicare (1.45%), health insurance, and retirement contributions. Exact amount depends on your tax bracket, deductions, and benefit elections." },
      { question: "Is it better to be paid hourly or salary?", answer: "It depends. Salary provides income stability and often better benefits. Hourly may earn overtime (1.5x) for hours over 40. Exempt (salary) employees aren't paid overtime but often have more flexibility." },
      { question: "How does overtime affect annual salary?", answer: "Overtime at 1.5x your hourly rate adds up quickly. Working 50 hours/week instead of 40 (10 hours overtime) at $25/hour adds $375/week or $19,500/year to your income." },
      { question: "What's a living wage vs. minimum wage?", answer: "Minimum wage is the legal minimum employers must pay. Living wage is what you need to cover basic expenses in your area. MIT's Living Wage Calculator shows living wages vary dramatically by location — from $15/hour to $25+/hour." }
    ],
    relatedCalculators: [
      { name: "Tip Calculator", path: "/tip" },
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Retirement Calculator", path: "/retirement" },
      { name: "Investment Calculator", path: "/investment" }
    ]
  },

  tip: {
    intro: {
      title: "Calculate Tips and Split Bills Easily",
      paragraphs: [
        "Dining out, getting a haircut, or taking a cab? Our tip calculator helps you figure out the right tip amount and easily split the bill among friends. No more awkward math at the table or wondering if you're tipping appropriately for the service received.",
        "Tipping customs vary by service type and location. This calculator supports various tip percentages and makes bill splitting simple, ensuring everyone pays their fair share without the headache of manual calculations."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Bill Amount", description: "The total bill before tip (pre-tax for restaurants if you prefer)." },
        { title: "Select Tip Percentage", description: "Choose 15%, 18%, 20%, 25%, or enter a custom amount." },
        { title: "Enter Number of People", description: "How many people are splitting the bill (1 for just yourself)." },
        { title: "View Results", description: "See tip amount, total bill, and each person's share." }
      ],
      example: {
        inputs: "Bill: $85.50, Tip: 20%, Split: 4 people",
        output: "Tip: $17.10 | Total: $102.60 | Per Person: $25.65"
      }
    },
    useCases: {
      title: "When to Use This Calculator",
      cases: [
        "Restaurant dining — calculating appropriate tip for servers",
        "Ride-sharing and taxi services",
        "Hair salons, barber shops, and spas",
        "Food delivery and other service industry tipping"
      ]
    },
    tips: {
      title: "Tipping Etiquette Guide",
      items: [
        "Restaurants: 15-20% is standard, 20%+ for excellent service. Pre-pandemic, 18% was average; post-pandemic, 20% has become the new norm",
        "Bars: $1-2 per drink or 15-20% of tab",
        "Food delivery: 15-20%, minimum $3-5 especially for difficult deliveries (apartments, bad weather)",
        "Hair/beauty services: 15-20% to the service provider",
        "Hotels: $2-5/night for housekeeping, $1-2/bag for bell staff"
      ]
    },
    faq: [
      { question: "Should I tip on tax or pre-tax amount?", answer: "Traditionally, tipping on the pre-tax amount is correct, but many people tip on the total for simplicity. The difference is usually small. For a $100 bill with 8% tax, tipping 20% on pre-tax is $20 vs. $21.60 on post-tax." },
      { question: "Is tipping mandatory in the US?", answer: "Legally no, but socially yes for most services. US service workers often earn below minimum wage with tips making up the difference. Not tipping is considered very poor etiquette and hurts workers' income." },
      { question: "How much should I tip for poor service?", answer: "Consider tipping 10-15% and speaking with management about specific issues. Leaving no tip punishes the server for problems that may be the kitchen's or restaurant's fault. If service was truly terrible, 10% with feedback is appropriate." },
      { question: "Do I tip at counter-service restaurants?", answer: "Counter-service tipping is optional, typically 0-15%. The tip jar or screen suggestion is not an obligation. Many people tip $1-2 or skip it entirely for counter service without guilt." }
    ],
    relatedCalculators: [
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Salary Calculator", path: "/salary" },
      { name: "Currency Converter", path: "/currency" },
      { name: "Basic Calculator", path: "/calculator" }
    ]
  },

  currency: {
    intro: {
      title: "Convert Currencies with Live Exchange Rates",
      paragraphs: [
        "Whether you're traveling abroad, shopping from international websites, sending money overseas, or managing a global business, accurate currency conversion is essential. Our currency converter provides real-time exchange rates for 150+ world currencies.",
        "Exchange rates fluctuate constantly due to economic conditions, interest rates, and global events. Our calculator helps you understand the current value of your money in different currencies, making financial decisions easier whether you're a tourist, investor, or international shopper."
      ]
    },
    howToUse: {
      steps: [
        { title: "Select Source Currency", description: "Choose the currency you're converting from (e.g., USD)." },
        { title: "Enter Amount", description: "Input the amount you want to convert." },
        { title: "Select Target Currency", description: "Choose the currency you're converting to (e.g., EUR)." },
        { title: "View Conversion", description: "See the converted amount based on current exchange rates." }
      ],
      example: {
        inputs: "Amount: 1,000 USD to EUR",
        output: "Approximately 920 EUR (rate varies)"
      }
    },
    formula: {
      title: "Currency Conversion Formula",
      content: "Converted Amount = Original Amount × Exchange Rate | Example: $100 × 0.92 (EUR/USD rate) = €92",
      assumptions: [
        "Rates shown are mid-market rates (interbank rates)",
        "Actual rates from banks/services include fees and spreads",
        "Rates fluctuate continuously during market hours"
      ]
    },
    useCases: {
      title: "When You Need Currency Conversion",
      cases: [
        "Travel planning — budgeting for international trips",
        "International online shopping — comparing prices across sites",
        "Remittances — sending money to family abroad",
        "Business — invoicing international clients or paying overseas vendors"
      ]
    },
    tips: {
      title: "Getting the Best Exchange Rates",
      items: [
        "Avoid airport and hotel currency exchanges — they typically have the worst rates (5-10% worse)",
        "Use ATMs abroad for cash — your bank's network usually offers better rates than currency exchanges",
        "Pay in local currency when given the choice — 'dynamic currency conversion' offers poor rates",
        "Consider a no-foreign-transaction-fee credit card for international purchases"
      ]
    },
    faq: [
      { question: "Why is the rate I get different from what I see here?", answer: "This calculator shows mid-market rates. Banks and exchange services add a margin (spread) of 1-8% to make profit. Services like Wise (TransferWise) offer rates closer to mid-market; traditional banks and airport exchanges have larger spreads." },
      { question: "When is the best time to exchange currency?", answer: "Timing the market is difficult even for professionals. If you need currency for travel, exchanging when rates are favorable is good, but don't stress over small fluctuations. For large amounts, consider dollar-cost averaging over time." },
      { question: "Are cryptocurrency exchanges better for international transfers?", answer: "Sometimes. Crypto can offer lower fees for large transfers, but volatility adds risk. For stability and simplicity, services like Wise, Remitly, or PayPal often beat traditional banks while avoiding crypto's price swings." },
      { question: "How much cash should I bring when traveling?", answer: "Bring enough for tips and small purchases (usually $100-300 equivalent). Use credit cards for major purchases (better rates, fraud protection). Have a backup debit card. Research your destination — some places are cash-heavy." }
    ],
    relatedCalculators: [
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Tip Calculator", path: "/tip" },
      { name: "ROI Calculator", path: "/roi" },
      { name: "Investment Calculator", path: "/investment" }
    ]
  },

  // ==================== MATH & SCIENCE ====================
  calculator: {
    intro: {
      title: "Your Free Online Calculator",
      paragraphs: [
        "Sometimes you need a simple, reliable calculator without the clutter. Our basic calculator handles all fundamental arithmetic operations — addition, subtraction, multiplication, and division — with a clean, intuitive interface that works on any device.",
        "Whether you're balancing your checkbook, helping kids with homework, calculating a quick percentage, or just need to crunch some numbers fast, this calculator is always ready. No ads blocking your view, no complicated buttons you'll never use — just straightforward math."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Numbers", description: "Click the number buttons or type on your keyboard." },
        { title: "Select Operation", description: "Choose +, -, ×, or ÷ for your calculation." },
        { title: "Continue or Calculate", description: "Chain operations or press = to see the result." },
        { title: "Clear and Start Over", description: "Press C to clear and start a new calculation." }
      ],
      example: {
        inputs: "125 + 847 × 3",
        output: "2,666 (follows standard order of operations)"
      }
    },
    useCases: {
      title: "Everyday Calculator Uses",
      cases: [
        "Quick arithmetic for shopping, budgeting, or splitting costs",
        "Homework help and educational practice",
        "Work calculations when you need a fast answer",
        "Any situation where you need basic math on the go"
      ]
    },
    tips: {
      title: "Calculator Tips",
      items: [
        "Use keyboard input for faster calculations — numbers and operators work like a physical calculator",
        "Chain calculations without pressing = each time for running totals",
        "Remember order of operations: multiplication and division before addition and subtraction"
      ]
    },
    faq: [
      { question: "Does this follow order of operations?", answer: "Yes! Our calculator respects mathematical order of operations (PEMDAS/BODMAS). Multiplication and division are calculated before addition and subtraction." },
      { question: "Can I use my keyboard?", answer: "Absolutely. Use number keys for digits, +, -, *, / for operations, Enter for equals, and Escape or C to clear." },
      { question: "Is there a calculation limit?", answer: "The calculator handles numbers up to JavaScript's safe integer limit (about 9 quadrillion). For most practical purposes, you won't hit any limits." }
    ],
    relatedCalculators: [
      { name: "Scientific Calculator", path: "/scientific" },
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Fraction Calculator", path: "/fraction" },
      { name: "Statistics Calculator", path: "/statistics" }
    ]
  },

  percentage: {
    intro: {
      title: "Solve Any Percentage Problem",
      paragraphs: [
        "Percentages are everywhere — discounts, tips, taxes, test scores, interest rates, statistics. Our percentage calculator solves all common percentage problems: finding a percentage of a number, calculating what percent one number is of another, and determining percentage increase or decrease.",
        "Whether you're figuring out a sale price, calculating a tip, understanding your exam grade, or analyzing business metrics, this calculator makes percentage math simple and error-free."
      ]
    },
    howToUse: {
      steps: [
        { title: "Choose Calculation Type", description: "Select which percentage problem you need to solve." },
        { title: "Enter Known Values", description: "Input the numbers you have." },
        { title: "Calculate", description: "Click calculate to see your answer with step-by-step explanation." }
      ],
      example: {
        inputs: "What is 15% of 85? | 25 is what % of 200? | % change from 50 to 75?",
        output: "12.75 | 12.5% | 50% increase"
      }
    },
    formula: {
      title: "Percentage Formulas",
      content: "X% of Y = (X/100) × Y | X is what % of Y = (X/Y) × 100 | % Change = [(New - Old) / Old] × 100",
      assumptions: [
        "Results are mathematically precise",
        "Percentage change can be negative (decrease) or positive (increase)"
      ]
    },
    useCases: {
      title: "Common Percentage Calculations",
      cases: [
        "Shopping — calculating sale prices and discounts",
        "Finance — computing interest, returns, and tips",
        "Education — converting scores to percentages",
        "Business — analyzing growth, margins, and performance metrics"
      ]
    },
    tips: {
      title: "Percentage Shortcuts",
      items: [
        "To find 10%, move the decimal point one place left (10% of 85 = 8.5)",
        "To find 5%, find 10% and halve it",
        "To find 15%, find 10% + 5%",
        "To find 1%, move decimal two places left, then multiply as needed"
      ]
    },
    faq: [
      { question: "What's the difference between percentage points and percent?", answer: "If interest rates go from 5% to 7%, that's a 2 percentage point increase but a 40% increase. Percentage points measure absolute difference between rates; percent measures relative change." },
      { question: "How do I calculate discount price?", answer: "Multiply the original price by (1 - discount rate). For 20% off $50: $50 × 0.80 = $40. Or: $50 × 0.20 = $10 discount; $50 - $10 = $40." },
      { question: "How do I add percentages correctly?", answer: "You can only add percentages if they're of the same base. 10% sales tax + 5% tip on a meal: calculate each separately from the subtotal, then add. For sequential percentages (e.g., discounts), apply them in order to the running total." }
    ],
    relatedCalculators: [
      { name: "Basic Calculator", path: "/calculator" },
      { name: "Tip Calculator", path: "/tip" },
      { name: "ROI Calculator", path: "/roi" },
      { name: "Fraction Calculator", path: "/fraction" }
    ]
  },

  scientific: {
    intro: {
      title: "Advanced Scientific Calculator",
      paragraphs: [
        "Need more than basic arithmetic? Our scientific calculator provides advanced mathematical functions for students, engineers, scientists, and professionals. Perform trigonometric calculations, logarithms, exponents, factorials, and more — all in your browser.",
        "This calculator handles everything from simple algebra to complex engineering calculations. It's designed to be intuitive while providing the power users need for advanced mathematics."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Values", description: "Input numbers using the keypad or keyboard." },
        { title: "Select Function", description: "Choose from trig, log, exponent, and other scientific functions." },
        { title: "Handle Parentheses", description: "Use parentheses for complex expressions and order of operations." },
        { title: "View Results", description: "See your answer and use it for further calculations." }
      ],
      example: {
        inputs: "sin(45°), log₁₀(1000), 2^8, 5!",
        output: "0.707..., 3, 256, 120"
      }
    },
    useCases: {
      title: "Who Uses Scientific Calculators",
      cases: [
        "Students in algebra, trigonometry, calculus, and physics courses",
        "Engineers performing technical calculations",
        "Scientists analyzing data and formulas",
        "Anyone needing advanced mathematical functions"
      ]
    },
    tips: {
      title: "Scientific Calculator Tips",
      items: [
        "Toggle between degrees and radians for trigonometric functions based on your needs",
        "Use memory functions (M+, M-, MR, MC) to store intermediate results",
        "Parentheses help ensure correct order of operations in complex expressions",
        "Check your mode (DEG/RAD) before trigonometric calculations — wrong mode = wrong answers"
      ]
    },
    faq: [
      { question: "When should I use degrees vs. radians?", answer: "Use degrees for most everyday calculations (angles, slopes, direction). Use radians for calculus, physics formulas, and engineering applications. π radians = 180 degrees." },
      { question: "What's the difference between ln and log?", answer: "ln is the natural logarithm (base e ≈ 2.718). log usually means log₁₀ (base 10). In many scientific contexts, 'log' means natural log, so always confirm which base is expected." },
      { question: "How do I calculate compound expressions?", answer: "Use parentheses to group operations. For example, to calculate (3+4)×(5-2), enter it exactly that way. The calculator respects standard order of operations." }
    ],
    relatedCalculators: [
      { name: "Basic Calculator", path: "/calculator" },
      { name: "Statistics Calculator", path: "/statistics" },
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Fraction Calculator", path: "/fraction" }
    ]
  },

  fraction: {
    intro: {
      title: "Calculate Fractions Made Easy",
      paragraphs: [
        "Working with fractions doesn't have to be frustrating. Our fraction calculator handles addition, subtraction, multiplication, and division of fractions — plus simplification and decimal conversion. Perfect for homework, cooking, construction, and any situation involving fractional numbers.",
        "Whether you're dealing with mixed numbers, improper fractions, or simple fractions, this calculator does the heavy lifting and shows results in the simplest form."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter First Fraction", description: "Input the numerator (top) and denominator (bottom)." },
        { title: "Select Operation", description: "Choose add (+), subtract (-), multiply (×), or divide (÷)." },
        { title: "Enter Second Fraction", description: "Input the second fraction's values." },
        { title: "Calculate", description: "See your answer as a simplified fraction and decimal." }
      ],
      example: {
        inputs: "3/4 + 2/3",
        output: "17/12 or 1 5/12 (≈ 1.417)"
      }
    },
    formula: {
      title: "Fraction Operation Rules",
      content: "Addition/Subtraction: Find common denominator, then add/subtract numerators | Multiplication: (a/b) × (c/d) = ac/bd | Division: (a/b) ÷ (c/d) = (a/b) × (d/c)",
      assumptions: [
        "Results are automatically reduced to lowest terms",
        "Mixed numbers are converted as needed"
      ]
    },
    useCases: {
      title: "Fraction Calculation Scenarios",
      cases: [
        "Cooking and baking — adjusting recipe proportions",
        "Construction and woodworking — measuring materials",
        "School homework — practicing fraction arithmetic",
        "Sewing and crafts — calculating fabric measurements"
      ]
    },
    tips: {
      title: "Fraction Tips",
      items: [
        "To add fractions, first find the Least Common Denominator (LCD)",
        "When multiplying, simplify before calculating to keep numbers smaller",
        "To divide fractions, flip the second fraction and multiply",
        "Converting to decimals can help verify your answer makes sense"
      ]
    },
    faq: [
      { question: "How do I convert a fraction to a decimal?", answer: "Divide the numerator by the denominator. For 3/4: 3 ÷ 4 = 0.75. Some fractions create repeating decimals like 1/3 = 0.333..." },
      { question: "What's the difference between proper, improper, and mixed fractions?", answer: "Proper: numerator < denominator (3/4). Improper: numerator ≥ denominator (7/4). Mixed: whole number + fraction (1 3/4). Our calculator converts between these automatically." },
      { question: "How do I simplify a fraction?", answer: "Find the Greatest Common Factor (GCF) of numerator and denominator, then divide both by it. For 6/8: GCF is 2, so 6÷2 / 8÷2 = 3/4." }
    ],
    relatedCalculators: [
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Basic Calculator", path: "/calculator" },
      { name: "Scientific Calculator", path: "/scientific" },
      { name: "Statistics Calculator", path: "/statistics" }
    ]
  },

  statistics: {
    intro: {
      title: "Statistical Analysis Calculator",
      paragraphs: [
        "Understanding data requires the right statistical tools. Our statistics calculator computes essential measures including mean (average), median, mode, range, variance, and standard deviation — the building blocks of data analysis.",
        "Whether you're a student learning statistics, a researcher analyzing data, or a professional making data-driven decisions, this calculator provides quick, accurate statistical computations."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Your Data", description: "Input numbers separated by commas or spaces." },
        { title: "Calculate", description: "Click calculate to compute all statistical measures." },
        { title: "Review Results", description: "See mean, median, mode, range, variance, standard deviation, and more." }
      ],
      example: {
        inputs: "10, 20, 30, 40, 50, 50",
        output: "Mean: 33.3 | Median: 35 | Mode: 50 | Range: 40 | Std Dev: 15.06"
      }
    },
    formula: {
      title: "Key Statistical Formulas",
      content: "Mean = Σx / n | Variance = Σ(x - mean)² / n | Standard Deviation = √Variance | Median = Middle value when sorted | Mode = Most frequent value",
      assumptions: [
        "Calculations assume population data unless otherwise specified",
        "For sample statistics, degrees of freedom (n-1) adjustments apply"
      ]
    },
    useCases: {
      title: "When to Use Statistics",
      cases: [
        "Academic research — analyzing experimental data",
        "Business analytics — understanding performance metrics",
        "Quality control — monitoring manufacturing processes",
        "Finance — evaluating investment volatility and risk"
      ]
    },
    tips: {
      title: "Statistical Insights",
      items: [
        "Mean is affected by outliers; median is more robust for skewed data",
        "Standard deviation shows how spread out data is — lower means more consistent",
        "Use mode for categorical data or to find the most common value",
        "Range gives a quick sense of spread but is highly sensitive to outliers"
      ]
    },
    faq: [
      { question: "What's the difference between sample and population statistics?", answer: "Population statistics use all data points. Sample statistics estimate population parameters from a subset. Sample variance divides by (n-1) instead of n to correct for bias (Bessel's correction)." },
      { question: "When should I use mean vs. median?", answer: "Use mean when data is symmetric without outliers. Use median when data is skewed or has outliers. For income data, median is usually more representative since a few very high incomes skew the mean upward." },
      { question: "What does standard deviation tell me?", answer: "Standard deviation measures spread from the mean. In a normal distribution, about 68% of data falls within ±1 SD, 95% within ±2 SD, and 99.7% within ±3 SD. Higher SD = more variability." }
    ],
    relatedCalculators: [
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Scientific Calculator", path: "/scientific" },
      { name: "Basic Calculator", path: "/calculator" },
      { name: "Fraction Calculator", path: "/fraction" }
    ]
  },

  // ==================== DATE & TIME ====================
  age: {
    intro: {
      title: "Calculate Your Exact Age",
      paragraphs: [
        "Ever wondered exactly how old you are? Our age calculator determines your precise age in years, months, and days — perfect for birthdays, official documents, or just satisfying your curiosity.",
        "Beyond simple age, you can discover interesting facts like how many days you've lived, weeks until your next birthday, or exact time elapsed since any date. Great for milestone celebrations and planning."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Your Birth Date", description: "Select your date of birth from the calendar or type it in." },
        { title: "Select Calculation Date (Optional)", description: "Defaults to today; change to calculate age at a specific date." },
        { title: "View Your Age", description: "See your age broken down by years, months, days, and more." }
      ],
      example: {
        inputs: "Birth Date: January 15, 1990 | Today: July 1, 2024",
        output: "34 years, 5 months, 16 days | 12,585 days total"
      }
    },
    useCases: {
      title: "Age Calculator Uses",
      cases: [
        "Calculating exact age for official forms and documents",
        "Planning milestone birthday celebrations",
        "Determining eligibility based on age requirements",
        "Fun facts about your life timeline"
      ]
    },
    tips: {
      title: "Fun Age Facts",
      items: [
        "10,000 days old is about 27 years and 4 months — celebrate your decimal milestone!",
        "Your 'golden birthday' is when your age matches your birth date (turning 15 on the 15th)",
        "You've circled the sun the same number of times as your age in years",
        "Every 4 years, leap day babies (Feb 29) get to celebrate on their actual birthday"
      ]
    },
    faq: [
      { question: "How are months calculated?", answer: "Months are calculated based on calendar months. If you were born on January 31 and it's March 15, that's 1 month and 15 days (not all months have the same length)." },
      { question: "Does the calculator account for leap years?", answer: "Yes! The calculator properly handles leap years and varying month lengths for accurate day counts." },
      { question: "Can I calculate age at a future date?", answer: "Yes! Enter a future date as your 'calculate to' date to see how old you'll be at a specific future time." }
    ],
    relatedCalculators: [
      { name: "Date Difference Calculator", path: "/date-difference" },
      { name: "Time Calculator", path: "/time-calculator" },
      { name: "BMI Calculator", path: "/bmi" },
      { name: "Retirement Calculator", path: "/retirement" }
    ]
  },

  dateDifference: {
    intro: {
      title: "Calculate Time Between Any Two Dates",
      paragraphs: [
        "Need to know the exact time between two dates? Our date difference calculator computes the span in years, months, weeks, and days. Perfect for project planning, event countdowns, or tracking how long it's been since a significant moment.",
        "Whether you're counting down to your wedding, calculating project timelines, or figuring out how long you've been at your job, this calculator provides precise results instantly."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Start Date", description: "Select or type your starting date." },
        { title: "Enter End Date", description: "Select or type your ending date." },
        { title: "View Duration", description: "See the difference in multiple formats (years/months/days, total days, weeks)." }
      ],
      example: {
        inputs: "Start: January 1, 2024 | End: December 31, 2024",
        output: "365 days | 52 weeks, 1 day | 12 months"
      }
    },
    useCases: {
      title: "Date Calculation Scenarios",
      cases: [
        "Project management — calculating sprint lengths and deadlines",
        "Event planning — countdown to weddings, vacations, graduations",
        "Employment — calculating tenure or time in position",
        "Legal/financial — determining periods for contracts, leases, or loans"
      ]
    },
    tips: {
      title: "Planning Tips",
      items: [
        "Business days exclude weekends — a 14-day period typically has 10 business days",
        "When planning, add buffer days for unexpected delays",
        "Quarter calculations: Q1 = 90-91 days, Q2 = 91 days, Q3 = 92 days, Q4 = 92 days",
        "Fiscal years may differ from calendar years depending on your organization"
      ]
    },
    faq: [
      { question: "Does this include the start and end dates?", answer: "By default, we calculate the time between dates (exclusive of end date). A period from Jan 1 to Jan 3 is 2 days. Some contexts may want inclusive counts — add 1 day if needed." },
      { question: "How do I calculate business days?", answer: "This calculator shows total days. To estimate business days, multiply by 5/7 (or about 71%). For precise business day counts excluding holidays, use a specialized business day calculator." },
      { question: "Can I calculate dates in the past?", answer: "Yes! Enter any past dates to see how long ago something occurred or the duration of past events." }
    ],
    relatedCalculators: [
      { name: "Age Calculator", path: "/age" },
      { name: "Time Calculator", path: "/time-calculator" },
      { name: "Retirement Calculator", path: "/retirement" },
      { name: "Investment Calculator", path: "/investment" }
    ]
  },

  timeCalculator: {
    intro: {
      title: "Add and Subtract Time Easily",
      paragraphs: [
        "Working with hours, minutes, and seconds can get confusing fast — especially when calculations cross hour or day boundaries. Our time calculator handles the tricky math of adding and subtracting time durations, perfect for tracking work hours or calculating durations.",
        "Whether you're totaling timesheet hours, calculating recipe cooking times, or figuring out how long something takes, this calculator eliminates the mental math and prevents errors."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter First Time", description: "Input hours, minutes, and optionally seconds." },
        { title: "Select Operation", description: "Choose to add (+) or subtract (-) time." },
        { title: "Enter Second Time", description: "Input the duration to add or subtract." },
        { title: "View Result", description: "See the result in hours:minutes:seconds format." }
      ],
      example: {
        inputs: "2:45:30 + 1:30:45",
        output: "4:16:15 (4 hours, 16 minutes, 15 seconds)"
      }
    },
    useCases: {
      title: "Time Calculation Uses",
      cases: [
        "Payroll — totaling employee work hours",
        "Cooking — combining prep and cooking times",
        "Fitness — adding up workout durations",
        "Project tracking — calculating total time spent on tasks"
      ]
    },
    tips: {
      title: "Time Management Tips",
      items: [
        "For payroll, always round to company policy (typically 15-minute increments)",
        "Convert to decimal hours for easier calculations: 30 minutes = 0.5 hours, 15 minutes = 0.25 hours",
        "Remember time zones when calculating across regions",
        "24-hour format eliminates AM/PM confusion for scheduling"
      ]
    },
    faq: [
      { question: "How do I convert minutes to decimal hours?", answer: "Divide minutes by 60. For example: 45 minutes = 45/60 = 0.75 hours. So 2:45 = 2.75 hours. This is helpful for timesheet calculations and billing." },
      { question: "What if the result is negative?", answer: "A negative result means the second time is larger than the first. The calculator will show the absolute difference and indicate it's negative or show it as a deficit." },
      { question: "Can I calculate across days?", answer: "Yes! If your result exceeds 24 hours, it will show as 25:30:00 (25 hours, 30 minutes) or can be converted to 1 day, 1 hour, 30 minutes." }
    ],
    relatedCalculators: [
      { name: "Date Difference Calculator", path: "/date-difference" },
      { name: "Age Calculator", path: "/age" },
      { name: "Salary Calculator", path: "/salary" },
      { name: "Basic Calculator", path: "/calculator" }
    ]
  },

  gpa: {
    intro: {
      title: "Understanding GPA Calculator",
      paragraphs: [
        "Grade Point Average (GPA) is a standardized method of measuring academic achievement in the United States. Most high schools and colleges use a 4.0 scale where an A equals 4.0 points. Your GPA is calculated by averaging the grade points you earn in each course, weighted by credit hours.",
        "Our free GPA calculator helps students quickly determine their semester or cumulative GPA. Whether you're tracking your academic progress, planning for graduate school applications, or determining scholarship eligibility, knowing your exact GPA is essential for academic success."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Course Name", description: "Optionally add the course name to keep track of your classes." },
        { title: "Enter Credit Hours", description: "Input the number of credit hours for each course (typically 1-5 credits)." },
        { title: "Select Your Grade", description: "Choose the letter grade you received (A+ through F)." },
        { title: "Add More Courses", description: "Click 'Add Course' to include additional classes in your calculation." },
        { title: "Calculate", description: "Click Calculate GPA to see your weighted grade point average." }
      ],
      example: {
        inputs: "Course 1: 3 credits, A (4.0) | Course 2: 4 credits, B+ (3.3) | Course 3: 3 credits, A- (3.7)",
        output: "GPA = (3×4.0 + 4×3.3 + 3×3.7) ÷ 10 = 3.63"
      }
    },
    formula: {
      title: "How GPA is Calculated",
      content: "GPA = Σ(Credit Hours × Grade Points) ÷ Total Credit Hours",
      assumptions: [
        "Uses standard 4.0 GPA scale",
        "Each letter grade corresponds to a specific point value",
        "Credit hours weight each course's contribution to overall GPA"
      ]
    },
    useCases: {
      title: "Who Should Use This Calculator",
      cases: [
        "High school students tracking academic progress for college applications",
        "College students monitoring their semester and cumulative GPA",
        "Students applying for scholarships with GPA requirements",
        "Graduate school applicants needing to verify their undergraduate GPA",
        "Academic advisors helping students understand their standing"
      ]
    },
    tips: {
      title: "Tips for GPA Success",
      items: [
        "Calculate your GPA before the semester ends to know if you need to improve",
        "Higher credit courses have more impact on your GPA — focus on those",
        "Most graduate programs require a minimum 3.0 GPA for admission",
        "Dean's List typically requires a 3.5 GPA or higher",
        "Retaking a course may replace the old grade in GPA calculations (check your school's policy)"
      ]
    },
    faq: [
      { question: "What is a good GPA?", answer: "A GPA of 3.0 (B average) is generally considered good. A 3.5+ is very good, and 3.7+ is excellent. For competitive graduate programs or scholarships, aim for 3.5 or higher." },
      { question: "What's the difference between semester and cumulative GPA?", answer: "Semester GPA reflects only the current term's grades, while cumulative GPA includes all courses taken throughout your academic career. Most schools report both on transcripts." },
      { question: "Do all schools use the 4.0 scale?", answer: "Most U.S. high schools and colleges use the 4.0 scale, but some use different scales (5.0 for weighted, 10.0, or percentage-based). Our calculator uses the standard 4.0 unweighted scale." },
      { question: "How do plus and minus grades affect GPA?", answer: "Plus grades add 0.3 points (B+ = 3.3) and minus grades subtract 0.3 points (B- = 2.7) from the base grade value. A+ is typically still 4.0, though some schools award 4.3." },
      { question: "Can I raise my GPA significantly?", answer: "Yes, but it becomes harder as you accumulate more credits. Early in college, one great semester can significantly boost your GPA. Later, consistent good grades are needed for meaningful improvement." }
    ],
    relatedCalculators: [
      { name: "Percentage Calculator", path: "/percentage-calculator" },
      { name: "Statistics Calculator", path: "/statistics-calculator" },
      { name: "Basic Calculator", path: "/online-calculator" },
      { name: "Fraction Calculator", path: "/fraction-calculator" }
    ]
  },

  discount: {
    intro: {
      title: "Understanding Discount Calculations",
      paragraphs: [
        "Whether you're shopping during Black Friday sales, using coupons, or comparing deals, understanding how discounts work helps you make smarter purchasing decisions. Our discount calculator instantly shows you exactly how much you'll save and what you'll pay.",
        "Beyond simple percentage-off calculations, this tool helps you find the original price of sale items, determine what percent off you're getting, and even calculate stacked discounts. Master these calculations to become a savvy shopper and never overpay again."
      ]
    },
    howToUse: {
      steps: [
        { title: "Enter Original Price", description: "Input the item's original or regular price before any discounts." },
        { title: "Enter Discount Percentage", description: "Input the discount percentage (e.g., 25 for 25% off)." },
        { title: "Calculate", description: "Click calculate to see your savings and final price." },
        { title: "Try Other Calculators", description: "Use the percent-off finder or double discount calculator for more complex scenarios." }
      ],
      example: {
        inputs: "Original Price: $80, Discount: 25%",
        output: "You Save: $20, Final Price: $60"
      }
    },
    formula: {
      title: "Discount Calculation Formulas",
      content: "Discount Amount = Original Price × (Discount % ÷ 100) | Final Price = Original Price - Discount Amount | Percent Off = ((Original - Sale) ÷ Original) × 100",
      assumptions: [
        "Discounts are calculated on the original price unless stacked",
        "Stacked discounts are applied sequentially, not added together",
        "Tax is typically calculated on the final discounted price"
      ]
    },
    useCases: {
      title: "When to Use This Calculator",
      cases: [
        "Shopping during sales events like Black Friday, Cyber Monday, or Prime Day",
        "Comparing deals across different stores with various discount offers",
        "Calculating savings when using coupons or promo codes",
        "Figuring out the original price of clearance items",
        "Understanding stacked discounts (store discount + coupon)"
      ]
    },
    tips: {
      title: "Smart Shopping Tips",
      items: [
        "A 20% off coupon on top of 30% off is NOT 50% off — it's actually about 44% off",
        "Compare the final price, not just the discount percentage — $50 at 20% off beats $60 at 25% off",
        "Price per unit often matters more than total discount for bulk items",
        "Watch for 'up to X% off' — the biggest discounts may only apply to select items",
        "Calculate whether 'buy one get one 50% off' beats a straight 25% discount"
      ]
    },
    faq: [
      { question: "How do I calculate 20% off?", answer: "Multiply the price by 0.20 (or divide by 5) to get the discount amount. Then subtract from the original price. For $50 at 20% off: $50 × 0.20 = $10 discount, so final price is $40." },
      { question: "Why don't stacked discounts just add up?", answer: "Because the second discount applies to the already-reduced price. If you get 30% off then 20% off: First, $100 becomes $70. Then 20% off $70 = $14 more off, making it $56. That's 44% total, not 50%." },
      { question: "How do I find the original price from a sale price?", answer: "Divide the sale price by (1 - discount/100). If something is $60 after 25% off: $60 ÷ 0.75 = $80 original price." },
      { question: "Is 50% off the same as half price?", answer: "Yes! 50% off means you pay half the original price. A $100 item at 50% off costs $50." },
      { question: "What's a good discount percentage?", answer: "It depends on the item. For clothing, 40-60% off is common during sales. For electronics, 15-30% is typical. Luxury items rarely exceed 30% off. Always compare the final price to competitors." }
    ],
    relatedCalculators: [
      { name: "Percentage Calculator", path: "/percentage-calculator" },
      { name: "Tip Calculator", path: "/tip-calculator" },
      { name: "Salary Calculator", path: "/salary-calculator" },
      { name: "ROI Calculator", path: "/roi-calculator" }
    ]
  }
};
