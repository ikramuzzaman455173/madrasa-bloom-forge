import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Calendar as CalendarIcon, Download, FileText, ChevronRight, User } from 'lucide-react';
import { format } from 'date-fns';
import principalImage from '@/assets/dr-professor.png';

export const Sidebar = () => {
  const { t } = useLanguage();

  // State for expand/collapse
  const [showAllNotices, setShowAllNotices] = React.useState(false);
  const [showAllForms, setShowAllForms] = React.useState(false);

  const notices = [
    { date: '30', month: 'JAN', year: '2025', title: 'ADMISSION GUIDELINES 2026', color: 'bg-green-700' },
    { date: '15', month: 'JAN', year: '2025', title: 'HAFEZ RECRUITMENT NOTICE', color: 'bg-green-700' },
    { date: '29', month: 'DEC', year: '2024', title: 'ADMISSION TEST RESULT TASS (9TH SCIENCE)', color: 'bg-green-700' },
    { date: '20', month: 'DEC', year: '2024', title: 'EXAM SCHEDULE PUBLISHED', color: 'bg-green-700' },
    { date: '12', month: 'DEC', year: '2024', title: 'WINTER VACATION NOTICE', color: 'bg-green-700' },
    { date: '05', month: 'DEC', year: '2024', title: 'ANNUAL SPORTS DAY ANNOUNCEMENT', color: 'bg-green-700' },
  ];

  const forms = [
    'Admission Guidelines-2026',
    'Filled Form from Atfal to Cards',
    'Admission Form Alim',
    'Admission Form Fazil (Pass)',
    'Admission Form Fazil (Hons)',
    'Scholarship Information Form',
    'Admission Form Kamil',
    'Admission Form Kamil (Masters)',
    'Transfer Certificate Form',
    'Character Certificate Form',
  ];

  // Show limited items or all
  const displayedNotices = showAllNotices ? notices : notices.slice(0, 3);
  const displayedForms = showAllForms ? forms : forms.slice(0, 6);

  return (
    <aside className="space-y-6">
      {/* Principal Section */}
      <Card className="shadow-lg border-t-4 border-t-primary overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-4">
            <div className="aspect-[3/4] mb-3 overflow-hidden rounded-lg">
              <img
                src={principalImage}
                alt="Principal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/300x400?text=Principal";
                }}
              />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <User className="w-4 h-4 text-primary" />
                <h3 className="font-bold text-lg text-primary">Principal</h3>
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                Abul Khair Muhammad Abu Bakr Siddique
              </h4>
              <p className="text-xs text-muted-foreground">
                B.A. (Hons), M.A. (University of Dhaka), M.A.M. (1st Class)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notice Board */}
      <Card className="shadow-lg border-t-4 border-t-green-600">
        <CardHeader className="bg-green-600 text-white py-3">
          <CardTitle className="flex items-center gap-2 text-base font-bold">
            <Bell className="w-5 h-5" />
            {t('noticeBoard')}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 pb-3">
          <div className="space-y-2">
            {displayedNotices.map((notice, index) => (
              <div
                key={index}
                className="flex gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className={`${notice.color} text-white rounded-md p-2 flex flex-col items-center justify-center min-w-[50px] shrink-0`}>
                  <div className="text-xl font-bold leading-none">{notice.date}</div>
                  <div className="text-[10px] font-semibold mt-0.5">{notice.month}</div>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {notice.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowAllNotices(!showAllNotices)}
            className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
          >
            {showAllNotices ? 'Show Less' : 'View All Notices'}
            <ChevronRight className={`w-4 h-4 transition-transform ${showAllNotices ? 'rotate-90' : ''}`} />
          </button>
        </CardContent>
      </Card>

      {/* Form Download */}
      <Card className="shadow-lg border-t-4 border-t-accent">
        <CardHeader className="bg-accent text-white py-3">
          <CardTitle className="flex items-center gap-2 text-base font-bold">
            <Download className="w-5 h-5" />
            {t('formDownload')}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 pb-3">
          <div className="space-y-1">
            {displayedForms.map((form, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 transition-colors group text-sm"
              >
                <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
                <span className="text-foreground group-hover:text-primary transition-colors leading-tight">
                  {form}
                </span>
              </a>
            ))}
          </div>
          <button
            onClick={() => setShowAllForms(!showAllForms)}
            className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
          >
            {showAllForms ? 'Show Less' : 'View All Forms'}
            <ChevronRight className={`w-4 h-4 transition-transform ${showAllForms ? 'rotate-90' : ''}`} />
          </button>
        </CardContent>
      </Card>

      {/* Academic Calendar */}
      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardHeader className="bg-primary text-white py-3">
          <CardTitle className="flex items-center gap-2 text-base font-bold">
            <CalendarIcon className="w-5 h-5" />
            {t('academicCalendar')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <AcademicCalendar />
        </CardContent>
      </Card>
    </aside>
  );
};

// Professional Calendar Component
const AcademicCalendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const today = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const calendarDays = [];
  const adjustedFirstDay = (firstDayOfMonth + 1) % 7;
  for (let i = 0; i < adjustedFirstDay; i++) calendarDays.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarDays.push(day);

  const isToday = (day: number | null) => {
    if (!day) return false;
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-accent/90 text-white p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevMonth}
            className="px-3 py-1.5 hover:bg-white/20 rounded-lg transition-all duration-200 font-semibold text-sm active:scale-95"
          >
            ← Prev
          </button>
          <h3 className="font-bold text-base">
            {format(currentDate, 'MMMM yyyy')}
          </h3>
          <button
            onClick={handleNextMonth}
            className="px-3 py-1.5 hover:bg-white/20 rounded-lg transition-all duration-200 font-semibold text-sm active:scale-95"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 bg-gray-50">
        {/* Day Labels */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
            <div key={day} className="text-center text-xs font-bold text-gray-600 py-1.5">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200
                ${!day
                  ? 'bg-transparent'
                  : isToday(day)
                    ? 'bg-primary text-white shadow-lg scale-105 ring-2 ring-primary/30 font-bold'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-primary hover:shadow-md cursor-pointer hover:scale-105 border border-gray-200'
                }
              `}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

