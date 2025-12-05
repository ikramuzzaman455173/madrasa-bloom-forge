import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, CheckCircle2, Users, Globe, Lightbulb } from "lucide-react";
import prayerImage from "@/assets/prayer-spirituality.png";
import studentsImage from "@/assets/students-community.png";
import calligraphyImage from "@/assets/islamic-calligraphy.png";

const MissionPage: React.FC = () => {
    const { t } = useLanguage();

    const objectives = [
        {
            icon: CheckCircle2,
            title: "objective1",
            description: "objective1Text",
        },
        {
            icon: Users,
            title: "objective2",
            description: "objective2Text",
        },
        {
            icon: Globe,
            title: "objective3",
            description: "objective3Text",
        },
        {
            icon: Target,
            title: "objective4",
            description: "objective4Text",
        },
        {
            icon: Lightbulb,
            title: "objective5",
            description: "objective5Text",
        },
    ];

    return (
        <PageLayout title="missionTitle" subtitle="missionSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Hero Image with Mission */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={prayerImage}
                            alt="Our Mission"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/90 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Target className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">
                                    Our Mission & Vision
                                </h2>
                                <p className="text-xl opacity-90 italic">
                                    "{t("missionStatementText")}"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-xl p-10 text-white shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Target className="w-10 h-10" />
                        {t("missionStatement")}
                    </h2>
                    <p className="text-xl leading-relaxed italic border-l-4 border-white/50 pl-6">
                        "{t("missionStatementText")}"
                    </p>
                </section>

                {/* Core Objectives */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        {t("objectivesTitle")}
                    </h2>

                    <div className="space-y-6">
                        {objectives.map((objective, index) => {
                            const Icon = objective.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-primary mb-2">
                                                {index + 1}. {t(objective.title)}
                                            </h3>
                                            <p className="text-foreground leading-relaxed">
                                                {t(objective.description)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Student Community Image */}
                <section className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={studentsImage}
                        alt="Student Community"
                        className="w-full aspect-[21/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Building Future Leaders</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our mission focuses on developing well-rounded individuals who excel in both Islamic knowledge and modern skills
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="bg-secondary/50 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            "Integrity",
                            "Excellence",
                            "Compassion",
                            "Innovation",
                            "Diversity",
                            "Responsibility",
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center font-semibold text-primary hover:scale-105 transition-transform"
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Islamic Heritage Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={calligraphyImage}
                        alt="Islamic Heritage"
                        className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                        <div className="text-white max-w-2xl">
                            <h3 className="text-3xl font-bold mb-3">Preserving Islamic Heritage</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                While embracing modern education, we remain committed to preserving and promoting Islamic arts, culture, and values
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default MissionPage;
