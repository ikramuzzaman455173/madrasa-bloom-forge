import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "bn" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

// const translations = {
//   en: {
//     instituteName: 'BANGLADESH SCIENCE AND TECHNOLOGY MADRASA',
//     tagline: 'Excellence in Islamic Education & Modern Science',
//     home: 'Home',
//     about: 'About',
//     academics: 'Academics',
//     admission: 'Admission',
//     notice: 'Notice',
//     gallery: 'Gallery',
//     contact: 'Contact',
//     principal: 'Principal',
//     principalMessage: "Message from the Principal",
//     principalText: "Welcome to Bangladesh Science and Technology Madrasa. We are committed to providing quality education that combines Islamic values with modern scientific knowledge. Our institution strives to develop well-rounded students who are equipped for both spiritual and worldly success.",
//     latestNotices: 'Latest Notices',
//     calendar: 'Academic Calendar',
//     quickLinks: 'Quick Links',
//     aboutUs: 'About Us',
//     contactInfo: 'Contact Information',
//     followUs: 'Follow Us',
//     allRightsReserved: 'All Rights Reserved',
//     address: 'Address',
//     phone: 'Phone',
//     email: 'Email',
//   },
//   bn: {
//     instituteName: 'বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসা',
//     tagline: 'ইসলামিক শিক্ষা ও আধুনিক বিজ্ঞানে উৎকর্ষতা',
//     home: 'হোম',
//     about: 'পরিচিতি',
//     academics: 'শিক্ষা',
//     admission: 'ভর্তি',
//     notice: 'নোটিশ',
//     gallery: 'গ্যালারি',
//     contact: 'যোগাযোগ',
//     principal: 'অধ্যক্ষ',
//     principalMessage: "অধ্যক্ষের বাণী",
//     principalText: "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসায় আপনাকে স্বাগতম। আমরা ইসলামিক মূল্যবোধের সাথে আধুনিক বৈজ্ঞানিক জ্ঞান সমন্বিত মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ। আমাদের প্রতিষ্ঠান আধ্যাত্মিক এবং পার্থিব উভয় সাফল্যের জন্য প্রস্তুত সুসজ্জিত শিক্ষার্থী তৈরি করতে প্রচেষ্টা চালায়।",
//     latestNotices: 'সর্বশেষ নোটিশ',
//     calendar: 'একাডেমিক ক্যালেন্ডার',
//     quickLinks: 'দ্রুত লিংক',
//     aboutUs: 'আমাদের সম্পর্কে',
//     contactInfo: 'যোগাযোগের তথ্য',
//     followUs: 'আমাদের অনুসরণ করুন',
//     allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত',
//     address: 'ঠিকানা',
//     phone: 'ফোন',
//     email: 'ইমেইল',
//   },
//   ar: {
//     instituteName: 'مدرسة بنغلاديش للعلوم والتكنولوجيا',
//     tagline: 'التميز في التعليم الإسلامي والعلوم الحديثة',
//     home: 'الرئيسية',
//     about: 'حول',
//     academics: 'الأكاديميون',
//     admission: 'القبول',
//     notice: 'إشعار',
//     gallery: 'المعرض',
//     contact: 'اتصل',
//     principal: 'المدير',
//     principalMessage: "رسالة من المدير",
//     principalText: "مرحبا بكم في مدرسة بنغلاديش للعلوم والتكنولوجيا. نحن ملتزمون بتوفير تعليم عالي الجودة يجمع بين القيم الإسلامية والمعرفة العلمية الحديثة. تسعى مؤسستنا إلى تطوير طلاب متكاملين مجهزين للنجاح الروحي والدنيوي.",
//     latestNotices: 'أحدث الإشعارات',
//     calendar: 'التقويم الأكاديمي',
//     quickLinks: 'روابط سريعة',
//     aboutUs: 'معلومات عنا',
//     contactInfo: 'معلومات الاتصال',
//     followUs: 'تابعنا',
//     allRightsReserved: 'كل الحقوق محفوظة',
//     address: 'العنوان',
//     phone: 'هاتف',
//     email: 'البريد الإلكتروني',
//   },
// };

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
