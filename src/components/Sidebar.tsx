import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

export const Sidebar = () => {
  const { t, language } = useLanguage();
  const today = new Date();

  const notices = [
    { id: 1, title: 'Exam Schedule Published', date: '2025-11-20', isNew: true },
    { id: 2, title: 'Admission Open 2026', date: '2025-11-18', isNew: true },
    { id: 3, title: 'Annual Sports Day', date: '2025-11-15', isNew: false },
    { id: 4, title: 'Parent-Teacher Meeting', date: '2025-11-10', isNew: false },
  ];

  const quickLinks = [
    'Student Portal',
    'Faculty Directory',
    'Library Resources',
    'Online Classes',
    'Academic Calendar',
  ];

  return (
    <aside className="space-y-6">
      {/* Latest Notices */}
      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardHeader className="bg-primary/5">
          <CardTitle className={`flex items-center gap-2 text-lg ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
            <Bell className="w-5 h-5 text-primary" />
            {t('latestNotices')}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="p-3 rounded-lg bg-card hover:bg-muted/50 border border-border transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-foreground flex-1">
                    {notice.title}
                  </p>
                  {notice.isNew && (
                    <Badge variant="default" className="bg-accent text-accent-foreground text-xs shrink-0">
                      New
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{notice.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calendar */}
      <Card className="shadow-lg border-t-4 border-t-accent">
        <CardHeader className="bg-accent/5">
          <CardTitle className={`flex items-center gap-2 text-lg ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
            <Calendar className="w-5 h-5 text-accent" />
            {t('calendar')}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-4 mb-2">
              <div className="text-4xl font-bold">{format(today, 'd')}</div>
              <div className="text-sm uppercase">{format(today, 'MMM')}</div>
            </div>
            <p className="text-sm text-muted-foreground">{format(today, 'EEEE, yyyy')}</p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardHeader className="bg-primary/5">
          <CardTitle className={`flex items-center gap-2 text-lg ${language === 'bn' ? 'font-bengali' : language === 'ar' ? 'font-arabic' : ''}`}>
            <ExternalLink className="w-5 h-5 text-primary" />
            {t('quickLinks')}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block p-2 rounded-md text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
