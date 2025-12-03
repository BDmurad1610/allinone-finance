import { Download, Smartphone, Monitor, CheckCircle, Apple, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Install = () => {
  const { isInstallable, isInstalled, installApp } = usePWAInstall();

  return (
    <>
      <SEOHead
        title="Install Calculator App | Free Download for Phone & Desktop"
        description="Install Calculator app on your phone or desktop for instant access to BMI, mortgage, loan calculators and more. No app store needed - install directly from browser."
        canonicalUrl="https://multicalculator.online/install"
        keywords="install calculator app, download calculator, calculator app android, calculator app iphone, free calculator download"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground mb-6">
                <Smartphone className="h-10 w-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Install Calculator App
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get instant access to 20+ calculators right from your home screen. 
                Works offline, loads fast, and feels like a native app!
              </p>
            </div>

            {/* Install Button */}
            {isInstalled ? (
              <Card className="mb-12 border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
                <CardContent className="flex items-center justify-center gap-3 py-6">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg font-medium text-green-700 dark:text-green-400">
                    App is already installed on this device!
                  </span>
                </CardContent>
              </Card>
            ) : isInstallable ? (
              <Card className="mb-12 border-primary/20 bg-primary/5">
                <CardContent className="flex flex-col items-center gap-4 py-8">
                  <Button size="lg" onClick={installApp} className="text-lg px-8 py-6">
                    <Download className="h-5 w-5 mr-2" />
                    Install App Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Free • No app store • Installs in seconds
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-12">
                <CardContent className="py-6">
                  <p className="text-center text-muted-foreground">
                    Use the instructions below to install the app on your device.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Works Offline</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate anytime, even without internet connection
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Native Feel</h3>
                  <p className="text-sm text-muted-foreground">
                    Full screen experience just like a native app
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">All Devices</h3>
                  <p className="text-sm text-muted-foreground">
                    Install on phone, tablet, or desktop computer
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Installation Instructions */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-center mb-8">How to Install</h2>
              
              {/* Android */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Chrome className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold">Android (Chrome)</h3>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Open this website in Chrome browser</li>
                    <li>Tap the menu (⋮) in the top right corner</li>
                    <li>Select "Add to Home screen" or "Install app"</li>
                    <li>Tap "Install" to confirm</li>
                  </ol>
                </CardContent>
              </Card>

              {/* iPhone */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Apple className="h-6 w-6" />
                    <h3 className="text-lg font-semibold">iPhone / iPad (Safari)</h3>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Open this website in Safari browser</li>
                    <li>Tap the Share button (square with arrow) at the bottom</li>
                    <li>Scroll down and tap "Add to Home Screen"</li>
                    <li>Tap "Add" in the top right corner</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Desktop */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold">Desktop (Chrome/Edge)</h3>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Open this website in Chrome or Edge browser</li>
                    <li>Look for the install icon (⊕) in the address bar</li>
                    <li>Click "Install" in the popup</li>
                    <li>The app will open in its own window</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Install;
