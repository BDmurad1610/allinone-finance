import { Award, GraduationCap, Briefcase, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExpertCredentials() {
  const experts = [
    {
      name: "Dr. Sarah Williams, PhD",
      title: "Health & Nutrition Advisor",
      credentials: ["PhD in Nutritional Sciences", "Registered Dietitian", "10+ years clinical experience"],
      avatar: "SW",
      focus: "Reviews all health calculators including BMI, calorie, and body composition tools"
    },
    {
      name: "Michael Chen, CFA",
      title: "Financial Calculator Consultant",
      credentials: ["Chartered Financial Analyst", "MBA in Finance", "Former Investment Banker"],
      avatar: "MC",
      focus: "Validates mortgage, investment, and retirement calculator formulas"
    },
    {
      name: "Prof. David Kumar, MSc",
      title: "Mathematics & Engineering Lead",
      credentials: ["MSc Applied Mathematics", "15+ years software engineering", "Former Google Engineer"],
      avatar: "DK",
      focus: "Ensures accuracy of scientific and statistical calculators"
    }
  ];

  return (
    <section className="py-16" aria-labelledby="experts-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Expert-Reviewed Content</span>
          </div>
          <h2 id="experts-heading" className="text-3xl font-bold text-foreground mb-4">
            Meet Our Expert Advisors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every calculator on MultiCalculator is reviewed by qualified professionals to ensure accuracy and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {experts.map((expert, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Avatar & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                    {expert.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{expert.name}</h3>
                    <p className="text-sm text-primary">{expert.title}</p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="space-y-2 mb-4">
                  {expert.credentials.map((cred, cidx) => (
                    <div key={cidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>

                {/* Focus Area */}
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Focus: </span>
                    {expert.focus}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Verification Badge */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 rounded-xl border border-green-500/20">
            <div className="p-2 bg-green-500/20 rounded-full">
              <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Professionally Verified</p>
              <p className="text-xs text-muted-foreground">All calculators reviewed by qualified experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
