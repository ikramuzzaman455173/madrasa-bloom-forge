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
residential: "Residential",
publication: "Publication",
library: "Library",
branches: "Branches",
media: "Media",
contact: "Contact",
login: "Login",

/** SUBMENU — ABOUT **/
about_overview: "Institution Overview",
about_principal: "Principal's Message & Biography",
about_features: "Features",
about_establishmentPlan: "Establishment Plan",
about_mission: "Mission & Objectives",
about_governingBody: "Governing Body",
about_complex: "Campus Complex",
about_teachers: "Teachers Information",
about_officers: "Officers & Staff",

/** SUBMENU — ACADEMICS **/
ac_classTeachers: "List of Class Teachers",
ac_levels: "Education Levels",
ac_curriculum: "Curriculum",
ac_cocurriculum: "Co-Curriculum",
ac_functions: "Programs & Events",
ac_results: "Results",
ac_examMethod: "Examination Method",
ac_holidayList: "Holiday List",
ac_examRoutine: "Exam Routine",
ac_classRoutine: "Class Routine",

/** SUBMENU — ADMISSION **/
admission_time: "Admission Time",
admission_test: "Admission Test",
admission_procedure: "Admission Procedure",
admission_fees: "Fees by Class",
admission_terms: "Admission Requirements",

/** SUBMENU — RESIDENTIAL **/
res_hostelIntro: "Hostel Introduction",
res_directors: "Residential Halls & Directors",
res_rules: "Housing Rules",
res_charges: "Housing Charges",
res_policies: "Residential Policies",
res_dailySchedule: "Daily Residential Schedule",

/** SUBMENU — PUBLICATION **/
pub_newBikash: "Monthly New Bikash",
pub_eventSchedule: "Event Schedule",
pub_studyTour: "Study Tour Souvenir",
pub_yearlyActivity: "Yearly Activities",
pub_academicCalendar: "Academic Calendar",
pub_sautunNajat: "Quarterly Sautun Najat",
pub_wallMagazine: "Wall Magazine",
pub_others: "Others",

/** SUBMENU — LIBRARY **/
lib_intro: "Library Introduction",
lib_catalog: "Catalog",
lib_policy: "Policies",

/** SUBMENU — BRANCHES **/
br_takhssusi: "Takhssusi Branch",
br_women: "Women’s Branch",
br_hifz: "Hifz Section",
br_orphanage: "Orphanage",
br_kitab: "Kitab Department",

/** SUBMENU — MEDIA **/
media_photos: "Photo Gallery",
media_videos: "Video Gallery",

/** SUBMENU — LOGIN **/
login_student: "Student/Guardian",
login_teacher: "Teacher",
login_software: "Software Login",
login_admin: "Website Admin",

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
academics: "একাডেমিক",
admission: "ভর্তি",
residential: "আবাসন",
publication: "প্রকাশনা",
library: "লাইব্রেরি",
branches: "শাখা প্রতিষ্ঠান",
media: "মিডিয়া",
contact: "যোগাযোগ",
login: "লগইন",

/** SUBMENU — ABOUT **/
about_overview: "এক নাজরে মাদরাসা",
about_principal: "অধ্যক্ষের বাণী ও সংক্ষিপ্ত জীবনবৃত্তান্ত",
about_features: "বৈশিষ্ট্য",
about_establishmentPlan: "প্রতিষ্ঠার পরিকল্পনা",
about_mission: "প্রতিষ্ঠার লক্ষ্য",
about_governingBody: "গভর্নিং বডি",
about_complex: "কমপ্লেক্স",
about_teachers: "শিক্ষকমন্ডলীর তথ্যবলী",
about_officers: "কর্মকর্তা ও কর্মচারী",

/** SUBMENU — ACADEMICS **/
ac_classTeachers: "শ্রেণী শিক্ষক এর তালিকা",
ac_levels: "শিক্ষা স্তর",
ac_curriculum: "পাঠ্যক্রম",
ac_cocurriculum: "সহ-পাঠ্যক্রম",
ac_functions: "অনুষ্ঠানমালা",
ac_results: "ফলাফল",
ac_examMethod: "পরীক্ষা পদ্ধতি",
ac_holidayList: "ছুটির তালিকা",
ac_examRoutine: "পরীক্ষার রুটিন",
ac_classRoutine: "ক্লাস রুটিন",

/** SUBMENU — ADMISSION **/
admission_time: "ভর্তির সময়",
admission_test: "ভর্তি পরিক্ষা",
admission_procedure: "ভর্তি প্রক্রিয়া",
admission_fees: "জামাআত ওয়ারী বিভিন্ন ফি",
admission_terms: "ভর্তির শর্তাবলী",

