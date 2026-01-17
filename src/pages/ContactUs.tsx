import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Mail, Globe, Clock, MessageCircle, HelpCircle, Send, Users, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactFaqs = [
  {
    question: "How quickly will I receive a response to my inquiry?",
    answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate the urgency in your email subject line."
  },
  {
    question: "What types of inquiries can I send?",
    answer: "You can contact us for general questions, feedback about our calculators, bug reports, feature suggestions, partnership inquiries, or any other questions related to our services."
  },
  {
    question: "Can I request a new calculator to be added?",
    answer: "Absolutely! We welcome suggestions for new calculators. Please send us an email with the type of calculator you need and how you would use it. We prioritize requests based on user demand."
  },
  {
    question: "How do I report a bug or error in a calculator?",
    answer: "To report a bug, please email us with the calculator name, the inputs you used, the expected result, and the actual result you received. Screenshots are also helpful."
  },
  {
    question: "Do you offer customer support for the calculators?",
    answer: "Yes, we provide free support for all our calculators. If you're having trouble using any tool, send us a detailed description of your issue and we'll help you resolve it."
  },
  {
    question: "Can I embed your calculators on my website?",
    answer: "Currently, we don't offer embedding options. However, you're welcome to link to our calculators from your website. For partnership or licensing inquiries, please contact us directly."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes, all communications are treated confidentially. We don't share your personal information with third parties. Please refer to our Privacy Policy for more details."
  },
  {
    question: "Do you have a physical office I can visit?",
    answer: "We operate as an online-only service and don't have a physical office for public visits. All communications should be done via email."
  }
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact Us - MultiCalculator"
        description="Contact MultiCalculator for questions, feedback, or suggestions. Reach us via email at info@multicalculator.online. Get support within 24-48 hours."
        keywords="contact multicalculator, calculator support, feedback, help, customer service, report bug, feature request"
        canonicalUrl="https://www.multicalculator.online/contact-us"
        faqItems={contactFaqs}
      />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact Us
            </h1>
          </div>
          
          {/* Introduction */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We value your feedback and are here to help! Whether you have questions about our calculators, 
                need technical support, want to suggest new features, or have partnership inquiries, 
                our team is ready to assist you. Don't hesitate to reach out – we'd love to hear from you.
              </p>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">For all inquiries and support</p>
                    <a 
                      href="mailto:info@multicalculator.online" 
                      className="text-primary hover:underline font-medium"
                    >
                      info@multicalculator.online
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Website</h3>
                    <p className="text-sm text-muted-foreground mb-2">Visit our homepage</p>
                    <a 
                      href="https://www.multicalculator.online" 
                      className="text-primary hover:underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.multicalculator.online
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What We Can Help With */}
          <h2 className="text-2xl font-bold mb-4">What We Can Help With</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">General Questions</h3>
                <p className="text-sm text-muted-foreground">Ask anything about our tools</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Feedback</h3>
                <p className="text-sm text-muted-foreground">Share your experience</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Feature Requests</h3>
                <p className="text-sm text-muted-foreground">Suggest new calculators</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Partnerships</h3>
                <p className="text-sm text-muted-foreground">Business collaborations</p>
              </CardContent>
            </Card>
          </div>

          {/* Response Time */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond within <strong>24-48 hours</strong> during business days. 
                    For urgent matters, please include "URGENT" in your email subject.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Notice */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Your Privacy Matters</h3>
                  <p className="text-muted-foreground">
                    All communications are treated confidentially. We never share your personal information 
                    with third parties. For more details, please read our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {contactFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
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
          </section>

          {/* Final CTA */}
          <Card className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-3">Ready to Get in Touch?</h3>
              <p className="text-muted-foreground mb-4">
                We're here to help! Send us an email and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:info@multicalculator.online"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
