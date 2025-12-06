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

  const features = [
    {
      icon: BookOpen,
      title: t("featuresAcademicTitle"),
      text: t("featuresAcademicText"),
      color: "text-primary",
      bg: "bg-primary/10",
      hoverBg: "hover:bg-primary/20",
      borderColor: "hover:border-primary/40"
    },
    {
      icon: Building2,
      title: t("featuresFacilitiesTitle"),
      text: t("featuresFacilitiesText"),
      color: "text-accent",
      bg: "bg-accent/10",
      hoverBg: "hover:bg-accent/20",
      borderColor: "hover:border-accent/40"
    },
    {
      icon: Sparkles,
      title: t("featuresHolisticTitle"),
      text: t("featuresHolisticText"),
      color: "text-primary",
      bg: "bg-primary/10",
      hoverBg: "hover:bg-primary/20",
      borderColor: "hover:border-primary/40"
    },
    {
      icon: Trophy,
      title: t("featuresCoCurricularTitle"),
      text: t("featuresCoCurricularText"),
      color: "text-accent",
      bg: "bg-accent/10",
      hoverBg: "hover:bg-accent/20",
      borderColor: "hover:border-accent/40"
    },
    {
      icon: Users,
      title: t("featuresTeachersTitle"),
      text: t("featuresTeachersText"),
      color: "text-primary",
      bg: "bg-primary/10",
      hoverBg: "hover:bg-primary/20",
      borderColor: "hover:border-primary/40"
    },
    {
      icon: Shield,
      title: t("featuresSafetyTitle"),
      text: t("featuresSafetyText"),
      color: "text-accent",
      bg: "bg-accent/10",
      hoverBg: "hover:bg-accent/20",
      borderColor: "hover:border-accent/40"
    }
  ];

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
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 
              hover:shadow-md ${feature.borderColor} hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${feature.bg} ${feature.hoverBg} p-2 rounded-lg transition-colors`}>
                  <feature.icon className={`h-6 w-6 ${feature.color} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureSection;