/** SUBMENU — RESIDENTIAL **/
res_hostelIntro: "ছাত্রাবাস পরিচিতি",
res_directors: "আবাসিক হল ও পরিচালকবৃন্দ",
res_rules: "আবাসন প্রাপ্তির নিয়মাবলী",
res_charges: "আবাসন চার্জ",
res_policies: "আবাসিক নীতিমালা",
res_dailySchedule: "দৈনিক আবাসিক কার্যসূচি",

/** SUBMENU — PUBLICATION **/
pub_newBikash: "মাসিক নতুন বিকাশ",
pub_eventSchedule: "ইভেন্ট সিডিউল",
pub_studyTour: "শিক্ষাসফর স্মারক",
pub_yearlyActivity: "বার্ষিক কার্যক্রম",
pub_academicCalendar: "একাডেমিক ক্যালেন্ডার",
pub_sautunNajat: "ত্রৈ মাসিক সাওতুন নাজাত",
pub_wallMagazine: "দেয়ালিকা",
pub_others: "অন্যান্য",

/** SUBMENU — LIBRARY **/
lib_intro: "মাকতাবা পরিচিতি",
lib_catalog: "ক্যাটালগ",
lib_policy: "নীতিমালা",

/** SUBMENU — BRANCHES **/
br_takhssusi: "তাখসীসি শাখা",
br_women: "মহিলা শাখা",
br_hifz: "নেছারিয়া হেফজখানা",
br_orphanage: "ছালেহিয়া এতিমখানা",
br_kitab: "কিতাব বিভাগ",

/** SUBMENU — MEDIA **/
media_photos: "ফটোগ্যালারী",
media_videos: "ভিডিও গ্যালারি",

/** SUBMENU — LOGIN **/
login_student: "শিক্ষার্থী/অভিভাবক",
login_teacher: "শিক্ষক",
login_software: "সফটওয়্যার লগইন",
login_admin: "ওয়েবসাইট অ্যাডমিন",

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
about: "التعريف",
academics: "الأكاديميات",
admission: "القبول",
residential: "السكن",
publication: "النشر",
library: "المكتبة",
branches: "الفروع",
media: "الإعلام",
contact: "اتصل بنا",
login: "تسجيل الدخول",

/** SUBMENU — ABOUT **/
about_overview: "نظرة عامة على المؤسسة",
about_principal: "رسالة المدير والسيرة الذاتية",
about_features: "الميزات",
about_establishmentPlan: "خطة التأسيس",
about_mission: "الأهداف والرسالة",
about_governingBody: "مجلس الإدارة",
about_complex: "المجمع",
about_teachers: "معلومات المعلمين",
about_officers: "الضباط والموظفون",

/** SUBMENU — ACADEMICS **/
ac_classTeachers: "قائمة معلمي الصفوف",
ac_levels: "المستويات التعليمية",
ac_curriculum: "المنهج الدراسي",
ac_cocurriculum: "الأنشطة المساندة",
ac_functions: "البرامج والفعاليات",
ac_results: "النتائج",
ac_examMethod: "نظام الامتحانات",
ac_holidayList: "قائمة الإجازات",
ac_examRoutine: "جدول الامتحانات",
ac_classRoutine: "جدول الحصص",

/** SUBMENU — ADMISSION **/
admission_time: "مواعيد القبول",
admission_test: "اختبار القبول",
admission_procedure: "إجراءات القبول",
admission_fees: "الرسوم حسب الصف",
admission_terms: "شروط القبول",

/** SUBMENU — RESIDENTIAL **/
res_hostelIntro: "مقدمة السكن",
res_directors: "السكن الداخلي والمديرون",
res_rules: "قوانين السكن",
res_charges: "رسوم السكن",
res_policies: "سياسات السكن",
res_dailySchedule: "الجدول اليومي للسكن",

/** SUBMENU — PUBLICATION **/
pub_newBikash: "مجلة التطوير الشهرية",
pub_eventSchedule: "جدول الفعاليات",
pub_studyTour: "كتيب رحلة الدراسة",
pub_yearlyActivity: "الأنشطة السنوية",
pub_academicCalendar: "التقويم الأكاديمي",
pub_sautunNajat: "مجلة سوتون نجات الفصلية",
pub_wallMagazine: "مجلة الحائط",
pub_others: "أخرى",

/** SUBMENU — LIBRARY **/
lib_intro: "مقدمة المكتبة",
lib_catalog: "الفهرس",
lib_policy: "السياسات",

/** SUBMENU — BRANCHES **/
br_takhssusi: "فرع التخصص",
br_women: "فرع النساء",
br_hifz: "قسم التحفيظ",
br_orphanage: "اليتيم خانة",
br_kitab: "قسم الكتب",

/** SUBMENU — MEDIA **/
media_photos: "معرض الصور",
media_videos: "معرض الفيديو",

/** SUBMENU — LOGIN **/
login_student: "الطالب / ولي الأمر",
login_teacher: "المعلم",
login_software: "تسجيل دخول النظام",
login_admin: "مدير الموقع",

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
