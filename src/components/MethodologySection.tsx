import { FlaskConical, BookOpen, RefreshCw, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MethodologySection() {
  const steps = [
    {
      icon: FlaskConical,
      step: "1",
      title: "Research & Source",
      description: "We study peer-reviewed journals, official guidelines (WHO, CDC, financial regulators), and consult industry experts to identify the most accurate formulas for each calculator."
    },
    {
      icon: BookOpen,
      step: "2", 
      title: "Implementation & Testing",
      description: "Our engineering team implements each formula with extensive unit tests. We cross-reference results with official calculators and academic sources to ensure precision."
    },
    {
      icon: UserCheck,
      step: "3",
      title: "Expert Review",
      description: "Before publishing, each calculator is reviewed by domain experts – certified financial planners for finance tools, healthcare professionals for health calculators."
    },
    {
      icon: RefreshCw,
      step: "4",
      title: "Continuous Updates",
      description: "We monitor for formula updates, new research, and user feedback. When standards change (like new dietary guidelines), we update our calculators immediately."
    }
  ];

  return (
    <section className="py-16 bg-muted/30" aria-labelledby="methodology-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="methodology-heading" className="text-3xl font-bold text-foreground mb-4">
            Our Methodology: How We Ensure Accuracy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every calculator goes through a rigorous development process to ensure you get reliable, trustworthy results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <Card key={idx} className="relative overflow-hidden group hover:shadow-lg transition-all">
              <CardContent className="p-6 pt-8">
                {/* Step Number Badge */}
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
                Our Trusted Sources
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Health Calculators:</h4>
                  <ul className="space-y-1">
                    <li>• World Health Organization (WHO) BMI Guidelines</li>
                    <li>• Mifflin-St Jeor Equation (American Dietetic Association)</li>
                    <li>• U.S. Navy Body Fat Calculation Method</li>
                    <li>• CDC Growth Charts & Standards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Finance Calculators:</h4>
                  <ul className="space-y-1">
                    <li>• Standard Amortization Formulas</li>
                    <li>• Compound Interest (Annual & Monthly)</li>
                    <li>• Federal Reserve Economic Data</li>
                    <li>• IRS Publication Guidelines</li>
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
