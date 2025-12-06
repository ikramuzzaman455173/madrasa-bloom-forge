import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, CheckCircle2 } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";

const ExamMethod: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="examMethodTitle" subtitle="examMethodSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Examination" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileText className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Examination System</h2>
                                <p className="text-xl opacity-90">{t("examMethodIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "examInternal", desc: "Regular class tests and quizzes" },
                        { title: "examTerminal", desc: "Mid-term and final examinations" },
                        { title: "examBoard", desc: "SSC and HSC board examinations" },
                    ].map((exam, index) => (
                        <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                            <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
                            <h3 className="text-xl font-bold text-primary mb-2">{t(exam.title)}</h3>
                            <p className="text-foreground">{exam.desc}</p>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default ExamMethod;
