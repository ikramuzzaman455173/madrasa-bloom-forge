import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BookOpen,
  Building2,
  Sparkles,
  Trophy,
  Users,
  Shield,
  Star
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeatureSection = () => {
  const { t, language } = useLanguage();

  const isBN = language === "bn";
  const isAR = language === "ar";

  const fontClass = isBN ? "font-bengali" : isAR ? "font-arabic" : "";
  const textAlignClass = isAR ? "text-right" : "text-left";

  return (
    <Card className="shadow-md border-t-4 border-t-primary overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary via-primary to-primary-dark text-white py-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Star className="w-6 h-6" />
          {t('whyChooseUs')}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-6 bg-gradient-to-b from-gray-50 to-white">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${fontClass} ${textAlignClass}`}>

          {/* Academic Excellence */}
          <div
            className="group bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 
            hover:shadow-md hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                <BookOpen className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
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
            className="group bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 
            hover:shadow-md hover:border-accent/40 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-100 transition-colors">
                <Building2 className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
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
            className="group bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 
            hover:shadow-md hover:border-purple-400 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-50 p-2 rounded-lg group-hover:bg-purple-100 transition-colors">
                <Sparkles className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
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
            className="group bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 
            hover:shadow-md hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-50 p-2 rounded-lg group-hover:bg-orange-100 transition-colors">
                <Trophy className="h-6 w-6 text-orange-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
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
            className="group bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 
            hover:shadow-md hover:border-accent/50 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-50 p-2 rounded-lg group-hover:bg-pink-100 transition-colors">
                <Users className="h-6 w-6 text-pink-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
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
            className="group bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 
            hover:shadow-md hover:border-teal-400 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-50 p-2 rounded-lg group-hover:bg-teal-100 transition-colors">
                <Shield className="h-6 w-6 text-teal-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {t("featuresSafetyTitle")}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("featuresSafetyText")}
            </p>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureSection;
