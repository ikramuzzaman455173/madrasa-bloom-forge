import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
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

// Residential Section Pages
import HostelIntro from "./pages/residential/HostelIntro";
import HostelDirectors from "./pages/residential/HostelDirectors";
import HostelRules from "./pages/residential/HostelRules";
import HostelCharges from "./pages/residential/HostelCharges";
import HostelPolicies from "./pages/residential/HostelPolicies";
import DailySchedule from "./pages/residential/DailySchedule";

// Publication Section Pages
import NewBikash from "./pages/publication/NewBikash";
import EventSchedule from "./pages/publication/EventSchedule";
import StudyTour from "./pages/publication/StudyTour";
import YearlyActivity from "./pages/publication/YearlyActivity";
import AcademicCalendar from "./pages/publication/AcademicCalendar";
import SautunNajat from "./pages/publication/SautunNajat";
import WallMagazine from "./pages/publication/WallMagazine";
import Others from "./pages/publication/Others";

// Library Section Pages
import LibraryIntro from "./pages/library/LibraryIntro";
import LibraryCatalog from "./pages/library/LibraryCatalog";
import LibraryPolicy from "./pages/library/LibraryPolicy";

// Branches Section Pages
import TakhssusiBranch from "./pages/branches/TakhssusiBranch";
import WomenBranch from "./pages/branches/WomenBranch";
import HifzBranch from "./pages/branches/HifzBranch";
import OrphanageBranch from "./pages/branches/OrphanageBranch";
import KitabBranch from "./pages/branches/KitabBranch";

// Media Section Pages
import PhotoGallery from "./pages/media/PhotoGallery";
import VideoGallery from "./pages/media/VideoGallery";

// Login Section Pages
import StudentLogin from "./pages/login/StudentLogin";
import TeacherLogin from "./pages/login/TeacherLogin";
import SoftwareLogin from "./pages/login/SoftwareLogin";
import AdminLogin from "./pages/login/AdminLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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

            {/* Residential Section Routes */}
            <Route path="/residential/hostel-intro" element={<HostelIntro />} />
            <Route path="/residential/directors" element={<HostelDirectors />} />
            <Route path="/residential/rules" element={<HostelRules />} />
            <Route path="/residential/charges" element={<HostelCharges />} />
            <Route path="/residential/policies" element={<HostelPolicies />} />
            <Route path="/residential/daily-schedule" element={<DailySchedule />} />

            {/* Publication Section Routes */}
            <Route path="/publication/new-bikash" element={<NewBikash />} />
            <Route path="/publication/event-schedule" element={<EventSchedule />} />
            <Route path="/publication/study-tour" element={<StudyTour />} />
            <Route path="/publication/yearly-activity" element={<YearlyActivity />} />
            <Route path="/publication/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/publication/sautun-najat" element={<SautunNajat />} />
            <Route path="/publication/wall-magazine" element={<WallMagazine />} />
            <Route path="/publication/others" element={<Others />} />

            {/* Library Section Routes */}
            <Route path="/library/intro" element={<LibraryIntro />} />
            <Route path="/library/catalog" element={<LibraryCatalog />} />
            <Route path="/library/policy" element={<LibraryPolicy />} />

            {/* Branches Section Routes */}
            <Route path="/branches/takhssusi" element={<TakhssusiBranch />} />
            <Route path="/branches/women" element={<WomenBranch />} />
            <Route path="/branches/hifz" element={<HifzBranch />} />
            <Route path="/branches/orphanage" element={<OrphanageBranch />} />
            <Route path="/branches/kitab" element={<KitabBranch />} />

            {/* Media Section Routes */}
            <Route path="/media/photos" element={<PhotoGallery />} />
            <Route path="/media/videos" element={<VideoGallery />} />

            {/* Login Section Routes */}
            <Route path="/login/student" element={<StudentLogin />} />
            <Route path="/login/teacher" element={<TeacherLogin />} />
            <Route path="/login/software" element={<SoftwareLogin />} />
            <Route path="/login/admin" element={<AdminLogin />} />

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
