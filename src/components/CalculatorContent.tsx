import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { AlertTriangle, Calculator, HelpCircle, Lightbulb, Target, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

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
  disclaimer?: string;
}

interface CalculatorContentProps {
  content: CalculatorContentData;
}

export default function CalculatorContent({ content }: CalculatorContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-8 space-y-4">
      {/* Instructions Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-3 py-4 px-6 text-base font-semibold 
          bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 
          hover:from-primary/20 hover:via-primary/30 hover:to-primary/20
          dark:from-primary/20 dark:via-primary/30 dark:to-primary/20
          dark:hover:from-primary/30 dark:hover:via-primary/40 dark:hover:to-primary/30
          border border-primary/30 hover:border-primary/50
          rounded-xl transition-all duration-300 ease-in-out
          hover:shadow-lg hover:shadow-primary/20
          active:scale-[0.98] group"
      >
        <BookOpen className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
        <span className="text-foreground">{isExpanded ? "Hide Instructions & Guide" : "Show Instructions & Guide"}</span>
        <span className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}>
          <ChevronDown className="w-5 h-5 text-primary" />
        </span>
      </button>

      {/* Collapsible Content */}
      <div className={`space-y-8 overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}>
      {/* Intro Section */}
      <section aria-labelledby="intro-heading" className="prose prose-gray dark:prose-invert max-w-none">
        <h2 id="intro-heading" className="text-2xl font-bold mb-4 flex items-center gap-2">
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
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            How to Use This Calculator
          </h3>
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
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              {content.formula.title}
            </h3>
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
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            {content.useCases.title}
          </h3>
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
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              {content.tips.title}
            </h3>
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

      {/* Related Calculators - Internal Linking */}
      {content.relatedCalculators.length > 0 && (
        <nav aria-label="Related calculators">
          <h2 className="text-xl font-bold mb-4">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            {content.relatedCalculators.map((calc, idx) => (
              <Link
                key={idx}
                to={calc.path}
                className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors"
                title={`Try our ${calc.name}`}
              >
                {calc.name}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Disclaimer - Only show if provided */}
      {content.disclaimer && (
        <Card className="border-yellow-500/30 bg-yellow-500/5">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-yellow-700 dark:text-yellow-500 mb-2">Important Notice</p>
                <p className="text-sm text-muted-foreground">
                  {content.disclaimer}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      </div>
    </div>
  );
}
