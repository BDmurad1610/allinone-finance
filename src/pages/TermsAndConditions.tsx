import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { FileText, CheckCircle, AlertTriangle, Scale, ShieldCheck, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const termsFaqs = [
  {
    question: "Can I use MultiCalculator for commercial purposes?",
    answer: "Yes, you can use our calculators for personal and commercial purposes. However, you cannot redistribute, resell, or claim ownership of our content or tools."
  },
  {
    question: "Are the calculation results guaranteed to be accurate?",
    answer: "While we strive for accuracy, all calculators are provided for informational purposes only. We recommend verifying critical calculations with professional advisors, especially for financial or health-related decisions."
  },
  {
    question: "Do I need to create an account to use the calculators?",
    answer: "No, all our calculators are free to use without registration. Simply visit the calculator page and start using it immediately."
  },
  {
    question: "Can I embed MultiCalculator tools on my website?",
    answer: "Embedding or reproducing our calculators on other websites is not permitted without prior written consent. Please contact us if you're interested in partnership opportunities."
  },
  {
    question: "How do you handle my calculation data?",
    answer: "We do not store your calculation inputs or results. All calculations are performed locally in your browser for maximum privacy. Please refer to our Privacy Policy for more details."
  },
  {
    question: "What happens if I violate these terms?",
    answer: "Violation of these terms may result in restricted access to our services. We reserve the right to take appropriate action to protect our intellectual property and user community."
  },
  {
    question: "Can these terms change?",
    answer: "Yes, we may update these terms periodically. Continued use of MultiCalculator after changes constitutes acceptance of the new terms. We recommend reviewing this page regularly."
  },
  {
    question: "Who can I contact for questions about these terms?",
    answer: "If you have any questions about these Terms and Conditions, please visit our Contact Us page or reach out through the provided channels."
  }
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Terms and Conditions - MultiCalculator"
        description="Read the terms and conditions for using MultiCalculator. Understand your rights and responsibilities when using our free online calculator tools."
        keywords="terms and conditions, terms of service, multicalculator terms, user agreement, usage policy"
        canonicalUrl="https://www.multicalculator.online/terms-and-conditions"
      />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: January 2025. Please read these terms carefully before using MultiCalculator.
          </p>

          <div className="space-y-6">
            {/* Introduction */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Welcome to MultiCalculator</h2>
                    <p className="text-muted-foreground mb-4">
                      By accessing this website at <a href="https://www.multicalculator.online" className="text-primary hover:underline">https://www.multicalculator.online</a>, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>
                    <p className="text-muted-foreground">
                      If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use License */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3">Use License</h2>
                    <p className="text-muted-foreground mb-4">
                      Permission is granted to temporarily use the calculators and tools on MultiCalculator for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                    <p className="text-muted-foreground font-semibold mb-3">Under this license you may NOT:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        Modify or copy the materials or source code
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        Use the materials for any commercial purpose or public display
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        Attempt to decompile or reverse engineer any software
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        Remove any copyright or proprietary notations
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">✗</span>
                        Transfer the materials to another person or "mirror" on any other server
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      This license shall automatically terminate if you violate any of these restrictions and may be terminated by MultiCalculator at any time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-3">Cookies Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We employ the use of cookies to enhance your browsing experience. By accessing MultiCalculator, you agreed to use cookies in agreement with our Privacy Policy.
                </p>
                <p className="text-muted-foreground mb-4">
                  Most interactive websites use cookies to retrieve user details for each visit. Cookies are used by our website to enable certain functionality and to make it easier for visitors to use our website. Some of our partners may also use cookies.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Types of cookies we use:</strong> Essential cookies for site functionality, analytics cookies to understand usage patterns, and advertising cookies for personalized content.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibility */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-warning/10">
                    <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">User Responsibilities & Disclaimer</h2>
                    <p className="text-muted-foreground mb-4">
                      All calculators and tools provided on this website are for <strong>informational and educational purposes only</strong>. While we strive for accuracy, we do not guarantee 100% accuracy of calculations.
                    </p>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>Financial Calculators:</strong> Results should not be considered as financial advice. Consult a certified financial advisor for investment, loan, or tax decisions.
                      </p>
                      <p>
                        <strong>Health Calculators:</strong> Results are general estimates and should not replace professional medical advice. Always consult healthcare professionals for health-related decisions.
                      </p>
                      <p>
                        <strong>Mathematical Calculators:</strong> While designed for accuracy, users should verify critical calculations independently.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
                    <p className="text-muted-foreground mb-4">
                      In no event shall MultiCalculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                    </p>
                    <p className="text-muted-foreground">
                      MultiCalculator shall not be held responsible for any decisions made based on calculations performed using our tools. Users assume full responsibility for verifying results before making important decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Links */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-3">Third-Party Links</h2>
                <p className="text-muted-foreground mb-4">
                  MultiCalculator has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by MultiCalculator.
                </p>
                <p className="text-muted-foreground">
                  Use of any such linked website is at the user's own risk. We encourage users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                </p>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-3">Modifications to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  MultiCalculator may revise these Terms of Use for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions.
                </p>
                <p className="text-muted-foreground">
                  We recommend that users review these terms periodically for any changes. Changes to these Terms and Conditions are effective when they are posted on this page.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
                <p className="text-muted-foreground">
                  Any claim relating to MultiCalculator's website shall be governed by the laws without regard to its conflict of law provisions.
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
                  {termsFaqs.map((faq, index) => (
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
                <h2 className="text-2xl font-semibold mb-3">Questions About These Terms?</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
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