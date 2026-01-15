import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Info, CheckCircle2, Sparkles, Target, Users, Award, Zap, Heart, Globe, Calculator, TrendingUp, Shield, HelpCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AboutUs() {
  const seo = seoData.about;
  
  const stats = [
    { icon: Calculator, label: "Free Calculators", value: "40+" },
    { icon: Users, label: "Monthly Users", value: "50K+" },
    { icon: Globe, label: "Countries Served", value: "150+" },
    { icon: Zap, label: "Calculations Daily", value: "100K+" }
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy First",
      description: "Every calculator uses industry-standard formulas and is rigorously tested to ensure reliable results you can trust."
    },
    {
      icon: Heart,
      title: "User-Centric Design",
      description: "We design for real people. Our interfaces are intuitive, accessible, and work seamlessly on any device."
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your calculations stay private. We never store, track, or share any data you enter into our tools."
    },
    {
      icon: Zap,
      title: "Always Free",
      description: "We believe essential calculation tools should be accessible to everyone, forever free of charge."
    }
  ];

  const teamMembers = [
    { role: "Development", description: "Passionate engineers building fast, reliable tools" },
    { role: "Design", description: "UX experts creating intuitive, beautiful interfaces" },
    { role: "Content", description: "Writers making complex topics easy to understand" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
      />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent">
                <Info className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              About MultiCalculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted destination for free, accurate, and easy-to-use online calculators for finance, health, math, and everyday life.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <Card key={idx} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Our Story */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MultiCalculator was born from a simple frustration: finding a reliable, ad-free, easy-to-use calculator online shouldn't be hard. In 2024, we set out to build a comprehensive suite of calculator tools that anyone can use, for free, forever.
                </p>
                <p>
                  What started as a handful of basic calculators has grown into a comprehensive platform with over 40 specialized tools covering finance, health, mathematics, and everyday utility calculations. From calculating your BMI to planning your retirement, we've got you covered.
                </p>
                <p>
                  Today, MultiCalculator serves users from over 150 countries, helping students complete homework, professionals make informed decisions, and everyday people solve real-world problems. We're proud to be part of millions of calculations that help people understand their finances, track their health, and learn new concepts.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To democratize access to calculation tools by providing free, accurate, and user-friendly calculators that empower people to make informed decisions about their finances, health, and everyday life.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To become the world's most trusted and comprehensive online calculator platform, known for accuracy, simplicity, and putting users first in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Offer */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">💰 Finance Calculators</h4>
                    <p className="text-sm text-muted-foreground">
                      Mortgage, loan, compound interest, investment, retirement, ROI, EMI, salary, and savings goal calculators to help you make smart financial decisions.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">❤️ Health & Fitness</h4>
                    <p className="text-sm text-muted-foreground">
                      BMI, body fat, BMR, calorie, and ideal weight calculators based on medically-accepted formulas to support your wellness journey.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">🔢 Math & Science</h4>
                    <p className="text-sm text-muted-foreground">
                      Basic, scientific, percentage, fraction, and statistics calculators for students, teachers, and professionals who need quick, accurate math.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">🛠️ Utility Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Unit converters, date calculators, time tools, tip calculators, and more for everyday life calculations and conversions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="p-3 h-fit rounded-lg bg-primary/10">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Why Choose MultiCalculator?
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { emoji: "✓", title: "100% Free Forever", desc: "No hidden costs, no premium tiers, no paywalls" },
                  { emoji: "✓", title: "No Sign-up Required", desc: "Start calculating instantly without creating an account" },
                  { emoji: "✓", title: "Works Everywhere", desc: "Desktop, tablet, or phone — our tools adapt to your device" },
                  { emoji: "✓", title: "Instant Results", desc: "Get answers in milliseconds, no waiting or loading" },
                  { emoji: "✓", title: "Educational Content", desc: "Learn the formulas and concepts behind every calculation" },
                  { emoji: "✓", title: "Privacy Protected", desc: "Your data never leaves your browser" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border rounded-lg">
                    <div className="text-primary font-bold text-lg mb-1">{item.emoji} {item.title}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Our Team */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Behind MultiCalculator
              </h2>
              <p className="text-muted-foreground mb-6">
                MultiCalculator is built and maintained by a passionate team of developers, designers, and content creators who believe that everyone deserves access to quality tools for free.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="p-4 bg-muted/30 rounded-lg text-center">
                    <h4 className="font-semibold text-foreground">{member.role}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{member.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left">Is MultiCalculator really free?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, 100% free! All our calculators are completely free to use with no hidden fees, premium versions, or paywalls. We sustain our platform through non-intrusive advertising, which allows us to keep everything free for our users.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left">How accurate are your calculators?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our calculators use industry-standard formulas and are rigorously tested for accuracy. Health calculators use medically-accepted equations (like Mifflin-St Jeor for BMR). Finance calculators use standard amortization and compound interest formulas. However, results are estimates — consult professionals for important decisions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left">Do you store my calculations?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No. All calculations happen locally in your browser. We never see, store, or transmit the numbers you enter. Your privacy is paramount to us, and your data never leaves your device.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left">Can I use these calculators on my phone?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely! MultiCalculator is fully responsive and works beautifully on smartphones, tablets, laptops, and desktop computers. You can also install it as a Progressive Web App (PWA) for quick access.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left">How can I suggest a new calculator?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We love hearing from our users! Visit our Contact Us page to submit suggestions for new calculators or features. We regularly add new tools based on user feedback and requests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-6">
                  <AccordionTrigger className="text-left">Who can use MultiCalculator?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Everyone! Our tools are designed for students, professionals, homeowners, investors, fitness enthusiasts, and anyone who needs quick, reliable calculations. Whether you're doing homework, planning finances, or tracking health metrics, we've got tools for you.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Ready to Start Calculating?</h2>
              <p className="text-muted-foreground mb-4">
                Join thousands of users who trust MultiCalculator for their daily calculation needs.
              </p>
              <a 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Calculator className="w-5 h-5" />
                Explore Our Calculators
              </a>
              <p className="text-sm text-muted-foreground mt-6">
                Thank you for choosing MultiCalculator! 🎉
              </p>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}