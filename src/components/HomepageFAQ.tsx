 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 import { HelpCircle, MessageCircle } from "lucide-react";
 
 const faqs = [
   {
     question: "Are all calculators on this site completely free to use?",
     answer: "Yes, absolutely! Every calculator on MultiCalculator is 100% free with no hidden fees, subscriptions, or registration required. We believe everyone deserves access to accurate calculation tools without barriers. Simply visit any calculator page and start using it immediately."
   },
   {
     question: "How accurate are your calculator results?",
     answer: "Our calculators use scientifically-validated formulas from authoritative sources. Health calculators follow WHO and medical guidelines (like the Mifflin-St Jeor equation for calories). Financial calculators use standard banking formulas. Each calculator is tested against official sources. However, for important medical or financial decisions, we recommend consulting with qualified professionals."
   },
   {
     question: "Is my personal data safe when using these calculators?",
     answer: "Your privacy is our top priority. All calculations happen directly in your browser using JavaScript - no data is ever sent to our servers. We don't store, track, or share any information you enter. Your health metrics, financial details, and personal data remain completely private on your device."
   },
   {
     question: "Can I use these calculators on my smartphone or tablet?",
     answer: "Yes! MultiCalculator is fully responsive and works perfectly on all devices including iPhones, Android phones, iPads, tablets, and desktop computers. You can even install it as a Progressive Web App (PWA) for offline access and a native app-like experience."
   },
   {
     question: "What formulas do your health calculators use?",
     answer: "Our BMI calculator uses the official WHO formula (weight in kg divided by height in meters squared). The Calorie Calculator uses the Mifflin-St Jeor equation, recognized by the American Dietetic Association as the most accurate for estimating BMR. The Body Fat Calculator uses the U.S. Navy method. All formulas are cited on each calculator page."
   },
   {
     question: "How often are the calculators updated?",
     answer: "We continuously monitor for updates to formulas, new research findings, and user feedback. When official guidelines change (such as new dietary recommendations or financial regulations), we update our calculators promptly. Each calculator page shows its last update date for transparency."
   },
   {
     question: "Do I need to create an account to use the calculators?",
     answer: "No account or registration is ever required. Simply visit any calculator page and start using it immediately. We designed MultiCalculator to be as frictionless as possible - no signups, no emails, no passwords. Just instant access to the tools you need."
   },
   {
     question: "Can I trust the financial calculations for important decisions?",
     answer: "Our financial calculators (mortgage, loan, compound interest, etc.) use standard formulas employed by banks and financial institutions. They provide accurate estimates for planning purposes. However, actual terms from lenders may vary, so we recommend using our calculators for comparison and planning, then consulting with financial professionals for major decisions."
   }
 ];
 
 export default function HomepageFAQ() {
   // FAQ Schema for SEO
   const faqSchema = {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": faqs.map(faq => ({
       "@type": "Question",
       "name": faq.question,
       "acceptedAnswer": {
         "@type": "Answer",
         "text": faq.answer
       }
     }))
   };
 
   return (
     <section className="py-16 bg-background" aria-labelledby="faq-heading">
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
       
       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
               <MessageCircle className="w-4 h-4" />
               <span>Got Questions?</span>
             </div>
             <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Frequently Asked Questions
             </h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Everything you need to know about MultiCalculator. Can't find your answer? Contact us anytime.
             </p>
           </div>
 
           <Accordion type="single" collapsible className="w-full space-y-4">
             {faqs.map((faq, idx) => (
               <AccordionItem 
                 key={idx} 
                 value={`faq-${idx}`}
                 className="bg-card border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
               >
                 <AccordionTrigger className="text-left hover:no-underline py-5">
                   <div className="flex items-start gap-3">
                     <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                     <span className="font-semibold text-foreground">{faq.question}</span>
                   </div>
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground pb-5 pl-8">
                   {faq.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
 
           {/* Additional Trust Content */}
           <div className="mt-12 text-center">
             <p className="text-muted-foreground mb-4">
               Still have questions? We're here to help.
             </p>
             <a 
               href="/contact" 
               className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
             >
               Contact Our Team →
             </a>
           </div>
         </div>
       </div>
     </section>
   );
 }