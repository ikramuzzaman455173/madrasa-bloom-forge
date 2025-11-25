import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import logo from '@/assets/logo.png';

export const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-card shadow-md">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{format(currentTime, 'EEEE, MMMM dd, yyyy')}</span>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">{format(currentTime, 'hh:mm:ss a')}</span>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <div className="flex gap-1">
                <Button
                  variant={language === 'en' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="h-7 px-2 text-xs text-primary-foreground hover:text-primary-foreground hover:bg-primary-dark"
                >
                  EN
                </Button>
                <Button
                  variant={language === 'bn' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('bn')}
                  className="h-7 px-2 text-xs text-primary-foreground hover:text-primary-foreground hover:bg-primary-dark font-bengali"
                >
                  বাং
                </Button>
                <Button
                  variant={language === 'ar' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('ar')}
                  className="h-7 px-2 text-xs text-primary-foreground hover:text-primary-foreground hover:bg-primary-dark font-arabic"
                >
                  عربي
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-20 h-20 md:w-24 md:h-24" />
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h1 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
                {t('instituteName')}
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                {t('tagline')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
