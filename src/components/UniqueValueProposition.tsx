import { Sparkles, Calculator, ShieldCheck, Zap, BookOpen, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UniqueValueProposition() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Scientifically Validated",
      description: "Every formula is sourced from peer-reviewed research, medical journals, and official financial standards. Our BMI uses WHO guidelines, calorie calculations use the Mifflin-St Jeor equation, and mortgage formulas follow standard amortization.",
      highlight: "Research-backed accuracy"
    },
    {
      icon: BookOpen,
      title: "Educational Approach",
      description: "We don't just give you numbers – we teach you. Each calculator includes step-by-step explanations, the actual formula used, real-world examples, and expert tips to help you understand your results.",
      highlight: "Learn while you calculate"
    },
    {
      icon: Zap,
      title: "Instant & Private",
      description: "All calculations happen instantly in your browser. Zero data is sent to our servers. Your health metrics, financial details, and personal information never leave your device.",
      highlight: "100% client-side processing"
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Access our calculators on any device – iPhone, Android, iPad, laptop, or desktop. Install as a Progressive Web App for offline access. No downloads, no accounts, no limits.",
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
            Not Just Another Calculator Site
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We built MultiCalculator because we were frustrated with inaccurate, ad-heavy calculator sites. Here's our commitment to you:
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
                    <span className="inline-block px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                      ✓ {feature.highlight}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-foreground">How We Compare</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">MultiCalculator</th>
                  <th className="p-4 text-center font-semibold">Other Sites</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {[
                  { feature: "Completely Free", us: true, them: "Often Limited" },
                  { feature: "No Account Required", us: true, them: "Usually Required" },
                  { feature: "Formula Explanations", us: true, them: "Rarely" },
                  { feature: "Mobile Optimized", us: true, them: "Sometimes" },
                  { feature: "Offline Access (PWA)", us: true, them: "No" },
                  { feature: "Privacy-First (No Data Collection)", us: true, them: "No" },
                  { feature: "Expert-Reviewed Content", us: true, them: "No" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                    <td className="p-4 border-b border-border font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 border-b border-border text-center">
                      {row.us === true ? (
                        <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                          <ShieldCheck className="w-4 h-4" /> Yes
                        </span>
                      ) : row.us}
                    </td>
                    <td className="p-4 border-b border-border text-center text-muted-foreground">
                      {row.them}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
