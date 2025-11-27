// import { useLanguage } from '@/contexts/LanguageContext';
// import { Globe, Clock } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import logo from '@/assets/logo.png';

// export const Header = () => {
//   const { language, setLanguage, t, isRTL } = useLanguage();
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const langClass = (lang: string) =>
//     language === lang
//       ? "bg-primary-foreground/20 text-primary-foreground border border-primary-foreground shadow-sm"
//       : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-dark/40";

//   return (
//     <header className="bg-card shadow-sm border-b backdrop-blur-md">
//       {/* ==== TOP INFO BAR ==== */}
//       <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex flex-wrap items-center justify-between text-sm">

//             {/* TIME */}
//             <div className="flex items-center gap-2 animate-fade-right font-medium tracking-wide">
//               <Clock className="w-4 h-4 opacity-80" />
//               <span>{format(currentTime, "EEEE, MMM dd, yyyy")}</span>
//               <span className="hidden md:inline">•</span>
//               <span className="hidden md:inline">{format(currentTime, "hh:mm:ss a")}</span>
//             </div>

//             {/* LANGUAGE SELECTOR */}
//             <div className="flex items-center gap-2 animate-fade-left">
//               <Globe className="w-4 h-4 opacity-80" />
//               <div className="flex gap-1 bg-primary/30 rounded-full p-1 backdrop-blur-sm border border-white/10 shadow-inner">

//                 {/* EN */}
//                 <Button
//                   size="sm"
//                   onClick={() => setLanguage("en")}
//                   className={`h-7 px-3 text-xs rounded-full transition-all duration-200 ${langClass("en")}`}
//                 >
//                   EN
//                 </Button>

//                 {/* BN */}
//                 <Button
//                   size="sm"
//                   onClick={() => setLanguage("bn")}
//                   className={`h-7 px-3 text-xs rounded-full font-bengali transition-all duration-200 ${langClass("bn")}`}
//                 >
//                   বাং
//                 </Button>

//                 {/* AR */}
//                 <Button
//                   size="sm"
//                   onClick={() => setLanguage("ar")}
//                   className={`h-7 px-3 text-xs rounded-full font-arabic transition-all duration-200 ${langClass("ar")}`}
//                 >
//                   عربي
//                 </Button>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==== MAIN HEADER ==== */}
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">

//           {/* LOGO + TITLE */}
//           <div className="flex items-center gap-5 animate-fade-up">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md border border-border
//                          hover:scale-105 transition-transform duration-300"
//             />

//             <div className={`${isRTL ? "text-right" : "text-left"}`}>
//               <h1
//                 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent
//                            bg-clip-text text-transparent drop-shadow-sm tracking-tight
//                            ${language === "bn" ? "font-bengali" : language === "ar" ? "font-arabic" : ""}`}
//               >
//                 {t("instituteName")}
//               </h1>

//               <p className="text-muted-foreground mt-1 text-sm md:text-base tracking-wide leading-relaxed">
//                 {t("tagline")}
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };


import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { enUS, bn, arSA } from "date-fns/locale";
import logo from '@/assets/logo.png';

export const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Locale mapping by language
  const localeMap: any = {
    en: enUS,
    bn: bn,
    ar: arSA
  };

  // Optional Digit Converters (Bangla + Arabic)
  const convertDigits = (value: string, lang: string) => {
    if (lang === "bn") {
      const banglaNums = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
      return value.replace(/[0-9]/g, (d) => banglaNums[parseInt(d)]);
    }
    if (lang === "ar") {
      const arabicNums = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
      return value.replace(/[0-9]/g, (d) => arabicNums[parseInt(d)]);
    }
    return value;
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const langClass = (lang: string) =>
    language === lang
      ? "bg-primary-foreground/20 text-primary-foreground border border-primary-foreground shadow-sm"
      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-dark/40";

  // Localized formatted values
  const formattedDate = convertDigits(
    format(currentTime, "PPPP", { locale: localeMap[language] }),
    language
  );

  const formattedTime = convertDigits(
    format(currentTime, "hh:mm:ss a", { locale: localeMap[language] }),
    language
  );

  return (
    <header className="bg-card shadow-sm border-b backdrop-blur-md">

      {/* ==== TOP INFO BAR ==== */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">

            {/* DATE & TIME BASED ON ACTIVE LANGUAGE */}
            <div className="flex items-center gap-2 font-medium tracking-wide">
              <Clock className="w-4 h-4 opacity-80" />

              <span>{formattedDate}</span>

              <span className="hidden md:inline">•</span>

              <span className="hidden md:inline">{formattedTime}</span>
            </div>

            {/* ==== LANGUAGE SELECTOR ==== */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 opacity-80" />

              <div className="flex gap-1 bg-primary/30 rounded-full p-1 backdrop-blur-sm border border-white/10 shadow-inner">

                {/* EN */}
                <Button
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className={`h-7 px-3 text-xs rounded-full transition-all duration-200 ${langClass("en")}`}
                >
                  EN
                </Button>

                {/* BN */}
                <Button
                  size="sm"
                  onClick={() => setLanguage("bn")}
                  className={`h-7 px-3 text-xs rounded-full font-bengali transition-all duration-200 ${langClass("bn")}`}
                >
                  বাং
                </Button>

                {/* AR */}
                <Button
                  size="sm"
                  onClick={() => setLanguage("ar")}
                  className={`h-7 px-3 text-xs rounded-full font-arabic transition-all duration-200 ${langClass("ar")}`}
                >
                  عربي
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==== MAIN HEADER ==== */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO + TITLE */}
          <div className="flex items-center gap-5">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md border border-border
                       hover:scale-105 transition-transform duration-300"
            />

            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <h1
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent
                           bg-clip-text text-transparent drop-shadow-sm tracking-tight
                           ${language === "bn" ? "font-bengali" : language === "ar" ? "font-arabic" : ""}`}
              >
                {t("instituteName")}
              </h1>

              <p className="text-muted-foreground mt-1 text-sm md:text-base tracking-wide leading-relaxed">
                {t("tagline")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
