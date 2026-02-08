import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorContent from "@/components/CalculatorContent";
import { calculatorContent } from "@/data/calculatorContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import { seoData } from "@/lib/seoData";
import { Plus, Trash2, GraduationCap } from "lucide-react";

interface Course {
  id: number;
  name: string;
  credits: string;
  grade: string;
}

const gradePoints: Record<string, number> = {
  "A+": 4.0,
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.7,
  "D+": 1.3,
  "D": 1.0,
  "D-": 0.7,
  "F": 0.0,
};

export default function GPACalculator() {
  const seo = seoData.gpa;
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: "", credits: "", grade: "" },
    { id: 2, name: "", credits: "", grade: "" },
    { id: 3, name: "", credits: "", grade: "" },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);

  const addCourse = () => {
    const newId = Math.max(...courses.map(c => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: "", credits: "", grade: "" }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const updateCourse = (id: number, field: keyof Course, value: string) => {
    setCourses(courses.map(c => 
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCreds = 0;

    courses.forEach(course => {
      const credits = parseFloat(course.credits);
      const gradePoint = gradePoints[course.grade];

      if (credits > 0 && gradePoint !== undefined) {
        totalPoints += credits * gradePoint;
        totalCreds += credits;
      }
    });

    if (totalCreds > 0) {
      setGpa(Math.round((totalPoints / totalCreds) * 100) / 100);
      setTotalCredits(totalCreds);
    } else {
      setGpa(null);
      setTotalCredits(0);
    }
  };

  const resetCalculator = () => {
    setCourses([
      { id: 1, name: "", credits: "", grade: "" },
      { id: 2, name: "", credits: "", grade: "" },
      { id: 3, name: "", credits: "", grade: "" },
    ]);
    setGpa(null);
    setTotalCredits(0);
  };

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.7) return "text-green-600 dark:text-green-400";
    if (gpa >= 3.0) return "text-blue-600 dark:text-blue-400";
    if (gpa >= 2.0) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getGPALabel = (gpa: number) => {
    if (gpa >= 3.7) return "Excellent";
    if (gpa >= 3.0) return "Good";
    if (gpa >= 2.0) return "Average";
    if (gpa >= 1.0) return "Below Average";
    return "Failing";
  };

  return (
    <CalculatorLayout 
      title="GPA Calculator" 
      description="Calculate your Grade Point Average easily"
      introContent={{
        description: "Your Grade Point Average (GPA) is a crucial academic metric used by schools, employers, and graduate programs worldwide. Our GPA calculator supports the standard 4.0 scale used by most American universities, allowing you to add unlimited courses with varying credit hours. Instantly see your cumulative GPA and understand where you stand academically with clear performance categories.",
        benefits: [
          "Standard 4.0 scale",
          "Unlimited courses",
          "Credit-weighted calculation",
          "Performance categories"
        ],
        lastUpdated: "2026-02-05"
      }}
      breadcrumbItems={[
        { name: "Home", url: "/" },
        { name: "Math Calculators", url: "/#math" },
        { name: "GPA Calculator", url: "/gpa-calculator" }
      ]}
    >
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        structuredData={seo.structuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Math Calculators", url: "/#math" },
          { name: "GPA Calculator", url: "/gpa-calculator" }
        ]}
        faqItems={calculatorContent.gpa?.faq || []}
      />
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Enter Your Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Header Row */}
              <div className="hidden md:grid md:grid-cols-12 gap-3 text-sm font-medium text-muted-foreground">
                <div className="col-span-4">Course Name (Optional)</div>
                <div className="col-span-3">Credits</div>
                <div className="col-span-4">Grade</div>
                <div className="col-span-1"></div>
              </div>

              {/* Course Rows */}
              {courses.map((course, index) => (
                <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                  <div className="md:col-span-4">
                    <Label className="md:hidden">Course Name (Optional)</Label>
                    <Input
                      placeholder={`Course ${index + 1}`}
                      value={course.name}
                      onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <Label className="md:hidden">Credits</Label>
                    <Input
                      type="number"
                      placeholder="Credits"
                      min="0"
                      max="10"
                      step="0.5"
                      value={course.credits}
                      onChange={(e) => updateCourse(course.id, "credits", e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-4">
                    <Label className="md:hidden">Grade</Label>
                    <Select
                      value={course.grade}
                      onValueChange={(value) => updateCourse(course.id, "grade", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(gradePoints).map(([grade, points]) => (
                          <SelectItem key={grade} value={grade}>
                            {grade} ({points.toFixed(1)})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeCourse(course.id)}
                      disabled={courses.length <= 1}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Add Course Button */}
              <Button
                variant="outline"
                onClick={addCourse}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button onClick={calculateGPA} className="flex-1">
                  Calculate GPA
                </Button>
                <Button variant="outline" onClick={resetCalculator}>
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Card */}
        {gpa !== null && (
          <Card>
            <CardHeader>
              <CardTitle>Your GPA Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground mb-2">Your GPA</p>
                  <p className={`text-5xl font-bold ${getGPAColor(gpa)}`}>
                    {gpa.toFixed(2)}
                  </p>
                  <p className={`text-sm mt-2 font-medium ${getGPAColor(gpa)}`}>
                    {getGPALabel(gpa)}
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground mb-2">Total Credits</p>
                  <p className="text-5xl font-bold text-primary">
                    {totalCredits}
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">
                    Credit Hours
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted">
                  <p className="text-sm text-muted-foreground mb-2">GPA Scale</p>
                  <p className="text-5xl font-bold text-primary">
                    4.0
                  </p>
                  <p className="text-sm mt-2 text-muted-foreground">
                    Maximum GPA
                  </p>
                </div>
              </div>

              {/* GPA Scale Reference */}
              <div className="mt-6 p-4 rounded-lg border bg-card">
                <h4 className="font-medium mb-3">GPA Scale Reference</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div className="flex justify-between"><span>A+/A:</span><span className="font-medium">4.0</span></div>
                  <div className="flex justify-between"><span>A-:</span><span className="font-medium">3.7</span></div>
                  <div className="flex justify-between"><span>B+:</span><span className="font-medium">3.3</span></div>
                  <div className="flex justify-between"><span>B:</span><span className="font-medium">3.0</span></div>
                  <div className="flex justify-between"><span>B-:</span><span className="font-medium">2.7</span></div>
                  <div className="flex justify-between"><span>C+:</span><span className="font-medium">2.3</span></div>
                  <div className="flex justify-between"><span>C:</span><span className="font-medium">2.0</span></div>
                  <div className="flex justify-between"><span>C-:</span><span className="font-medium">1.7</span></div>
                  <div className="flex justify-between"><span>D+:</span><span className="font-medium">1.3</span></div>
                  <div className="flex justify-between"><span>D:</span><span className="font-medium">1.0</span></div>
                  <div className="flex justify-between"><span>D-:</span><span className="font-medium">0.7</span></div>
                  <div className="flex justify-between"><span>F:</span><span className="font-medium">0.0</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <CalculatorContent content={calculatorContent.gpa} />
    </CalculatorLayout>
  );
}
