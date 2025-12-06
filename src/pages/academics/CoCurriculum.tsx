import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Palette, MessageCircle, Globe } from "lucide-react";
import studentsImage from "@/assets/students-community.png";
import gallery4 from "@/assets/gallery-4.jpg";

const CoCurriculum: React.FC = () => {
    const { t } = useLanguage();

    const activities = [
        { icon: Trophy, title: "coCurriculumSports", emoji: "⚽", color: "from-red-500/20" },
        { icon: Palette, title: "coCurriculumArts", emoji: "🎨", color: "from-purple-500/20" },
        { icon: MessageCircle, title: "coCurriculumDebate", emoji: "🗣️", color: "from-blue-500/20" },
        { icon: Globe, title: "coCurriculumCultural", emoji: "🎭", color: "from-green-500/20" },
    ];

    return (
        <PageLayout title="coCurriculumTitle" subtitle="coCurriculumSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={studentsImage} alt="Co-Curriculum" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <h2 className="text-4xl font-bold mb-4">Beyond Academics</h2>
                                <p className="text-xl opacity-90">{t("coCurriculumIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    {activities.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                            <div key={index} className={`bg-gradient-to-br ${activity.color} to-transparent rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all`}>
                                <div className="text-6xl mb-4">{activity.emoji}</div>
                                <Icon className="w-10 h-10 text-primary mb-3" />
                                <h3 className="text-2xl font-bold text-primary mb-2">{t(activity.title)}</h3>
                            </div>
                        );
                    })}
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={gallery4} alt="Activities" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Holistic Development</h3>
                            <p className="text-lg opacity-90">Building well-rounded individuals through diverse activities</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default CoCurriculum;
