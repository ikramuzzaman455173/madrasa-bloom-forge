import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, BookOpen } from "lucide-react";

const ClassRoutine: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="classRoutineTitle" subtitle="classRoutineSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold text-primary">Daily Class Schedule</h2>
                    </div>
                    <p className="text-lg leading-relaxed text-foreground mb-6">{t("classRoutineIntro")}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { period: "8:00 AM - 9:00 AM", subject: "Islamic Studies" },
                            { period: "9:00 AM - 10:00 AM", subject: "Mathematics" },
                            { period: "10:00 AM - 10:15 AM", subject: "Break" },
                            { period: "10:15 AM - 11:15 AM", subject: "Science" },
                            { period: "11:15 AM - 12:15 PM", subject: "Languages" },
                            { period: "12:15 PM - 1:00 PM", subject: "Lunch Break" },
                        ].map((slot, index) => (
                            <div key={index} className="flex items-center justify-between bg-secondary/30 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <span className="font-semibold text-foreground">{slot.period}</span>
                                </div>
                                <span className="text-muted-foreground">{slot.subject}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default ClassRoutine;
