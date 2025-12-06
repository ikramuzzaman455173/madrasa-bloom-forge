import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";

const AcademicCalendar: React.FC = () => {
    const { t } = useLanguage();

    const months = [
        { month: "January", events: ["New session begins", "Registration"] },
        { month: "March", events: ["First term exam"] },
        { month: "June", events: ["Mid-year vacation"] },
        { month: "September", events: ["Second term exam"] },
        { month: "December", events: ["Final exam", "Annual prize distribution"] },
    ];

    return (
        <PageLayout title="pubAcademicCalendarTitle" subtitle="pubAcademicCalendarSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Calendar" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Calendar className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Academic Calendar 2024</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    {months.map((item, index) => (
                        <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                            <h3 className="text-2xl font-bold text-primary mb-3">{item.month}</h3>
                            <ul className="space-y-2">
                                {item.events.map((event, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-foreground">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span>{event}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default AcademicCalendar;
