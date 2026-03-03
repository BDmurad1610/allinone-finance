import { Code, BookOpen, RefreshCw, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExpertCredentials() {
  const principles = [
    {
      icon: Code,
      title: "Open & Transparent Formulas",
      description: "Every calculator shows the exact formula used. We source formulas from publicly available standards like WHO BMI guidelines, Mifflin-St Jeor equation, and standard amortization formulas. You can verify our math yourself."
    },
    {
      icon: BookOpen,
      title: "Educational First",
      description: "Each calculator includes a detailed guide explaining the formula, how to interpret results, worked examples, and practical tips. We want you to understand the math, not just get a number."
    },
    {
      icon: Globe,
      title: "Free & Accessible",
      description: "All calculations run in your browser — no accounts, no data collection, no paywalls. Works on any device, anytime, even offline with our PWA support."
    },
    {
      icon: RefreshCw,
      title: "Regularly Updated",
      description: "We review our formulas and content periodically to ensure they reflect current standards. Each calculator page shows when it was last updated."
    }
  ];

  return (
    <section className="py-16" aria-labelledby="principles-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="principles-heading" className="text-3xl font-bold text-foreground mb-4">
            Our Approach to Accuracy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use publicly documented, industry-standard formulas and explain exactly how each calculation works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {principles.map((item, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
