import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Privacy Policy - MultiCalculator"
        description="Read MultiCalculator's privacy policy. Learn how we collect, use, and protect your information when you use our free online calculators."
        keywords="privacy policy, multicalculator privacy, data protection, cookies policy"
        canonicalUrl="https://www.multicalculator.online/privacy-policy"
      />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-6 text-foreground">
              <div>
                <p className="text-muted-foreground">
                  At MultiCalculator, accessible from <a href="https://www.multicalculator.online" className="text-primary hover:underline">https://www.multicalculator.online</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by MultiCalculator and how we use it.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, you may visit our website at <a href="https://www.multicalculator.online" className="text-primary hover:underline">https://www.multicalculator.online</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Log Files</h2>
                <p className="text-muted-foreground">
                  MultiCalculator follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected may include IP addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Cookies and Web Beacons</h2>
                <p className="text-muted-foreground">
                  Like any other website, MultiCalculator uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Google DoubleClick DART Cookie</h2>
                <p className="text-muted-foreground">
                  Google is one of the third-party vendors on our site. It uses cookies (DART cookies) to serve ads to users based on their visit to MultiCalculator and other websites on the internet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Children's Information</h2>
                <p className="text-muted-foreground">
                  MultiCalculator does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Online Privacy Policy Only</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy applies only to our online activities and is valid for visitors to our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Consent</h2>
                <p className="text-muted-foreground">
                  By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}