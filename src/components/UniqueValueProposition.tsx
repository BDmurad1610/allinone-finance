import { Sparkles, ShieldCheck, Zap, BookOpen, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UniqueValueProposition() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Standard Formulas",
      description: "Every calculator uses well-known, publicly documented formulas. Our BMI uses the WHO formula, calorie calculations use the Mifflin-St Jeor equation, and mortgage formulas use standard amortization. The formula is shown on each page.",
      highlight: "Transparent & verifiable"
    },
    {
      icon: BookOpen,
      title: "Educational Approach",
      description: "We don't just give you numbers — each calculator includes step-by-step explanations, the actual formula used, worked examples, and practical tips to help you understand your results.",
      highlight: "Learn while you calculate"
    },
    {
      icon: Zap,
      title: "Instant & Private",
      description: "All calculations happen instantly in your browser. No data is sent to any server. Your health metrics, financial details, and personal information never leave your device.",
      highlight: "100% client-side processing"
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Access our calculators on any device — phone, tablet, or desktop. Install as a Progressive Web App for offline access. No downloads, no accounts, no limits.",
      highlight: "Cross-platform compatibility"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background" aria-labelledby="why-different-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>What Makes Us Different</span>
          </div>
          <h2 id="why-different-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Free Calculator Tools with Full Transparency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every formula is documented, every calculation is explained, and everything runs privately in your browser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <Card key={idx} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
