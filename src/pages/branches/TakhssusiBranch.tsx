import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";
import studentsImage from "@/assets/students-community.png";
import calligraphyImage from "@/assets/islamic-calligraphy.png";

const TakhssusiBranch: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="brTakhssusiTitle" subtitle="brTakhssusiSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Hero Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Takhssusi" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <GraduationCap className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Takhssusi Branch</h2>
                                <p className="text-xl opacity-90">{t("brTakhssusiText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("brTakhssusiText")}</p>
                </section>

                {/* Features */}
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: BookOpen, title: "Advanced Studies", desc: "In-depth Islamic knowledge", emoji: "📖" },
                        { icon: GraduationCap, title: "Expert Teachers", desc: "Renowned scholars", emoji: "👨‍🏫" },
                        { icon: Award, title: "Certification", desc: "Recognized degrees", emoji: "🎓" },
                        { icon: Users, title: "Small Classes", desc: "Personalized attention", emoji: "👥" },
                    ].map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                                <div className="text-5xl mb-3">{feature.emoji}</div>
                                <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                                <p className="text-sm text-foreground">{feature.desc}</p>
                            </div>
                        );
                    })}
                </section>

                {/* Curriculum */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Takhssusi Curriculum</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Tafsir & Quranic Sciences", subjects: ["Advanced Tafsir", "Usul al-Tafsir", "Qiraat"] },
                            { title: "Hadith Studies", subjects: ["Sahih Bukhari", "Sahih Muslim", "Musnad Ahmad"] },
                            { title: "Islamic Jurisprudence", subjects: ["Advanced Fiqh", "Usul al-Fiqh", "Comparative Fiqh"] },
                            { title: "Arabic Literature", subjects: ["Classical Poetry", "Rhetoric", "Advanced Grammar"] },
                        ].map((category, index) => (
                            <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                                <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.subjects.map((subject, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-foreground">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            <span>{subject}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Images */}
                <section className="grid md:grid-cols-2 gap-6">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img src={studentsImage} alt="Students" className="w-full aspect-video object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Dedicated Students</h3>
                                <p className="opacity-90">Pursuing advanced Islamic knowledge</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img src={calligraphyImage} alt="Islamic Arts" className="w-full aspect-video object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Islamic Heritage</h3>
                                <p className="opacity-90">Preserving classical traditions</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default TakhssusiBranch;
