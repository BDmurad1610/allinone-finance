import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, Calculator, Heart, DollarSign, Info, ShieldAlert, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const disclaimerFaqs = [
  {
    question: "Are the calculation results on MultiCalculator accurate?",
    answer: "We design our calculators using standard formulas and algorithms. However, results are estimates and may not account for all variables in your specific situation. Always verify important calculations with professionals."
  },
  {
    question: "Can I use health calculator results for medical decisions?",
    answer: "No. Health calculators like BMI, BMR, and Calorie calculators provide general estimates only. They should never replace professional medical advice, diagnosis, or treatment. Always consult healthcare providers for health decisions."
  },
  {
    question: "Are financial calculator results suitable for investment decisions?",
    answer: "Financial calculators provide educational estimates only. Actual returns, loan terms, and investment outcomes depend on many factors not captured in simple calculations. Consult certified financial advisors for investment decisions."
  },
  {
    question: "Who is responsible if I make a decision based on calculator results?",
    answer: "You are fully responsible for any decisions made using our tools. MultiCalculator provides informational tools only and accepts no liability for decisions, actions, or outcomes based on calculator results."
  },
  {
    question: "Do you guarantee the formulas used are correct?",
    answer: "While we use widely-accepted formulas and regularly review our calculators, we cannot guarantee absolute accuracy. Mathematical and scientific standards may vary, and edge cases may produce unexpected results."
  },
  {
    question: "Can I rely on currency or unit conversion rates?",
    answer: "Currency exchange rates and conversion factors may not reflect real-time market values. For financial transactions, always verify current rates with official sources or financial institutions."
  },
  {
    question: "What should I do if I find an error in a calculator?",
    answer: "We appreciate error reports! Please contact us through our Contact page with details about the issue. We continuously work to improve accuracy and fix any problems."
  },
  {
    question: "Does this disclaimer apply to all calculators on the site?",
    answer: "Yes, this disclaimer applies to all tools, calculators, converters, and content on MultiCalculator. Each calculator category may have additional specific disclaimers relevant to that field."
  }
];

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Disclaimer - MultiCalculator"
        description="Read the disclaimer for MultiCalculator. Understand the limitations of our free online calculator tools and your responsibilities as a user."
        keywords="disclaimer, multicalculator disclaimer, calculator accuracy, liability disclaimer, terms of use"
        canonicalUrl="https://www.multicalculator.online/disclaimer"
      />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <AlertTriangle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Disclaimer
            </h1>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            Last updated: January 2025. Please read this disclaimer carefully before using our calculator tools.
          </p>
          
          <div className="space-y-6">
            {/* General Disclaimer */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">General Disclaimer</h2>
                    <p className="text-muted-foreground mb-4">
                      All the information, tools, and calculators on MultiCalculator (<a href="https://www.multicalculator.online" className="text-primary hover:underline">www.multicalculator.online</a>) are published in good faith and for <strong>general informational and educational purposes only</strong>.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      MultiCalculator does not make any warranties about the completeness, reliability, accuracy, or suitability of this information for any particular purpose. Any reliance you place on such information is strictly at your own risk.
                    </p>
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                      <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                        ⚠️ Important: Calculator results are estimates only and should not be used as the sole basis for important decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Calculators Disclaimer */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-950/30">
                    <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Health & Fitness Calculator Disclaimer</h2>
                    <p className="text-muted-foreground mb-4">
                      Our health calculators—including BMI Calculator, BMR Calculator, Calorie Calculator, Body Fat Calculator, and Ideal Weight Calculator—are designed to provide general health estimates based on standard formulas.
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>These tools are NOT intended to:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Diagnose, treat, cure, or prevent any disease or medical condition</li>
                        <li>Replace professional medical advice, diagnosis, or treatment</li>
                        <li>Serve as a substitute for consultation with qualified healthcare providers</li>
                        <li>Provide personalized health recommendations</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you calculated on this website.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Calculators Disclaimer */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-950/30">
                    <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Financial Calculator Disclaimer</h2>
                    <p className="text-muted-foreground mb-4">
                      Our financial calculators—including Mortgage Calculator, Loan Calculator, Compound Interest Calculator, Investment Calculator, Retirement Calculator, EMI Calculator, and ROI Calculator—provide estimates based on the information you enter and standard financial formulas.
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Important considerations:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Results are hypothetical and do not guarantee actual financial outcomes</li>
                        <li>Interest rates, fees, taxes, and market conditions vary and change over time</li>
                        <li>These calculators do not account for all factors affecting financial decisions</li>
                        <li>Past performance does not guarantee future results</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      <strong>Not Financial Advice:</strong> Nothing on this website constitutes financial, investment, tax, or legal advice. Consult with certified financial planners, accountants, or legal professionals before making financial decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Math & Utility Calculators */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/30">
                    <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Math & Utility Calculator Disclaimer</h2>
                    <p className="text-muted-foreground mb-4">
                      Our mathematical and utility calculators—including Scientific Calculator, Percentage Calculator, Unit Converter, Date Calculator, and others—are designed for convenience and educational use.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      While we strive for accuracy, these tools may have limitations in handling extremely large numbers, complex equations, or unusual edge cases. Users should verify critical calculations independently, especially for academic, professional, or scientific purposes.
                    </p>
                    <p className="text-muted-foreground">
                      Currency conversion rates and unit conversion factors are based on commonly accepted standards but may not reflect real-time values or regional variations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-950/30">
                    <ShieldAlert className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
                    <p className="text-muted-foreground mb-4">
                      To the fullest extent permitted by applicable law, MultiCalculator and its operators shall not be liable for any:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-muted-foreground mb-4">
                      <li>Direct, indirect, incidental, special, consequential, or punitive damages</li>
                      <li>Loss of profits, revenue, data, or business opportunities</li>
                      <li>Personal injury or property damage arising from your use of our calculators</li>
                      <li>Errors, omissions, interruptions, or inaccuracies in calculations</li>
                      <li>Decisions made based on information provided by our tools</li>
                    </ul>
                    <p className="text-muted-foreground font-semibold">
                      Your use of MultiCalculator is entirely at your own risk. You assume full responsibility for any consequences resulting from your use of our tools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* External Links */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-3">External Links Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  MultiCalculator may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
                <p className="text-muted-foreground">
                  The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. We have no control over the nature, content, and availability of those sites.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Disclaimer */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-3">Changes to This Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this disclaimer from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. We encourage you to review this page periodically for the latest information.
                </p>
                <p className="text-muted-foreground">
                  Continued use of MultiCalculator after any changes to this disclaimer constitutes your acceptance of those changes.
                </p>
              </CardContent>
            </Card>

            {/* FAQs Section */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <HelpCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {disclaimerFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-3">Have Questions?</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this disclaimer or need clarification about our calculators, please reach out to us.
                </p>
                <a 
                  href="/contact-us" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}