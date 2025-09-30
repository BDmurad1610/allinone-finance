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
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-gradient-to-br from-card to-card/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            {!calculator.isActive && (
              <Badge variant="secondary" className="text-xs">
                Soon
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
            {calculator.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {calculator.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
