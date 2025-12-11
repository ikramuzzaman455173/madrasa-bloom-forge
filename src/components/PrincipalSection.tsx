import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';
import principalImage from '../assets/dr-professor.png';

export const PrincipalSection = () => {
  const { t, language } = useLanguage();

  const isBN = language === 'bn';
  const isAR = language === 'ar';

  const fontClass = isBN ? 'font-bengali' : isAR ? 'font-arabic' : '';
  const textAlignClass = isAR ? 'text-right' : 'text-left';

  return (
    <div className="animate-fadeIn">
      <Card className="
        shadow-xl
        border-t-4 border-t-primary
        rounded-xl
        transition-all duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        bg-card/60
        backdrop-blur-sm
      ">

        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 py-6">
          <CardTitle
            className={`flex items-center gap-3 text-3xl font-semibold ${fontClass} ${textAlignClass}`}
          >
            <div className="
              w-12 h-12
              rounded-full
              bg-gradient-to-br from-primary to-primary/90
              flex items-center justify-center
              shadow-md
              ring-2 ring-primary/30 ring-offset-2
            ">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>

            <span>{t('principalMessage')}</span>
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="pt-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Image */}
            <div className="w-full md:w-48">
              <div className="
                w-48 h-48
                mx-auto md:mx-0
                rounded-xl
                overflow-hidden
                shadow-lg
                border border-border/40
                transition-transform duration-300
                hover:scale-105
              ">
                <img
                  src={principalImage}
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Message */}
            <div className={`flex-1 ${textAlignClass}`}>
              <p className={`text-foreground text-lg leading-relaxed ${fontClass}`}>
                {t('principalText')}
              </p>

              <div className="mt-6 pt-6 border-t border-border/60">
                <p className="font-semibold text-xl text-primary tracking-wide">
                  Mohammad Moin Uddin Sarker Madani
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('principal')}
                </p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};
