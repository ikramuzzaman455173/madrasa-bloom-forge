import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, BookOpen, Award } from "lucide-react";
import studentsImage from "@/assets/students-community.png";
import libraryImage from "@/assets/islamic-library.png";

const WomenBranch: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="brWomenTitle" subtitle="brWomenSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={studentsImage} alt="Women Branch" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Users className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Women's Branch</h2>
                                <p className="text-xl opacity-90">{t("brWomenText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("brWomenText")}</p>
                </section>

                <section className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: BookOpen, title: "Islamic Education", desc: "Comprehensive Quran & Hadith", emoji: "📖" },
                        { icon: Award, title: "Modern Curriculum", desc: "Science & Arts programs", emoji: "🎓" },
                        { icon: Users, title: "Experienced Faculty", desc: "Female teachers & mentors", emoji: "👩‍🏫" },
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

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={libraryImage} alt="Library" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Dedicated Facilities</h3>
                            <p className="text-lg opacity-90">Separate campus with modern amenities for female students</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default WomenBranch;
