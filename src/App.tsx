import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About Section Pages
import InstitutionOverview from "./pages/about/Overview";
import PrincipalPage from "./pages/about/Principal";
import FeaturesPage from "./pages/about/Features";
import EstablishmentPlan from "./pages/about/EstablishmentPlan";
import MissionPage from "./pages/about/Mission";
import GoverningBody from "./pages/about/GoverningBody";
import CampusComplex from "./pages/about/CampusComplex";
import TeachersPage from "./pages/about/Teachers";
import OfficersStaff from "./pages/about/OfficersStaff";

// Other Pages
import ContactPage from "./pages/Contact";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* About Section Routes */}
            <Route path="/about/overview" element={<InstitutionOverview />} />
            <Route path="/about/principal" element={<PrincipalPage />} />
            <Route path="/about/features" element={<FeaturesPage />} />
            <Route path="/about/establishment-plan" element={<EstablishmentPlan />} />
            <Route path="/about/mission" element={<MissionPage />} />
            <Route path="/about/governing-body" element={<GoverningBody />} />
            <Route path="/about/complex" element={<CampusComplex />} />
            <Route path="/about/teachers" element={<TeachersPage />} />
            <Route path="/about/officers" element={<OfficersStaff />} />

            {/* Other Pages */}
            <Route path="/contact" element={<ContactPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
