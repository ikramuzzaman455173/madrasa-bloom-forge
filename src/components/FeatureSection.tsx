
// import {
//   BookOpen,
//   Building2,
//   Sparkles,
//   Trophy,
//   Users,
//   Shield
// } from "lucide-react";
// const FeatureSection = () => {
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Academic Excellence */}
//         <div
//           className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
//                   hover:shadow-md hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <BookOpen className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
//             <h3 className="text-xl font-semibold text-foreground">
//               Academic Excellence
//             </h3>
//           </div>

//           <p className="text-muted-foreground leading-relaxed">
//             Our curriculum combines traditional Islamic studies with modern
//             scientific education, preparing students for both spiritual and
//             worldly success.
//           </p>
//         </div>

//         {/* Modern Facilities */}
//         <div
//           className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
//                   hover:shadow-md hover:border-accent/40 hover:-translate-y-1 relative overflow-hidden"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <Building2 className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
//             <h3 className="text-xl font-semibold text-foreground">
//               Modern Facilities
//             </h3>
//           </div>

//           <p className="text-muted-foreground leading-relaxed">
//             Digital classrooms, modern labs, and an extensive library provide
//             academic support to enhance student learning.
//           </p>
//         </div>

//         {/* Holistic Development */}
//         <div
//           className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
//                   hover:shadow-md hover:border-destructive/40 hover:-translate-y-1 relative overflow-hidden"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <Sparkles className="h-6 w-6 text-destructive transition-transform duration-300 group-hover:scale-110" />
//             <h3 className="text-xl font-semibold text-foreground">
//               Holistic Development
//             </h3>
//           </div>

//           <p className="text-muted-foreground leading-relaxed">
//             We shape students through leadership training, ethics, emotional
//             intelligence, and character-building activities.
//           </p>
//         </div>

//         {/* Co-Curricular Activities */}
//         <div
//           className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
//                   hover:shadow-md hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <Trophy className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
//             <h3 className="text-xl font-semibold text-foreground">
//               Co-Curricular Activities
//             </h3>
//           </div>

//           <p className="text-muted-foreground leading-relaxed">
//             Students join sports, debates, robotics, Quran competitions, and
//             creative arts to develop practical life skills.
//           </p>
//         </div>

//         {/* Qualified Teachers */}
//         <div
//           className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
//                   hover:shadow-md hover:border-accent/50 hover:-translate-y-1 relative overflow-hidden"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <Users className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
//             <h3 className="text-xl font-semibold text-foreground">
//               Qualified & Caring Teachers
//             </h3>
//           </div>

//           <p className="text-muted-foreground leading-relaxed">
//             Our experienced educators provide personal guidance using modern and
//             effective teaching methods.
//           </p>
//         </div>

//         {/* Safe Environment */}
//         <div
//           className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
//                   hover:shadow-md hover:border-destructive/40 hover:-translate-y-1 relative overflow-hidden"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <Shield className="h-6 w-6 text-destructive transition-transform duration-300 group-hover:scale-110" />
//             <h3 className="text-xl font-semibold text-foreground">
//               Safe & Supportive Campus
//             </h3>
//           </div>

//           <p className="text-muted-foreground leading-relaxed">
//             A secure campus, positive discipline, and emotional support help
//             students learn and grow with confidence.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeatureSection;



import {
  BookOpen,
  Building2,
  Sparkles,
  Trophy,
  Users,
  Shield
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const FeatureSection = () => {
  const { t, language } = useLanguage();

  const isBN = language === "bn";
  const isAR = language === "ar";

  const fontClass = isBN ? "font-bengali" : isAR ? "font-arabic" : "";
  const textAlignClass = isAR ? "text-right" : "text-left";

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${fontClass} ${textAlignClass}`}>

      {/* Academic Excellence */}
      <div
        className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
        hover:shadow-md hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("featuresAcademicTitle")}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {t("featuresAcademicText")}
        </p>
      </div>

      {/* Modern Facilities */}
      <div
        className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
        hover:shadow-md hover:border-accent/40 hover:-translate-y-1 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("featuresFacilitiesTitle")}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {t("featuresFacilitiesText")}
        </p>
      </div>

      {/* Holistic Development */}
      <div
        className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
        hover:shadow-md hover:border-destructive/40 hover:-translate-y-1 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-destructive transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("featuresHolisticTitle")}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {t("featuresHolisticText")}
        </p>
      </div>

      {/* Co-Curricular Activities */}
      <div
        className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
        hover:shadow-md hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("featuresCoCurricularTitle")}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {t("featuresCoCurricularText")}
        </p>
      </div>

      {/* Qualified Teachers */}
      <div
        className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
        hover:shadow-md hover:border-accent/50 hover:-translate-y-1 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("featuresTeachersTitle")}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {t("featuresTeachersText")}
        </p>
      </div>

      {/* Safe Environment */}
      <div
        className="group bg-card border rounded-lg p-6 shadow-sm transition-all duration-300 animate-fade-up
        hover:shadow-md hover:border-destructive/40 hover:-translate-y-1 relative overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-6 w-6 text-destructive transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-semibold text-foreground">
            {t("featuresSafetyTitle")}
          </h3>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {t("featuresSafetyText")}
        </p>
      </div>

    </div>
  );
};

export default FeatureSection;
