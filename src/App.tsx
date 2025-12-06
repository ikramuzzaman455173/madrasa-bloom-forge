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

// Academics Section Pages
import ClassTeachers from "./pages/academics/ClassTeachers";
import EducationLevels from "./pages/academics/Levels";
import Curriculum from "./pages/academics/Curriculum";
import CoCurriculum from "./pages/academics/CoCurriculum";
import Functions from "./pages/academics/Functions";
import Results from "./pages/academics/Results";
import ExamMethod from "./pages/academics/ExamMethod";
import HolidayList from "./pages/academics/HolidayList";
import ExamRoutine from "./pages/academics/ExamRoutine";
import ClassRoutine from "./pages/academics/ClassRoutine";

// Admission Section Pages
import AdmissionTime from "./pages/admission/AdmissionTime";
import AdmissionTest from "./pages/admission/AdmissionTest";
import AdmissionProcedure from "./pages/admission/AdmissionProcedure";
import AdmissionFees from "./pages/admission/AdmissionFees";
import AdmissionTerms from "./pages/admission/AdmissionTerms";

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

            {/* Academics Section Routes */}
            <Route path="/academics/class-teachers" element={<ClassTeachers />} />
            <Route path="/academics/levels" element={<EducationLevels />} />
            <Route path="/academics/curriculum" element={<Curriculum />} />
            <Route path="/academics/co-curriculum" element={<CoCurriculum />} />
            <Route path="/academics/functions" element={<Functions />} />
            <Route path="/academics/results" element={<Results />} />
            <Route path="/academics/exam-method" element={<ExamMethod />} />
            <Route path="/academics/holiday-list" element={<HolidayList />} />
            <Route path="/academics/exam-routine" element={<ExamRoutine />} />
            <Route path="/academics/class-routine" element={<ClassRoutine />} />

            {/* Admission Section Routes */}
            <Route path="/admission/time" element={<AdmissionTime />} />
            <Route path="/admission/test" element={<AdmissionTest />} />
            <Route path="/admission/procedure" element={<AdmissionProcedure />} />
            <Route path="/admission/fees" element={<AdmissionFees />} />
            <Route path="/admission/terms" element={<AdmissionTerms />} />

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
