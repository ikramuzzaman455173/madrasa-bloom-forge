import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-accent text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <h3 className={`font-bold text-lg ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
                {t('instituteName').split(' ').slice(0, 3).join(' ')}
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent-light transition-colors">{t('about')}</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">{t('academics')}</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">{t('admission')}</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">{t('notice')}</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
              {t('contactInfo')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+880-XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@bstmadrasa.edu.bd</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
              {t('followUs')}
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent-light flex items-center justify-center transition-all hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/70">
          <p>© {currentYear} {t('instituteName')}. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};
