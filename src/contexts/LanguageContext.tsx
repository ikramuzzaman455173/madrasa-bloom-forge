import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'bn' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    instituteName: 'BANGLADESH SCIENCE AND TECHNOLOGY MADRASA',
    tagline: 'Excellence in Islamic Education & Modern Science',
    home: 'Home',
    about: 'About',
    academics: 'Academics',
    admission: 'Admission',
    notice: 'Notice',
    gallery: 'Gallery',
    contact: 'Contact',
    principal: 'Principal',
    principalMessage: "Message from the Principal",
    principalText: "Welcome to Bangladesh Science and Technology Madrasa. We are committed to providing quality education that combines Islamic values with modern scientific knowledge. Our institution strives to develop well-rounded students who are equipped for both spiritual and worldly success.",
    latestNotices: 'Latest Notices',
    calendar: 'Academic Calendar',
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    allRightsReserved: 'All Rights Reserved',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
  },
  bn: {
    instituteName: 'বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসা',
    tagline: 'ইসলামিক শিক্ষা ও আধুনিক বিজ্ঞানে উৎকর্ষতা',
    home: 'হোম',
    about: 'পরিচিতি',
    academics: 'শিক্ষা',
    admission: 'ভর্তি',
    notice: 'নোটিশ',
    gallery: 'গ্যালারি',
    contact: 'যোগাযোগ',
    principal: 'অধ্যক্ষ',
    principalMessage: "অধ্যক্ষের বাণী",
    principalText: "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসায় আপনাকে স্বাগতম। আমরা ইসলামিক মূল্যবোধের সাথে আধুনিক বৈজ্ঞানিক জ্ঞান সমন্বিত মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ। আমাদের প্রতিষ্ঠান আধ্যাত্মিক এবং পার্থিব উভয় সাফল্যের জন্য প্রস্তুত সুসজ্জিত শিক্ষার্থী তৈরি করতে প্রচেষ্টা চালায়।",
    latestNotices: 'সর্বশেষ নোটিশ',
    calendar: 'একাডেমিক ক্যালেন্ডার',
    quickLinks: 'দ্রুত লিংক',
    aboutUs: 'আমাদের সম্পর্কে',
    contactInfo: 'যোগাযোগের তথ্য',
    followUs: 'আমাদের অনুসরণ করুন',
    allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত',
    address: 'ঠিকানা',
    phone: 'ফোন',
    email: 'ইমেইল',
  },
  ar: {
    instituteName: 'مدرسة بنغلاديش للعلوم والتكنولوجيا',
    tagline: 'التميز في التعليم الإسلامي والعلوم الحديثة',
    home: 'الرئيسية',
    about: 'حول',
    academics: 'الأكاديميون',
    admission: 'القبول',
    notice: 'إشعار',
    gallery: 'المعرض',
    contact: 'اتصل',
    principal: 'المدير',
    principalMessage: "رسالة من المدير",
    principalText: "مرحبا بكم في مدرسة بنغلاديش للعلوم والتكنولوجيا. نحن ملتزمون بتوفير تعليم عالي الجودة يجمع بين القيم الإسلامية والمعرفة العلمية الحديثة. تسعى مؤسستنا إلى تطوير طلاب متكاملين مجهزين للنجاح الروحي والدنيوي.",
    latestNotices: 'أحدث الإشعارات',
    calendar: 'التقويم الأكاديمي',
    quickLinks: 'روابط سريعة',
    aboutUs: 'معلومات عنا',
    contactInfo: 'معلومات الاتصال',
    followUs: 'تابعنا',
    allRightsReserved: 'كل الحقوق محفوظة',
    address: 'العنوان',
    phone: 'هاتف',
    email: 'البريد الإلكتروني',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
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
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
