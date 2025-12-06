import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
    UserPlus,
    BookOpenCheck,
    Calendar,
    Building2,
    Library,
    FileText,
    Grid3x3
} from 'lucide-react';

const QuickAccessSection = () => {
    const { t } = useLanguage();

    const quickLinks = [
        {
            icon: UserPlus,
            label: t('admissionInfo'),
            link: '/admission/procedure',
            color: 'bg-gradient-to-br from-blue-500 to-blue-600',
            hoverColor: 'hover:from-blue-600 hover:to-blue-700',
            shadowColor: 'hover:shadow-blue-500/30'
        },
        {
            icon: BookOpenCheck,
            label: t('academicPrograms'),
            link: '/academics/levels',
            color: 'bg-gradient-to-br from-green-500 to-green-600',
            hoverColor: 'hover:from-green-600 hover:to-green-700',
            shadowColor: 'hover:shadow-green-500/30'
        },
        {
            icon: Calendar,
            label: t('academicCalendar'),
            link: '/academics/levels',
            color: 'bg-gradient-to-br from-purple-500 to-purple-600',
            hoverColor: 'hover:from-purple-600 hover:to-purple-700',
            shadowColor: 'hover:shadow-purple-500/30'
        },
        {
            icon: Building2,
            label: t('ourBranches'),
            link: '/branches/takhssusi',
            color: 'bg-gradient-to-br from-orange-500 to-orange-600',
            hoverColor: 'hover:from-orange-600 hover:to-orange-700',
            shadowColor: 'hover:shadow-orange-500/30'
        },
        {
            icon: Library,
            label: t('libraryResources'),
            link: '/library/intro',
            color: 'bg-gradient-to-br from-pink-500 to-pink-600',
            hoverColor: 'hover:from-pink-600 hover:to-pink-700',
            shadowColor: 'hover:shadow-pink-500/30'
        },
        {
            icon: FileText,
            label: t('publications'),
            link: '/publication/new-bikash',
            color: 'bg-gradient-to-br from-teal-500 to-teal-600',
            hoverColor: 'hover:from-teal-600 hover:to-teal-700',
            shadowColor: 'hover:shadow-teal-500/30'
        },
    ];

    return (
        <Card className="shadow-md border-t-4 border-t-primary overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary via-primary to-primary-dark text-white py-4">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Grid3x3 className="w-6 h-6" />
                    {t('quickAccess')}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 pb-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {quickLinks.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <div className="group cursor-pointer">
                                <div className="bg-white rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 border-gray-200 hover:border-primary/30">
                                    <div className="relative mb-3">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                                        <div className={`
                      ${item.color} ${item.hoverColor} ${item.shadowColor}
                      w-14 h-14 rounded-full flex items-center justify-center mx-auto 
                      group-hover:scale-110 group-hover:shadow-md
                      transition-all duration-300 relative z-10
                    `}>
                                            <item.icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickAccessSection;
