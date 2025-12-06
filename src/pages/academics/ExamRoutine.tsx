import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Calendar } from "lucide-react";

const ExamRoutine: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="examRoutineTitle" subtitle="examRoutineSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold text-primary">Upcoming Examinations</h2>
                    </div>
                    <p className="text-lg leading-relaxed text-foreground mb-6">{t("examRoutineIntro")}</p>

                    <div className="bg-secondary/30 rounded-lg p-6 text-center">
                        <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
                        <p className="text-lg text-foreground">Examination schedule will be published soon</p>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default ExamRoutine;
