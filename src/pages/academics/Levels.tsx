import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, BookOpen, Award, TrendingUp } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import quranStudyImage from "@/assets/quran-study.png";
import studentsImage from "@/assets/students-community.png";

const EducationLevels: React.FC = () => {
    const { t } = useLanguage();

    const levels = [
        {
            icon: BookOpen,
            title: "levelPrimary",
            description: "levelPrimaryText",
            color: "from-blue-500/20 to-blue-500/5",
            classes: "Class 1-5",
            subjects: ["Quran & Tajweed", "Basic Arabic", "Islamic Studies", "Mathematics", "English", "Bangla", "Science", "Social Studies"],
        },
        {
            icon: GraduationCap,
            title: "levelSecondary",
            description: "levelSecondaryText",
            color: "from-green-500/20 to-green-500/5",
            classes: "Class 6-10",
            subjects: ["Advanced Quran", "Hadith Studies", "Fiqh", "Arabic Literature", "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"],
        },
        {
            icon: Award,
            title: "levelHigher",
            description: "levelHigherText",
            color: "from-purple-500/20 to-purple-500/5",
            classes: "Class 11-12",
            subjects: ["Islamic Theology", "Comparative Religion", "Advanced Fiqh", "Islamic History", "Advanced Sciences", "Specialization Tracks"],
        },
    ];

    return (
        <PageLayout title="levelsTitle" subtitle="levelsSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Hero Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={gallery1}
                            alt="Education Levels"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <TrendingUp className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">
                                    Progressive Education System
                                </h2>
                                <p className="text-xl opacity-90">
                                    {t("levelsIntro")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">
                        {t("levelsIntro")}
                    </p>
                </section>

                {/* Education Levels */}
                <section className="space-y-8">
                    {levels.map((level, index) => {
                        const Icon = level.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${level.color} rounded-xl overflow-hidden shadow-lg border border-primary/20`}
                            >
                                <div className="p-8">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="bg-primary/20 p-4 rounded-lg flex-shrink-0">
                                            <Icon className="w-10 h-10 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className="text-3xl font-bold text-primary">
                                                    {t(level.title)}
                                                </h2>
                                                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    {level.classes}
                                                </span>
                                            </div>
                                            <p className="text-lg text-foreground leading-relaxed">
                                                {t(level.description)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-primary mb-4">
                                            Subjects Taught
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-3">
                                            {level.subjects.map((subject, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 bg-primary/10 rounded-lg p-3"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                    <span className="text-foreground font-medium text-sm">
                                                        {subject}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Quran Study Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={quranStudyImage}
                        alt="Quran Studies"
                        className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Quranic Foundation</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                At every level, Quranic studies and Islamic education form the foundation of our curriculum
                            </p>
                        </div>
                    </div>
                </section>

                {/* Student Life Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={studentsImage}
                        alt="Student Life"
                        className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                        <div className="text-white max-w-2xl">
                            <h3 className="text-3xl font-bold mb-3">Comprehensive Development</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Each level is designed to provide age-appropriate education that develops both Islamic knowledge and modern academic skills
                            </p>
                        </div>
                    </div>
                </section>

                {/* Progression Path */}
                <section className="bg-secondary/50 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Educational Progression
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {["Primary", "Secondary", "Higher Secondary", "Graduation"].map((stage, index) => (
                            <React.Fragment key={index}>
                                <div className="flex-1 text-center">
                                    <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary">{stage}</h3>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block text-primary">
                                        <TrendingUp className="w-8 h-8" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default EducationLevels;
