import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const StatsSection = () => {
    const { t } = useLanguage();

    const stats = [
        {
            icon: Users,
            label: t('totalStudents'),
            value: '2,500+',
            color: 'text-blue-600',
            bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
            borderColor: 'border-blue-200',
            hoverBg: 'hover:from-blue-100 hover:to-blue-200'
        },
        {
            icon: GraduationCap,
            label: t('qualifiedTeachers'),
            value: '150+',
            color: 'text-green-600',
            bg: 'bg-gradient-to-br from-green-50 to-green-100',
            borderColor: 'border-green-200',
            hoverBg: 'hover:from-green-100 hover:to-green-200'
        },
        {
            icon: BookOpen,
            label: t('departments'),
            value: '12',
            color: 'text-purple-600',
            bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
            borderColor: 'border-purple-200',
            hoverBg: 'hover:from-purple-100 hover:to-purple-200'
        },
        {
            icon: Award,
            label: t('yearsExperience'),
            value: '30+',
            color: 'text-orange-600',
            bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
            borderColor: 'border-orange-200',
            hoverBg: 'hover:from-orange-100 hover:to-orange-200'
        },
    ];

    return (
        <Card className="shadow-md border-t-4 border-t-primary overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary via-primary to-primary-dark text-white py-4">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    {t('institutionStats')}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 pb-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`
                ${stat.bg} ${stat.hoverBg} ${stat.borderColor}
                rounded-xl p-5 text-center 
                transition-all duration-300 
                hover:shadow-md hover:scale-105 hover:-translate-y-1
                cursor-pointer
                border-2
                group
              `}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/40 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3 relative z-10 group-hover:scale-110 transition-transform`} />
                            </div>
                            <div className={`text-3xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform`}>
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-700">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default StatsSection;
