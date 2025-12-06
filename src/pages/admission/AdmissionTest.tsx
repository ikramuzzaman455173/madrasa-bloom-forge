import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, BookOpen, Calculator, Clock, CheckCircle2 } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";
import gallery3 from "@/assets/gallery-3.jpg";

const AdmissionTest: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="admissionTestTitle" subtitle="admissionTestSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Admission Test" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileText className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Admission Test</h2>
                                <p className="text-xl opacity-90">{t("admissionTestIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("admissionTestIntro")}</p>
                </section>

                {/* Test Subjects */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">{t("testSubjects")}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: BookOpen, subject: "Islamic Studies", marks: "50", emoji: "📖" },
                            { icon: Calculator, subject: "Mathematics", marks: "50", emoji: "🔢" },
                            { icon: FileText, subject: "General Knowledge", marks: "50", emoji: "📝" },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                                    <div className="text-5xl mb-3">{item.emoji}</div>
                                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                    <h3 className="text-xl font-bold text-primary mb-2">{item.subject}</h3>
                                    <p className="text-2xl font-bold text-foreground">{item.marks} Marks</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Test Format */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                            <FileText className="w-6 h-6" />
                            {t("testFormat")}
                        </h3>
                        <ul className="space-y-2">
                            {["Multiple Choice Questions (MCQ)", "Short Answer Questions", "Practical Islamic Recitation"].map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-foreground">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                            <Clock className="w-6 h-6" />
                            {t("testDuration")}
                        </h3>
                        <p className="text-3xl font-bold text-primary mb-2">2 Hours</p>
                        <p className="text-foreground">Total examination time including all subjects</p>
                    </div>
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={gallery3} alt="Test Preparation" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">{t("testPreparation")}</h3 >
                            <p className="text-lg opacity-90">Study our curriculum and practice sample questions</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default AdmissionTest;
