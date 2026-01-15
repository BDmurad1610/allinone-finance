import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Shield, Lock, Eye, Cookie, Users, Globe, Bell, FileText, Scale } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PrivacyPolicy() {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Privacy Policy - MultiCalculator | Your Data Protection Rights"
        description="Read MultiCalculator's comprehensive privacy policy. Learn how we collect, use, and protect your information. We respect your privacy and are committed to data transparency."
        keywords="privacy policy, multicalculator privacy, data protection, cookies policy, GDPR, CCPA, user privacy"
        canonicalUrl="https://www.multicalculator.online/privacy-policy"
      />
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            At MultiCalculator, your privacy is our top priority. This Privacy Policy explains how we collect, use, protect, and share information when you visit our website at{" "}
            <a href="https://www.multicalculator.online" className="text-primary hover:underline font-medium">multicalculator.online</a>.
          </p>
          
          <Card className="shadow-lg mb-8">
            <CardContent className="p-8 space-y-8 text-foreground">
              
              {/* Information We Collect */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We are committed to collecting only the minimum information necessary to provide you with an excellent calculator experience. Here's what we may collect:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Automatically Collected</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>IP address (anonymized)</li>
                        <li>Browser type and version</li>
                        <li>Device type (mobile/desktop)</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website URL</li>
                        <li>Operating system</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Never Collected</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Personal names or addresses</li>
                        <li>Email addresses (unless you contact us)</li>
                        <li>Financial information</li>
                        <li>Health data from calculators</li>
                        <li>Calculator inputs or results</li>
                        <li>Payment information</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                    <strong>Important:</strong> All calculations performed on our website happen locally in your browser. We do not store, transmit, or have access to any numbers you enter into our calculators.
                  </p>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>We use the limited information we collect for the following purposes:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Website Analytics:</strong> To understand how visitors use our site and improve user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Performance Optimization:</strong> To identify and fix technical issues and improve loading speeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Content Improvement:</strong> To understand which calculators are most useful and create better tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Advertising:</strong> To display relevant, non-intrusive advertisements through Google AdSense</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Security:</strong> To protect our website from malicious activity and abuse</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Cookie className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Like most websites, MultiCalculator uses cookies — small text files stored on your device that help us provide a better experience. Here's what you need to know:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                      <p className="text-sm mt-1">Required for basic website functionality, such as remembering your theme preference (light/dark mode). These cannot be disabled.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                      <p className="text-sm mt-1">Help us understand how visitors interact with our site. We use Google Analytics with IP anonymization enabled to protect your privacy.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-foreground">Advertising Cookies</h3>
                      <p className="text-sm mt-1">Used by Google AdSense to display relevant advertisements. These cookies may track your browsing activity across different websites.</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* Third-Party Services */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Third-Party Services</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the following trusted third-party services:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="p-3 text-left font-semibold">Service</th>
                          <th className="p-3 text-left font-semibold">Purpose</th>
                          <th className="p-3 text-left font-semibold">Privacy Policy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">Google Analytics</td>
                          <td className="p-3">Website traffic analysis</td>
                          <td className="p-3"><a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">View Policy</a></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Google AdSense</td>
                          <td className="p-3">Display advertising</td>
                          <td className="p-3"><a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">View Policy</a></td>
                        </tr>
                        <tr>
                          <td className="p-3">Lovable (Hosting)</td>
                          <td className="p-3">Website hosting</td>
                          <td className="p-3"><a href="https://lovable.dev/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">View Policy</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Data Protection Rights */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Your Data Protection Rights</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Depending on your location, you may have the following rights:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { title: "Right to Access", desc: "Request copies of your personal data" },
                      { title: "Right to Rectification", desc: "Request correction of inaccurate data" },
                      { title: "Right to Erasure", desc: "Request deletion of your personal data" },
                      { title: "Right to Restrict", desc: "Request limitation of data processing" },
                      { title: "Right to Object", desc: "Object to our processing of your data" },
                      { title: "Right to Portability", desc: "Request transfer of your data" }
                    ].map((right, idx) => (
                      <div key={idx} className="p-3 bg-muted/30 rounded-lg">
                        <h3 className="font-semibold text-foreground text-sm">{right.title}</h3>
                        <p className="text-xs mt-1">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm">
                    To exercise any of these rights, please contact us through our website. We will respond within 30 days.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Children's Privacy</h2>
                </div>
                <div className="text-muted-foreground">
                  <p>
                    MultiCalculator is designed to be used by people of all ages for educational purposes. We do not knowingly collect personal information from children under 13 years of age. Our calculators are safe and educational tools suitable for students and learners of all ages.
                  </p>
                  <p className="mt-3">
                    Parents and guardians are encouraged to guide their children's internet use. If you believe a child has provided personal information to us, please contact us immediately.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Data Security</h2>
                </div>
                <div className="text-muted-foreground">
                  <p>
                    We take data security seriously and implement appropriate technical and organizational measures to protect your information:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>HTTPS encryption for all data transmission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Regular security audits and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Limited data collection and retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>No storage of calculator inputs or results</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Changes to Policy */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
                </div>
                <div className="text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will update the "Last Updated" date at the top of this page.
                  </p>
                  <p className="mt-3">
                    We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </section>

            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Scale className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold">Privacy FAQs</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left">Do you store my calculator inputs?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, absolutely not. All calculations happen locally in your browser. We never see, store, or have access to any numbers you enter into our calculators. Your financial, health, and personal calculations remain completely private.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left">How can I opt out of personalized ads?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can opt out of personalized advertising by visiting Google's Ad Settings at adssettings.google.com. You can also use browser extensions like "Privacy Badger" or enable "Do Not Track" in your browser settings.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left">Do you sell my data to third parties?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, we never sell your personal data to third parties. The only data sharing occurs through essential services like Google Analytics and AdSense, which help us maintain and improve the website.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left">Is MultiCalculator GDPR compliant?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we strive to comply with GDPR and other privacy regulations. We minimize data collection, respect user rights, and provide transparency about our data practices. EU users have additional rights under GDPR which we fully support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left">How can I contact you about privacy concerns?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can reach us through our Contact Us page at multicalculator.online/contact-us. We take all privacy inquiries seriously and aim to respond within 30 days.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}