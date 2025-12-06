import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Award, CheckCircle2 } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";
import prayerImage from "@/assets/prayer-spirituality.png";

const HifzBranch: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="brHifzTitle" subtitle="brHifzSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Hifz" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <BookOpen className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Hifz Branch - Quran Memorization</h2>
                                <p className="text-xl opacity-90">{t("brHifzText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("brHifzText")}</p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Hifz Program Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "One-on-one Quran recitation sessions",
                            "Expert Qari instructors with Ijazah",
                            "Systematic memorization methodology",
                            "Regular revision (Muraja'ah) classes",
                            "Tajweed and Qira'at training",
                            "Completion ceremony upon finishing Hifz",
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-4">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <span className="text-foreground font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
                        <Award className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-2xl font-bold text-primary mb-3">Duration</h3>
                        <p className="text-foreground">Typically 3-5 years depending on student's dedication and progress</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
                        <BookOpen className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-2xl font-bold text-primary mb-3">Curriculum</h3>
                        <p className="text-foreground">Complete Quran memorization with Tajweed, Islamic studies, and basic academics</p>
                    </div>
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={prayerImage} alt="Prayer" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Spiritual Development</h3>
                            <p className="text-lg opacity-90">Combining memorization with understanding and practice</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default HifzBranch;
