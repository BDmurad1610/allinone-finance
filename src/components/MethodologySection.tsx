import { FlaskConical, BookOpen, RefreshCw, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MethodologySection() {
  const steps = [
    {
      icon: FlaskConical,
      step: "1",
      title: "Source Standard Formulas",
      description: "We use publicly documented formulas from established sources: WHO for BMI, Mifflin-St Jeor for calories, U.S. Navy method for body fat, and standard amortization for finance calculations."
    },
    {
      icon: Code,
      step: "2", 
      title: "Implement & Test",
      description: "Each formula is implemented and tested against known example values to ensure correctness. We show the formula on every calculator page so you can verify our work."
    },
    {
      icon: BookOpen,
      step: "3",
      title: "Document & Explain",
      description: "Every calculator includes a step-by-step guide, the exact formula used, worked examples, practical tips, and frequently asked questions to help you understand your results."
    },
    {
      icon: RefreshCw,
      step: "4",
      title: "Keep Current",
      description: "We periodically review our formulas and content to make sure everything stays accurate and up-to-date. Each page shows its last update date."
    }
  ];

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="methodology-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="methodology-heading" className="text-3xl font-bold text-foreground mb-4">
            How We Build Our Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every calculator follows the same process to ensure you get accurate, well-documented results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <Card key={idx} className="relative overflow-hidden group hover:shadow-lg transition-all">
              <CardContent className="p-6 pt-8">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-[3rem] flex items-start justify-end p-2">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sources Box */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Formula Sources We Use
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Health Calculators:</h4>
                  <ul className="space-y-1">
                    <li>• World Health Organization (WHO) BMI Guidelines</li>
                    <li>• Mifflin-St Jeor Equation (American Dietetic Association)</li>
                    <li>• U.S. Navy Body Fat Calculation Method</li>
                    <li>• Devine, Robinson, Miller & Hamwi weight formulas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Finance Calculators:</h4>
                  <ul className="space-y-1">
                    <li>• Standard Amortization Formula</li>
                    <li>• Compound Interest Formula (A = P(1 + r/n)^nt)</li>
                    <li>• EMI Formula (P × r × (1+r)^n / ((1+r)^n - 1))</li>
                    <li>• Standard ROI & savings calculations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
