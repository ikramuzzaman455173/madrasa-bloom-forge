import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "bn" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}


const translations = {
  en: {
    /** HEADER & BRAND **/
    instituteName: "BANGLADESH SCIENCE AND TECHNOLOGY MADRASA",
    tagline: "Excellence in Islamic Education & Modern Science",

    /** NAVBAR MAIN **/
    home: "Home",
    about: "About",
    academics: "Academics",
    admission: "Admission",
    notice: "Notice",
    gallery: "Gallery",
    contact: "Contact",

    /** NAVBAR SUBMENUS — ABOUT **/
    history: "Our History",
    missionVision: "Mission & Vision",
    administration: "Administration",
    faculty: "Faculty Members",

    /** NAVBAR SUBMENUS — ACADEMICS **/
    curriculum: "Curriculum",
    routine: "Class Routine",
    departments: "Departments",
    calendar: "Academic Calendar",

    /* HERO SECTION */
    heroSlide1Title: "Welcome to Our Institution",
    heroSlide1Subtitle: "Building Future Leaders Through Knowledge",

    heroSlide2Title: "Excellence in Education",
    heroSlide2Subtitle: "Combining Islamic Values with Modern Science",

    heroSlide3Title: "Join Our Community",
    heroSlide3Subtitle: "Admission Open for the New Academic Year",

    learnMore: "Learn More",
    applyNow: "Apply Now",

    /** PAGES **/
    principal: "Principal",
    principalMessage: "Message from the Principal",
    principalText:
      "Welcome to Bangladesh Science and Technology Madrasa. We are committed to providing quality education that integrates Islamic values with modern scientific knowledge. We strive to develop students who are prepared for both spiritual and worldly success.",

    latestNotices: "Latest Notices",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
    allRightsReserved: "All Rights Reserved",

    /** FEATURES SECTION **/
featuresAcademicTitle: "Academic Excellence",
featuresAcademicText:
  "Our curriculum combines traditional Islamic studies with modern scientific education, preparing students for both spiritual and worldly success.",

featuresFacilitiesTitle: "Modern Facilities",
featuresFacilitiesText:
  "Digital classrooms, modern labs, and an extensive library provide academic support to enhance student learning.",

featuresHolisticTitle: "Holistic Development",
featuresHolisticText:
  "We shape students through leadership training, ethics, emotional intelligence, and character-building activities.",

featuresCoCurricularTitle: "Co-Curricular Activities",
featuresCoCurricularText:
  "Students join sports, debates, robotics, Quran competitions, and creative arts to develop practical life skills.",

featuresTeachersTitle: "Qualified & Caring Teachers",
featuresTeachersText:
  "Our experienced educators provide personal guidance using modern and effective teaching methods.",

featuresSafetyTitle: "Safe & Supportive Campus",
featuresSafetyText:
  "A secure campus, positive discipline, and emotional support help students learn and grow with confidence.",


    /** FOOTER **/
    address: "Address",
    phone: "Phone",
    email: "Email"
  },

  bn: {
    /** HEADER & BRAND **/
    instituteName: "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসা",
    tagline: "ইসলামিক শিক্ষা ও আধুনিক বিজ্ঞানে উৎকর্ষতা",

    /** NAVBAR MAIN **/
    home: "হোম",
    about: "পরিচিতি",
    academics: "শিক্ষা",
    admission: "ভর্তি",
    notice: "নোটিশ",
    gallery: "গ্যালারি",
    contact: "যোগাযোগ",

    /** NAVBAR SUBMENUS — ABOUT **/
    history: "আমাদের ইতিহাস",
    missionVision: "লক্ষ্য ও উদ্দেশ্য",
    administration: "প্রশাসন",
    faculty: "শিক্ষকবৃন্দ",

    /** NAVBAR SUBMENUS — ACADEMICS **/
    curriculum: "পাঠ্যক্রম",
    routine: "ক্লাস রুটিন",
    departments: "বিভাগসমূহ",
    calendar: "একাডেমিক ক্যালেন্ডার",

    /* HERO SECTION */
    heroSlide1Title: "আমাদের প্রতিষ্ঠানে স্বাগতম",
    heroSlide1Subtitle: "জ্ঞান দিয়ে ভবিষ্যতের নেতৃত্ব গড়ে তুলি",

    heroSlide2Title: "শিক্ষায় উৎকর্ষতা",
    heroSlide2Subtitle: "ইসলামি মূল্যবোধ ও আধুনিক বিজ্ঞানের সমন্বয়",

    heroSlide3Title: "আমাদের পরিবারের অংশ হোন",
    heroSlide3Subtitle: "নতুন শিক্ষাবর্ষে ভর্তি চলছে",

    learnMore: "বিস্তারিত দেখুন",
    applyNow: "ভর্তি করুন",

    /** PAGES **/
    principal: "অধ্যক্ষ",
    principalMessage: "অধ্যক্ষের বাণী",
    principalText:
      "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসায় আপনাকে স্বাগতম। আমরা ইসলামিক মূল্যবোধের সাথে আধুনিক বৈজ্ঞানিক জ্ঞান সমন্বিত মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ। আধ্যাত্মিক ও পার্থিব উভয় সাফল্যের জন্য সুসজ্জিত শিক্ষার্থী তৈরি করাই আমাদের লক্ষ্য।",

    latestNotices: "সর্বশেষ নোটিশ",
    quickLinks: "দ্রুত লিংক",
    aboutUs: "আমাদের সম্পর্কে",
    contactInfo: "যোগাযোগের তথ্য",
    followUs: "আমাদের অনুসরণ করুন",
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত",

    /** FEATURES SECTION **/
featuresAcademicTitle: "শিক্ষাগত উৎকর্ষতা",
featuresAcademicText:
  "আমাদের পাঠ্যক্রমে ঐতিহ্যবাহী ইসলামিক শিক্ষা ও আধুনিক বৈজ্ঞানিক জ্ঞানের সমন্বয় রয়েছে, যা শিক্ষার্থীদের আধ্যাত্মিক ও পার্থিব সফলতার জন্য প্রস্তুত করে।",

featuresFacilitiesTitle: "আধুনিক সুবিধাসমূহ",
featuresFacilitiesText:
  "ডিজিটাল ক্লাসরুম, আধুনিক ল্যাব এবং সমৃদ্ধ লাইব্রেরি শিক্ষার্থীদের শেখার অভিজ্ঞতা উন্নত করতে সহায়তা করে।",

featuresHolisticTitle: "সামগ্রিক উন্নয়ন",
featuresHolisticText:
  "নেতৃত্ব প্রশিক্ষণ, নীতি-নৈতিকতা, আবেগীয় বুদ্ধিমত্তা এবং চরিত্র গঠনের কার্যক্রমের মাধ্যমে আমরা শিক্ষার্থীদের গড়ে তুলি।",

featuresCoCurricularTitle: "সহশিক্ষা কার্যক্রম",
featuresCoCurricularText:
  "ক্রীড়া, বিতর্ক, রোবোটিক্স, কোরআন প্রতিযোগিতা এবং সৃজনশীল শিল্পকর্মে অংশগ্রহণের মাধ্যমে শিক্ষার্থীরা প্রায়োগিক জীবন দক্ষতা অর্জন করে।",

featuresTeachersTitle: "যোগ্য ও যত্নশীল শিক্ষকবৃন্দ",
featuresTeachersText:
  "আমাদের অভিজ্ঞ শিক্ষকেরা আধুনিক ও কার্যকর পদ্ধতিতে শিক্ষার্থীদের ব্যক্তিগত নির্দেশনা প্রদান করেন।",

featuresSafetyTitle: "নিরাপদ ও সহায়ক ক্যাম্পাস",
featuresSafetyText:
  "একটি নিরাপদ পরিবেশ, ইতিবাচক শৃঙ্খলা এবং মানসিক সহায়তা শিক্ষার্থীদের আত্মবিশ্বাসের সাথে শেখা ও বেড়ে উঠতে সহায়তা করে।",

    /** FOOTER **/
    address: "ঠিকানা",
    phone: "ফোন",
    email: "ইমেইল"
  },

  ar: {
    /** HEADER & BRAND **/
    instituteName: "مدرسة بنغلاديش للعلوم والتكنولوجيا",
    tagline: "التميز في التعليم الإسلامي والعلوم الحديثة",

    /** NAVBAR MAIN **/
    home: "الرئيسية",
    about: "حول",
    academics: "الأكاديميون",
    admission: "القبول",
    notice: "الإشعارات",
    gallery: "المعرض",
    contact: "اتصل بنا",

    /** NAVBAR SUBMENUS — ABOUT **/
    history: "تاريخنا",
    missionVision: "الرؤية والرسالة",
    administration: "الإدارة",
    faculty: "الهيئة التدريسية",

    /** NAVBAR SUBMENUS — ACADEMICS **/
    curriculum: "المنهج الدراسي",
    routine: "جدول الحصص",
    departments: "الأقسام",
    calendar: "التقويم الأكاديمي",

    /* HERO SECTION */

    heroSlide1Title: "مرحبًا بكم في مؤسستنا",
heroSlide1Subtitle: "نبني قادة المستقبل بالعلم والمعرفة",

heroSlide2Title: "التميز في التعليم",
heroSlide2Subtitle: "دمج القيم الإسلامية مع العلوم الحديثة",

heroSlide3Title: "انضم إلى مجتمعنا",
heroSlide3Subtitle: "التسجيل مفتوح للعام الدراسي الجديد",

learnMore: "اعرف المزيد",
applyNow: "سجل الآن",

    /** PAGES **/
    principal: "المدير",
    principalMessage: "رسالة من المدير",
    principalText:
      "مرحبًا بكم في مدرسة بنغلاديش للعلوم والتكنولوجيا. نحن ملتزمون بتقديم تعليم عالي الجودة يجمع بين القيم الإسلامية والمعرفة العلمية الحديثة. نسعى إلى إعداد طلاب متكاملين للنجاح الروحي والدنيوي.",

    latestNotices: "أحدث الإشعارات",
    quickLinks: "روابط سريعة",
    aboutUs: "معلومات عنا",
    contactInfo: "معلومات الاتصال",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة",

    /** FEATURES SECTION **/
featuresAcademicTitle: "التميز الأكاديمي",
featuresAcademicText:
  "يجمع منهجنا بين الدراسات الإسلامية التقليدية والتعليم العلمي الحديث، مما يُعدّ الطلاب للنجاح الروحي والدنيوي.",

featuresFacilitiesTitle: "مرافق حديثة",
featuresFacilitiesText:
  "توفر الفصول الرقمية والمختبرات الحديثة والمكتبة الواسعة دعمًا أكاديميًا يعزز تعلم الطلاب.",

featuresHolisticTitle: "التنمية الشاملة",
featuresHolisticText:
  "نطوّر الطلاب من خلال تدريب القيادة والأخلاق والذكاء العاطفي وأنشطة بناء الشخصية.",

featuresCoCurricularTitle: "الأنشطة اللاصفية",
featuresCoCurricularText:
  "يشارك الطلاب في الرياضة والمناظرات والروبوتات ومسابقة القرآن والفنون الإبداعية لاكتساب مهارات حياتية عملية.",

featuresTeachersTitle: "معلمون مؤهلون وودودون",
featuresTeachersText:
  "يوفر معلمونا ذوو الخبرة التوجيه الشخصي باستخدام أساليب تعليمية حديثة وفعّالة.",

featuresSafetyTitle: "حرم آمن وداعم",
featuresSafetyText:
  "يساعد الحرم الآمن والانضباط الإيجابي والدعم العاطفي الطلاب على التعلم والنمو بثقة.",


    /** FOOTER **/
    address: "العنوان",
    phone: "هاتف",
    email: "البريد الإلكتروني"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
