import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PrincipalSection } from "@/components/PrincipalSection";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

import FeatureSection from "@/components/FeatureSection";
const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <Navigation />
        <HeroSection />

        <main className="container mx-auto px-4 py-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <PrincipalSection />
              <FeatureSection />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
