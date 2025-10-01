import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalculatorItem } from "@/data/calculators";

interface CalculatorCardProps {
  calculator: CalculatorItem;
}

export default function CalculatorCard({ calculator }: CalculatorCardProps) {
  const Icon = calculator.icon;
  
  return (
    <Link to={calculator.path} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-[0_12px_32px_-4px_hsl(225_73%_57%_/_0.25)] hover:-translate-y-2 border-border bg-gradient-to-br from-card to-card/50 rounded-xl overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            {!calculator.isActive && (
              <Badge variant="secondary" className="text-xs rounded-full">
                Soon
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors font-semibold">
            {calculator.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {calculator.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
