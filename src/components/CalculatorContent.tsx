import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { AlertTriangle, Calculator, HelpCircle, Lightbulb, Target, BookOpen } from "lucide-react";

export interface CalculatorContentData {
  intro: {
    title: string;
    paragraphs: string[];
  };
  howToUse: {
    steps: { title: string; description: string }[];
    example?: {
      inputs: string;
      output: string;
    };
  };
  formula?: {
    title: string;
    content: string;
    assumptions?: string[];
  };
  useCases: {
    title: string;
    cases: string[];
  };
  tips?: {
    title: string;
    items: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  relatedCalculators: {
    name: string;
    path: string;
  }[];
}

interface CalculatorContentProps {
  content: CalculatorContentData;
}

export default function CalculatorContent({ content }: CalculatorContentProps) {
  return (
    <div className="mt-12 space-y-8">
      {/* Intro Section */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          {content.intro.title}
        </h2>
        {content.intro.paragraphs.map((para, idx) => (
          <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
            {para}
          </p>
        ))}
      </section>

      {/* How to Use Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            How to Use This Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            {content.howToUse.steps.map((step, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          
          {content.howToUse.example && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
              <p className="font-semibold text-sm mb-2">Example Calculation:</p>
              <p className="text-sm text-muted-foreground">
                <strong>Input:</strong> {content.howToUse.example.inputs}
              </p>
              <p className="text-sm text-primary font-medium mt-1">
                <strong>Output:</strong> {content.howToUse.example.output}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Formula Section */}
      {content.formula && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              {content.formula.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-muted/30 rounded-lg font-mono text-sm mb-4">
              {content.formula.content}
            </div>
            {content.formula.assumptions && (
              <div>
                <p className="font-semibold text-sm mb-2">Assumptions & Limitations:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {content.formula.assumptions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Use Cases Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            {content.useCases.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {content.useCases.cases.map((useCase, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{useCase}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tips Section */}
      {content.tips && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              {content.tips.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {content.tips.items.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold">💡</span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-primary" />
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {content.faq.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Related Calculators */}
      {content.relatedCalculators.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            {content.relatedCalculators.map((calc, idx) => (
              <Link
                key={idx}
                to={calc.path}
                className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors"
              >
                {calc.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <Card className="border-yellow-500/30 bg-yellow-500/5">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-yellow-700 dark:text-yellow-500 mb-2">Disclaimer</p>
              <p className="text-sm text-muted-foreground">
                The results from this calculator are estimates for informational purposes only. 
                Actual outcomes may vary depending on real-world conditions, fees, taxes, and other factors. 
                This tool should be used for general guidance only. For final decisions, please consult 
                a qualified professional or financial advisor.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
