import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Globe, Code, Languages } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";
import gallery3 from "@/assets/gallery-3.jpg";
import calligraphyImage from "@/assets/islamic-calligraphy.png";

const Curriculum: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="curriculumTitle" subtitle="curriculumSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Hero Image */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Curriculum" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <BookOpen className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Integrated Curriculum</h2>
                                <p className="text-xl opacity-90">{t("curriculumIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Islamic Studies */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-8 border border-primary/20">
                        <div className="flex items-center gap-4 mb-4">
                            <BookOpen className="w-10 h-10 text-primary" />
                            <h2 className="text-3xl font-bold text-primary">{t("curriculumIslamic")}</h2>
                        </div>
                        <p className="text-lg text-foreground mb-6">{t("curriculumIslamicText")}</p>
                        <ul className="space-y-2">
                            {["Quran Memorization & Recitation", "Hadith Studies", "Islamic Jurisprudence (Fiqh)", "Arabic Language", "Islamic History"].map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-foreground">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-8 border border-primary/20">
                        <div className="flex items-center gap-4 mb-4">
                            <Code className="w-10 h-10 text-primary" />
                            <h2 className="text-3xl font-bold text-primary">{t("curriculumModern")}</h2>
                        </div>
                        <p className="text-lg text-foreground mb-6">{t("curriculumModernText")}</p>
                        <ul className="space-y-2">
                            {["Mathematics & Statistics", "Physics, Chemistry, Biology", "Computer Science & IT", "English & Bangla Literature", "Social Studies & Economics"].map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-foreground">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Science Lab Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={gallery3} alt="Science Education" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Modern Scientific Education</h3>
                            <p className="text-lg opacity-90">Hands-on learning in state-of-the-art laboratories</p>
                        </div>
                    </div>
                </section>

                {/* Islamic Calligraphy Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={calligraphyImage} alt="Islamic Arts" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                        <div className="text-white max-w-2xl">
                            <h3 className="text-3xl font-bold mb-3">Cultural Heritage</h3>
                            <p className="text-lg opacity-90">Preserving Islamic arts, culture, and traditions</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Curriculum;
