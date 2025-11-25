import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { PrincipalSection } from '@/components/PrincipalSection';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

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
              
              {/* Additional content sections can go here */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg shadow-md p-6 border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">Academic Excellence</h3>
                  <p className="text-muted-foreground">
                    Our curriculum combines traditional Islamic studies with modern scientific education,
                    preparing students for both spiritual and worldly success.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg shadow-md p-6 border-t-4 border-t-accent hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-accent mb-3">Modern Facilities</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art laboratories, digital classrooms, and extensive library resources
                    support our students' learning journey.
                  </p>
                </div>
              </div>
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
