import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Target, Award, TrendingUp, Users, Building } from "lucide-react";
import heroImage from "@/assets/hero-bg-1.jpg";
import campusImage from "@/assets/gallery-1.jpg";
import studentsImage from "@/assets/students-community.png";

const InstitutionOverview: React.FC = () => {
    const { t } = useLanguage();

    const stats = [
        { icon: Users, label: "Students", value: "2000+", color: "text-blue-500" },
        { icon: Award, label: "Teachers", value: "150+", color: "text-green-500" },
        { icon: Target, label: "Success Rate", value: "95%", color: "text-purple-500" },
        { icon: TrendingUp, label: "Years", value: "25+", color: "text-orange-500" },
    ];

    return (
        <PageLayout title="overviewTitle" subtitle="overviewSubtitle">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Hero Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={heroImage}
                            alt="Campus View"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center">
                            <div className="text-center max-w-3xl px-8 text-white">
                                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/10 mb-6 backdrop-blur-sm animate-pulse">
                                    <Building className="w-16 h-16" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Bangladesh Science & Technology Madrasa
                                </h2>
                                <p className="text-lg md:text-xl leading-relaxed">
                                    {t("overviewIntro")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg">
                            <BookOpen className="w-12 h-12 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-lg leading-relaxed text-foreground">
                                {t("overviewIntro")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Statistics Grid with Enhanced Visual */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-3">
                                    <Icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </section>

                {/* History Section with Real Image */}
                <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                            <BookOpen className="w-8 h-8" />
                            {t("overviewHistory")}
                        </h2>
                        <p className="text-lg leading-relaxed text-foreground">
                            {t("overviewHistoryText")}
                        </p>
                    </div>
                    <div className="order-1 md:order-2 aspect-video rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={campusImage}
                            alt="Historical Campus"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </section>

                {/* Vision Section */}
                <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <Target className="w-10 h-10 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-primary mb-4">
                                {t("overviewVision")}
                            </h2>
                            <p className="text-lg leading-relaxed text-foreground">
                                {t("overviewVisionText")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Achievements with Visual Cards */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                        <Award className="w-8 h-8" />
                        {t("overviewAchievements")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: Award, text: "Recognized as a top educational institution" },
                            { icon: TrendingUp, text: "Excellent academic results consistently" },
                            { icon: Building, text: "State-of-the-art facilities and infrastructure" },
                            { icon: Users, text: "Strong community engagement programs" },
                            { icon: Target, text: "Partnerships with international institutions" },
                            { icon: BookOpen, text: "Comprehensive Islamic and modern curriculum" },
                        ].map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg hover:from-primary/10 transition-colors border-l-4 border-primary"
                                >
                                    <div className="flex-shrink-0 bg-primary/10 p-2 rounded-lg">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <span className="text-lg text-foreground pt-1">{achievement.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Students Community Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={studentsImage}
                        alt="Students Community"
                        className="w-full aspect-[21/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Vibrant Student Community</h3>
                            <p className="text-lg opacity-90">
                                Join thousands of students in their journey of Islamic and modern education
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default InstitutionOverview;
