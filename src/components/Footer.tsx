// import { useLanguage } from '@/contexts/LanguageContext';
// import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
// import logo from '@/assets/logo.png';

// export const Footer = () => {
//   const { t, language } = useLanguage();
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gradient-to-br from-primary-dark via-primary to-accent text-primary-foreground mt-12">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* About Section */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="Logo" className="w-12 h-12" />
//               <h3 className={`font-bold text-lg ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
//                 {t('instituteName').split(' ').slice(0, 3).join(' ')}
//               </h3>
//             </div>
//             <p className="text-primary-foreground/80 text-sm leading-relaxed">
//               {t('tagline')}
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className={`font-bold text-lg mb-4 ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
//               {t('quickLinks')}
//             </h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#" className="hover:text-accent-light transition-colors">{t('about')}</a></li>
//               <li><a href="#" className="hover:text-accent-light transition-colors">{t('academics')}</a></li>
//               <li><a href="#" className="hover:text-accent-light transition-colors">{t('admission')}</a></li>
//               <li><a href="#" className="hover:text-accent-light transition-colors">{t('notice')}</a></li>
//               <li><a href="#" className="hover:text-accent-light transition-colors">{t('contact')}</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className={`font-bold text-lg mb-4 ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
//               {t('contactInfo')}
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-2">
//                 <MapPin className="w-4 h-4 mt-1 shrink-0" />
//                 <span>Dhaka, Bangladesh</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 shrink-0" />
//                 <span>+880-XXX-XXXXXX</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 shrink-0" />
//                 <span>info@bstmadrasa.edu.bd</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className={`font-bold text-lg mb-4 ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
//               {t('followUs')}
//             </h3>
//             <div className="flex gap-3">
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
//               >
//                 <Youtube className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/70">
//           <p>© {currentYear} {t('instituteName')}. {t('allRightsReserved')}</p>
//         </div>
//       </div>
//     </footer>
//   );
// };


import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t, language, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const fontClass =
    language === "bn" ? "font-bengali" : language === "ar" ? "font-arabic" : "";
  const textAlign = isRTL ? "text-right" : "text-left";

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white mt-16 select-none overflow-hidden">

      {/* Glowing Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ${fontClass} ${textAlign} animate-fadeIn`}>

          {/* BRAND SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Logo" className="w-14 h-14 drop-shadow-lg" />
              <h3 className="text-xl font-bold tracking-wide text-white/90 leading-snug">
                {t("instituteName")}
              </h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white/90">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a className="hover:text-accent transition" href="#">{t("about")}</a></li>
              <li><a className="hover:text-accent transition" href="#">{t("academics")}</a></li>
              <li><a className="hover:text-accent transition" href="#">{t("admission")}</a></li>
              <li><a className="hover:text-accent transition" href="#">{t("notice")}</a></li>
              <li><a className="hover:text-accent transition" href="#">{t("gallery")}</a></li>
              <li><a className="hover:text-accent transition" href="#">{t("contact")}</a></li>
            </ul>
          </div>

          {/* CONTACT INFORMATION */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white/90">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+880-XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@bstmadrasa.edu.bd</span>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white/90">
              {t("followUs")}
            </h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/10
                             flex items-center justify-center hover:bg-accent hover:text-black transition-all hover:scale-110"
                  href="#"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50 tracking-wide">
            © {currentYear} {t("instituteName")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>

    </footer>
  );
};
