import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin, Home, BookOpen, GraduationCap } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t, language, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const fontClass = language === "bn" ? "font-bengali" : language === "ar" ? "font-arabic" : "";

  const branches = [
    { icon: Home, label: t("footerResidential") },
    { icon: BookOpen, label: t("footerNonResidential") },
    { icon: GraduationCap, label: t("footerDayCare") },
    { icon: BookOpen, label: t("footerHifz") },
    { icon: GraduationCap, label: t("footerPageKG") },
    { icon: BookOpen, label: t("footerGrade1to3") },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${fontClass}`}>

          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-12 h-12 drop-shadow-lg" />
              <h3 className="text-lg font-bold text-white">
                {t("instituteName")}
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t("footerDescription")}
            </p>
            <div className="text-white/60 text-sm space-y-1">
              <p className="font-semibold text-white/80">{t("footerFullName")}</p>
              <p>{t("footerAddress")}</p>
            </div>
          </div>

          {/* Our Branches - Card Style */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t("footerBranches")}</h3>
            <div className="grid grid-cols-2 gap-2">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <branch.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-xs text-white/80 group-hover:text-white transition-colors">
                      {branch.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t("quickLinks")}</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="/about/overview" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="/academics/levels" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("academics")}
                </a>
              </li>
              <li>
                <a href="/admission/procedure" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("admission")}
                </a>
              </li>
              <li>
                <a href="/residential/hostel-intro" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("residential")}
                </a>
              </li>
              <li>
                <a href="/publication/new-bikash" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("publication")}
                </a>
              </li>
              <li>
                <a href="/library/intro" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("library")}
                </a>
              </li>
              <li>
                <a href="/branches/takhssusi" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("branches")}
                </a>
              </li>
              <li>
                <a href="/media/photos" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("media")}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t("contactUs")}</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-xs">{t("footerAddress")}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs">+01404-311522</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs">info@bstmadrasa.edu.bd</span>
              </li>
            </ul>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white/90">{t("followUs")}</h4>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Youtube, href: "#" }
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p className={fontClass}>
              © {currentYear} {t("instituteName")}. {t("allRightsReserved")}
            </p>
            <p className="text-xs">
              Developed with ❤️ by <span className="text-accent">BSTM Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

