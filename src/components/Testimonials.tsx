import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Personal Finance Blogger",
    avatar: "SM",
    rating: 5,
    text: "I've been using MultiCalculator for my financial planning articles. The mortgage and compound interest calculators are incredibly accurate and easy to use. My readers love the detailed breakdowns!",
    calculator: "Mortgage Calculator"
  },
  {
    name: "Dr. James Chen",
    role: "Fitness Coach",
    avatar: "JC",
    rating: 5,
    text: "As a fitness professional, I recommend MultiCalculator to all my clients. The BMI, BMR, and calorie calculators use scientifically-validated formulas. It's become an essential tool in my practice.",
    calculator: "BMI Calculator"
  },
  {
    name: "Michael Rodriguez",
    role: "Small Business Owner",
    avatar: "MR",
    rating: 5,
    text: "The ROI and investment calculators helped me make critical business decisions. I calculated the return on our equipment investments and it saved us thousands. Highly recommended!",
    calculator: "ROI Calculator"
  },
  {
    name: "Emily Thompson",
    role: "High School Teacher",
    avatar: "ET",
    rating: 5,
    text: "I use MultiCalculator in my math classes daily. The scientific calculator and unit converter help students understand complex concepts. It's completely free which is perfect for education!",
    calculator: "Scientific Calculator"
  },
  {
    name: "David Park",
    role: "First-Time Home Buyer",
    avatar: "DP",
    rating: 5,
    text: "When buying my first home, the mortgage calculator was invaluable. I could compare different loan scenarios instantly. The amortization schedule helped me understand exactly what I was paying for.",
    calculator: "Mortgage Calculator"
  },
  {
    name: "Lisa Anderson",
    role: "Nutritionist",
    avatar: "LA",
    rating: 4,
    text: "The calorie and BMR calculators use the Mifflin-St Jeor equation, which I trust for my clients. It's one of the few free tools that gets the science right. Great for meal planning consultations!",
    calculator: "Calorie Calculator"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30" aria-label="User Testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who trust MultiCalculator for their daily calculations
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" aria-hidden="true" />
                    
                    {/* Rating */}
                    <div className="flex gap-0.5 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Calculator Badge */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        Used: {testimonial.calculator}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "9,875+", label: "Happy Users" },
            { value: "4.8", label: "Average Rating" },
            { value: "50K+", label: "Calculations/Month" },
            { value: "20+", label: "Free Calculators" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 rounded-xl bg-card border border-border animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
