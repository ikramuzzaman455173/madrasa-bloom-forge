import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

export const PrincipalSection = () => {
  const { t, language } = useLanguage();

  return (
    <Card className="shadow-lg border-t-4 border-t-accent">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardTitle className={`flex items-center gap-3 text-2xl ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          {t('principalMessage')}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Principal Image Placeholder */}
          <div className="w-full md:w-48 h-48 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
            <User className="w-24 h-24 text-primary/30" />
          </div>
          
          {/* Message Content */}
          <div className="flex-1">
            <p className={`text-foreground leading-relaxed ${language === 'bn' ? 'font-bengali text-lg' : language === 'ar' ? 'font-arabic text-lg text-right' : ''}`}>
              {t('principalText')}
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="font-semibold text-primary">Prof. Dr. Muhammad Ahmad</p>
              <p className="text-sm text-muted-foreground">{t('principal')}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
