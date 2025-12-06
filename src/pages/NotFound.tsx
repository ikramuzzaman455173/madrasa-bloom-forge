import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, BookOpen, Phone, Mail } from 'lucide-react';

const NotFound = () => {
  const { t, language } = useLanguage();

  const isBN = language === "bn";
  const isAR = language === "ar";
  const fontClass = isBN ? "font-bengali" : isAR ? "font-arabic" : "";
  const textAlignClass = isAR ? "text-right" : "text-left";

  const quickLinks = [
    { icon: Home, label: t('home'), path: '/' },
    { icon: BookOpen, label: t('academics'), path: '/academics/levels' },
    { icon: Search, label: t('admission'), path: '/admission/procedure' },
    { icon: Phone, label: t('contact'), path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-8">
          {/* 404 Illustration */}
          <div className="relative">
            {/* Large 404 Text */}
            <div className="relative">
              <h1 className="text-[150px] md:text-[200px] font-extrabold text-primary/10 leading-none select-none">
                404
              </h1>
              {/* Floating Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  <BookOpen className="w-24 h-24 md:w-32 md:h-32 text-primary relative z-10 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className={`space-y-4 ${fontClass} ${textAlignClass}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('pageNotFoundTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('pageNotFoundMessage')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5 mr-2" />
                {t('backToHome')}
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="px-8 py-6 text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('goBack')}
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8">
            <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              {t('notFoundQuickLinks')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.path}>
                  <div className="group cursor-pointer">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1">
                      <link.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-medium text-foreground group-hover:text-primary">
                        {link.label}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-muted-foreground mb-4">
              {t('needHelp')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm">
              <a
                href="mailto:info@bstm.edu.bd"
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@bstm.edu.bd</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+880-XXX-XXXXXX</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
